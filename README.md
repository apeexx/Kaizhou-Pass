# Kaizhou-Golden-Chef

开州金厨项目当前以纯静态前端页面展示为主，本批次已落地外卖商家端与骑手端的首批 H5 演示页面。

## 当前开发范围

- 当前只做 `takeout-merchant/` 与 `takeout-rider/` 两个独立静态 H5 App。
- 页面技术仅使用 HTML、CSS、JavaScript。
- 两个端独立打开、独立跳转，互相之间没有入口互跳。
- 当前项目没有后端服务、数据库、接口联调、构建脚本或部署脚本。
- C 端页面仍由其他人负责，本仓库只保留非 C 端目录。

## 当前项目结构

```text
Kaizhou-Golden-Chef/
├── AGENTS.md
├── README.md
├── docs/
│   └── takeout-h5-core-pr-scope.md
├── shared/
│   ├── common.js
│   ├── common.test.js
│   ├── mobile-app.css
│   └── theme.css
├── ecommerce-merchant/
│   └── .gitkeep
├── private-chef-merchant/
│   └── .gitkeep
├── takeout-merchant/
│   ├── index.html
│   ├── app/
│   └── onboarding/
└── takeout-rider/
    ├── index.html
    ├── app/
    └── onboarding/
```

## 目录说明

- `shared/`：双端共用的主题变量、手机端样式和轻交互脚本。
- `takeout-merchant/`：外卖商家端静态页面。
- `takeout-rider/`：外卖骑手端静态页面。
- `ecommerce-merchant/`：预留给电商商户端。
- `private-chef-merchant/`：预留给私厨上门商户端或厨师端。

## 商家端页面结构

- `takeout-merchant/index.html`：商家端封面页
- `takeout-merchant/onboarding/apply.html`：入驻申请页
- `takeout-merchant/onboarding/reviewing.html`：审核中页
- `takeout-merchant/onboarding/success.html`：开通成功页
- `takeout-merchant/app/home.html`：工作台
- `takeout-merchant/app/orders.html`：订单列表
- `takeout-merchant/app/order-detail.html`：订单详情
- `takeout-merchant/app/products.html`：商品管理
- `takeout-merchant/app/profile.html`：我的

商家端底部 Tab 固定为：`工作台 / 订单 / 商品 / 我的`

## 骑手端页面结构

- `takeout-rider/index.html`：骑手端封面页
- `takeout-rider/onboarding/apply.html`：入驻申请页
- `takeout-rider/onboarding/reviewing.html`：审核中页
- `takeout-rider/onboarding/success.html`：入驻成功页
- `takeout-rider/app/home.html`：首页
- `takeout-rider/app/hall.html`：接单大厅
- `takeout-rider/app/delivery-detail.html`：配送详情
- `takeout-rider/app/earnings.html`：收入
- `takeout-rider/app/profile.html`：我的

骑手端底部 Tab 固定为：`首页 / 接单 / 收入 / 我的`

## 当前已实现的轻交互

- 商家端：
  - 工作台营业状态切换
  - 订单页筛选高亮
  - 商品页上下架状态切换
  - 订单详情状态循环：`待接单 -> 备餐中 -> 待骑手取货 -> 已完成 -> 回到待接单`
- 骑手端：
  - 首页在线/休息状态切换
  - 接单大厅筛选高亮
  - 收入页时间筛选高亮
  - 配送详情状态循环：`取货中 -> 配送中 -> 已送达 -> 回到取货中`

## 当前明确不做的模块

- 店铺装修
- 可视化监控
- 食材溯源
- 二次返输
- 站点运营
- 等级管理
- 跑单奖励 / 打赏
- 售后退款 / 投诉处理
- 复杂经营统计深页

## 如何打开页面

- 商家端入口：直接打开 `takeout-merchant/index.html`
- 骑手端入口：直接打开 `takeout-rider/index.html`
- 两端都采用手机壳居中展示；移动端打开时会自动切换为全宽 H5 视图

## 本地验证建议

- 语法检查：
  - `node --check shared/common.js`
  - `node --check shared/common.test.js`
- 交互逻辑测试：
  - `node --test shared/common.test.js`
- 浏览器验证：
  - 打开 `takeout-merchant/index.html`
  - 打开 `takeout-rider/index.html`
  - 分别检查封面页、入驻流程、底部 Tab、状态切换和筛选高亮

## 开发注意事项

- 不在本仓库创建 `customer`、`client`、`user` 等 C 端目录，除非后续任务明确要求。
- 修改页面时优先保持最小必要改动，不做无关重构。
- 修改 JavaScript 后优先运行 `node --check <file>`。
- 修改 HTML 页面后需要在浏览器中进行基础展示和交互验证。
- 若后续需要引入框架、依赖、接口或后端能力，应先更新文档并确认范围。
