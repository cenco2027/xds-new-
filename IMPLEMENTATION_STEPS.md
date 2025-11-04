# 实施步骤 - 快速参考

## 🎯 总体目标
完成产品展示页面的响应式开发，包括主页面和筛选页面。

## 📋 快速任务清单

### ✅ 阶段1: 准备 (预计时间: 1-2小时)

#### 1.1 下载图片资源
```
任务: 从Figma下载所有需要的图片
- Hero背景图 (Desktop/Tablet/Mobile)
- 产品图片 (AD9, RT9, RS9, RS7, RS5)
- 保存位置: assets/images/products/
```

#### 1.2 更新设计令牌
```
文件: css/design-tokens.css
添加:
- 产品卡片相关变量
- 筛选标签相关变量
- 新的间距变量
```

#### 1.3 创建组件文件结构
```
创建文件:
- components/hero-section.html
- components/product-filter.html
- components/product-card.html
- css/components/hero-section.css
- css/components/product-filter.css
- css/components/product-card.css
- js/components/product-filter.js
```

---

### ✅ 阶段2: Hero区域 (预计时间: 2-3小时)

#### 2.1 HTML结构
```html
<section class="hero-section">
  <div class="hero-background-wrapper">
    <img src="..." class="hero-background" alt="...">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">Explore Our Bicycles</h1>
    <p class="hero-subtitle">World-class bicycles, made for everyone.</p>
  </div>
</section>
```

#### 2.2 CSS开发顺序
1. Desktop基础样式 (1728px)
2. Tablet样式 (1024px)
3. Mobile样式 (375px)
4. 过渡断点 (1025px-1727px, 768px-1023px)

#### 2.3 关键CSS属性
- 背景图片: `background-size: cover`
- 遮罩层: `rgba(0,0,0,0.3-0.4)`
- 渐变: `linear-gradient`
- 文字阴影: `text-shadow`

---

### ✅ 阶段3: 筛选标签 (预计时间: 3-4小时)

#### 3.1 HTML结构
```html
<div class="product-filter">
  <div class="filter-container">
    <button class="filter-tab" data-filter="road">Road</button>
    <button class="filter-tab" data-filter="e-bike">E-Bike</button>
    <button class="filter-tab" data-filter="gravel">Gravel</button>
  </div>
</div>
```

#### 3.2 CSS开发顺序
1. Desktop样式 (300x68px)
2. Tablet样式 (200x50px)
3. Mobile样式 (102x34px)
4. 激活状态样式
5. 悬停效果

#### 3.3 JavaScript功能
```javascript
// 基本功能
- 点击切换激活状态
- 筛选产品卡片
- URL参数处理
- 状态持久化
```

---

### ✅ 阶段4: 产品卡片 (预计时间: 4-5小时)

#### 4.1 HTML结构
```html
<div class="product-card" data-category="road">
  <div class="card-content">
    <div class="card-text">
      <h2 class="card-title">AD9</h2>
      <p class="card-description">...</p>
    </div>
    <img src="..." class="card-image" alt="...">
  </div>
</div>
```

#### 4.2 CSS布局差异

**Desktop (横向)**:
```css
.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card-text { /* 左侧，右对齐 */ }
.card-image { /* 右侧 */ }
```

**Tablet/Mobile (纵向)**:
```css
.card-content {
  display: flex;
  flex-direction: column;
}
.card-image { /* 上方 */ }
.card-text { /* 下方 */ }
```

#### 4.3 产品数据JSON
```json
{
  "products": [
    {
      "id": "ad9",
      "title": "AD9",
      "category": "road",
      "description": "...",
      "images": {
        "desktop": "product-ad9-desktop.png",
        "tablet": "product-ad9-tablet.png",
        "mobile": "product-ad9-mobile.png"
      }
    }
  ]
}
```

---

### ✅ 阶段5: 页面集成 (预计时间: 2-3小时)

#### 5.1 创建产品页面
```html
<!-- bicycles.html -->
<nav><!-- 导航栏 --></nav>
<section><!-- Hero区域 --></section>
<section><!-- 筛选标签 --></section>
<section><!-- 产品卡片列表 --></section>
<section><!-- Footer --></section>
```

#### 5.2 更新导航栏
```html
<!-- components/navbar.html -->
<a href="index.html">Home</a>
<a href="bicycles.html">Bicycles</a>
```

#### 5.3 JavaScript集成
- 初始化筛选功能
- 处理URL参数
- 动态加载产品数据

---

### ✅ 阶段6: 响应式测试 (预计时间: 2-3小时)

#### 6.1 断点测试清单
- [ ] 1728px (Desktop Large)
- [ ] 1440px (Desktop)
- [ ] 1024px (Tablet Exact)
- [ ] 768px (Tablet)
- [ ] 375px (Mobile)
- [ ] 320px (Small Mobile)

#### 6.2 功能测试清单
- [ ] Hero区域显示正确
- [ ] 筛选标签点击切换
- [ ] 产品卡片筛选功能
- [ ] 页面跳转功能
- [ ] 导航栏功能

#### 6.3 视觉还原检查
- [ ] 字体大小
- [ ] 间距和内边距
- [ ] 颜色和透明度
- [ ] 圆角和边框
- [ ] 图片尺寸

---

## 🚨 常见问题和解决方案

### 问题1: 图片裁剪不正确
**解决方案**: 
- 检查Figma导出的图片尺寸
- 使用CSS `object-fit: cover` 或 `contain`
- 调整容器尺寸

### 问题2: 响应式断点冲突
**解决方案**:
- 使用移动端优先的媒体查询
- 确保断点顺序正确
- 使用 `min-width` 而不是 `max-width`

### 问题3: 筛选功能不工作
**解决方案**:
- 检查JavaScript选择器
- 确认data属性正确
- 检查事件监听器绑定

### 问题4: 布局在过渡断点处不流畅
**解决方案**:
- 使用 `clamp()` 函数
- 添加过渡动画
- 使用百分比和视口单位

---

## 📝 代码模板

### Hero组件模板
```css
/* Desktop */
.hero-section {
  padding: 504px 174px;
  height: 1183px;
}

.hero-title {
  font-size: 96px;
  line-height: 1em;
}

/* Tablet */
@media (min-width: 1024px) and (max-width: 1024px) {
  .hero-section {
    padding: 270px 106px;
    height: 726px;
  }
  
  .hero-title {
    font-size: 64px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-section {
    padding: 147px 52px;
    height: 373px;
  }
  
  .hero-title {
    font-size: 24px;
  }
}
```

### 筛选标签模板
```css
.filter-tab {
  width: 300px;
  height: 68px;
  padding: 12px 80px;
  border: 2px solid var(--color-text-1);
  border-radius: 8px;
  font-size: 32px;
}

.filter-tab.active {
  background: var(--color-text-1);
  color: var(--color-bg-black-1);
}
```

### 产品卡片模板
```css
/* Desktop - 横向布局 */
.product-card {
  padding: 60px 130px;
  border-radius: 30px;
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 79px;
}

/* Tablet/Mobile - 纵向布局 */
@media (max-width: 1024px) {
  .product-card {
    padding: 34.65px 49.08px;
    border-radius: 5.77px;
  }
  
  .card-content {
    flex-direction: column;
    gap: 45.62px;
  }
}
```

---

## ⏱️ 时间估算

| 阶段 | 任务 | 预计时间 |
|------|------|---------|
| 1 | 准备工作 | 1-2小时 |
| 2 | Hero区域 | 2-3小时 |
| 3 | 筛选标签 | 3-4小时 |
| 4 | 产品卡片 | 4-5小时 |
| 5 | 页面集成 | 2-3小时 |
| 6 | 测试优化 | 2-3小时 |
| **总计** | | **14-20小时** |

---

## 🎯 优先级

### 高优先级 (必须完成)
1. ✅ Hero区域开发
2. ✅ 筛选标签开发
3. ✅ 产品卡片开发
4. ✅ 基本响应式布局

### 中优先级 (重要)
1. ⚠️ 交互功能完善
2. ⚠️ 页面跳转功能
3. ⚠️ 状态管理

### 低优先级 (可选)
1. ⚪ 动画效果优化
2. ⚪ 性能优化
3. ⚪ 高级交互功能

---

## 📌 开发建议

1. **逐步开发**: 先完成一个组件，测试通过后再继续
2. **移动端优先**: 从Mobile开始，逐步扩展到Desktop
3. **频繁测试**: 每完成一个功能就测试一次
4. **代码复用**: 尽量复用已有组件和样式
5. **文档记录**: 记录遇到的问题和解决方案

---

## ✅ 完成标准

### 最小可行产品 (MVP)
- [ ] Hero区域在所有设备显示正确
- [ ] 筛选标签可以点击切换
- [ ] 产品卡片可以筛选显示
- [ ] 基本响应式布局正常

### 完整功能
- [ ] 所有组件完全还原设计
- [ ] 所有交互功能正常
- [ ] 页面跳转功能正常
- [ ] 响应式在所有断点正常

### 优化版本
- [ ] 性能优化完成
- [ ] 动画效果流畅
- [ ] 代码质量优秀
- [ ] 文档完整



