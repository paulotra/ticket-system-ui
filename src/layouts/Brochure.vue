<template>
  <div class="layout brochure">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '@/components/brochure/Header'
  import AppFooter from '@/components/brochure/Footer'
  
  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
