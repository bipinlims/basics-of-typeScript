"use strict";
class User {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getPassword() {
        console.log(this.password);
        return;
    }
}
const user1 = new User("john", "john123@gmail.com", "1221321");
console.log(user1.name);
console.log(user1.getPassword());
// console.log(user1.email); cant access due to protected 
// console.log(user1.password);  cant access due to private 
class NewUser extends User {
    address;
    constructor(name, email, password, address) {
        super(email, name, password);
        this.address = address;
        this.address = address;
    }
    getEmail() {
        console.log(this.email);
    }
}
