(function () {
  const page = document.body.dataset.page || "";
  const navPageMap = {
    categories: "dishes",
    certification: "profile",
    login: "profile"
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
    const targetSelector = group.dataset.filterTarget;
    const cards = document.querySelectorAll(targetSelector);
    const empty = document.querySelector(group.dataset.emptyTarget || "");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        let visibleCount = 0;
        cards.forEach((card) => {
          const visible = filter === "all" || card.dataset.status === filter || card.dataset.type === filter;
          card.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        if (empty) empty.hidden = visibleCount !== 0;
      });
    });
  });

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

  const chatTitle = document.querySelector("[data-chat-title-view]");
  const chatMeta = document.querySelector("[data-chat-meta-view]");
  const chatBody = document.querySelector("[data-chat-body-view]");
  function selectMessage(item) {
    document.querySelectorAll("[data-message-item]").forEach((row) => row.classList.remove("is-active"));
    item.classList.add("is-active");
    if (chatTitle) chatTitle.textContent = item.dataset.chatTitle || item.querySelector(".item-title")?.textContent || "";
    if (chatMeta) chatMeta.textContent = item.dataset.chatMeta || "";
    if (chatBody) chatBody.textContent = item.dataset.chatBody || "";
  }

  document.querySelectorAll("[data-message-item]").forEach((item) => {
    item.addEventListener("click", () => selectMessage(item));
  });

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
})();
