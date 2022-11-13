$('#terminal').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what + '. Wellcome to this terminal.');
        // this string can be written with ES6 - uncomment to test
        // this.echo(`Hello, ${what}. Wellcome to this terminal.`);
    }
}, {
    greetings: 'My First Web Terminal'
});

