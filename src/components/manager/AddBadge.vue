<template>
  <div>
    <div class="text-center">
      <i class="icon-add icon-heading"></i>
      <h4 class="mt-3 text-grey">Add Badge</h4>
    </div>
    <form class="mt-10">
      <label for="name">Badge Name</label>
      <input id="name" placeholder="My Badge Name" type="text" />
      <label for="name">Badge Design</label>
      <v-select id="name" :options="['Option 1', 'Option 2', 'Option 3']" placeholder="My Badge Design"></v-select>
      <div class="flex justify-end mt-6">
        <button class="btn btn-default btn-sm"><i class="icon-times"></i></button>
        <button class="btn btn-success ml-2">Save</button>
      </div>
    </form>
    <div class="badges">
      <div class="badge">
        <i class="icon-badge tag"></i>
        <div class="flex justify-end mb-3">
          <a href="">
            <i class="icon-edit text-white"></i>
          </a>
          <a href="" class="ml-2">
            <i class="icon-delete text-white"></i>
          </a>
        </div>
        <p class="text-sm">Badge Name</p>
        <p class="text-sm font-medium truncate">Mohammed Awad</p>
        <br>
        <p class="text-sm">Bage Type</p>
        <p class="text-sm font-medium truncate">2.2 In x 3.4 in (brother andr..)</p>
      </div>
    </div>
  </div>
</template>
