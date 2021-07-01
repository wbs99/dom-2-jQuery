// obj.fn(p1) //this 就是 obj
// obj.fn.call(obj,p1)

/*const x = jQuery('.test')         // 不返回 elements，返回 api 对象
    .find('.child')     
    .addClass('red')    // this 就是 api
    .addClass('green')
    .addClass('blue')   // 链式操作
    .end()              // 回到 test 上，在 test 上操作
    .addClass('yellow') 

x.each((div) => {
    console.log(div)
})

x.parent('test').print()
x.children.print()*/

const $div = $('<div><span>1</span></div>')
const $childList = $('.child')
$('body').append($childList)