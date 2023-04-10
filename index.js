const distanceFromHqInBlocks = (location) => {
    const hq = 42
    if(location > 42){
        return location - 42
    } else if(location < 42){
        return 42 - location
    }
}

const distanceFromHqInFeet = (location) => {
    const totalFeet = distanceFromHqInBlocks(location) * 264
    return totalFeet
}

const distanceTravelledInFeet = (start, destination) => {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)

    if(distance < 400){
        return 0
    } else if(distance > 400 && distance < 2000){
        return .02 * (distance - 400)
    } else if(distance > 2000 && distance < 2500){
        return 25
    } else if(distance > 2500){
        return "cannot travel that far"
    }
}