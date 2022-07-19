// 字面量进行类型声明
let a:10
a=10
/* a=12 */ //会报错 同等于const

//可以使用｜来链接多个类型（联合类型）
let b:'male'|'female'
b='male'
b='female'

let c:boolean|string
c=true
c='hello'

//any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
/* let d:any */ //显示类型
let d //声明变量如果不指定类型，则TS解析器会自动判断变量类型为any（隐式的any）
//在TS中，不建议使用any类型
d=10
d='hello'
d=true

//unknown 表示未知类型的值
let e:unknown
e=10
e='hello'
e=true

let s:string
/* s=d */ //d的类型是any，它可以赋值给任意变量

//unknown  实际上就是给一个类型安全的any
//unknown类型的变量，不能直接赋值其他变量
if(typeof e=== "string")
{
    s=e
}

//类型断言，可以用来告诉解析器变量的实际类型
s= e as string
s=<string>e

//void 用来吧表示空，以函数为例，就表示没有返回值的函数
function fn():void{

}

//never 表示永远不会反悔结果
function fn2():never{
    throw new Error('报错了！')
}

export {}