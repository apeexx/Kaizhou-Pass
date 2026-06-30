# 外卖商户端静态演示

本目录是“外卖商户端”手机端纯前端静态演示页面，面向店铺老板、店长和商家员工。

## 定位

- 只包含 HTML、CSS、原生 JavaScript 静态页面。
- 不包含后端、接口、数据库、真实登录鉴权、真实支付结算或真实上传能力。
- 所有订单、商品、财务和经营数据均为静态演示数据。
- 页面宽度按移动端 375px 优先设计，桌面浏览器中以手机端容器居中显示。

## 本地查看

可直接在浏览器打开：

```text
takeout-merchant/index.html
```

也可以用 VS Code Live Server 打开 `takeout-merchant/index.html`。

## 推荐演示流程

1. 登录：`pages/auth/login.html`
2. 商户首页：`pages/dashboard/merchant-home.html`
3. 订单列表：`pages/orders/order-list.html`
4. 订单详情：`pages/orders/order-detail.html`
5. 确认接单：`pages/orders/order-accept.html`
6. 商品管理：`pages/goods/goods-list.html`
7. 财务结算：`pages/finance/wallet.html`
8. 经营数据：`pages/data/data-overview.html`
9. 我的：`pages/mine/profile.html`

## 页面目录

```text
takeout-merchant/
├── index.html
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   └── app.css
│   ├── js/
│   │   └── mock.js
│   └── images/
└── pages/
    ├── auth/
    │   ├── login.html
    │   └── register.html
    ├── shop-verify/
    │   ├── shop-info.html
    │   └── verify-result.html
    ├── dashboard/
    │   └── merchant-home.html
    ├── orders/
    │   ├── order-list.html
    │   ├── order-detail.html
    │   └── order-accept.html
    ├── goods/
    │   ├── goods-list.html
    │   └── goods-edit.html
    ├── finance/
    │   └── wallet.html
    ├── data/
    │   └── data-overview.html
    └── mine/
        └── profile.html
```

## 页面说明

- `index.html`：外卖商户端演示入口，提供全部页面链接和推荐演示流程。
- `pages/auth/login.html`：商户登录页，登录按钮进入商户首页。
- `pages/auth/register.html`：商户注册页，参考开店入驻流程做静态注册展示。
- `pages/shop-verify/shop-info.html`：店铺入驻资料页。
- `pages/shop-verify/verify-result.html`：审核结果页，展示审核中、审核通过、审核失败状态。
- `pages/dashboard/merchant-home.html`：商户首页工作台，展示店铺状态、订单指标、快捷入口和最新订单。
- `pages/orders/`：订单列表、订单详情和确认接单流程。
- `pages/goods/`：商品列表和商品编辑静态页。
- `pages/finance/wallet.html`：财务结算页，展示收入、待结算、可提现和结算记录。
- `pages/data/data-overview.html`：经营数据页，使用静态卡片和 CSS 条形图模拟数据。
- `pages/mine/profile.html`：我的/店铺资料页，提供店铺资料、营业时间、配送设置、账户安全和客服入口。
- `assets/js/mock.js`：本地静态交互，包括 tab 筛选、toast、上传占位状态、营业状态切换和表单演示跳转。
