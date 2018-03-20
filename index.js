function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
}

function logWhisper(string){
  console.log('hello')
}


function sayHiToGrandma(string){
  if(string==='hello'.toLowerCase()) return("I can't hear you!")
  if(string==='HELLO'.toUpperCase()) return("YES INDEED!")
<<<<<<< HEAD
  if ('I love you, Grandma') return("I love you, too.")
}
=======
  }else if (string==='I love you, Grandma'.toLowerCase()) return("I love you, too.")
}
}
>>>>>>> 70f71b07fa66c13f18d69bd641a0429cb6cb7e43
