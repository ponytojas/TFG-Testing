<template>
  <div class="flex flex-col justify-center items-center">
    <div class="absolute pb-64 top-0">
      <img
        class="w-screen max-h-screen"
        src="/images/banner-min.jpg"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
    </div>
    <div
      class="
        flex flex-row
        relative
        z-10
        bg-gray-50
        rounded-3xl
        w-8/12
        h-20
        mt-10
        shadow-xl
        justify-around
        items-center
      "
    >
      <img class="h-12 w-12 my-auto ml-6" src="/images/logo.png" />
      <p class="text-xl text-gray-800 font-light cursor-pointer">
        <a href="#home" v-smooth-scroll>Home</a>
      </p>
      <p class="text-xl text-gray-800 font-light cursor-pointer">
        <a href="#pricing" v-smooth-scroll>Pricing</a>
      </p>
      <p class="text-xl text-gray-800 font-light cursor-pointer">
        <a href="#about" v-smooth-scroll>About</a>
      </p>

      <button
        :class="[
          this.option == 'A'
            ? ['bg-blue-400', 'hover:bg-blue-600', 'text-white']
            : 'text-blue-400',
        ]"
        class="px-4 py-1 rounded-2xl cursor-pointer"
        @click="show = true"
      >
        <LockOpenOutline-icon
          :class="this.option == 'B' ? 'to-hide' : ''"
          class="text-white"
        />

        Login
      </button>
    </div>
    <p class="text-white z-10 mt-40 mb-20 font-thin" style="font-size: 7rem">
      Come to the future
    </p>
    <div
      class="flex flex-col mt-20 mb-20 w-10/12 justify-center items-center z-10"
      id="home"
    >
      <div
        class="
          w-8/12
          bg-white
          h-auto
          z-10
          rounded-lg
          shadow-2xl
          mt-64
          flex flex-row
          justify-around
        "
      >
        <div class="flex flex-col py-10 w-1/3 px-10">
          <p class="text-5xl font-thin text-center mb-6">
            <RocketLaunchOutline-icon class="text-yellow-600" />
            Fast
          </p>
          <p class="text-center text-2xl font-thin">
            Do what you usually do, but faster. Or so we hope.
          </p>
        </div>
        <div class="flex flex-col py-10 px-10 w-1/3">
          <p class="text-5xl font-thin text-center mb-6">
            <ApacheKafka-icon class="text-green-600" />
            Flexible
          </p>
          <p class="text-center text-2xl font-thin">
            More than you used to do, more than you need.
          </p>
        </div>
        <div class="flex flex-col py-10 px-10 w-1/3">
          <p class="text-5xl font-thin text-center mb-6">
            <LightbulbOutline-icon class="text-blue-600" />
            Simple
          </p>
          <p class="text-center text-2xl font-thin">
            Maybe so simple that you miss some function
          </p>
        </div>
      </div>
    </div>
    <div class="w-full">
      <p class="text-8xl text-center font-thin mt-32">Pricing</p>
    </div>
    <div
      class="
        mt-12
        mb-20
        block
        lg:flex
        lg:items-center
        lg:flex-row-reverse
        lg:mt-16
      "
      id="pricing"
    >
      <div
        class="
          bg-white
          shadow-xl
          rounded-lg
          max-w-2xl
          mx-auto
          lg:min-w-0
          lg:w-3/5
          relative
          overflow-hidden
        "
      >
        <div class="px-8 py-6 bg-grey-lighter">
          <h3
            class="
              text-blue-grey-darker
              uppercase
              tracking-wide
              text-lg
              sm:text-xl
              text-center
              font-bold
              my-0
            "
          >
            Full feature pack
          </h3>
        </div>
        <div class="px-8 pb-8 text-base md:text-lg">
          <div
            class="flex items-center justify-center text-center py-6 lg:py-4"
          >
            <span
              class="
                line-through
                opacity-75
                inline-flex
                items-center
                font-display
                text-xl
                md:text-2xl
                font-semibold
                text-grey-dark
                mr-3
                sm:mr-4
              "
              ><span class="text-xl">$</span><span>249</span></span
            ><span
              class="
                inline-flex
                items-center
                font-display
                text-5xl
                md:text-6xl
                font-bold
                text-black
                mr-3
                sm:mr-4
              "
              ><span class="text-2xl md:text-3xl">$</span><span>149</span></span
            ><span class="inline-flex justify-between flex-col mr-3 sm:mr-4"
              ><span
                class="
                  inline-flex
                  text-left
                  font-display
                  text-xl
                  md:text-2xl
                  font-bold
                  text-grey-dark
                "
                >USD</span
              ></span
            >
          </div>
          <div>
            <ul class="list-reset px-2 sm:px-6">
              <li class="flex items-start mb-4">
                <span class="mr-4 mt-1"><Tick /></span
                ><span>Your <strong>own</strong> cloud</span>
              </li>
              <li class="flex items-start mb-4">
                <span class="mr-4 mt-1"><Tick /></span
                ><span><strong>Priority</strong> support</span>
              </li>
              <li class="flex items-start mb-4">
                <span class="mr-4 mt-1"><Tick /></span
                ><span>Videotutorials with <strong>examples</strong></span>
              </li>
              <li class="flex items-start mb-4">
                <span class="mr-4 mt-1"><Tick /></span
                ><span><strong>Customize</strong> to make your style</span>
              </li>
            </ul>
            <div class="text-center mt-12">
              <nuxt-link
                :to="{ name: 'checkout', params: { price: '$149 USD', option: this.option } }"
              >
                <button
                  class="
                    block
                    w-full
                    text-xl
                    sm:text-2xl
                    bg-none
                    rounded-lg
                    focus:outline-none
                    bg-green-300
                    hover:bg-green-500
                    text-white
                    font-semibold
                    px-6
                    py-4
                    sm:py-5
                  "
                >
                  Buy 1 license now!
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          bg-white
          shadow
          rounded-lg
          mt-16
          max-w-xl
          mx-auto
          lg:max-w-full
          lg:rounded-r-none
          lg:min-w-0
          lg:w-2/5
          lg:mt-0
          overflow-hidden
        "
      >
        <div class="px-8 py-6 bg-grey-lighter">
          <h3
            class="
              text-blue-grey-darker
              uppercase
              tracking-wide
              text-xl text-center
              font-bold
              my-0
            "
          >
            The Essentials
          </h3>
        </div>
        <div class="px-8 pb-8 text-base md:text-lg">
          <div class="flex items-center justify-center text-center py-4">
            <span
              class="
                inline-flex
                items-center
                font-display
                text-4xl
                md:text-5xl
                font-bold
                text-black
                mr-2
                sm:mr-3
              "
              ><span class="text-xl md:text-2xl">$</span><span>99</span></span
            ><span class="inline-flex justify-between flex-col"
              ><span
                class="
                  inline-flex
                  text-left
                  font-display
                  text-lg
                  md:text-xl
                  font-bold
                  text-grey-dark
                "
                >USD</span
              ></span
            >
          </div>
          <div>
            <ul class="list-reset px-2 sm:px-6">
              <li class="flex items-start mb-4">
                <span class="mr-4 mt-1"><Tick /></span
                ><span><strong>Basic</strong> functions</span>
              </li>
            </ul>
            <div class="text-center mt-12">
              <nuxt-link
                :to="{ name: 'checkout', params: { price: '$99 USD', option: this.option } }"
              >
                <button
                  class="
                    w-full
                    text-lg
                    sm:text-xl
                    block
                    bg-none
                    rounded-lg
                    focus:outline-none
                    bg-pink-200
                    hover:bg-pink-500
                    text-white text-blue-grey-darker
                    font-semibold
                    px-6
                    py-3
                    sm:py-4
                  "
                >
                  Buy Now
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" class="w-6/12 mx-auto">
      <div class="w-full">
        <p class="text-8xl text-center font-thin mt-32">About us</p>
      </div>
      <Grid></Grid>
    </div>
    <Modal
      v-model="show"
      @confirm="confirm"
      @cancel="cancel"
      :option="this.option"
      :fail="this.fail"
    >
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
          v-model="user"
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
          v-model="pass"
          placeholder="🤫  sssshhh....."
        />
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Tick from "../components/Tick.vue";
import Grid from "../components/ImagesGrid.vue";

export default {
  components: { Modal, Tick, Grid },
  data: () => ({
    option: "",
    show: false,
    user: "",
    pass: "",
    fail: false,
  }),
  methods: {
    confirm() {
      console.log(this.user);
      console.log(this.pass);
      console.log(process.env.USER);
      console.log(process.env.PASS);

      this.user === process.env.USERNAME && this.pass === process.env.PASS
        ? this.$router.push("admin")
        : (this.fail = true);
    },
    cancel(close) {
      // some code...
      close();
    },
  },
  mounted() {
    this.option = this.$store.state.option;
  },
};
</script>

<style>
.bg-grey-lighter {
  --tw-bg-opacity: 1 !important;
  background-color: rgba(243, 247, 249, var(--tw-bg-opacity)) !important;
}

.to-hide {
  display: none !important;
}
</style>