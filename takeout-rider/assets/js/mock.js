(function () {
  const page = document.body.dataset.page || "";
  const navMap = {
    "rider-home": "home",
    "order-hall": "orders",
    "order-detail": "orders",
    "current-order": "orders",
    "pickup-confirm": "orders",
    "delivery-confirm": "orders",
    "order-exception": "orders",
    "order-history": "orders",
    "route-map": "route",
    "income-home": "income",
    "income-detail": "income",
    "message-center": "mine",
    profile: "mine",
    "work-setting": "mine",
    settings: "mine"
  };

  document.querySelectorAll("[data-nav]").forEach((item) => {
    if (item.dataset.nav === (navMap[page] || page)) {
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
      if (control.matches("button") || control.hasAttribute("data-static-action")) {
        event.preventDefault();
      }
      showToast(control.dataset.toast);
    });
  });

  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const target = form.dataset.redirect;
      showToast(form.dataset.success || "已提交静态演示");
      if (target) {
        window.setTimeout(() => {
          window.location.href = target;
        }, 280);
      }
    });
  });

  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll(group.dataset.filterTarget);
    const empty = document.querySelector(group.dataset.emptyTarget || "");
    function apply(filter) {
      let visible = 0;
      cards.forEach((card) => {
        const matched = filter === "all" || card.dataset.status === filter || card.dataset.type === filter;
        card.hidden = !matched;
        if (matched) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    }
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        apply(button.dataset.filter);
      });
    });
    apply(group.querySelector(".is-active")?.dataset.filter || "all");
  });

  document.querySelector("[data-rider-toggle]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const isOnline = button.textContent.includes("接单中");
    button.classList.toggle("green", !isOnline);
    button.classList.toggle("amber", isOnline);
    button.textContent = isOnline ? "休息中" : "接单中";
    showToast("接单状态已切换静态演示");
  });

  document.querySelectorAll("[data-upload-demo]").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("is-uploaded");
      const subtitle = card.querySelector(".item-subtitle");
      if (subtitle) subtitle.textContent = "已选择静态示例";
      showToast("上传为静态演示，不会提交真实文件");
    });
  });
})();
