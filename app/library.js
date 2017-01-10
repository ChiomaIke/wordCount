module.exports = {
 words: function(sentence){
	var array_words = sentence.split(/\s+/);
		  
	var res_words = {};    
	var is_prop = false;
		  
	for(var i = 0; i < array_words.length; i++) {
		var word = array_words[i];
			
		  if(res_words[word] != null) {
			if (typeof res_words[word] != 'number'){ /** if returned value is not a number, set the value to 1 */
				res_words[word] = 1;
			}else{					 
			    res_words[word] += 1;
			}
			} else {
			  res_words[word] = 1;				   
			}	 
		}
		return res_words;
	}
}