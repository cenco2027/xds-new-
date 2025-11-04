# Contact Page 组件清单

## 📦 组件分类列表

### 一、页面级组件

#### 1. Contact Page Container
- **文件**: `contact.html`
- **描述**: Contact页面主容器
- **包含**: 导航栏、Hero区域、表单区域、Footer区域
- **状态**: ⚠️ 需要创建

---

### 二、导航组件

#### 2. Navbar (导航栏)
- **文件**: `components/navbar.html`
- **状态**: ✅ 已存在
- **需要修改**:
  - [ ] 添加Contact页面链接
  - [ ] 确认在不同设备上的显示效果
- **变体**:
  - Desktop: NEW navi bar desktop (Variant5)
  - Tablet: tablet navi bar (Variant9)
  - Mobile: navi bar mobile (Variant5)

---

### 三、Hero区域组件

#### 3. Contact Hero Section
- **文件**: `components/contact-hero-section.html`
- **状态**: ⚠️ 需要创建
- **包含元素**:
  - 标题: "Join Our Global Retail Network"
  - 描述文字
  - 背景图片 + 渐变叠加
- **响应式差异**:
  - Desktop: H1 (96px), Sub H6 (32px), padding: 271px上下 168px左右
  - Tablet: H2 (64px), Sub H9 (24px), padding: 0px上下 119px左右
  - Mobile: H3 (24px), Body 7 (14px), padding: 68px上下 35px左右

---

### 四、表单组件

#### 4. Contact Form Container
- **文件**: `components/contact-page-form.html`
- **状态**: ⚠️ 需要创建
- **包含**: 所有表单字段和提交按钮

#### 4.1 Form Field - First Name
- **类型**: 文本输入框
- **标签**: "First name *"
- **必填**: 是
- **布局**:
  - Desktop/Tablet: 与Last name并排 (346px / 250px宽)
  - Mobile: 全宽垂直排列 (225px宽)

#### 4.2 Form Field - Last Name
- **类型**: 文本输入框
- **标签**: "Last name *"
- **必填**: 是
- **布局**: 同上

#### 4.3 Form Field - Email
- **类型**: 邮箱输入框
- **标签**: "Email *"
- **必填**: 是
- **布局**: 全宽 (736px / 573px / 225px)

#### 4.4 Form Field - Reason for Contact
- **类型**: 下拉选择框
- **标签**: "Reason for contact"
- **必填**: 否
- **组件**: Component 2 (Variant2)
- **布局**: 全宽

#### 4.5 Form Field - Country
- **类型**: 下拉选择框
- **标签**: "Country"
- **必填**: 否
- **组件**: Frame 116 (Variant2)
- **布局**: 全宽

#### 4.6 Submit Button
- **文件**: `components/contact-submit-button.html` (可选，或内联在表单中)
- **状态**: ⚠️ 需要创建
- **文字**: "Submit"
- **包含**: 箭头图标
- **响应式差异**:
  - Desktop: 270×70px, 3px边框, Body 3字体 (32px), 10px圆角
  - Tablet/Mobile: 152×52.92px, 1.5px边框, Body 5字体 (20px), 6.15px圆角

---

### 五、表单输入组件 (可复用)

#### 5. Text Input
- **样式类**: `.form-input` 或 `.contact-form-input`
- **通用属性**:
  - 高度: 44px
  - 圆角: 5px
  - 背景: rgba(234, 234, 234, 0.75)
  - 字体: DM Sans, 300

#### 5. Email Input
- **样式类**: `.form-input-email` 或继承 `.form-input`
- **类型**: `type="email"`

#### 5. Select Dropdown
- **样式类**: `.form-select` 或 `.contact-form-select`
- **组件**: 需要自定义下拉框样式
- **图标**: 下拉箭头图标

---

### 六、Footer组件

#### 6. Contact Page Footer
- **文件**: `components/contact-page-footer.html`
- **状态**: ⚠️ 需要创建 (或修改现有的 `contact-form.html`)
- **包含**: Email订阅表单 + 社交图标 + 联系信息

#### 6.1 Email Subscription Form
- **状态**: ✅ 已存在 (在 `components/contact-form.html` 中)
- **需要修改**:
  - [ ] 响应式宽度调整
  - [ ] 移动端高度调整 (32px)
  - [ ] 移动端字体大小调整
- **响应式差异**:
  - Desktop: 514.3px宽, 57px高, Sub H2标题 (40px)
  - Tablet: 577px宽, 57px高, Sub H3标题 (28px)
  - Mobile: 296px宽, 32px高, Sub H5标题 (20px)

#### 6.2 Social Icons Group
- **状态**: ✅ 已存在 (在 `components/contact-form.html` 中)
- **需要确认**:
  - [ ] 图标尺寸是否符合设计
  - [ ] 移动端图标尺寸 (35.87×35.87px)
- **包含**: Facebook, Instagram, YouTube, TikTok

#### 6.3 Contact Info
- **状态**: ✅ 已存在 (在 `components/contact-form.html` 中)
- **需要修改**:
  - [ ] 响应式布局 (移动端垂直排列)
  - [ ] 邮箱地址根据设备显示不同
- **响应式差异**:
  - Desktop: hello@xds.co, 横向布局
  - Tablet/Mobile: hello@xidesheng.com, 移动端纵向布局

---

### 七、图标组件

#### 7. Dropdown Arrow Icon
- **文件**: `assets/icons/dropdown-arrow.svg`
- **用途**: Reason for contact下拉框
- **状态**: ⚠️ 需要下载

#### 7.1 Country Dropdown Arrow Icon
- **文件**: `assets/icons/country-dropdown-arrow.svg`
- **用途**: Country下拉框
- **状态**: ⚠️ 需要下载

#### 7.2 Submit Button Arrow Icon
- **文件**: 
  - `assets/icons/submit-arrow-desktop.svg` (22.91×14px)
  - `assets/icons/submit-arrow-mobile.svg` (13.15×8.04px)
- **用途**: 表单提交按钮
- **状态**: ⚠️ 需要下载

#### 7.3 Email Submit Arrow Icon
- **文件**: `assets/icons/email-submit-arrow.svg`
- **用途**: Email订阅表单提交按钮
- **尺寸**: 24×24px (桌面/平板), 16×16px (移动)
- **状态**: ⚠️ 需要下载

---

### 八、背景图片资源

#### 8. Hero Background Images
- **文件**: 
  - `assets/images/contact/hero-bg-desktop.png`
  - `assets/images/contact/hero-bg-tablet.png`
  - `assets/images/contact/hero-bg-mobile.png`
- **状态**: ⚠️ 需要下载
- **注意**: 移动端需要裁剪

---

## 📋 组件开发优先级

### 高优先级 (核心功能)
1. ✅ 导航栏组件 (已存在，需更新链接)
2. ⚠️ Contact Hero Section
3. ⚠️ Contact Form Container
4. ⚠️ Submit Button
5. ⚠️ Contact Page Footer

### 中优先级 (样式和细节)
6. ⚠️ Form Input组件样式
7. ⚠️ Select Dropdown组件样式
8. ⚠️ Email Subscription Form响应式调整
9. ⚠️ Social Icons尺寸确认

### 低优先级 (资源准备)
10. ⚠️ 所有图标资源下载
11. ⚠️ 所有背景图片下载

---

## 🎯 组件复用建议

### 可以复用的现有组件
- ✅ **导航栏**: `components/navbar.html` - 只需更新链接
- ✅ **Email订阅表单**: `components/contact-form.html` 中的表单部分 - 需要响应式调整
- ✅ **社交图标**: `components/contact-form.html` 中的图标部分 - 需要尺寸确认
- ✅ **联系信息**: `components/contact-form.html` 中的联系信息部分 - 需要布局调整

### 需要新创建的组件
- ⚠️ **Contact Hero Section**: 新建
- ⚠️ **Contact Form**: 新建 (不同于现有的contact-form)
- ⚠️ **Contact Page Footer**: 新建或修改现有footer

---

## 📝 组件命名规范

### HTML文件命名
- 使用小写字母和连字符: `contact-hero-section.html`
- 组件文件放在 `components/` 目录

### CSS类命名
- 使用BEM命名规范: `.contact-form`, `.contact-form__input`, `.contact-form__input--error`
- 或使用语义化命名: `.contact-hero`, `.contact-hero-title`, `.contact-hero-description`

### 图片资源命名
- 使用描述性名称: `hero-bg-desktop.png`, `submit-arrow-desktop.svg`
- 包含设备标识: `-desktop`, `-tablet`, `-mobile`

---

## 🔄 组件依赖关系

```
contact.html
├── navbar.html (已存在)
├── contact-hero-section.html (新建)
│   └── hero-bg-desktop.png (下载)
├── contact-page-form.html (新建)
│   ├── form-input组件 (样式)
│   ├── form-select组件 (样式)
│   └── contact-submit-button.html (新建)
│       └── submit-arrow图标 (下载)
└── contact-page-footer.html (新建或修改)
    ├── email-subscription-form (复用现有)
    ├── social-icons-group (复用现有)
    └── contact-info (复用现有)
```

---

## ✅ 组件检查清单

### 创建前检查
- [ ] 确认设计稿中的所有组件
- [ ] 确认响应式差异
- [ ] 确认可复用的组件

### 创建时检查
- [ ] HTML结构语义化
- [ ] CSS类命名规范
- [ ] 响应式断点设置
- [ ] 图片资源引用正确

### 创建后检查
- [ ] 视觉还原度检查
- [ ] 响应式测试
- [ ] 功能测试
- [ ] 浏览器兼容性测试

---

**文档版本**: 1.0
**创建时间**: 2024年



