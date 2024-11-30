
/*let num = 33;
console.log(typeof (num))
let str = String(num);
console.log(typeof (str))
const obj = new Object();
obj.name = "trapti"
obj.age = 20

console.log(obj)

const obj = { name: "trapti", age: 20, course: "btech cse" }
console.log(obj)*/
const obj1 = { name: "trapti", age: 20, course: "btech cse" }
const obj2 = { name: "trapti1", age: 21, course: "btech cse1" }
const obj3 = { obj1, obj2 }
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.entries(obj1))

$ gpg --list-secret-keys --keyid-format=long
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot <hubot@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10


