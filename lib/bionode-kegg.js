var through = require('through2')
var pumpify = require('pumpify')
var URL = require('url')

var kegg = exports

var APIROOT = 'http://rest.kegg.jp/'

kegg.info = function (db) {
  var stream = pumpify.obj(
    createAPIInfoURL(db),
    requestStream(true),
    createInfoObj()
  )
}

function createAPIInfoURL (db) {
  var query = APIROOT + 'info/' + db
  this.push(query)
  return stream
}

function createInfoObj () {
  var stream = through.obj(transform)
  return stream

  function transform (obj, enc, next) {
    var self = this
    var query = URL.parse(obj.url, true).query

  }
}
