import * as NAME from 'common/config/constant'
export const saveUserInfo = function ({commit}, userInfo) {
  commit(NAME.USER_INFO, userInfo);
};
export const saveactiveMenu = function ({commit}, activeMenu) {
  commit(NAME.ACTIVE_MENU, activeMenu);
};
