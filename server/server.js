const express = require('express')
const app = express()
const cors = require('cors')

//1.解决跨域第一步，codespaces中在端口选项页（终端选项卡右侧），右键点击3000端口的可见性private，将可见性改为Public

//2.解决跨域第二步
app.use(cors({
    origin: ["*"],
    methods:["GET", "POST"]
}))

//3.解决跨域第三步
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    req.method == "OPTIONS" ? res.send(200) : next()
  });

app.get('/data', (req,res) =>{
    console.log('new request')
    res.json({name: 'shawn', favoriteFood:'Rice'})
})

app.listen(3000, ()=> console.log('Listening at port 3000...'))