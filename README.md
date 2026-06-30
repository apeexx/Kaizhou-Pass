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
│   ├── assets/
│   │   └── images/
│   ├── index.html
│   ├── products.html
│   ├── orders.html
│   ├── analytics.html
│   ├── earnings.html
│   ├── settings.html
│   ├── styles.css
│   └── app.js
├── private-chef-admin/
│   ├── assets/
│   │   └── images/
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
│   ├── assets/
│   │   └── images/
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
├── private-chef-merchant-demo/
│   ├── index.html
│   ├── AGENTS.md
│   ├── README.md
│   ├── assets/
│   │   ├── css/
│   │   │   ├── base.css
│   │   │   └── app.css
│   │   ├── js/
│   │   │   └── mock.js
│   │   └── images/
│   └── pages/
│       ├── auth/
│       ├── verify/
│       ├── dashboard/
│       ├── orders/
│       ├── chefs/
│       ├── menu/
│       ├── finance/
│       ├── data/
│       └── mine/
├── takeout-merchant/
│   ├── index.html
│   ├── AGENTS.md
│   ├── README.md
│   ├── assets/
│   └── pages/
└── takeout-rider/
    ├── index.html
    ├── AGENTS.md
    ├── README.md
    ├── assets/
    └── pages/
```

## 目录说明

- `ecommerce-merchant/`：电商商户端相关静态页面目录，当前包含控制台、商品管理、订单管理、数据分析、收益结算、店铺设置页面。
- `private-chef-admin/`：私厨上门后台管理端静态页面目录，当前包含控制台、服务套餐、预约管理、日程排班、客户沟通、收益结算、店铺设置页面。
- `private-chef-app/`：私厨厨师手机前台管理端静态页面目录，当前包含指定预约、登录、认证、消息、菜品、分类、收钱和个人页面。
- `private-chef-merchant-demo/`：私厨上门商户端手机静态演示目录，面向入驻店铺、私厨团队和商家负责人，当前包含登录入驻、审核、商户首页、订单、厨师、套餐、财务、数据和我的页面。
- `takeout-merchant/`：外卖商户端手机静态演示目录，面向店铺老板、店长和商家员工，当前包含入驻登录、商户首页、订单、商品、财务、数据和我的页面。
- `takeout-rider/`：外卖骑手端手机静态演示目录，面向外卖配送骑手，当前包含登录注册、入驻审核、骑手首页、订单配送、路线地图、收入、消息和我的页面。

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

## 私厨上门商户端手机演示页面

当前私厨上门商户端为纯前端静态 H5 演示，不依赖后端、数据库、真实接口、真实登录鉴权、真实上传、构建工具或第三方前端框架。可直接在浏览器中打开：

```text
private-chef-merchant-demo/index.html
```

推荐演示流程：

1. 从 `private-chef-merchant-demo/index.html` 查看全部页面导航。
2. 进入 `pages/auth/login.html`，点击登录进入 `pages/dashboard/merchant-home.html`。
3. 从 `pages/auth/register.html` 进入 `pages/auth/verify-code.html`，再进入店铺资料、资质上传和审核结果。
4. 在 `pages/dashboard/merchant-home.html` 查看店铺 Logo、店铺名称、认证状态、营业状态、订单指标、快捷入口、最新订单和底部导航。
5. 进入订单列表、订单详情、分配厨师和服务进度，演示商户把订单分配给店铺旗下厨师的流程。
6. 查看厨师团队、套餐管理、菜品库、钱包结算、经营数据和我的店铺。

页面说明：

- `index.html`：演示入口，提供主要页面导航。
- `pages/auth/`：商户登录、注册和验证码确认。
- `pages/verify/`：店铺资料、资质上传和审核结果。
- `pages/dashboard/merchant-home.html`：商户首页。
- `pages/orders/`：订单列表、订单详情、订单派单和服务进度。
- `pages/chefs/`：店铺旗下厨师团队和厨师详情。
- `pages/menu/`：商户自己的私厨套餐和菜品库。
- `pages/finance/`：钱包和订单结算记录。
- `pages/data/data-overview.html`：经营数据概览。
- `pages/mine/profile.html`：我的店铺入口。
- `assets/css/base.css`、`assets/css/app.css`：移动端静态页面基础样式和业务样式。
- `assets/js/mock.js`：本地静态交互，包括 tab 筛选、toast、上传卡片状态、厨师选择和表单演示跳转。

本项目根目录当前没有 `package.json`，因此没有可运行的 `npm run lint`、`npm run test` 或 `npm run build` 脚本。新增或修改 JavaScript 文件时，优先使用 `node --check <file>` 检查语法。

## 本 PR 图片资产来源

本 PR 为 `ecommerce-merchant/`、`private-chef-admin/`、`private-chef-app/`、`private-chef-merchant-demo/` 增加了本地化演示图片，分别放在各目录的 `assets/images/` 下。图片仅用于静态页面的餐饮、菜品、备餐、订单和资料展示，不代表真实客户、员工、订单、地址或商户资质。

图片来源为 Pexels 免费图库，已下载到本地后通过相对路径引用：

- `chef-prep.jpg`：厨师备餐/厨房场景，来源 `https://www.pexels.com/photo/man-in-white-dress-shirt-and-blue-vest-holding-a-silver-knife-4252137/`。
- `chinese-set-lunch.jpg`：餐桌菜品组合展示，来源 `https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/`。
- `fusion-dishes.jpg`：菜品/轻食组合展示，来源 `https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/`。
- `takeout-box.jpg`：餐食组合展示，来源 `https://www.pexels.com/photo/delicious-burger-with-fried-egg-and-fries-4393021/`。
- `dumplings.jpg`：中式饺子/汤品展示，来源 `https://www.pexels.com/photo/round-white-and-blue-ceramic-bowl-with-cooked-ball-soup-and-brown-wooden-chopsticks-955137/`。

## 外卖商户端手机演示页面

当前外卖商户端为纯前端静态 H5 演示，不依赖后端、数据库、真实接口、真实登录鉴权、真实上传、构建工具或第三方前端框架。可直接在浏览器中打开：

```text
takeout-merchant/index.html
```

推荐演示流程：

1. 从 `takeout-merchant/index.html` 查看全部页面导航。
2. 进入 `pages/auth/login.html`，点击登录进入 `pages/dashboard/merchant-home.html`。
3. 从 `pages/auth/register.html` 进入店铺资料和审核结果。
4. 在 `pages/dashboard/merchant-home.html` 查看店铺名称、店铺头像、营业状态、评分、消息入口、订单指标、快捷入口、最新订单和底部导航。
5. 进入订单列表、订单详情和确认接单，演示商家处理待接单订单。
6. 查看商品管理、财务结算、经营数据和我的店铺。

页面说明：

- `index.html`：外卖商户端静态演示入口，提供主要页面导航。
- `pages/auth/`：外卖商户登录和注册。
- `pages/shop-verify/`：店铺入驻资料和审核结果。
- `pages/dashboard/merchant-home.html`：外卖商户首页工作台。
- `pages/orders/`：订单列表、订单详情和确认接单。
- `pages/goods/`：商品管理和商品编辑。
- `pages/finance/wallet.html`：财务结算和结算记录。
- `pages/data/data-overview.html`：经营数据概览。
- `pages/mine/profile.html`：我的/店铺资料入口。
- `assets/css/base.css`、`assets/css/app.css`：移动端静态页面基础样式和业务样式。
- `assets/js/mock.js`：本地静态交互，包括 tab 筛选、toast、营业状态切换、上传占位状态和表单演示跳转。

## 外卖骑手端手机演示页面

当前外卖骑手端为纯前端静态 H5 演示，不依赖后端、数据库、真实接口、真实登录鉴权、真实上传、真实提现、真实地图或第三方前端框架。可直接在浏览器中打开：

```text
takeout-rider/index.html
```

推荐演示流程：

1. 从 `takeout-rider/index.html` 查看全部页面导航。
2. 进入 `pages/auth/login.html`，点击登录进入 `pages/dashboard/rider-home.html`。
3. 从 `pages/auth/register.html` 进入骑手资料、身份证认证、健康证上传和审核结果。
4. 在 `pages/dashboard/rider-home.html` 查看骑手姓名、认证状态、接单状态、今日指标、当前配送任务和附近可抢订单。
5. 进入订单大厅、订单详情、当前订单、确认取餐和确认送达，演示骑手配送流程。
6. 查看静态路线地图、收入中心、收入明细、消息中心和我的页面。

页面说明：

- `index.html`：外卖骑手端静态演示入口，提供主要页面导航。
- `pages/auth/`：骑手登录和注册。
- `pages/rider-verify/`：骑手基础资料、身份证认证、健康证上传和审核结果。
- `pages/dashboard/rider-home.html`：骑手首页工作台。
- `pages/orders/`：订单大厅、订单详情、当前订单、取餐确认、送达确认、异常上报和历史订单。
- `pages/route/route-map.html`：静态路线地图占位，不接真实地图接口。
- `pages/income/`：收入首页和收入明细。
- `pages/message/message-center.html`：消息中心。
- `pages/mine/`：我的、工作设置和设置。
- `assets/css/base.css`、`assets/css/app.css`：移动端静态页面基础样式和业务样式。
- `assets/js/mock.js`：本地静态交互，包括底部导航高亮、toast、静态表单跳转、tab 筛选、上传占位状态和接单开关演示。

## 开发注意事项

- `takeout-rider/` 当前为外卖骑手端纯前端静态演示目录，后续修改需要保持配送端定位，不接后端、数据库、真实接口或真实地图。
- 不在本仓库创建 `customer`、`client`、`user` 等 C 端目录，除非后续任务明确要求。
- 修改页面时优先保持最小必要改动，不做无关重构。
- 如果新增 JavaScript 文件，优先运行 `node --check <file>` 检查语法。
- 如果新增 HTML 页面，需要在浏览器中打开页面进行基础展示和交互验证。
- 修改代码后需要同步更新相关文档。
