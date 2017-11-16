
function load (url,component) {//按需加载组件
  let _router=url||'components';
  return () => System.import(`../${_router}/${component}`)


}
export  function pageLoad(url,component) {//按需加载路由组件，判断组件存不存在不存在用Preparation替代

}
export default load
