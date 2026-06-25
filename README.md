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
│   └── .gitkeep
├── private-chef-merchant/
│   └── .gitkeep
├── takeout-merchant/
│   └── .gitkeep
└── takeout-rider/
    └── .gitkeep
```

## 目录说明

- `ecommerce-merchant/`：电商商户端相关静态页面目录。
- `private-chef-merchant/`：私厨上门商户端或厨师端相关静态页面目录。
- `takeout-merchant/`：外卖商户端相关静态页面目录。
- `takeout-rider/`：外卖骑手端相关静态页面目录。

## 开发注意事项

- 每个业务目录当前仅包含 `.gitkeep`，用于让 Git 保留空目录；业务页面尚未开始编写。
- 不在本仓库创建 `customer`、`client`、`user` 等 C 端目录，除非后续任务明确要求。
- 修改页面时优先保持最小必要改动，不做无关重构。
- 如果新增 JavaScript 文件，优先运行 `node --check <file>` 检查语法。
- 如果新增 HTML 页面，需要在浏览器中打开页面进行基础展示和交互验证。
- 修改代码后需要同步更新相关文档。
