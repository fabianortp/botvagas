const Catho = require('./sites/catho')
const Indeed = require('./sites/indeed')
const Infojobs = require('./sites/infojobs')
const Landing = require('./sites/landing')

const [nodeVersion, scriptName, siteCode] = process.argv

let Processor = {}

switch (siteCode) {
  case 'catho':
    Processor = Object.assign({}, Catho)
    break
  case 'indeed':
    Processor = Object.assign({}, Indeed)
    break
  case 'infojobs':
    Processor = Object.assign({}, Infojobs)
    break
  case 'landing':
    Processor = Object.assign({}, Landing)
    break
  default:
    console.log('Not a recognized website')
}

Processor.run = async function () {
  let resp = await fetchData()
  console.log(resp)
}

console.log(Processor)

Processor.run()
