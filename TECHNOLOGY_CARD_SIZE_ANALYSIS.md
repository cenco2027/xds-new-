# Technology卡片和图片尺寸对照表

## 📐 Desktop (1728px) 精确尺寸

### 容器尺寸
- **总容器宽度**: 1728px - 左右padding (164px × 2) = **1400px**
- **卡片容器**: Frame 60/231/61
  - **布局**: row（横向）
  - **间距**: 20px
  - **对齐**: stretch（拉伸对齐）

### Card 1 (Frame 60)
- **卡片文本wrapper**:
  - **Padding**: 262px 68px（上下262px，左右68px）
  - **宽度**: `horizontal: fill` → 约 **50%** (约700px)
  - **高度**: `vertical: fixed` → 应与图片一致 **846px**
  - **内容gap**: 35px（卡片wrapper内）
  - **内容区gap**: 40px（标题和文本之间）

- **图片**:
  - **高度**: **846px**（固定）
  - **宽度**: `horizontal: fill` → 约 **50%** (约700px)
  - **圆角**: 10px

### Card 2 (Frame 231) - 图片在左
- **图片**:
  - **高度**: **846px**（固定）
  - **宽度**: `horizontal: fill` → 约 **50%** (约700px)
  - **圆角**: 10px

- **卡片文本wrapper**:
  - **Padding**: 262px 68px（上下262px，左右68px）
  - **宽度**: `horizontal: fill` → 约 **50%** (约700px)
  - **高度**: `vertical: fixed` → 应与图片一致 **846px**
  - **内容gap**: 35px（卡片wrapper内）
  - **内容区gap**: 40px（标题和文本之间）

### Card 3 (Frame 61)
- **卡片文本wrapper**:
  - **Padding**: 262px 68px（上下262px，左右68px）
  - **宽度**: `horizontal: fill` → 约 **50%** (约700px)
  - **高度**: `vertical: fixed` → 应与图片一致 **846px**
  - **内容gap**: 35px（卡片wrapper内）
  - **内容区gap**: 40px（标题和文本之间）

- **图片**:
  - **高度**: **846px**（固定）
  - **宽度**: `horizontal: fill` → 约 **50%** (约700px)
  - **圆角**: 10px

---

## 📐 Tablet (1024px) 精确尺寸

### 容器尺寸
- **总容器宽度**: 1024px - 左右padding (479px × 2) = **66px**（实际上padding过大，应该是全宽）
- **卡片容器**: Frame 248/231/61
  - **布局**: row（横向）
  - **间距**: 10px（Card 1 & 2），11.5px（Card 3）
  - **对齐**: stretch（拉伸对齐）

### Card 1 (Frame 248)
- **卡片文本wrapper**:
  - **Padding**: 153.3px 39.8px
  - **宽度**: `horizontal: fill` → 约 **50%**
  - **高度**: `vertical: fixed` → 应与图片一致 **495px**
  - **内容gap**: 10px（Card 1）或 20.1px（Card 2 & 3）
  - **内容区gap**: 23.4px（Card 1）

- **图片**:
  - **高度**: **495px**（固定）
  - **宽度**: `horizontal: fill` → 约 **50%**
  - **圆角**: 5.85px

### Card 2 (Frame 231) - 图片在左
- **图片**:
  - **高度**: **495px**（固定）
  - **宽度**: `horizontal: fill` → 约 **50%**
  - **圆角**: 5.75px

- **卡片文本wrapper**:
  - **Padding**: 150.7px 39.1px
  - **宽度**: `horizontal: fill` → 约 **50%**
  - **高度**: `vertical: fixed` → 应与图片一致 **495px**
  - **内容gap**: 20.1px
  - **内容区gap**: 23.01px

### Card 3 (Frame 61)
- **卡片文本wrapper**:
  - **Padding**: 150.7px 39.1px
  - **宽度**: `horizontal: fill` → 约 **50%**
  - **高度**: `vertical: fixed` → 应与图片一致 **495px**
  - **内容gap**: 20.1px
  - **内容区gap**: 23.01px

- **图片**:
  - **高度**: **495px**（固定）
  - **宽度**: `horizontal: fill` → 约 **50%**
  - **圆角**: 5.75px

---

## 📐 Mobile (375px) 精确尺寸

### 容器尺寸
- **总容器宽度**: 375px（全宽）
- **卡片容器**: 纵向布局
  - **间距**: 10px
  - **对齐**: stretch

### Card 1
- **图片**:
  - **宽度**: **363px**（固定）
  - **高度**: **323px**（固定）
  - **圆角**: 5px

- **卡片文本wrapper**:
  - **Padding**: 109.76px 28.49px
  - **宽度**: **363px**（与图片一致）
  - **高度**: 416px（包含padding）
  - **内容gap**: 16.76px

### Card 2 - 图片在上
- **图片**:
  - **宽度**: **363px**（固定）
  - **高度**: **323px**（固定）
  - **圆角**: 5px

- **卡片文本wrapper**:
  - **Padding**: 150.71px 39.12px
  - **宽度**: **363px**（与图片一致）
  - **高度**: 365px（包含padding）
  - **内容gap**: 23.01px

### Card 3
- **图片**:
  - **宽度**: **363px**（固定）
  - **高度**: **323px**（固定）
  - **圆角**: 4.12px

- **卡片文本wrapper**:
  - **Padding**: 108.07px 28.05px
  - **宽度**: **363px**（与图片一致）
  - **高度**: 419px（包含padding）
  - **内容gap**: 16.5px

---

## 🔍 需要检查的关键点

### Desktop
1. **图片和卡片的宽度比例**:
   - 当前：flex: 1 → 各占50%
   - Figma：`horizontal: fill` → 各占50%
   - ✅ 应该正确

2. **图片和卡片的高度**:
   - 图片：846px（固定）
   - 卡片：846px（固定，与图片一致）
   - ✅ 应该正确

3. **卡片内容gap**:
   - 卡片wrapper内gap：35px
   - 内容区gap（标题和文本）：40px
   - ⚠️ 需要确认：当前CSS中content gap是35px还是40px？

### Tablet
1. **图片和卡片的宽度比例**:
   - 当前：flex: 1 → 各占50%
   - Figma：`horizontal: fill` → 各占50%
   - ✅ 应该正确

2. **图片和卡片的高度**:
   - 图片：495px（固定）
   - 卡片：495px（固定，与图片一致）
   - ✅ 应该正确

3. **卡片内容gap**:
   - Card 1：内容gap 10px，内容区gap 23.4px
   - Card 2 & 3：内容gap 20.1px，内容区gap 23.01px
   - ⚠️ 需要确认：当前CSS是否正确区分了不同卡片的gap？

### Mobile
1. **图片和卡片的宽度**:
   - 图片：363px（固定）
   - 卡片：363px（固定，与图片一致）
   - ✅ 应该正确

2. **图片和卡片的高度**:
   - 图片：323px（固定）
   - 卡片：各不同（Card 1: 416px, Card 2: 365px, Card 3: 419px）
   - ✅ 应该正确

---

## 📝 可能的问题

1. **宽度比例问题**:
   - 如果图片和卡片看起来大小不一致，可能是flex比例问题
   - 检查是否有额外的margin/padding影响宽度

2. **高度问题**:
   - 确认卡片wrapper的高度是否真的是846px（Desktop）和495px（Tablet）
   - 检查是否有内容溢出导致高度变化

3. **内容gap问题**:
   - Desktop：卡片wrapper内gap应该是35px，内容区gap应该是40px
   - Tablet：不同卡片有不同的gap值

4. **Padding问题**:
   - Desktop：所有卡片都是262px 68px
   - Tablet：Card 1是153.3px 39.8px，Card 2&3是150.7px 39.1px
   - Mobile：每个卡片都不同

---

**请告诉我具体哪个尺寸不对，我会根据您的反馈进行调整！**



