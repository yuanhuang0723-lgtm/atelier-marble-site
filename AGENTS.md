<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Atelier Marble 项目工程规范与安全铁律

## 一、技术栈基线 (Technology Stack Baseline)
- **核心框架**：Next.js 16.3.4 (App Router 架构, SSG 静态预渲染)
- **前端与样式**：React 19.0.0, TypeScript 6.0.3, Tailwind CSS 3.4.17
- **图像处理**：Sharp 0.35.4 (强制版本，提供 WebP/AVIF 转换与响应式 srcset)
- **边缘与部署**：OpenNext Cloudflare (`@opennextjs/cloudflare`) + Vercel
- **数据与通知**：Supabase (`@supabase/supabase-js`) + Nodemailer (阿里云企业邮箱 SMTP)
- **测试框架**：Playwright + Node 原生 test runner (`tsx --test`)

## 二、操作红线 (Operational Safety Red Lines)
1. **严禁擅自破坏工作区与文件**：
   - 严禁在未经用户逐条明确确认的情况下执行 `git restore`、`git reset`、`git clean`、`Remove-Item` 或直接删除任何源码目录、文档与资源。
   - 拟删除或清理的文件必须先输出清单供用户确认后方可操作。
2. **严格保留 9 个 301 重定向历史路由目录**：
   - 保留 `app/hotel-projects/`, `app/kitchen-countertops/` 等 9 个历史重定向路由目录，确保构建与 `scripts/check-public-routes.mjs` 校验通过，切勿擅自删除。
3. **闭环验证铁律**：
   - 任何代码修改前后，必须本地通过 `npx next build` 与 `node scripts/check-public-routes.mjs` 验证，严禁破坏既有构建产物与路由逻辑。

## 三、SEO 核心技术规范 (Technical SEO Standards)
1. **规范域名与重定向**：
   - 全站唯一规范主域名为 `https://ateliermarblestone.com`（强制非 www、强制 https）。
   - 必须通过 `next.config.mjs` 与 `proxy.ts` 对 `www.ateliermarblestone.com` 及其他别名域名实施 301/308 永久规范化重定向。
2. **页面基础标签规范**：
   - 所有公开可索引页面必须具备**唯一 H1 标题**。
   - 必须配置绝对路径的 `rel="canonical"` 规范标签。
   - 页面 Title 严格控制在 50~60 字符，Meta Description 严格控制在 140~160 字符（通过 `scripts/audit-seo.mjs` 校验）。
3. **结构化数据真实性原则**：
   - JSON-LD Schema（包含 `Organization`, `Article`, `FAQPage`, `HowTo` 等）中声明的所有步骤、文本、QA 问答，**必须在页面可见 DOM 中有完全对应的真实渲染文本**，杜绝隐藏标记以防 Google 处罚。
4. **Sitemap 动态保鲜**：
   - 核心业务页面在发生实质性内容、排版或结构优化时，必须同步将 `app/sitemap.ts` 中对应的 `lastModified` 更新为真实修改日期（ISO YYYY-MM-DD），主动向 Googlebot 传递重爬信号。

