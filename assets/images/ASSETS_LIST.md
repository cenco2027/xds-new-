# 资源清单文件

## 已存在的资源
- `xds-logo.svg` - 导航栏使用的 Logo (使用 base64 PNG 图案)
- `arrow-icon.svg` - 箭头图标 (378x79px, 包含 "SUBMIT" 文字)
- `logo-white.png` - 白色 Logo PNG 文件
- `nav-logo-desktop.svg` - 桌面导航栏 Logo
- `xds-logo-white-dc3433.svg` - 白色 Logo SVG (裁剪版本)
- `xds-logo-white-header.svg` - 头部白色 Logo SVG

## 需要从 Figma 下载的资源

### Logo 资源
- **Logo (所有变体)**: imageRef `09634007caca8d5461e585bb3d14b4fcf0115ca3`
  - 网页端尺寸: 179px x 32px
  - 平板端尺寸: 179px x 32px  
  - 移动端尺寸: 145px x 26px
  - 建议文件名: `xds-logo-full.svg` (如果可下载为纯 SVG)

### 箭头图标
- **箭头图标 (提交按钮)**:
  - 网页端: 在联系表单提交按钮中 (Nav Items/Right component)
  - 平板端: Group 10, 尺寸 22.91px x 14px
  - 移动端: Group 10, 尺寸 8.39px x 5.13px
  - 当前文件: `arrow-icon.svg` (378x79px, 包含文字) - 可能需要提取纯箭头部分

### 社交媒体图标
- **社交媒体图标**: 在 Frame 32 中
  - 网页端: 44px x 44px
  - 平板端: 50px x 50px (Facebook, Twitter, Instagram, LinkedIn 等)
  - 移动端: 35.87px x 35.87px
  - 建议文件名: `icon-facebook.svg`, `icon-twitter.svg`, `icon-instagram.svg`, `icon-linkedin.svg`

## 设计分析文件
- `assets/images/analysis/tablet-design-analysis.md` - 平板端设计分析
- `assets/images/analysis/mobile-design-analysis.md` - 移动端设计分析

## 下一步行动
1. 如果 `xds-logo.svg` 的 base64 图案无法显示，考虑：
   - 使用 `logo-white.png` 替换
   - 或从 Figma 重新下载纯 SVG 版本的 Logo
2. 检查 `arrow-icon.svg` 是否符合设计要求
3. 如果需要社交媒体图标，从 Figma 下载对应的 SVG 文件

## 从 Figma 下载资源的节点 ID

### Logo
- **所有端口**: 在导航栏和联系表单中使用
- **节点路径**: 
  - 网页端导航栏: I3390:1425;617:373 (XDS-Logotype_White-M 1)
  - 联系表单: I3390:1424;1233:4337 (XDS-Logotype_White-M 2)
  - 平板端导航栏: 在 tablet navi bar 组件中
  - 移动端导航栏: 在 navi bar mobile 组件中

### 箭头图标
- **提交按钮箭头**: Nav Items/Right component (ID: 3315:72)
- **节点路径**:
  - 网页端: I3390:1424;1233:9691;1233:4332 (Nav Items/Right)
  - 平板端: I3390:1774;1233:7792;1233:4332 (Nav Items/Right)
  - 移动端: I3390:1119;1233:11914;1233:11284 (Nav Items/Right)

### 社交媒体图标
- **Frame 32**: 包含社交媒体图标
- **节点路径**:
  - 网页端: I3390:1424;597:287 (Frame 32)
  - 平板端: I3390:1774;624:511 (Frame 32)
  - 移动端: I3390:1119;627:760 (Frame 32)