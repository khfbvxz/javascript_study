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

console.log(Array.isArray(배열))
console.log(Array.isArray(배열2))