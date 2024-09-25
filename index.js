var buddyStrings = function (s, goal) {
  let greatestWord = s.length > goal.length ? s : goal;

  for (let i = 0; i < s.length; ++i) {
    let w = s[i];
    for (let y = 0; y < s.length; ++y) {
      if (i != y) {
        w += s[y];
      }
      console.log(w);
    }

    if (w == goal) {
      return true;
    }
    w = "";
  }

  return false;
};

console.log(buddyStrings("ab", "ab"));
