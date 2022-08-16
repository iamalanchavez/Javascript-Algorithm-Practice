function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  if (str === alpha) {
    return undefined;
  } else {
    let correct = alpha.slice(alpha.indexOf(str[0]), alpha.indexOf(str[0]) + str.length + 1).split("");
    let incorrect = str.split("");
    for (let i = 0; i < correct.length; i++) {
      if (incorrect.indexOf(correct[i]) === -1) {
        return correct[i];
      }
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));