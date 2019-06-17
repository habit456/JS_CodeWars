function incrementString(strng) {
  let regex = /\d+$/;
  let myStr = strng;
  let myStrNaN = "";
  let myStrNum = "";
  
  //test if string has a number at the end
  if (!regex.test(strng)) return strng + 1;
  
  //split strng between letters and numbers
  myStr = strng.split("").map( a => {
    if (Number.isNaN(Number(a))) {
      myStrNaN += a;
    } else {
      myStrNum += a;
    }
  });
  
  //determines how many 0s are before the number and how many numbers there are
  myStrNum = myStrNum.split("");
  let count0 = 0, countNum = 0, numSwitch = false;
  for (let i of myStrNum) {
    if (Number(i) === 0 && !numSwitch) {
      count0 += 1;
    } else {
      numSwitch = true;
      countNum += 1;
    }
  }
  
  /*
    Adds 1 to the number. If countNum = myStrNum.length, ez-pz.
    If not, then take a 0 away. 
  */
  myStrNum = Number(myStrNum.join("")) + 1 + "";
  let myStrNumTemp = "";
  if (myStrNum.length === countNum) {
    for (let i = 0; i < count0; i++) {
      myStrNumTemp += 0;
    }
    myStrNumTemp += myStrNum;
    myStrNum = myStrNumTemp;
  } else {
    for (let i = 0; i < count0 - 1; i++) {
      myStrNumTemp += 0;
    }
    myStrNumTemp += myStrNum;
    myStrNum = myStrNumTemp;
  }
  
  myStr = myStrNaN + myStrNum;
  return myStr;
}

console.log(incrementString("foo00100"));










