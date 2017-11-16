<template>
  <div class="hello">
    <div class="todo-list">
      <h3>TODO</h3>
      <Card>
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          知晓VUE学习系统
        </p>
        <div class="input">
          <Input  size="large" v-model.trim="text" placeholder="请输入任务名称" class="input" @keydown.enter.native="addstate"></Input>
          <div class="lists">
            <h4>任务清单</h4>
            <div>
              <Checkbox @on-change="changeAll" v-model="selectAll">全选</Checkbox>
            </div>
            <ul v-if="activeState===null">
              <li :class="item.state?'complete':''" v-for="(item,index) in list">
                <Checkbox @on-change="changeBox" v-model="item.state">{{item.name}}</Checkbox>
               <span @click="deletes(index)">删除</span>
              </li>

            </ul>
            <ul v-else>
              <li :class="item.state?'complete':''" v-for="(item,index) in list" v-if="item.state===activeState">
                <Checkbox @on-change="changeBox" v-model="item.state">{{item.name}}</Checkbox>
                <span>删除</span>
              </li>

            </ul>
            <div class="bts">
              <ButtonGroup>
                <Button v-for="(item,index) in btns" :key="index" :type="activeBts===index?'primary':'ghost'" @click="switchType(index)">{{item}}</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Card>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        text:"",
        selectAll:false,
        list:[],
        activeState:null,
        activeBts:0,
        btns:['所有','完成','待办']
      }
    },
    created(){


    },
    methods:{
      deletes(index){
        this.list.splice(index,1)
      },
      addstate(){
        if(!this.text){
          return
        }
        this.list.push({
          name:this.text,
          state:false
        })

        this.text="";
      },
      switchType(index){
        this.activeBts=index;
        if(index===0){
          this.activeState=null;
        }else if(index===1){
          this.activeState=true;
        }else{
          this.activeState=false;
        }
      },
      changeBox(state){
        if(!state){
          this.selectAll=false
        }
      },
      changeAll(state){
        let arr=this.list.slice(0);
        arr.map((item)=>{
          item.state=state
        })
      },
    },
    watch:{
      activeState(newVal){
        if(newVal===null){
          let flag=true;
          for(let i=0;i<this.list.length;i++){
            if(this.list[i].state===false){
              flag=false;
              break
            }
          }
          console.info(flag)
          this.selectAll=flag
        }else if(newVal===true){
          this.selectAll=true
        }else{
          this.selectAll=false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus">
  .todo-list
    width 800px
    margin 0 auto
    h3
      text-align center
      font-size 18px
      margin-bottom 20px
    h4
      padding 20px 0px
      text-align center
    .lists
      padding 0 20px
    li
      height 40px
      line-height 40px
      border-bottom 1px solid rgb(233,234,236)
      label,span
        font-size 16px
    .complete
      background rgb(233,234,236)
      label
        text-decoration:line-through
        display block!important
    .bts
      text-align right
</style>
