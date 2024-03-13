const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Portare il cane',
                    done: true,
                },
                {
                    text: 'Lavare i piatti',
                    done: false,
                },
                {
                    text: 'Cucinare',
                    done: true,
                },
                {
                    text: 'Pulire casa',
                    done: true,
                },
            ]
        }
    },
    methods: {
        removeTodo(index){
            this.todoList.splice(index,1)
        }
    }
}).mount('#app')
