const { Command } = require('discord-akairo');
const discord = require('discord.js');
const fs = require('fs');

var contents = fs.readFileSync("./JSON/waifus.json");
var jsonContent = JSON.parse(contents);

const Canvas = require('canvas');
const { join } = require('path');
const { registerFont } = require('canvas');
registerFont('./Bebas.ttf', { family: 'Bebas' })


    class WaifuCommand extends Command {
        constructor() {
            super('waifu', {
                aliases: ['waifu', 'waifus'],
                category: 'Anime',
                description: {
                    usage: 'waifu',
                    examples: ['waifu'],
                    description: 'Waifus! Display\'s your waifus information'
                },
                cooldown: 72000,
                ratelimit: 5
            })
        }

        async exec(message) {
            
	 const waifuI = jsonContent.waifus[Math.floor(Math.random() * jsonContent.waifus.length)]	
		
          const canvas = Canvas.createCanvas(850, 1262);
	  const ctx = canvas.getContext('2d');
          const bgl = await Canvas.loadImage('./Commands/Waifus/Cards/BackgroundL.png');
	  const waifu = await Canvas.loadImage(waifuI.image);		
	  const cardl = await Canvas.loadImage('./Commands/Waifus/Cards/CardInfoL.png');			
	  ctx.drawImage(bgl, 0, 0, canvas.width, canvas.height);
	  ctx.shadowBlur = 20;
	  ctx.shadowColor = "black";	
	  ctx.drawImage(waifu, 34, 57, 786, 1164);
	  ctx.drawImage(cardl, 0, 0, canvas.width, canvas.height);

	  ctx.font = applyText(canvas, `${waifuI.anime}!`);
	  ctx.fillStyle = '#ffffff';
	  ctx.fillStyle = waifuI.color;	
	  ctx.textAlign = "right";	
	  ctx.fillText(`${waifuI.anime}!`, 800, 1205);	
	  //wrapText(waifuI.description, 750, 750, 700, 15, 'Bebas', ctx)	
	  const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  	  
	  const embed = new discord.MessageEmbed()
	  .setColor(waifuI.color)
 	  .attachFiles([attachment])
	  .setImage('attachment://welcome-image.png');	 	
	  message.channel.send(embed)
	  .then(msg => { msg.react('❤️')
			
		const filter = (reaction, user) => {
		return ['❤️'].includes(reaction.emoji.name) && user.id === message.author.id;
		};				
          	msg.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
		const embedC = new discord.MessageEmbed()
		.setDescription(`${waifuI.displayName} was added to your collection!`)
		.setColor(waifuI.color)
		msg.channel.send(embedC);
		})
		.catch(collected => {
		return;
		});   
    	   			
	 })
        }
    }

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {

	ctx.font = `${fontSize -= 10}px Bebas`;
	} while (ctx.measureText(text).width > canvas.width - 500);
	return ctx.font;
};


function wrapText(text, x, y, maxWidth, fontSize, fontFace, ctx){
  var firstY=y;
  var words = text.split(' ');
  var line = '';
  var lineHeight=fontSize*3; // a good approx for 10-18px sizes

  ctx.font=fontSize+" "+fontFace;
  ctx.textBaseline='top';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if(testWidth > maxWidth) {
      ctx.fillText(line, x, y);
      if(n<words.length-1){
          line = words[n] + ' ';
          y += lineHeight;
      }
    }
    else {
      line = testLine;
    }
  }
  ctx.textAlign = "left";	
  ctx.fillText(line, x, y);
}

module.exports = WaifuCommand;
