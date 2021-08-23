<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="flex justify-center items-center mt-10 rounded"
    content-class="relative flex flex-col w-1/5 max-h-full rounded-2xl bg-white mx-4 px-6 py-10 shadow-2xl"
    v-on="$listeners"
    :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-class': 'translate-y-0'
      }"
  >
    <span class="mr-8 text-2xl text-gray-800 font-bold ">
      <slot name="title"></slot>
    </span>
    <div class="flex-grow overflow-y-auto">
      <slot v-bind:params="params"></slot>
    </div>
    <div class="flex-shrink-0 flex justify-around items-center pt-4">
      <v-button class="cursor-pointer bg-green px-4 py-2 text-white bg-green-400 rounded" @click="$emit('confirm', close)">confirm</v-button>
      <v-button class="cursor-pointer text-red-500" @click="$emit('cancel', close)">cancel</v-button>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: "CustomModal",
  inheritAttrs: false,
};
</script>
