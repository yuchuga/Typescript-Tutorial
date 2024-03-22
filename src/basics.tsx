/** DEFINE DATA TYPE **/
let ageWithType: number = 22
ageWithType = 18
// ageWithType ="eighteen"

/** BASIC TYPES **/
let testString: string
testString = "hello"

let testBoolean: boolean
testBoolean = false

/* MULTIPLE TYPES (UNION TYPES) */
let testStringOrNumber: string | number
testStringOrNumber = 10
testStringOrNumber = "10"
// testStringOrNumber = []

/** Array **/
let names = ["john", "jane", "tom"]
names.push("mike")
// names.push(3)

let numbers = [11, 22, 35]
numbers.push(92)
// numbers.push(true)

let testStringArray: string[]
testStringArray = ["one", "two", "three"]
// testStringArray = [1,2,3]

let testNumberArray: number[]
testNumberArray = [12, 55, 23]
// testNumberArray = [true, "hi", 23]

let testStringOrNumberArray: (string | number)[]
testStringOrNumberArray = [1, "two", 3]

/** OBJECTS **/
let user = {
  username: "john",
  age: 22,
  isAdmin: false
};

user.username = "jane"
user.age = 29
user.isAdmin = true
// user.age = "eighteen"
// user.isAdmin = "no"
// user.phone = "+12345678"

// DEFINE TYPE
let userObj: {
  username: string
  age: number
  isAdmin: boolean
};

userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
  // phone:"+1234567"
};

let userObj2: {
  username: string
  age: number
  isAdmin: boolean
  phone?: string
};

userObj2 = {
  username: "jane",
  age: 43,
  isAdmin: false,
  phone: "+1234567"
};

/**  ANY TYPES - CAREFUL **/ 
let testAny: any

testAny = 12
testAny = "Hello"
testAny = true
testAny = [true]
testAny = {}

let testAnyArray: any[]
testAnyArray = [1, "two", false, []]

/** FUNCTIONS **/
let sayHi = () => { //return void
  console.log("Hi, welcome")
};

let funcReturnString = (): string => {
  console.log("hi")
  return "lama dev"
};

let multiple = (num: number) => {
  return num * 2
};

let multiple2 = (num: number): number => {
  return num * 2
};

let multiple3 = (num: number): void => {
  // return num * 2   //Do sth but no return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};
sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username)
};

/** Type Alias **/
type userType = { //compare syntax with interface 
  username: string,
  age: number,
  phone?: string
};

const betterFunc = (user: userType) => {
  console.log(user.username)
};

/** Interface **/
interface IUser {
  username: string
  email: string
  age: number
};

// Extend keyword
interface IEmployee extends IUser {
  employeeId: number
};

const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1
};

/** Generics **/
interface IAuthor {
  id: number
  username: string
}

interface ICategory {
  id: number
  title: string
}

interface IPost {
  id: number
  title: string
  desc: string
  extra: IAuthor[] | ICategory[] //accept interface as value
}

interface IPostBetter<T> { //parameter T
  id: number
  title: string
  desc: string
  extra: T[]
}

const test1: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"]
}

//Parameter T constraint to object type
interface IPostEvenBetter<T extends object> {
  id: number
  title: string
  desc: string
  extra: T[]
}

const test2: IPostEvenBetter<{ id: number }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1 }]
};

const test3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "john" }]
};

const test4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }]
};
