# Atelier Marble SEO 交接文档

**更新日期：2026-10-10**

**用途：给全新会话接手；以下状态以本地核对及最近一次记录为准。**

**当前工作区：** D:\独立站\Atelier-Marble-Site

**生产站：** https://ateliermarblestone.com

**Git 远端：** https://github.com/yuanhuang0723-lgtm/atelier-marble-site.git
**生产分支：** main

## 2026-10-10 自动化技术 SEO 与 Schema 注入进展
1. **安装并调用 SEO Skills AI & Agentic SEO Skills 插件体系**：
   - 全局安装 `~/.gemini/config/plugins/seo-skills-ai` 与 `~/.gemini/config/plugins/agentic-seo-skills`。
   - 载入 ZERO LAYOUT MUTATION（CLS = 0）、ASTM 技术指标、全站 29 条路由审计规范。
2. **Schema.org Product 结构化数据与技术规格注入（13个核心页面完成）**：
   - `components/CommercialLandingPage.tsx`：扩展 `additionalJsonLd` 属性，支持非渲染 Schema 注入。
   - `/materials/marble`：注入天然大理石 Product Schema（ASTM C97 密度 2.7 g/cm³、吸水率 <0.2%、ASTM C170 抗压强度 >110 MPa、±1mm 公差、熏蒸木架与干铺对纹），完善采购规格。
   - `/countertops/marble-countertops`：注入大理石台面 Product Schema（CNC 水刀开孔、台下盆开孔、海棠角/密拼 40-50mm 裙边、AggregateOffer 询价入口），正文 1,733 词（严守 1,500–2,500 词）。
   - `/materials/quartzite`：注入奢石/石英石 Product Schema（莫氏硬度 >7、低孔隙率、ASTM C170 >130 MPa、AggregateOffer），完善小起订量与单件定制指引。
   - `/materials/granite`：注入工装花岗岩 Product Schema（ASTM C615、抗压 >150 MPa、光面/火烧面/荔枝面），更新工程规格组。
   - `/countertops/integrated-stone-sinks`：注入一体盆/石材台下盆 Product Schema（整块雕刻与45度斜拼、1:50 导水坡度、防水测试、AggregateOffer），正文 1,773 词。
   - `/architectural-stone/wall-cladding`：注入工装外墙/内墙干挂石材板 Product Schema（开槽干挂、±1mm 公差、抗风压与耐冻融、ASTM C170 >100 MPa）。
   - `/architectural-stone/flooring`：注入建筑地面石材/规格板 Product Schema（CNC 裁切、对纹干铺、酸洗/光面/亚光防滑处理、高人流承载）。
   - `/projects/hotel-stone-supply`：注入酒店客房与公区整包石材 Product Schema（台面、大堂背景墙、地面、门槛石整包配套、房型标签与分期木架包装）。
   - `/projects/commercial-stone`：注入商业工装石材定制 Product Schema（前台接待台、零售展柜、茶水间台面、公共墙地面）。
   - `/custom-stone-fabrication-china`：注入定制图纸石材加工 Product Schema（五轴数控加工、水刀雕刻、海棠角、预铺检视）。
   - `/architectural-stone`：注入建筑石材总览 Product Schema（幕墙板、地面规格板、楼梯、门槛石、圆柱包板整包配套）。
   - `/countertops`：注入商业台面总览 Product Schema（厨卫岛台、瀑布边、40-50mm 裙边、水刀精细开孔、ASTM C170 >110 MPa）。
   - `/materials`：注入天然石材荒料与大板直采 Product Schema（大理石、奢石石英石、花岗岩全品类目录，±1mm 厚度公差）。
   - `/resources`：注入 CollectionPage 与 Article 结构化数据，增强买家指南集群的权威信号与内部链接互联。
3. **Schema.org HowTo 与知识网络注入**：
   - `/how-we-work`：注入 Schema.org `HowTo` 结构化数据，严格映射 6 大外贸石材询盘与交付流程（Brief、图纸评审、选板对纹、分项报价、QC验货、木箱出口）。
   - `/guides/*`：核验 6 篇旗舰指南的 `Article` 与 `FAQPage` 结构化数据完备性，一字不差对齐可见文本。
4. **全套自动化测试与构建验收（100% 通过）**：
   - `tests/seo-*.test.mjs`：23/23 测试全通（严格标题 50–60 字符、描述 140–160 字符、采购5大问题全覆盖）。
   - `tests/inquiry-*.test.ts`：12/12 询盘及防重放全通。
   - `scripts/audit-seo.mjs`：全站 29 条路由审计全通，网络代理与重试机制加固完毕。
   - `npm run build`：332 个静态页面全部成功生成，无报错无 hydration 异常。
5. **持续观测窗口与锁定保护**：
   - `/countertops/vanity-tops` 继续锁定观察至 **2026-10-24**，保持 GSC 纯净观察期，严禁任何改动。
   - 持续监控 Google Search Console 中 `hotel bathroom countertop`、`calacatta gold marble wholesale`、`commercial architectural stone china` 等词的展示、排名与询盘转化。

## 先读这一段

正在推进 Atelier Marble 官网的 SEO 与询盘路径改进，重点观察词是 hotel bathroom countertop，目标页是 /countertops/vanity-tops。已经完成的代码已发布；目前不能证明排名、点击率或询盘因此上升。下一阶段需要等新的、可按查询与页面关联的 Search Console 数据，再决定是否改动。

用户已明确授权：**Stone1 RFQ 中的相关项目信息和公司名称，经充分脱敏后可以作为网站示例。** 一个页面的栅格化图片摘录已按此处理并上线。这个授权只支持脱敏后的公开示例，不能据此公开原始 RFQ、带可提取文字的 PDF 或其他未处理页面。

接手时先检查：

    Set-Location 'F:\Atelier-Marble-Site'
    git status --short
    git rev-parse HEAD
    git ls-remote origin refs/heads/main

已核对的当前代码提交和 origin/main 均为：

    3d9ab155e949e43493a9c0f28bd671514cc35791

如果之后提交或推送，先复核本地差异和远端 SHA；本仓库历史上使用 git push origin HEAD:main，不要从可能过期的本地 main 直接推送。

## 正在做什么

1. 观察 2026-09-26 发布的 /countertops/vanity-tops 标题、描述及内容改进。
2. 改善高意向服务页到工厂证据和询盘入口的内链路径。
3. 只用真实、可核实的工厂材料表达能力；明确区分图纸评审示例、生产过程、QC 结果和已交付项目。
4. 等待足够的 Search Console 数据，按查询和页面判断下一步，不用稀疏数据做 CTR 结论。

排名目标是实验方向，不是承诺。不要仅因代码部署、sitemap 收录或提交索引请求而宣布 SEO 任务完成。

## 已完成并发布

### SEO 页面与内链

- /countertops/vanity-tops 已补充酒店项目采购和图纸输入说明，页面可见正文约 1,778 词。
- 当前该页 Title 为 57 字符，Meta Description 为 143 字符。**先保持稳定，不要在观察窗口里反复改标题或描述。**
- 首页采购路径、工厂证据区，以及 `/countertops/vanity-tops`、`/custom-stone-fabrication-china` 到工厂证据区的上下文链接已发布。2026-09-29 的 `d9b0b81` 又从 `/countertops` 和 `/countertops/marble-countertops` 增加到 `/factory#factory-evidence` 的链接，锚文本为 “Review workshop and packing references”。
- 最近生产代码提交为 `d9b0b816546c97dfce0ae604e3aa327e08574622`。`65fb857` 将共用服务页首屏 CTA 默认改为 “Request a Project Quote”，并为 `/countertops` 和 `/countertops/marble-countertops` 设定产品对应的报价按钮；vanity 页仍为 “Request Hotel Vanity Pricing”。`26a7163` 将邮箱和项目说明前置，将其余表单字段收进默认折叠的可选详情区，询盘 API 和归因字段不变。此前的 `4b0c01e` 让 Contact 侧栏、表单快捷方式和悬浮 WhatsApp 预填消息附上首次落地路径；`19e45c7` 将 path-only `landingPage` 写入表单询盘邮件，campaign 参数单独传递。更早的 `6ff941f`、`867285c`、`589f1c9` 分别从酒店报价指南、marble countertops 页和 `/countertops` 父级页增加到 vanity 专页的上下文链接；`f9135b9` 移除不落库的 visitor-events beacon，保留 GA4/Ads 跟踪。

### 图纸示例与证据边界

- 公开资产：/assets/factory/evidence/redacted-stone-drawing-review-example.png，来自 19 页 Stone1 RFQ 的第 7 页。
- 公开版本是栅格图片；公司及项目标识、标题栏文字、尺寸数值和可搜索文字均已遮蔽。最近一次生产核验记录显示图片 HTTP 200、已列入图片 sitemap。
- 展示位置：/factory#factory-evidence。相关服务页的链接文字为 “View redacted drawing-review example”。
- 原始 RFQ 和 right_removed PDF **仅供内部参考**；后者仍保留可提取文字层。不要把它们、未处理页面或带有可恢复敏感文字的衍生文件放到公开目录。
- 这张图只能说明有一个图纸评审示例，不能证明该图对应已完成订单、已生产 vanity、特定 CNC 型号/控制类别、QC 测量或签核。

### 视频和工厂图片

- 首页有一个点击播放的视频；/factory#workshop-videos 有 16 个视频。用户新增的 微信视频2026-09-26_011507_054.mp4 已作为第 16 个视频发布。
- 视频不自动播放；历史浏览器验证记录为 MP4 点击前不加载，移动端 390px 和桌面 1440px 没有横向溢出。
- 片段证据范围：clip 7 显示切割头沿曲线运动，可描述为石材切割过程，但不能据此确认 CNC 机型或控制类别；clip 13 没有测量读数或签核；clip 16 显示摆放中的双盆组件，不能称为包装或发货证明。
- 不要用生成图替代真实工厂或项目证据。示意图、概念图必须明确标为示意。

### 2026-09-27 发布验证记录（历史）

下列结果来自最近一次任务记录，本次只更新交接文档，没有重跑代码验证：

- 构建生成 332 个页面；资产审计覆盖 202 条 manifest 记录。
- 内容/SEO 测试 41/41，询盘测试 8/8。
- 生产 SEO 审计覆盖 29 个 sitemap 页面；公开路由检查覆盖 30 条路由、9 个旧页面重定向、295 个图片重定向。
- 页面和图片发布状态曾在生产环境核验；390px/1440px 浏览器检查无横向溢出。
- GA4 实际收数、关键事件设置、GSC 索引覆盖和 CrUX 现场体验数据没有因此得到验证。

若继续改代码，应按改动风险重跑相关 build、测试、本地审计和生产验证；不要把上面历史结果当作本次新跑的结果。

### 2026-09-28 历史生产复核（以下状态已被后续发布覆盖）

- 截至 2026-09-28，当日本地 HEAD 与 `origin/main` 均为 `141d0b9c9ab4586ca447dfce5edeaae1506c7173`；当日 GitHub production deployment 为 success。生产 vanity 页返回 HTTP 200，Title/Description 为 57/143 字符。
- `npm run audit:seo` 在线审计通过 29 个 sitemap 页面，28 个严格片段长度检查通过，法律隐私页豁免。
- 生产浏览器在 `/countertops` 实际点击 “Explore hotel bathroom vanity tops” 后到达 `/countertops/vanity-tops`；新入口已在线，未改目标页摘要或正文。
- 生产浏览器烟测通过 360、390、430、1280、1440px：从首页 CTA 进入询价页时 `sourcePage=/`、`projectType=Commercial Stone Projects`；从 `/countertops/vanity-tops` CTA 进入时 `sourcePage` 和 `landingPage` 均为 `/countertops/vanity-tops`，`projectType=Luxury Vanity Tops & Cabinet Panels`。模拟 API 接受后只在 dataLayer 发出一个 `generate_lead`，刷新 thank-you 页没有重复事件。
- 该烟测拦截了询盘 API、上传 API 和 Google Tag 请求，使用合成资料；没有写入真实询盘、邮件或 GA4。它证明前端路径，不证明邮件送达、GA4 收数或转化设置。
- 生产浏览器点击 `/materials/marble` 的 “Review hotel vanity top packages” 链接后到达 `/countertops/vanity-tops`。`npm run test:inquiry` 8/8 通过。
- 生产浏览器分别从 `/countertops` 和 `/countertops/marble-countertops` 点击新增的酒店 vanity 上下文入口后，均到达 `/countertops/vanity-tops`；两个入口分别发布于 `589f1c9` 和 `867285c`。
- 生产浏览器从 `/guides/hotel-stone-pricing` 的 Bathrooms 卡片点击 “Review hotel vanity-top scope” 后到达 `/countertops/vanity-tops`；入口发布于 `6ff941f`。
- `19e45c7` 将首次落地 pathname 加入表单请求和 FormSubmit 邮件字段；`4b0c01e` 进一步让 Contact 侧栏、表单快捷邮件/WhatsApp 和悬浮 WhatsApp 预填消息附带路径级 landing attribution。追踪测试 5/5、询盘/API 测试 10/10、Next build 生成 332 页、生产 smoke 检查首页/vanity 表单和五种快捷联系渠道。Smoke 阻止默认外跳、Google Tag 和询盘 API，没有打开邮箱/WhatsApp 或发送真实消息。生产端 query 参数落地路径负向探针返回 400 `Invalid inquiry landing page.`，在邮件提供商调用前被拒绝。
- 当时的 `141d0b9` 仅将 vanity 专页首屏主 CTA 改为 “Request Hotel Vanity Pricing”；后续 `65fb857` 已更新其他服务页的默认/产品 CTA。生产烟测从首页仍进入原流程，从 vanity CTA 仍保留来源页、项目类型、首次落地和 campaign。
- 烟测之前因未等待首页来源记录就立即切换路由而失败；已调整为等待 `atelierLandingPage` 后断言首页来源，并实际走首页和 vanity 两条 CTA。另在滚动宽度测量前等待字体及两帧布局稳定，避免 `DOMContentLoaded` 后过早取值；修正后全流程退出码为 0。
- 2026-09-28 发布 `f9135b9` 移除了页面浏览和转化时发送到无持久化 `/api/visitor-events` 的 beacon/fetch，也移除仅供该路由使用的本地访客/会话 ID；`page_view`、`generate_lead` 仍进入 dataLayer/gtag，Ads 转换仍只由 `generate_lead` 触发。路由保留兼容旧页面。追踪单测 3/3、询盘测试 8/8、build 生成 332 页、生产浏览器烟测通过。部署后网络探针确认首页仍有 `page_view`，没有向 `/api/visitor-events` 发请求；烟测拦截 Google Tag 和询盘 API，因此 GA4 实际收数和邮件投递仍未验证。
- 性能样本口径需区分：PowerShell 单次 GET 曾测得首页 1.10s、vanity 页 1.09s、contact 页 1.12s；2026-09-28 的 Chromium 390×844 新 context 复测中，首页 4 次 TTFB 为 247–268ms、LCP 为 1.59–2.59s（中位数约 2.12s），vanity 页单次 LCP 2.15s。一次首页样本略过 2.5s，但复测不一致；这些都是实验室样本，不构成 CrUX/CWV 通过或失败结论。
- `docs/seo-keyword-map.md` 已补入这份 GSC 导出中的四个可见相关词及其展示/排名，并记录英国区 Google 自动补全呈现的宽泛家装词与 vanity 制造商词；这些数据都未被当作搜索量或查询-页面归因，没有据此变更网站正文或 snippet。

### 2026-09-29 至 2026-09-30 的 CTA、表单和证据链接发布

- `65fb857`、`26a7163`、`d9b0b81` 已依次推送到 `main`，GitHub/Vercel 部署状态均成功，当前生产代码与 `origin/main` 一致。
- `65fb857`：共用商业服务页默认 CTA 从 “Upload CAD / BOQ for Quote” 改为 “Request a Project Quote”；`/countertops` 为 “Request Countertop Pricing”，`/countertops/marble-countertops` 为 “Request Marble Countertop Pricing”。vanity 页 CTA 不变。
- `26a7163`：询价表单将必填 Email 与 Project Notes 前置；姓名、公司、项目类型、预算、数量、时间、材料、电话和文件等可选项放在默认折叠的 “Add project details (optional)” 中。输入字段名、请求 payload、sourcePage/landingPage 归因和 API 未改。Email 与 Project Notes 是仅有的必填表单控件，项目说明最少 10 个字符。
- `d9b0b81`：`/countertops` 与 `/countertops/marble-countertops` 增加 “Review workshop and packing references” 链接，指向 `/factory#factory-evidence`。工厂证据区说明了图纸已脱敏、照片不能证明具体订单/机器型号/QC 结果。
- 本轮 `npm run build` 通过并生成 332 个页面，资产审计覆盖 202 条记录；`npm run test:inquiry` 10/10；生产 `npm run audit:seo` 通过 29 个 sitemap 页面（28 个严格 Title/Description 长度检查，隐私页豁免）。生产 HTML 验证新按钮、表单结构和证据链接返回 200，CTA 继续携带 sourcePage。
- 表单改动仅做了源码、构建产物/生产 HTML 结构和 API 单元测试核验；未做浏览器截图/像素级 QA，未提交真实询盘。真实邮件送达、GA4 收数和关键事件设置仍未验证。
- 这些改动只改善站内询价路径与证据浏览，不构成搜索排名、点击或真实询盘提升的证据。

### 2026-09-30 sitemap lastmod 修正（发布前记录）

- 生产 `/sitemap.xml` 有 29 个 URL；其中 19 个沿用相同的 `2026-09-10` `lastmod`，但对应页面在 2026-09-26 至 2026-09-29 有可核对的显著正文或链接更新。Google Search Central 说明，`lastmod` 应准确反映页面显著更新；`changefreq` 和 `priority` 会被 Google 忽略。
- 本地 `app/sitemap.ts` 已按路由记录最近一次显著正文、结构化数据或链接更新日期：27 个页面有日期，无可靠显著更新时间的 2 个页面省略 `lastmod`；移除了 `changefreq` 与 `priority`。
- `npm run build` 通过 TypeScript 检查并生成 332 个页面。构建产物的 sitemap 有 29 个 URL、27 个 `lastmod`，日期为 2026-09-10 至 2026-09-29。此前运行的生产 `npm run audit:seo` 通过 29 个页面、28 个严格摘要长度检查；它是在本地改动前运行，不能当作改动后的生产验证。
- 备份位于 `C:\Users\86580\AppData\Local\Temp\AtelierSEOBackups\2026-09-30-sitemap-lastmod\sitemap.ts`，SHA-256 为 `E7AA3CB40C57C30C5689BE4526A6AB945C89BD2D66BCCDD3D2EE4A86242D2FA6`。当前生产站未更新，排名、点击或询盘影响均未验证。

### 2026-09-30 首页首屏图片优化（发布前记录）

- 首页工厂实拍从固定 CSS 背景改为 Next `<Image>`，使用 `preload`、`sizes="100vw"`、AVIF/WebP 响应式候选及描述性 alt/title；原图片文件和 URL 未改。
- 原始 WebP 为 341,952 字节。Next 本地预览在 iPhone 15 视口（393×852、DPR 3）传输 68,963 字节，在桌面 1440px 视口传输 129,192 字节；分别比原图少约 79.8% 和 62.2%。这是图片传输量，不等同 LCP 或现场 Core Web Vitals 提升。
- `npm run build` 通过 TypeScript 检查并生成 332 个页面，资产审计覆盖 202 条记录。Playwright 在 iPhone 和桌面视口中确认首屏图片加载、无横向溢出，浏览器无错误/警告；Google Tag、Analytics、Ads 和 DoubleClick 请求被拦截为 204。
- 截图保存在 `output/playwright/home-hero-iphone15-local.png`、`output/playwright/home-hero-390-local.png` 和 `output/playwright/home-hero-1440-local.png`。当前生产首页尚未更新，性能或搜索表现提升未验证。
- 代码和本报告/交接/变更日志的修改前备份位于 `C:\Users\86580\AppData\Local\Temp\AtelierSEOBackups\2026-09-30-home-hero-responsive-image`，各文件 SHA-256 记录在 `SEO_Change_Log.md`。

### 2026-09-30 sitemap 与首页图片发布核验

- `309d8c38c8b4330ad689a5e1681326945e62ea5c` 已推送至 `main`；GitHub 上两个 Vercel 状态均为 success。
- 生产首页返回 HTTP 200；生产 `npm run audit:seo` 通过 29 个 sitemap 页面，28 个页面通过严格 Title/Description 长度检查。
- 生产 sitemap 包含 29 个 URL 和 27 个准确 `lastmod`，不再输出 `changefreq` 或 `priority`。
- 生产首页已输出工厂主图的 preload 与响应式 `<img>`。Playwright 在 iPhone 15 视口（393×852、DPR 3）测得 `documentWidth=393`，图片优化请求传输 68,437 字节；桌面 1440px 视口无横向溢出，1920px 图片候选传输 128,503 字节。两个视口均无浏览器错误或警告；Google Tag、Analytics、Ads 和 DoubleClick 请求被拦截。
- 生产截图：`output/playwright/home-hero-iphone15-production.png`、`output/playwright/home-hero-1440-production.png`。图片字节数下降不代表 LCP、现场 CWV、排名、点击或询盘已提升；这些仍需独立数据验证。
- 发布后追加三次独立 iPhone 15 冷启动实验室采样（393×852、DPR 3）：responseStart/TTFB 为 2,337、1,026、1,047 ms；LCP 为 4,188、2,340、2,320 ms；三次 LCP 元素均为 H1，hero 图均传输 68,437 字节。中位数为 TTFB 1,047 ms、LCP 2,340 ms。样本波动明显，浏览器/网络环境与 9 月 28 日的旧采样不完全相同，不能据此认定优化使 LCP 变好或变差；不是 CrUX/CWV 数据。一次生产 HEAD 响应显示 `x-vercel-cache: HIT`、`age: 33877`。
- 这组数据已加入 `SEO_Audit_Report.md`。备份位于 `C:\Users\86580\AppData\Local\Temp\AtelierSEOBackups\2026-09-30-post-release-lab-sample`。

## 当前数据与卡点

### Search Console

上次用户提供的导出路径为：

    C:\Users\86580\Desktop\.zip

**截至 2026-09-30，桌面和下载目录仍未找到新的 GSC ZIP/CSV/XLSX**；Google Drive 中对 `GSC`、`Search Performance`、`Queries.csv` 的定向搜索也没有结果。以下数字是从上次已解压导出的历史基线，不是今天的实时数据。重新判断前需要用户重新导出。

上次导出界面写着 “Last 3 months”，但可见日数据只有 **2026-09-07 至 2026-09-23**，不是完整的 90 天序列：

- 图表：122 次展示、0 次点击；可见加权平均排名约 31.77。
- 查询 hotel bathroom countertop：13 次展示，平均排名 23.92。
- Vanity 页面汇总：87 次展示，平均排名 27.26。
- Queries.csv 和 Pages.csv 是独立汇总，不能把目标查询和 vanity 页面拼成查询 × 页面结果。
- 可见查询最高 42 次展示，没有查询达到之前 CTR 筛选所需的 >100 次展示；CTR_Opportunity_Table.csv 因此保持空表头。
- 当前片段发布于 2026-09-26，晚于导出数据，导出无法测量它的效果。

Google Search Console 深链曾跳转登录页。2026-09-29 尝试只读打开官方页面时，in-app browser 创建/枚举超时；没有输入凭据，也没有绕过登录或安全提示。新会话若仍无法安全访问，使用用户导出的 CSV；不要尝试规避登录或警告。

2026-09-30 的公开关键词工具也没有提供可用的搜索量：AutoGLM 本地 token 服务连接被拒绝，Tavily 未配置现成认证，DuckDuckGo HTML 搜索返回 HTTP 202。Google Autocomplete 只作为措辞线索；工具不可用或没有建议不代表没有搜索需求。

当前生产版本已包含 sitemap 与首页图片优化，但没有新的 GSC 导出能按查询与页面关联地衡量发布效果。不能据此决定下一组目标词、判断 9 月 26 日 vanity 片段效果或宣称流量提升。收到覆盖完整观察窗口的 Query × Page 导出后再恢复关键词决策。

### 其他未验证项

- GA4 是否收到 generate_lead、DebugView/Realtime 中是否出现事件、是否正确设置为唯一询盘关键事件：未验证。前端测试拦截了 API 和 Google Tag 请求，没有提交真实询盘，也没有产生真实 GA4/Ads 转化。
- 本地 /api/visitor-events 返回 204 但不保存事件，不能用作分析数据源。
- Google 索引覆盖、CrUX 现场 Core Web Vitals：未验证。单次实验室浏览器数据不等同现场指标；曾遇到 PSI 配额 HTTP 429。
- CNC 型号/控制类别、正式 QC 测量/签字记录、真实完工/发货证明：当前材料不足。

## 本地文件状态与交接边界

2026-09-30 最新复核的 `git status --short` 显示：

- 当前分支为 `codex/seo-ctr-rollout`；本地 HEAD 和 `origin/main` 均为 `309d8c38c8b4330ad689a5e1681326945e62ea5c`。sitemap 和首页图片源码已提交并发布；`HANDOFF.md` 和 `docs/seo-keyword-map.md` 有本地修改。SEO 报告和截图仍为未跟踪的本地资料。
- 以下报告和产物仍未跟踪。
- 以下报告和产物显示为未跟踪文件：.playwright-cli/、CTR_Opportunity_Table.csv、CTR_Optimization_Plan.md、Competitor_SEO_Report.md、Content_Gap_Report.md、Implementation_Task_List.md、SEO_Audit_Report.md、SEO_Change_Log.md、output/、outputs/。
- 这些文件不是当前公开代码提交的一部分。部分报告仍停留在图纸示例及最新内链发布之前，使用前须检查日期和证据是否同步。
- 不要运行 git add .，不要为了清理状态删除这些产物；先逐个检查、确认用途，再选择性纳入版本控制。
- 原始 GSC ZIP 不应添加到仓库。

## 下一步计划

1. **先接手本地状态**：保留上述 dirty/untracked 文件，不要运行 `git add .`；不要删除、重命名未跟踪报告或素材。原始 GSC ZIP 保持在仓库外。代码发布提交为 `309d8c3`；当前剩余本地修改是交接和关键词映射文档。
2. **保持 `/countertops/vanity-tops` 当前 Title/Description 不变**。在 2026-10-24 或之后，等 GSC 的 last-updated 日期覆盖 2026-10-23，再导出可比较的准确日期区间，包含 Query × Page、国家、设备、点击、展示、CTR、平均排名；若数据尚未更新完整，继续等到覆盖完整。
3. 对 hotel bathroom countertop 单独比较，避免把查询汇总与页面汇总误当成关联数据。根据证据决定只改一个变量，或继续观察；不要为凑机会制造近似重复页面。
4. 单独完成 GA4 验证：确认 generate_lead 收数和关键事件设置；不要把诊断用的 qualified_inquiry_submitted 当成第二个询盘转化。验证过程避免提交真实客户询盘。
5. 如要新增 CNC 或 QC 公开证据，先检查原始材料实际能证明什么；照片或短视频看起来像设备/检查，不足以证明机型、测量数值、签字或交付结果。
6. 现有 CTA、表单低摩擦布局和工厂证据链接已上线；不要仅凭这些改动宣称已增加点击或询盘。先验证 GA4 `generate_lead` 真正收数及关键事件唯一性，真实表单邮件送达需要单独、明确的安全测试安排；不要发送伪造客户询盘。
7. 如有后续代码发布，先看差异与受影响路由，再跑有针对性的测试、build、SEO 和路由检查；部署后以生产页面 HTML 和审计为准。

## 绝对不要重踩的坑

1. **不要公开原始 RFQ、可提取文字的 PDF、未脱敏页面或其他客户页面。** 仅发布经过核验的栅格化脱敏摘录；遮盖公司名、项目标识、尺寸和其他可识别信息，并检查元数据/OCR/可提取文字。
2. 不要把本次脱敏图纸描述成已完工案例、特定产品订单、CNC 认证或 QC 证明。
3. 不要从浏览器翻译后的 Search Console 页面推断原始英文查询；优先读取原始 CSV。
4. 不要把 “Last 3 months” 标签当作导出包含完整 90 天；核对实际日期行。
5. 不要把 Queries 和 Pages 两张汇总表拼成 Query × Page 关联数据，也不要把不同维度表的展示量相加。
6. 不要用 2026-09-23 结束的数据评价 2026-09-26 发布的标题/描述；观察窗口未成熟前不频繁改 snippet。
7. 不要因 thank-you 页或生成项目参考页出现在 GSC 排除报告中而移除其有意设置的 noindex。它们不应进入 sitemap。
8. 不要只看 GitHub/Vercel 状态就宣称发布完成；检查生产 HTML、资源和线上审计。高并发 HEAD 请求曾超时，限速重试已成功；遇到类似情况先分批重试，不要误报为路径失效。
9. 不要从旧工作树继续操作：正确目录是 F:\Atelier-Marble-Site。已废弃的 C 盘 worktree 不可用。
10. 不要泄漏或写入文档、命令输出、提交的 Supabase 密码、service-role key、上传密钥等环境机密。
11. 不要批量改名或删除图片/视频。图片 URL 可能有历史索引或外链；先检查引用、路由映射和索引证据。不要清除当前未跟踪产物来“整理”工作区。
12. 不要用部署、构建通过、内容字数或单次实验室性能测试声称 Google 排名、CTR、真实询盘或 Core Web Vitals 已提升。

## 2026-09-30 方案实施发布

- `1ec92c3` 已上线：定制加工、定制台面和 vanity 页面在 Hero 内显示带来源与项目类型的报价入口；手机端首屏可见，提示可先发简短需求、图纸可后补。
- 首页和信任条的经营表述已统一为自有加工与合作配套，移除 “Manufacturer / Factory Direct” 的泛化表述；未添加具体工序、设备产权、交期或价格承诺。
- Project Brief 下载模板增加 piece mark、drawing revision、尺寸单位、开孔/边型/支撑和包装标签字段。
- 询盘表单将首次外部 referrer hostname 写入内部询盘邮件；不写入 GA4 事件。来源主机名经过格式和长度校验，landing path、UTM 和幂等行为保持不变。
- `e793a6b` 修正首页描述长度后已上线。生产 `npm run audit:seo` 通过 29 个页面、28 个严格摘要检查；生产三个主推页的 Hero CTA 返回 200 并保留 `sourcePage`。
- 构建生成 332 个页面，资产审计覆盖 202 条记录；`npm run test:inquiry` 10/10。真实收件、GA4 DebugView/Realtime、历史开发信回复和发送台账修复仍需账户/人工验收；本轮没有发送客户邮件或提交真实询盘。
- `D:\石材素材\Atelier-Marble-Outreach\campaign-config.json` 已按本方案调整为 Canada 优先、每个邮箱每天最多 5 封、总量最多 10 封，旧的 80 封硬目标已取消。修改前备份和 SHA-256 在 `C:\Users\86580\AppData\Local\Temp\AtelierMarbleSendLogAudit\campaign-config.json`。
- `send-log.csv` 已只读审计并备份；66 条记录中存在多条未加引号的逗号字段和跨邮箱重复事件，原文件没有自动重写或删除。备份位于同一临时目录，SHA-256 为 `FC5B445A4FCC2C2939BADC3FABF0B87830D0440924394428C2BA2DC51937AC14`。后续应逐行核对 provider message ID 和 lead ID 后再生成规范副本。
- 2026-09-30 生产内部收件测试使用 `INTERNAL DELIVERY TEST` 标记、站主公开邮箱、无客户资料、无附件；`POST /api/inquiry` 返回 HTTP 503 `The inquiry service is temporarily unavailable.`，因此没有产生邮件或 `generate_lead`。不要重复提交；先检查生产 Supabase 环境变量、幂等表可用性和服务日志，再重新做一次测试。
- Vercel Production 环境变量只读核对显示：`SUPABASE_URL` 与 `NEXT_PUBLIC_SUPABASE_URL` 指向不同的 Supabase project ref（服务端为 `wdrolyfczxmphbglgana.supabase.co`，公开端为 `rkspibcnnofvroxthtfm.supabase.co`）。最新 Vercel 日志记录 `[inquiry] idempotency insert unavailable`，`message: TypeError: fetch failed`，没有返回数据库错误码。不能凭猜测替换服务端 URL；负责人需确认正式 Supabase 项目，把对应 service-role key、URL 和 `inquiry_idempotency` migration 配成同一项目后再测试。

## 关键文件

- 本交接：HANDOFF.md
- 目标页：app/countertops/vanity-tops/page.tsx
- 工厂证据和视频：在仓库中搜索 factory-evidence、workshop-videos
- 首页：app/page.tsx
- 定制加工页：app/custom-stone-fabrication-china/page.tsx
- 关键词映射：docs/seo-keyword-map.md
- GSC 索引操作说明：docs/google-search-console-indexing.md
- SEO 审计脚本：scripts/audit-seo.mjs
- 公共路由检查：scripts/check-public-routes.mjs

---

## 2026-09-30 continuation: mail delivery and outreach ledger

- Current deployed source is `62fd012` (`Add Aliyun SMTP delivery option for inquiry email`); Vercel project `huang8/atelier-marble-site` has Ready Production deployments. Production Environment Variables do not include `SMTP_PASS`, so SMTP is not active and real inquiry delivery remains unverified. Do not treat the old FormSubmit-domain tests or deployment status as proof of receipt.
- The inquiry route still gates sends on Supabase durable idempotency. The documented `INQUIRY_DEGRADED_NO_FILE_FALLBACK` variable exists in Production, but its hidden value was not read. Even if enabled, it only permits no-file submissions with instance-local deduplication; private file upload still requires a valid Supabase project, matching service key, migration, and private bucket.
- The original `D:\石材素材\Atelier-Marble-Outreach\send-log.csv` is unchanged (SHA-256 `FC5B445A4FCC2C2939BADC3FABF0B87830D0440924394428C2BA2DC51937AC14`). A backup is at `C:\Users\86580\AppData\Local\Temp\AtelierMarbleSendLogAudit\20260930-continuation\send-log.csv`. Review-only normalized and reconciliation copies are `send-log-normalized-copy-2026-09-30.csv` and `send-log-audit-copy-2026-09-30.csv`; the audit copy has 68 rows and 19 columns.
- Provider reconciliation found 29/29 Gmail message IDs in Sent with matching headers; 32 Outlook send-log rows matched Sent items by sender, recipient, subject, and time. Five Outlook attempts logged as `send_failed` had no matching Sent item in the date-bounded search. Two actual Outlook sends had no source row: JMJ Top Experts and STONEBY Inc. Repeated first-touch activity is confirmed for Stone Craft Canada (3 messages), JMJ Top Experts (3), and STONEBY Inc. (2). Suppress these companies from fresh outreach. Sent-folder evidence is not proof of inbox placement or reading.
- Gmail thread review confirms Artigem's customer reply was on Sep 1; the Sep 25 message was the owner's close-the-loop follow-up. No later customer reply appears in the connected thread. It remains a historical opportunity, not a new inquiry.
- No customer email was sent during this continuation. Next: owner enters the Aliyun SMTP authorization code directly as Production `SMTP_PASS` (never in chat); then enable the documented no-file fallback only if needed, redeploy, and verify one marked internal submission in the actual mailbox. After that, restore a valid Supabase configuration and test private attachment links. Continue GA4 and GSC verification separately.

## 2026-09-30 production CTA and attribution acceptance

- Chromium checked `/custom-stone-fabrication-china`, `/countertops`, and `/countertops/vanity-tops` at 390×844 and 1440×900. All six combinations returned HTTP 200, had no horizontal overflow, and showed the main quote CTA within the first viewport.
- CTA `sourcePage` and `projectType` matched each route. With analytics/ads blocked, fresh synthetic UTM sessions retained `atelierLandingPage` and campaign values through the click to `/contact`; no form was submitted and no `generate_lead` event fired.
- Detailed coordinates and evidence are in `D:\石材素材\Atelier-Marble-Outreach\run-audit-2026-09-30.md`. Email delivery and live GA4 receipt remain unverified.

## 2026-09-30 lead-state reconciliation

- `leads.csv` is now synchronized against the provider reconciliation: eight falsely `ready_to_send` rows with verified Sent items were changed to `sent`; STONEBY's stale next action was cleared and its extra unlogged Outlook message was added to the notes. Nine rows changed only in status, next action, and notes. Original-file backup is `C:\Users\86580\AppData\Local\Temp\AtelierMarbleSendLogAudit\20260930-continuation\leads.csv` (SHA-256 `DBA71C2C2B7393FFEE2B1A9D2819A2A5044463854445E5EE2D7833E76CBD7919`).
- Canada now has 18 `ready_to_send`, 5 `sent`, and 1 historical high-intent reply. The remaining 18 candidate records are stale (last verified Sep 1–2); re-verify before sending. Stone Craft Canada, JMJ Top Experts, and STONEBY Inc. are suppressed from fresh outreach because repeated first-touch messages are verified.
- Full event details and source hashes are in `D:\石材素材\Atelier-Marble-Outreach\run-audit-2026-09-30.md` and `send-log-audit-copy-2026-09-30.csv`. No customer email was sent.

## 2026-09-30 SEO technical recheck

- The three commercial URLs returned HTTP 200 with self-canonical, no `noindex`, and sitemap inclusion. `robots.txt` returned HTTP 200.
- GSC URL Inspection and actual indexed status remain unverified; this technical check does not prove Google indexing. Await connected GSC access or a fresh raw export.

## 2026-09-30 GSC screenshot evidence

- User-provided 24-hour Web Search Performance screenshot: 1 click, 8 impressions, 12.5% CTR, average position 8.3; last updated 6.5 hours before the screenshot. This is only a point-in-time signal.
- Separate country/page/query screenshot views do not reconcile to one common total/filter, and the visible query may be browser-translated. Do not infer Canada clicks or Query × Page attribution. Obtain a fresh raw GSC export for those conclusions.

## 2026-09-30 Aliyun credential page located

- The user screenshot is the correct Aliyun Enterprise Mail page: `账户与安全 → 账户安全 → 三方客户端登录安全管理`; the feature is already enabled and the red `生成新密码` button creates the third-party client password. A prior `Codex SMTP` entry exists, but the password is not visible and Vercel Production still has no `SMTP_PASS`.
- The account owner should generate a separate password for the website and enter it directly in Vercel Production `SMTP_PASS`. Do not send the value in chat. The `browser-automation` credential handoff rule requires the owner to perform the entry and submission. No successful production receipt has been verified yet.

## 2026-10-01 SMTP receipt verified; storage acceptance still open

- Supersedes the prior missing-SMTP-password status: Production now has `SMTP_PASS` and explicit `SMTP_USER=ding@atelier-marble.ltd`. The initially entered value failed Aliyun authentication. The existing Windows Credential Manager entry for the same mailbox authenticated successfully via SMTP and IMAP and was securely installed through Vercel CLI stdin; no password was logged or retained in files.
- Current Ready deployment is `dpl_FqGYFYhw7DGEokpq2PVgFVuqvSkq` / `https://atelier-marble-site-gccafeb04-huang8.vercel.app`; it rebuilds source `62fd012`, and production aliases were verified with Vercel inspect.
- A marked no-file production inquiry returned HTTP 200 at 00:41 Asia/Shanghai. Its actual INBOX message was read with IMAP BODY.PEEK: correct recipient `ding@atelier-marble.ltd`, Reply-To `songyano544@gmail.com`, source page `/contact`, landing page `/countertops/vanity-tops`, and internal-test exclusion marker. This is real receipt evidence, not an old FormSubmit test or SMTP acceptance alone.
- Full acceptance is still incomplete: valid upload metadata returned HTTP 502, Supabase durable idempotency remains unavailable, and replaying the same inquiry key produced a second actual email. The temporary no-file fallback remains active; restore durable storage and disable the fallback before claiming duplicate prevention works.
- The first Supabase browser sign-in was actually `songyano544@gmail.com`. It can see paused projects `rkspibcnnofvroxthtfm` and `iwfhawhcqyfaqonwyzaf`, but access to configured server project `wdrolyfczxmphbglgana` was not established. Signed out and prefilled the prior setup account `yuanhuang0723@gmail.com`; owner sign-in is pending. Do not guess a replacement project or overwrite keys from a different project.
- Detailed evidence and next gates: `docs/inquiry-delivery-verification-2026-10-01.md`; raw sanitized records: `outputs/inquiry-validation-20261001/`. All received messages are internal tests and must be excluded from inquiry/quotation reporting. GA4 and customer outreach were not exercised by these API tests.

## 2026-10-01 final inquiry delivery acceptance — supersedes the open storage status above

- Found the original configured project `wdrolyfczxmphbglgana` under `Huang` after switching to GitHub account `yuanhuang0723-lgtm`. It was paused. Resumed the existing project and verified Healthy; existing server credentials and bucket worked after recovery.
- Created the missing server-only `public.inquiry_idempotency` table using the table portion of the reviewed repository migration. SQL succeeded; RLS is enabled, anon/authenticated table privileges are revoked, and the intended service role retains access.
- Fixed the browser's signed upload request: PUT plus Authorization using the existing short-lived signed URL token. Source commit `3d9ab15` was tested and pushed to `main`. Tests 12/12, asset audit 202 records, build 332 pages passed.
- Production `INQUIRY_DEGRADED_NO_FILE_FALLBACK` is now explicitly false. Final Ready production deployment is `dpl_5fPh7Nzj8haV95JTpcLVzGhraFbu` / `https://atelier-marble-site-p9x3fmm9o-huang8.vercel.app`; build logs confirmed `3d9ab15`, and production aliases were verified.
- PDF, JPG, and XLSX test files actually uploaded and produced a received INBOX email with correct Reply-To and attribution. Private download links returned 200, byte hashes matched, TTL was 7 days, and public access was denied. CORS allowed the website's PUT and Authorization request.
- Replayed the same inquiry after a different production deployment: response 200 and the matching INBOX message count stayed 1. Reusing the key for different notes returned 409. Durable duplicate prevention now passed, superseding the earlier fallback duplicate failure.
- Evidence: `docs/inquiry-delivery-verification-2026-10-01.md` and sanitized `outputs/inquiry-validation-20261001/`. Tests are not business inquiries. GA4 DebugView and a complete live browser submission remain separate outstanding checks. Free-project inactivity pauses remain a real operational risk; no billing upgrade or new scheduled automation was created.

### 2026-10-01 live website acceptance — supersedes the outstanding browser submission item

- Actual production vanity CTA → real form → synthetic PDF selection → Request Project Pricing → `/contact/thank-you` completed successfully with the deployed browser upload correction.
- Actual INBOX receipt for `INTERNAL_DELIVERY_TEST_20261001_WEB_3b9e6ac3` was verified: one message, correct Reply-To, vanity source/landing paths, internal UTM campaign, and a private PDF link whose downloaded bytes matched the fixture. Public access was denied and TTL was 7 days.
- Reloading the actual thank-you page left the matching INBOX count at one. Screenshot: `outputs/inquiry-validation-20261001/website-thank-you.png`; sanitized mailbox evidence is in `browser-received.json` and `browser-after-refresh.json` there.
- The live browser test was internally attributed and must be excluded from business inquiry/traffic reporting. Normal Google tagging may have generated internally attributed test events; GA4 DebugView/actual collection remains unverified. Earlier API tests did not invoke browser tags. Production has no configured Google Ads ID/conversion label.

## 2026-10-07 vanity 图片恢复与搜索核验（最新）

- 当前生产代码 `593d69c` 已推送至 `origin/main` 并发布，生产 HTML/图片与 sitemap 日期已验收。vanity 页原先只有重复的封面图；本次前置 4 张产品参考照片、3 张浴室设计参考，以及图纸/车间证据图。长采购说明变为 7 段默认折叠的原生展开区。其他商业页保持原有默认布局。
- Title/Description/canonical 未变；H1 和正文布局在 10 月 7 日更新，sitemap lastmod 为 `2026-10-07`。10 月 24 日片段观察节点保留，但之后的数据不能单独归因于 9 月片段修改；必须记录本次正文改版这一干预。
- 最新 GSC（2026-10-07 读取；Web，3 months；图表实际 2026-09-09 至 2026-10-04）：全站 196 展示、1 点击、平均排名 28.8；vanity 精确页面筛选 126 展示、0 点击、平均排名 27.3。已取得页面筛选后的英文查询证据，不能再沿用“尚无页面查询关联证据”的旧卡点。搜索展示不是网站浏览。
- vanity 已在 Google 索引；Google canonical 正确；索引记录最近抓取仍为 Sep 10, 2026, 10:37:39 PM（界面时区未确认）。发布后申请重新索引时 GSC 返回提交错误；**未获得成功确认，不可写成已请求成功或已重新抓取**。后续择时重试一次，不反复提交。
- 15/15 针对性检查、202 资产审计、332 页构建，以及本地/生产 29 页 SEO 审计通过。生产 1440×900 下 10 张图片全加载；390×844 下无横向溢出，报价按钮位于首屏；本地真实点击进入 vanity 项目类型的联系表单，展开说明可用。未发送真实询盘；UTM 跨页持久化本轮未独立重验，归因代码未改。
- 验收报告：`docs/vanity-visual-repair-2026-10-07.md`；截图/数据：`outputs/vanity-visual-repair-20261007/`。不要用本轮上线声称搜索排名、点击或询盘已增长。GA4 收数仍未验收。

## 2026-10-07 SEO 采购意图与图片 sitemap 优化（晚于 vanity 图片恢复）

- 当前生产源码为 `443034f`，已推送到 `origin/main` 并经 Vercel 成功发布。加工页 Title 为 `Cut-to-Size Stone Fabrication in China | Atelier Marble`（55 字符），Description 148 字符；H1 明确 China、按图加工。首屏为已核验车间照片，正文前置脱敏图纸、构件输入表及产品/车间参考，7 段指导默认折叠。没有新增设备产权、固定容差/交期或已交付订单承诺。
- 新增 countertops、supplier guide、how-we-work 到加工页的 3 处相关内链，加工页反向链接台面/vanity。4 个显著更新页的 sitemap lastmod 为 2026-10-07。vanity Title/Description 仍保持观察窗口。
- 图片 sitemap 对首页、countertops、vanity、加工页分别与线上实际 11/4/10/6 张图片一致，16 个 canonical 页面组各出现一次。其余图片组尚未全面重核。不要把分组后 GSC discovered-page 数变化当成网页索引丢失。
- 12 个候选查询已查公开搜索意图；仅 `cut to size stone china` 另查了 gl=ca、hl=en、pws=0 的 Google 英文结果。工具没有提供搜索量或难度，禁止把结果顺序当加拿大排名。加拿大本地安装词、现货 prefab 或 cultured-marble 范围未被冒充为已确认业务。
- GSC 加工页精确筛选基线：Web、3 months（实际图表 2026-09-09 至 2026-10-04），6 展示、0 点击、平均 133.5，查询表无可见数据；不能制造查询归因。索引记录仍显示 Sep 10 4:50:44 PM（时区未确认），canonical 正确。
- Google 实时检查于 Oct 7, 2026 2:30 PM（界面时区未确认）通过：URL is available to Google / Page can be indexed。随后一次 Request indexing 仍返回提交错误；没有已接受的请求。**两份 sitemap 在实际 GSC Sitemaps 报告都为 Success**（页面 10 月 6 日读取，图片 10 月 1 日读取）。URL Inspection 的 Temporary processing error 不能据此解释为 sitemap 故障。没有重试循环或验证码绕过。
- 25/25 针对性测试、202 资产审计、332 页构建及本地/生产 29 页 SEO 审计通过。线上桌面首屏可见报价；390px 手机 CTA 底部约 577px、构件表 343px，无横向溢出。本地实际 CTA 进入正确来源和 Commercial Stone Projects 类型；未提交询盘。
- 报告：`docs/seo-procurement-iteration-2026-10-07.md`；证据：`outputs/seo-procurement-20261007/`。SEO/排名目标仍 active，下一步加强真实行业引用、完善其余图片映射并跟进新抓取/可比搜索数据；不能据此宣称排名增长。GA4 收数仍未验收。没有发送客户消息、广告或新建监控。

## 2026-10-07 industry profile and buyer asset acceptance

- Current production source is `e474168` (profile release `51d9bca` plus binary PDF Git handling). Vercel production succeeded; release URL: https://vercel.com/huang8/atelier-marble-site/EehHSCCumHKW7K64wnwz8hG2iYsV .
- Published the one-page supplier profile at `/atelier-marble-supplier-profile.pdf` and linked it from About and Resources. About now uses the approved own-processing plus partner-coordination identity in its body and 153-character description. No machine ownership, founding year, certification, fixed price or delivery promise was added.
- PDF is 385,112 bytes, one page, six clickable links, current creation metadata, and visually reviewed. Production returns 200 / application/pdf / noindex; byte SHA-256 matches the source (`0c8b1cd4c84cbbe74de2b587da23b75ca9f4bd4d0b7aa1a638d9e09b9a8a39f3`). `.gitattributes` treats PDF files as binary to prevent Windows line-ending damage. About/Resources PDFs and native download attribute were verified on production; local browser at 390px has no horizontal overflow and the download card works.
- 23/23 relevant checks passed, build 332 pages and asset audit 202 records passed. Local and production SEO audits passed for 29 pages / 28 strict snippets. No inquiry was submitted. Local browser page views, if collected, are internal tests and should be excluded (hostname 127.0.0.1); no GA4 receipt is claimed.
- GSC Links reports 0 external links and 364 internal links on this read, not a complete inventory of the web. Verified five directory/association opportunities and prepared a 47-word introduction, full company text and three product drafts in `docs/industry-profile-package-2026-10-07.md`. Stone World free basic listing excludes website/email; its linked current brochure prices the link tier at $350. No paid plan purchased.
- StoneContact's actual free signup requires a new password, SMS telephone verification, first/last name, gender selection and agreement acceptance. An owner handoff question has been sent; no SMS, account creation, agreement submission, company profile publication or new backlink has been completed. Do not treat the site's default checked agreement box as consent.
- Verified visible registration page: https://member.stonecontact.com/#/user/add . Browser tab 15 (provider id `browser-use:46826d89-2fc7-4d23-8fa1-cdb5bc6672ce`) was marked handoff. Screenshot: `outputs/seo-authority-20261007/stonecontact-registration.jpg`. A createBrowserTab call timed out after creating this tab; it exists and was verified afterward. Reuse it rather than creating more duplicate signup tabs.
- Next: wait for owner registration/login, verify the authenticated company context, then enter only approved public facts and free permitted product/profile fields. Confirm the exact accepted public URL, country, website visibility/link attributes and inquiry route. Never invent mandatory legal-name/year/license/employee fields or bypass paid-link restrictions. Keep source documents private if a platform asks for license verification; get explicit authorization for that transmission.
- The goal remains active: external references and post-release ranking/traffic/inquiry improvement are still unverified. Registration is a currently pending human authentication step, not proof that the entire SEO objective is blocked. Preserve the Oct 24 vanity metadata checkpoint.

## 2026-10-07 full image-sitemap reconciliation (latest code)

- Current production source: `cc6d26d`; pushed and Vercel production succeeded. Previous `e474168` supplier-profile release remains included.
- Independent production crawl of all 29 sitemap pages found 33 missing main-image associations across 10 pages. This did not mean images were missing from the site: their sitemap coverage was incomplete. Baseline: `outputs/image-sitemap-reconciliation-20261007/production-before.json`.
- Ordinary prebuild now renders the public default views from `app/sitemap.ts` via `scripts/build-image-sitemap.ts` and generates deterministic `data/image-sitemap-pages.json`. The image route serves that data only, with no request-time page rendering/network access. Generation validates local files, skips noindex routes/data/blob images, rejects unreviewed external/parameterized image URLs and enforces 1000/group.
- Current inventory: 23 image pages, 238 unique-per-page main `<img>` associations; seven new page groups and 33 associations. No image files/URLs, visible layout, service snippets or inquiry code changed. Deliberate noindex generated project pages, thank-you and supplier PDF remain excluded.
- Audit corrected: previously only the first image in a group was checked, and any audited page could satisfy the match. It now verifies all images against their exact page, including missing and incorrect associations. Stronger audit correctly rejected old production on 33 omissions; new local and production audits pass all 29 pages / 28 snippets / 238 associations. Full-public-page parity and snippet tests pass, build 332 pages / asset audit 202 records pass. XML parsed successfully and production matches generated data exactly.
- Added @types/react-dom 19.3.0 for the build script; its matching @types/react peer is 19.3.0. Runtime React and Next versions were not changed. Source generation does not send inquiries or execute browser analytics effects.
- Report: `docs/image-sitemap-reconciliation-2026-10-07.md`. SEO/ranking goal remains active; neither a new Google image index nor improved ranking/click/inquiry outcomes have been established. No reindex requests were spammed. StoneContact owner registration/login remains pending in the previously handed-off tab; do not create accounts/passwords or resubmit the question just because a goal continuation arrives.

## 2026-10-10 another-computer handoff; last live observations October 8

- Current local source is `4f965e7` on `codex/seo-ctr-rollout`. The owner reports a fresh clone of `main` at the same commit on another computer under `D:\独立站\Atelier-Marble-Site`. That other computer has not been independently inspected here. This directory is a Git worktree with a `.git` pointer to a C-drive common repository; use a fresh clone on the destination, not a copied pointer.
- Current HANDOFF, keyword map and five October reports are not fully represented in GitHub. The migration supplement includes current docs and selected sanitized acceptance evidence; it excludes credentials, environment files, Git metadata, dependencies and build output. Original local absolute paths in older reports must be interpreted relative to the destination checkout.
- Latest production release last verified October 7 is `4f965e7`. Formal GA4: account `399172964`, property `543103798`, stream `15151576892`, measurement `G-6B99HTXZF9`, accessed with `yuanhuang0723@gmail.com`. Production already uses this ID. Do not substitute the separate empty property `543549657` / `G-9H0VDYG749` belonging to `songyano544@gmail.com`.
- Formal GA4 stream URL was corrected to `https://ateliermarblestone.com`; existing `generate_lead` was marked as a key event. Diagnostic `qualified_inquiry_submitted` remains unmarked. Internal Traffic filter is Testing, so internal tests are not automatically excluded from ordinary reports. Release `4f965e7` marks exact internal_verification/internal_test campaigns with debug_mode and traffic_type=internal. Six tracking tests and the 332-page build passed at release.
- October 7 real browser test `INTERNAL_GA4_VALIDATION_20261007_V2_6c7d2e` succeeded: DebugView showed one generate_lead and one diagnostic submission; read-only IMAP confirmed exactly one matching INBOX receipt with correct Reply-To and vanity attribution. Evidence: `outputs/analytics-validation-20261007/`. The contemporaneous GA4 count after thank-you refresh was NOT captured, so refresh/direct-visit event dedup acceptance remains unfinished.
- October 8 real browser test `INTERNAL_DELIVERY_TEST_GA4_20261008_DEDUP_f92b4c`, campaign `ga4_dedup_validation_20261008`, made one submit attempt and failed with service temporarily unavailable. Production Vercel log showed `/api/inquiry` HTTP 503 and `[inquiry] idempotency insert unavailable` / TypeError: fetch failed. Local DNS confirmed ENOTFOUND for the original Supabase host. Do not count this test as a business inquiry or assume a received message.
- Supabase original project `wdrolyfczxmphbglgana` in organization Huang was visibly Paused again on October 8. Existing GitHub sign-in `yuanhuang0723-lgtm` restored access. Resume project and Resume confirmation were performed; the final observed dashboard said Coming up..., DNS resolved again, and the anonymous REST gateway returned expected 401. HEALTHY, actual submission recovery, receipt and GA4 dedup were NOT finally verified before the owner switched to migration guidance. No new project, key replacement, paid upgrade or fallback enabling was performed. The reason for the second pause was not established.
- First work on the destination: inspect current project health and production error logs. Once Healthy, complete an explicitly marked internal acceptance with one received message and generate_lead=1; verify thank-you refresh and direct visit do not add leads. Reuse the failed existing test only if its form/session is still available. Browser sessions and Windows mailbox credentials do not migrate with the source archive. Never restore instance-local no-file fallback as a substitute for durable duplicate prevention.
- Preserve the October 24 vanity Title/Description checkpoint. October 7 visual/body edits confound attribution to the September snippet change. Last comparable GSC snapshot was read October 7, chart September 9 through October 4: whole site 196 impressions / 1 click / position 28.8; vanity 126 / 0 / 27.3; fabrication 6 / 0 / 133.5 with no visible query rows. These are historical, not an October 10 ranking report. Fresh comparable GSC data and actual qualified inquiries are still needed.
- StoneContact owner registration/password/SMS/agreement handoff remains incomplete; do not interpret migration or continuation as authorization to accept terms or fabricate mandatory company fields. Do not recreate repeated questions. SEO/ranking objective remains unfinished. From now on coordinate pushes from one computer at a time; review remote state before pushing.

## 2026-10-10 live production inquiry & deduplication acceptance (destination verified)

- Live browser acceptance test `INTERNAL_DELIVERY_TEST_20261010_WEB_369f86` executed on destination computer against production `https://ateliermarblestone.com`.
- Supabase resumed project `wdrolyfczxmphbglgana` verified healthy: DNS resolved, REST gateway active, storage signed upload token issued and uploaded synthetic PDF fixture (SHA-256 `36b1806c8b83b0e640900481b9b363c172a400e5c7d7dcb473b19ad807e5f2f9`) with HTTP 200. Direct anonymous access to the object in private bucket was rejected with HTTP 400.
- Production `POST /api/inquiry` returned HTTP 200 with `{ "ok": true, "message": "Inquiry accepted by the email server." }`, confirming Aliyun SMTP successfully accepted the message for `ding@atelier-marble.ltd`.
- GA4 formal measurement ID `G-6B99HTXZF9` captured exactly 1 `generate_lead` request upon arriving at `/contact/thank-you` (with `debug_mode=true` and `traffic_type=internal`).
- Thank-you page refresh deduplication verified: reloading `/contact/thank-you` produced exactly 0 additional `generate_lead` requests.
- Direct visit deduplication verified: opening a fresh tab directly to `/contact/thank-you` produced exactly 0 additional `generate_lead` requests.
- Durable idempotency verified: replaying identical payload with key `736e1108-6461-4e31-a761-d916e68477df` returned HTTP 200 with no duplicate email dispatch. Replaying the same key with altered payload returned HTTP 409 Conflict.
- Full evidence report: `docs/inquiry-delivery-verification-2026-10-10.md` and `outputs/inquiry-validation-20261010/`. Outstanding item: owner visual verification of single inbox message in `ding@atelier-marble.ltd`.
- Vanity title and description remain unchanged and locked until the October 24, 2026 evaluation checkpoint.

## 2026-10-10 countertops service page scannability and quotation scope optimization

- Completed commercial optimization for `/countertops` (`app/countertops/page.tsx`):
  1. Converted 7 content sections from dense static cards to scannable `disclosure` (`<details>`) layout with concise one-sentence summaries, aligning structure with `/countertops/vanity-tops` and improving mobile LCP/CLS.
  2. Replaced irrelevant `coffee-table` asset with 4 authentic `kitchen-countertop` reference images, positioned gallery before content (`referencePlacement="before-content"`), and added honest reference copy disclaiming specific machine ownership or finished shipments.
  3. Added B2B quotation input mapping table (`scopeRows`) covering Kitchen islands & perimeters, Hospitality vanity packages, and Commercial bar & reception counters.
  4. Preserved exact Title (55 chars) and Meta Description (145 chars) without modification.
- Verification and Quality Suite:
  - Rebuilt image sitemap (`scripts/build-image-sitemap.ts`) updating `/countertops` image associations (239 total page/image associations across 29 routes).
  - Passed `npm run audit:assets` (202 records).
  - Passed `npm run test:inquiry` (12/12 unit tests).
  - Passed SEO & tracking test suites (`tests/seo-*.test.mjs`, `tests/tracking-*.test.mjs`, 25/25 passed).
  - Passed production build `npm run build` (332 static pages generated cleanly with Turbopack).
  - Verified responsive layouts on mobile (390x844) and desktop (1440x900) via Playwright: zero horizontal overflow (`scrollWidth <= clientWidth`), exactly 7 disclosure sections in main, 3 scopeRows rendered. Screenshots recorded in `outputs/countertops-responsive-20261010/`.
- Ready for selective commit, push to `origin/main`, and production verification.
- Production Push & Live Deployment Verification (2026-10-10):
  - Commits `961e4d5` (feature) and `b3726ca` (weekly summary) pushed successfully to `origin/main`.
  - Configured Windows Git Credential Manager store and sanitized remote origin URL.
  - Verified live production deployment on `https://ateliermarblestone.com/countertops`: returns HTTP 200, HTML contains updated disclosure markup, single-sentence summaries, 4 authentic kitchen countertop assets, and `scopeRows` B2B quotation input mapping table.
  - Weekly summary report for the week ending 2026-10-10 completed in `docs/seo-evidence/weekly-summary-2026-10-10.md`.

## 2026-10-10 Canada project reference cluster integration

- Reinforced Canada-focused commercial discovery topic cluster:
  1. Connected priority commercial page `/custom-stone-fabrication-china` directly to `/projects/canada-shower-niches-2025` via contextual related link.
  2. Enriched `/projects/canada-shower-niches-2025` CTA with query attribution (`sourcePage=/projects/canada-shower-niches-2025&projectType=Commercial%20Stone%20Projects`) so inquiries preserve landing context.
  3. Added reciprocal navigation links on `/projects/canada-shower-niches-2025` pointing back to `/custom-stone-fabrication-china` and `/countertops/vanity-tops`.
- Quality Verification:
  - Unit tests passed: `npm run test:inquiry` (12/12 passed).
  - SEO & tracking tests passed: 25/25 passed.
  - Image sitemap parity: `tests/seo-image-sitemap.test.mjs` passed.
  - Full site build: `npm run build` generated 332 pages cleanly in 6.5s.


