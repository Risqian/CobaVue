<template>
  <div>
    <!-- Filter Todos
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select> -->

    <div class="grid grid-cols-12 gap-6 mt-10">
      <div class="col-span-6 sm:col-span-3">
        <label for="country" class="block text-sm font-medium text-gray-700"
          >Filter Todos</label
        >
        <select
          id="country"
          name="country"
          autocomplete="country"
          @change="filterTodos($event)"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
};
</script>

<style scoped>
/* select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
} */
</style>