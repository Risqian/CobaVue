<template>
  <div>
    <!-- <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div> -->

    <!-- <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-1 md:gap-6">
        <div class="mt-5 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6"> -->
              <form @submit="onSubmit">
                <div class="grid grid-cols-12 gap-6">
                  <div class="col-span-10 sm:col-span-10">
                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-700"
                      >Add Todo</label
                    >
                    <input
                      type="text"
                      v-model="title"
                      placeholder="Add Todo..."
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-2 sm:col-span-2 mt-7 text-right">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>

                  <!-- <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Country / Region</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div> -->
                </div>
              </form>
            <!-- </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>