(function attachShared(global) {
  "use strict";

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

        event.preventDefault();
        showToast(button.dataset.submitMessage || "操作已完成");

        if (nextUrl) {
          global.setTimeout(function goNext() {
            global.location.href = nextUrl;
          }, 520);
        }
      });
    });
  }

  function initPage() {
    if (!global.document) {
      return;
    }

    initCycleControls(global.document);
    initChoiceGroups(global.document);
    initFakeSubmits(global.document);
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
    initPage: initPage,
    showToast: showToast
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.TakeoutShared = api;
})(typeof window !== "undefined" ? window : globalThis);
