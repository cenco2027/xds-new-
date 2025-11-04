# Contact Page 图片放置指南

## 📸 如果你已经下载了图片

### 快速操作步骤

1. **找到你下载的图片文件**
   - 通常会在Downloads文件夹或桌面
   - 文件名可能是：`Frame 137.png`、`hero-bg.png` 等

2. **将图片移动到正确位置**
   
   方法A：手动复制
   - 打开文件资源管理器
   - 导航到：`D:\work\xds new\assets\images\contact\`
   - 将图片复制到这个文件夹

   方法B：使用PowerShell命令
   ```powershell
   # 假设图片在Downloads文件夹，文件名为 "Frame 137.png"
   Copy-Item "$env:USERPROFILE\Downloads\Frame 137.png" "D:\work\xds new\assets\images\contact\hero-bg-desktop.png"
   ```

3. **重命名文件**
   
   需要3个文件，分别命名为：
   - `hero-bg-desktop.png` （桌面端）
   - `hero-bg-tablet.png` （平板端）
   - `hero-bg-mobile.png` （移动端）

### 如果你下载了多个版本

如果从Figma下载了3个不同版本的图片：

1. **桌面端版本** → 重命名为 `hero-bg-desktop.png`
2. **平板端版本** → 重命名为 `hero-bg-tablet.png`
3. **移动端版本** → 重命名为 `hero-bg-mobile.png`

### 验证文件

运行以下命令验证：

```powershell
cd "d:\work\xds new"
Test-Path "assets\images\contact\hero-bg-desktop.png"
Test-Path "assets\images\contact\hero-bg-tablet.png"
Test-Path "assets\images\contact\hero-bg-mobile.png"
```

如果返回 `True`，说明文件已正确放置！

### 如果只有一张图片

如果你只下载了一张图片，可以：
1. 复制3次
2. 分别命名为 `hero-bg-desktop.png`、`hero-bg-tablet.png`、`hero-bg-mobile.png`
3. 这样至少页面可以显示（虽然三个版本会显示相同图片）

---

## 💡 提示

- 图片格式必须是 **PNG**
- 文件名必须完全匹配（区分大小写）
- 文件应该放在 `assets/images/contact/` 目录下

---

**告诉我图片文件的位置，我可以帮你移动和重命名！**


