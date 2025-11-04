# Contact Page 图片下载完成验证脚本

## 验证图片是否已下载

运行以下PowerShell命令检查图片文件：

```powershell
cd "d:\work\xds new"

Write-Host "检查Contact页面图片文件..." -ForegroundColor Cyan

$images = @(
    "assets\images\contact\hero-bg-desktop.png",
    "assets\images\contact\hero-bg-tablet.png",
    "assets\images\contact\hero-bg-mobile.png"
)

$allExist = $true
foreach ($img in $images) {
    if (Test-Path $img) {
        $size = (Get-Item $img).Length / 1KB
        Write-Host "✅ $img 存在 ($([math]::Round($size, 2)) KB)" -ForegroundColor Green
    } else {
        Write-Host "❌ $img 不存在" -ForegroundColor Red
        $allExist = $false
    }
}

if ($allExist) {
    Write-Host "`n所有图片文件已下载完成！" -ForegroundColor Green
} else {
    Write-Host "`n部分图片文件缺失，请参考下载指南下载。" -ForegroundColor Yellow
}
```

## 快速下载链接

### Hero背景图片

1. **桌面端** (hero-bg-desktop.png)
   - 链接: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1282
   - 节点: Frame 137 (ID: 3390:1284)
   - 导出: PNG 2x

2. **平板端** (hero-bg-tablet.png)
   - 链接: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1524
   - 节点: Frame 137 (ID: 3390:1526)
   - 导出: PNG 2x

3. **移动端** (hero-bg-mobile.png)
   - 链接: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-?node-id=3390-1157
   - 节点: Frame 271 (ID: 3390:1160)
   - 导出: PNG 2x

## 下载步骤

1. 点击上面的链接打开Figma设计
2. 在左侧图层列表中找到对应的Frame
3. 选中Frame
4. 右侧面板找到"Export"部分
5. 点击"+"添加导出设置
6. 选择格式: PNG
7. 选择尺寸: 2x
8. 点击"Export [Frame名称]"
9. 保存到: `d:\work\xds new\assets\images\contact\`

## 注意事项

- 确保文件名完全匹配（区分大小写）
- 确保保存到正确的目录
- 使用PNG格式，2x分辨率


