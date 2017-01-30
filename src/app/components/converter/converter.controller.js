class converterController {
    constructor() {
        this.name = 'converter';
        this.query = "";
    }

    translateWord(word) {
        var lowerCaseWord = word.toLowerCase();
        if (!lowerCaseWord || lowerCaseWord.match(/^[aeiou]/)) {
            return lowerCaseWord + "way";
        } else {
            return lowerCaseWord.replace(/^([^aeiouy\d\W_]+)(.*)/, '$2$1ay');
        }
    }
    convert(stringToConvert) {
        var wordsInEnglish = stringToConvert.split(/\W+/);
        var wordsInPigLatin = wordsInEnglish.map((word) => {
            return this.translateWord(word);
        });
        return wordsInPigLatin.join(" ");
    }
    onSubmit() {
        //sanity check
        if (typeof this.query === undefined || this.query === "") {
            alert("Please fill in");
        }
        let string = this.convert(this.query);
        console.log(string);
    }
}

export default converterController;
