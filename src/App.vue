<template>
  <div class="wrapper">
    <sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: { Sidebar },
};
</script>
