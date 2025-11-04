# 导航栏 CSS 差异分析

## 一、网页端差异分析

### 1.1 Container 差异
**Figma CSS:**
- `padding: 26px 118px 26px 101px` ✅ 已匹配
- `height: 80px` ✅ 已匹配
- `position: absolute` ❌ 当前是 `fixed`
- `backdrop-filter: blur(2px)` ❌ 当前是 `blur(4px)`

### 1.2 Inner Container (Frame 126) 差异
**Figma CSS:**
- `width: 1440px` ✅ 已匹配（max-width）
- `height: 28px` ✅ 已匹配
- `gap: 882px` ❌ **需要恢复固定 gap，不能使用 space-between**
- `justify-content: space-between` ✅ 已匹配

### 1.3 Logo 差异
**Figma CSS:**
- `width: 179px; height: 32px` ✅ 已匹配
- `margin: 0 auto` ✅ 已匹配

### 1.4 Menu Wrapper (Frame 125) 差异
**Figma CSS:**
- `width: 850px` ❌ 当前是 `width: auto`
- `height: 40px` ❌ 当前没有设置
- `gap: 33px` ✅ 已匹配

### 1.5 菜单项字体差异
**Figma CSS:**
- `font-size: 20px` ✅ 已匹配
- `font-weight: 300` ✅ 已匹配
- `line-height: 26px` ❌ 当前是 `1.302em` (约 26.04px，应该精确到 26px)

### 1.6 按钮差异
**Figma CSS:**
- `width: 195px; height: 40px` ✅ 已匹配
- `padding: 7px 9px` ✅ 已匹配
- `border: 1px solid #F4F6F6` ✅ 已匹配
- `border-radius: 5px` ✅ 已匹配

---

## 二、平板端差异分析

### 2.1 Container 差异
**Figma CSS:**
- `padding: 10px 105px` ✅ 已匹配
- `height: 77px` ✅ 已匹配
- `backdrop-filter: blur(2px)` ❌ 当前是 `blur(4px)`

### 2.2 汉堡菜单差异（重要！）
**Figma CSS:**
- Container: `width: 60px; height: 44px; padding: 12px 10px 10px; gap: 11px` ✅ 已匹配
- **线条样式**: `width: 36.32px; height: 0px; border: 3.63243px solid #FFFFFF` ❌ **当前使用 background-color，应该用 border**
- 三条线都有相同的样式

### 2.3 展开菜单差异
**Figma CSS (展开状态):**
- 菜单项顺序：Home, Bicycles, About Us, Our Technology, Contact Us ✅ 需要确认
- 菜单位置：`left: calc(50% - 777px/2 + 6.5px); top: 108px`
- 菜单宽度：`width: 777px`
- Gap: `gap: 33px`
- 所有菜单项都有 `text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)`

### 2.4 下划线位置
**Figma CSS:**
- Home: `left: 109px; top: 149px`
- Bicycles: `left: 252px; top: 149px`
- About Us: `left: 408px; top: 149px`
- Our Technology: `left: 599px; top: 149px`
- Contact Us: `left: 802px; top: 149px`

---

## 三、移动端差异分析

### 3.1 Container 差异
**Figma CSS:**
- `padding: 8px 25px` ✅ 已匹配
- `height: 84px` ✅ 已匹配
- `backdrop-filter: blur(10px)` ❌ 当前是 `blur(20px)` 或其他值

### 3.2 汉堡菜单差异（重要！）
**Figma CSS:**
- Container: `width: 59px; height: 38px; padding: 10px 10px 8px`
- 内部容器: `width: 26px; height: 19px; gap: 7px`
- **线条样式**: `width: 24px; height: 0px; border: 2px solid #FFFFFF` ❌ **当前使用 background-color，应该用 border**

### 3.3 Logo 差异
**Figma CSS:**
- `width: 145px; height: 26px` ✅ 已匹配

---

## 四、关键修复点总结

### 🔴 高优先级修复

1. **网页端 gap: 882px**
   - 需要恢复固定 gap，但要在 >= 1728px 时才使用
   - 小屏幕使用 space-between

2. **汉堡菜单线条样式**
   - 平板端：使用 `border: 3.63243px solid #FFFFFF` 而不是 `background-color`
   - 移动端：使用 `border: 2px solid #FFFFFF` 而不是 `background-color`

3. **backdrop-filter 值**
   - 网页端：`blur(2px)` 而不是 `blur(4px)`
   - 平板端：`blur(2px)` 而不是 `blur(4px)`
   - 移动端：`blur(10px)` 而不是 `blur(20px)`

4. **line-height 精确值**
   - 网页端菜单项：`line-height: 26px` 而不是 `1.302em`

5. **菜单 wrapper 宽度**
   - 网页端：`width: 850px` 而不是 `width: auto`

### 🟡 中优先级修复

6. **平板端菜单展开位置和尺寸**
   - 精确匹配 Figma 的位置和尺寸

7. **下划线位置**
   - 确保精确匹配 Figma 的数值

### 🟢 低优先级修复

8. **position: absolute vs fixed**
   - 根据实际需求决定（fixed 通常更好用于导航栏）

---

## 五、需要确认的问题

1. **gap: 882px 的响应式处理**
   - 在 >= 1728px 时使用固定 gap
   - 在 < 1728px 时使用 space-between（保持流畅）

2. **position: absolute vs fixed**
   - Figma 显示 absolute，但通常导航栏用 fixed
   - 需要确认实际需求

3. **社交媒体图标**
   - 用户询问是否需要 SVG 代码
   - 当前 components/contact-form.html 已经有图标代码



