<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div
      class="flex flex-col w-8/12 h-full border rounded-xl shadow-lg px-10 py-6"
    >
      <div
        class="flex flex-row w-full h-full justify-center align-middle mb-10"
      >
        <p class="text-4xl font-thin text-gray-800">Manage Stock</p>
      </div>
      <div>
        <table class="table-auto border-collaps w-full">
          <thead>
            <tr class="text-left">
              <th class="px-4 py-2 border border-green-600">ID</th>
              <th class="px-4 py-2 border border-green-600">Name</th>
              <th class="px-4 py-2 border border-green-600">Amount</th>
              <th class="px-4 py-2 border border-green-600">Price</th>
            </tr>
          </thead>
          <tbody v-for="(stock, index) in this.stocks" :key="stock.id">
            <tr>
              <td class="px-4 py-2 border border-green-600">
                {{ stock.id }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ stock.name }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ stock.amount }} {{ stock.amount === 1 ? "unit" : "units" }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ stock.price }} €
              </td>
              <td>
                <Pencil-icon
                  class="hover:text-yellow-500 cursor-pointer text-2xl pl-2"
                  @click="edit(index)"
                ></Pencil-icon>
                <Delete-icon
                  class="hover:text-red-500 cursor-pointer text-2xl pl-2"
                  @click="remove(index)"
                ></Delete-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-row justify-center items-center mt-4">
        <button
          :class="[
            option === 'A'
              ? 'bg-blue-400 text-white hover:bg-blue-700'
              : 'text-blue-500 txt-sm',
          ]"
          class="px-4 py-2 rounded-lg"
          @click="add()"
        >
          Add new item
        </button>
      </div>
      <Modal
        v-model="show"
        @confirm="confirm"
        @cancel="cancel"
        :option="this.option"
        :fail="this.fail"
      >
        <template v-slot:title class="text-white">
          {{ index === -1 ? "Adding a new item" : "Editing item" }}
        </template>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-light mt-5 text-sm mb-2"
            for="id"
          >
            ID
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
            id="id"
            type="text"
            placeholder="ID"
            v-model="stockToEdit.id"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-light mt-5 text-sm mb-2"
            for="name"
          >
            Name
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
            id="name"
            type="text"
            placeholder="Name"
            v-model="stockToEdit.name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-light mt-5 text-sm mb-2"
            for="amount"
          >
            Amount
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
            id="amount"
            type="text"
            placeholder="amount"
            v-model="stockToEdit.amount"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-light mt-5 text-sm mb-2"
            for="price"
          >
            Price
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
            id="price"
            type="text"
            placeholder="Price"
            v-model="stockToEdit.price"
          />
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import data from "../static/data.json";
import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
  data: () => ({
    stocks: data.stocks,
    show: false,
    editing: false,
    index: -1,
    stockToEdit: "",
    option: "",
    fail: false,
  }),
  methods: {
    edit(index) {
      this.index = index;
      this.stockToEdit = { ...this.stocks[index] };
      this.show = true;
    },
    add() {
      this.stockToEdit = {
        id: "",
        name: "",
        amount: "",
        price: "",
      };
      this.show = true;
    },
    remove(index) {
      this.stocks.splice(index, 1);
    },
    confirm() {
      if (this.index === -1) {
        this.stocks.push(this.stockToEdit);
      } else {
        this.stocks[this.index] = { ...this.stockToEdit };
      }
      this.show = false;
    },
    cancel(close) {
      close();
    },
  },
  beforeMount() {
    this.stocks.map((el) => {
      el.amount = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      el.price = Math.floor(Math.random() * (50 * 2 - 1 * 2) + 1 * 2) / (1 * 2);
    });
  },
  mounted() {
    this.option = this.$store.state.option;
  },
};
</script>