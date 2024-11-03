const str = `
010-5435-1234
Helloloawa@lostark.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
hello everyone
aabbddeee
`

console.log(
  str.match(/(?<=@).{1,}/g)
)