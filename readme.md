Test for cors

# Vue 前端 + node express后端配置跨域
## 测试环境Github Codespaces
## Vue3 前端端口5173
## node express后端端口3000
## 最新的测试显示仅仅需要两个步骤，cors包不需要
## 跨域仅仅需要两步
* 1. 在node express的后端代码中加入跨域响应头

```
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    req.method == "OPTIONS" ? res.send(200) : next()
  });
```
* 2. 在3000端口启动node express后端服务后，Github Codespaces中在端口选项页（终端选项卡右侧），右键点击3000端口的可见性private，将可见性改为Public