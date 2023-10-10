<template>
  <div>
    <span>list article</span>
    <div>
      {{ showdata }}
    </div>
  </div>
</template>

<script>
import { readList } from '@/firebase'
import { computed, ref } from 'vue'


export default {
  name: 'EventsTab',

  setup() {
    const path = 'ShoOnline/news/'
    
    
  
    return {
      
    }
  }
}
</script>
