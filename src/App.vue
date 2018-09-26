<template>
  <div id="app" class="body">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/Header'
  import AppFooter from '@/components/Footer'
  
  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="sass">
  @import "./assets/scss/app.scss"
</style>
