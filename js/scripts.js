const { createApp } = Vue

createApp({
    data() {
      return {
        inputText: '',
        line: '',
        done: false,
        list: [
            {
            text: 'fare i compiti',
            done: true
            },
            {
            text: 'fare la spesa',
            done: false
            },
            {
            text: 'fare il bucato',
            done: true 
            },
        ],
      }
    },
    methods: {
        addText(){
            if(this.inputText != ''){
                this.list.push({text: this.inputText, done: false})
            }
            
            this.inputText = ''
        },
        removeList(index){
            this.list.splice(index, 1);
        },
    },
  }).mount('#app')