class converterController {
  constructor() {
    this.name = 'converter';
    this.query = "";
  }
  isVowel(character) {
    var lowerCasedCharacter = character.toLowerCase();
    var vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    var isVowel = true;
		if(vowelsArray.indexOf(lowerCasedCharacter) === -1){
      isVowel = false;
    }
    return isVowel;
	};

  getFirstVowel(string) {
		if (!string || !string.length){
       return -1;
    }

		for (var i = 0; i < string.length; i++) {
			if (isVowel(string[i])){
         return i;
      }
		}

		return -1;
	};

  onSubmit() {
      //sanity check
	   if(typeof this.query === undefined || this.query === ""){
       alert("Please fill in");
     }

	}
}

export default converterController;
