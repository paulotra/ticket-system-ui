<template>
  <div class="layout manager">
    <app-header></app-header>
    <navigation></navigation>
    <badges></badges>
    <badge-template></badge-template>
    <div class="board">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/manager/head/Header'
  import Navigation from '@/components/manager/head/Navigation'
  import Badges from '@/components/manager/head/Badges'
  import BadgeTemplate from '@/components/manager/head/BadgeTemplate'
  
  export default {
    name: 'app',
    components: {
      AppHeader,
      Navigation,
      Badges,
      BadgeTemplate,
    }
  }
</script>
