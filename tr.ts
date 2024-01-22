// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

//   spinWords("kusdghgd sjhajkh jksd ghsd");




type MyType = {
  name : string;
  age: number

}




interface IMyInterface {
  name : string;
  age: number
}

interface ISECOND extends MyType {
  object : MyType;
  color: string
  
}