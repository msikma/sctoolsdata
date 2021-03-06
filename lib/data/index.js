// sctoolsdata <https://github.com/msikma/sctoolsdata>
// © MIT license

const colorDefinitions = require('./codes')
const speedDefinitions = require('./speed')
const swatchDefinitions = require('./swatches')
const controlDefinitions = require('./control')
const tilesetDefinitions = require('./tilesets')
const gameTypeDefinitions = require('./type')

module.exports = {
  colorDefinitions,
  speedDefinitions,
  swatchDefinitions,
  controlDefinitions,
  tilesetDefinitions,
  gameTypeDefinitions,
  ...require('./tables')
}
