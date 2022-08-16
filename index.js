const headQuaters = 42;
const blocksFeet = 264;
const chargesPerFoot = 0.02;
const freeRide = 400;


function distanceFromHqInBlocks(blocks) {
  let distanceInBlocks = Math.abs(blocks - headQuaters)
  return distanceInBlocks;
}
let blocks = distanceFromHqInBlocks(43);


function distanceFromHqInFeet(location){
  let distanceInFeet = Math.abs((location - headQuaters) * blocksFeet);
  return distanceInFeet;
}
distanceFromHqInFeet(43);


function distanceTravelledInFeet(destination, start){
  let distancetravelled = Math.abs((destination - start) * blocksFeet);
  return distancetravelled
}


function calculatesFarePrice(start, destination){
  let distanceTravelledInFeet = Math.abs((destination - start) * blocksFeet);
console.log(distanceTravelledInFeet);
  if (distanceTravelledInFeet < freeRide){
    return 0;
  }
 else if (distanceTravelledInFeet > freeRide && distanceTravelledInFeet<2000){
    let farePrice = Math.abs((distanceTravelledInFeet - freeRide) * chargesPerFoot)
    return farePrice;
  } 

  else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500){
    let farePrice = 25;
    console.log(farePrice);
    return farePrice;
  }

  else if(distanceTravelledInFeet > 2500){
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(24,34));

