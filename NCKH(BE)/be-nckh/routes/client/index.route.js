const chatRouter = require("./chat.route");
module.exports = (app)=>{
    app.get('/', (req, res) => {
        res.send('Hello Worladd!')
    })

    app.use('/api/chat', chatRouter)

}