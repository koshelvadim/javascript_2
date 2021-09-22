Vue.component('error', {
    data(){
        return {
            
        }
    },
    methods: {
        isClick() {
            location.reload();
        }
    },
    props: {
        // isActive: Boolean
    },

    template: `
        <div class="error">
            <div class="error__window">
                <p>Возникла ошибка при загрузке с сервера !</p>
                <button class="del-btn" v-on:click="isClick()">Перезагрузка</button>                 
            </div>
        </div>
    `
});