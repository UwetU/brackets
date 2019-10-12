module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let current;
  let bracketPosition;
  let dublicate = false;

  //превращаем двумерный массив в одномерный для удобства работы
  bracketsConfig = bracketsConfig.reduce(
      (result, element) => result.concat(element),
      []
  );


  for(let i = 0; i < str.length; i++) {
    let current = str[i];
    bracketPosition = bracketsConfig.indexOf(current); //находим на какой позиции в конфиге стоит текущаю скобка
    if (dublicate == true && str[i] == '|'){
      bracketPosition++;
    }
    //проверка на то существует ли скобки в конфиге
    if(bracketPosition == -1) {
      return false;
    }

    
    if(bracketPosition % 2 == 0) {
      if (str[i] == '|'){
        dublicate = true;
      } else {
        dublicate == false;
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