const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [
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
    }
}).mount('#app')
