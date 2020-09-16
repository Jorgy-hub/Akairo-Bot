const { Listener } = require('discord-akairo');

    class MessageListener extends Listener {
        constructor() {
            super('message', {
                emitter: 'client',
                event: 'message'
            })
        }

        async exec(message) {
            if(!message.guild) return;
        const matches = /([\w-]+={0,2})\.([\w-]+={0,2})\.([\w-]+={0,2})/g.exec(message.content);
            if(!matches) return;
        const [, botID] = matches;

            try {
                BigInt(Buffer.from(botID, 'base64').toString());

                    if(message.deleteable) await message.delete();

            } catch {

            }
        }
    }

module.exports = MessageListener;