
```
var xhr = new XMLHttpRequest();
var url = '';
var fileName = 'xxx.xls';
xhr.open('GET', url, true);
xhr.responseType = 'blob';
xhr.setRequestHeader("Authorization", "onfire 13c4796fe6e03f2df77af87a851c902dd8f7c980");
xhr.setRequestHeader("admin_uid", store.getters.token);
xhr.onload = function(res) {
  if (this.status === 200) {
    var type = xhr.getResponseHeader('Content-Type'); // 与后台约定为"application/vnd.ms-excel;charset=utf-8"
    var blob = new Blob([this.response], {
      type: type
    });
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(blob, fileName); // For IE; >=IE10
    } else {
      var URL = window.URL || window.webkitURL; // For Non-IE (chrome, firefox)
      var objectUrl = URL.createObjectURL(blob);
      if (fileName) {
        var a = document.createElement('a');
        if (typeof a.download === 'undefined') {
          window.location = objectUrl;
        } else {
          a.href = objectUrl;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      } else {
        window.location = objectUrl;
      }
    }
  }
}
xhr.send();
```