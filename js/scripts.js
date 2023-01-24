const { createApp } = Vue

createApp({
    data() {
      return {
        inputText: '',
        line: '',
        done: false,
        list: ['ciao', 'come', 'stai'],
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