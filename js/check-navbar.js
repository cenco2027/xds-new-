/**
 * 导航器检查脚本
 * 在浏览器控制台中运行此脚本来检查导航器状态
 */

(function() {
  console.log('=== 导航器检查 ===');
  
  // 检查导航器元素
  const navbar = document.getElementById('navbar');
  const hamburgerButton = document.getElementById('navbar-hamburger');
  const mobileMenu = document.getElementById('navbar-mobile');
  const tabletMenu = document.getElementById('navbar-tablet-menu');
  const closeButton = document.getElementById('navbar-close');
  const menuItems = document.querySelectorAll('.navbar-menu-item, .navbar-mobile-item, .navbar-tablet-item');
  
  console.log('\n--- 导航器元素检查 ---');
  console.log(`导航器元素: ${navbar ? '✓ 存在' : '✗ 不存在'}`);
  console.log(`汉堡菜单按钮: ${hamburgerButton ? '✓ 存在' : '✗ 不存在'}`);
  console.log(`移动端菜单: ${mobileMenu ? '✓ 存在' : '✗ 不存在'}`);
  console.log(`平板端菜单: ${tabletMenu ? '✓ 存在' : '✗ 不存在'}`);
  console.log(`关闭按钮: ${closeButton ? '✓ 存在' : '✗ 不存在'}`);
  console.log(`菜单项数量: ${menuItems.length}`);
  
  // 检查导航器链接
  console.log('\n--- 导航器链接检查 ---');
  const desktopMenuItems = document.querySelectorAll('.navbar-menu-item');
  const tabletMenuItems = document.querySelectorAll('.navbar-tablet-item');
  const mobileMenuItems = document.querySelectorAll('.navbar-mobile-item');
  
  console.log('\n桌面端菜单项:');
  desktopMenuItems.forEach((item, index) => {
    const href = item.getAttribute('href');
    const text = item.textContent.trim();
    const active = item.classList.contains('active') ? ' [ACTIVE]' : '';
    console.log(`  ${index + 1}. ${text} -> ${href}${active}`);
  });
  
  console.log('\n平板端菜单项:');
  tabletMenuItems.forEach((item, index) => {
    const href = item.getAttribute('href');
    const text = item.textContent.trim();
    const active = item.classList.contains('active') ? ' [ACTIVE]' : '';
    console.log(`  ${index + 1}. ${text} -> ${href}${active}`);
  });
  
  console.log('\n移动端菜单项:');
  mobileMenuItems.forEach((item, index) => {
    const href = item.getAttribute('href');
    const text = item.textContent.trim();
    const active = item.classList.contains('active') || item.classList.contains('navbar-mobile-item-active') ? ' [ACTIVE]' : '';
    console.log(`  ${index + 1}. ${text} -> ${href}${active}`);
  });
  
  // 检查当前页面状态
  console.log('\n--- 当前页面状态 ---');
  console.log(`当前URL: ${window.location.href}`);
  console.log(`当前页面: ${window.location.pathname}`);
  console.log(`窗口宽度: ${window.innerWidth}px`);
  
  // 检查菜单状态
  console.log('\n--- 菜单状态 ---');
  if (mobileMenu) {
    console.log(`移动端菜单状态: ${mobileMenu.classList.contains('active') ? '打开' : '关闭'}`);
  }
  if (tabletMenu) {
    console.log(`平板端菜单状态: ${tabletMenu.classList.contains('active') ? '打开' : '关闭'}`);
  }
  if (hamburgerButton) {
    console.log(`汉堡菜单按钮状态: ${hamburgerButton.classList.contains('active') ? '激活' : '未激活'}`);
  }
  
  // 检查事件监听器（如果可能）
  console.log('\n--- JavaScript 函数检查 ---');
  console.log(`window.filterProducts: ${typeof window.filterProducts}`);
  console.log(`window.productsData: ${typeof window.productsData}`);
  console.log(`window.showSubmitModal: ${typeof window.showSubmitModal}`);
  
  console.log('\n=== 检查完成 ===');
})();



