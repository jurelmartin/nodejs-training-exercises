const buf1 = Buffer.from("Hello, welcome to Node.Js")
console.log(buf1) 

console.log(buf1[0]) //72
console.log(buf1[1]) //101
console.log(buf1[2]) //108
console.log(buf1[3]) //108

const buf2 = Buffer.from([23,78,12,9,89])
console.log(buf2) 

console.log(buf2[0]) //23
console.log(buf2[1]) //78
console.log(buf2[2]) //12
console.log(buf2[3]) //9

/*- */

// const buf = Buffer.from("Hello, welcome to Node.Js")
// console.log(buf.toString()) //Hello, welcome to Node.Js

// const buf1 = Buffer.alloc(8)
// console.log(buf1) //<Buffer 00 00 00 00 00 00 00 00>

// const buf2 = Buffer.alloc(6, 2)
// console.log(buf2) //<Buffer 02 02 02 02 02 02>

// const buf3 = Buffer.alloc(9, 3)
// console.log(buf3) //<Buffer 03 03 03 03 03 03 03 03 03>

// /*- */

// const buf1 = Buffer.alloc(8)
// buf1.write("Hello, welcome to Node.Js")

// console.log(buf1.toString())//Hello, w


/* -*/
const buf = Buffer.from("Hello, welcome to Node.Js")
const bufCopy = Buffer.alloc(26)

buf.copy(bufCopy)
console.log(bufCopy.toString()) //Hello, welcome to Node.Js

/*- */
// const buf = Buffer.from("Hello, welcome to Node.Js")

// const newBuf = buf.slice(0, 5)
// console.log(newBuf.toString()) //Hello
