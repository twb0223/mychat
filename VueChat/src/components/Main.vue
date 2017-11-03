<template>
<div class="main">
    <vHead/>    
    <div class="content">
        <vLeft/>
        <vCenter/>
    </div>
</div>
</template>

<script>
import vHead from "./Head";
import vLeft from "./Left";
import vCenter from "./Center";
export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vLeft,
    vCenter
  }
};
</script>

<style scoped>
.main {
  /* height: 100%;
  width: auto; */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  padding-top: 50px;
  overflow: hidden;
}
</style>
