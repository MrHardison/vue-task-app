import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, { id, description, date }) {
      let tasks = state.tasks.concat()
      tasks = tasks.map(task => {
        if (task.id === id) {
          const status = new Date(date) > new Date() ? 'active' : 'outdated'
          task = { ...task, description, date, status }
        }
        return task
      })
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const index = state.tasks.findIndex(task => task.id === id)
      state.tasks[index].status = 'completed'
      console.log(state.tasks[index])
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    },
    completeTask({ commit }, task) {
      commit('completeTask', task)
    }
  },
  getters: {
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === id)
  }
})
