## ⋆˚🌺⃤ Akairo-Bot
This is a Discord Bot Template with Command and Listener Handler with the latest versions of Discord.js and Discord-Akairo Framework, good for public Bots.

### 📒 Getting Started:

* Clone or Fork my Project
* Enter the Repository File
* Install Dependencies
* Create .env with following content
````
TOKEN=''
````

### 📚 How to add Stuff:
* Commands can be added into Command folder and divided in category folders with .js files inside.
```js script
// Command Structure.
const { Command } = require('discord-akairo');
class AsciiArtCommand extends Command {
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
        usage: 'ascii [ phrase ]',
        examples: ['ascii Hello, world!'],
        description: 'Displays ascii art'
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

---
<div align=center>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" />
</div>
