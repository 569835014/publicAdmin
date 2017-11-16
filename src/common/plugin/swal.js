import sweetalert from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
class Swal{
  constructor(){}
  install(Vue){
    Vue.prototype.$swal = sweetalert;
  }
}
const swal=new Swal()
export default swal
