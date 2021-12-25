let number = [1,2,3,4,5,6,7,8,9,10]
function solution(number){
    let sum = 0
    for (let i = 1; i < number.length; i ++){
           if(i % 3 === 0 || i % 5 === 0){
           sum += i
          
           console.log(sum)
           }
       }
   return sum
  }
  solution(number)