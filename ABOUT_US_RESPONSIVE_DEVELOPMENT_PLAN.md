# About Us 页面响应式开发计划

## 📋 项目概述

本项目需要开发一个"About Us"页面的响应式版本，包含桌面端、平板端和手机端三个版本。所有版本使用相同的页面元素，但布局和样式会根据屏幕尺寸进行调整。

---

## 🔍 设计差异分析

### 1. Hero Section (顶部横幅区域)

#### 桌面端 (Desktop - 1728px)
- **标题**: "Our Story" (H1, 96px, 700 weight)
- **文字**: Body 3a (32px, 300 weight)
- **Padding**: 389px 164px
- **高度**: 1183px
- **背景图片**: 全宽背景图片，带渐变遮罩

#### 平板端 (Tablet - 1024px)
- **标题**: "Our Story" (H2, 64px, 700 weight)
- **文字**: Sub H9 (24px, 300 weight)
- **Padding**: 235px 96px
- **高度**: 891px
- **背景图片**: 相同的背景图片，但尺寸调整

#### 手机端 (Mobile - 375px)
- **标题**: "Our Story" (H3, 24px, 700 weight)
- **文字**: Body 7 (14px, 300 weight)
- **Padding**: 68px 42px
- **高度**: 420px
- **背景图片**: 移动端优化的背景图片

**差异总结**:
- 字体大小递减：96px → 64px → 24px
- 内边距递减：389px → 235px → 68px
- 高度递减：1183px → 891px → 420px

---

### 2. Stats Section (统计卡片区域)

#### 桌面端
- **布局**: 2行3列网格 (6个统计卡片)
  - 第一行：3个卡片横排 (Distributors, Annual Bike Sales, Retail Stores)
  - 第二行：4个卡片横排 (Employees, Countries, Global Factories)
- **卡片间距**: 301px (第一行), 329px (第二行)
- **图标尺寸**: 63.46×63.32px (第一行), 68.91×68.91px (第二行)
- **数字字体**: Sub H1.1 (80px, 700 weight)
- **标签字体**: Body 9 (28px, 300 weight)
- **卡片间距**: 35px (图标到文字)
- **容器宽度**: 1190px
- **Padding**: 158px 165px

#### 平板端
- **布局**: 2行3列网格 (6个统计卡片)
  - 第一行：3个卡片横排
  - 第二行：4个卡片横排
- **卡片间距**: 167.27px (第一行), 182.84px (第二行)
- **图标尺寸**: 35.26×35.19px (第一行), 38.3×38.3px (第二行)
- **数字字体**: 44.46px (700 weight)
- **标签字体**: 15.56px (300 weight)
- **卡片间距**: 19.45px (图标到文字)
- **容器宽度**: 661.32px
- **Padding**: 67px 97px

#### 手机端
- **布局**: 完全不同的布局结构
  - 左列：2个卡片 (Distributors, Employees)
  - 中列：2个卡片 (8M Annual Bike Sales, 50 Countries)
  - 右列：2个卡片 (3k+ Retail Stores, 5 Global Factories)
- **卡片间距**: 105.11px (水平), 11.06px (垂直)
- **图标尺寸**: 19.51×19.47px (小图标), 21.19×21.18px (中等), 31.34×28.51px (大图标)
- **数字字体**: 24.59px (700 weight)
- **标签字体**: 8.61px (300 weight)
- **卡片间距**: 11.06px (图标到文字)
- **容器宽度**: 226.71px
- **Padding**: 0px 35px

**差异总结**:
- 桌面端：大图标、大字体、宽间距
- 平板端：中等图标、中等字体、中等间距
- 手机端：小图标、小字体、紧凑布局，使用3列垂直布局

---

### 3. Image + Text Blocks (图片+文字区块)

#### 桌面端
- **布局**: 图片和文字并排 (图片在左，文字在右)
- **图片尺寸**: 填充整个容器宽度
- **图片圆角**: 10px
- **文字区块**:
  - 标题: Sub H1.1 (80px, 700 weight)
  - 正文: Body 3a (32px, 300 weight)
  - Padding: 158px 165px
  - 文字颜色: #FFFFFF
- **区块间距**: 14px (gap)

#### 平板端
- **布局**: 图片和文字并排 (图片在左，文字在右)
- **图片尺寸**: 填充整个容器宽度
- **图片圆角**: 5.93px
- **文字区块**:
  - 标题: Sub H3 (28px, 700 weight, 居中)
  - 正文: Body 8 (15px, 400 weight)
  - Padding: 67px 97px
  - 文字颜色: #FFFFFF
- **区块间距**: 8.3px (gap)

#### 手机端
- **布局**: 图片和文字垂直堆叠 (图片在上，文字在下)
- **图片尺寸**: 填充整个容器宽度
- **图片圆角**: 5.93px
- **文字区块**:
  - 标题: Sub H5 (20px, 700 weight)
  - 正文: Body 6 (14px, 300 weight)
  - Padding: 0px 35px
  - 文字颜色: #FFFFFF
- **区块间距**: 8.3px (gap)

**差异总结**:
- 桌面端：大标题、大字体、水平布局
- 平板端：中等标题、中等字体、水平布局
- 手机端：小标题、小字体、垂直布局

---

### 4. Contact Form Section (联系表单区域)

#### 桌面端
- **高度**: 679px
- **Logo位置**: 左侧上方
- **表单宽度**: 514.3px
- **标题**: Sub H2 (40px, 700 weight)
- **描述**: 20px (300 weight)
- **输入框**: 577px × 57px
- **按钮**: 包含文字和箭头图标
- **Footer**: 水平布局，包含社交媒体图标、分隔线、联系信息

#### 平板端
- **高度**: 481px
- **Logo位置**: 居中上方
- **表单宽度**: 830px
- **标题**: Sub H3 (28px, 700 weight, 居中)
- **描述**: 20px (300 weight)
- **输入框**: 577px × 57px
- **按钮**: 包含文字和箭头图标
- **Footer**: 垂直布局，包含社交媒体图标、分隔线、联系信息

#### 手机端
- **高度**: 456px
- **Logo位置**: 无（只显示表单）
- **表单宽度**: 296px
- **标题**: Sub H5 (20px, 700 weight)
- **描述**: Body 4 (15px, 500 weight)
- **输入框**: 296px × 32px (较小)
- **按钮**: 包含文字和箭头图标（较小）
- **Footer**: 垂直布局，包含社交媒体图标、分隔线、联系信息（垂直堆叠）

**差异总结**:
- 表单宽度递减：577px → 577px → 296px
- 输入框高度递减：57px → 57px → 32px
- Footer布局：桌面端水平，平板和手机端垂直

---

## 🧩 组件清单

### 核心组件

1. **Hero Section (Our Story)**
   - 组件名: `about-hero-section`
   - 文件: `components/about-hero-section.html`
   - CSS: `css/components/about-hero-section.css`
   - 特性: 响应式标题、文字、背景图片

2. **Stats Cards Section**
   - 组件名: `about-stats-section`
   - 文件: `components/about-stats-section.html`
   - CSS: `css/components/about-stats-section.css`
   - 子组件: `about-stat-card` (6个)
   - 特性: 响应式网格布局

3. **Stat Card Component**
   - 组件名: `about-stat-card`
   - 文件: `components/about-stat-card.html`
   - CSS: `css/components/about-stat-card.css`
   - 特性: 图标、数字、标签

4. **Image + Text Block Component**
   - 组件名: `about-image-text-block`
   - 文件: `components/about-image-text-block.html`
   - CSS: `css/components/about-image-text-block.css`
   - 特性: 响应式布局（水平/垂直）

5. **Contact Form Section** (已存在)
   - 组件名: `contact-form-section`
   - 文件: `components/contact-form.html`
   - CSS: `css/components/contact-form.css`
   - 状态: ✅ 已存在，需要适配响应式样式

6. **Navigation Bar** (已存在)
   - 组件名: `navbar`
   - 文件: `components/navbar.html`
   - CSS: `css/components/navbar.css`
   - 状态: ✅ 已存在，需要添加About Us页面链接

---

## 🖼️ 图片资源清单

### Hero Section 背景图片
- [ ] `about-hero-bg-desktop.png` - 桌面端背景 (1728px宽)
- [ ] `about-hero-bg-tablet.png` - 平板端背景 (1024px宽)
- [ ] `about-hero-bg-mobile.png` - 手机端背景 (375px宽)

### Stats Section 图标
- [ ] `stat-icon-distributors.svg` - 分销商图标 (63.46×63.32px桌面)
- [ ] `stat-icon-bike-sales.svg` - 自行车销售图标 (92.73×52px桌面)
- [ ] `stat-icon-retail-stores.svg` - 零售店图标 (65.94×61.41px桌面)
- [ ] `stat-icon-employees.svg` - 员工图标 (68.91×68.91px桌面)
- [ ] `stat-icon-countries.svg` - 国家图标 (69.91×69.63px桌面)
- [ ] `stat-icon-factories.svg` - 工厂图标 (74.21×74.26px桌面)

### Image + Text Blocks 图片
- [ ] `about-image-1-desktop.png` - 第一张图片桌面版
- [ ] `about-image-1-tablet.png` - 第一张图片平板版
- [ ] `about-image-1-mobile.png` - 第一张图片手机版
- [ ] `about-image-2-desktop.png` - 第二张图片桌面版
- [ ] `about-image-2-tablet.png` - 第二张图片平板版
- [ ] `about-image-2-mobile.png` - 第二张图片手机版

### 图片下载说明
- 所有图片需要从Figma导出
- SVG图标需要保持矢量格式
- PNG图片需要按照不同尺寸导出
- 图片命名规则: `{组件名}-{用途}-{设备}.{扩展名}`

---

## 📝 开发步骤

### Phase 1: 准备阶段 ✅
- [x] 分析Figma设计
- [x] 识别组件和差异
- [x] 创建开发计划文档
- [ ] 下载所有图片资源

### Phase 2: 图片资源准备
- [ ] 从Figma下载Hero背景图片（桌面、平板、手机）
- [ ] 从Figma下载Stats图标（6个SVG图标）
- [ ] 从Figma下载Image+Text区块图片（2组，每组3个尺寸）
- [ ] 整理图片到 `assets/images/about/` 目录
- [ ] 创建图片资源清单文档

### Phase 3: 基础组件开发
- [ ] 创建 `about-hero-section` 组件
  - [ ] HTML结构
  - [ ] CSS样式（桌面端）
  - [ ] 响应式样式（平板、手机）
- [ ] 创建 `about-stat-card` 组件
  - [ ] HTML结构
  - [ ] CSS样式（桌面端）
  - [ ] 响应式样式（平板、手机）
- [ ] 创建 `about-stats-section` 组件
  - [ ] HTML结构（包含6个stat-card）
  - [ ] CSS样式（桌面端网格布局）
  - [ ] 响应式样式（平板、手机布局）

### Phase 4: 高级组件开发
- [ ] 创建 `about-image-text-block` 组件
  - [ ] HTML结构
  - [ ] CSS样式（桌面端水平布局）
  - [ ] 响应式样式（平板水平、手机垂直）
- [ ] 适配 `contact-form` 组件
  - [ ] 添加响应式样式
  - [ ] 确保在不同设备上正确显示

### Phase 5: 页面集成
- [ ] 创建 `about.html` 页面
  - [ ] 引入导航栏组件
  - [ ] 引入所有About Us组件
  - [ ] 引入联系表单组件
  - [ ] 添加页面级CSS
- [ ] 更新导航栏链接
  - [ ] 添加About Us页面链接
  - [ ] 确保所有导航链接正确

### Phase 6: 响应式优化
- [ ] 桌面端优化 (≥1728px)
  - [ ] 检查所有组件在桌面端的显示
  - [ ] 调整间距和字体大小
- [ ] 平板端优化 (1024px)
  - [ ] 检查所有组件在平板端的显示
  - [ ] 调整布局和间距
- [ ] 手机端优化 (375px)
  - [ ] 检查所有组件在手机端的显示
  - [ ] 调整布局和字体大小
  - [ ] 优化触摸交互

### Phase 7: 测试和修复
- [ ] 跨浏览器测试
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] 设备测试
  - [ ] 桌面端 (1920px, 1728px)
  - [ ] 平板端 (1024px, iPad)
  - [ ] 手机端 (375px, iPhone)
- [ ] Bug修复
  - [ ] 修复发现的布局问题
  - [ ] 修复响应式断点问题
  - [ ] 修复图片显示问题

### Phase 8: 最终优化
- [ ] 性能优化
  - [ ] 图片压缩和优化
  - [ ] CSS优化
  - [ ] 代码清理
- [ ] 文档更新
  - [ ] 更新README
  - [ ] 更新组件文档
- [ ] 最终检查
  - [ ] 设计还原度检查
  - [ ] 响应式完整性检查
  - [ ] 代码质量检查

---

## 🎨 设计Token映射

### 字体大小
- **H1**: 96px (桌面) → 64px (平板) → 24px (手机)
- **H2**: 64px (桌面) → 28px (平板) → 20px (手机)
- **H3**: 28px (桌面) → 20px (平板) → 不适用
- **Sub H1.1**: 80px (桌面) → 44.46px (平板) → 24.59px (手机)
- **Body 3a**: 32px (桌面) → 不适用 (平板) → 不适用 (手机)
- **Body 9**: 28px (桌面) → 15.56px (平板) → 8.61px (手机)

### 颜色
- **背景色**: #23262B (Bg Black 1)
- **文字色**: #F4F6F6 (Text 1)
- **白色文字**: #FFFFFF
- **灰色文字**: #9C9C9C (text 2)

### 间距
- **桌面端Padding**: 164px / 165px
- **平板端Padding**: 96px / 97px
- **手机端Padding**: 42px / 35px

---

## 📊 响应式断点定义

```css
/* 手机端 */
@media (max-width: 767px) {
  /* 375px - 767px */
}

/* 平板端 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 768px - 1023px */
}

/* 桌面端 */
@media (min-width: 1024px) {
  /* 1024px+ */
}

/* 大桌面端 */
@media (min-width: 1728px) {
  /* 1728px+ */
}
```

---

## ⚠️ 注意事项

1. **导航栏**: 导航栏组件已存在，但需要确保About Us页面的链接正确设置
2. **联系表单**: 联系表单组件已存在，但需要确保在About Us页面上正确显示
3. **图片优化**: 所有图片需要针对不同设备优化，确保加载速度
4. **字体加载**: 确保使用正确的字体（DM Sans, Inter, Montserrat）
5. **响应式测试**: 需要在真实设备上测试，而不只是浏览器开发者工具
6. **设计还原**: 严格按照Figma设计还原，特别是间距、字体大小、颜色

---

## 📅 预计时间线

- **Phase 1**: 1-2小时（准备和图片下载）
- **Phase 2**: 1小时（图片资源整理）
- **Phase 3**: 4-6小时（基础组件开发）
- **Phase 4**: 3-4小时（高级组件开发）
- **Phase 5**: 2-3小时（页面集成）
- **Phase 6**: 3-4小时（响应式优化）
- **Phase 7**: 2-3小时（测试和修复）
- **Phase 8**: 1-2小时（最终优化）

**总计**: 约17-25小时

---

## ✅ 完成标准

1. ✅ 所有组件在不同设备上正确显示
2. ✅ 设计还原度达到95%以上
3. ✅ 响应式断点正确，无布局错误
4. ✅ 所有图片正确加载和显示
5. ✅ 导航栏链接正确
6. ✅ 联系表单功能正常
7. ✅ 代码质量良好，无重大bug
8. ✅ 性能优化完成

---

## 📝 备注

- 所有组件都应该遵循现有的代码风格和结构
- 使用CSS变量（design-tokens.css）来管理颜色和字体
- 确保所有组件都是可复用的
- 保持代码的可维护性和可扩展性



