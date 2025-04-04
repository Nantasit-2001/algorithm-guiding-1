const romanToInt = function (s) {
  const roman = { I:1,
                  V:5,
                  X:10,
                  L:50,
                  C:100,
                  D:500,
                  M:1000,
  }
  const tempRomanValue = []
  for(let i =0 ;i<s.length;i++){
    if (roman[s[i+1]] > roman[s[i]]){
      tempRomanValue.push(roman[s[i+1]]-roman[s[i]])
      i+=1
    }
   else {tempRomanValue.push(roman[s[i]])}
  }
  return (tempRomanValue.reduce((value,ccs)=>ccs+=value))
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
