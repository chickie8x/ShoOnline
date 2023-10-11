<template>
  <div class="space-y-4">
    <div v-for="value, key, idx in data" :key="idx" class="bg-white bg-opacity-40 ">
      <div>
        <span>{{ value.articleTitle }}</span>
        <div class="ql-snow">
          <div class="ql-editor" v-html="value.articleContent">
          </div>
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
  },
}
</script>
