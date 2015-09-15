var fs = require('fs'),
    readline = require('readline');

var CommonWords = (function(){
  this.getWords = getWords;
  return {
    getWords: this.getWords
  }
})();


function getWords(callback){
  var words = []
  var wordLines = []
  var rd = readline.createInterface({
      input: fs.createReadStream(path.resolve() + '/1000-common-words.txt'),
      output: process.stdout,
      terminal: false
  });
  rd.on('line', function(line) {
    wordLine = line.split(/[ ,]+/)
    wordLines.push(wordLine);
    words.push(wordLine[1]);
  });
  rd.on('close', function() {
    callback(null, words)
  });
}

module.exports = CommonWords;
