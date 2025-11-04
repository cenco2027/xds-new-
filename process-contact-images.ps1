# Contact Page 图片处理脚本

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
$desktopPatterns = @("*desktop*.png", "*Desktop*.png", "*DESKTOP*.png", "*hero-bg-desktop*.png")
$tabletPatterns = @("*tablet*.png", "*Tablet*.png", "*TABLET*.png", "*hero-bg-tablet*.png")
$mobilePatterns = @("*mobile*.png", "*Mobile*.png", "*MOBILE*.png", "*hero-bg-mobile*.png")

Write-Host "正在查找图片文件..." -ForegroundColor Yellow
Write-Host ""

# 处理桌面端图片
$desktopFound = $false
foreach ($pattern in $desktopPatterns) {
    $files = Get-ChildItem -Path "." -Filter $pattern -Recurse -ErrorAction SilentlyContinue | Where-Object { 
        $_.FullName -notlike "*\node_modules\*" -and 
        $_.FullName -notlike "*\assets\images\contact\*" -and
        $_.DirectoryName -ne (Join-Path (Get-Location).Path "assets\images\contact")
    }
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
    $files = Get-ChildItem -Path "." -Filter $pattern -Recurse -ErrorAction SilentlyContinue | Where-Object { 
        $_.FullName -notlike "*\node_modules\*" -and 
        $_.FullName -notlike "*\assets\images\contact\*" -and
        $_.DirectoryName -ne (Join-Path (Get-Location).Path "assets\images\contact")
    }
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
    $files = Get-ChildItem -Path "." -Filter $pattern -Recurse -ErrorAction SilentlyContinue | Where-Object { 
        $_.FullName -notlike "*\node_modules\*" -and 
        $_.FullName -notlike "*\assets\images\contact\*" -and
        $_.DirectoryName -ne (Join-Path (Get-Location).Path "assets\images\contact")
    }
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


