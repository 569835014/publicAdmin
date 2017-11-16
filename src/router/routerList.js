import load from './load'
const routerList=[
  {
    path:'/home',
    name:'home',
    meta:{
      level:1,
      name:"首页",
      show:true,
      icon:'ribbon-b',
      key:'SystemSetting',//是否在导航里展示
    },
    component:load('view','Home')
  },
  {
    path:'/about',
    name:'about',
    meta:{
      level:2,
      name:"关于我们",
      show:true,
      icon:'ribbon-b',
      requireAuth:true,
      key:'SystemSetting',//是否在导航里展示
    },
    component:load('view','About')
  },
  {
    path:'/user',
    name:'user',
    meta:{
      level:3,
      name:"用户",
      show:true,
      icon:'ribbon-b',
      key:'SystemSetting',//是否在导航里展示
    },

    component:load('view','User')
  },
  {
    path:'/list',
    name:'list',
    meta:{
      level:4,
      name:"LIST",
      show:true,
      icon:'ribbon-b',
      key:'SystemSetting',//是否在导航里展示
    },
    component:load('view','List')
  },
  {
    path:'/todo',
    name:'todo',
    meta:{
      level:5,
      name:"TODO",
      show:true,
      icon:'ribbon-b',
      key:'SystemSetting',//是否在导航里展示
    },
    component:load('view','TODO')
  },
  {
    path:'/copy',
    name:'copy',
    meta:{
      level:6,
      name:"copy",
      show:true,
      icon:'ribbon-b',
      key:'SystemSetting',//是否在导航里展示
    },
    component:load('view','Coyp')
  },

]
const factory=function (children) {
  let nav=[];
  children.map((item)=>{
    if(item.meta.show){
      let obj={
        name:item.name,
        path:item.path,
        meta:item.meta,
        children:[]
      }
      if(item.children){
        item.children.map((_item)=>{
          if(_item.meta.show){
            obj.children.push(_item)
          }
        })
      }

      nav.push(obj)
    }
  })
  return nav;
};
const list=factory(routerList)
export {list};
export default routerList
