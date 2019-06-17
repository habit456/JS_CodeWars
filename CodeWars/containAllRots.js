function containAllRots(strng, arr) {
  let str = strng.concat(strng), len = strng.length, rot = "";
  for (let i=0; i<len; i++) {
    rot = str.slice(i,i+len);
    if (arr.indexOf(rot) === -1) {
      return false;
    }
  }
  return true;
}