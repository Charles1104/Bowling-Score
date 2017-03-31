/*jshint esversion: 6 */

module.exports = (arr) => {

  var total = 0;

  function isStrike(){
    if (arr[i].knock1 === 10){
      return true;
    }
  }

  function isSpare(){
    if (arr[i].knock1 + arr[i].knock2 === 10){
      return true;
    }
  }

  function strikeBonus(){
    return (arr[i+1].knock1 + arr[i+1].knock2);
  }

  function spareBonus(){
    return (arr[i+1].knock1);
  }

  function lastFrameSpare(){
    if (arr[i].knock1 + arr[i].knock2 === 10 && i === 9){
      return true;
    }
  }

  function lastFrameStrike(){
    if (arr[i].knock1 === 10 && i === 9){
      return true;
    }
  }

  function lastFrameScore(){
    return arr[9].knock1 + arr[9].knock2 + arr[9].knock3;
  }

  if (!(Array.isArray(arr))){
    throw "Pass an array !!!";
  }

  if (arr.length !== 10){
    throw "Array should contain 10 elements";
  }

  for (var m = 0; m < arr.length; m++){
    if (typeof(arr[m]) !== "object"){
      throw new Error("Only objects in the array");
    }
  }

// SCORING

  for (var i = 0; i < arr.length; i++){

    if (lastFrameSpare()){
      total += lastFrameScore();
    }

    else if (lastFrameStrike()){
      total += lastFrameScore();
    }

    else if (isStrike()){
      total += 10 + strikeBonus();
    }
    else if (isSpare()){
      total += 10 + spareBonus();
    }
    else{
      for (var j = 1; j < 3  ; j++){
        total += arr[i][`knock${j}`];
      }
    }
  }
  return total;
};

