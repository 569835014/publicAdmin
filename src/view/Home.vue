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
          <Input  size="large" placeholder="请输入任务名称" v-model.trim="text" class="input" @keydown.enter.native="addTask"></Input>
          <div class="lists">
            <h4>任务清单</h4>
            <div>
              <Checkbox v-model="selectAll">全选</Checkbox>
            </div>
            <ul>

              <li v-for="(item,index) in list" :class="item.state?'complete':''">
                <Checkbox v-model="item.state">{{item.name}}</Checkbox>
                <Icon type="close-round" @click.native="del(index)"></Icon>
              </li>
            </ul>
            <div class="bts">
              <ButtonGroup>
                <Button v-for="(item,index) in btns" :key="index" :type="activeBtns===index?'primary':'ghost'" @click.native="switchType(index)">{{item}}</Button>
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
        oldList:[],
        list:[],
        selectAll:false,
        activeBtns:0,
        btns:['所有','完成','待办'],
      }
    },
    created(){


    },
    destroyed(){

    },
    computed:{

    },
    methods:{
      addTask(){
        this.oldList.push({
          name:this.text,
          state:false
        })
        this.list=this.oldList.slice(0)
        this.text=''
      },
      switchType(index){
        this.activeBtns=index;
        if(index===0){
          this.list=this.oldList.slice(0)
        }else if(index===1){
          this.list=this.oldList.filter((item)=>{
            return item.state===true
          })
        }else{
          this.list=this.oldList.filter((item)=>{
            return item.state===false
          })
        }
      },
      del(index){
        this.oldList.splice(index,1);
        this.list=this.oldList.slice(0)
      },

    },
    watch:{
      selectAll(newVal){
        let arr=this.oldList.slice(0)
        arr.map((item)=>{
          item.state=newVal
        })
        this.oldList=arr;
        this.list=arr
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
    .bts
      text-align right
</style>
