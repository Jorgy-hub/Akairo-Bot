## ⋆˚🌺⃤ Akairo-Bot
This is a Discord Bot Template with Command and Listener Handler with the latest versions of Discord.js and Discord-Akairo Framework, good for public Bots.

## 📒 Getting Started:
* Download or fork the repository to get started!
* Download or fork the repository.
```
git clone git@github.com:Uraraka-Chan/Akairo-Bot.git
```
* Create .env with following content
````
TOKEN=''
````

## 📚 How to add Stuff:
* Commands can be added into Command folder and divided in category folders with .js files inside.
```js script
// Command Structure.
const { Command } = require('discord-akairo');
class Command extends Command {
  constructor() {
    super('Command-Name', {
      aliases: ['command-work', 'command'],
      category: 'Miscellaneous',
      args: [{ 
        // This is an argument
        id: 'one', 
        type: 'string', 
        match: 'content', 
        default: null, 
        // Prompts are Message Collectors in case arg wasn't send
        prompt: {
          start: `Please provide some art to draw`,
          retry: `Please provide some art to draw`,    
        } 
      }],
      // Info for Help Command
      description: {
        usage: 'command [ phrase ]',
        examples: ['command Hello, world!'],
        description: 'Description'
      },
      cooldown: 6000,
      ratelimit: 2
    });
  }
  exec(message, args) {
    // All your Stuff in here 
  }
}
```
* Events go in the listeners folder, you can basically add anything.
```js script
const { Listener } = require('discord-akairo');
class CooldownListener extends Event {
  constructor() {
    super('cooldown', {
      emitter: 'emitter',
      event: 'name',
    })
  }
  exec(message, command, remaining) {
    // Your stuff.
  }
}
```

---
<div align=center>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" />
  <img src="https://forthebadge.com/images/badges/powered-by-qt.svg" />
</div>
