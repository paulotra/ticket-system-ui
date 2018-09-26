<template>
  <header>
    <nav class="container relative">
      <logo></logo>
      <div class="menu">
        <ul>
          <li>
            <a href="#">PRODUCTS</a>
          </li>
          <li>
            <a href="#">PRICING</a>
          </li>
          <li>
            <a href="#">SIGN IN</a>
          </li>
        </ul>
        <span>or</span>
        <a href="" class="btn btn-success text-xs">CREATE ACCOUNT</a>
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
