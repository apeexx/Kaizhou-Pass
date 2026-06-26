function renderShell() {
  const shell = document.querySelector("[data-shell]");
  if (!shell) {
    return;
  }

  const page = shell.dataset.page || "index";
  const pageTitle = shell.dataset.title || "私厨商户端";
  const searchPlaceholder = shell.dataset.search || "搜索预约、套餐、日程、客户";
  const navItems = [
    { key: "index", href: "index.html", label: "控制台", icon: "M4 11.5 12 5l8 6.5V20H4v-8.5Z M9 20v-6h6v6" },
    { key: "menus", href: "menus.html", label: "服务套餐", icon: "M5 7h14M7 7v13h10V7 M9 11h6M9 15h4" },
    { key: "orders", href: "orders.html", label: "预约管理", icon: "M7 4h10v16H7z M9.5 8h5M9.5 12h5M9.5 16H13" },
    { key: "batches", href: "batches.html", label: "日程排班", icon: "M6 5h12v15H6z M9 9h6M9 13h6M9 17h3" },
    { key: "customers", href: "customers.html", label: "客户沟通", icon: "M5 6h14v9H8l-3 3V6Z M9 10h6" },
    { key: "earnings", href: "earnings.html", label: "收益结算", icon: "M4 7h16v11H4z M8 11h5m-5 3h8" },
    { key: "settings", href: "settings.html", label: "店铺设置", icon: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M19 13.5v-3l-2-.4-1-2 1-1.7-2-2-1.8 1-2-.8L10.8 2h-3l-.4 2.1-2 .8-1.7-1.1-2 2 1 1.8-.8 2-2.1.4v3l2.1.4.8 2-1 1.8 2 2 1.7-1.1 2 .8.4 2.1h3l.4-2.1 2-.8 1.8 1.1 2-2-1-1.8 1-2 2-.4Z" }
  ];
  const navHtml = navItems.map((item) => `
        <a class="nav-link ${page === item.key ? "active" : ""}" href="${item.href}" ${page === item.key ? 'aria-current="page"' : ""}>
          <span class="nav-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="${item.icon}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          ${item.label}
        </a>`).join("");

  shell.classList.add("app");
  shell.innerHTML = `
    <aside class="sidebar" aria-label="私厨商户导航">
      <a class="brand" href="index.html" aria-label="开州金厨私厨商户端首页">
        <span class="brand-mark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 4h12v5a6 6 0 0 1-12 0V4Z" stroke="currentColor" stroke-width="1.8"/>
            <path d="M9 4V2m3 2V2m3 2V2M8 15h8l-1 6H9l-1-6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </span>
        <span>
          <span class="brand-title">开州金厨</span>
          <span class="brand-subtitle">私厨商户端</span>
        </span>
      </a>
      <nav class="nav">${navHtml}</nav>
      <div class="sidebar-foot">
        <button class="nav-link" type="button" data-toast="已退出登录演示">
          <span class="nav-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M10 6H5v12h5M14 8l4 4-4 4M9 12h9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          退出登录
        </button>
      </div>
    </aside>
    <div class="content">
      <header class="topbar">
        <button class="menu-button" type="button" data-menu-toggle aria-label="打开导航">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
        <label class="search">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m20 20-4.2-4.2m1.2-5.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          <input type="search" placeholder="${searchPlaceholder}">
        </label>
        <div class="topbar-actions">
          <button class="icon-button" type="button" data-theme-toggle aria-label="切换深色模式">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.5A7.5 7.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          </button>
          <button class="icon-button notification" type="button" data-count="8" aria-label="查看通知" data-toast="你有 8 条上门服务提醒">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 9a6 6 0 1 0-12 0c0 7-2 7-2 9h16c0-2-2-2-2-9Z" stroke="currentColor" stroke-width="1.8"/><path d="M10 21h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
          <div class="profile"><span class="avatar">厨</span><strong>金厨 · 李师傅</strong></div>
        </div>
      </header>
      ${shell.innerHTML}
    </div>
    <div class="overlay" data-nav-close></div>`;
  document.title = `${pageTitle} - 开州金厨`;
}

renderShell();

const root = document.documentElement;
const body = document.body;
const storedTheme = localStorage.getItem("kgc-private-chef-theme");

if (storedTheme === "dark") {
  root.classList.add("dark");
}

const toast = document.createElement("div");
toast.className = "toast";
toast.setAttribute("role", "status");
toast.setAttribute("aria-live", "polite");
body.appendChild(toast);

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function updateThemeButtons() {
  const isDark = root.classList.contains("dark");
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "切换浅色模式" : "切换深色模式");
    const text = button.querySelector("[data-theme-label]");
    if (text) {
      text.textContent = isDark ? "浅色模式" : "深色模式";
    }
  });
}

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("kgc-private-chef-theme", root.classList.contains("dark") ? "dark" : "light");
    updateThemeButtons();
    showToast(root.classList.contains("dark") ? "已切换为深色模式" : "已切换为浅色模式");
  });
});

updateThemeButtons();

document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    body.classList.toggle("nav-open");
  });
});

document.querySelectorAll("[data-nav-close]").forEach((target) => {
  target.addEventListener("click", () => {
    body.classList.remove("nav-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    body.classList.remove("nav-open");
  }
});

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function filterTable(table) {
  if (!table) {
    return;
  }

  const tableId = table.id;
  const query = Array.from(document.querySelectorAll(`[data-table-search="${tableId}"]`))
    .map((input) => normalize(input.value))
    .find(Boolean) || "";
  const filters = ["status", "category", "type", "time", "channel"].map((name) => {
    const control = document.querySelector(`[data-${name}-filter="${tableId}"]`);
    return { name, value: normalize(control && control.value) };
  });
  let visibleCount = 0;

  table.querySelectorAll("tbody tr").forEach((row) => {
    const textMatches = !query || normalize(row.textContent).includes(query);
    const filterMatches = filters.every((filter) => {
      return !filter.value || normalize(row.dataset[filter.name]) === filter.value;
    });
    const visible = textMatches && filterMatches;
    row.hidden = !visible;
    if (visible) {
      visibleCount += 1;
    }
  });

  const empty = document.querySelector(`[data-empty-for="${tableId}"]`);
  if (empty) {
    empty.classList.toggle("visible", visibleCount === 0);
  }

  const counter = document.querySelector(`[data-count-for="${tableId}"]`);
  if (counter) {
    counter.textContent = `${visibleCount} 条记录`;
  }
}

document.querySelectorAll("[data-table-search], [data-status-filter], [data-category-filter], [data-type-filter], [data-time-filter], [data-channel-filter]").forEach((control) => {
  const tableId = control.dataset.tableSearch || control.dataset.statusFilter || control.dataset.categoryFilter || control.dataset.typeFilter || control.dataset.timeFilter || control.dataset.channelFilter;
  control.addEventListener("input", () => filterTable(document.getElementById(tableId)));
  control.addEventListener("change", () => filterTable(document.getElementById(tableId)));
});

document.querySelectorAll(".data-table[id]").forEach(filterTable);

document.querySelectorAll("[data-tab-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest("[data-tab-group]");
    if (!group) {
      return;
    }

    const targetId = button.dataset.tabTarget;
    group.querySelectorAll("[data-tab-target]").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    group.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });
  });
});

document.querySelectorAll("[data-toast]").forEach((control) => {
  control.addEventListener("click", () => {
    showToast(control.dataset.toast);
  });
});

document.querySelectorAll("[data-row-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.rowAction;
    const row = button.closest("tr");
    const name = row ? row.querySelector(".item-title")?.textContent || row.cells?.[0]?.textContent?.trim() || "记录" : "记录";
    const messages = {
      view: `正在查看 ${name}`,
      edit: `已进入 ${name} 的编辑演示`,
      publish: `${name} 已提交发布演示`,
      lock: `${name} 已确认预约演示`,
      depart: `${name} 已更新为出发演示`,
      arrive: `${name} 已更新为到达演示`,
      complete: `${name} 已更新为服务完成演示`,
      remind: `${name} 的上门前确认提醒已发送演示`,
      settle: `${name} 已加入结算演示队列`,
      reply: `正在回复 ${name}`,
      cancel: `${name} 为静态演示，未执行取消`
    };
    showToast(messages[action] || "操作已记录");
  });
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast(form.dataset.demoForm || "已保存静态演示数据");
  });
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast("已复制到剪贴板");
    } catch {
      showToast(value);
    }
  });
});

document.querySelectorAll("[data-message-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest("[data-message-group]");
    if (!group) {
      return;
    }

    group.querySelectorAll("[data-message-target]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    showToast(`已切换到 ${button.dataset.messageTarget} 的沟通记录`);
  });
});
