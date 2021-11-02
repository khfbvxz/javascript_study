// var zero = {
//   name : "제로초",
//   height : 174,
//   kg : 68,
// }
// console.log(zero.name)

// var zero = {
//   name : "제로초",
//   eat : function eat(num=1){
//     console.log("냠냠".repeat(num));
//   },
//   kg : 68,
// }
// console.log(zero.eat(3))
// console.log(zero.name.length)

// 배열

let 배열 = [
  '사과',
  '오렌지',
  '포도',
  '딸기'
]
// for(i=0;i<배열.length;i++){
//   console.log(배열[i])
// }
// console.log(배열)

// 배열같은 객체
let 배열2 = {
  0 : '사과',
  1 : '오렌지',
  2 : '포도',
  3 : '딸기',
  length :4,
}
// for(i=0;i<배열2.length;i++){
//   console.log(배열2[i])
// }
// console.log(배열2)

// console.log(Array.isArray(배열))
// console.log(Array.isArray(배열2))

// let cond = true;
// let value = cond ? '참' : '거짓';
// console.log(value)

// let opo = [null,null,NaN, undefined];
// console.log(opo.length)

// const arr = ['가','나','다','라','마']
// arr.splice(2,0,'바')
// console.log(arr)

// const f = (x,y,z) =>{
//   const a =100;
//   return x+y+a;
// }
// console.log(f(2,3,4))

const a = { name : 'zero'};
const arr = [1,2,a];
console.log(a ===arr[2])

const arra = [1,2,3];
console.log(arra ===[1,2,3])