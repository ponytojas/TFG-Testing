<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div
      class="flex flex-col w-8/12 h-full border rounded-xl shadow-lg px-10 py-6"
    >
      <div
        class="flex flex-row w-full h-full justify-center align-middle mb-10"
      >
        <p class="text-4xl font-thin text-gray-800">Manage Users</p>
      </div>
      <div>
        <table class="table-auto border-collaps w-full">
          <thead>
            <tr class="text-left">
              <th class="px-4 py-2 border border-green-600">ID</th>
              <th class="px-4 py-2 border border-green-600">Name</th>
              <th class="px-4 py-2 border border-green-600">Username</th>
              <th class="px-4 py-2 border border-green-600">Email</th>
              <th class="px-4 py-2 border border-green-600">Role</th>
            </tr>
          </thead>
          <tbody v-for="(user, index) in this.users" :key="user.id">
            <tr>
              <td class="px-4 py-2 border border-green-600">
                {{ user.id }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ user.name }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ user.username }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ user.email }}
              </td>
              <td class="px-4 py-2 border border-green-600">
                {{ user.role }}
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
        :class="[option === 'A' ? 'bg-blue-400 text-white hover:bg-blue-700' : 'text-blue-500']"
          class=" px-4 py-2 rounded-lg"
          @click="add()"
        >
          Add new user
        </button>
      </div>
      <Modal
        v-model="show"
        @confirm="confirm"
        @cancel="cancel"
        :option="this.option"
        :fail="this.fail"
      >
        <template v-slot:title class="text-white"
          >Login to your account</template
        >
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
            v-model="userToEdit.id"
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
            v-model="userToEdit.name"
          />
        </div>
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
            v-model="userToEdit.username"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-light mt-5 text-sm mb-2"
            for="email"
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
            "
            id="email"
            type="text"
            placeholder="Email"
            v-model="userToEdit.email"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-light mt-5 text-sm mb-2"
            for="role"
          >
            Role
          </label>
          <select
            class="
              shadow
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
            name="role"
            id="role"
            v-model="userToEdit.role"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
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
    users: data.users,
    stocks: data.stocks,
    show: false,
    editing: false,
    index: -1,
    userToEdit: "",
    option: "",
    fail: false
  }),
  methods: {
    edit(index) {
      this.index = index;
      this.userToEdit = { ...this.users[index] };
      this.show = true;
    },
    add() {
      this.userToEdit = {
        id: "",
        name: "",
        username: "",
        email: "",
        role: "user",
      };
      this.show = true;
    },
    remove(index) {
      this.users.splice(index, 1);
    },
    confirm() {
      if (this.index === -1) {
        this.users.push(this.userToEdit);
      } else {
        this.users[this.index] = { ...this.userToEdit };
      }
      this.show = false;
    },
    cancel(close) {
      close();
    },
  },
  mounted() {
    this.option = this.$store.state.option;
  },
};
</script>