# Kaizhou-Golden-Chef

开州金厨当前仓库以纯静态 HTML/CSS/JS 展示为主，现阶段重点完成 `takeout-merchant` 与 `takeout-rider` 两个独立的 H5 App 原型。

这一版已经从“宣传封面页”重构为“真实 App 首屏体验”：

- 首先进入手机号登录页
- 登录后根据演示手机号判断账号状态
- 已认证账号直接进入正式 App
- 审核中账号先进入进度页
- 未入驻账号先走资料填写流程

页面流参考了 `WanyueKJ/Food-delivery-uniapp` 的前端组织方式，但保留了本项目的白底亮蓝视觉和纯静态实现。

## 当前开发范围

- 只做 `takeout-merchant/` 与 `takeout-rider/` 两个独立静态 H5 App
- 页面技术仅使用 HTML、CSS、JavaScript
- 两个端独立打开、独立跳转，彼此没有互相进入的入口
- 项目没有后端、数据库、接口联调、构建脚本和部署脚本
- 商家端与骑手端都支持轻量演示交互，不依赖真实短信或登录服务
- 全站图标统一使用本地内联 SVG sprite，来源参考 Lucide 开源图标，确保直接打开 HTML 时也能正常显示

## 项目结构

```text
Kaizhou-Golden-Chef/
├── README.md
├── shared/
│   ├── common.js
│   ├── common.test.js
│   ├── icons.svg
│   ├── mobile-app.css
│   └── theme.css
├── takeout-merchant/
│   ├── index.html
│   ├── app/
│   └── onboarding/
├── takeout-rider/
│   ├── index.html
│   ├── app/
│   └── onboarding/
├── ecommerce-merchant/
└── private-chef-merchant/
```

## 商家端页面

- `takeout-merchant/index.html`
  - 商家登录页
  - 输入手机号、验证码后检测商家入驻状态
- `takeout-merchant/onboarding/apply.html`
  - 门店资料填写页
- `takeout-merchant/onboarding/reviewing.html`
  - 资料审核中页
- `takeout-merchant/onboarding/success.html`
  - 门店开通成功页
- `takeout-merchant/app/home.html`
  - 订单中心首页
- `takeout-merchant/app/orders.html`
  - 订单列表
- `takeout-merchant/app/order-detail.html`
  - 订单详情
- `takeout-merchant/app/products.html`
  - 商品管理
- `takeout-merchant/app/profile.html`
  - 我的 / 店铺资料

商家端底部 Tab：`首页 / 订单 / 商品 / 我的`

## 骑手端页面

- `takeout-rider/index.html`
  - 骑手登录页
  - 输入手机号、验证码后检测骑手认证状态
- `takeout-rider/onboarding/apply.html`
  - 骑手资料填写页
- `takeout-rider/onboarding/reviewing.html`
  - 审核中页
- `takeout-rider/onboarding/success.html`
  - 入驻成功页
- `takeout-rider/app/home.html`
  - 骑手首页
- `takeout-rider/app/hall.html`
  - 接单大厅
- `takeout-rider/app/delivery-detail.html`
  - 配送详情
- `takeout-rider/app/earnings.html`
  - 收入页
- `takeout-rider/app/profile.html`
  - 我的

骑手端底部 Tab：`首页 / 接单 / 收入 / 我的`

## 演示登录规则

商家端手机号尾号规则：

- `01` 或 `11`：已认证，进入正式 App
- `02` 或 `22`：审核中，进入审核进度页
- 其他尾号：未入驻，进入资料填写页

骑手端手机号尾号规则：

- `01` 或 `11`：已认证，进入正式 App
- `02` 或 `22`：审核中，进入审核进度页
- 其他尾号：未报名，进入资料填写页

页面里也提供了演示账号按钮，方便直接切换三种状态。

## 已实现交互

- 商家端：
  - 登录页手机号状态判断
  - 营业状态切换
  - 订单筛选高亮
  - 商品上下架切换
  - 订单详情状态循环：`待接单 -> 备餐中 -> 待骑手取货 -> 已完成 -> 回到待接单`
- 骑手端：
  - 登录页手机号状态判断
  - 在线 / 休息切换
  - 接单大厅筛选高亮
  - 收入时间筛选高亮
  - 配送详情状态循环：`取货中 -> 配送中 -> 已送达 -> 回到取货中`

## 当前明确不做

- 店铺装修
- 可视化监控
- 食材溯源
- 二次返输
- 站点运营
- 等级管理
- 跑单奖励 / 打赏
- 售后退款 / 投诉处理
- 复杂经营统计深页

## 如何打开

- 商家端：直接打开 `takeout-merchant/index.html`
- 骑手端：直接打开 `takeout-rider/index.html`

桌面端会以居中的手机壳形式展示，移动端则自动切换为全宽 H5。

## 验证建议

- `node --check shared/common.js`
- `node --check shared/common.test.js`
- `node --test shared/common.test.js`
- 浏览器分别打开：
  - `takeout-merchant/index.html`
  - `takeout-rider/index.html`

重点检查：

- 登录页手机号状态分支是否正确
- 入驻流程能否从资料页走到审核中和成功页
- 底部 Tab 是否可完整跳转
- 商家端订单状态循环、商品开关是否正常
- 骑手端配送状态循环、在线状态和筛选高亮是否正常

## `.gitignore` 说明

当前仓库已补充常见本地开发忽略项，重点避免以下内容误提交：

- `.codex/`、`.agents/`、`.superpowers/`
- `.vscode/`、`.idea/`、`.hbuilderx/`
- `node_modules/`、`dist/`、`coverage/`、`unpackage/`
- 日志、临时文件与系统文件
