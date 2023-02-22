const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Pyhton', '2: Rust',
'3: C++'],

answers: new Array(4).fill(0),
registerNewAnswer() {
    const  answer = Number(
        prompt(
            `${this.question}\n${this.options.join('\n')}
            \n(Write option number)`
        
        )
    );
    console.log(answer);

    typeof answer === 'number' &&
    answer < this.answers.length &&
    this.answers[answer] ++;

    this.dsiplayResults();
    this.dsiplayResults('string');

}

dsiplayResults(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    
    } else if (type === 'string'){
        console.log(`Poll results are ${this.answers.join(',')}`);

    }
    document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer. bind(poll));
}
