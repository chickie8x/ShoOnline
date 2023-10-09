<template>
  <div
    class="flex items-center duration-300"
    :class="[!display ? 'translate-x-32' : 'translate-x-[-32]']"
  >
    <span
      class="flex w-4 h-8 text-orange-800 justify-center items-center bg-white translate-x-2 rounded-tl-md rounded-bl-md text-xl cursor-pointer"
      v-html="arrow"
      @click="hiddenchannels"
    ></span>
    <ul class="py-4 px-6 bg-white rounded-tl-md rounded-bl-md text-sm text-orange-800 space-y-2">
      <li class="flex items-center space-x-1">
        <img src="@/assets/icons/fb-icon.svg" alt="" class="w-6 h-6" /><a href="">Facebook</a>
      </li>
      <li class="flex items-center space-x-1">
        <img src="@/assets/icons/discord.svg" alt="" class="w-6 h-6" /><a href="">Discord</a>
      </li>
      <li class="flex items-center space-x-1">
        <img src="@/assets/icons/youtube.svg" alt="" class="w-6 h-6" /><a href="">Youtube</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'FloatingSocialChannel',
  setup() {
    const display = ref(true)
    const arrow = computed(() => {
      if (display.value) {
        return '&#187;'
      }
      return '&#171;'
    })

    const hiddenchannels = () => {
      display.value = !display.value
    }

    return {
      arrow,
      hiddenchannels,
      display
    }
  }
}
</script>
