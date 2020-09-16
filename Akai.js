const { AkairoClient, CommandHandler, ListenerHandler, ClientUtil, Command, SQLiteProvider } = require('discord-akairo');
const { config } = require('dotenv');
const sqlite = require('sqlite');
const BotColors = require('./Util/Colors');
    config();

    class AkaiClient extends AkairoClient {
        constructor() {
            super({ ownerID: '535585397435006987' }, { disableEveryone: true })

                this.commandHandler = new CommandHandler(this, {
                    allowMention: true,
                    prefix: 'xd!',
                    classToHandle: Command,
                    commandUtil: true,
                    handleEdits: true,
                    argumentDefaults: {
                        prompt: {
                            modifyStart: (message, str) => `${message.author}, ${str}\n\nType: \`cancel\` to cancel the command...`,
                            modifyRetry: (message, str) => `${message.author}, ${str}\n\nType: \`cancel\` to cancel the command...`,
                            cancel: `You have cancelled the command successfully.`,
                            timeout: 'Your time has ran out. Command was cancelled...',
                            ended: 'You took too many tries. Command was cancelled...',
                            retries: 4,
                            time: 30000,
                        },
                        otherwise: ""
                    },
                    ignoreCooldown: this.ownerID,
                    ignorePermissions: this.ownerID,
                    automateCategories: true,
                    defaultCooldown: 2000,
                    commandUtilLifetime: 300000,
                    directory: './Commands/'
                });

                this.listenerHandler = new ListenerHandler(this, {
                    directory: './Listeners/',
                });

                this.colors = BotColors;
                this.util = new ClientUtil(this)
                this.commandHandler.useListenerHandler(this.listenerHandler);
                this.commandHandler.loadAll();
                this.listenerHandler.setEmitters({
                    commandHandler: this.commandHandler,
                    listenerHandler: this.listenerHandler,
                    process: process
                });
                this.listenerHandler.loadAll();
        }

        async start() {
                require('./Extensions/message');
           // this.settings.init().then(() => super.login(process.env.TOKEN));
           super.login(process.env.TOKEN)
        }
    }

const client = new AkaiClient();
    client.start();


    /*  this.settings = new SQLiteProvider(sqlite.open('path/to/db.sqlite'), 'table_name', {
            idColumn: 'guild_id',
            dataColumn: 'settings'
        }); */
