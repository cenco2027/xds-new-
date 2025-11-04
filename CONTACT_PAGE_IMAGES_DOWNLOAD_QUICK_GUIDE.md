# Contact Page 图片快速下载指南

## 🚨 重要提示

由于Figma MCP工具的路径安全限制，图片需要**手动从Figma下载**。以下是快速下载步骤：

---

## 📥 快速下载步骤

### 方法1: 直接从Figma导出（推荐）

#### 1. Hero背景图片 - 桌面端
1. 打开链接: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1282
2. 在左侧图层列表中找到 `Frame 137` (ID: 3390:1284)
3. 选中该Frame
4. 右侧面板 → Export → 点击 "+" 添加导出设置
5. 格式选择: **PNG**
6. 尺寸选择: **2x** (Retina)
7. 点击 "Export Frame 137"
8. 保存文件名为: `hero-bg-desktop.png`
9. 保存位置: `assets/images/contact/` 目录

#### 2. Hero背景图片 - 平板端
1. 打开链接: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1524
2. 找到 `Frame 137` (ID: 3390:1526)
3. 按照上述步骤导出
4. 保存为: `hero-bg-tablet.png`

#### 3. Hero背景图片 - 移动端
1. 打开链接: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1157
2. 找到 `Frame 271` (ID: 3390:1160)
3. 按照上述步骤导出
4. 保存为: `hero-bg-mobile.png`
5. **注意**: 移动端背景需要裁剪，确保导出时选择正确的区域

---

### 方法2: 批量导出（如果支持）

如果Figma支持批量导出，可以：
1. 同时选择三个Frame
2. 设置导出格式为PNG 2x
3. 批量导出

---

## 📋 下载检查清单

下载完成后，验证以下文件是否存在：

- [ ] `assets/images/contact/hero-bg-desktop.png`
- [ ] `assets/images/contact/hero-bg-tablet.png`
- [ ] `assets/images/contact/hero-bg-mobile.png`

---

## 🔍 验证下载

打开PowerShell，运行以下命令验证文件：

```powershell
cd "d:\work\xds new"
Test-Path "assets\images\contact\hero-bg-desktop.png"
Test-Path "assets\images\contact\hero-bg-tablet.png"
Test-Path "assets\images\contact\hero-bg-mobile.png"
```

所有命令应返回 `True`。

---

## 💡 提示

1. **图片格式**: 确保导出为PNG格式
2. **图片尺寸**: 使用2x分辨率（Retina）以获得最佳质量
3. **文件命名**: 确保文件名完全匹配（区分大小写）
4. **保存位置**: 确保保存到正确的目录 `assets/images/contact/`

---

## ⚡ 快速操作

如果暂时无法下载图片，页面仍然可以正常显示，只是背景会显示为纯色渐变。图片下载后会自动应用。

---

**下载完成后，请告诉我，我会继续下一步开发！**


