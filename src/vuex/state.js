import Session from 'common/plugin/Session.js'
const state = {
  userInfo:Session.getItem('user')||{},
  keep:Session.getItem('keep')||[],
  activeMenu:Session.getItem('activeMenu')||'',
  token:"123456",
  activeNav:{
    nav:[],
    key:""
  },
  // breadcrumb:Session.getItem('Session')||[]
}

export default state
