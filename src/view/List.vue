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
          <Input  size="large" placeholder="请输入任务名称" class="input"></Input>
          <div class="lists">
            <h4>任务清单</h4>
            <ul>
              <li class="complete">
                <Checkbox >任务1</Checkbox>
              </li>
              <li>
                <Checkbox >任务2</Checkbox>

              </li>
              <li>
                <Checkbox >任务3</Checkbox>

              </li>
              <li>
                <Checkbox >任务4</Checkbox>

              </li>
            </ul>
            <div class="bts">
              <ButtonGroup>
                <Button>所有</Button>
                <Button>完成</Button>
                <Button>待办</Button>
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
