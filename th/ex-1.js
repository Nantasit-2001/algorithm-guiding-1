const moveZeroes = function (nums) {
  let temp=[]
  let num0=[]
  for (let i =0;i<nums.length;i++){
    if (nums[i] === 0 ){
      num0.push(0)
    }else temp.push(nums[i])
  }
  return [...temp,...num0]
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
