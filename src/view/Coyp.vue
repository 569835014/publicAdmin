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
          <Input  size="large" placeholder="请输入任务名称" class="input" v-model="text" @keydown.enter.native="addstate"></Input>
          <div class="lists">
            <h4>任务清单</h4>
            <div>
              <Checkbox @on-change="changeAll" v-model="selectAll">全选</Checkbox>
            </div>
            <ul>
              <li v-for="(item,index) in list" :class="item.status?'complete':''">
                <Checkbox v-model="item.status" >{{item.name}}</Checkbox>
                <span @click="del(index)">X</span>
              </li>

            </ul>
            <div class="bts">
              <ButtonGroup>
                <Button v-for="(item,index) in buts">{{item}}</Button>
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
        list:[
        ],
        buts:['所有','完成','待办'],
        selectAll:false
      }
    },
    created(){


    },
    destroyed(){

    },
    computed:{

    },
    asyncComputed: {

    },
    methods:{
      addstate(){
        if(this.text==null||this.text==''){
          return;
        }
        this.list.push({
          name:this.text,
          status:false
        });
        this.text="";
      },
      changeAll(status){
        this.list.map((val)=>{
          val.status=status;
        })
      },
      del(index){
        this.list.splice(index,1);
      }
    },
    watch:{
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
        display block
        width 100%
        text-decoration:line-through
    .bts
      text-align right
</style>
