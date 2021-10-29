/*
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js')
const db = require('quick.db')
let talkedRecently = new Set();
module.exports = (message, args, user) => {
  if (talkedRecently.has(message.author.id)) {
    return; 
  } 
module.exports = message => {
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
   if (cmd) {
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD){
  };
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }};
*/
/*
const db = require('quick.db') 
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();
module.exports = async message => {

  let client = message.client;
  if (message.author.bot) return;

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
    if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
    
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};

*/
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

let talkedRecently = new Set();
module.exports = async message => {
if(message.author.bot) return

  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
 
  let en = require("../Languages/dil/en.json");
let tr = require("../Languages/dil/tr.json");
    
  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (!lg) {
var lang = tr;
  }
  
    if (db.has(`karalist_${message.author.id}`) === true) {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${lang.blackList.msg0}`)
    message.channel.send({embed: embed})
    return
  };


  
  if (cmd) {
  let bakım = await db.fetch('bakım');
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD){

    if(bakım){
 let bakımTIME = new Date("2021-11-30:20:30")
 let time = ms(bakımTIME - Date.now())
  return message.channel.send(new Discord.MessageEmbed().setDescription(`
<@${message.author.id}>
${lang.care.msg} \`${bakım}\`${lang.care.msg1}

  `).setColor("RANDOM"))
     /*
     
     */                         }}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};

/*
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
let talkedRecently = new Set();
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 5000);
  let client = message.client;
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (db.has(`karalist_${message.author.id}`) === true) {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Komutlarımı kullanamazsın çünkü karalistedesin!")
    message.channel.send({embed: embed})
    return
  };
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  
};
*/