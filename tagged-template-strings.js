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
