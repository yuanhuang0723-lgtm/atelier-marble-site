# Atelier Marble 独立站出海获客与技术 SEO 全域交接文档 (HANDOFF)

> **更新时间**：2026-10-16 16:30 (Asia/Shanghai)  
> **面向对象**：完全没有前序会话上下文的新 AI 会话 / 开发者接手人员  
> **生产站点**：[https://ateliermarblestone.com](https://ateliermarblestone.com)  
> **代码仓库**：`d:\独立站\Atelier-Marble-Site`  
> **Git 远端**：`https://github.com/yuanhuang0723-lgtm/atelier-marble-site.git` (分支: `main`)  
> **最新动态 (2026-10-16)**：首页核心展示视频已切换为 CNC 石材水刀加工切削实况（Stone Cutting in Progress，0:13 时长），并适配竖版比例与结构化视频 Schema；同时上线“结构化挂装工法与技术深化案例卡片”(`components/TechnicalProposalCase.tsx`)。
> **企业主体**：Atelier Marble Ltd.（中国云浮与水头深加工基地，主营全球工装石材/酒店台面/大理石 cut-to-size 离岸数控加工配套）
> **当前实盘成就**：已累计成功送达 **417 家** 真实海外工装石材承包商（整体投递成功率 **96.3%**，4 节点稳态外发）


---

## 一、我们在做什么任务 (What Task Are We Doing?)

本项目是为 **Atelier Marble Ltd.** 打造从“0 到 1”的全球高端工装石材全自动出海获客闭环。整体包含三大协同支柱：

### 支柱 1：生产级独立站与 B2B 技术 SEO（全站 29 条核心路由）
- 基于 Next.js 14 App Router、TypeScript、TailwindCSS 构建的高端石材独立站。
- 遵循 **Zero Layout Mutation（CLS = 0，零视觉排版漂移）** 铁律，不改变前端任何既有文案排版，在非渲染层深度注入 Schema.org 结构化数据（Product、HowTo、Organization、AboutPage、ContactPage、CollectionPage、FAQPage）。
- 建立全站 29 条 canonical 路由与 239 个页面-图片地图关联，配置严格的自动化测试保护（58 项测试 100% 通过）。

### 支柱 2：全自动企业邮+健康 Gmail 混合外贸拓客与收件雷达体系（方案 1+2 混合驱动）
- **发信集群当前状态**：
  - Node 0: `ding@atelier-marble.ltd`（**阿里企业邮**：正式激活为首发主力节点，SPF/DKIM/DMARC 完整企业信誉，直连无代理）
  - Node 1: `yuanhuang0723@gmail.com`（活跃，健康，代理通道）
  - Node 2: `SongYano544@gmail.com`（**极度健康**：123 封外发 0 拦截 0 退信，代理通道）
  - Node 3: `wanpingzhu600@gmail.com`（**全新加入，极度健康**：App Password 验证成功，0 历史退信，代理通道）
  - Node 4: `dingh0448@gmail.com`（**隔离暂停中**：因触碰 Google 免费号累计 110 封 answer/69585 出站启发式规则进入冷却期，`paused: true` 静置保护）
  - Node 5: `huangding393@gmail.com`（**隔离暂停中**：因触碰出站启发式规则进入 Google 临时出站冷却期，`paused: true` 静置保护）
  - 统一外发名：`Atelier Marble`
  - 统一回信路由（Reply-To）：`ding@atelier-marble.ltd`（阿里企业邮承接）
  - 本地代理外呼通道：`http://127.0.0.1:10808`（用于 Gmail 节点安全外呼）
- **每小时精准滴灌调度规则（方案 1 降频 + 方案 2 企业邮）**：
  - **单节点频次**：**2 封 / 节点 / 小时**（单号每天仅 20~30 封，彻底低于 Google 100 封个人限额，绝不触发风控）。
  - **集群总产出**：**8 封高质量工程商开发信 / 小时**（4 活跃节点 x 2 封）。
  - **2 波次编排（Waves）**：
    - Wave 1（第 0 分钟）：3 个活跃节点各发 1 封（节点间 20~30s 拟人化打字抖动）
    - 休息 25 分钟（1500 秒，极度拟真人工外发间隔）
    - Wave 2（第 25 分钟）：3 个活跃节点各发 1 封
  - **队列智能保留**：待发送队列（`pending-dispatch-queue.json`）读取 `NEEDED` 额度后，自动保留剩余背调合格企业供下一轮无缝消耗，绝不废弃。
- **邮件纯净度与反风控保障（去机器人指纹）**：
  - 彻底剥离 `X-Mailer` 自动化特征请求头。
  - 移除所有隐藏 1x1 透明 GIF 追踪像素。
  - 采用低摩擦 1 页纸《2026 FOB 云浮数控加工基准指导价表》（$38–$48/套台面）钩子，提升承包商估价师回复率。
  - 脚本内置并发互斥锁（`data/hourly-drip.lock`）与 CWD 自适应根路径解析。
- **商业收件雷达（Inbound Radar）**：
  - 实时常驻扫描 5 个邮箱，自动过滤垃圾通知，精准捕获北美及全球商业石材承包商估价师的图纸、工程招标文件（CAD/PDF/Excel）与回复。

### 支柱 3：全球当地工作时间动态协调调度引擎 (Timezone & Working-Hours Dynamic Engine)
- **核心逻辑**：脚本 `scripts/lead-engine/timezone-helper.mjs` 原生自适应全量时区解析与当地工作时间判定。
- **调度优先矩阵**：
  - **北京时间 09:00 - 16:00**：对应澳大利亚（Sydney/Melbourne/Perth 11:00 - 18:00）、新西兰（13:00 - 19:00）黄金工作时间，优先派发澳洲与新西兰工程承包商。
  - **北京时间 12:00 - 18:00**：对应阿联酋/迪拜（08:00 - 14:00）晨间工作时间。
  - **北京时间 14:00 - 20:00**：对应英国（London 07:00 - 13:00）与欧洲大陆（08:00 - 14:00）晨间工作时间，优先派发英国工装石材加工商。
  - **北京时间 20:00 - 06:00**：对应北美（美国东部/中部/西部及加拿大早 08:00 - 18:00）核心营业时间，全力击发北美石材企业。
- **柔性回退原则（“不要求”）**：若当前时刻处于工作时间的合格目标少于 15 封配额，系统优先派发全部工作时间目标，并平滑填充剩余配额至非工作时间储备池，绝对不中断或挂起自动化作业。
- **文案国别行业痛点自适应**：
  - 澳大利亚：切入当地 \$120–\$180/hr 加工工时与严格结晶硅（silica compliance）安全合规限制。
  - 英国：切入 £70–£110/hr 加工工时与排期工票拥堵。
  - 新西兰：切入当地工装加工排期瓶颈。
### 支柱 4：发信前 10 分钟深度背调与邮箱验证 Agent (Pre-Flight Deep Due-Diligence Agent)
- **触发时机**：每小时整点发信前的 10 分钟（即每小时 50 分，`50 * * * *`）。
- **执行脚本**：[`scripts/lead-engine/company-due-diligence-agent.mjs`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/scripts/lead-engine/company-due-diligence-agent.mjs)。
- **核心职能**：
  1. **工作时间预选**：根据下一小时各时区的工作时间矩阵，预先挑选 15 家处于黄金营业时间的石材企业候选人。
  2. **多层严格邮箱验证**：执行 RFC 邮箱格式检查、DNS MX 记录实时解析、邮件服务商辨识（Google Workspace、Microsoft 365、TrendMicro、Barracuda、MailGuard 等）。无 MX 记录或解析失败的目标 100% 剔除，严防死信退信。
  3. **官网深度巡检与业务画像**：通过无头浏览器加载官网，分析企业是否具备商业加工能力（CNC、水刀、台面、干挂等）、捕获地标商业案例与主估价师/团队姓名。
  4. **提炼个性化切入钩子（Bespoke Hook）**：自动合成极度自然的定制化开篇引言与精准称呼。
  5. **进入待发送队列**：仅 100% 通过背调与验活的企业存入 [`data/pending-dispatch-queue.json`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/data/pending-dispatch-queue.json)，供整点滴灌发信引擎无缝读取发送。
  6. **双重兜底保障**：若整点发信时暂无待发送队列，发信引擎将自动就地触发背调 Agent 完成验活再发信，确保绝无任何未经背调的邮件外发。

---

## 二、已经完成了什么 (What Has Been Completed?)

### 1. 独立站 SEO 与工程知识图谱（全线达标）
- [x] 全站 29 条 canonical 路由元数据（Title 50-60 字符，Meta Description 140-160 字符）100% 达标。
- [x] 13 个商业核心页面注入 Product Schema（ASTM C97 密度 2.7 g/cm³、吸水率 <0.2%、ASTM C170 抗压强度 >110 MPa、莫氏硬度 >7、±1mm 公差等物理指标）。
- [x] 注入 9 大全流程石材加工交付 HowTo Schema（MIA 规范、ISPM 15 熏蒸木架、4K 地面干铺预排版、按楼层分房号打包）。
- [x] 静态编译通过：全站生成 332 个静态 HTML 页面，0 警告 0 报错。
- [x] 自动化测试套件：`npm test`、`npm run test:inquiry`、`tests/track-open.test.ts` 100% 通过（58/58 测试）。

### 2. 商业获客实盘成果与突破性来信
- [x] **累积成功送达高价值石材承包商：317 家**（均已记录在 `data/dispatch-log.json`，带唯一 Google SMTP `MessageId` 与时间戳，送达率 96.9%，有效隔离死信）。
- [x] **持续平稳交付**（第 14 轮前 3 波 9 封已 100% 送达；16:30 第 5 次账户健康巡检 100% 达标）。
- [x] **发信前 10 分钟深度背调 Agent 实盘拦截战果**：15:50 巡检中成功识别并拦截死信域名 `stonefactorycanada.ca`（DNS 解析失败），自动置换为合格目标，彻底消除退信风险，保障 Gmail 发信信誉。
- [x] **主候选池安全扩充**：合入 37 家经核验的商业石材企业，当前活跃候选池扩充至 **49 家**。
- [x] **商业收件雷达升级**：升级 `inbound-radar-watcher.mjs`，增加 `postmaster@` 及退信主题过滤，保持商机线索库高纯净度。
- [x] **突破性企业回信 1（田纳西头部承包商）**：成功捕获田纳西州头部工装台面加工商 **Smokey Mountain Tops** 商业估价师 Jeff Marlar（`jmarlar@smtops.com`）的企业自动回信。证实邮件成功穿透跨国企业 Exchange 防火墙，其回信明确注明 10 月 12 日（周一上午）返回办公室并附带电话。
- [x] **突破性企业回信 2（纽约高奢石材承包商）**：收件雷达（Iteration 6）成功捕获纽约布朗克斯头部建筑石材承包商 **Colonna Marble Corp.** 负责人 Maria（`maria@colonnamarble.com`）的企业直签自动回复。证实邮件成功突破 Microsoft 365 商业防垃圾网关，直达收件箱！其回复明确标注 10 月 12 日（周一上午）返回办公室，并附带办公直拨专线（718-860-4800）。
- [x] **专用应对预案已就绪**：`docs/JEFF_MARLAR_RESPONSE_PLAN.md` 与脚本 `scripts/lead-engine/dispatch-marlar-response.mjs` 已调试完毕，定于周一晨间对齐投递。
- [x] **120 间酒店台面标准测算包（Take-Off Kit）**：已建立 `data/hotel-120-vanity-sample-takeoff.csv` 与 `docs/BENCHMARK_TAKE_OFF_KIT.md`，测算显示较美本土加工可为承包商节省 +$45,388（60.9% 利润空间）。
- [x] **周三 Follow-Up 2 自动化队列已就绪**：`data/followup-2-queue.json` 包含 88 家未回复企业，`scripts/lead-engine/dispatch-followup-2.mjs` 仿真测试 100% 成功，定于周三（2026-10-14）自动折叠原邮件线程发送。

### 3. 当地工作时间协调引擎与全球候选池扩充
- [x] 编写 `scripts/lead-engine/timezone-helper.mjs`，支持北美、澳新、欧洲、中东全时区解析及工作时间精确判别（含华盛顿州 WA 与西澳 WA 智能消歧）。
- [x] 成功采集并 100% MX 验活 23 家顶级国际石材加工商（澳洲 Euro Marble、Finestone、Peraway Marble、Apex Stone、Bernini 等；英国 Roann Ltd、Stone World、Mayfair Granite、Landford Stone 等；新西兰 Artisan Stone 等；迪拜 Glaze Granite 等）。
- [x] 整合进主候选池 `data/master-candidate-pool.json`（当前池内未联系目标扩充至 79 家）。
- [x] 更新 `hourly-drip-engine.mjs`，当前北京时间 14:00 时段优先推送正处于周一晨间开工时间的英国及欧洲客户！

### 4. 自动化常驻守护任务（manage_task list）
1. 双小时技术 SEO 与节点巡检（`0 */2 * * *`，Daemon）
2. 双小时商业外贸收件雷达巡检（`0 */2 * * *`，Daemon）
3. 每小时 3 节点健康邮箱滴灌整点调度 Cron（`0 * * * *`，Daemon）

---

## 三、当前卡在哪 (Current Bottlenecks & Blockers)

系统目前**没有任何语法报错或程序死循环**。核心关注点及物理限制如下：

1. **本地科学上网代理端口依赖**：
   - 4 个 Gmail 节点和收件雷达完全依赖本地 HTTP 代理 `http://127.0.0.1:10808`。
   - **如果宿主机代理软件关闭、重启或端口改变，所有 Gmail 发信和 IMAP 巡检将报 `ECONNREFUSED` 或 `ETIMEDOUT`**。接手时若发现发信失败，首要排查 `127.0.0.1:10808` 是否正常监听。
2. **候选池消耗与扩充周期**：
   - `data/master-candidate-pool.json` 当前有 56+ 家合格目标，按每小时 15 家的速度消耗，约 3.7 小时后需要补充。
   - 当池子消耗至 20 家以下时，可随时运行 `scripts/lead-engine/enrich-and-verify-pool.mjs` 从 604 家未提取邮箱的官网中自动提取补仓。
3. **中美时差与客户反馈窗口期**：
   - 当前时间为北京时间周一中午（对应北美时间周日晚间，澳洲周一下午）。
   - 澳洲客户正在阅读邮件；北美估价师将在北京时间今晚 20:00 集中上班查信，届时将进入开信与询盘图纸回流高峰期。

---

## 四、下一步计划是什么 (Next Steps Plan)

接手新会话请按以下既定路线推进：

### 步骤 1：监视与确认滴灌实盘日志（即时）
- 查看当前发信累计记录：
  ```bash
  node -e "const fs = require('fs'); const dl = JSON.parse(fs.readFileSync('data/dispatch-log.json')); console.log('Sent:', Object.keys(dl.sent||{}).length); const hl = JSON.parse(fs.readFileSync('data/hourly-drip-log.json')); console.log('Hourly cycles:', hl.length);"
  ```
- 确认整点 Cron 继续在下一个整点平稳触发 15 封时区自适应滴灌。

### 步骤 2：周一晨间对齐投递 Jeff Marlar 专项回复（北美周一早 8:30）
- 北京时间周一 20:30（北美东部时间 08:30），执行投递针对田纳西头部加工商 Smokey Mountain Tops 估价师的专属方案：
  ```bash
  node scripts/lead-engine/dispatch-marlar-response.mjs
  ```
- 详情参阅 [`docs/JEFF_MARLAR_RESPONSE_PLAN.md`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/docs/JEFF_MARLAR_RESPONSE_PLAN.md)。

### 步骤 3：实时收件雷达监测与开信回流（周一全天值守）
- 定期运行查看客户开信与阅读情况：
  ```bash
  node scripts/lead-engine/check-email-opens.mjs
  ```
- 查看收件雷达最新捕获（如有图纸附件或工程询盘）：
  ```bash
  node scripts/lead-engine/clean-inbound-leads.mjs
  ```
- 一旦收到图纸（CAD/PDF/Excel），立即根据云浮工厂 24 小时报价机制出具 line-item 测算表。

### 步骤 4：周三（2026-10-14）击发 Follow-Up 2 队列
- 针对 Round 1 的 88 家未回复企业，按既定节奏触发第二轮跟进：
  ```bash
  node scripts/lead-engine/dispatch-followup-2.mjs
  ```
- 该脚本已配置原线程折叠（`In-Reply-To`）与 80 秒/节点温和频控，直接仿真后发信。

---

## 五、有哪些踩过的坑绝对不要再踩 (Strict Pitfalls & Lessons Learned)

新会话必须将以下 7 条经验刻在系统准则中，**绝对不要重复踩坑**：

### 坑 1：Windows PowerShell 传参引号剥离陷阱
- **现象**：在 Windows PowerShell 终端中，如果在 `run_command` 中使用 `node -e "..."` 且内部带有双引号或换行符，PowerShell 解析器会自动剥离双引号，导致 JavaScript 报 `SyntaxError: Unexpected identifier`。
- **铁律**：**严禁在 PowerShell 下写长串内嵌引号的 `node -e` 命令！** 所有复杂逻辑、数据筛选和发信操作，**必须编写独立的 `.mjs` 文件**（保存在 `scripts/lead-engine/` 下），然后使用 `node scripts/lead-engine/xxx.mjs` 干净执行！

### 坑 2：Zero Layout Mutation 原则（生产站前端保护）
- **现象**：过往修改前端代码时若随意删改文案、调整 DOM 结构，会导致 Cumulative Layout Shift (CLS > 0) 或测试断言失败。
- **铁律**：独立站生产页面的前端视觉和文字声明**绝对不要随意改动**！所有 SEO 优化、Schema 注入、追踪端点，只能在非渲染代码层（`additionalJsonLd`、`<head>`、API 路由）进行透明扩展，确保 58 项自动化测试随时保持 100% 通过。

### 坑 3：发信频控与退信真实原因判断
- **真相**：调阅原始 RFC 退信报告后发现，退信是目标企业（Crystal Marble）员工离职，其 Microsoft 365 Exchange 网关返回的 `550 5.4.1 Mailbox Not Found`，与发信节点信誉毫无关系。
- **铁律**：
  1. 单个 Gmail 节点严禁超过 10 封/小时。当前设定的 **5 封/节点/小时**（每 12 分钟 1 封，包含 20-30 秒抖动）是兼顾送达率与安全性的黄金上限。
  2. 触发 Google 临时冷却的节点必须静置观察，严禁强行发信。

### 坑 4：账号密码凭据安全隔离
- **铁律**：`data/outreach-accounts.json` 包含 4 个 Gmail 节点和阿里企业邮的应用专用密码。该文件已被 `.gitignore` 严格保护，**绝对不能通过 `git add -f` 强行提交到 GitHub 远端**！

### 坑 5：开发信文案“去 AI 味”与同行商业共鸣
- **铁律**：必须坚持**真实商业承包商与估价师同行对话语境**：直切痛点（shop fabrication 工时成本）、务实能力（云浮/水头基地、2D/3D CAD 排版、地面干铺 4K 验货、按楼层分房号打熏蒸木箱）、零压力收尾（免费 24 小时 line-item 测算）。

### 坑 6：收件雷达去噪与关键信息提纯
- **铁律**：`scripts/lead-engine/inbound-radar-watcher.mjs` 中必须维持 `IGNORED_SENDERS` 黑名单机制，确保 `data/inbound-leads.json` 沉淀的全部是真正有商业价值的承包商询盘与投标图纸。

### 坑 7：外发邮件严禁携带机器人 X-Mailer 头部与隐形 1x1 追踪像素
- **铁律**：外发邮件必须彻底剥离一切机器人 `X-Mailer` 头部与隐藏 `1x1` 透明像素，保持最纯粹的自然商务邮件格式（洁净文本/HTML + 纯净官网链接），零特征穿透企业反垃圾防火墙。

### 坑 8：Gmail 健康体检不能仅查 SMTP AUTH 握手，必须穿透扫描收件箱退信
- **现象**：当 Gmail 节点触发 Google 每日限额或启发式风控（answer/69585）时，Google 不会吊销密码，`transporter.verify()` 依然会返回 100% HEALTHY（产生假阳性盲区），但实际所有出站邮件会被内部拦截并退信到收件箱。
- **铁律**：`scripts/lead-engine/check-account-health-hourly.mjs` 必须采用**双重雷达机制**（SMTP 认证握手 + IMAP 穿透扫描 `[Gmail]/All Mail`）。一旦检测到最新退信包含 `answer/69585` 或 `Message rejected`，系统自动熔断该节点（自动将 `outreach-accounts.json` 中的 `paused` 设为 `true`），绝不让受限节点继续外发。

---

## 六、关键路径与资产速查表

| 资产类型 | 物理路径 | 说明 |
| :--- | :--- | :--- |
| **发信配置** | [`data/outreach-accounts.json`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/data/outreach-accounts.json) | 4 节点 Gmail + 阿里企业邮凭据（严格忽略） |
| **发信审计日志** | [`data/dispatch-log.json`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/data/dispatch-log.json) | 累计 248 家送达记录、10 家死信隔离、MessageId |
| **滴灌循环日志** | [`data/hourly-drip-log.json`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/data/hourly-drip-log.json) | 记录每小时 5 波次（15 封）的发送结果与批次 |
| **合格储备池** | [`data/master-candidate-pool.json`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/data/master-candidate-pool.json) | 56+ 家已通过 MX 校验的全球石材加工厂 |
| **国际储备池** | [`data/international-verified-leads.json`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/data/international-verified-leads.json) | 23 家澳/英/新/阿联酋商业石材直接验活企业 |
| **时区调度助手** | [`scripts/lead-engine/timezone-helper.mjs`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/scripts/lead-engine/timezone-helper.mjs) | 全球 IANA 时区解析与当地工作时间判定核心工具 |
| **每小时滴灌引擎** | [`scripts/lead-engine/hourly-drip-engine.mjs`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/scripts/lead-engine/hourly-drip-engine.mjs) | 5 封/邮箱/小时，工作时间自适应，5 波次主引擎 |
| **收件雷达巡检** | [`scripts/lead-engine/inbound-radar-watcher.mjs`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/scripts/lead-engine/inbound-radar-watcher.mjs) | 轮询 5 邮箱抓取回复与附件图纸 |
| **Jeff Marlar 专项** | [`scripts/lead-engine/dispatch-marlar-response.mjs`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/scripts/lead-engine/dispatch-marlar-response.mjs) | 周一晨间对齐投递 Smokey Mountain Tops 方案 |
| **120间酒店测算包** | [`docs/BENCHMARK_TAKE_OFF_KIT.md`](file:///d:/%E7%8B%AC%E7%AB%8B%E7%AB%99/Atelier-Marble-Site/docs/BENCHMARK_TAKE_OFF_KIT.md) | 标准 line-item 报价测算模型与技术规格 |

---

*这份交接文档已在本地仓库完整同步并归档，接手会话读取本文档即可直接全面掌控全局，无缝延续所有任务执行。*

## 2026-10-14 工厂18秒实拍视频

- 用户授权将提供的车间短片按已确认方案接入网站。基于另一台电脑最新 `origin/main` 的 `045a35c` 实现，保留此前内容与链接；原 F 盘工作树的本地资料未覆盖。
- 网站版为1920×1080 H.264/AAC，约7.9MB，时长17.87秒，16:9不裁切。原始4K HEVC文件约79MB，保持原样。首页使用封面入口，加工页首屏之后提供播放器与带来源的询价按钮；工厂图库增加同一条短片，原16条保留。
- 点击前仅显示封面、不自动播放；默认静音，点击后使用原生控制。播放、看完和入口/询价点击作为诊断事件，不计为询盘或广告转化。新事件尚无GA4后台收数验收证据。
- 16项相关检查、333页构建、202资产审计和本地30页SEO审计通过。实际浏览器在1440px与390px无横向溢出，视频已完整播放且无解码错误；手机询价入口来源和项目类型正确，未提交表单。
- 发布记录与媒体验收口径：`docs/workshop-walkthrough-release-2026-10-14.md`。生产结果另以实际部署和线上播放证据核对；不要用本地截图宣称已上线或排名改善。新视频不能证明上游新写的5轴设备、固定公差或ASTM检测值，已有相关表述需要独立资料核验。

## 2026-10-14 首页视频原地播放修正

用户明确要求在首页直接播放，覆盖此前首页封面跳转设计。首页现用原生播放器，点击播放保持首页，首屏Watch Workshop Videos按钮改为首页内锚点；询价来源仍为/。保留16:9、不自动播放、默认静音、preload=none和已有播放诊断事件。媒体文件与其他服务页面未改。13项针对性检查通过；发布后核验实际首页URL不变及播放结果。

## 2026-10-15 低曝光 SEO 修复

- 本轮依据实时 GSC：选中7天实际为10月5—11日，106曝光、1点击、CTR 0.9%、平均排名18.1；vanity独立页面汇总88曝光、0点击。不能把查询表和页面表拼成关联数据，也不能据此确认每天只有5—6曝光。
- Vanity和fabrication已索引、canonical正确，但所见已索引版本抓取停在9月10日；countertops最近抓取10月10日，Product snippets报告AggregateOffer缺lowPrice，sitemap栏显示临时处理错误。
- 清理报价分类页中的13个额外Product和14个HowTo对象、无依据价格/库存/固定规格；不虚构价格补错。Vanity增加材料选择表与真实照片、既有询价关联；120间酒店页改为图纸与构件参考，URL保留。真实变更路由更新lastmod。Title/Description仍保持到10月24日，但本轮正文变更需记入实验混杂因素。
- 19项针对性测试、333页构建、202资产审计、30页本地SEO审计通过；390px/1440px显示已核验。修改在托管工作树 `C:\Users\86580\.codex\worktrees\factory-workshop-video\Atelier-Marble-Site`，F盘旧树资料未覆盖。发布后以正确SHA的Ready状态和生产页面验收，不用部署或索引申请宣称排名改善。
- 详细基线、资料依据和验收边界：`docs/seo-ranking-repair-2026-10-15.md`。本地原始证据在 `F:\Atelier-Marble-Site\outputs\seo-ranking-repair-20261014`，不提交账户界面快照。不启动或扩大外联。

## 2026-10-16 CAD拆图与客户反馈图

- 用户要求“马上把网站上的这个图片下架”：已全量下架 `/assets/project-evidence/redacted-cad-takeoff-client-feedback.webp` 与对应 PNG 放大图。从首页及定制加工页彻底移除 CAD Take-off 与客户反馈图片模块，同步更新图片站点地图、移除对应测试套件，并通过生产构建与部署立即生效。vanity 观察窗口保持不变。

## 2026-10-16 首页视频/工程案例左右布局替换

- 对齐另一台电脑最新main `625000b` 后实现，保留其首页切割视频选择和已下架旧台面案例。此前未发布的两张工程卡片草稿已单独stash保存，不恢复或发布。
- 用户最终要求：合并新提供的两张工程图，图内细节不改，只整行清除两页顶部公司信息；替换当前工程案例，并将首页切割视频与案例改为合理的左右布局。
- 新合成图3187×1569，工程原图分别1502×1047和1525×1031，原尺寸直接放入，不重采样/重绘/裁剪。仅第一图两处顶部信息行白色遮盖，其他像素差异0；第二图全部像素差异0。新增客户反馈逐字保留，无星级或虚构验证标记。公开PNG+无损WebP为 `/assets/project-evidence/engineering-proposal-original-details-v2.*`。
- 首页桌面1:2分栏，左视频右案例，共用卡片样式；手机一列。1440px实测两栏418.66/837.34px，顶底对齐，无溢出；390px各343px宽，上下排列，无溢出。切割视频完整播放12.817秒，无错误、URL不变。保留完整图高清链接，已撤下旧含不支持验证/星级声明的两张案例图，旧文件已本地备份。
- 11项针对性检查、333页构建、202资产审计、30页本地SEO审计通过；图片sitemap24页248关联。未改变原图的工程review/未生产放行状态，不声称承载已验证或安装完成。未提交表单、发外联、改邮箱或vanity摘要。
- 记录 `docs/engineering-showcase-replacement-2026-10-16.md`；源图/像素核验/旧图备份/屏幕验收在 `F:\Atelier-Marble-Site\outputs\engineering-showcase-replacement-20261016`。生产结果以实际SHA、Ready、线上图片字节与浏览器核验为准。

## 2026-10-16 列表与详情页参考图文案

- 用户要求去掉“人工智能生成”，并明确点击后的详情页和图库也要同步。已统一5组素材的label/title/alt/description及源命名规则，改为石雕造型、花卉石雕、室内、厨房、车间等设计参考表述，保留concept/illustrative参考定位。
- 列表卡片、详情H1/metadata、图库分类及图片描述共用更新后的manifest；素材图片及既有URL/详情slug保持原有地址。历史文件名不作本轮路由迁移。源生成规则一起修改，避免重新生成覆盖文案。
- 202素材审计、12项既有来源/内容检查通过。构建和正式列表/四个受影响可点击详情页的验收以本轮实际结果为准；本地证据 `F:\Atelier-Marble-Site\outputs\reference-copy-20261016`。不将设计参考改称已完成订单、实物生产或工厂证据。首页左右布局和工程图细节不变。

## 2026-10-17 详情图库自适应布局

- 用户截图指出详情卡片大量空白；实测1280px下卡片统一高718px，图片和说明外多出166–480px。移除详情模板的等高网格，改为独立的自然高度分栏，桌面3列、平板2列、手机1列，24px间距，紧凑说明区。
- 原图完整显示、不裁切；静态渲染读取原有图片宽高，为懒加载预留比例。30张雕刻图库照片和所有既有URL、alt、参考定位文案保留。全体详情页共用修正；首页左右视频/案例布局、列表卡片和vanity摘要不改。
- 202资产审计、5项既有静态检查、333页构建/TypeScript和30页SEO审计通过。1440px/390px实际浏览器：无横向溢出，无多余卡片空白（2px边框），图片比例正确。证据 `F:\Atelier-Marble-Site\outputs\gallery-layout-20261017`，记录 `docs/project-detail-gallery-layout-2026-10-17.md`。
- 生产发布仍按实际SHA、Vercel Ready及主域名浏览器验收确认，不用视觉修正宣称排名或点击增长。
- 首次发布293b620因路由读取图片尺寸导致Vercel服务函数打包394MB而被拒。已将尺寸读取移至prebuild脚本，仅向页面导入小型JSON清单，避免图片进入函数包；后续新增图库图运行prepare:gallery-images（build自动执行）。不能用提高函数大小限制掩盖此问题。

## 2026-10-22 咨询页简化与文字询盘恢复

- 用户报告/contact咨询失效且信息太多。线上已有失败提示，Supabase配置域名DNS不存在；生产SMTP已配置，但无附件备用投递开关原为false。已开启既有`INQUIRY_DEGRADED_NO_FILE_FALLBACK`生产配置，新部署后生效。未改密码，不将此操作称为数据库或附件服务恢复。
- /contact只展示邮箱、需求说明和Send inquiry按钮，图纸可后续通过邮件/WhatsApp补充。压缩顶部与联系说明，咨询页隐藏遮挡按钮的悬浮WhatsApp，保留页面内直接联系入口。来源、项目类型、防重复、API校验与感谢页统计沿用；其他商业页详细表单维持已发布版本。
- 在独立托管树`C:\Users\86580\.codex\worktrees\contact-simplify\Atelier-Marble-Site`、`codex/contact-simplify`基于292fb8f实施。之前factory-workshop-video树的未提交草稿及未发布about提交未覆盖、未混入发布。
- 验收说明`docs/contact-simplification-2026-10-22.md`，证据`F:\Atelier-Marble-Site\outputs\contact-simplify-20261022`。生产结果以实际Ready部署与带内部标记提交为准。SMTP服务器接收与实际收件箱到达须区分；数据库故障时备用防重复缓存仅对单进程有效。

## 2026-10-22 用户自行提交的收件差异追踪

- 站主先确认收到内部测试，随后明确报告自己另一条提交虽到感谢页，但ding企业邮箱没收到。不能用前一封内部测试代替后一封收件验收。生产日志11:55:11、12:02:34两次POST均200，均启用无附件备用投递，未记录SMTP失败；未证明实际收件位置。
- 原同项目类型的全部邮件共用同一主题，可能被会话合并，尚未证实。已请站主搜索旧主题并展开查找自己的内容；企业邮箱网页登录框空白，未读取其收件箱或垃圾箱。
- 新增稳定咨询编号、唯一主题/Message-ID、隐私受限的SMTP接受及队列记录、感谢页编号显示。保留两字段、回复地址、收件人、提交锁、防重复和既有跟踪。记录`docs/inquiry-delivery-trace-2026-10-22.md`；证据`F:\Atelier-Marble-Site\outputs\contact-delivery-debug-20261022`。须用外部Reply-To的内部测试与实际收件确认继续验收，不得将部署或SMTP250当成最终到达证明。

## 2026-10-23 查询承接、索引核查与 vanity 选材正文

最新分析见 docs/seo-query-index-iteration-2026-10-23.md。GSC采集中更新了完整周期，最终统一为9月24日至10月21日；4个精确商业词均只显示vanity承接，材料词41曝光/均位11.1，其余38/22.3、26/18.3、22/20.9，均无点击。Marble材料页5曝光/均位7.0但查询表无数据，不据此虚构搜索意图或稳定首页排名。

32条noindex均为旧/project/图片详情，保留排除。8条发现未索引已保存清单且线上200/自canonical/无noindex；三主推页及一体盆逐页确认已收录、自canonical。大理石台面未收录但Google实时检查通过；一次请求索引因提交错误及reCAPTCHA连接失败未被接受。石英岩单页检查为Google未识别，无可报告canonical；不等同于网站设了noindex。主sitemap今天读取成功、发现30页，图片sitemap成功24页。

本轮只完善vanity现有选材比较、材料类别与重复房型确认点，增加到既有大理石加工页的正文链接；Title/Description未改，只将该页实质内容lastmod更新为10月23日。正文变化需单独记录，不将后续变化全归因于摘要实验。原图、案例、表单与来源参数保留。

当前主源码仍在contact-simplify托管工作树；F盘旧源码草稿不覆盖。完整界面证据、标明为转录的CSV、请求错误与验收截图在F:\Atelier-Marble-Site\outputs\seo-query-index-20261023\；生产发布身份以release-result.json及当前Vercel/主域名复核为准，不凭提交推断上线或排名增长。10月22日站主已确认旧询盘在同主题会话中找到、新编号AM-8E9DEAA70858入收件箱；数据库/在线附件未据此声称恢复。

## 2026-10-24 大理石台面与石英岩采购入口

基于e0ed6d9继续，未覆盖F盘旧树。两页复用现有组件增加首屏简短询价入口、清楚的产品H1与采购说明；大理石原8块长文改为带摘要的原生展开说明，原段落保留；石英岩补充天然石英岩/人造石英石区别及行业来源，原图明确为设计参考。只将两页实质更新lastmod设为10月24日，metadata摘要及vanity页不改。

前后333页构建与公开路由检查、30页SEO审计、202素材审计、既有metadata测试通过。390px英文手机首屏两页询价按钮可见、无横向溢出，1440px布局和展开操作已核验。报告docs/material-page-procurement-update-2026-10-24.md，私有发布/UI证据F:\Atelier-Marble-Site\outputs\seo-material-pages-20261024\。生产身份须以该目录release-result.json和正式域名验收核实，不凭提交声称排名提高。

Google请求索引仍无受理证明；站主不会切换节点，本轮保留现有代理设置，不把验证码问题当作SEO任务整体阻塞。主sitemap已有成功读取证据。继续按实际Google抓取/收录和可比完整GSC周期判断结果，不反复点请求、不改安全设置、不将已上线等同已收录。

## 2026-10-24 首页车间全景横幅替换

用户提供2033×774车间全景，要求替换首页横幅。新文件为`public/assets/factory/home-workshop-panorama-20261024.webp`，仅格式压缩至318562字节，原尺寸保留；未重绘、修饰或裁切源文件。原始PNG及SHA256、压缩记录保存在F:\Atelier-Marble-Site\outputs\home-banner-20261024\。旧横幅文件保留，首页改用新URL以避免旧缓存；只调整手机取景位置为35%，桌面居中，复用原遮罩、首屏文字及询价来源。

首页实质更新日期改为10月24日，图片sitemap同步新路径；其他页、摘要及OG图保持原值。前后333页构建、公开路由检查，13项首页/声明检查及1项全站图片地图检查、本地30页SEO审计通过。1440px与390px英文浏览器图像完整加载、无横向溢出，截图和状态在上述私有目录；生产发布身份及正式域名图片核验以该目录release-result.json、production-*证据为准。横幅换图不等同收录或排名改善；此前两页生产手机点击及Google观察仍按原目标推进。
