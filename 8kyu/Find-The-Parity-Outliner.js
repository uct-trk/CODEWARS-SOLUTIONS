// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier"

function findOutlier(integers){
    let even = integers.filter( e => e % 2 === 0)
    let odd = integers.filter(o => o % 2 === 1)
    return even.length === 1 ? even[0] : odd[0]
  }

  console.log(findOutlier([0, 1, 2]))
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))