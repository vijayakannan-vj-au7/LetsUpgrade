var flag = 0;

function eleInArr(ele, arr) {
  for (x of arr) {
    if (x === ele) {
      flag = flag + 1;
    }
  }
  if (flag > 0) {
    console.log(ele + " is present");
  } else {
    console.log(ele + " is not present");
  }
}

const arr = ["apple", "balloon", "car", "doll", "elephant"];
eleInArr("doll", arr);
