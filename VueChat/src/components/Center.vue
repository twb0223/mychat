<template>
  <div class="center">
      <vMessage/>
      <vInput/>
  </div>
</template>

<script>
import vMessage from "./Message";
import vInput from "./Input";
export default {
  data() {
    return {};
  },
  components: {
    vMessage,
    vInput
  }
};
</script>

<style>
.center {
  /* padding-top: 50px; */
  /* display: inline; */
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1; 
  /* background-color: #dfdfdf; */
  /* color: #fafcfd; */
}
</style>