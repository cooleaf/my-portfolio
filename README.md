# 赵晓光个人作品集网站

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 本地预览生产版本
npx serve dist
```

## 📁 项目结构

```
my-portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # 根布局
│       ├── page.tsx        # 首页
│       └── globals.css     # 全局样式
├── dist/                   # 构建输出
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署
├── deploy-to-tencent.sh    # 手动部署脚本
└── next.config.ts          # Next.js 配置
```

## ☁️ 部署方式

### 方式1: GitHub Actions 自动部署

1. Fork 或创建 GitHub 仓库
2. 在仓库 Settings → Secrets 中添加：
   - `TENCENT_SECRET_ID`
   - `TENCENT_SECRET_KEY`
   - `COS_BUCKET`
   - `COS_REGION`
3. 推送到 main 分支即可自动部署

### 方式2: 手动部署

```bash
# 配置腾讯云 CLI
tccli configure

# 运行部署脚本
./deploy-to-tencent.sh
```

## 🛠️ 技术栈

- **框架**: Next.js 16 + React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: Geist (Vercel)
- **部署**: 腾讯云 COS / CDN

## 📝 自定义内容

编辑 `src/app/page.tsx` 修改：
- 个人信息
- 项目展示
- 联系方式

编辑 `src/app/layout.tsx` 修改：
- 页面标题
- SEO 描述

## 📄 许可证

MIT
