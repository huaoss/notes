### 传统的json数据格式
```
<script type="text/javascript">
  var json={
    name : "谭勇"
  }
  console.log(json.name);
</script>
```

### 错误的思路
```
<script type="text/javascript">
  var key = "name";
  var json = {
    key : "谭勇"
  }
  console.log(json.name);// name undefined 
</script>
```

### 正确
```
<script type="text/javascript">
  var json = {};
  json["name"] = "谭勇";
  console.log(json.name);
</script>
```

### 拓展
```
<script type="text/javascript">
  var key = "name";
  var json = {};
  json[key] = "谭勇";
  console.log(json.name);
</script>
```


# JS 对象解构时候的重命名及默认值设置

```
const obj = {
  a: 1,
  b: 2,
  c: 3
}

const { a: a1, b: b2, c: c3, d: d4 = "default" } = obj
```