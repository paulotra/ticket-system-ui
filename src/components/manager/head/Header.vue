<template>
  <header>
    <div class="flex items-center overflow-hidden">
      <div class="logo-wrapper">
        <logo :fill="'#FFFFFF'" :width="37" />
      </div>
      <div class="event-title truncate">
        <h4 class="text-white"><span>Tellers Events<span class="border-l border-white mx-2"></span></span>Event 1</h4>
        <input class="unique" type="text" value="Edit Event" />
      </div>
    </div>
    <div class="flex settings">
      <div class="account truncate">
        <i class="icon-user"></i>
        <p>Saud Alkahmes</p>
        <i class="icon-arrow-down"></i>
      </div>
      <div class="flex text-white items-center px-6 truncate">
        <i class="icon-time text-3xl"></i>
        <p class="pl-3">Request Now</p>
      </div>
    </div>
    <div class="btn-menu mr-5">
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bot"></span>
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Icon'

  export default {
    components: {
      Logo
    }
  }
</script>
