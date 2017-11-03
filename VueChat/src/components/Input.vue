<template>
  <div class="Msginput">
      <div class="inputbar"><p>sas</p></div>
      <div class="inputfiled" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  }
};
</script>

<style>
.Msginput {
  width: auto;
  height: 150px;
  text-indent: 10px;
  /* background-color: #dfdfdf; */
}
.inputbar {
  height: 25px;
  line-height: 25px;
  box-shadow: 0 0 10px rgba(0, 204, 204, 0.5);
}
.inputfiled {
  height: 120px;
  overflow-y: scroll;
  word-break: break-word;
  word-wrap: break-word;
  outline-style: none;
  margin-top: 2px;
}
</style>
