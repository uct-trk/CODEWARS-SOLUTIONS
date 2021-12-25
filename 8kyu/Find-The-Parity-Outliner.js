// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier"

function findOutlier(integers){
    let even = integers.filter( e => e % 2 === 0)
    let odd = integers.filter(o => o % 2 === 1)
    return even.length === 1 ? even[0] : odd[0]
  }

  console.log(findOutlier([41728448,19166562, -128459032, -27686964, -23232494, 180673180, -175618672, -195423940, 173612930, -2692768,91611998, -137763402, -49223152, -72617428,144197272, -159602765, -89562418,48778556,53091654, -49671992, -166259128,57522080, -138251322,108323276]))
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
  console.log(findOutlier([160, 3, 1719, 19, 11, 13,  -21]))

  // gerçek çözüm
  function findOutlier(integers){
    return integers.slice(0,3).filter(even).length >= 2 ?
      integers.find(odd) : integers.find(even)
   }
   
   function even(num){
     return (num % 2 === 0);
   }
   
   function odd(num){
     return !even(num)
   }