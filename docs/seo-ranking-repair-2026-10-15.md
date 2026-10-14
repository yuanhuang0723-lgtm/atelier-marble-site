# 2026-10-15 SEO 修复与搜索基线

## 范围与结论

用户要求改善低曝光和靠后的排名。本轮基于 `bdec554148f9480cc007c031c07a45691da1cdb1`，在托管工作树实施；F 盘旧工作树及其未提交资料保持原样。推送与生产部署已获用户授权。未操作客户外联。

当前自然搜索获客较弱；本轮修复不构成排名、流量或询盘增长的证据。不能把结构化数据错误认定为已证实的普通搜索排名处罚。

## 已核实的 GSC 基线

属性：`https://ateliermarblestone.com/`。搜索类型 Web，界面选中 7 days，图表实际完整日期为 **2026-10-05—2026-10-11**。未取得加拿大或设备单独筛选数据。

| 指标 | 数值 |
| --- | ---: |
| 曝光 | 106 |
| 点击 | 1 |
| CTR | 0.9% |
| 平均排名 | 18.1 |

每日曝光依次为 20、21、18、18、10、7、12。因此不能从本轮数据断言每天只有 5—6 次曝光。

独立页面汇总：vanity 88 曝光、0 点击、平均排名 18.1；首页 2 曝光、1 点击；countertops 1 曝光、0 点击。

独立查询汇总：`marble vanity tops` 23 曝光/18.9；`marble vanities tops` 22/20.7；`luxury hotel vanity top materials` 19/9.8；`hotel bathroom countertop` 11/22.5；`hotel countertops` 6/22.8；`marble vanity top` 3/14.3，均无点击。这里查询和页面是分别读取的汇总表，不能拼接为查询 × 页面关联数据。

三个月概览显示 302 曝光、2 点击、平均排名 25，但未保存该图表完整日期边界，后续比较优先使用上述已保存完整日期的 7 天基线。

## 索引检查

- Vanity：已索引，抓取成功、允许抓取，Google canonical 与检查 URL 一致；已索引版本最近抓取显示 2026-09-10 22:37:39。
- Fabrication：已索引，成功手机抓取，canonical 一致；最近抓取显示 2026-09-10 16:50:44。
- Countertops：已索引，成功手机抓取，canonical 一致；最近抓取显示 2026-10-10 20:19:49。索引面板的 sitemap 栏显示 Temporary processing error。Product snippets 有 1 无效项，关键错误是 AggregateOffer 缺 lowPrice；旧抓取内容包含价格 0、InStock 和未核验的加工/检测声明。
- 抓取时间为 GSC 界面原样记录，未转换时区。旧抓取记录不能证明 Google 已处理 10 月的新正文或视频。

## 本轮修改

1. 删除 13 个额外 Product、14 个 HowTo 对象及其中无依据的价格、库存、设备和材料测试值。保留原有合适的 Service、CollectionPage、FAQ、Breadcrumb、VideoObject 等标记。不用虚构 lowPrice 来填补 GSC 报错。
2. 将未核验的固定公差、5 轴设备、统一 ASTM 检测数值和固定包装承诺改回需按项目确认的采购资料。
3. Vanity 产品照片之后增加可见的 marble/granite/quartzite 材料选择表、资料确认项、现有材料页链接及保养来源；询价按钮复用既有 sourcePage/projectType，图片与设计参考保留。
4. `/projects/hotel-vanity-tops-fabrication-case` 保留 URL，改为图纸与构件参考审阅。使用实际构件照片、脱敏图纸及车间参考，撤下无订单依据的 120 间酒店完成案例声明。
5. 更新 17 个实际修改路由的 sitemap lastmod 为 2026-10-15，重新生成图片 sitemap。Vanity Title/Description 未改，继续保持到 10 月 24 日；正文和其他页面本轮变更会影响实验归因，不能将后续变化全部归于摘要。
6. 新增采购可信度检查，防止报价分类页再次包含虚构库存、价格、固定设备/检测值或虚构酒店项目。

## 资料依据

- Google structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies 。标记应反映真实可见内容；Google 明确区分富结果资格与普通搜索排名。
- Natural Stone Institute care: https://www.naturalstoneinstitute.org/consumers/care/ 。中性清洁剂；密封可提高抗污能力，但不等于完全防污。本站未声称为其会员或获其背书。
- 产品、脱敏图纸和车间素材：既有已审阅图片归档；这组素材未被认定为同一酒店订单的完整过程证据。

## 本地验收

- 19 项针对性测试通过，涵盖采购声明、图片 sitemap、摘要、首页定位、视频、追踪归因。
- Next.js Turbopack 构建通过，333 个页面生成；资产审计 202 项通过。
- 30 页本地 SEO 审计通过；29 个非法律页通过既有摘要长度检查；图片 sitemap 与 24 个页面、247 个显示图片关联一致。
- Vanity 在 390×844 与 1440×900 无横向溢出，材料表可读、产品图片加载，材料询价保留正确来源和项目类型。参考页在 390px 图片与询价正常；加工页保留实际图片和短片入口。
- 未修改询盘 API、媒体文件、GA4 转化设置或凭据。未提交客户表单，未将内部验收流量记为业务成果。
- 本地证据目录：`F:\Atelier-Marble-Site\outputs\seo-ranking-repair-20261014`。原始 GSC UI 记录仅保存在本地，不提交账户界面快照；这些记录不是原生 CSV 导出。

## 发布与 Google 后续

代码待本轮选择性提交和推送；以正确提交的 Vercel Ready 状态、生产 HTML、sitemap 和浏览器画面验收。生产结果及 Google live test / indexing request 结果将追加到本地验收记录。

只有 Google 后续完成处理并出现可比较的 GSC 数据，才能评估排名与点击效果。10 月 24 日或之后使用相同日期长度、筛选条件复盘；样本不足就记录无法判断。当前尚无新增询盘或排名改善证据。
