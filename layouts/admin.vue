<template>
  <div>
    <template>
      <Push :closeOnNavigation="true">
        <span class="cursor-pointer" @click="setSelection('home')">Home</span>
        <span class="cursor-pointer" @click="setSelection('users')">Users</span>
        <span class="cursor-pointer" @click="setSelection('stock')">Stock</span>
      </Push>
    </template>
    <div
      class="
        w-screen
        px-40
        py-10
        h-auto
        min-h-screen
        flex flex-col
        justify-center
        align-middle
      "
      id="page-wrap"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { Push } from "vue-burger-menu";

export default {
  data: () => ({
    selection: "home",
  }),
  components: {
    Push, // Register your component
  },
  methods: {
    setSelection(value) {
      this.$store.commit('CHANGE_ADMIN_SELECTION',value.toUpperCase());
      Push.isOpen = false;
    },
  }
};
</script>

<style>
.bm-burger-button {
  position: fixed;
  width: 30px;
  height: 25px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 12%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>