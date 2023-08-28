
function antipod(symbol, config) {
    for (let indexConfig = 0; indexConfig < config.length; indexConfig ++) {
      if (config[indexConfig][1] === symbol)
        return config[indexConfig][0]
    }
}

module.exports = function check(str, bracketsConfig) {
  let strArr = [...str]
  let popArr = []
  popArr.push(strArr[0])
  for (let i = 1; i < strArr.length ; i ++) {
    if (popArr[popArr.length - 1] === undefined){
      popArr.push(strArr[i])
      continue
    }
    if (popArr[popArr.length - 1] === antipod(strArr[i], bracketsConfig)) {
      popArr.pop()
    } else {
      popArr.push(strArr[i])
    }
  }
  
  return popArr.length === 0 ? true : false
}
