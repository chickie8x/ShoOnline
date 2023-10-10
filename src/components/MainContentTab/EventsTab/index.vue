<template>
  <div>this is events tab</div>
</template>

<script>
import db from '@/firebase'

export default {
  name: 'EventsTab',
  setup() {
    console.log(db)
    return {}
  }
}
</script>
