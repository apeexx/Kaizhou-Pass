const test = require("node:test");
const assert = require("node:assert/strict");

const { splitValues, nextCycleIndex, getCycleState, maskPhone, detectAuthScenario } = require("./common.js");

test("splitValues trims pipe-separated entries", function () {
  assert.deepEqual(splitValues(" 待接单 | 备餐中 | 已完成 "), ["待接单", "备餐中", "已完成"]);
});

test("nextCycleIndex loops back to the first state", function () {
  assert.equal(nextCycleIndex(3, 0), 1);
  assert.equal(nextCycleIndex(3, 1), 2);
  assert.equal(nextCycleIndex(3, 2), 0);
});

test("getCycleState returns current and next state details", function () {
  assert.deepEqual(getCycleState("取货中|配送中|已送达", 2), {
    index: 2,
    nextIndex: 0,
    current: "已送达",
    next: "取货中",
    values: ["取货中", "配送中", "已送达"]
  });
});

test("maskPhone hides middle digits", function () {
  assert.equal(maskPhone("13800001234"), "138****1234");
});

test("detectAuthScenario maps demo phone suffixes", function () {
  assert.equal(detectAuthScenario("merchant", "13800000001"), "approved");
  assert.equal(detectAuthScenario("merchant", "13800000002"), "reviewing");
  assert.equal(detectAuthScenario("merchant", "13800000003"), "apply");
  assert.equal(detectAuthScenario("rider", "13900000011"), "approved");
  assert.equal(detectAuthScenario("rider", "13900000022"), "reviewing");
});
