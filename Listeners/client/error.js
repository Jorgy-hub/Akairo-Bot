const { Listener } = require('discord-akairo');

    class ErrorListener extends Listener {
        constructor() {
            super('error', {
                emitter: 'client',
                event: 'error'
            })
        }

        exec(err) {
            console.error(err);
        }
    }

module.exports = ErrorListener;