(function attachShared(global) {
  "use strict";

  var STORAGE_PREFIX = "kaizhou-demo-state:";
  var AUTH_SCENARIOS = {
    merchant: {
      approved: {
        label: "已认证开店",
        note: "门店资料已审核通过，可直接进入订单中心和商品管理。",
        route: "./app/home.html",
        toast: "检测到已认证门店，正在进入订单中心。"
      },
      reviewing: {
        label: "资料审核中",
        note: "平台正在审核门店资料，请先查看审核进度和补充提醒。",
        route: "./onboarding/reviewing.html",
        toast: "检测到当前门店还在审核中，正在打开审核进度。"
      },
      apply: {
        label: "未完成入驻",
        note: "当前手机号还没有商家档案，请先提交门店资料与证照。",
        route: "./onboarding/apply.html",
        toast: "当前手机号还未入驻，正在进入资料填写页。"
      }
    },
    rider: {
      approved: {
        label: "已认证骑手",
        note: "账号已完成骑手审核，可直接进入接单与配送页面。",
        route: "./app/home.html",
        toast: "检测到已认证骑手账号，正在进入接单首页。"
      },
      reviewing: {
        label: "骑手审核中",
        note: "资料已提交，平台正在复核身份和配送区域。",
        route: "./onboarding/reviewing.html",
        toast: "检测到当前骑手资料还在审核中，正在打开审核进度。"
      },
      apply: {
        label: "未完成报名",
        note: "当前手机号还没有骑手档案，请先提交身份与车辆资料。",
        route: "./onboarding/apply.html",
        toast: "当前手机号还未报名骑手，正在进入资料填写页。"
      }
    }
  };
  var ICON_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <symbol id="icon-store" viewBox="0 0 24 24">
    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
  </symbol>
  <symbol id="icon-orders" viewBox="0 0 24 24">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </symbol>
  <symbol id="icon-bowl" viewBox="0 0 24 24">
    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
    <path d="M7 21h10" />
    <path d="M19.5 12 22 6" />
    <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
    <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
    <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
  </symbol>
  <symbol id="icon-user" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </symbol>
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </symbol>
  <symbol id="icon-rider" viewBox="0 0 24 24">
    <circle cx="18.5" cy="17.5" r="3.5" />
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="15" cy="5" r="1" />
    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
  </symbol>
  <symbol id="icon-wallet" viewBox="0 0 24 24">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </symbol>
  <symbol id="icon-box" viewBox="0 0 24 24">
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
    <path d="M12 22V12" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <path d="m7.5 4.27 9 5.15" />
  </symbol>
  <symbol id="icon-camera" viewBox="0 0 24 24">
    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
    <circle cx="12" cy="13" r="3" />
  </symbol>
  <symbol id="icon-chart" viewBox="0 0 24 24">
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </symbol>
  <symbol id="icon-check" viewBox="0 0 24 24">
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </symbol>
  <symbol id="icon-clock" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6h4" />
  </symbol>
  <symbol id="icon-location" viewBox="0 0 24 24">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </symbol>
  <symbol id="icon-message" viewBox="0 0 24 24">
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    <path d="M8 12h.01" />
    <path d="M12 12h.01" />
    <path d="M16 12h.01" />
  </symbol>
  <symbol id="icon-phone" viewBox="0 0 24 24">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </symbol>
  <symbol id="icon-refresh" viewBox="0 0 24 24">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </symbol>
  <symbol id="icon-shield" viewBox="0 0 24 24">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </symbol>
  <symbol id="icon-id-card" viewBox="0 0 24 24">
    <path d="M16 10h2" />
    <path d="M16 14h2" />
    <path d="M6.17 15a3 3 0 0 1 5.66 0" />
    <circle cx="9" cy="11" r="2" />
    <rect x="2" y="5" width="20" height="14" rx="2" />
  </symbol>
  <symbol id="icon-star" viewBox="0 0 24 24">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </symbol>
  <symbol id="icon-flash" viewBox="0 0 24 24">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </symbol>
  <symbol id="icon-route" viewBox="0 0 24 24">
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </symbol>
</svg>
`;

  function splitValues(raw) {
    if (!raw) {
      return [];
    }

    return String(raw)
      .split("|")
      .map(function trimValue(value) {
        return value.trim();
      })
      .filter(Boolean);
  }

  function toSafeIndex(length, currentIndex) {
    if (!length) {
      return 0;
    }

    var parsed = Number.parseInt(currentIndex, 10);

    if (Number.isNaN(parsed)) {
      return 0;
    }

    return ((parsed % length) + length) % length;
  }

  function nextCycleIndex(length, currentIndex) {
    if (!length) {
      return 0;
    }

    return (toSafeIndex(length, currentIndex) + 1) % length;
  }

  function getCycleState(rawValues, currentIndex) {
    var values = Array.isArray(rawValues) ? rawValues.filter(Boolean) : splitValues(rawValues);

    if (!values.length) {
      return {
        index: 0,
        nextIndex: 0,
        current: "",
        next: "",
        values: []
      };
    }

    var index = toSafeIndex(values.length, currentIndex);
    var nextIndex = nextCycleIndex(values.length, index);

    return {
      index: index,
      nextIndex: nextIndex,
      current: values[index],
      next: values[nextIndex],
      values: values
    };
  }

  function normalizePhone(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function maskPhone(value) {
    var phone = normalizePhone(value);

    if (phone.length < 7) {
      return phone;
    }

    return phone.slice(0, 3) + "****" + phone.slice(-4);
  }

  function detectAuthScenario(app, phone) {
    var normalized = normalizePhone(phone);
    var suffix = normalized.slice(-2);

    if (suffix === "01" || suffix === "11") {
      return "approved";
    }

    if (suffix === "02" || suffix === "22") {
      return "reviewing";
    }

    if (AUTH_SCENARIOS[app]) {
      return "apply";
    }

    return "apply";
  }

  function getDefaultPhone(app, scenario) {
    if (app === "merchant") {
      if (scenario === "approved") {
        return "13800000001";
      }

      if (scenario === "reviewing") {
        return "13800000002";
      }

      return "13800000003";
    }

    if (scenario === "approved") {
      return "13900000001";
    }

    if (scenario === "reviewing") {
      return "13900000002";
    }

    return "13900000003";
  }

  function getStorageKey(app) {
    return STORAGE_PREFIX + app;
  }

  function readStorage(app) {
    if (!global.localStorage || !app) {
      return null;
    }

    try {
      var raw = global.localStorage.getItem(getStorageKey(app));
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function writeStorage(app, state) {
    if (!global.localStorage || !app || !state) {
      return state;
    }

    try {
      global.localStorage.setItem(getStorageKey(app), JSON.stringify(state));
    } catch (error) {
      return state;
    }

    return state;
  }

  function clearStorage(app) {
    if (!global.localStorage || !app) {
      return;
    }

    try {
      global.localStorage.removeItem(getStorageKey(app));
    } catch (error) {
      return;
    }
  }

  function buildMerchantState(phone, scenario) {
    var normalized = normalizePhone(phone) || getDefaultPhone("merchant", scenario);
    var base = {
      app: "merchant",
      scenario: scenario,
      phoneFull: normalized,
      phoneMasked: maskPhone(normalized),
      statusLabel: AUTH_SCENARIOS.merchant[scenario].label,
      statusNote: AUTH_SCENARIOS.merchant[scenario].note,
      city: "重庆市开州区",
      category: "川渝家常菜",
      businessHours: "09:00 - 22:30",
      settleAccount: "重庆农村商业银行",
      settleTail: "6214",
      supportPhone: "400-889-7788"
    };

    if (scenario === "approved") {
      base.displayName = "开州江湖小馆";
      base.contactName = "刘春梅";
      base.summary = "今日已开门接单，重点关注待接单和备餐超时提醒。";
      base.storeAddress = "文峰街道盛山路 188 号";
      base.coverNote = "资料已认证，可直接进入订单中心。";
      return base;
    }

    if (scenario === "reviewing") {
      base.displayName = "滨湖家常菜";
      base.contactName = "周磊";
      base.summary = "资料已提交，等待平台完成营业资质和门店环境审核。";
      base.storeAddress = "汉丰街道滨湖北路 56 号";
      base.coverNote = "审核中账号会先看到进度页和补充提醒。";
      return base;
    }

    base.displayName = "待创建门店";
    base.contactName = "待填写";
    base.summary = "当前手机号还没有商家档案，请先完成门店资料、证照和门头照片上传。";
    base.storeAddress = "开州城区待补充";
    base.coverNote = "未入驻账号会先进入资料填写流程。";
    return base;
  }

  function buildRiderState(phone, scenario) {
    var normalized = normalizePhone(phone) || getDefaultPhone("rider", scenario);
    var base = {
      app: "rider",
      scenario: scenario,
      phoneFull: normalized,
      phoneMasked: maskPhone(normalized),
      statusLabel: AUTH_SCENARIOS.rider[scenario].label,
      statusNote: AUTH_SCENARIOS.rider[scenario].note,
      city: "重庆市开州区",
      zone: "开州老城配送片区",
      vehicle: "两轮电动车",
      supportPhone: "400-889-2299"
    };

    if (scenario === "approved") {
      base.displayName = "陈师傅";
      base.contactName = "陈宇";
      base.summary = "当前账号已完成骑手认证，可以直接进入接单、配送和收入页面。";
      base.coverNote = "认证通过后会直接进入接单首页。";
      return base;
    }

    if (scenario === "reviewing") {
      base.displayName = "王师傅";
      base.contactName = "王亮";
      base.summary = "资料已提交，等待平台审核身份证明、车辆信息和配送区域。";
      base.coverNote = "审核中账号会先看到进度和培训提醒。";
      return base;
    }

    base.displayName = "待认证骑手";
    base.contactName = "待填写";
    base.summary = "当前手机号还没有骑手档案，请先完成身份、车辆和服务片区资料提交。";
    base.coverNote = "未报名账号会先进入资料填写流程。";
    return base;
  }

  function buildDemoState(app, phone, scenario) {
    var nextScenario = scenario || detectAuthScenario(app, phone);

    if (app === "merchant") {
      return buildMerchantState(phone, nextScenario);
    }

    return buildRiderState(phone, nextScenario);
  }

  function syncPageState(doc) {
    var body = doc.body;
    var app = body.dataset.demoApp;
    var scenario = body.dataset.demoScenario;
    var state;

    if (!app) {
      return null;
    }

    state = readStorage(app);

    if (!state) {
      state = buildDemoState(app, getDefaultPhone(app, scenario || "apply"), scenario || "apply");
      writeStorage(app, state);
    } else if (scenario && state.scenario !== scenario) {
      state = buildDemoState(app, state.phoneFull, scenario);
      writeStorage(app, state);
    }

    return state;
  }

  function resolveBinding(source, path) {
    if (!source || !path) {
      return "";
    }

    return path.split(".").reduce(function pickValue(current, key) {
      if (current && Object.prototype.hasOwnProperty.call(current, key)) {
        return current[key];
      }

      return "";
    }, source);
  }

  function applyBindings(doc, state) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-bind]"), function applyText(node) {
      var value = resolveBinding(state, node.dataset.bind);

      if (value !== "") {
        node.textContent = value;
      }
    });

    Array.prototype.forEach.call(doc.querySelectorAll("[data-bind-value]"), function applyValue(node) {
      var value = resolveBinding(state, node.dataset.bindValue);

      if (value !== "") {
        node.value = value;
      }
    });
  }

  function applyCycleState(control) {
    var state = getCycleState(control.dataset.cycleValues, control.dataset.cycleIndex);
    var notes = splitValues(control.dataset.cycleNotes);
    var classes = splitValues(control.dataset.cycleClasses);
    var valueNode = control.querySelector("[data-cycle-value]");
    var noteNode = control.querySelector("[data-cycle-note]");
    var button = control.querySelector("[data-cycle-trigger]");

    control.dataset.cycleIndex = String(state.index);

    if (valueNode) {
      if (!valueNode.dataset.baseClass) {
        valueNode.dataset.baseClass = valueNode.className;
      }

      valueNode.textContent = state.current;
      valueNode.className = valueNode.dataset.baseClass;

      if (classes[state.index]) {
        valueNode.classList.add(classes[state.index]);
      }
    }

    if (noteNode) {
      noteNode.textContent = notes[state.index] || "";
    }

    if (button) {
      var prefix = button.dataset.cyclePrefix || control.dataset.cyclePrefix || "切换为";
      button.textContent = prefix + state.next;
    }
  }

  function initCycleControls(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-cycle-control]"), function initOne(control) {
      applyCycleState(control);

      control.addEventListener("click", function handleCycleClick(event) {
        var trigger = event.target.closest("[data-cycle-trigger]");

        if (!trigger) {
          return;
        }

        var state = getCycleState(control.dataset.cycleValues, control.dataset.cycleIndex);
        control.dataset.cycleIndex = String(state.nextIndex);
        applyCycleState(control);
      });
    });
  }

  function activateChoice(group, selectedValue) {
    Array.prototype.forEach.call(group.querySelectorAll("[data-choice-item]"), function updateItem(item) {
      var isActive = item.dataset.choiceValue === selectedValue;

      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    group.dataset.choiceCurrent = selectedValue;
  }

  function initChoiceGroups(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-choice-group]"), function initGroup(group) {
      var items = group.querySelectorAll("[data-choice-item]");
      var initial = group.dataset.choiceInitial;

      if (!initial && items[0]) {
        initial = items[0].dataset.choiceValue;
      }

      if (initial) {
        activateChoice(group, initial);
      }

      group.addEventListener("click", function handleChoiceClick(event) {
        var item = event.target.closest("[data-choice-item]");

        if (!item || !group.contains(item)) {
          return;
        }

        activateChoice(group, item.dataset.choiceValue);
      });
    });
  }

  function getToastStack(doc) {
    var stack = doc.querySelector("[data-toast-stack]");

    if (!stack) {
      stack = doc.createElement("div");
      stack.className = "toast-stack";
      stack.setAttribute("data-toast-stack", "true");
      doc.body.appendChild(stack);
    }

    return stack;
  }

  function showToast(message) {
    if (!global.document || !message) {
      return;
    }

    var stack = getToastStack(global.document);
    var toast = global.document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    stack.appendChild(toast);

    global.setTimeout(function removeToast() {
      toast.remove();
    }, 1800);
  }

  function initFakeSubmits(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-submit-next]"), function initSubmit(button) {
      button.addEventListener("click", function handleSubmitClick(event) {
        var nextUrl = button.dataset.submitNext;
        var app = button.dataset.demoApp || doc.body.dataset.demoApp;
        var scenario = button.dataset.submitScenario;

        event.preventDefault();

        if (app && scenario) {
          var previousState = readStorage(app);
          var phone = previousState && previousState.phoneFull ? previousState.phoneFull : getDefaultPhone(app, scenario);
          writeStorage(app, buildDemoState(app, phone, scenario));
        }

        showToast(button.dataset.submitMessage || "操作已完成");

        if (nextUrl) {
          global.setTimeout(function goNext() {
            global.location.href = nextUrl;
          }, 520);
        }
      });
    });
  }

  function initMediaFallbacks(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-media-fallback]"), function initMedia(media) {
      var image = media.querySelector("img");

      if (!image) {
        media.classList.add("is-fallback");
        media.classList.remove("has-media");
        return;
      }

      function markLoaded() {
        media.classList.remove("is-fallback");
        media.classList.add("has-media");
      }

      function markError() {
        media.classList.remove("has-media");
        media.classList.add("is-fallback");
      }

      if (image.complete) {
        if (image.naturalWidth > 0) {
          markLoaded();
        } else {
          markError();
        }

        return;
      }

      image.addEventListener("load", markLoaded, { once: true });
      image.addEventListener("error", markError, { once: true });
    });
  }

  function setAgreementState(control, checked) {
    control.dataset.checked = checked ? "true" : "false";
    control.classList.toggle("is-checked", checked);
    control.setAttribute("aria-checked", checked ? "true" : "false");
  }

  function initAgreementControls(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-agree-toggle]"), function initToggle(control) {
      setAgreementState(control, control.dataset.checked === "true");

      control.addEventListener("click", function handleAgreementClick(event) {
        event.preventDefault();
        setAgreementState(control, control.dataset.checked !== "true");
      });
    });
  }

  function startDemoCountdown(button, seconds) {
    var remaining = seconds;
    var label = button.dataset.defaultLabel || button.textContent;

    button.dataset.defaultLabel = label;
    button.disabled = true;
    button.textContent = remaining + "s";

    var timer = global.setInterval(function tick() {
      remaining -= 1;

      if (remaining <= 0) {
        global.clearInterval(timer);
        button.disabled = false;
        button.textContent = label;
        return;
      }

      button.textContent = remaining + "s";
    }, 1000);
  }

  function initAuthForms(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-auth-form]"), function initForm(form) {
      var app = form.dataset.authApp || doc.body.dataset.demoApp;
      var phoneInput = form.querySelector("[data-auth-phone]");
      var codeInput = form.querySelector("[data-auth-code]");
      var sendCodeButton = form.querySelector("[data-send-code]");
      var submitButton = form.querySelector("[data-auth-submit]");
      var agreement = form.querySelector("[data-agree-toggle]");
      var demoButtons = form.querySelectorAll("[data-auth-demo]");

      Array.prototype.forEach.call(demoButtons, function bindDemoButton(button) {
        button.addEventListener("click", function handleDemoClick(event) {
          event.preventDefault();

          Array.prototype.forEach.call(demoButtons, function clearDemoState(item) {
            item.classList.remove("is-active");
            item.setAttribute("aria-pressed", "false");
          });

          button.classList.add("is-active");
          button.setAttribute("aria-pressed", "true");

          if (phoneInput) {
            phoneInput.value = button.dataset.demoPhone || "";
          }

          if (codeInput) {
            codeInput.value = button.dataset.demoCode || "246810";
          }
        });
      });

      if (phoneInput) {
        phoneInput.addEventListener("change", function handlePhoneChange() {
          var selectedPhone = normalizePhone(phoneInput.value);
          var matchedDemo = null;

          Array.prototype.forEach.call(demoButtons, function matchButton(button) {
            if (button.dataset.demoPhone === selectedPhone) {
              matchedDemo = button;
            }
          });

          if (!matchedDemo) {
            return;
          }

          Array.prototype.forEach.call(demoButtons, function clearDemoState(item) {
            item.classList.remove("is-active");
            item.setAttribute("aria-pressed", "false");
          });

          matchedDemo.classList.add("is-active");
          matchedDemo.setAttribute("aria-pressed", "true");

          if (codeInput) {
            codeInput.value = matchedDemo.dataset.demoCode || "246810";
          }
        });
      }

      if (sendCodeButton) {
        sendCodeButton.addEventListener("click", function handleSendCode(event) {
          event.preventDefault();

          if (!phoneInput || normalizePhone(phoneInput.value).length !== 11) {
            showToast("请先输入 11 位手机号");
            return;
          }

          showToast("演示验证码已发送，默认使用 246810");
          startDemoCountdown(sendCodeButton, 5);
        });
      }

      if (!submitButton) {
        return;
      }

      submitButton.addEventListener("click", function handleSubmit(event) {
        var phone = phoneInput ? normalizePhone(phoneInput.value) : "";
        var code = codeInput ? normalizePhone(codeInput.value) : "";
        var scenario;
        var state;

        event.preventDefault();

        if (phone.length !== 11) {
          showToast("请输入正确的 11 位手机号");
          return;
        }

        if (code.length !== 6) {
          showToast("请输入 6 位验证码");
          return;
        }

        if (agreement && agreement.dataset.checked !== "true") {
          showToast("请先阅读并勾选协议");
          return;
        }

        scenario = detectAuthScenario(app, phone);
        state = buildDemoState(app, phone, scenario);
        writeStorage(app, state);

        showToast(AUTH_SCENARIOS[app][scenario].toast);

        global.setTimeout(function goNext() {
          global.location.href = AUTH_SCENARIOS[app][scenario].route;
        }, 420);
      });
    });
  }

  function initStateActions(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-demo-action]"), function initAction(control) {
      control.addEventListener("click", function handleAction(event) {
        var action = control.dataset.demoAction;
        var app = control.dataset.demoApp || doc.body.dataset.demoApp;
        var nextUrl = control.dataset.next;

        event.preventDefault();

        if (action === "logout" && app) {
          clearStorage(app);
          showToast(control.dataset.message || "已退出演示账号");

          if (nextUrl) {
            global.setTimeout(function goBack() {
              global.location.href = nextUrl;
            }, 420);
          }
        }
      });
    });
  }

  function getIconHref(node) {
    if (!node) {
      return "";
    }

    return node.getAttribute("href") || node.getAttribute("xlink:href") || "";
  }

  function getIconId(value) {
    var match = String(value || "").match(/#(icon-[a-z0-9-]+)/i);
    return match ? match[1] : "";
  }

  function ensureIconSprite(doc) {
    if (!doc || doc.querySelector("svg[data-shared-icon-sprite]")) {
      return;
    }

    var host = doc.createElement("div");
    host.innerHTML = ICON_SPRITE.trim();

    if (!host.firstElementChild) {
      return;
    }

    host.firstElementChild.setAttribute("data-shared-icon-sprite", "true");
    doc.body.insertBefore(host.firstElementChild, doc.body.firstChild);
  }

  function normalizeIconUses(doc) {
    Array.prototype.forEach.call(doc.querySelectorAll("use"), function normalizeUse(node) {
      var iconId = getIconId(getIconHref(node));

      if (!iconId) {
        return;
      }

      node.setAttribute("href", "#" + iconId);
      node.setAttribute("xlink:href", "#" + iconId);
    });
  }

  function initPage() {
    if (!global.document) {
      return;
    }

    ensureIconSprite(global.document);
    normalizeIconUses(global.document);

    var state = syncPageState(global.document);

    if (state) {
      applyBindings(global.document, state);
    }

    initCycleControls(global.document);
    initChoiceGroups(global.document);
    initAgreementControls(global.document);
    initAuthForms(global.document);
    initFakeSubmits(global.document);
    initStateActions(global.document);
    initMediaFallbacks(global.document);
  }

  if (global.document) {
    if (global.document.readyState === "loading") {
      global.document.addEventListener("DOMContentLoaded", initPage);
    } else {
      initPage();
    }
  }

  var api = {
    splitValues: splitValues,
    nextCycleIndex: nextCycleIndex,
    getCycleState: getCycleState,
    normalizePhone: normalizePhone,
    maskPhone: maskPhone,
    detectAuthScenario: detectAuthScenario,
    buildDemoState: buildDemoState,
    ensureIconSprite: ensureIconSprite,
    normalizeIconUses: normalizeIconUses,
    initMediaFallbacks: initMediaFallbacks,
    initPage: initPage,
    showToast: showToast
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.TakeoutShared = api;
})(typeof window !== "undefined" ? window : globalThis);
