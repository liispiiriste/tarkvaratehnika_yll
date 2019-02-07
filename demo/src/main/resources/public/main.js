var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    mounted: function () {
        let self = this
        this.$http.get("http://localhost:8080").then(function (res) {
            self.message = res.body
        })
    }
})