export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

function doToggleMobileMenu(showMobileMenu) {
  return {
    type: TOGGLE_MOBILE_MENU,
    showMobileMenu: showMobileMenu,
  }
}

export default doToggleMobileMenu;
