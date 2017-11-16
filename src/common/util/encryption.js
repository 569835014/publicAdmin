/**
 * Created by Administrator on 2017/5/9 0009.
 */
import CryptoJS from 'crypto-js'
class Encryption{
  //加密
  static encryptByDES(message,key){
    return CryptoJS.AES.encrypt(message, key);
  }
  //解密
  static decryptByDES(message,key){
    let bytes  = CryptoJS.AES.decrypt(message.toString(), key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
/********
 *
 * 例子
 * ***/
// let cip=Encryption.encryptByDES('abc','cccccav');
// let plaintext=Encryption.decryptByDES(cip,'cccccav')
// console.info(plaintext);
export default Encryption
