const { createApp } = Vue

createApp({
    data() {
        return {
            addedItem: '',
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
            this.todoList.splice(index,1);
        },

        addItem(){
            
            let newItem = {
                text: this.addedItem,
                done: false
            }
            this.todoList.unshift(newItem);
            console.log(this);
            this.addedItem = '';
            
            
        }
    },
    mounted(){
        
    }
}).mount('#app')
