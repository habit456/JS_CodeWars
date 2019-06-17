function partlist(arr) {
    let result = [], empty = [], len = arr.length;
    for (let i=0; i<len - 1; i++) {
      empty.push(arr.slice(0,i+1).join(" "));
      empty.push(arr.slice(i+1,len).join(" "));
      result.push(empty);
      empty = [];
    }
    return result;
}