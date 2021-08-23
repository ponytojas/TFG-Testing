<template>
  <div class="flex flex-col justify-center items-center">
    <p>Prueba</p>
    <Modal v-model="show" @confirm="confirm" @cancel="cancel">
      <template v-slot:title class="text-white">Login to your account</template>
      <div class="mb-4">
        <label
          class="block text-gray-700 font-light mt-5 text-sm mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 font-light mt-5 text-sm mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          id="password"
          type="password"
          placeholder="🤫  sssshhh....."
        />
      </div>
    </Modal>
    <v-button
      class="bg-blue-400 px-4 py-1 text-white rounded-2xl mt-10 cursor-pointer"
      @click="show = true"
      >Login</v-button
    >
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
  data: () => ({
    show: false,
  }),
  methods: {
    confirm() {
      // some code...
      this.show = false;
    },
    cancel(close) {
      // some code...
      close();
    },
  },
};
</script>
