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
      selectid: ""
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
  height: 540px;

}
.msgtip {

}
</style>
