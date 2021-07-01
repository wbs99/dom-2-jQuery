链式风格
查

jQuery('#xxx')返回值并不是元素，而是一个api对象
jQuery('#xxx').find ('.red')查找#xxx里的.red元素
jQuery('#xxx').parent()获取爸爸
jQuery('#xxx').children()获取儿子
jQuery('#xxx').siblings()获取兄弟
jQuery('#xxx').index()获取排行老几(从O开始)
jQuery('#xxx').next()获取弟弟
jQuery('#xxx').prev()获取哥哥
jQuery('.red').each(fn)遍历并对每个元素执行fn
链式风格·删
$div.remove()

$div.empty()

链式风格·增
$ ('body')获取document.body

$('body' ).append($ ('<div>1</div>'))添加小儿子

$('body').append('<div>1</div>')更方便

$('body').prepend(div或$div)添加大儿子

$('#test').after(div或 $div)添个弟弟

$ ('#test').before(div或 $div)添个哥哥

增

$ ('<div><span>1</span></div>')

   返回值并不是新增的元素，而是api对象

$ ('<div><span>1</span></div>').appendTo(...)

   appendTo可以把新增的元素放到另一个元素里

这是一种什么感觉
   就感觉DOM是不可见的，你不需要知道DOM的任何细节，只需要使用简洁的API即可

   一个好的封装，能让使用者完全不知道内部细节

   这是通过闭包实现的

链式风格·改
$div.text(?)读写文本内容

$div.html(?)读写HTML内容

$div.attr('title',?)读写属性

$div.css({color: 'red"})读写style // $div.style更好

$div.addClass('blue') / removeClass / hasClass

$div.on('click', fn)

$div.off('click', fn)

注意
   $div可能对应了多个div元素