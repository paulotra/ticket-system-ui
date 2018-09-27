<template>
  <header>
    <nav class="container relative">
      <logo :fill="'#EDEDEE'" :width="162" />
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
          <router-link class="btn btn-success text-xs" :to="{ name: 'register' }">CREATE ACCOUNT</router-link>
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
