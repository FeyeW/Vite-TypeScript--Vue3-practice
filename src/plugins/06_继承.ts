(function(){
   //定义一个Animal类
   class Animal{
    name:string
    age:number
    
    constructor(name:string,age:number)
    {
        this.name=name
        this.age=age
    }

    sayHello()
    {
     console.log("")
    }
   }

   //定义一个抽象类
   /* 
     以abstracta开头的类就是抽象类
       抽象类和其他类的区别不大，只是不能用来创建对象
       抽象类就是专门用来被继承的类

   */
   abstract class Animals{
    name:string
    constructor(name:string)
    {
        this.name=name
    }
    /* 
    定义一个抽象方法
    抽象方法使用 3abstract开头，没有方法体
    抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    */
   abstract sayHello():void
   }
   
   /* 
    Dong extends Animal
       - 此时，Animal被称为父类，Dog被称为子类
       - 使用继承后，子类会拥有父类所有的方法和属性
       - 通过继承可以将多个类中共有的代码写在一个父类中
          这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
          子类中可以添加父类中没有的属性和方法
          如果子类和父类的方法和属性冲突，子类将会重写父类
   
   */
   //定义一个表示狗的类
   class Dog extends Animal{
    age:number
    constructor(name:string,age:number)
    {
        super(name,age) //调用父类的构造函数
        this.age=age
    }
       run()
       {
        console.log(`${this.name}在跑...`)
       }
   }

   class Cat extends Animals{
     sayHello() {
         console.log('喵喵喵')
     }
   }

   const dog=new Dog('旺财',12)
   const cat=new Cat('咪咪')
   console.log(cat.sayHello)
})()