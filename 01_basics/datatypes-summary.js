// Primitive

// 7types : String,NUmer,Boolean,null,undefined,symbol,bigInt


const score = 100
const scoreValue =100.3
const isLoggedIn =false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const Anotherid = Symbol('123')

console.log(id===Anotherid)

const bigNumber = 345568493782n

// reference (Non primitive)

//Array,objects,functions

const heros =["shaktiman","naagraj","doga"]
let myobj={
    name:"hitesh",
    age:22,

}



const myFunction=function(){
    console.log("Hello World")
}
console.log(typeof bigNumber)



//++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive)=>copy,heap(non-primitive)=>reference

let myYoutubeName = "dhruvdotcom"

let anothername = myYoutubeName
anothername="chaiAurCode"

console.log(myYoutubeName) 
console.log(anothername)

let user ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = user
userTwo.email ="hitesh@google.com"
console.log(user.email)
console.log(userTwo.email)


