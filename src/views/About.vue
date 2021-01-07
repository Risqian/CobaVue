<template>
  <div id="app">
    <div class="container">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-1 md:gap-6">
          <div class="mt-5 md:col-span-2">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <AddTodo />
                <FilterTodos />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-1 md:gap-6">
          <div class="mt-5 md:col-span-2">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <Todos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from "../components/versi2/Todos.vue";
import AddTodo from "../components/versi2/AddTodo.vue";
import FilterTodos from "../components/versi2/FilterTodos.vue";

export default {
  name: "About",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
/* body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
} */
</style>
