# 外卖商户端静态演示

本目录是“外卖商户端”手机端纯前端静态演示页面，面向店铺老板、店长和商家员工。

## 定位

- 只包含 HTML、CSS、原生 JavaScript 静态页面。
- 不包含后端、接口、数据库、真实登录鉴权、真实支付结算或真实上传能力。
- 所有订单、商品、财务和经营数据均为静态演示数据。
- 页面宽度按移动端 375px 优先设计，桌面浏览器中以手机端容器居中显示。
- 当前视觉按项目主题统一为轻电商 + 本地生活特卖风格：白底、浅灰背景、大圆角白卡、橙红主按钮和真实餐饮/门店图片。

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

## 图片资产说明

- `assets/images/` 中图片仅用于静态演示，来自公开图库或可引用来源。正式商用前应替换为项目自有或已确认授权素材。
- 当前入口、登录注册、入驻审核、商户首页、订单、商品、财务、数据和我的页面均复用本目录既有图片资产，主要包括 `restaurant-store.jpg`、`chef-kitchen.jpg`、`takeout-packaging.jpg`、`fish-dish.jpg`、`soup-dish.jpg`、`private-dinner.jpg`、`family-banquet.jpg`。
- 图片来源以 Pexels / Unsplash 免费图库为主，根目录 README 已记录同批静态演示图片来源；页面中不包含真实客户、员工、订单或商户资质图片。

## 本轮主题重写说明

- 当前 PR 全部静态页面按根目录 `AGENTS.md` 的“轻电商 + 本地生活特卖风格”统一处理。
- 页面仍为 HTML、CSS、原生 JavaScript 静态演示，不接后端、数据库、真实接口、真实地图或真实支付能力。
- 视觉统一为浅灰页面背景、白色圆角卡片、橙红主色 `#FF4B1A`、价格/状态突出和弱阴影。
- 页面图片均为本地演示素材，正式商用前需替换为自有或确认授权素材。
