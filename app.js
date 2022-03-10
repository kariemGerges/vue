let app = new Vue({
    el: '#app',
    data: {
        likes:0,
        tweets: [
            {name:"kariem",
                color:"yellow22",
                cool: false
            },
            {name:"kariem2",
                color:"yellow222",
                cool: true
            },
            {name:"kariem3",
                color:"yellow222",
                cool : true
            },
        ],
        users: [],
        title: "Hello",
        form:{
            name:"",
            color:"",
            cool:true
        }
    },
    methods:{
        likeUp: function (nm) {
            this.likes = this.likes+nm
            if(this.likes>10){
                this.title = "Hello 2"
            }
        },
        submit:function () {
            this.tweets.push(this.form);
            this.form={
                name:"",
                color:"",
                cool:true
            }
        }}
})