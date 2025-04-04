const moveZeroes = function (nums) {
  // let temp=[]
  // let num0=[]
  // for (let i =0;i<nums.length;i++){
  //   if (nums[i] === 0 ){
  //     num0.push(0)
  //   }else temp.push(nums[i])
  // }
  // return [...temp,...num0]
  let temp
  let zeroindex = nums.length-1;
  for (let i =0;i<=zeroindex;i++){
      if (nums[i] === 0 ){
          temp = nums[i]
          for(let j = i; j<nums.length-1;j++){
            nums[j] = nums[j+1]
          }
          nums[zeroindex] = temp
        zeroindex -= 1;
      }
    }
    return nums
}


const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
