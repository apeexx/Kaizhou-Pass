# Kaizhou-Golden-Chef

开州金厨项目当前处于前端静态页面初始化阶段。

## 当前开发范围

- 目前只需要编写前端静态页面。
- 页面以 HTML、CSS、JavaScript 为主。
- 当前阶段暂不涉及后端服务、数据库、接口联调、文件落盘、构建工具或部署脚本。
- 后续如需增加框架、依赖、接口或后端能力，需要先更新项目文档并确认实现范围。

## 当前项目结构

```text
Kaizhou-Golden-Chef/
├── AGENTS.md
├── README.md
├── ecommerce/
│   └── .gitkeep
├── enterprise-services/
│   └── .gitkeep
├── private-chef/
│   └── .gitkeep
└── takeout/
    └── .gitkeep
```

## 目录说明

- `ecommerce/`：电商相关静态页面目录。
- `enterprise-services/`：企业服务相关静态页面目录。
- `private-chef/`：私厨上门相关静态页面目录。
- `takeout/`：外卖相关静态页面目录。

## 开发注意事项

- 每个业务目录当前仅包含 `.gitkeep`，用于让 Git 保留空目录；后续用于放置对应业务的静态 HTML 页面和相关静态资源。
- 修改页面时优先保持最小必要改动，不做无关重构。
- 如果新增 JavaScript 文件，优先运行 `node --check <file>` 检查语法。
- 如果新增 HTML 页面，需要在浏览器中打开页面进行基础展示和交互验证。
- 修改代码后需要同步更新相关文档。
