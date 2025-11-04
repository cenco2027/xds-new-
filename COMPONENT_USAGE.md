# 组件使用指南

本文档说明如何在其他页面中使用这些组件。

## 📋 组件列表

1. **导航栏组件** (`components/navbar.html`)
2. **联系表单组件** (`components/contact-form.html`)
3. **提交弹窗组件** (`components/submit-modal.html`)

---

## 🚀 快速开始

### 1. 导航栏组件

#### HTML 引入
```html
<!-- 在 <body> 标签开始后添加 -->
<!-- 可以直接复制 components/navbar.html 的内容 -->
<!-- 或者使用服务器端包含 -->
```

#### CSS 引入
```html
<head>
  <link rel="stylesheet" href="css/design-tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/components/navbar.css">
</head>
```

#### JavaScript 引入
```html
<body>
  <!-- 导航栏 HTML -->
  
  <!-- 在 </body> 前添加 -->
  <script src="js/components/navbar.js"></script>
</body>
```

#### 功能特性
- ✅ 自动平滑滚动到锚点
- ✅ 根据滚动位置高亮当前菜单项
- ✅ 移动端汉堡菜单
- ✅ 响应式设计（桌面/平板/移动）

#### 自定义菜单项
修改 HTML 中的菜单项：
```html
<a href="#your-section" class="navbar-menu-item" data-section="your-section">
  Your Menu Item
</a>
```
确保页面有对应的 `id="your-section"` 元素。

---

### 2. 联系表单组件

#### HTML 引入
```html
<section class="contact-form-section" id="contact">
  <!-- 复制 components/contact-form.html 的内容 -->
</section>
```

#### CSS 引入
```html
<head>
  <link rel="stylesheet" href="css/design-tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/components/contact-form.css">
</head>
```

#### JavaScript 引入
```html
<script src="js/components/submit-modal.js"></script>
<script src="js/components/contact-form.js"></script>
```

#### 功能特性
- ✅ 实时邮箱格式验证
- ✅ 表单提交处理
- ✅ 错误提示显示
- ✅ 自动触发弹窗（桌面端和移动端）
- ✅ 响应式设计

#### 自定义配置
修改联系信息：
```html
<a href="mailto:your@email.com" class="contact-info-link">your@email.com</a>
<a href="tel:your-phone" class="contact-info-link">your-phone</a>
```

#### API 集成
在 `js/components/contact-form.js` 中找到表单提交处理部分，替换模拟代码：
```javascript
// 当前（模拟）：
setTimeout(() => {
  // 模拟提交
}, 500);

// 替换为实际 API 调用：
fetch('/api/submit-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: email })
})
.then(response => response.json())
.then(data => {
  // 成功处理
  if (window.showSubmitModal) {
    window.showSubmitModal();
  }
})
.catch(error => {
  // 错误处理
});
```

---

### 3. 提交弹窗组件

#### HTML 引入
```html
<!-- 在 </body> 前添加 -->
<div class="submit-modal-overlay" id="submit-modal-overlay">
  <!-- 复制 components/submit-modal.html 的内容 -->
</div>
```

#### CSS 引入
```html
<head>
  <link rel="stylesheet" href="css/components/submit-modal.css">
</head>
```

#### JavaScript 引入
```html
<script src="js/components/submit-modal.js"></script>
```

#### 功能特性
- ✅ 自动显示/隐藏
- ✅ 点击遮罩或关闭按钮关闭
- ✅ ESC 键关闭
- ✅ 响应式设计（桌面端和移动端）
- ✅ 仅在桌面端和移动端显示（网页端 >= 1728px 不显示）

#### 手动触发
```javascript
// 显示弹窗
if (window.showSubmitModal) {
  window.showSubmitModal();
}

// 隐藏弹窗
if (window.hideSubmitModal) {
  window.hideSubmitModal();
}
```

---

## 📦 完整示例

### 新页面模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Inter:wght@300;400;500&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="css/design-tokens.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/components/navbar.css">
    <link rel="stylesheet" href="css/components/contact-form.css">
    <link rel="stylesheet" href="css/components/submit-modal.css">
    
    <!-- 你的页面特定样式 -->
    <link rel="stylesheet" href="css/your-page.css">
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar" id="navbar">
        <!-- 复制 components/navbar.html 的内容 -->
    </nav>
    
    <!-- 你的页面内容 -->
    <main>
        <section id="home">
            <!-- 内容 -->
        </section>
        <!-- 更多 section -->
    </main>
    
    <!-- 联系表单（可选） -->
    <section class="contact-form-section" id="contact">
        <!-- 复制 components/contact-form.html 的内容 -->
    </section>
    
    <!-- 提交弹窗 -->
    <div class="submit-modal-overlay" id="submit-modal-overlay">
        <!-- 复制 components/submit-modal.html 的内容 -->
    </div>
    
    <!-- JavaScript -->
    <script src="js/components/navbar.js"></script>
    <script src="js/components/submit-modal.js"></script>
    <script src="js/components/contact-form.js"></script>
    <!-- 你的页面特定脚本 -->
    <script src="js/your-page.js"></script>
</body>
</html>
```

---

## 🎨 样式定制

所有组件使用 CSS 变量（设计令牌），可以在 `css/design-tokens.css` 中修改：

```css
:root {
  --color-bg-black-1: #23262B;
  --color-text-1: #F4F6F6;
  --font-family-primary: 'DM Sans', sans-serif;
  /* ... 更多变量 */
}
```

---

## 🔧 故障排除

### 导航栏不工作
1. 确保 `navbar.js` 已正确引入
2. 检查控制台是否有 JavaScript 错误
3. 确保菜单项有正确的 `data-section` 属性
4. 确保页面有对应的 `id` 属性

### 表单验证不工作
1. 确保 `contact-form.js` 已正确引入
2. 确保表单有 `id="contact-email-form"`
3. 确保输入框有 `id="email-input"`

### 弹窗不显示
1. 确保 `submit-modal.js` 已正确引入
2. 检查屏幕宽度（>= 1728px 时不会显示）
3. 确保调用 `window.showSubmitModal()` 函数

### 样式不正确
1. 确保所有 CSS 文件已引入
2. 检查文件路径是否正确
3. 确保 `design-tokens.css` 在最前面

---

## 📱 响应式断点

- **移动端**: < 768px
- **平板端**: 768px - 1024px
- **桌面端**: 1024px - 1728px
- **网页端**: >= 1728px（弹窗不显示）

---

## ✅ 最佳实践

1. **保持文件结构**: 将组件文件放在 `components/` 目录
2. **使用设计令牌**: 修改样式时优先使用 CSS 变量
3. **测试响应式**: 在不同设备上测试所有功能
4. **保持一致性**: 所有页面使用相同的组件版本
5. **更新文档**: 修改组件后更新此文档

---

## 📞 技术支持

如有问题，请检查：
1. 浏览器控制台错误
2. 文件路径是否正确
3. 所有依赖文件是否已引入
4. CSS 变量是否正确定义

---

## 🔄 更新日志

### v1.0.0 (当前版本)
- ✅ 导航栏组件（桌面端和移动端）
- ✅ 联系表单组件（完整验证）
- ✅ 提交弹窗组件（响应式）
- ✅ 所有组件可全局复用





