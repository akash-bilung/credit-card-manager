<template>
  <div class="wrapper">
    <sidebar />
    <router-view />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: { Sidebar },
};
</script>
