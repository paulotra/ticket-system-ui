<template>
  <header>
    <div class="flex items-center">
      <div class="logo-wrapper">
        <logo :fill="'#FFFFFF'" :width="162"></logo>
      </div>
      <div class="event-title">
        <h4 class="text-white">Tellers Events<span class="border-l border-white mx-2"></span>Event 1</h4>
        <input class="unique" type="text" value="Edit Event" />
      </div>
    </div>
    <div class="flex">
      <div class="account">
        <i class="icon-user"></i>
        <p>Saud Alkahmes</p>
        <i class="icon-arrow-down"></i>
      </div>
      <div class="flex text-white items-center px-6">
        <i class="icon-time text-3xl"></i>
        <p class="pl-3">Request Now</p>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Logo'

  export default {
    components: {
      Logo
    }
  }
</script>
