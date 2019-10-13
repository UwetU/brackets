module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let current;
  let bracketPosition;
  let dublicate = false;

  //создаем из двумерного массива одномерный
  bracketsConfig = bracketsConfig.reduce(
      (result, element) => result.concat(element),
      []
  );
  

  for(let i = 0; i < str.length; i++) {
    let current = str[i];
    //находим на какой позиции стоит в конфиге текущий элемент
    bracketPosition = bracketsConfig.indexOf(current); 
    //проверяем на дубликаты
    if ((dublicate == true && str[i] == '|') || (dublicate == true && str[i] == '7') || (dublicate == true && str[i] == '8')){
      bracketPosition++;
      dublicate = false;
    }

    //если встретились скобки которых нет в конфиге то false
    if(bracketPosition == -1) {
      return false;
    }

    //проверяем открывающаяся ли это скобка и добовляем ее позицию в стэк с увеличением на 1 
    //что бы при следующем заходе она ссответствовала позиции закрывающейся
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