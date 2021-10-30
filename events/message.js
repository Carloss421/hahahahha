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
  let prefix = ayarlar.prefix;
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
  if (lg == "tr") {
var lang = tr;
  }
  
if(!lg){
if(cmd.name == "dil-ayarla") return;
if(cmd.aliases == "language-set") return;
if(cmd.aliases == "set-language") return;
/*if(message.content.startsWith("a!dil-ayarla")) return;
if(message.content.startsWith("a!language-set")) return;
if(message.content.startsWith("a!set-language")) return;*/
const embedd = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setAuthor(client.user.username)

.addField("<:hayir0:838855037161570375> **Hata | Error**",`
**TR:** Botu kullanmadan önce dil seçmeniz gerekmektedir!
Kullanım: **a!dil-ayarla Tr/En**

**EN:** You must select the language before using the bot!
Usage: **a!set-language En/Tr**`)
.setFooter(message.author.tag, message.author.avatarURL())
return message.channel.send({embed: embedd})
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
${message.author}
${lang.care.msg} \`${bakım}\`${lang.care.msg1} **${time.days}** ${lang.care.Dhms} **${time.hours}** ${lang.care.dHms} **${time.minutes}** ${lang.care.dhMs} **${time.seconds}** ${lang.care.dhmS}

  `).setColor("RANDOM"))
     /*
**:gear: Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.\n**❓**Bakım Sebebi:** `{bakım}`\n⏱️**Tahmini Süre:** **{time.days}** gün, **{time.hours}** saat, **{time.minutes}** dakika, **%{time.seconds}** saniye\n\n:arrows_counterclockwise: **Lütfen Daha Sonra Tekrar Deneyin.**
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