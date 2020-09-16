const { Listener } = require('discord-akairo');
const chalk = require('chalk');
const { longDate } = require('../../Util/Functions');

    class CommandStarted extends Listener {
        constructor() {
            super('commandStarted', {
                emitter: 'commandHandler',
                event: 'commandStarted'
            })
        }

        async exec(message, cmd, args) {
            console.log(`[ ${chalk.purple(`${longDate()}`)} ] - [ ${message.user.tag} ] executed the [ ${chalk.red(cmd)} ] command with the arguments [ ${chalk.red(args)} ]`)
        }
    }

//module.exports = CommandStarted;