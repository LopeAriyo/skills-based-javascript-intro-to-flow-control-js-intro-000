function basicTeenager(age) {
  if (age >= 13 && age <= 19){
  return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19){
  return "You are a teenager!"
}else {
  return "You are not a teenager"
}
}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
  return "You are a teenager!"
}else if (age <=12) {
    return "You are a kid"
}else if (age >= 20) {
    return "You are a grownup"
}
}

function ternaryTeenager(age){
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  switch (age) {
  case age >= 13 && age <= 19:
      return "You are a teenager"// code to be executed if case n is true
      break; // break out of switch statement once code executed
  case age < 13 && age > 19:
      return "You have an age"// code to be executed if case m is true
      break; // break out of switch statement once code executed
  default:  // all other cases
      // code to be executed if case n and case m false
}
}
