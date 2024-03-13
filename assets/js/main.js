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
        removeTodo(index){
            this.todoList.splice(index,1);
        },

        addItem(){
            if(this.addedItem.length > 2){
                let newItem = {
                    text: this.addedItem,
                    done: false
                }
                this.todoList.unshift(newItem);
                console.log(this);
                this.addedItem = '';
                this.errorMessage = '';
            }else{
                this.errorMessage = 'Error! Digita almeno 3 caratteri'
            }
        }
    },
    mounted(){
        
    }
}).mount('#app')
