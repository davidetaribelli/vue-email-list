const { createApp } = Vue

  createApp({
    data() {
      return {
        emailRandom:'https://flynn.boolean.careers/exercises/api/random/mail',
        emailArray: [],
        buttonClick: false,
      }
    },
    methods:{
        pushArray(){
            for (let i = 0; i < 10; i++) {
                axios.get(this.emailRandom).then((emailR) => {
                    const email = emailR.data.response
                    this.emailArray.push(email);
                }); 
            }
            this.buttonClick = true;
        },
    },
    mounted(){
  
    }
  }).mount('#app')