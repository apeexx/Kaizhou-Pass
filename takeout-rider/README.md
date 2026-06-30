# 外卖骑手端静态演示

本目录是“外卖骑手端 / 配送端”手机端纯前端静态演示页面，面向外卖配送骑手。

## 定位

- 只包含 HTML、CSS、原生 JavaScript 静态页面。
- 不包含后端、接口、数据库、真实登录鉴权、真实提现、真实上传或真实地图能力。
- 所有订单、路线、收入和消息数据均为静态演示数据。
- 页面宽度按移动端 375px 优先设计，桌面浏览器中以手机端容器居中显示。
- 当前视觉按项目主题统一为轻电商 + 本地生活特卖风格：白底、浅灰背景、大圆角白卡、橙红主按钮和真实配送/门店/餐品图片。

## 本地查看

可直接在浏览器打开：

```text
takeout-rider/index.html
```

也可以用 VS Code Live Server 打开 `takeout-rider/index.html`。

## 推荐演示流程

1. 登录：`pages/auth/login.html`
2. 骑手首页：`pages/dashboard/rider-home.html`
3. 订单大厅：`pages/orders/order-hall.html`
4. 订单详情：`pages/orders/order-detail.html`
5. 当前订单：`pages/orders/current-order.html`
6. 到店取餐：`pages/orders/pickup-confirm.html`
7. 确认送达：`pages/orders/delivery-confirm.html`
8. 收入中心：`pages/income/income-home.html`
9. 我的：`pages/mine/profile.html`

## 页面目录

```text
takeout-rider/
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
    ├── rider-verify/
    ├── dashboard/
    ├── orders/
    ├── route/
    ├── income/
    ├── message/
    └── mine/
```

## 页面说明

- `index.html`：外卖骑手端静态演示入口，提供全部页面链接和推荐演示流程。
- `pages/auth/`：骑手登录和注册。
- `pages/rider-verify/`：骑手基础资料、身份证认证、健康证上传和审核结果。
- `pages/dashboard/rider-home.html`：骑手首页，展示接单状态、今日指标、当前任务和附近可抢订单。
- `pages/orders/`：订单大厅、订单详情、当前订单、取餐确认、送达确认、异常上报和历史订单。
- `pages/route/route-map.html`：静态路线地图占位，不接真实地图接口。
- `pages/income/`：收入首页和收入明细。
- `pages/message/message-center.html`：消息中心。
- `pages/mine/`：我的、工作设置和设置。
- `assets/css/base.css`、`assets/css/app.css`：移动端静态页面基础样式和业务样式。
- `assets/js/mock.js`：本地静态交互，包括底部导航高亮、toast、静态表单跳转、tab 筛选、上传占位状态和接单开关演示。

## 原型图改版说明

- 订单链路页面参考“骑手配送”“订单详情”“自提取餐码”等移动端原型的通用视觉，使用白底、顶部返回栏、大圆角浅灰卡片、商品行、费用明细和底部橙色操作按钮。
- `current-order.html`、`order-detail.html`、`pickup-confirm.html`、`delivery-confirm.html` 为重点改版页面，文案仍保持骑手配送端场景。
- `rider-home.html`、`order-hall.html`、`route-map.html` 已同步为同一套原型风格，方便从首页进入订单配送链路。
- `assets/images/` 中图片仅用于静态演示，来自公开图库或可引用来源。正式商用前应替换为项目自有或已确认授权素材。
- 当前入口、登录注册、入驻审核、骑手首页、订单配送、收入、消息和我的页面均复用本目录既有图片资产，主要包括 `delivery-rider.jpg`、`restaurant-store.jpg`、`restaurant-kitchen.jpg`、`takeout-packaging.jpg`、`red-braised-pork.jpg`、`noodle-bowl.jpg`、`chef-kitchen.jpg`。
- 证件和健康证上传位只使用配送、打包、厨房等通用图片做资料准备占位，不展示真实身份证或健康证样张。
- 本目录仍不包含真实电话、地图 SDK、定位、支付、提现、上传、接口请求或后端逻辑。
