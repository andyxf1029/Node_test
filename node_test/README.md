#Node.js 入门

##1.什么是Node.js 
 - 服务端JavaScript
 - CommonJS 实现 
 - 它以单进程、单线程模式运行

###
 > Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices
 
 
 
## 2.Node.js 设计
 - 事件驱动
 - 模块化
 - 异步编程


### 事件驱动
Node.js中大部分的模块，都继承自Event模块
> var options = {  
     host: 'www.google.com',  
     port: 80,  
     path: '/upload',  
    method: 'POST'  
};  
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
        console.log('BODY: ' + chunk);  
    });  
});  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
// write data to request body
req.write('data\n');  
req.end();  
 
###I/O异步
![](http://www.infoq.com/resource/articles/nodejs-asynchronous-io/zh/resources/async.png)
![](http://www.infoq.com/resource/articles/nodejs-asynchronous-io/zh/resources/arch.png)

## 3.性能测试 

淘宝共享数据平台团队  
环境配置
- 物理机配置：RHEL 5.2、CPU 2.2GHz、内存4G
- Node.js应用场景：MemCache代理，每次取100字节数据
- 连接池大小：50
- 并发用户数：100
- 测试结果（socket模式）：内存（30M）、QPS（16700）、CPU（95%）



## 3.资料 

 - https://github.com/joyent/node/wiki/modules  模块List
 - http://www.nodecloud.org/
