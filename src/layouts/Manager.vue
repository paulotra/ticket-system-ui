<template>
  <div class="layout manager">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from '@/components/manager/Header'
  
  export default {
    name: 'app',
    components: {
      AppHeader,
    }
  }
</script>
