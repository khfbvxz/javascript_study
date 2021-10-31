// let word = '제로초';
// while(true){
//   var nextWord=prompt(word);
//   if(word[word.length-1]===nextWord[0]){
//     word=nextWord;
//     alert("맞음")
//   }else{
//     alert("끝말잇기야! 제대로 입력해!!")
//   }
// }

let word = '제로초';
for(let word = '제로초'; true;){
  var nextWord=prompt(word);
  if(word[word.length-1]===nextWord[0]){
    word=nextWord;
    alert("맞음")
  }else{
    alert("끝말잇기야! 제대로 입력해!!")
  }
}
