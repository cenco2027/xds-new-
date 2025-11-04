/**
 * 诊断脚本 - 检查所有资源文件是否存在
 * 在浏览器控制台中运行此脚本来诊断问题
 */

(function() {
  console.log('=== 资源文件诊断 ===');
  
  // 检查CSS文件
  const cssFiles = [
    'css/design-tokens.css',
    'css/components.css',
    'css/components/navbar.css',
    'css/components/hero-section.css',
    'css/components/product-filter.css',
    'css/components/product-card.css',
    'css/components/product-cards-section.css',
    'css/components/contact-form.css',
    'css/components/submit-modal.css'
  ];
  
  console.log('\n--- CSS文件检查 ---');
  cssFiles.forEach(file => {
    const link = document.querySelector(`link[href="${file}"]`);
    if (link) {
      console.log(`✓ ${file} - 已链接`);
    } else {
      console.error(`✗ ${file} - 未找到链接`);
    }
  });
  
  // 检查JavaScript文件
  const jsFiles = [
    'js/components/navbar.js',
    'js/components/submit-modal.js',
    'js/components/contact-form.js',
    'js/components/product-cards.js',
    'js/components/product-filter.js'
  ];
  
  console.log('\n--- JavaScript文件检查 ---');
  jsFiles.forEach(file => {
    const script = document.querySelector(`script[src="${file}"]`);
    if (script) {
      console.log(`✓ ${file} - 已链接`);
    } else {
      console.error(`✗ ${file} - 未找到链接`);
    }
  });
  
  // 检查图片文件
  const images = [
    'assets/images/logo-white.png',
    'assets/images/hero/hero-bg-desktop.png',
    'assets/images/hero/hero-bg-tablet.png',
    'assets/images/hero/hero-bg-mobile.png',
    'assets/images/products/product-ad9-desktop-4b2870.png',
    'assets/images/products/product-mobile-4b2870.png'
  ];
  
  console.log('\n--- 图片文件检查 ---');
  images.forEach(img => {
    const imgElement = new Image();
    imgElement.onload = () => console.log(`✓ ${img} - 存在`);
    imgElement.onerror = () => console.error(`✗ ${img} - 不存在或无法加载`);
    imgElement.src = img;
  });
  
  // 检查DOM元素
  console.log('\n--- DOM元素检查 ---');
  const elements = {
    'navbar': document.getElementById('navbar'),
    'product-filter': document.getElementById('product-filter'),
    'product-cards-container': document.querySelector('.product-cards-container'),
    'contact-form': document.getElementById('contact-email-form'),
    'submit-modal': document.getElementById('submit-modal-overlay')
  };
  
  Object.keys(elements).forEach(key => {
    if (elements[key]) {
      console.log(`✓ ${key} - 存在`);
    } else {
      console.error(`✗ ${key} - 不存在`);
    }
  });
  
  // 检查JavaScript全局变量
  console.log('\n--- JavaScript全局变量检查 ---');
  console.log(`window.filterProducts: ${typeof window.filterProducts}`);
  console.log(`window.productsData: ${typeof window.productsData}`);
  console.log(`window.renderProductCards: ${typeof window.renderProductCards}`);
  console.log(`window.showSubmitModal: ${typeof window.showSubmitModal}`);
  
  // 检查产品卡片
  setTimeout(() => {
    const productCards = document.querySelectorAll('.product-card-link');
    console.log(`\n--- 产品卡片检查 ---`);
    console.log(`找到 ${productCards.length} 个产品卡片链接`);
    productCards.forEach((cardLink, index) => {
      const card = cardLink.querySelector('.product-card');
      const category = cardLink.getAttribute('data-category');
      const productId = cardLink.getAttribute('data-product-id');
      const href = cardLink.getAttribute('href');
      const visible = !cardLink.classList.contains('hidden');
      console.log(`卡片 ${index + 1}: category=${category}, id=${productId}, href=${href}, visible=${visible}`);
    });
  }, 1000);
  
  console.log('\n=== 诊断完成 ===');
})();

