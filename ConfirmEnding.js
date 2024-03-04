//confirm ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  const strArr = str.split('');
  const subArr = strArr.slice(str.length - target.length,str.length).join('');

  if(subArr === target){
    return true;
  }else{
    return false;
  }

}

confirmEnding("Bastian", "n");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
confirmEnding("Open sesame", "sage");
console.log('successful');