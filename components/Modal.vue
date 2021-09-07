<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    :click-to-close="false"
    :esc-to-close="true"
    classes="flex justify-center items-center mt-10 rounded"
    content-class="relative flex flex-col w-1/5 max-h-full rounded-2xl bg-white mx-4 px-6 py-10 shadow-2xl"
    v-on="$listeners"
    :transition="{
      'enter-active-class': 'transition duration-200 ease-in-out transform',
      'enter-class': 'translate-y-full',
      'enter-to-class': 'translate-y-0',
      'leave-active-class': 'transition duration-200 ease-in-out transform',
      'leave-to-class': 'translate-y-full',
      'leave-class': 'translate-y-0',
    }"
  >
    <span class="mr-8 text-2xl text-gray-800 font-bold">
      <slot name="title"></slot>
    </span>
    <p class="mt-4 text-red-500 text-center" :class="fail ? '': 'hidden'">
      El nombre de usuario o la contraseña son incorrectos
    </p>
    <div class="flex-grow overflow-y-auto" 
      @keyup.enter="$emit('confirm', close)"
    >
      <slot v-bind:params="params"></slot>
    </div>
    <div class="flex-shrink-0 flex justify-around items-center pt-4">
      <button
        :class="[
          option == 'B'
            ? 'text-green-500'
            : 'px-4 py-2 text-white bg-green-400 rounded order-last',
        ]"
        class="cursor-pointer"
        @click="$emit('confirm', close)"
      >
        Confirmar
      </button>
      <button
        :class="[
          option == 'B'
            ? 'bg-red-400 hover:bg-red-700 text-white px-4 py-2 rounded'
            : 'text-red-500',
        ]"
        class="cursor-pointer"
        @click="$emit('cancel', close)"
      >
        Cancelar
      </button>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: "CustomModal",
  inheritAttrs: false,
  props: {
    option: {
      type: String,
      default: "C",
    },
    fail: Boolean,
    index: {
      type: Number,
      default: -1,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
