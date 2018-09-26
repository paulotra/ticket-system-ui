<template>
  <div class="container mx-auto py-20">
    <form class="bordered-wrapper mx-auto p-5 wrapper-sm border text-center" action="">
      <h2 class="mb-2">Sign in</h2>
      <p class="text-sm text-grey-lighter mb-16">Tickets.sa sign in account</p>
      <div class="relative">
        <input class="input iconed" placeholder="Email" type="text" />
        <i class="icon-mail"></i>
      </div>
      <div class="relative">
        <input class="input iconed" placeholder="Password" type="password" />
        <i class="icon-closedlock"></i>
      </div>
      <div class="relative flex justify-between mb-12">
        <label for="remember" class="text-grey-sm checkbox round"><input id="remember" type="checkbox" /><span>Remember me</span></label>
        <a class="text-grey-sm" href="#">Forgot Password?</a>
      </div>
      <input class="btn btn-success btn-md w-full mb-3" type="submit" value="Sign in" />
      <p class="text-grey-sm mb-3">Or</p>
      <button type="button" class="btn btn-primary btn-md w-full mb-3 bg-blue-dark">
        <i class="icon-facebook mr-2"></i>
        Sign in with facebook
      </button>
      <p class="text-grey-sm">
        Dont have an account yet? 
        <router-link :to="{ name: 'register' }" class="text-grey-sm">Sign up</router-link>
      </p>
    </form>
  </div>
</template>
