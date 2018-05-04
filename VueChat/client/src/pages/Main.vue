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
import vHead from "@/components/Head";
import vLeft from "@/components/Left";
import vCenter from "@/components/Center";
import vFoot from "@/components/Foot";
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
  overflow: hidden;
}
.content {
  padding-top: 50px;
  height: 730px;
  overflow: hidden;
}
</style>
