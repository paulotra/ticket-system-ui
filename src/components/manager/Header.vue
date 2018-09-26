<template>
  <div>
    <header>
      <div class="flex items-center">
        <div class="logo-wrapper">
          <logo :fill="'#FFFFFF'" :width="162"></logo>
        </div>
        <div class="event-title">
          <h4 class="text-white">Tellers Events<span class="border-l border-white mx-2"></span>Event 1</h4>
          <input type="text" value="Edit Event" />
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
    <nav class="nav">
      <ul>
        <li>
          <a>
            <i class="icon-settings text-xl"></i>
            Manage
          </a>
        </li>
        <li>
          <a>
            <i class="icon-edit text-xl"></i>
            Design
          </a>
        </li>
        <li>
          <a>
            <i class="icon-chart text-xl"></i>
            Analyze
          </a>
        </li>
      </ul>
      <a href="#">Edit Event</a>
    </nav>
    <nav class="sub-nav">
      <ul>
        <li>
          <a>
            <i class="icon-badge"></i>
            Name Badge
          </a>
        </li>
        <li>
          <a>
            <i class="icon-award"></i>
            Certificates
          </a>
        </li>
        <li>
          <a>
            <i class="icon-tablet"></i>
            Kiosk Made
          </a>
        </li>
        <li>
          <a>
            <i class="icon-file"></i>
            Guest List
          </a>
        </li>
        <li>
          <a>
            <i class="icon-blog"></i>
            Events Page
          </a>
        </li>
        <li>
          <a>
            <i class="icon-artboard"></i>
            Theme
          </a>
        </li>
        <li>
          <a>
            <i class="icon-dock"></i>
            Smart Sessions
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'

  export default {
    components: {
      Logo
    }
  }
</script>
