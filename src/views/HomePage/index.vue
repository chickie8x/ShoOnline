<template>
  <div class="flex h-full">
    <div class="w-3/4 border-l-2 border-orange-950">

    </div>
    <div class="w-1/4 h-full  flex flex-col items-center p-4">
      <ServerState />
    </div>
  </div>
</template>

<script>
import ServerState from '@/components/ServerState/index.vue'
export default {
  name: 'HomeView',
  components: {
    ServerState
  }
}
</script>
