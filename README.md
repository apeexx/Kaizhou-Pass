# Kaizhou-Golden-Chef

开州金厨项目当前处于前端静态页面初始化阶段。

## 当前开发范围

- 目前只需要编写前端静态页面。
- 页面以 HTML、CSS、JavaScript 为主。
- 当前阶段暂不涉及后端服务、数据库、接口联调、文件落盘、构建工具或部署脚本。
- 后续如需增加框架、依赖、接口或后端能力，需要先更新项目文档并确认实现范围。
- C 端页面由其他人负责，本仓库当前只保留非 C 端目录。

## 当前项目结构

```text
Kaizhou-Golden-Chef/
├── AGENTS.md
├── README.md
├── ecommerce-merchant/
│   ├── index.html
│   ├── products.html
│   ├── orders.html
│   ├── analytics.html
│   ├── earnings.html
│   ├── settings.html
│   ├── styles.css
│   └── app.js
├── private-chef-admin/
│   ├── index.html
│   ├── menus.html
│   ├── batches.html
│   ├── orders.html
│   ├── earnings.html
│   ├── customers.html
│   ├── settings.html
│   ├── styles.css
│   └── app.js
├── private-chef-app/
│   ├── index.html
│   ├── login.html
│   ├── certification.html
│   ├── messages.html
│   ├── dishes.html
│   ├── dish-edit.html
│   ├── categories.html
│   ├── category-edit.html
│   ├── wallet.html
│   ├── profile.html
│   ├── styles.css
│   └── app.js
├── takeout-merchant/
│   └── .gitkeep
└── takeout-rider/
    └── .gitkeep
```

## 目录说明

- `ecommerce-merchant/`：电商商户端相关静态页面目录，当前包含控制台、商品管理、订单管理、数据分析、收益结算、店铺设置页面。
- `private-chef-admin/`：私厨上门后台管理端静态页面目录，当前包含控制台、服务套餐、预约管理、日程排班、客户沟通、收益结算、店铺设置页面。
- `private-chef-app/`：私厨厨师手机前台管理端静态页面目录，当前包含指定预约、登录、认证、消息、菜品、分类、收钱和个人页面。
- `takeout-merchant/`：预留商户端目录。
- `takeout-rider/`：预留骑手端目录。

## 电商商户端页面

当前电商商户端为纯静态页面，不依赖后端、数据库、接口、构建工具或第三方前端框架。可直接在浏览器中打开：

```text
ecommerce-merchant/index.html
```

页面说明：

- `index.html`：控制台，展示销售额、订单、商品、转化、趋势、订单状态和库存预警。
- `products.html`：商品管理，提供商品列表、分类筛选、状态筛选和搜索演示。
- `orders.html`：订单管理，提供订单表格、状态筛选、搜索、分页和操作按钮演示。
- `analytics.html`：数据分析，展示流量、转化、渠道来源和商品贡献排行。
- `earnings.html`：收益结算，展示收入指标、结算趋势、收入来源和结算记录。
- `settings.html`：店铺设置，提供基础资料、通知、经营偏好、安全设置和主题切换演示。
- `styles.css`：共享主题、布局、卡片、表格、图表、表单、深色模式和响应式样式。
- `app.js`：共享本地交互，包括移动端导航、主题切换、筛选搜索、tab 切换和提示反馈。

## 私厨后台管理端页面

当前私厨后台管理端为纯静态页面，不依赖后端、数据库、接口、构建工具或第三方前端框架。可直接在浏览器中打开：

```text
private-chef-admin/index.html
```

页面说明：

- `index.html`：上门私厨控制台，展示今日上门预约、待确认需求、待出发服务、服务中、今日已完成、客户沟通和收益概览。
- `menus.html`：服务套餐，提供套餐方案、适用人数、服务时长、适用场景、食材代采、状态筛选和搜索演示。
- `orders.html`：预约管理，提供预约列表、确认状态筛选、场景筛选、客户需求、服务地址和行操作演示。
- `batches.html`：日程排班，展示厨师/助理排班、出发、到达、服务中、服务完成和时段筛选演示。
- `customers.html`：客户沟通，展示沟通列表、上门前确认、快捷回复、客户分层和评价提醒演示。
- `earnings.html`：收益结算，展示服务费、食材代采、加时费用、收入结构和结算记录筛选演示。
- `settings.html`：店铺设置，提供基础资料、服务规则、通知偏好、安全设置和主题切换演示。
- `styles.css`：共享主题、后台布局、套餐卡片、服务状态、表格、图表、沟通列表、表单、深色模式和响应式样式。
- `app.js`：共享本地交互，包括公共侧栏/顶部栏注入、移动端导航、主题切换、筛选搜索、tab 切换、复制、表单阻止提交和提示反馈。

## 私厨手机前台管理端页面

当前私厨手机前台管理端为厨师本人使用的纯静态 H5 页面，不依赖后端、数据库、接口、构建工具或第三方前端框架。可直接在浏览器中打开：

```text
private-chef-app/index.html
```

页面说明：

- `index.html`：今日指定预约，展示待确认、待上门、服务中、已完成等状态；按钮可在前端演示服务单状态推进并同步统计。
- `login.html`：登录 / 注册，提供验证码登录、密码登录、协议勾选和静态提交反馈。
- `certification.html`：厨师认证，提供身份信息、资质证件、服务能力、提交审核四步静态向导。
- `messages.html`：消息，展示预约提醒、系统通知和客户私聊；客户私聊支持输入追加消息、快捷回复和复制手机号提示。
- `dishes.html`：我的菜品，展示菜品分类筛选、菜品上下架状态切换、编辑和新增入口。
- `dish-edit.html`：菜品编辑，提供菜品名称、基础介绍、标价、单位、分类、状态和图标切换演示。
- `categories.html`：菜品分类，展示分类排序、新增分类、编辑分类和保存排序演示。
- `category-edit.html`：分类编辑，提供分类名称、介绍、图标、数量和展示状态演示。
- `wallet.html`：收钱，展示今日收入、可提现、待结算、收款码、提现和账单明细演示。
- `profile.html`：我的，展示个人资料、认证状态、服务范围、菜品分类、消息和帮助入口。
- `styles.css`：共享移动端 App shell、底部导航、状态 tabs、卡片、表单、消息、钱包、认证和响应式样式。
- `app.js`：共享本地交互，包括底部导航高亮、tab 筛选、服务单状态推进、消息输入动画、菜品状态切换、认证步骤切换、表单阻止提交、Toast 和静态演示反馈。

## 统一主题设定

后续新增静态页面时，默认使用以下主题变量作为固定视觉规范。如需调整颜色、字体、圆角、阴影或深色模式变量，需要同步更新本节。

```css
:root {
  --card: #f7f8f8;
  --ring: #1da1f2;
  --input: #f7f9fa;
  --muted: #E5E5E6;
  --accent: #E3ECF6;
  --border: #e1eaef;
  --radius: 1.3rem;
  --chart-1: #1e9df1;
  --chart-2: #00b87a;
  --chart-3: #f7b928;
  --chart-4: #17bf63;
  --chart-5: #e0245e;
  --popover: #ffffff;
  --primary: #1e9df1;
  --sidebar: #f7f8f8;
  --font-mono: Menlo, monospace;
  --font-sans: Open Sans, sans-serif;
  --secondary: #0f1419;
  --background: #ffffff;
  --font-serif: Georgia, serif;
  --foreground: #0f1419;
  --destructive: #f4212e;
  --shadow-blur: 0px;
  --shadow-color: rgba(29,161,242,0.15);
  --sidebar-ring: #1da1f2;
  --shadow-spread: 0px;
  --shadow-opacity: 0;
  --sidebar-accent: #E3ECF6;
  --sidebar-border: #e1e8ed;
  --card-foreground: #0f1419;
  --shadow-offset-x: 0px;
  --shadow-offset-y: 2px;
  --sidebar-primary: #1e9df1;
  --muted-foreground: #0f1419;
  --accent-foreground: #1e9df1;
  --popover-foreground: #0f1419;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #0f1419;
  --secondary-foreground: #ffffff;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #1e9df1;
  --sidebar-primary-foreground: #ffffff;
}

.dark {
  --card: #17181c;
  --ring: #1da1f2;
  --input: #22303c;
  --muted: #181818;
  --accent: #061622;
  --border: #242628;
  --chart-1: #1e9df1;
  --chart-2: #00b87a;
  --chart-3: #f7b928;
  --chart-4: #17bf63;
  --chart-5: #e0245e;
  --popover: #000000;
  --primary: #1c9cf0;
  --sidebar: #17181c;
  --secondary: #f0f3f4;
  --background: #000000;
  --foreground: #e7e9ea;
  --destructive: #f4212e;
  --shadow-color: rgba(29,161,242,0.25);
  --sidebar-ring: #1da1f2;
  --sidebar-accent: #061622;
  --sidebar-border: #38444d;
  --card-foreground: #d9d9d9;
  --sidebar-primary: #1da1f2;
  --muted-foreground: #72767a;
  --accent-foreground: #1c9cf0;
  --popover-foreground: #e7e9ea;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #d9d9d9;
  --secondary-foreground: #0f1419;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #1c9cf0;
  --sidebar-primary-foreground: #ffffff;
}

@theme inline {
  --color-card: var(--card);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-border: var(--border);
  --color-radius: var(--radius);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-popover: var(--popover);
  --color-primary: var(--primary);
  --color-sidebar: var(--sidebar);
  --color-font-mono: var(--font-mono);
  --color-font-sans: var(--font-sans);
  --color-secondary: var(--secondary);
  --color-background: var(--background);
  --color-font-serif: var(--font-serif);
  --color-foreground: var(--foreground);
  --color-destructive: var(--destructive);
  --color-shadow-blur: var(--shadow-blur);
  --color-shadow-color: var(--shadow-color);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-shadow-spread: var(--shadow-spread);
  --color-shadow-opacity: var(--shadow-opacity);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-border: var(--sidebar-border);
  --color-card-foreground: var(--card-foreground);
  --color-shadow-offset-x: var(--shadow-offset-x);
  --color-shadow-offset-y: var(--shadow-offset-y);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent-foreground: var(--accent-foreground);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary-foreground: var(--primary-foreground);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
}
```

## 开发注意事项

- `takeout-merchant/`、`takeout-rider/` 当前仅包含 `.gitkeep`，用于让 Git 保留空目录；业务页面尚未开始编写。
- 不在本仓库创建 `customer`、`client`、`user` 等 C 端目录，除非后续任务明确要求。
- 修改页面时优先保持最小必要改动，不做无关重构。
- 如果新增 JavaScript 文件，优先运行 `node --check <file>` 检查语法。
- 如果新增 HTML 页面，需要在浏览器中打开页面进行基础展示和交互验证。
- 修改代码后需要同步更新相关文档。
