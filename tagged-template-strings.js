console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, ...expressions) {
    let result = strings[0];

    expressions.forEach((expression, index) => {
         result += expression.replace(/&/g, '&amp;')
                             .replace(/'/g, '&apos;')
                             .replace(/"/g, '&quot;')
                             .replace(/</g, '&lt;')
                             .replace(/>/g, '&gt;')
                       + strings[index + 1];
    });

    return result;
}

/*

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}

*/
