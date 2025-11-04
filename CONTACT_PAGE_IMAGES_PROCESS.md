# Contact Page 图片处理脚本

## 如果你已经下载了图片但格式不对

### 方法1: 使用PowerShell脚本处理

将以下脚本保存为 `process-contact-images.ps1`：

```powershell
# Contact Page 图片处理脚本
# 将下载的图片移动到正确位置并重命名

$targetDir = "assets\images\contact"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

Write-Host "Contact页面图片处理工具" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# 检查目标目录
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    Write-Host "✓ 创建目录: $targetDir" -ForegroundColor Green
}

# 查找图片文件
$desktopPatterns = @("*desktop*.png", "*Desktop*.png", "*DESKTOP*.png")
$tabletPatterns = @("*tablet*.png", "*Tablet*.png", "*TABLET*.png")
$mobilePatterns = @("*mobile*.png", "*Mobile*.png", "*MOBILE*.png")

Write-Host "正在查找图片文件..." -ForegroundColor Yellow
Write-Host ""

# 处理桌面端图片
$desktopFound = $false
foreach ($pattern in $desktopPatterns) {
    $files = Get-ChildItem -Path "." -Filter $pattern -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notlike "*\node_modules\*" }
    if ($files) {
        foreach ($file in $files) {
            $target = Join-Path $targetDir "hero-bg-desktop.png"
            Copy-Item $file.FullName $target -Force
            Write-Host "✓ 桌面端图片: $($file.Name) -> hero-bg-desktop.png" -ForegroundColor Green
            $desktopFound = $true
            break
        }
    }
    if ($desktopFound) { break }
}

# 处理平板端图片
$tabletFound = $false
foreach ($pattern in $tabletPatterns) {
    $files = Get-ChildItem -Path "." -Filter $pattern -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notlike "*\node_modules\*" }
    if ($files) {
        foreach ($file in $files) {
            $target = Join-Path $targetDir "hero-bg-tablet.png"
            Copy-Item $file.FullName $target -Force
            Write-Host "✓ 平板端图片: $($file.Name) -> hero-bg-tablet.png" -ForegroundColor Green
            $tabletFound = $true
            break
        }
    }
    if ($tabletFound) { break }
}

# 处理移动端图片
$mobileFound = $false
foreach ($pattern in $mobilePatterns) {
    $files = Get-ChildItem -Path "." -Filter $pattern -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notlike "*\node_modules\*" }
    if ($files) {
        foreach ($file in $files) {
            $target = Join-Path $targetDir "hero-bg-mobile.png"
            Copy-Item $file.FullName $target -Force
            Write-Host "✓ 移动端图片: $($file.Name) -> hero-bg-mobile.png" -ForegroundColor Green
            $mobileFound = $true
            break
        }
    }
    if ($mobileFound) { break }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "验证结果:" -ForegroundColor Cyan

$images = @(
    @{Name="hero-bg-desktop.png"; Found=$desktopFound},
    @{Name="hero-bg-tablet.png"; Found=$tabletFound},
    @{Name="hero-bg-mobile.png"; Found=$mobileFound}
)

$allFound = $true
foreach ($img in $images) {
    $path = Join-Path $targetDir $img.Name
    if (Test-Path $path) {
        $size = (Get-Item $path).Length / 1KB
        Write-Host "✓ $($img.Name) - $([math]::Round($size, 2)) KB" -ForegroundColor Green
    } else {
        Write-Host "✗ $($img.Name) - 未找到" -ForegroundColor Red
        $allFound = $false
    }
}

if ($allFound) {
    Write-Host ""
    Write-Host "所有图片已成功处理！" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "部分图片缺失，请手动下载。" -ForegroundColor Yellow
    Write-Host "参考: CONTACT_PAGE_IMAGES_DOWNLOAD_QUICK_GUIDE.md" -ForegroundColor Cyan
}
```

### 使用方法

1. 将下载的图片文件放在项目根目录或任何子目录中
2. 在PowerShell中运行：
   ```powershell
   cd "d:\work\xds new"
   .\process-contact-images.ps1
   ```
3. 脚本会自动查找并移动图片到正确位置

### 方法2: 手动移动图片

如果你知道图片文件的位置：

1. **桌面端图片** → 重命名为 `hero-bg-desktop.png` → 移动到 `assets/images/contact/`
2. **平板端图片** → 重命名为 `hero-bg-tablet.png` → 移动到 `assets/images/contact/`
3. **移动端图片** → 重命名为 `hero-bg-mobile.png` → 移动到 `assets/images/contact/`

### 图片格式要求

- **格式**: PNG
- **分辨率**: 建议2x (Retina)
- **文件大小**: 通常几百KB到几MB
- **命名**: 必须完全匹配（区分大小写）

### 验证

运行以下命令验证：

```powershell
cd "d:\work\xds new"
Test-Path "assets\images\contact\hero-bg-desktop.png"
Test-Path "assets\images\contact\hero-bg-tablet.png"
Test-Path "assets\images\contact\hero-bg-mobile.png"
```

所有命令应返回 `True`。


