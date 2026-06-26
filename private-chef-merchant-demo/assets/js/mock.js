(function () {
  const page = document.body.dataset.page || "";
  const navMap = {
    "merchant-home": "home",
    "order-list": "orders",
    "order-detail": "orders",
    "order-assign": "orders",
    "order-progress": "orders",
    "package-list": "menu",
    "dish-list": "menu",
    "data-overview": "data",
    profile: "mine"
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
      showToast(form.dataset.success || "已保存静态演示");
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

  document.querySelectorAll("[data-upload-demo]").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("is-uploaded");
      const subtitle = card.querySelector(".item-subtitle");
      if (subtitle) subtitle.textContent = "已上传静态示例";
      showToast("资料已上传静态演示");
    });
  });

  document.querySelectorAll("[data-chef-choice]").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll("[data-chef-choice]").forEach((item) => item.classList.remove("is-selected"));
      card.classList.add("is-selected");
      const target = document.querySelector("[data-selected-chef]");
      if (target) target.textContent = card.dataset.chefChoice || "已选择厨师";
      showToast(`已选择${card.dataset.chefChoice || "厨师"}静态演示`);
    });
  });

  document.querySelector("[data-confirm-assign]")?.addEventListener("click", () => {
    const selected = document.querySelector("[data-chef-choice].is-selected")?.dataset.chefChoice || "厨师";
    showToast(`订单已分配给${selected}静态演示`);
  });

  document.querySelector("[data-business-toggle]")?.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("green");
    event.currentTarget.textContent = event.currentTarget.classList.contains("green") ? "营业中" : "暂停营业";
    showToast("营业状态已切换静态演示");
  });
})();

