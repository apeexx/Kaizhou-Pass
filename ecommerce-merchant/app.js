const root = document.documentElement;
const body = document.body;
const storedTheme = localStorage.getItem("kgc-merchant-theme");

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
    const label = isDark ? "切换浅色模式" : "切换深色模式";
    button.setAttribute("aria-label", label);
    const text = button.querySelector("[data-theme-label]");
    if (text) {
      text.textContent = isDark ? "浅色模式" : "深色模式";
    }
  });
}

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("kgc-merchant-theme", root.classList.contains("dark") ? "dark" : "light");
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
  const statusSelect = document.querySelector(`[data-status-filter="${tableId}"]`);
  const categorySelect = document.querySelector(`[data-category-filter="${tableId}"]`);
  const status = normalize(statusSelect && statusSelect.value);
  const category = normalize(categorySelect && categorySelect.value);
  let visibleCount = 0;

  table.querySelectorAll("tbody tr").forEach((row) => {
    const textMatches = !query || normalize(row.textContent).includes(query);
    const statusMatches = !status || normalize(row.dataset.status) === status;
    const categoryMatches = !category || normalize(row.dataset.category) === category;
    const visible = textMatches && statusMatches && categoryMatches;
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

document.querySelectorAll("[data-table-search], [data-status-filter], [data-category-filter]").forEach((control) => {
  const tableId = control.dataset.tableSearch || control.dataset.statusFilter || control.dataset.categoryFilter;
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
      tab.classList.toggle("active", tab === button);
      tab.setAttribute("aria-selected", String(tab === button));
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
    const name = row ? row.querySelector(".item-title")?.textContent || "记录" : "记录";
    const messages = {
      view: `正在查看 ${name}`,
      edit: `已进入 ${name} 的编辑演示`,
      ship: `${name} 已标记为待发货处理`,
      delete: `${name} 为静态演示，未执行删除`,
      settle: `${name} 已加入结算演示队列`
    };
    showToast(messages[action] || "操作已记录");
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
