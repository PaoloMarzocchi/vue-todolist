const { createApp } = Vue

createApp({
    data() {
        return {
            addedItem: '',
            errorMessage: false,
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
        removeTodo(item){
            const itemIndex = this.todoList.indexOf(item);
            this.todoList.splice(itemIndex,1);
        },

        addItem(){
            if(this.addedItem.length > 2){
                let newItem = {
                    text: this.addedItem,
                    done: false
                }
                this.todoList.unshift(newItem);
                
                this.addedItem = '';
                this.errorMessage = '';
            }else{
                this.errorMessage = 'Error! Digita almeno 3 caratteri'
            }
        }
    }
}).mount('#app')
