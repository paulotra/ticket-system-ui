<template>
  <div class="inner">
    <div class="sidebar">
      <add-badge />
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="flex cols flex-wrap">
          <div class="col flex-1 flex items-center">
            <i class="icon-image text-4xl text-mint"></i>
            <div class="ml-2">
              <h4 class="text-mint mb-1">Image</h4>
              <p class="text-grey">Your logo or etc.</p>
            </div>
          </div>
          <div class="col flex-1 flex items-center">
            <i class="icon-album text-4xl text-mint"></i>
            <div class="ml-2">
              <h4 class="text-mint mb-1">Schedule</h4>
              <p class="text-grey">Add Guest Schedule</p>
            </div>
          </div>
          <div class="col flex-1 flex items-center">
            <i class="icon-tracks text-4xl text-mint"></i>
            <div class="ml-2">
              <h4 class="text-mint mb-1">Session Tracks</h4>
              <p class="text-grey">Multi Session Tracks</p>
            </div>
          </div>
          <div class="col flex-1 flex items-center">
            <i class="icon-code text-4xl text-mint"></i>
            <div class="ml-2">
              <h4 class="text-mint mb-1">Code</h4>
              <p class="text-grey">V Card, QR Code, LR Code</p>
            </div>
          </div>
        </div>
        <div class="border-b border-grey-light mt-8"></div>
      </div>
      <a href="" class="self-end mt-5 btn btn-success btn-sm">Registration Types</a>
    </div>
  </div>
</template>

<script>
  import AddBadge from '@/components/manager/AddBadge'

  export default {
    components: {
      AddBadge
    }
  }
</script>
