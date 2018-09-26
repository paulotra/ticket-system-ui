<template>
  <header>
    <nav class="container relative">
      <logo></logo>
      <div class="menu">
        <div class="items">
          <ul>
            <li>
              <a href="#">PRODUCTS</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <router-link :to="{ name: 'login' }">SIGN IN</router-link>
            </li>
          </ul>
          <span>or</span>
          <a href="" class="btn btn-success text-xs">CREATE ACCOUNT</a>
        </div>
        <button class="btn-menu ml-4">
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bot"></span>
        </button>
      </div>
    </nav>
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
