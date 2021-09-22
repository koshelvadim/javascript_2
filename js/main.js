const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        isActive: true
    },
    
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.isActive = false;  
                    console.log(error);                
                })
        },
    },

    mounted() {
        console.log(this);
    },
});
