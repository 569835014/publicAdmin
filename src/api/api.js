/*********
 * 配置ajax相关配置
 * BASE_URL axios的baseurl路径
 */
class Api{
  constructor(){
    if(process.env.NODE_ENV==='development'){

      this.BASE_URL='/crm'
    }else{
      this.BASE_URL='/'
    }
  }
}
const newApi=new Api()
export default newApi;
