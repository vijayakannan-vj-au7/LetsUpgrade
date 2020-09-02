var flag = 0;

function textInWord(text, word) {
  let len = word.length;
  for (i = 0; i < len; i++) {
    if (text === word[i]) {
      flag += 1;
    }
  }
  if (flag > 0) {
    console.log("Yes, text " + text + " is Present in word");
  } else {
    console.log("No, text " + text + " is Not Present in word");
  }
}

textInWord("a", "letsupgrade");
