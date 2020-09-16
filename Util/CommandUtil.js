  

    String.prototype.toTitleCase = function (onlyFirst) {
        const first = this.charAt(0).toUpperCase();
        const rest = (onlyFirst) ? this.substr(1) : this.substr(1).toLowerCase();
            return first + rest
    };

    String.prototype.toTitleCaseAll = function (delim, onlyFirst) {
        const d = delim || ' ';

            return this.split(d).reduce((acc, cur) => {
                if(acc == '') return cur.toTitleCase(onlyFirst);
                    return acc + d + cur.toTitleCase(onlyFirst)
            }, '');
    };

    module.exports = {
        emoji: { enabled: { true: '✅', false: '❌' },},
    };