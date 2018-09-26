<template>
  <div class="container mx-auto py-20">
    <form class="bordered-wrapper mx-auto p-5 wrapper-sm border text-center" action="">
      <h2 class="mb-2">Register</h2>
      <p class="text-sm text-grey-lighter mb-16">Tickets.sa sign up account</p>
      <div class="relative">
        <input class="input iconed" placeholder="First Name" type="text" />
        <i class="icon-user"></i>
      </div>
      <div class="relative">
        <input class="input iconed" placeholder="Last Name" type="text" />
        <i class="icon-user"></i>
      </div>
      <div class="relative">
        <input class="input iconed" placeholder="Company Name" type="text" />
        <i class="icon-briefcase"></i>
      </div>
      <div class="relative">
        <input class="input iconed" placeholder="Phone Number" type="text" />
        <i class="icon-phone2"></i>
      </div>
      <div class="relative">
        <input class="input iconed" placeholder="Email" type="text" />
        <i class="icon-mail"></i>
      </div>
      <div class="relative mb-12">
        <input class="input iconed" placeholder="Password" type="password" />
        <i class="icon-closedlock"></i>
      </div>
      <input class="btn btn-success btn-md w-full mb-3" type="submit" value="Register" />
      <p class="text-grey-sm mt-4">By creating an account, you agree to Boomset's <a class="text-green-sm underline leading-normal" href="#">Terms of Service</a> and <a class="text-green-sm underline leading-normal" href="#">Privacy Notice</a></p>
      <p class="text-grey-sm mt-8">
        Already have an account? 
        <router-link :to="{ name: 'login' }" class="text-grey-sm">Sign in</router-link>
      </p>
    </form>
  </div>
</template>
