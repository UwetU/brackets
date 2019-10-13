module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let current;
  let bracketPosition;
  let dublicate = false;

  bracketsConfig = bracketsConfig.reduce(
      (result, element) => result.concat(element),
      []
  );

  for(let i = 0; i < str.length; i++) {
    let current = str[i];
    bracketPosition = bracketsConfig.indexOf(current);
    if ((dublicate == true && str[i] == '|') || (dublicate == true && str[i] == '7') || (dublicate == true && str[i] == '8')){
      bracketPosition++;
      dublicate = false;
    }

    if(bracketPosition == -1) {
      return false;
    }

    if(bracketPosition % 2 == 0) {
      if (str[i] == '|' || str[i] == '7' || str[i] == '8'){
        dublicate = true;
      }
      stack.push(bracketPosition + 1);
    } else {
      if(stack.length == 0 || stack.pop() != bracketPosition) {
        return false;
      }
    }
  }

  return stack.length == 0;
}