class converterController {
    constructor() {
        this.name = 'converter';
        this.query = "";
        this.queries = [];
        this.result = undefined;
    }

    translateWord(word) {
        let lowerCaseWord = word.toLowerCase();
        if (!lowerCaseWord || lowerCaseWord.match(/^[aeiou]/)) {
            return lowerCaseWord + "way";
        } else {
            return lowerCaseWord.replace(/^([^aeiouy\d\W_]+)(.*)/, '$2$1ay');
        }
    }
    convert(stringToConvert) {
        let wordsInEnglish = stringToConvert.split(/\W+/);
        let wordsInPigLatin = wordsInEnglish.map((word) => {
            return this.translateWord(word);
        });
        return wordsInPigLatin.join(" ");
    }
    onChange() {
        this.result = undefined;
    }
    updateResult(result){
      let querySize = this.queries.length;
      if(querySize > 10){
        this.queries.shift();
      }
      this.queries.push({
          "query": this.query,
          "result": resultString
      });
    }
    onSubmit() {
        //sanity check
        if (typeof this.query === undefined || this.query === "") {
            alert("Please fill in");
        }
        let resultString = this.convert(this.query);
        this.result = resultString;
        updateResult(this.result);
    }
}

export default converterController;
