const age = 27;
function myFirstApp(name, age) {
  alert(`Привет, меня зовут ${name} и это моя первая программа!`);

  function showSkills(){
    let skills = ['html', 'css', 'js'];
    for (let i = 0; i++ ) {
      console.log(i);
    }
  }; 
  showSkills(); 

  function chekAge() {
    if (age > 18){
      console.log('У тебя отличные шансы статть фронтенд разрабом');// age > 18
    // У тебя отличные шансы статть фронтенд разрабом
  }
  chekAge();

  function calcPow(num) {
    let x = 4;
  }
  console.log(calcPow(x)); // 16
}
myFirstApp('Igar', 27);