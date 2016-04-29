new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
     todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('-');
    }
  }
})