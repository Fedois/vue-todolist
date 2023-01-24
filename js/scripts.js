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
            done: true
            },
            {
            text: 'fare il bucato',
            done: true 
            }
        ],
      }
    },
    methods: {
        addText(){
            if(this.inputText != ''){
                this.list.push(this.inputText)
                console.log(this.list)
            }
            
            this.inputText = ''
        },
        removeList(index){
            this.list.splice(index, 1);
        },
    },
  }).mount('#app')