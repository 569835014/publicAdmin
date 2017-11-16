<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "~iview/dist/styles/iview.css";
  @import "~normalize.css";
</style>
<style lang="stylus">
  #app{
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  .options{
    margin: 0 0 10px;
    .options-left{
      float: left;
      .ivu-btn{
        border-radius: 25px;
      }
    }
    .options-right{
      text-align: right;
      float: right;
      >i{
        margin-right: 10px;
        cursor: pointer;
        transition: 0.5s;
        display: inline-block;
        transform: translateY(6px);
      }
      >i:hover{
        color: rgb(51,144,255) !important;
      }
      >i:last-child{
        margin-right: 0;
      }
    }
  }
  .ivu-table-border th, .ivu-table-border td{
    border-right: none;
  }
  .ivu-table:after{
    width: 0;
  }
  .ivu-table th{
    background: white;
  }
  .ivu-table-wrapper{
    border-left: none !important;
  }
  .options{
    .ivu-input{
      border-radius: 24px;
    }
  }
</style>
