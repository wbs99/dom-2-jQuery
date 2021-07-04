# 代码使用方法

```
yarn global add parcel 或者 npm i -g parcel

parcel src/index.html
```

## 链式风格

## 查
1. jQuery('#xxx') 返回值并不是元素，而是一个 api 对象
2. jQuery('#xxx').find('.red') 查找 #xxx 里的 .red 元素 
3. jQuery('#xxx').parent() 获取爸爸
4. jQuery('#xxx').children() 获取儿子
5. jQuery('#xxx').siblings() 获取兄弟
6. jQuery('#xxx').index() 获取排行老几(从0开始)
7. jQuery('#xxx').next() 获取弟弟
8. jQuery('#xxx').prev() 获取哥哥
9. jQuery('.red').each(fn) 遍历并对每个元素执行 fn
## 删
1. $div.remove() 
2. $div.empty()
## 增
1. \$ ('body')获取document.body
2. \$('body' ).append(\$ (\'\<div>1\</div>\')) 添加小儿子
3. \$('body').append(\'\<div>1\</div>\') 更方便
4. \$('body').prepend(div或\$div) 添加大儿子
5. \$('#test').after(div或 $div) 添个弟弟
6. \$ ('#test').before(div或 $div) 添个哥哥

`$('<div>1</div>')` 创建 div<br>
`$div.appendTo(document.body)` 插入到 body 中

## 改
1. $div.text(?) 读写文本内容
2. $div.html(?) 读写HTML内容
3. $div.attr('title',?) 读写属性
4. $div.css({color: 'red"}) 读写style 
5. $div.addClass('blue') / removeClass / hasClass
6. $div.on('click', fn)
7. $div.off('click', fn)
* 注意
&emsp;$div可能对应了多个div元素
