<template>
  <div class="Msginput">
      <div class="inputbar"><p>sas</p></div>
      <div class="inputfiled" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.Msginput {
  width: auto;
  text-indent: 10px;
  /* background-color: #dfdfdf; */
}
.inputbar {
  height: 25px;
  line-height: 25px;
   background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 204, 204, 0.5);
}
.inputfiled {
  height: 175px;
  overflow-y: scroll;
  overflow-y: auto;
  word-break: break-word;
  word-wrap: break-word;
  outline-style: none;
}
.inputfiled::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}

.inputfiled::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}

.inputfiled::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
