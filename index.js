var takeANumber =(line,newName) => {
  line.push(newName)
  return(`Welcome, ${newName}. You are number ${line.length} in line.`)
}

var nowServing = (line) => {
 if (line.length !== 0) {
 var now = line.shift()
 return `Currently serving ${now}.`
} else {
return 'There is nobody waiting to be served!'
}
}
