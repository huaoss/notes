```
var array = [{
        id: 1,
        name: "小明"
    },
    {
        id: 2,
        name: "小红"
    }
];
var result = array.map(o => {
    return {
        value: o.id,
        label: o.name
    }
});
console.log(result);
// result = [{
//         value: 1,
//         label: "小明"
//     },
//     {
//         value: 2,
//         label: "小红"
//     }
// ]
            
```