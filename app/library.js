module.exports = {
words: function(sentence) {
            var splitCount = sentence.split(' ').length;
            var result = [];
            var uniqueWords = [];
            var wordCount = 1;
            for (i = 0; i <= splitCount - 1; i++) {
                if (uniqueWords.indexOf(sentence.split(' ')[i]) == -1) {
                    uniqueWords.push(sentence.split(' ')[i]);

                }
            }
            for (j = 0; j <= uniqueWords.length - 1; j++) {

                    for (k = 1; k <= splitCount - 1; k++) {
                        if (uniqueWords[j] == sentence.split(' ')[k]) {
                            wordCount = wordCount + 1;
                        }
                    }
                
                    result.push((uniqueWords[j]) + ": " + wordCount);
                wordCount = 1;
            }
          
       
            return result;
        }
}