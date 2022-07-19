/* 
  使用class关键字来定义一个类

  对象中主要包含了两个部分
         属性
         方法
*/
class Person{
    /* 
     直接定义的属性是实例属性，需要通过对象的实例去访问：
        const per=new Person()
        per.name

        使用static开头的属性是静态属性（类属性），可以直接通过类名去访问属性
            Person.age

        readonly开头的属性表示一个只读的属性无法修改
        
    */

    //定义实例属性
    readonly name:string='孙悟空'

    //在属性前使用static关键字可以定义类属性（静态属性）
    static age:number=18

    //定义方法
    //如果方法以static开头则方法就是类方法，可以直接通过类去使用
    sayHello()
    {
       console.log("你好啊！")
    }

}
const per=new Person()

console.log(per)
console.log(per.name)
console.log(Person.age)
/* per.name="tom" */ //会报错
per.sayHello()

export{}