class Dog{
    name:string
    age:number

    // construtor被称为构造函数
    // 构造函数会在对象创建时调用

    constructor(name:string,age:number){
        //在实例方法中，this就表示当前的实例
        //在构造函数中当前对象就是当前新建的那个对象
        //可以通过this向新建的对象添加属性
        this.name=name
        this.age=age
    }

    bark(){
       // alert('汪汪汪！')
       console.log(this)
    }
}
const dog=new Dog('小黑',13)
const dog1=new Dog('小白',28)
console.log(dog)
dog1.bark()