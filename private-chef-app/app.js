(function () {
  const page = document.body.dataset.page || "";
  const navPageMap = {
    categories: "dishes",
    certification: "profile",
    login: "profile",
    "dish-edit": "dishes",
    "category-edit": "dishes"
  };

  const statusMeta = {
    "待确认": { next: "待上门", badge: "badge amber", button: "确认预约", done: "预约已确认演示" },
    "待上门": { next: "服务中", badge: "badge", button: "标记出发", done: "已更新为服务中演示" },
    "服务中": { next: "已完成", badge: "badge green", button: "服务完成", done: "服务完成演示" },
    "已完成": { next: null, badge: "badge coral", button: "提醒评价", done: "评价提醒已发送演示" }
  };

  const chatThreads = {
    zhou: {
      type: "客户沟通",
      title: "周女士 · 今晚家宴",
      meta: "18:30 · 滨湖壹号",
      phone: "138****6688",
      messages: [
        { side: "customer", time: "今天 09:42", text: "李师傅您好，今晚家宴确认一下地址和口味。" },
        { side: "me", time: "今天 09:46", text: "您好，地址是滨湖壹号 3 栋 1802，对吗？" },
        { side: "customer", time: "今天 09:51", text: "对，家里有老人，希望整体少辣，鱼类菜品需要去刺，餐具已准备。" }
      ]
    },
    birthday: {
      type: "预约提醒",
      title: "明天生日宴提醒",
      meta: "明天 11:20 · 金科府",
      messages: [
        { side: "system", time: "系统提醒", text: "生日宴服务单已进入待上门状态，请在出发前再次确认食材清单和到达时间。" }
      ]
    },
    system: {
      type: "系统通知",
      title: "认证资料已通过",
      meta: "系统通知",
      messages: [
        { side: "system", time: "系统通知", text: "你的厨师认证资料已通过展示审核，可继续完善菜品和服务范围。" }
      ]
    }
  };

  const navKey = navPageMap[page] || page;
  document.querySelectorAll("[data-nav]").forEach((item) => {
    if (item.dataset.nav === navKey) {
      item.classList.add("is-active");
      item.setAttribute("aria-current", "page");
    }
  });

  function showToast(message) {
    const toast = document.querySelector("[data-toast-root]");
    if (!toast) return;
    toast.textContent = message || "静态演示";
    toast.hidden = false;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => {
        toast.hidden = true;
      }, 180);
    }, 1800);
  }

  function getActiveFilter(group) {
    return group?.querySelector("[data-filter].is-active")?.dataset.filter || "all";
  }

  function applyFilterGroup(group) {
    const filter = getActiveFilter(group);
    const cards = document.querySelectorAll(group.dataset.filterTarget);
    const empty = document.querySelector(group.dataset.emptyTarget || "");
    let visibleCount = 0;
    cards.forEach((card) => {
      const visible = filter === "all" || card.dataset.status === filter || card.dataset.type === filter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (empty) empty.hidden = visibleCount !== 0;
  }

  document.querySelectorAll("[data-toast]").forEach((control) => {
    control.addEventListener("click", (event) => {
      const shouldBlock = control.matches("button") || control.hasAttribute("data-static-action");
      if (shouldBlock) event.preventDefault();
      showToast(control.dataset.toast);
    });
  });

  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast(form.dataset.success || "信息已保存演示");
    });
  });

  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        applyFilterGroup(group);
      });
    });
  });

  function updateAppointmentCard(card) {
    const status = card.dataset.status;
    const meta = statusMeta[status];
    const badge = card.querySelector("[data-status-badge]");
    const button = card.querySelector("[data-advance-status]");
    if (badge && meta) {
      badge.textContent = status;
      badge.className = meta.badge;
      badge.setAttribute("data-status-badge", "");
    }
    if (button && meta) {
      button.textContent = meta.button;
      button.classList.toggle("green", status === "待上门");
      button.classList.toggle("secondary", status === "已完成");
    }
  }

  function updateAppointmentCounts() {
    const cards = Array.from(document.querySelectorAll("[data-appointment-card]"));
    const counts = { all: cards.length, "待确认": 0, "待上门": 0, "服务中": 0, "已完成": 0 };
    cards.forEach((card) => {
      counts[card.dataset.status] = (counts[card.dataset.status] || 0) + 1;
      updateAppointmentCard(card);
    });
    Object.entries(counts).forEach(([status, count]) => {
      document.querySelectorAll(`[data-status-count="${status}"], [data-tab-count="${status}"]`).forEach((item) => {
        item.textContent = count;
      });
    });
    const group = document.querySelector("[data-filter-group][data-filter-target='[data-appointment-card]']");
    if (group) applyFilterGroup(group);
  }

  document.querySelectorAll("[data-advance-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-appointment-card]");
      if (!card) return;
      const current = card.dataset.status;
      const meta = statusMeta[current];
      if (meta?.next) {
        card.dataset.status = meta.next;
        card.classList.add("is-updated");
        window.setTimeout(() => card.classList.remove("is-updated"), 420);
        updateAppointmentCounts();
      }
      showToast(meta?.done || "状态已更新演示");
    });
  });
  updateAppointmentCounts();

  function renderThread(threadKey) {
    const thread = chatThreads[threadKey] || chatThreads.zhou;
    const title = document.querySelector("[data-chat-title-view]");
    const meta = document.querySelector("[data-chat-meta-view]");
    const body = document.querySelector("[data-chat-thread]");
    const composer = document.querySelector("[data-chat-form]");
    const actions = document.querySelector("[data-chat-actions]");
    const phoneCopy = document.querySelector("[data-phone-copy]");
    if (title) title.textContent = thread.title;
    if (meta) meta.textContent = thread.meta;
    if (phoneCopy) {
      phoneCopy.hidden = true;
      phoneCopy.textContent = `已经复制对方手机号：${thread.phone || "138****6688"}`;
    }
    if (body) {
      body.innerHTML = thread.messages.map((message) => {
        const className = message.side === "me" ? "from-me" : message.side === "system" ? "from-system" : "from-customer";
        return `<div class="chat-time">${message.time}</div><div class="chat-message ${className}">${message.text}</div>`;
      }).join("");
      body.scrollTop = body.scrollHeight;
    }
    const isCustomer = thread.type === "客户沟通";
    if (composer) composer.hidden = !isCustomer;
    if (actions) actions.hidden = !isCustomer;
  }

  function selectMessage(item) {
    document.querySelectorAll("[data-message-item]").forEach((row) => row.classList.remove("is-active"));
    item.classList.add("is-active");
    renderThread(item.dataset.thread);
  }

  document.querySelectorAll("[data-message-tabs]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-message-filter]");
    const items = document.querySelectorAll("[data-message-item]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.messageFilter;
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        items.forEach((item) => {
          item.hidden = filter !== "all" && item.dataset.type !== filter;
        });
        const firstVisible = Array.from(items).find((item) => !item.hidden);
        if (firstVisible) selectMessage(firstVisible);
      });
    });
  });

  document.querySelectorAll("[data-message-item]").forEach((item) => {
    item.addEventListener("click", () => selectMessage(item));
  });

  document.querySelector("[data-chat-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-chat-input]");
    const body = document.querySelector("[data-chat-thread]");
    const value = input?.value.trim();
    if (!value) {
      showToast("请输入回复内容");
      return;
    }
    const time = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
    const bubble = document.createElement("div");
    const timeNode = document.createElement("div");
    timeNode.className = "chat-time";
    timeNode.textContent = time;
    bubble.className = "chat-message from-me is-sending";
    bubble.textContent = value;
    body.append(timeNode, bubble);
    input.value = "";
    body.scrollTop = body.scrollHeight;
    window.setTimeout(() => bubble.classList.remove("is-sending"), 240);
  });

  document.querySelector("[data-quick-reply]")?.addEventListener("click", () => {
    const input = document.querySelector("[data-chat-input]");
    if (input) {
      input.value = "收到，我会按这个口味准备，上门前再和您确认一次。";
      input.focus();
    }
  });

  document.querySelector("[data-copy-phone]")?.addEventListener("click", () => {
    const active = document.querySelector("[data-message-item].is-active");
    const phone = active?.dataset.phone || "138****6688";
    const phoneCopy = document.querySelector("[data-phone-copy]");
    if (phoneCopy) {
      phoneCopy.textContent = `已经复制对方手机号：${phone}`;
      phoneCopy.hidden = false;
    }
    showToast("已经复制对方手机号");
  });
  if (document.querySelector("[data-chat-thread]")) renderThread("zhou");

  document.querySelectorAll("[data-switch-login]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.switchLogin;
      document.querySelectorAll("[data-login-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.loginPanel !== mode;
      });
      document.querySelectorAll("[data-switch-login]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
    });
  });

  document.querySelectorAll("[data-toggle-row]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-on");
      showToast(button.classList.contains("is-on") ? "状态已开启演示" : "状态已关闭演示");
    });
  });

  document.querySelectorAll("[data-dish-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-dish-card]");
      const badge = card?.querySelector(".badge.green, .badge.amber");
      const isListed = button.textContent.trim() === "下架";
      if (badge) {
        badge.textContent = isListed ? "已下架" : "已上架";
        badge.className = isListed ? "badge amber" : "badge green";
      }
      button.textContent = isListed ? "上架" : "下架";
      button.className = isListed ? "btn" : "btn ghost";
      showToast(isListed ? "菜品下架演示" : "菜品上架演示");
    });
  });

  document.querySelectorAll("[data-icon-picker] .food-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector("[data-icon-target]");
      document.querySelectorAll("[data-icon-picker] .food-thumb").forEach((item) => item.classList.remove("is-picked"));
      button.classList.add("is-picked");
      if (target) target.className = `food-thumb large ${button.dataset.iconClass || ""}`.trim();
      showToast("菜品图标已切换演示");
    });
  });

  document.querySelectorAll("[data-category-icon-picker] .category-icon").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-category-icon-picker] .category-icon").forEach((item) => item.classList.remove("is-picked"));
      button.classList.add("is-picked");
      showToast(`分类图标已改为“${button.dataset.iconText}”演示`);
    });
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") === "new") {
    const title = document.querySelector("[data-edit-title]");
    if (title) title.textContent = page === "dishes" ? "新增菜品" : "新增分类";
  }

  let certIndex = 0;
  const certPanels = Array.from(document.querySelectorAll("[data-cert-panel]"));
  const certSteps = Array.from(document.querySelectorAll("[data-cert-step]"));
  const certPrev = document.querySelector("[data-cert-prev]");
  const certNext = document.querySelector("[data-cert-next]");
  const certSubmit = document.querySelector("[data-cert-submit]");

  function updateCertStep(nextIndex) {
    certIndex = Math.max(0, Math.min(nextIndex, certPanels.length - 1));
    certPanels.forEach((panel, index) => {
      panel.hidden = index !== certIndex;
    });
    certSteps.forEach((step, index) => {
      step.classList.toggle("is-active", index === certIndex);
    });
    if (certPrev) certPrev.hidden = certIndex === 0;
    if (certNext) certNext.hidden = certIndex === certPanels.length - 1;
    if (certSubmit) certSubmit.hidden = certIndex !== certPanels.length - 1;
  }

  certSteps.forEach((step) => {
    step.addEventListener("click", () => updateCertStep(Number(step.dataset.certStep)));
  });
  certPrev?.addEventListener("click", () => updateCertStep(certIndex - 1));
  certNext?.addEventListener("click", () => updateCertStep(certIndex + 1));
  document.querySelector("[data-cert-wizard]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("认证提交演示");
  });
  document.querySelectorAll("[data-upload-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("is-uploaded");
      button.querySelector(".item-subtitle").textContent = "已贴图演示";
      const count = document.querySelector("[data-upload-count]");
      if (count) {
        const uploaded = document.querySelectorAll("[data-upload-demo].is-uploaded").length;
        count.textContent = `${uploaded}/4 已贴图`;
      }
      showToast("图片已贴图演示");
    });
  });
})();
