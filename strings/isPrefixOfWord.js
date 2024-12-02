var isPrefixOfWord = function(sentence, searchWord) {
    let index = 0;
    for(const word of sentence.split(' ')) {
        const matches = word.startsWith(searchWord);
        if(matches) return index + 1;
        index++;
    }
    return -1;
};