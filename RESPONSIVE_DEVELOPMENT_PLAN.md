# XDS Bicycles 响应式开发项目清单

## 📋 项目概述

本项目需要开发一个产品展示页面，包含主页面和产品筛选页面。页面元素相同，但需要针对桌面端（1728px）、平板端（1024px）和手机端（375px）进行响应式适配。

## 🎯 设计文件分析

### 设计文件列表
1. **桌面端主页面**: `3390-1374` - Desktop 1
2. **桌面端跳转页面**: `3390-1776` - Frame 247 Component Set (筛选后)
3. **平板端主页面**: `3390-1562` - Tablet 1
4. **平板端跳转页面**: `3390-1891` - Frame 251 Component Set (筛选后)
5. **手机端主页面**: `3390-1146` - Mobile
6. **手机端跳转页面**: `3390-2006` - Frame 263 Component Set (筛选后)

## 📦 组件清单

### 1. 导航栏组件 (Navbar) ✅ 已存在
- **状态**: 已完成，需要添加页面链接
- **文件**: `components/navbar.html`, `css/components/navbar.css`
- **待办**: 更新导航链接指向正确的页面（主页/产品页）

### 2. Hero区域组件 (Hero Section)
- **组件名称**: Hero Section / Banner Section
- **描述**: 页面顶部背景图和标题区域
- **包含元素**:
  - 背景图片（带遮罩层）
  - 标题文本：`Explore Our Bicycles`
  - 副标题文本：`World-class bicycles, made for everyone.`
- **响应式差异**:
  - **Desktop**: 
    - Padding: 504px 174px
    - 标题字体: H1 (96px)
    - 副标题字体: Sub H2.1 (40px)
    - 背景图: 3674x1163px
  - **Tablet**: 
    - Padding: 270px 106px
    - 标题字体: H2 (64px)
    - 副标题字体: Sub H9 (24px)
    - 背景图: 2519x726px
  - **Mobile**: 
    - Padding: 147px 52px
    - 标题字体: H3 (24px)
    - 副标题字体: Body 7 (14px)
    - 背景图: 899x373px

### 3. 产品筛选标签组件 (Filter Tabs)
- **组件名称**: Filter Tabs / Category Tabs
- **描述**: 产品分类筛选按钮
- **包含元素**:
  - Road（公路车）
  - E-Bike / E-commuter（电动车）
  - Gravel（砾石车）
- **响应式差异**:
  - **Desktop**: 
    - 按钮尺寸: 300x68px
    - 字体: style_5CTLBF (32px)
    - Padding: 12px 80px
    - Gap: 23px
    - Border radius: 8px
    - Border width: 2px
  - **Tablet**: 
    - 按钮尺寸: 200x50px
    - 字体: Sub H9 (24px)
    - Padding: 12px 80px
    - Gap: 76px
    - Border radius: 8px
    - Border width: 2px
  - **Mobile**: 
    - 按钮尺寸: 102x34px
    - 字体: Body 7 (14px)
    - Padding: 13.12px 35.31px
    - Gap: 20.28px
    - Border radius: 5px
    - Border width: 0.5px
- **状态变化**:
  - 默认状态: 白色边框，白色文字
  - 激活状态: 白色填充，黑色文字

### 4. 产品卡片组件 (Product Card)
- **组件名称**: Product Card / Bicycle Card
- **描述**: 单个产品展示卡片
- **包含元素**:
  - 产品图片
  - 产品标题（如：AD9, RT9, RS9, RS7, RS5）
  - 产品描述文本
- **响应式差异**:
  - **Desktop**: 
    - 卡片尺寸: 横向布局
    - Padding: 60px 85px 60px 130px (第一张) / 60px 130px (其他)
    - Border radius: 30px
    - 标题字体: H2 (64px)
    - 描述字体: Body 5 (20px)
    - 图片在右侧，文字在左侧
    - Gap: 79px (图片和文字之间)
  - **Tablet**: 
    - 卡片尺寸: 纵向布局
    - Padding: 34.65px 49.08px
    - Border radius: 5.77px
    - 标题字体: Sub H8 (36px)
    - 描述字体: Body 6 (14px)
    - 图片在上方，文字在下方
    - Gap: 45.62px (图片和文字之间)
    - 卡片高度: 330.3px (第一张) / 399.36px (其他)
  - **Mobile**: 
    - 卡片尺寸: 纵向堆叠
    - Padding: 25px 20px
    - Border radius: 10px
    - 标题字体: H3 (24px)
    - 描述字体: style_EM6CC8 (14px, Inter字体)
    - 图片在上方，文字在下方，居中对齐
    - Gap: 19px (图片和文字之间)
    - 卡片高度: 385px
- **产品数据**:
  - AD9: 图片尺寸 Desktop(926x560), Tablet(327.64h), Mobile(281x170)
  - RT9: 图片尺寸 Desktop(880x554), Tablet(324.38h), Mobile(同AD9)
  - RS9: 图片尺寸 Desktop(845x534.6), Tablet(314.83h), Mobile(同AD9)
  - RS7: 图片尺寸 Tablet(554.03x344), Mobile(同AD9)
  - RS5: 图片尺寸 Tablet(333.61h), Mobile(同AD9)

### 5. 联系表单组件 (Contact Form) ✅ 已存在
- **状态**: 已完成
- **文件**: `components/contact-form.html`, `css/components/contact-form.css`
- **待办**: 确认响应式样式是否需要调整

### 6. Footer组件 (Footer) ✅ 已存在
- **状态**: 已包含在联系表单组件中
- **包含元素**:
  - 社交媒体图标
  - 分割线
  - 联系信息（邮箱、电话）

## 🖼️ 图片资源清单

### 需要下载的图片

#### Hero背景图
1. **Desktop Hero背景** (node: Frame 248, Desktop)
   - ImageRef: `d8860f8dd2c05520aefd1e0391c47601107f73a5`
   - 尺寸: 3674x1163px
   - 文件名: `hero-bg-desktop.png`
   - 需要裁剪: 否

2. **Tablet Hero背景** (node: Frame 86, Tablet)
   - ImageRef: `d8860f8dd2c05520aefd1e0391c47601107f73a5`
   - 尺寸: 2519x726px
   - 文件名: `hero-bg-tablet.png`
   - 需要裁剪: 否

3. **Mobile Hero背景** (node: Frame 86, Mobile)
   - ImageRef: `828f958397723bbb1c50bd23bcc9e2bd5d79953f`
   - 尺寸: 899x373px
   - 文件名: `hero-bg-mobile.png`
   - 需要裁剪: 否

#### 产品图片
4. **AD9产品图** (Desktop)
   - ImageRef: `c6907cae376dda6c9f068b6a9209ea56a59af163`
   - 尺寸: 926x560px
   - 文件名: `product-ad9-desktop.png`
   - 需要裁剪: 是
   - Crop Transform: `[[0.914, 0, 0.049], [0, 0.829, 0.137]]`
   - Suffix: `4b2870`

5. **AD9产品图** (Tablet/Mobile)
   - ImageRef: `c6907cae376dda6c9f068b6a9209ea56a59af163`
   - 尺寸: Tablet(327.64h), Mobile(281x170px)
   - 文件名: `product-ad9-tablet.png`, `product-ad9-mobile.png`
   - 需要裁剪: 是（同上）

6. **RT9产品图** (Desktop)
   - ImageRef: `90f6bbe60131d66db57992597ce363fb37939d2b`
   - 尺寸: 880x554px
   - 文件名: `product-rt9-desktop.png`
   - 需要裁剪: 是
   - Crop Transform: `[[0.902, 0, 0.042], [0, 0.851, 0.090]]`
   - Suffix: `2a42f3`

7. **RT9产品图** (Tablet)
   - ImageRef: `90f6bbe60131d66db57992597ce363fb37939d2b`
   - 尺寸: 324.38h
   - 文件名: `product-rt9-tablet.png`
   - 需要裁剪: 是
   - Crop Transform: `[[0.999, 0, 0.0001], [0, 0.851, 0.090]]`
   - Suffix: `40fec9`

8. **RS9产品图** (Desktop)
   - ImageRef: `85cf2c81c92c15d7cd15c9a3504d4cf69a231f0c`
   - 尺寸: 845x534.6px
   - 文件名: `product-rs9-desktop.png`
   - 需要裁剪: 是
   - Crop Transform: `[[0.876, 0, 0.049], [0, 0.831, 0.169]]`
   - Suffix: `447b73`

9. **RS9产品图** (Tablet)
   - ImageRef: `85cf2c81c92c15d7cd15c9a3504d4cf69a231f0c`
   - 尺寸: 314.83h
   - 文件名: `product-rs9-tablet.png`
   - 需要裁剪: 是
   - Crop Transform: `[[1, 0, 0], [0, 0.831, 0.169]]`
   - Suffix: `365bfa`

10. **RS7产品图** (Tablet)
    - ImageRef: `173ff5b00a2d8b7e9ed2e9a3d510635ac283167a`
    - 尺寸: 554.03x344px
    - 文件名: `product-rs7-tablet.png`
    - 需要裁剪: 是
    - Crop Transform: `[[1, 0, 0], [0, 0.621, 0.237]]`
    - Suffix: `56d3fd`

11. **RS5产品图** (Tablet)
    - ImageRef: `173ff5b00a2d8b7e9ed2e9a3d510635ac283167a`
    - 尺寸: 333.61h
    - 文件名: `product-rs5-tablet.png`
    - 需要裁剪: 是（同上）

## 📐 响应式设计差异分析

### 布局差异

#### Desktop (1728px)
- **容器宽度**: 1728px
- **内边距**: 左右130px（筛选区域）
- **产品卡片布局**: 单列，每个卡片横向（图片右，文字左）
- **卡片间距**: 30px垂直间距
- **筛选标签**: 横向排列，间距23px，每个300px宽

#### Tablet (1024px)
- **容器宽度**: 1024px
- **内边距**: 左右33px（筛选区域）
- **产品卡片布局**: 单列，每个卡片纵向（图片上，文字下）
- **卡片间距**: 17px垂直间距
- **筛选标签**: 横向排列，间距76px，每个200px宽，居中对齐

#### Mobile (375px)
- **容器宽度**: 375px
- **内边距**: 左右10px（筛选区域）
- **产品卡片布局**: 单列，每个卡片纵向（图片上，文字下，居中对齐）
- **卡片间距**: 10px垂直间距
- **筛选标签**: 横向排列，间距20.28px，每个102px宽

### 字体差异

| 元素 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Hero标题 | H1 (96px) | H2 (64px) | H3 (24px) |
| Hero副标题 | Sub H2.1 (40px) | Sub H9 (24px) | Body 7 (14px) |
| 筛选标签 | 32px | 24px | 14px |
| 产品标题 | H2 (64px) | Sub H8 (36px) | H3 (24px) |
| 产品描述 | Body 5 (20px) | Body 6 (14px) | 14px (Inter) |

### 间距差异

| 元素 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Hero Padding | 504px 174px | 270px 106px | 147px 52px |
| 筛选区域Padding | 64px 34px | 59px 33px | 30px 10px |
| 筛选标签Gap | 23px | 76px | 20.28px |
| 产品卡片Gap | 30px | 17px | 10px |
| 卡片内Padding | 60px 130px | 34.65px 49.08px | 25px 20px |

## 🚀 开发步骤规划

### 阶段1: 准备工作
**目标**: 完成所有准备工作，确保开发环境就绪

1. **下载所有图片资源**
   - [ ] 下载Hero背景图（Desktop/Tablet/Mobile）
   - [ ] 下载产品图片（AD9, RT9, RS9, RS7, RS5）
   - [ ] 保存到 `assets/images/products/` 目录
   - [ ] 验证图片尺寸和裁剪是否正确

2. **更新设计令牌**
   - [ ] 检查并更新 `css/design-tokens.css`
   - [ ] 添加产品卡片相关的设计令牌
   - [ ] 添加筛选标签相关的设计令牌

3. **创建组件目录结构**
   - [ ] 创建 `components/product-filter.html`
   - [ ] 创建 `components/product-card.html`
   - [ ] 创建 `components/hero-section.html`
   - [ ] 创建 `css/components/product-filter.css`
   - [ ] 创建 `css/components/product-card.css`
   - [ ] 创建 `css/components/hero-section.css`
   - [ ] 创建 `js/components/product-filter.js`

### 阶段2: Hero区域开发
**目标**: 完成Hero区域的响应式实现

1. **创建Hero组件HTML**
   - [ ] 创建 `components/hero-section.html`
   - [ ] 包含背景图片元素
   - [ ] 包含标题和副标题文本
   - [ ] 添加语义化HTML结构

2. **开发Hero组件CSS**
   - [ ] 基础样式（Desktop）
   - [ ] Tablet响应式样式（1024px）
   - [ ] Mobile响应式样式（375px）
   - [ ] 背景图片响应式处理
   - [ ] 文字阴影效果
   - [ ] 渐变遮罩层

3. **测试Hero组件**
   - [ ] 在不同屏幕尺寸下测试
   - [ ] 验证图片加载和显示
   - [ ] 验证文字对齐和间距

### 阶段3: 产品筛选标签开发
**目标**: 完成筛选标签的响应式实现和交互功能

1. **创建筛选标签组件HTML**
   - [ ] 创建 `components/product-filter.html`
   - [ ] 包含三个筛选按钮（Road, E-Bike, Gravel）
   - [ ] 添加激活状态的HTML结构

2. **开发筛选标签组件CSS**
   - [ ] 基础样式（Desktop）
   - [ ] 激活状态样式
   - [ ] Tablet响应式样式
   - [ ] Mobile响应式样式
   - [ ] 悬停效果
   - [ ] 过渡动画

3. **开发筛选标签组件JS**
   - [ ] 创建 `js/components/product-filter.js`
   - [ ] 实现标签点击切换功能
   - [ ] 实现产品卡片筛选逻辑
   - [ ] 添加URL参数处理（用于跳转页面）
   - [ ] 添加状态管理

4. **测试筛选标签组件**
   - [ ] 测试点击交互
   - [ ] 测试状态切换
   - [ ] 测试响应式布局

### 阶段4: 产品卡片开发
**目标**: 完成产品卡片的响应式实现

1. **创建产品卡片组件HTML**
   - [ ] 创建 `components/product-card.html`
   - [ ] 包含产品图片
   - [ ] 包含产品标题
   - [ ] 包含产品描述
   - [ ] 支持可复用的卡片结构

2. **开发产品卡片组件CSS**
   - [ ] 基础样式（Desktop横向布局）
   - [ ] Tablet响应式样式（纵向布局）
   - [ ] Mobile响应式样式（纵向居中布局）
   - [ ] 卡片背景色和圆角
   - [ ] 图片响应式处理
   - [ ] 文字对齐和间距

3. **准备产品数据**
   - [ ] 创建产品数据JSON文件
   - [ ] 包含所有产品信息（AD9, RT9, RS9, RS7, RS5）
   - [ ] 包含分类信息

4. **测试产品卡片组件**
   - [ ] 测试不同产品数据
   - [ ] 测试响应式布局
   - [ ] 测试图片加载

### 阶段5: 页面集成
**目标**: 将所有组件集成到页面中

1. **创建主页面**
   - [ ] 创建 `bicycles.html` 或更新 `index.html`
   - [ ] 集成Hero组件
   - [ ] 集成筛选标签组件
   - [ ] 集成产品卡片组件（显示所有产品）
   - [ ] 集成Footer组件

2. **创建产品筛选页面**
   - [ ] 创建 `bicycles-filtered.html` 或使用路由
   - [ ] 根据URL参数显示筛选后的产品
   - [ ] 更新筛选标签的激活状态

3. **更新导航栏链接**
   - [ ] 更新 `components/navbar.html` 中的链接
   - [ ] 添加产品页面的链接
   - [ ] 测试导航功能

### 阶段6: 响应式优化
**目标**: 确保所有响应式断点正常工作

1. **断点测试**
   - [ ] Desktop (1728px) 完整测试
   - [ ] Desktop过渡 (1025px-1727px) 测试
   - [ ] Tablet (1024px) 完整测试
   - [ ] Tablet过渡 (768px-1023px) 测试
   - [ ] Mobile (375px) 完整测试
   - [ ] Mobile过渡 (<768px) 测试

2. **视觉还原检查**
   - [ ] 对比Figma设计稿
   - [ ] 检查字体大小和行高
   - [ ] 检查间距和内边距
   - [ ] 检查颜色和透明度
   - [ ] 检查圆角和边框

3. **交互功能测试**
   - [ ] 筛选标签切换
   - [ ] 产品卡片显示/隐藏
   - [ ] 页面跳转功能
   - [ ] 导航栏功能

### 阶段7: 性能优化和Bug修复
**目标**: 优化性能和修复所有问题

1. **性能优化**
   - [ ] 图片懒加载
   - [ ] CSS优化
   - [ ] JavaScript优化
   - [ ] 文件大小优化

2. **Bug修复**
   - [ ] 修复所有响应式问题
   - [ ] 修复交互问题
   - [ ] 修复浏览器兼容性问题

3. **最终测试**
   - [ ] 完整功能测试
   - [ ] 跨浏览器测试
   - [ ] 跨设备测试
   - [ ] 性能测试

## 📝 技术规范

### HTML结构规范
- 使用语义化HTML5标签
- 添加适当的ARIA属性
- 确保可访问性

### CSS规范
- 使用CSS变量（设计令牌）
- 移动端优先的响应式设计
- 使用Flexbox/Grid布局
- 避免硬编码数值

### JavaScript规范
- 使用ES6+语法
- 模块化代码
- 添加错误处理
- 确保向后兼容

### 文件命名规范
- 组件文件：`kebab-case.html`
- CSS文件：`kebab-case.css`
- JavaScript文件：`kebab-case.js`
- 图片文件：`component-name-size.png`

## 🎨 设计还原要点

### 颜色
- 背景色: `#23262B` (Bg Black 1)
- 卡片背景: `rgba(22, 22, 22, 0.5)` (card 6)
- 文字颜色: `#F4F6F6` (Text 1)
- 边框颜色: `#F4F6F6` (Text 1)

### 字体
- 主字体: DM Sans
- 副标题字体: Inter
- 输入框字体: Montserrat

### 效果
- 文字阴影: `0px 4px 4px rgba(0, 0, 0, 0.25)`
- 背景模糊: `blur(4px)`
- 渐变遮罩: `linear-gradient(180deg, rgba(61, 73, 73, 0) 0%, rgba(15, 15, 15, 1) 100%)`

## ✅ 完成标准

1. **功能完整性**
   - [ ] 所有组件正常工作
   - [ ] 所有交互功能正常
   - [ ] 页面跳转正常

2. **响应式完整性**
   - [ ] Desktop设计还原度 >95%
   - [ ] Tablet设计还原度 >95%
   - [ ] Mobile设计还原度 >95%

3. **代码质量**
   - [ ] 代码结构清晰
   - [ ] 注释完整
   - [ ] 无冗余代码

4. **性能标准**
   - [ ] 页面加载时间 <3秒
   - [ ] 图片优化完成
   - [ ] 无控制台错误

## 📌 注意事项

1. **导航栏更新**: 需要在导航栏中添加产品页面的链接，确保可以从主页跳转到产品页面
2. **图片优化**: 所有图片需要进行WebP格式转换和压缩
3. **状态管理**: 筛选标签的状态需要在页面跳转时保持
4. **URL处理**: 产品筛选页面需要通过URL参数来显示不同的筛选结果
5. **浏览器兼容**: 确保在主流浏览器中正常工作（Chrome, Firefox, Safari, Edge）



