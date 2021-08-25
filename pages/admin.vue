<template>
  <div class="flex flex-col justify-center align-middle">
    <transition name="component-fade" mode="out-in">
      <component :is="adminSelection"></component>
    </transition>
  </div>
</template>

<script>
import AdminHome from "../components/AdminHome.vue";
import AdminUsers from "../components/AdminUsers.vue";
import AdminStock from "../components/AdminStock.vue";

import data from "../static/data.json";

export default {
  layout: "admin",
  components: { AdminHome, AdminUsers, AdminStock },
  data: () => ({
    users: data.users,
    stock: data.stock,
  }),
  computed: {
    adminSelection() {
      return this.$store.state.selection === "HOME"
        ? "AdminHome"
        : this.$store.state.selection === "USERS"
        ? "AdminUsers"
        : "AdminStock";
    },
  },
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>