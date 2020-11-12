<template>
  <div>
    <div class="box">
      function api count: {{count}}
    </div>
    <button @click="inc">functionAPI</button><br/>
  </div>
</template>
<script>
import { ref, computed, defineComponent, reactive, watchEffect } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }
    return {
      count,
      inc
    }
  }
})
</script>
<style>
.box {
  color: skyblue;
}
</style>