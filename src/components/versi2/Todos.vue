<template>
  <div>
    <h3 class="text-2xl font-bold leading-tight text-gray-900">List Todos</h3>

    <div class="shadow overflow-hidden sm:rounded-md mt-2">
      <div class="px-4 py-5 bg-gray-100 space-y-6 sm:p-6">
        <div class="grid grid-cols-12 gap-6">
          <div
            class="col-span-2 col-start-5 col-end-8 sm:col-span-2 sm:col-start-5 sm:col-end-8"
          >
            <legend class="text-base font-medium text-gray-900">
              Double click to mark as complete
            </legend>
          </div>
          <div
            class="col-span-2 col-end-10 sm:col-span-2 sm:col-end-10 text-right"
          >
            <span>
              <span class="incomplete-box"></span>
              <label for="comments" class="font-medium text-gray-700">
                = Incomplete
              </label>
            </span>
          </div>
          <div
            class="col-span-2 col-end-12 sm:col-span-2 sm:col-end-12 text-right"
          >
            <span>
              <span class="complete-box"></span>
              <label for="comments" class="font-medium text-gray-700">
                = Complete
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="todos grid grid-cols-3 gap-4 mt-3">
      <div
        @click="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo col-span-3 sm:col-span-1"
        v-bind:class="{ 'is-completed': todo.completed }"
      >
        <label for="comments" class="font-medium text-gray-900">
          {{ todo.title }}
        </label>

        <div class="flex-shrink-0 icon hover:bg-gray-700 focus:outline-none" @click="deleteTodo(todo.id)">
          <div
            class="flex rounded-md text-white"
          >
            <!-- Heroicon name: globe-alt -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </div>
        </div>

        <!-- <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      console.log("hayuuk");
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
/* .todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
} */

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-completed {
  background: #35495e;
  color: #fff;
}

.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
  border-radius: 30%;
}

/* @media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
} */
</style>