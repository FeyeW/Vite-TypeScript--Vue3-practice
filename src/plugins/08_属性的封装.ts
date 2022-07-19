(function()
{

    //定义一个表示人的类
    class Person{
        //TS可以在属性前添加属性的修饰符
        /* 
           public 修饰的属性可以在任意位置访问（修改）默认值
           private 私有属性，只能在类内部进行访问（修改）默认值
            - 通过在类中添加方法使得私有属性可以被外部访问

        protected 受包含的属性，只能在当前类和当前子类中访问（修改）默认值
        */
       private _name:string
       private _age:number
       
       constructor(name:string,age:number)
       {
        this._name=name
        this._age=age
       }

       //TS中设置getter方法的方式
       get name()
       {
        return this._name
       }
       //TS中设置setter方法的方式
       set age(value:number)
       {
        if(value>=0)
        {
          this._age=value
        }
       }
    }
    const per=new Person('孙悟空',12)
    per.age=27

    //可以直接将属性定义在构造函数中
    class C{
        constructor(public name:string,public age:number)
        {

        }
    }
    const c=new C('xxx',12)
})()