class Student {
    constructor(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    display() {
        console.log(this.name + " " + this.rollno);
    }
}

var obj = new Student("Sai", 100);
obj.display();

class Parent extends Student {
    constructor(name) {
        super(); // Call to parent constructor (Student)
        this.name1 = name;
    }
    display() {
        console.log(this.name1);
    }
}

var obj1 = new Parent("Boobesh");
obj1.display();

class Child extends Parent {
    constructor(name) {
        super(); // Call to parent constructor (Parent)
        this.name2 = name;
    }
    display() {
        console.log(this.name2);
    }
}

var obj2 = new Child("Bobby");
obj2.display();

class Child1 extends Child {
    constructor(name) {
        super(); // Call to parent constructor (Child)
        this.name3 = name;
    }
    display() {
        console.log(this.name3);
    }
}

var obj3 = new Child1("Mia");
obj3.display();