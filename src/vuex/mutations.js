import * as NAME from 'common/config/constant'
import Session from 'common/plugin/Session'
const mutations = {
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  [NAME.USER_INFO] (state,userInfo) {
    state.userInfo=userInfo;
    Session.saveItem('user',userInfo);
  },
  [NAME.ACTIVE_MENU] (state,activeMenu) {
    state.activeMenu=activeMenu;
    Session.saveItem('activeMenu',activeMenu);
  },
}
export default mutations
