# 组件分析文档

从 Figma 设计稿中提取的所有组件列表。

## 提取的组件

### 1. 导航栏组件 (NEW navi bar desktop)
- **组件ID**: `3390:1004`
- **位置**: 页面顶部
- **包含元素**:
  - XDS Logo
  - 导航菜单项: Bicycles, Our Technology, About Us, Contact
  - "Become a Dealer" 按钮
- **样式特性**:
  - 固定定位
  - 半透明黑色背景
  - 模糊效果 (backdrop-filter)
  - 响应式布局

### 2. 按钮组件

#### View bicycles button
- **组件ID**: `3325:2282`
- **类型**: 主按钮 (Primary)
- **样式**: 
  - 白色边框 (3px)
  - 圆角 (10px)
  - 包含文本和箭头图标
  - 悬停效果

#### Become a dealer button
- **组件ID**: `3390:999`
- **类型**: 次按钮 (Secondary)
- **样式**:
  - 细边框 (1px)
  - 圆角 (5px)
  - 简洁样式

### 3. 表单组件

#### Email form
- **组件ID**: `3390:908`
- **类型**: 邮箱输入表单
- **包含元素**:
  - 输入框
  - 占位符文本
  - 提交按钮（带图标）
- **样式**:
  - 白色背景
  - 圆角 (4px)
  - 内联布局

### 4. 卡片组件

#### Frame 76 (Contact Card)
- **组件ID**: `3390:977`
- **类型**: 联系卡片
- **包含元素**:
  - Logo
  - 标题和描述
  - 邮箱表单
  - 社交媒体图标
  - 联系信息
- **样式**:
  - 深色背景 (#23262B)
  - 两列布局

#### Stat Cards (统计卡片)
- **类型**: 信息卡片
- **数量**: 3个
- **内容**:
  1. Founded 1995 in Shenzhen
  2. 450+ engineers, global production
  3. Powering riders across New York, Berlin, and Tokyo
- **样式**:
  - 背景图片覆盖
  - 半透明遮罩
  - 底部文本对齐
  - 圆角 (10px)

### 5. 文本样式组件

#### H1 (标题1)
- 字体: DM Sans
- 大小: 96px
- 粗细: 700 (Bold)
- 行高: 1em

#### Sub H1.1 (副标题1)
- 字体: DM Sans
- 大小: 80px
- 粗细: 700 (Bold)
- 行高: 1.302em

#### Sub H2 / Sub H2.1 (副标题2)
- 字体: DM Sans
- 大小: 40px
- 粗细: 400 (Regular) / 700 (Bold)
- 行高: 1.302em

#### Body 3 / Body 9 (正文)
- 字体: DM Sans
- 大小: 32px / 28px
- 粗细: 300 (Light)
- 行高: 1.25em / 1.428em

### 6. 布局组件

#### Hero Section
- 全屏英雄区域
- 背景图片
- 居中对齐的文本内容

#### Content Section
- 文本内容区块
- 图片展示区块
- 交替布局设计

#### Bicycle Section
- 渐变背景叠加
- 背景图片
- 标题组和 CTA 按钮

## 图片资源

### 背景图片
1. `bg-pic-1.png` - 英雄区域背景
2. `bicycle-section-bg.png` - 自行车区域背景

### 内容图片
1. `pic-1.png` - 第一张内容图片
2. `DSCF2312-top.png` - 第二张内容图片

### 卡片背景
1. `card-bg-1-6e8f7e.png` - 统计卡片1背景
2. `card-bg-2-4023c5.png` - 统计卡片2背景
3. `card-bg-3-59941b.png` - 统计卡片3背景

### Logo 和图标
1. `xds-logo-white-header.svg` - 导航栏 Logo
2. `xds-logo-white-dc3433.svg` - 联系卡片 Logo
3. `arrow-icon.svg` - 箭头图标

## 颜色系统

- **Bg Black 1**: #23262B (主背景)
- **Bg White 1**: #FFFFFF (白色)
- **Text 1**: #F4F6F6 (主文字)
- **Text 2**: #9C9C9C (次要文字)
- **Header Shade 1**: #000000 (导航栏背景)
- **Base Neutral 900**: #131717 (深色文字)

## 响应式设计

所有组件都实现了响应式设计：
- 桌面端 (>1728px): 完整布局
- 平板 (1024px-1728px): 适配布局
- 移动端 (<768px): 垂直堆叠布局

## 特殊效果

- **文本阴影**: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`
- **背景模糊**: `blur(4px)`
- **渐变叠加**: 多个区块使用渐变遮罩





