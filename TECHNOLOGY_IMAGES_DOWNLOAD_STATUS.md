# Technology页面图片下载说明

## 📸 图片下载状态

由于Figma API连接问题，图片需要手动下载。以下是下载步骤：

### 方法1: 使用Figma MCP工具（如果可用）

如果MCP工具可用，请使用以下命令下载图片：

#### Hero背景图片
1. Desktop: Node ID `3390:1332` → `hero-bg-desktop.png`
2. Tablet: Node ID `3390:1497` → `hero-bg-tablet.png`  
3. Mobile: Node ID `3390:1124` → `hero-bg-mobile.png` (ImageRef: `1a0b4c2a0e39aca78e5320e0a050ae4f773f9f4c`)

#### 卡片图片（需要裁剪）
所有卡片图片都需要使用cropTransform进行裁剪。

**卡片1** (ImageRef: `4393e3327a86b432053ac6afb550a2ced14f294c`):
- Desktop: Node ID `3390:1345` → `card-1-desktop-d03932.png`
- Tablet: Node ID `3390:1509` → `card-1-tablet-d03932.png`
- Mobile: Node ID `3390:1130` → `card-1-mobile-d03932.png`
- CropTransform: `[[0.4524135887622833, 0, 0.04393921047449112], [0, 0.8363835215568542, 0.04656677693128586]]`

**卡片2** (ImageRef: `02f99c151359328aafb7e351dac77ea15b11bfca`):
- Desktop: Node ID `3390:1347` → `card-2-desktop-5c9eb5.png`
- Tablet: Node ID `3390:1511` → `card-2-tablet-5c9eb5.png`
- Mobile: Node ID `3390:1135` → `card-2-mobile-5c9eb5.png`
- CropTransform: `[[0.5042144656181335, 0, 0.28981056809425354], [0, 0.897442102432251, 0.004103092942386866]]`

**卡片3** (ImageRef: `2f219e526b524e3591bd33cbc7303e0864a47165`):
- Desktop: Node ID `3390:1357` → `card-3-desktop-179fdb.png`
- Tablet: Node ID `3390:1521` → `card-3-tablet-179fdb.png`
- Mobile: Node ID `3390:1140` → `card-3-mobile-179fdb.png`
- CropTransform: `[[0.5071930885314941, 0, 0.4738047122955322], [0, 0.9027436971664429, 0.005655435845255852]]`

### 方法2: 手动从Figma下载

1. 打开Figma设计文件: https://www.figma.com/design/6xRC7csnzLdkfC8wTuWOxv/COMPANIME.AI--Copy-
2. 选择对应的节点
3. 右键选择"Export"或使用快捷键
4. 选择PNG格式，设置scale为2x（Retina）
5. 保存到对应的目录

### 保存路径

所有图片应保存到以下路径：

```
assets/images/technology/
├── hero/
│   ├── hero-bg-desktop.png
│   ├── hero-bg-tablet.png
│   └── hero-bg-mobile.png
└── cards/
    ├── card-1-desktop-d03932.png
    ├── card-1-tablet-d03932.png
    ├── card-1-mobile-d03932.png
    ├── card-2-desktop-5c9eb5.png
    ├── card-2-tablet-5c9eb5.png
    ├── card-2-mobile-5c9eb5.png
    ├── card-3-desktop-179fdb.png
    ├── card-3-tablet-179fdb.png
    └── card-3-mobile-179fdb.png
```

## ✅ 下载检查清单

- [ ] hero-bg-desktop.png
- [ ] hero-bg-tablet.png
- [ ] hero-bg-mobile.png
- [ ] card-1-desktop-d03932.png
- [ ] card-1-tablet-d03932.png
- [ ] card-1-mobile-d03932.png
- [ ] card-2-desktop-5c9eb5.png
- [ ] card-2-tablet-5c9eb5.png
- [ ] card-2-mobile-5c9eb5.png
- [ ] card-3-desktop-179fdb.png
- [ ] card-3-tablet-179fdb.png
- [ ] card-3-mobile-179fdb.png

**总计**: 12张图片

## 📝 注意事项

1. **图片裁剪**: 所有卡片图片都需要使用Figma的cropTransform进行裁剪
2. **图片格式**: 使用PNG格式，保持透明度
3. **图片尺寸**: 使用2x scale（Retina）以确保清晰度
4. **文件名**: 确保文件名包含正确的后缀（d03932, 5c9eb5, 179fdb）



