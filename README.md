# XDS Website - Responsive Design

基于 Figma 设计稿创建的响应式网站项目。

## 项目结构

```
xds new/
├── assets/
│   ├── images/          # 所有图片资源
│   │   ├── bg-pic-1.png
│   │   ├── pic-1.png
│   │   ├── DSCF2312-top.png
│   │   ├── bicycle-section-bg.png
│   │   ├── card-bg-1-6e8f7e.png
│   │   ├── card-bg-2-4023c5.png
│   │   ├── card-bg-3-59941b.png
│   │   ├── xds-logo-white-dc3433.svg
│   │   ├── xds-logo-white-header.svg
│   │   └── arrow-icon.svg
│   └── icons/            # 图标资源
├── components/           # 组件文件
│   ├── navbar.html      # 导航栏组件
│   ├── button.html      # 按钮组件
│   ├── contact-form.html # 联系表单组件
│   └── stat-card.html   # 统计卡片组件
├── css/
│   ├── design-tokens.css # 设计令牌（颜色、字体、间距等）
│   └── components.css    # 组件样式
├── index.html           # 主页面
└── README.md           # 项目说明

```

## 设计令牌 (Design Tokens)

所有设计令牌都定义在 `css/design-tokens.css` 中，包括：

- **颜色**: 背景色、文字色、品牌色等
- **字体**: 字体系列、大小、粗细、行高
- **间距**: 统一的内外边距系统
- **圆角**: 统一的圆角半径
- **阴影**: 文本阴影和框阴影
- **断点**: 响应式设计断点

## 组件说明

### 1. 导航栏 (Navbar)
- 固定在页面顶部
- 包含 Logo、导航菜单和 CTA 按钮
- 响应式设计，移动端自动折叠

### 2. 按钮 (Buttons)
- **主按钮** (btn-primary): 带图标的大按钮
- **次按钮** (btn): 边框样式按钮

### 3. 统计卡片 (Stat Cards)
- 带有背景图片的卡片
- 显示关键统计数据
- 响应式网格布局

### 4. 联系表单 (Contact Form)
- 邮箱输入表单
- 社交媒体图标链接
- 联系信息展示

### 5. Hero 区域
- 全屏英雄区域
- 背景图片
- 标题和副标题

### 6. 内容区域
- 文本内容区块
- 图片展示区块
- 交替布局

## 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: 1024px - 1728px
- **大屏**: > 1728px

## 使用的字体

- **DM Sans**: 主要字体（标题和正文）
- **Inter**: 辅助字体（表单等）
- **Montserrat**: 特殊用途字体

## 使用方法

1. 直接在浏览器中打开 `index.html`
2. 所有样式和资源都是相对路径，确保项目结构完整
3. 组件文件位于 `components/` 文件夹中，可以作为模板使用

## 注意事项

- 所有图片已从 Figma 下载并优化
- SVG 图标已提取并保存
- 响应式设计已实现，适配各种屏幕尺寸
- 设计令牌使用 CSS 变量，便于主题定制

## Figma 设计链接

原始设计稿: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1386&t=EIwvDnloYeoYlllb-4





