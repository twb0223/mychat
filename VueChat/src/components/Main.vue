<template>
<div class="main">
    <vHead/>    
    <div class="content">
        <vLeft/>
        <vCenter/>
    </div>
    <vFoot/>
</div>
</template>

<script>
import vHead from "./Head";
import vLeft from "./Left";
import vCenter from "./Center";
import vFoot from "./Foot";
export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vLeft,
    vCenter,
    vFoot
  }
};
</script>

<style scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  padding-top: 50px;
  overflow: hidden;
}
</style>
