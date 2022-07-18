//声明一个变量a，同时指定它的类型为number
let a: number = 1
a = 2
a = 3
/* a='123' */ //此代码会报错，因为变量a的类型是number，不能赋值字符串

let b: string
b = "hello"

let c: boolean = false
c = true

//JS中的函数是不考虑参数的类型和个数的
/* function sum(a,b)
{
    return a+b
} 

console.log(sum(123,456)) //579
console.log(sum(123,'456')) //'123456'
*/

function sum(a:number,b:number):number{
    return a+b
}
sum(123,456)
/* sum(123,456,789) */ //789会报错，根据方法定义的个数进行匹配

export {}