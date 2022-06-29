// 1 задание
// const x = 2  
// for (let t = 1; t<=10; t++) {
// console.log(Math.pow(x,t))
// }
// 1* задание
// let x = 2
// const exponent = function(t)  {

// console.log(Math.pow(x,t)) //ver. 1

// console.log(x**t) // ver. 2
// }

// exponent(8)


//2 задание
// let smile = [':)',':):)', ':):):)', ':):):):)', ':):):):):)' ]

// for(let i = 0; i<smile.length; i++){
//     console.log(smile[i])
// }

//2 задание.решение от Толи
// let result = ''
// let smile = ':)'
// for(let i = 1; i<6; i++){
//     console.log(result+=smile)
// }

// for(let i = 1; i<6; i++){
//     console.log(smile.repeat(i))
// }

// function smilik(str, numberOfRows){
//     for(let i = 1; i<=numberOfRows; i++){
//         result = result + str
//         console.log(result)
        
//         // console.log(str.repeat(i))
//     }
// }
// smilik(':D', 5)

// 3*
// function getWordStructure(word){
//     const volwels = 'aeiouy'.split('')
//     const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
   
//     let volwelsCount = 0;
//     let consonantsCount = 0;

//     for(const char of word.toLowerCase()){

//         // console.log(char)

//         if(volwels.includes(char)) volwelsCount++
//         else if(consonants.includes(char)) consonantsCount++
//     }
//     console.log(`В слове ${word} : ${volwelsCount} гласных и ${consonantsCount} согласных букв`)
// }


// getWordStructure('case')
// getWordStructure('Case')
// getWordStructure('Check-list')

// 3*
// function getWordStructure2(word){

//     console.log(`В слове ${word} содержится ${(word.match(/[aeiouy]/gi))?(word.match(/[aeiouy]/gi)).length : 0} 
//     гласных и ${(word.match(/[bcdfghjklmnpqrstvwxz]/gi))?(word.match(/[bcdfghjklmnpqrstvwxz]/gi)).length : 0}`)
// }

// getWordStructure2('case')
// getWordStructure2('Case')
// getWordStructure2('Check-list')


// 4*
// function isPalindrom(word){
//     word = word.toLowerCase()
//     for(let a=0, j = word.length-1; a < word.length, j>=0; a++, j--){
//         if(word[a] !== word[j]){
//                 return false
//         }
//     }
//     return true
// }
// console.log(isPalindrom('Abba'))

// 4* 
// function isPalindrom(word){
//     return word.toLowerCase() === word.toLowerCase('').split('').reverse().join('')
// }
// console.log(isPalindrom('Abba'))


// 4*
// function isPalindrom(word){
//     word = word.toLowerCase();
//     for(let i = 0; i <= word.length/2; i++){
//         if(word[i] !== word[word.length-1-i])
//         return false
//     }
//     return true
// }
// console.log(isPalindrom('Abbba'))




// 2* задание

// let smile = [ ':)',':):)', ':):):)', ':):):):)', ':):):):):)']

// const a = function printSmile(smile){
//     for(let i = 0; i<smile.length; i++){

//     console.log(smile[i])
// }
// }


// printSmile((2,5).length)












// classwork
// const arr = [
//     {name: 'Victoria'},
//     {name: 'Victoria'}, 
//     {name: 'Anatoly'}
// ]

// const vika = arr.filter(el => el.name == 'Victoria')

// console.log(vika)

// vika['name'] = 'Lena'
// console.log(arr)