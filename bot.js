const express = require('express');
const app = express();
const http = require('http');
    app.get(".",(request, response) => {
      console.log(`BOT AKTIF!`);
      response.sendStatus(200);
    });
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://alvibotaltyapi.glitch.me/`);
}, 280000);
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db')
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};



const bot = new Discord.Client();

const bots = new Discord.Client({
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
});

var oyun = [
`🎀 Yardım almak için | a!yardım`,
`🔔 Yeni Özellikler İçin | a!yardım-güncelleme`,
`🤖 Botu eklemek için | a!yardım-bot`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "PLAYING"});

        }, 2 * 3500);
    // Oynuyor - PLAYING
    // Dinliyor - LISTENING
    // İzliyor - WATCHING
    // Dinleniyor - RERSTING    
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
//     [-----------------> Afk <------------------]  \\

client.on("message", async message => {
  let prefix = ayarlar.prefix;
  let kullanıcı = message.mentions.users.first() || message.author;
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
  let sebep = afkkullanıcı;
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(new Discord.MessageEmbed().setDescription(`
   <@${message.author.id}> **adlı kullanıcı afk modundan çıktı. Afk kalma süresi:`, afkdkullanıcı.setTimestamp().setColor("RANDOM"))
                           
      );
      
      db.delete(`afk_${message.author.id}`);
    }
    if (afkkullanıcı)
      return message.channel.send(new Discord.MessageEmbed().setDescription(`
      <@${message.author.id}> afk moduna girdi. Sebep: \`${sebep}\``).setColor("RANDOM")
      );
    
  }
  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(new Discord.MessageEmbed().setDescription(
`<@${message.author.id}>`,"**adlı kullanıcı artık afk modundan çıktı. Afk kalma süresi: **Yakında!**").setColor("RANDOM"))
      
      db.delete(`afk_${message.author.id}`);
    }}});

//     [-----------------> Otorol <------------------]  \\

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesajGIRDI = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesajGIRDI) {
    client.channels.get(kanal).send(new Discord.MessageEmbed().setDescription(":inbox_tray: Otomatik Rol Verildi Seninle Beraber `" + member.guild.memberCount + "` Kişiyiz! Hoşgeldin! `" + member.user.username + "`").setColor("RANDOM"));
    return member.addRole(rol);
  }

  if (mesajGIRDI) {
    var mesajs = mesajGIRDI.replace("uye", `${member.user}`).replace("uyetag", `${member.user.tag}`).replace("rol", `${member.guild.roles.get(rol).name}`).replace("server", `${member.guild.name}`).replace("uyesayisi", `${member.guild.memberCount}`).replace("botsayisi", `${member.guild.members.filter(m => m.user.bot).size}`).replace("bolge", `${member.guild.region}`).replace("kanalsayisi", `${member.guild.channels.size}`);
    member.addRole(rol);
    return client.channels.get(kanal).send(mesajs);
     }});

//     [-----------------> Sayaç <------------------]  \\

client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
    const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`)
    ///....

  ///....
  if (!mesaj) {
    return client.channels.get(kanal).send(":inbox_tray: Kullanıcı Katıldı! `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz!" +  "`" + member.user.username + "`");
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels.get(kanal).send(`:loudspeaker: Sayaç Sıfırlandı! \`${member.guild.memberCount}\` Kişiyiz!`)
    await db.delete(`sayacK_${member.guild.id}`)
    await db.delete(`sayacS_${member.guild.id}`)
  }
  if (mesaj) {
    const mesaj31 = mesaj.replace("uyetag", `${member.user.tag}`).replace("server", `${member.guild.name}`).replace("uyesayisi", `${member.guild.memberCount}`).replace("botsayisi", `${member.guild.members.filter(m => m.user.bot).size}`).replace("bolge", `${member.guild.region}`).replace("kanalsayisi", `${member.guild.channels.size}`).replace("kalanuye", `${sonuç}`).replace("hedefuye", `${sayaç}`)
    return client.channels.get(kanal).send(new Discord.MessageEmbed().setDescription(mesaj31).setColor("RANDOM"))}});
client.on("guildMemberRemove", async member => {

  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;

  if (!kanal) return;
  if (!sayaç) return;
    ///....

  if (!sayaç) {
    return client.channels.get(kanal).send(":outbox_tray: Kullanıcı Ayrıldı. `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz!" +   "`" + member.user.username + "`");
      }

  if (sayaç) {
    const mesaj31 = sayaç.replace("uye", `${member.user.tag}`).replace("server", `${member.guild.name}`).replace("uyesayisi", `${member.guild.memberCount}`).replace("botsayisi", `${member.guild.members.filter(m => m.user.bot).size}`).replace("bolge", `${member.guild.region}`).replace("kanalsayisi", `${member.guild.channels.size}`).replace("kalanuye", `${sonuç}`).replace("hedefuye", `${sayaç}`)
    return client.channels.get(kanal).send(mesaj31);
  }
});
