<template>
  <div
    class="
      w-screen
      h-screen
      flex flex-col
      justify-center
      items-center
      bg-gray-100
    "
  >
    <div
      class="w-10/12 h-4/6 border shadow-xl rounded-lg flex flex-row bg-white"
    >
      <div
        class="
          flex flex-col
          w-1/3
          h-full
          bg-gray-100
          items-center
          justify-evenly
        "
        v-if="!finished"
      >
        <span class="text-6xl font-light text-gray-800">
          {{ $route.params.price || "100$" }}
        </span>
        <div>
          <p class="px-32 text-center text-xl font-thin">
            Enjoy your new suscription, we will automatically charge annually
            this price. Even if the price varies, we will always let you know
            and you can decide whether to keep the price or put another
          </p>
        </div>

        <div class="px-32 text-center">
          <p>Once the payment is processed you can enjoy the product</p>
        </div>
      </div>
      <div
        class="flex-flex col w-2/3 h-full justify-center items-center px-52"
        v-if="!finished"
      >
        <div class="flex flex-col h-full justify-evenly items-center">
          <div class="mb-4 h-4/6 my-40">
            <label
              :class="[this.option == 'A' ? 'text-md' : 'text-sm']"
              class="text-gray-700 font-light mt-5 mb-2 ml-1"
              for="Name and surname"
            >
              Name and surname
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
                mb-6
              "
              type="text"
              placeholder="Name and surname"
              value="Test test"
            />
            <label
              :class="[this.option == 'A' ? 'text-md' : 'text-sm']"
              class="text-gray-700 font-light mt-5 mb-2 ml-1"
              for="Name and surname"
            >
              Email
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
                mb-6
              "
              type="text"
              placeholder="Email"
              value="user@test.com"
            />
            <label
              :class="[this.option == 'A' ? 'text-md' : 'text-sm']"
              class="text-gray-700 font-light mt-5 mb-2 ml-1"
              for="Password"
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
                mb-6
              "
              type="text"
              placeholder="Password"
              value="******"
            />
            <label
              :class="[this.option == 'A' ? 'text-md' : 'text-sm']"
              class="text-gray-700 font-light mt-5 mb-2 ml-1"
              for="credit card"
            >
              <CreditCardMultipleOutline-icon></CreditCardMultipleOutline-icon>
              Card number
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
                mb-6
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              type="text"
              placeholder="Card Number"
              value="4XYZ XY0Z X0YZ XYZ8"
            />
            <label
              :class="[this.option == 'A' ? 'text-md' : 'text-sm']"
              class="text-gray-700 font-light mt-5 mb-2 mr-4"
              for="CVV"
            >
              CVV
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-20
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              type="text"
              placeholder="CVV"
              value="*2*"
            />
          </div>
          <div class="h-2/6">
            <NuxtLink class="mr-6" to="./">
              <button
                :class="[
                  this.option == 'A'
                    ? 'bg-red-200  hover:bg-red-500 text-black hover:text-white'
                    : 'bg-blue-300 hover:bg-blue-500 text-white',
                ]"
                class="px-4 py-2 rounded-3xl"
              >
                Go back
              </button>
            </NuxtLink>

            <button
              :class="[
                $route.params.option == 'A'
                  ? 'bg-blue-400 hover:bg-blue-700 text-white'
                  : 'text-blue-500',
              ]"
              class="px-4 py-2 rounded-3xl"
              @click="process()"
            >
              <span v-if="!processing">Process payment</span>
              <div class="spinner" v-if="processing">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="finished"
        class="flex flex-col justify-center items-center w-full"
      >
        <div class="flex flex-row justify-center items-center mb-10">
          <p class="text-center font-thin text-8xl text-gray-800">
            🎉 Congrats!! 🎉
          </p>
        </div>
        <div class="flex flex-row justify-center items-center mb-10">
          <p class="text-2xl text-center">
            Payment was successful. <br />
            Now, you can go back to home screen and login into your account
          </p>
        </div>
        <nuxt-link to="/"
          ><button class="px-4 py-2 bg-blue-400 text-white rounded-3xl">
            Go home and start using the app
          </button></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: String,
  },
  data: () => ({
    processing: false,
    finished: false,
    option: "",
  }),
  methods: {
    process() {
      this.processing = true;
      setTimeout(() => {
        this.processing = false;
        this.finished = true;
      }, 2500);
    },
  },
  mounted() {
    this.option = this.$store.state.option;
  },
};
</script>

<style scoped>
.spinner {
  width: 125px;
  height: 24px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #ffdb30;
  height: 100%;
  width: 3px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1s infinite ease-in-out;
  animation: sk-stretchdelay 1s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -0.9s;
}

.spinner .rect3 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>