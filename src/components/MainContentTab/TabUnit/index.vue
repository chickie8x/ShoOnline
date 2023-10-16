<template>
  <div class="space-y-4">
    <div v-for="(value, key, idx) in data" :key="idx" class="bg-white bg-opacity-40 p-2">
      <div>
        <span class="text-orange-800 text-xl">{{ value.topic }}</span>
        <div class="">
          <span>{{ value.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@vueup/vue-quill/dist/vue-quill.snow.css'
export default {
  name: 'TabUnit',

  props: {
    data: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>
