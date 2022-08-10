wxml

```
<view bindtouchstart="touchStart" bindtouchmove="touchMove" bindtouchend="touchEnd"></view>    
```

js

```
var startX = 0;
var startY = 0;
var touchTime = 0;
var touchInterval = "";

onLoad(){
    this._leftAble = true;
}

// 触摸开始事件 
    touchStart: function (e) {
      // 获取触摸时的原点 
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
      // 使用js计时器记录时间  
      touchInterval = setInterval(function () {
        time++;
      }, 100);
    },
    // 触摸移动事件 
    touchMove: function (e) {
      let endX, endY;
      endX = e.changedTouches[0].pageX;
      endY = e.changedTouches[0].pageY;
      let direction = this.getSlideDirection(startX, startY, endX, endY);
      switch (direction) {
        // case 0:
        //   console.log("没滑动");
        //   break;
        // case 1:
        //   console.log("上");
        //   break;
        // case 2:
        //   console.log("下");
        //   break;
        case 3:
          // console.log("左");
          // console.log(endX);
          // console.log(startX);
          // console.log(endX - startX);
          if (endX - startX <= -120 && this._leftAble){
            this.goUserLiveList();
            // 一秒内不可重复触发
            this._leftAble = false;
            setTimeout(() => { this._leftAble = true;},1000)
          }
          break;
        // case 4:
        //   console.log("右");
        //   break;
      };
      // var touchMove = e.touches[0].pageX;
      // // 向左滑动  
      // if (touchMove - touchDot <= -120 && 2 < time < 20 && this._leftAble) {
      //   this.goUserLiveList();
      //   // 一秒内不可重复触发
      //   this._leftAble = false;
      //   setTimeout(() => { this._leftAble = true;},1000)
      // }
    },
    // 触摸结束事件 
    touchEnd: function (e) {
    //   clearInterval(touchInterval); // 清除setInterval 
    //   time = 0;
    },
    
    // 计算移动角度
    getSlideAngle(dx, dy) {
      return Math.atan2(dy, dx) * 180 / Math.PI;
    },
    // 判断移动方向
    getSlideDirection(startX, startY, endX, endY) {
      let dy = startY - endY;
      let dx = endX - startX;
      let result = 0;
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) return result
      let angle = this.getSlideAngle(dx, dy)
      if (angle >= -45 && angle < 45) return 4
      if (angle >= 45 && angle < 135) return 1
      if (angle >= -135 && angle < -45) return 2
      if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) return 3
    },
```

