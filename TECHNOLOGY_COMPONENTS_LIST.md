# Our Technology 页面 - 组件提取清单

## 📦 组件清单

### 1. Hero区域组件（Hero Section）
**组件名称**: `technology-hero-section`

**包含元素**:
- 背景图片容器
- 遮罩层（overlay）
- 标题文字（"Our Technology"）
- 副标题文字（"Engineered at the Highest Level — Built to Serve You"）

**响应式差异**:
- Desktop: H1 (96px), 左对齐, padding: 481px 164px
- Tablet: H2 (64px), 居中, padding: 291px 479px
- Mobile: H3 (24px), 左对齐, 高度: 322px

---

### 2. 介绍文本组件（Introduction Text）
**组件名称**: `technology-introduction-section`

**包含元素**:
- 文本容器
- 文本内容

**响应式差异**:
- Desktop: Body 3 (32px), padding: 158px 165px
- Tablet: Body 5 (20px), padding: 67px 97px
- Mobile: Body 8 (15px), padding: 0px 35px

---

### 3. 技术卡片组件（Technology Card）
**组件名称**: `technology-card`

**包含元素**:
- 卡片容器
- 图片元素
- 文本容器
  - 标题
  - 描述文本

**组件属性**:
- `variant`: "light" | "dark"（背景色）
  - light: #D9D9D9背景 + #23262B文字
  - dark: #131717背景 + #D9D9D9文字
- `image-position`: "left" | "right"（图片位置）
- `image-id`: 图片ID（用于加载对应图片）

**卡片列表**:
1. **卡片1**: "From Raw Materials to Finished Bikes — All Under Our Roof"
   - Variant: light
   - Image Position: right（Desktop/Tablet）, bottom（Mobile）
   - Image ID: 52fb201255bb173ba490e737b147a4c8_raw-0002

2. **卡片2**: "Smarter Production = Fewer Problems on the Floor"
   - Variant: dark
   - Image Position: **left**（Desktop/Tablet）, bottom（Mobile）
   - Image ID: 52fb201255bb173ba490e737b147a4c8_raw-0003

3. **卡片3**: "Built for the Pros. Delivered to You."
   - Variant: light
   - Image Position: right（Desktop/Tablet）, bottom（Mobile）
   - Image ID: 52fb201255bb173ba490e737b147a4c8_raw-0001

**响应式差异**:
- Desktop: 横向布局, gap: 20px, 标题48px, 文本24px
- Tablet: 横向布局, gap: 10px, 标题28px居中, 文本15px
- Mobile: 纵向布局, gap: 10px, 标题20px, 文本14px

---

### 4. 联系表单组件（Contact Form）
**组件名称**: `contact-form`（已存在，需要更新）

**包含元素**:
- Logo（Desktop only）
- 标题（"Be the first to know about product launches"）
- 描述文本
- 邮箱输入表单
- 提交按钮（带箭头图标）
- 社交图标（Facebook, Instagram, YouTube, TikTok）
- 分隔线
- 联系信息（邮箱 + 电话）

**响应式差异**:
- Desktop: 显示Logo, 标题40px, 表单57px高, 联系信息横向
- Tablet: 不显示Logo, 标题28px居中, 表单57px高, 联系信息横向
- Mobile: 不显示Logo, 标题20px, 表单32px高, 联系信息纵向

---

## 🖼️ 图片资源清单

### Hero背景图片
1. Desktop: `technology-hero-bg-desktop.png`
2. Tablet: `technology-hero-bg-tablet.png`
3. Mobile: `technology-hero-bg-mobile.png`

### 卡片图片（每个卡片3个尺寸）
1. **卡片1图片**:
   - Desktop: `technology-card-1-desktop-d03932.png`
   - Tablet: `technology-card-1-tablet-d03932.png`
   - Mobile: `technology-card-1-mobile-d03932.png`

2. **卡片2图片**:
   - Desktop: `technology-card-2-desktop-5c9eb5.png`
   - Tablet: `technology-card-2-tablet-5c9eb5.png`
   - Mobile: `technology-card-2-mobile-5c9eb5.png`

3. **卡片3图片**:
   - Desktop: `technology-card-3-desktop-179fdb.png`
   - Tablet: `technology-card-3-tablet-179fdb.png`
   - Mobile: `technology-card-3-mobile-179fdb.png`

**总计**: 12张图片（3个Hero背景 + 9个卡片图片）

---

## 📁 文件结构

```
project/
├── components/
│   ├── technology-hero-section.html
│   ├── technology-introduction-section.html
│   ├── technology-card.html
│   └── contact-form.html (已存在，需要更新)
├── css/
│   └── components/
│       ├── technology-hero-section.css
│       ├── technology-introduction-section.css
│       ├── technology-card.css
│       └── contact-form.css (已存在，需要更新)
├── assets/
│   └── images/
│       └── technology/
│           ├── hero/
│           │   ├── hero-bg-desktop.png
│           │   ├── hero-bg-tablet.png
│           │   └── hero-bg-mobile.png
│           └── cards/
│               ├── card-1-desktop-d03932.png
│               ├── card-1-tablet-d03932.png
│               ├── card-1-mobile-d03932.png
│               ├── card-2-desktop-5c9eb5.png
│               ├── card-2-tablet-5c9eb5.png
│               ├── card-2-mobile-5c9eb5.png
│               ├── card-3-desktop-179fdb.png
│               ├── card-3-tablet-179fdb.png
│               └── card-3-mobile-179fdb.png
└── technology.html (主页面)
```

---

## 🎯 关键设计要点

### 布局差异
1. **卡片布局**: Desktop/Tablet横向，Mobile纵向
2. **卡片顺序**: 卡片2的图片在左，其他卡片图片在右（Desktop/Tablet）
3. **标题对齐**: Tablet所有卡片标题居中，其他左对齐

### 颜色差异
1. **卡片1和3**: 浅色背景（#D9D9D9）+ 深色文字（#23262B）
2. **卡片2**: 深色背景（#131717）+ 浅色文字（#D9D9D9）

### 字体差异
- Desktop: 最大字体（48px标题，24px文本）
- Tablet: 中等字体（28px标题居中，15px文本）
- Mobile: 最小字体（20px标题，14px文本）

### 间距差异
- Desktop: 最大padding和gap
- Tablet: 中等padding和gap
- Mobile: 最小padding和gap

---

## ✅ 下一步行动

1. **下载所有图片**（12张）
2. **创建组件HTML文件**（3个新组件）
3. **创建组件CSS文件**（3个新CSS文件）
4. **更新联系表单组件**（响应式样式）
5. **创建主页面**（technology.html）
6. **更新导航栏链接**

---

**文档版本**: 1.0
**创建日期**: 2024



