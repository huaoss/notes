## 原生：
js调用oc   

```
window.webkit.messageHandlers.myFun.postMessage();
```
 
如何回调？  
oc调js


## vue：
#### js调oc
	  		
```
goWriteOff(){
    window.webkit.messageHandlers.scan.postMessage({"name":"李舒华"});
},
getRes(e){	 
	alert(e)
  },
  goInput(e){
	alert(e)
  },
  goShare(){
  },
```
##### 暴露给OC
window.lishuhua = this

ios里@lishuhua.getRes()