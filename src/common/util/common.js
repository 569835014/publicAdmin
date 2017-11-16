/**
 * 公共js主要封装一些经常用到的一些方法
 */
/**
 *
 * 设置rem数值
 * 参数itemNum 为1屏幕宽度分为多少份
 * */
const sizeRem=function (itemNum) {
  let size = itemNum || 15;
  window.onresize = remSize;
  remSize();
  function remSize() {
    let html = document.getElementsByTagName('html')[0], w = html.clientWidth;
    html.style.fontSize = w / size + 'px'
  }
};

/*****
 *
 *
 * url相关操作常见的获取url参数
 *
 * **/
const URL={
  //当前页面路径
  href:window.location.href,
  //当前页面查询字符串
  search: window.location.search,
  //查询URL传递的参数值
  query: function (key) {
    console.info(window.location)
    let reg = new RegExp('(^|&|\\?|#)' + key + '=([^&]*)(&|\x24)', '');
    let match = this.search.substr(1).match(reg);
    if (match) {
      return match[2];
    }
    return '';
  },
};

/*****
 * @source 源对象
 * @target 目标对象
 * 将源对象（ source ）的所有可枚举属性，复制到目标对象（ target ）。
 * ****/
const extend=function(source,target){
  let arr=['number','boolean','string','undefined','function'];
  let _arr=['number','boolean','string','object'];
  for(let key in source){
    let type=typeof source[key];
    let _type=typeof target[key]
    if( target[key]===null||_arr.indexOf(_type)>=0){
      continue;
    }
    if(arr.indexOf(type)>=0){
      target[key]=source[key]
    }else{
      if(source[key]===null){
        target[key]=source[key]
      }else if(source[key]instanceof Array){
        target[key]=source[key].slice(0);
      }else if(type==='object'){
        if(!target[key]){
          target[key]={}
        }
        extend(source[key],target[key])
      }
    }
  }
  return target
};
function copy() {
  // 默认不进行深拷贝
  var deep = false;
  var name, options, src, copy, clone, copyIsArray;
  var length = arguments.length;
  // 记录要复制的对象的下标
  var i = 1;
  // 第一个参数不传布尔值的情况下，target 默认是第一个参数
  var target = arguments[0] || {};
  // 如果第一个参数是布尔值，第二个参数是 target
  if (typeof target == 'boolean') {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  // 如果target不是对象，我们是无法进行复制的，所以设为 {}
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }

  // 循环遍历要复制的对象们
  for (; i < length; i++) {
    // 获取当前对象
    options = arguments[i];
    // 要求不能为空 避免 extend(a,,b) 这种情况
    if (options != null) {
      for (name in options) {
        // 目标属性值
        src = target[name];
        // 要复制的对象的属性值
        copy = options[name];

        // 解决循环引用
        if (target === copy) {
          continue;
        }

        // 要递归的对象必须是 plainObject 或者数组
        if (deep && copy && (isPlainObject(copy) ||
            (copyIsArray = Array.isArray(copy)))) {
          // 要复制的对象属性值类型需要与目标属性值相同
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];

          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          target[name] = extend(deep, clone, copy);

        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
};
/*****
 *
 *
 * 判断对象是不是空对象
 *
 * **/
const isEmpty=function (obj,key) {
  let flag=true;
  let type=typeof obj
  switch (type){
    case 'number':
      if(!isNaN(obj)){
        return false
      }
      break;
    case 'string':
      if(obj&&obj!=='undefined'){
        return false
      }
      break;
    case 'boolean':
      return false
    case 'object' :
      if(obj===null || obj==='undefined'){
        return true
      }
      let keys=Object.keys(obj);
      for(let i=0;i<keys.length;i++){
        if(key===keys[i]){
          continue
        }else{
          if(obj[keys[i]]){
            flag=false;
            break;
          }
        }
      }
      return flag
    default:
      return true
  }

}
const status={
    get(obj,key,session){
      if(!obj){
        obj=session.getItem(key)
      }
    }
}
const keepAction=function (keep,arr,fn) {
  if(keep instanceof Array){
    fn();
  }else if(typeof keep==='string'){
    let list=arr.slice(0);
    if(arr.indexOf(keep)<0){
      if(list.length<4){
        list.push(keep)
      }else{
        list.shift();
        list.push(keep)
      }
      fn(list);
    }
  }
};
function firstUpCase(str) {
  return str.charAt(0).toUpperCase()+str.substr(1);
}
const addEvent = (function(){
  if (window.addEventListener) {
    return function(el, sType, fn, capture) {
      el.addEventListener(sType, function(e) {
        fn.call(el, e);
      }, (capture));
    };
  } else if (window.attachEvent) {
    return function(el, sType, fn, capture) {
      el.attachEvent("on" + sType, function(e) {
        fn.call(el, e);
      });
    };
  }
})();

/**
 * floatObj 包含加减乘除四个方法，能确保浮点数运算不丢失精度
 *
 * 我们知道计算机编程语言里浮点数计算会存在精度丢失问题（或称舍入误差），其根本原因是二进制和实现位数限制有些数无法有限表示
 * 以下是十进制小数对应的二进制表示
 *      0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
 *      0.2 >> 0.0011 0011 0011 0011…（0011无限循环）
 * 计算机里每种数据类型的存储是一个有限宽度，比如 JavaScript 使用 64 位存储数字类型，因此超出的会舍去。舍去的部分就是精度丢失的部分。
 *
 * ** method **
 *  add / subtract / multiply /divide
 *
 * ** explame **
 *  0.1 + 0.2 == 0.30000000000000004 （多了 0.00000000000004）
 *  0.2 + 0.4 == 0.6000000000000001  （多了 0.0000000000001）
 *  19.9 * 100 == 1989.9999999999998 （少了 0.0000000000002）
 *
 * floatObj.add(0.1, 0.2) >> 0.3
 * floatObj.multiply(19.9, 100) >> 1990
 *
 */
var floatObj = function() {

  /*
   * 判断obj是否为一个整数
   */
  function isInteger(obj) {
    return Math.floor(obj) === obj
  }

  /*
   * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
   * @param floatNum {number} 小数
   * @return {object}
   *   {times:100, num: 314}
   */
  function toInteger(floatNum) {
    var ret = {times: 1, num: 0}
    var isNegative = floatNum < 0
    if (isInteger(floatNum)) {
      ret.num = floatNum
      return ret
    }
    var strfi  = floatNum + ''
    var dotPos = strfi.indexOf('.')
    var len    = strfi.substr(dotPos+1).length
    var times  = Math.pow(10, len)
    var intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10)
    ret.times  = times
    if (isNegative) {
      intNum = -intNum
    }
    ret.num = intNum
    return ret
  }

  /*
   * 核心方法，实现加减乘除运算，确保不丢失精度
   * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
   *
   * @param a {number} 运算数1
   * @param b {number} 运算数2
   * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
   * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
   *
   */
  function operation(a, b, digits, op) {
    var o1 = toInteger(a)
    var o2 = toInteger(b)
    var n1 = o1.num
    var n2 = o2.num
    var t1 = o1.times
    var t2 = o2.times
    var max = t1 > t2 ? t1 : t2
    var result = null
    switch (op) {
      case 'add':
        if (t1 === t2) { // 两个小数位数相同
          result = n1 + n2
        } else if (t1 > t2) { // o1 小数位 大于 o2
          result = n1 + n2 * (t1 / t2)
        } else { // o1 小数位 小于 o2
          result = n1 * (t2 / t1) + n2
        }
        return result / max
      case 'subtract':
        if (t1 === t2) {
          result = n1 - n2
        } else if (t1 > t2) {
          result = n1 - n2 * (t1 / t2)
        } else {
          result = n1 * (t2 / t1) - n2
        }
        return result / max
      case 'multiply':
        result = (n1 * n2) / (t1 * t2)
        return result
      case 'divide':
        result = (n1 / n2) * (t2 / t1)
        return result
    }
  }

  // 加减乘除的四个接口
  function add(a, b, digits) {
    return operation(a, b, digits, 'add')
  }
  function subtract(a, b, digits) {
    return operation(a, b, digits, 'subtract')
  }
  function multiply(a, b, digits) {
    return operation(a, b, digits, 'multiply')
  }
  function divide(a, b, digits) {
    return operation(a, b, digits, 'divide')
  }

  // exports
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }
}();
export {sizeRem,URL,extend,isEmpty,status,keepAction,firstUpCase,addEvent,floatObj}
