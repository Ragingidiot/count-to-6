module.exports = function average(...args) {
    var results = 0;
    args.forEach(function (value) {
        results += value;
    });

    return results / args.length;
};
