<template>
  <div id="app-entrance">
    <div class="mask" v-if="showMNav" @click.stop="showNav"></div>
    <header class="app-header clearfix">
      <div class="header-left header-logo">
        <!--<img src="../../assets/img/logo.png">-->
        <img src="" alt="">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGluZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9IuW6lOeUqOamguiniCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOC4wMDAwMDAsIC00MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwwIEwyLDIwIiBpZD0iTGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiw0NCBMMiw2NCIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          class="header-logo-line">
        <div class="header-logo-title">
          <h3>vue演示系统</h3>
          <h4>Intelligent speech</h4>
      </div>
      </div>
      <ul class="nav">
        <li :class="{'on':appCurrent===index}" v-for="(item,index) in list"  :key="index" @click="switchRouter(item,index)" >

          <Icon :type="item.meta.icon" class="incofont"></Icon>
          <span>{{item.meta.name}}</span>
        <li/>
      </ul>
      <div class="nav-small">
        <div class="header-nav-wrap clear">
          <Button type="primary" icon="navicon" class="button" @click.native="showNav"></Button>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGluZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9IuW6lOeUqOamguiniCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOC4wMDAwMDAsIC00MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwwIEwyLDIwIiBpZD0iTGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiw0NCBMMiw2NCIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            class="header-items-line">
        </div>
      </div>
      <div class="header-right">
        <ul>
          <li>
            <Avatar>USER</Avatar>
            <!--<img src="../../assets/img/u=1145910223,109501347&fm=27&gp=0.jpg" alt="">-->
          </li>
          <li>
            <Icon type="android-notifications"></Icon>
          </li>
          <li>
            <Icon type="android-walk" @click.native="singOut"></Icon>
          </li>
          <li>
            <Icon type="iphone"></Icon>
          </li>
        </ul>
      </div>
      <div class="header-right-small"></div>
    </header>
    <section class="app-wrap">
      <VuePerfectScrollbar class="scroll-area app-nav" :settings="settings" v-if="!isIndex" ref="navber">
        <Menu  :active-name="activeMenu" :open-names="[openName]" v-if="activeNav.length>0">
          <div v-for="(item,index) in activeNav">
            <Submenu :name="item.meta.level"  v-if="item.meta.show&&item.children.length>0" :key="index">
              <template slot="title">
                <Icon :type="item.meta.icon"></Icon>
                {{item.meta.name}}
              </template>
              <MenuItem :name="list.meta.level" v-for="(list,_index) in item.children" :key="_index" v-if="list.meta.show">
                <router-link :to="{name:list.name}" tag="div" class="nav-link">
                  <Icon :type="list.meta.icon" v-if="list.meta.icon"></Icon>
                  {{list.meta.name}}
                </router-link>
              </MenuItem>
            </Submenu>
            <MenuItem class="nav-link-li" :name="item.meta.level"  v-if="item.meta.show&&item.children.length<=0" :key="index">
              <router-link :to="{name:item.name}" tag="div" class="nav-link">
                <Icon :type="item.meta.icon" v-if="item.meta.icon"></Icon>
                {{item.meta.name}}
              </router-link>
            </MenuItem>
          </div>
        </Menu>
      </VuePerfectScrollbar>
      <!--<div class="app-filter" :style="{'left':!isIndex?'200px':'0px'}"></div>-->
      <div class="app-content" :style="{'margin-left':!isIndex?'200px':'0px'}">
        <div class="app-content-wrap" @mousemove.stop.prevent>
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {addEvent} from 'common/util/common.js'
  import {prefixStyle} from 'common/util/dom.js'
  import {list} from 'router/routerList.js'
  let transform = prefixStyle('transform')
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    name: 'app',
    data() {
      return {
        showMNav: false,
        scrollHeight: 0,
        isCalculation: false,
        settings: {
          maxScrollbarLength: 60
        },
        activeNav:list,
        indexNav:[]
      }
    },
    created() {


    },
    mounted() {
      this.$nextTick(() => {
        if (!this.isIndex) {
        }
      })
    },
    computed: {
      isIndex() {
        return this.$route.name === 'guide';
      },
      list() {
        return [
          {
            meta:{
              name:"首页",
              icon:'home'
            }


          },
          {
            meta:{
              name:"应用程序",
              icon:'stats-bars'
            },

          },
          {
            meta:{
              name:"系统设置",
              icon:'gear-b'
            },

          },
        ]
      },
      openName(){
        return 1
      },
      routerIndex(){
        let index={};

        this.list.map((item,_index)=>{
          this.factory(index,item,_index)
        })
        return index
      },
      appCurrent(){
//        return this.routerIndex[this.$route.name] ||0
        if(this.$route.name==='guide'){
          return 0
        }else{
          return this.routerIndex[this.$route.name] ||0

        }
      },
      ...mapGetters([
        'activeMenu'
      ])
    },
    methods: {
      showNav() {
        if (this.isIndex) {
          return
        }
        this.showMNav = !this.showMNav;
        let $el = this.$refs.navber.$el;
        if (this.showMNav) {
          $el.style[transform] = 'translateX(0)'
        } else {
          $el.style[transform] = 'translateX(-100%)'
        }
      },
      factory(obj,item,index){
        obj[item.name]=index
        if(item.children&&item.children.length>0) {
          item.children.map((list) => {
            this.factory(obj,list,index)
          })
        }
      },
      switchRouter(item){
        this.$router.push({
          name:item.name
        })
      },
      singOut(){
        this.$swal({
          title: '温馨提示',
          text: "是否要退出？",
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '是',
          cancelButtonText:"否"
        }).then(()=>{
          this.$router.push({
            name:'login'
          })
          this.saveUserInfo({});
        })
      },
    },
    watch: {
      activeNav(newVal){
        console.info(newVal)
      },
      nav(newVal){
        newVal.map((item,index)=>{
          this.$set(this.indexNav,index,item)
          this.$set(this.indexNav[index],'meta',item.meta);
        });
        console.info(this.indexNav)
      },
      '$route': function (newVal) {

        if (newVal.name === 'guide') {
          this.isCalculation = false
        } else if (!this.isCalculation) {
          setTimeout(() => {
//            this.implement();
          }, 50)

        }
      }
    },
    components: {
      VuePerfectScrollbar
    }
  }
</script>
<style lang="stylus">

  @import "../../assets/stylus/base.styl"
  textarea
    border-radius $border-radius
    border-color $border-color
    padding: 4px 7px !important
  .app-content-wrap
    .table-option
      margin-right 5px

  @media (max-width: 1200px)
    .app-content-wrap
      .table-option
        margin-right 5px
        /*margin-bottom 5px !important*/
        span
          display none
      /*.table-option:first-child*/
        /*margin-top 5px*/
</style>

<style lang="stylus" scoped>

  .nav-link
    width 100%
    padding 12px 20px
  .nav-link-li,.ivu-menu-submenu li
    width 100%
    padding 0 !important
    .ivu-icon
      margin-right 8px
  .nav-link-li
    .nav-link
      color: #464c5b;
      font-weight 700
  .ivu-menu-submenu li
    .nav-link
      padding: 12px 0 12px 44px;
  .mask
    position fixed
    z-index 20
    top 84px
    background rgba(0, 0, 0, 0.4)
    width 100%
    height 100%

  .ivu-menu:after
    width 0

  .content {
    width 100%;
    padding-top 3000px
  }

  .on:after
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: #4fe3c1;
    position: absolute;
    bottom: 0;
    left: 0;

  @import "../../assets/stylus/base.styl"
  textarea
    border-radius $border-radius
    border-color $border-color

  .app-header
    position fixed
    z-index 99
    width 100%
    height $top-h;
    background-color: #2b83f9;
    background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
    .nav-small
      display none
    .nav
      position: absolute;
      left: $app-left-w+ 20;
      top: 0;
      height $top-h
      li
        display: inline-block;
        margin-right: 40px;
        position: relative;
        line-height: $top-h;
        font-size: 14px;
        color: #fff;
        opacity: .69;
        cursor: pointer;
        transition: all .2s ease-in-out;
        .incofont
          display: inline-block;
          font-size: 18px;
          margin-right: 4px;
          vertical-align: middle;
      .on, li:hover
        color: #fff;
        opacity: 1;

  .header-right-small
    display none

  .header-right
    float: right;
    margin: 0 30px 0 0;
    position: relative;
    color: #fff;
    line-height 72px
    font-size: 14px;

    li
      float left
      line-height 72px
      margin-right 20px
      cursor pointer
      &:last-child
        margin-right 0
      i
        font-size 20px
      img,>span
        width 40px
        height 40px
        border-radius 50%
        transform translateY(16px)



  .header-left
    width: $app-left-w;
    height: 100%;
    float: left;
    position: relative;
    img
      width: 32px;
      height: 32px;
      position: relative;
      top: 20px;
      margin-left: 20px;
      float: left;
    .header-logo-line
      margin-left 0
    .header-logo-title

      margin-left: 82px;
      position: relative;
      top: 16px;
      h3, h4
        font-size 12px
        color: #fff;
      h4
        font-weight 400

  .app-wrap
    padding-top $top-w;
    width 100%;
    min-height 100%
    .app-nav
      width: $app-left-w;
      position: fixed;
      top: $top-h;
      left: 0;
      bottom: 0;
      z-index: 20;
      overflow-y: hidden;
      background: #fff;
      padding-top: 8px;
      border-right: 1px solid $border-color;
      .ivu-menu
        width $app-left-w - 1 !important
      .ivu-menu-submenu-title
        padding: 12px 20px;
        font-size: 12px;
        color: #464c5b;
        height: 44px;
        line-height: 20px;
        font-weight: 700;
        z-index: 2;
      .scrollbar
        background rgb(212, 216, 226);
        position absolute
        right 0;
        top 0
        width 6px;
        height 100px
        border-radius 5px
        cursor pointer
    .app-filter
      height: $app-filter-h;
      position: fixed;
      top: $top-h;
      left: $app-left-w;
      right: 0;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .2);
      z-index: 9;
      background: #fff;
    .app-content
      position: relative;
      margin-left: 200px;
      background-color: #fff;
      content(true)
      .app-content-wrap
        padding 20px
</style>
<style lang="stylus">
  @import "../../assets/stylus/base.styl"
  .ivu-icon-navicon
    font-size 24px;
    color white
    line-height 39px !important

  .app-nav
    .ivu-menu
      .ivu-menu-submenu-title
        padding: 12px 20px;
        font-size: $font-sm;
        color: #464c5b;
        height: 44px;
        line-height: 20px;
        font-weight: 700;
        z-index: 2;
      .ivu-menu-item
        padding: 12px 0 12px 44px;
        font-size: $font-sm;
        color: #657180;
        height: 44px;
        line-height: 20px;
        z-index: 2;

</style>
<style lang="stylus" scoped>

  @import "../../assets/stylus/phone.styl"
  @media (max-width: 767px)
    .table-option
      margin-right 0px
      margin-bottom 5px

    .header-logo-line {
      margin-left 0 !important
    }

    .app-header
      height ($top-h) px
      .header-left
        width: 160px;
        height: 44px;
        .header-logo-title
          margin-left: 54px;
          top: 10px;
        img
          width: 22px;
          height: 22px;
          top: 13px;
          margin-left: 12px;
        h3
          font-size 12px
        h4
          font-size 8px
      .header-right
        margin-right 12px
        height 44px
        li
          line-height 44px
          img
            width 30px
            height 30px
            transform translateY(7px)
          i
            font-size 18px
      .header-right-small
      .nav
        display block
        top 44px
        left 56px
        height 40px
        z-index 3
        li
          /*height: 39px;*/
          line-height: 39px;
          margin-right 0
          padding 0 15px
          span
            display none
        li:after
          height 2px
      .nav-small
        display block
        position: absolute;
        height 40px
        width: 100%;
        top: 44px;
        left: 0;
        border-top: 1px solid hsla(0, 0%, 100%, .2);
        .header-nav-wrap
          position absolute
          left 0;
          height 40px
          margin-right 25px
          .button
            float: left;
            width: 44px;
            line-height: 39px;
            height: 39px;
            text-align: center;
            padding: 0 0 0 4px;
            color: #657180;
            background-color: transparent;
            border-color: transparent;
        .header-items-line
          padding-top: 8px;
          width: 2px;
          height: 30px;

    .app-wrap
      .app-nav
        transform translateX(-100%);
        transition 0.5s
      .app-nav-show
        transform translateX(0);
      .app-filter
        left: $app-left-w !important;
      .app-content
        margin-left 0 !important

    .app-content-wrap
      padding 20px 10px !important

</style>
