// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks
  }
}

function distanceFromHqInFeet(blocks) {
  const feet = distanceFromHqInBlocks(blocks) * 264;
  return feet
}

function distanceTravelledInFeet(start, destination) {
  const block = 264
    if (start < destination) {
    return (destination - start) * block;
  } else {
    return (start - destination) * block;
  }
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) {
      return 0;
    } else if (feet > 400 && feet <= 2000 ) {
      return feet * .02;
    } else if (feet > 2000 && feet <=2500) {
      return 25;
    } else {
      return 'cannot travel that far';

    }
}
