# About Us 页面组件详细清单

## 📦 组件详细规格

### 1. Hero Section Component (`about-hero-section`)

#### HTML结构
```html
<section class="about-hero-section">
  <div class="about-hero-background">
    <img src="..." alt="..." class="about-hero-bg-image">
    <div class="about-hero-overlay"></div>
  </div>
  <div class="about-hero-content">
    <div class="about-hero-text-group">
      <h1 class="about-hero-title">Our Story</h1>
      <p class="about-hero-description">XDS designs, engineers, and manufactures bicycles...</p>
    </div>
  </div>
</section>
```

#### CSS类名
- `.about-hero-section` - 主容器
- `.about-hero-background` - 背景容器
- `.about-hero-bg-image` - 背景图片
- `.about-hero-overlay` - 遮罩层
- `.about-hero-content` - 内容容器
- `.about-hero-text-group` - 文字组
- `.about-hero-title` - 标题
- `.about-hero-description` - 描述文字

#### 响应式规格
- **桌面端**: 高度1183px, padding 389px 164px, 标题96px
- **平板端**: 高度891px, padding 235px 96px, 标题64px
- **手机端**: 高度420px, padding 68px 42px, 标题24px

---

### 2. Stat Card Component (`about-stat-card`)

#### HTML结构
```html
<div class="about-stat-card">
  <div class="stat-card-icon">
    <img src="..." alt="..." class="stat-icon-image">
  </div>
  <div class="stat-card-content">
    <div class="stat-card-number">190</div>
    <div class="stat-card-label">Distributors</div>
  </div>
</div>
```

#### CSS类名
- `.about-stat-card` - 卡片容器
- `.stat-card-icon` - 图标容器
- `.stat-icon-image` - 图标图片
- `.stat-card-content` - 内容容器
- `.stat-card-number` - 数字
- `.stat-card-label` - 标签

#### 响应式规格
- **桌面端**: 图标63-75px, 数字80px, 标签28px, gap 35px
- **平板端**: 图标35-38px, 数字44.46px, 标签15.56px, gap 19.45px
- **手机端**: 图标19-31px, 数字24.59px, 标签8.61px, gap 11.06px

#### 6个统计卡片数据
1. **Distributors**: 190
2. **Annual Bike Sales**: 8M
3. **Retail Stores**: 3k+
4. **Employees**: 14k+
5. **Countries**: 50
6. **Global Factories**: 5

---

### 3. Stats Section Component (`about-stats-section`)

#### HTML结构
```html
<section class="about-stats-section">
  <div class="stats-container">
    <div class="stats-row stats-row-1">
      <about-stat-card data-number="190" data-label="Distributors" data-icon="distributors"></about-stat-card>
      <about-stat-card data-number="8M" data-label="Annual Bike Sales" data-icon="bike-sales"></about-stat-card>
      <about-stat-card data-number="3k+" data-label="Retail Stores" data-icon="retail-stores"></about-stat-card>
    </div>
    <div class="stats-row stats-row-2">
      <about-stat-card data-number="14k+" data-label="Employees" data-icon="employees"></about-stat-card>
      <about-stat-card data-number="50" data-label="Countries" data-icon="countries"></about-stat-card>
      <about-stat-card data-number="5" data-label="Global Factories" data-icon="factories"></about-stat-card>
    </div>
  </div>
</section>
```

#### CSS类名
- `.about-stats-section` - 主容器
- `.stats-container` - 容器
- `.stats-row` - 行容器
- `.stats-row-1` - 第一行
- `.stats-row-2` - 第二行

#### 响应式规格
- **桌面端**: 
  - 容器宽度1190px, padding 158px 165px
  - 第一行：3列，gap 301px
  - 第二行：4列，gap 329px
- **平板端**: 
  - 容器宽度661.32px, padding 67px 97px
  - 第一行：3列，gap 167.27px
  - 第二行：4列，gap 182.84px
- **手机端**: 
  - 容器宽度226.71px, padding 0px 35px
  - 3列垂直布局，gap 105.11px (水平), 11.06px (垂直)

---

### 4. Image + Text Block Component (`about-image-text-block`)

#### HTML结构
```html
<section class="about-image-text-block">
  <div class="image-text-container">
    <div class="image-block">
      <img src="..." alt="..." class="block-image">
    </div>
    <div class="text-block">
      <h2 class="block-title">Beyond Quality Control</h2>
      <p class="block-description">At XDS, we've spent three decades...</p>
    </div>
  </div>
</section>
```

#### CSS类名
- `.about-image-text-block` - 主容器
- `.image-text-container` - 容器
- `.image-block` - 图片区块
- `.block-image` - 图片
- `.text-block` - 文字区块
- `.block-title` - 标题
- `.block-description` - 描述

#### 响应式规格
- **桌面端**: 
  - 水平布局（图片左，文字右）
  - 标题80px, 正文32px
  - Padding 158px 165px
  - Gap 14px
- **平板端**: 
  - 水平布局（图片左，文字右）
  - 标题28px (居中), 正文15px
  - Padding 67px 97px
  - Gap 8.3px
- **手机端**: 
  - 垂直布局（图片上，文字下）
  - 标题20px, 正文14px
  - Padding 0px 35px
  - Gap 8.3px

#### 两个区块内容
1. **Beyond Quality Control**: 
   - "At XDS, we've spent three decades refining how bicycles are built..."
2. **Riders and Retailers First**: 
   - "We believe the future of cycling will be shaped by those who build smarter..."

---

### 5. Contact Form Component (已存在，需要适配)

#### 当前状态
- ✅ HTML结构已存在 (`components/contact-form.html`)
- ✅ CSS样式已存在 (`css/components/contact-form.css`)
- ⚠️ 需要添加响应式样式

#### 需要调整的响应式规格
- **桌面端**: 
  - 高度679px
  - Logo在左侧
  - 表单宽度514.3px
- **平板端**: 
  - 高度481px
  - Logo居中
  - 表单宽度830px
- **手机端**: 
  - 高度456px
  - 无Logo
  - 表单宽度296px

---

### 6. Navigation Bar Component (已存在，需要更新链接)

#### 当前状态
- ✅ HTML结构已存在 (`components/navbar.html`)
- ✅ CSS样式已存在 (`css/components/navbar.css`)
- ⚠️ 需要添加About Us页面链接

#### 需要更新的链接
- About Us链接应该指向 `about.html`
- 确保所有页面都有正确的导航链接

---

## 🎯 组件开发优先级

### 优先级1（核心组件）
1. ✅ Hero Section - 页面顶部，用户第一眼看到
2. ✅ Stats Section - 核心内容，展示公司数据
3. ✅ Stat Card - Stats Section的子组件

### 优先级2（内容组件）
4. ✅ Image + Text Block - 展示公司理念
5. ✅ Contact Form - 页面底部，已存在但需要适配

### 优先级3（导航和集成）
6. ✅ Navigation Bar - 已存在，需要更新链接
7. ✅ About.html页面 - 整合所有组件

---

## 📐 布局规格总结

### 页面结构
```
┌─────────────────────────────┐
│ Navigation Bar (已存在)     │
├─────────────────────────────┤
│ Hero Section                │
├─────────────────────────────┤
│ Stats Section               │
│  ┌───┐ ┌───┐ ┌───┐         │
│  │ 1 │ │ 2 │ │ 3 │         │
│  └───┘ └───┘ └───┘         │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐   │
│  │ 4 │ │ 5 │ │ 6 │ │ 7 │   │
│  └───┘ └───┘ └───┘ └───┘   │
├─────────────────────────────┤
│ Image + Text Block 1        │
├─────────────────────────────┤
│ Image + Text Block 2        │
├─────────────────────────────┤
│ Contact Form (已存在)       │
└─────────────────────────────┘
```

---

## 🔧 技术实现要点

### CSS Grid布局
- Stats Section使用CSS Grid实现响应式布局
- 桌面端：2行3列网格
- 平板端：2行3列网格（间距调整）
- 手机端：3列垂直布局

### Flexbox布局
- Image + Text Block使用Flexbox实现响应式布局
- 桌面/平板：水平布局（flex-direction: row）
- 手机：垂直布局（flex-direction: column）

### 图片响应式
- 使用`<picture>`或CSS背景图片实现响应式图片
- 不同设备加载不同尺寸的图片
- 使用`srcset`属性优化图片加载

### 字体响应式
- 使用`clamp()`函数实现流畅的字体大小调整
- 或使用媒体查询设置固定字体大小

---

## 📝 代码规范

### 命名规范
- 组件名使用kebab-case：`about-hero-section`
- CSS类名使用kebab-case：`.about-hero-title`
- 文件使用kebab-case：`about-hero-section.html`

### 文件结构
```
components/
  about-hero-section.html
  about-stat-card.html
  about-stats-section.html
  about-image-text-block.html

css/components/
  about-hero-section.css
  about-stat-card.css
  about-stats-section.css
  about-image-text-block.css

assets/images/about/
  hero/
    hero-bg-desktop.png
    hero-bg-tablet.png
    hero-bg-mobile.png
  stats/
    icon-distributors.svg
    icon-bike-sales.svg
    icon-retail-stores.svg
    icon-employees.svg
    icon-countries.svg
    icon-factories.svg
  blocks/
    image-1-desktop.png
    image-1-tablet.png
    image-1-mobile.png
    image-2-desktop.png
    image-2-tablet.png
    image-2-mobile.png
```

---

## ✅ 检查清单

### 开发前检查
- [ ] 所有Figma设计已分析
- [ ] 所有图片资源已下载
- [ ] 文件结构已创建
- [ ] 设计Token已确认

### 开发中检查
- [ ] 每个组件都有HTML结构
- [ ] 每个组件都有CSS样式
- [ ] 每个组件都有响应式样式
- [ ] 图片路径正确
- [ ] 字体使用正确

### 开发后检查
- [ ] 所有组件在不同设备上正确显示
- [ ] 所有链接正确
- [ ] 所有图片正确加载
- [ ] 代码无错误
- [ ] 设计还原度达标



