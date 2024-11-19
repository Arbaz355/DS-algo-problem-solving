const nonFalsyValue = (arr) => {
  return arr.filter((el) => {
    // if (el) {
    //   return el;
    // }
    return Boolean(el);
  });
};

const getNonFalsyValue = (arr) => {
    const result = [];

    for(const el of arr){
        if(el){
            result.push(el)
        }
    }

    return result;
};

// driver code
const list = [0, 2, 3, false, NaN, undefined, null, 23, 12];
const result = getNonFalsyValue(list);
console.log(result);
