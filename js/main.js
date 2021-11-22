var app = new Vue (
    {
        el : '#app',
        data : {
            emails : [],
        },
        mounted() {
            const self = this;
            // get 10 results
            for(let i = 0; i < 10; i++) {
                // get API content
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (apiObj){
                    const email = apiObj.data.response;
                    // save in personal array the data.response value of apiObj
                    self.emails.push(email);
                });
            }
        },
    }
)