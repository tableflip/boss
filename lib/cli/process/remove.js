var pkg = require('../../../package.json')
var each = require('../common/each')
var logger = require('winston')

module.exports = function remove (user, api, yargs) {
  var argv = yargs
    .usage('Usage: $0 remove [options] <script>')
    .demand(4)
    .example('$0 remove hello.js', 'Remove a script')

    .help('h')
    .alias('h', 'help')

    .describe('verbose', 'Prints detailed internal logging output')
    .alias('v', 'verbose')
    .boolean('v')

    .epilog('Guvnor v' + pkg.version)
    .argv

  each(api, argv._.slice(3), function (api, name, done) {
    api.process.remove(name, function (error) {
      if (error) {
        logger.error(argv.verbose ? error : error.message)
      } else {
        console.info('Process %s removed', name)
      }

      done()
    })
  })
}