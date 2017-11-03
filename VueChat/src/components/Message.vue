<template>
    <div class='Message'>
        <div class="msgtip">
            <p>{{selectid}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectid: "Let's go!"
    };
  },
  mounted: function() {
    const _this = this;
    eventBus.$on("selectid", function(val) {
      _this.selectid = val;
    });
  }
};
</script>

<style>
.Message {
  width: auto;
  height: 550px;
}
.msgtip {
}
</style>
