function revArr() {
  let len = arrList.length;
  let revArrRes = [];

  for (i = len - 1; i > -1; i--) {
    revArrRes.push(arrList[i]);
  }
  console.log(revArrRes);
}

const arrList = ["apple", "balloon", "car", "doll", "elephant"];
revArr(arrList);
