const express = require("express");
const app = express();
const http = require("http");
app.get(".", (request, response) => {
  console.log(`BOT AKTIF!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://alvibotaltyapi.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "everyone" });
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
client.queue = new Map();
require("./util/eventLoader")(client);
require("moment-duration-format");

var prefix = aw ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
client.on("ready", () => {
  var actvs = [
    `🎀 Yardım almak için | a!yardım`,
    `🔔 Yeni Özellikler İçin | a!yardım-güncelleme`,
    `🤖 Botu eklemek için | a!yardım-bot`
  ];

  client.user.setActivity(
    actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)],
    { type: "WATCHING" }
  );
  setInterval(() => {
    client.user.setActivity(
      actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)],
      { type: "WATCHING" }
    );
    // IZLIYOR = WATCHING
    // OYNUYOR = PLAYING
    // YAYINDA = STREAMING
    // AKTIF = ONLINE
    // RAHATSIZ ETMEYIN = DND
    // BOSTA = IDLE
    // CEVRIMDISI = OFFLINE
  }, 15000);
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
//     [-----------------> PREFIX <---------------]  \\
client.on("message", async msg => {
  let message = msg;

  const bt =
    (await db.fetch(`prefix_${msg.guild.id}`)) || client.ayarlar.prefix;
  if (message.isMentioned(client.user.id)) {
    msg.react(":thumbsup:");
  }
});
//     [-----------------> BOT ETIKET <---------------] \\
client.on('message', msg => {
  if (msg.content === '<@828267474192564245>') {
    msg.channel.send(new Discord.MessageEmbed()
.setDesription(`Sunucu'daki prefix: ${prefix}`));
  }
});


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
      message.channel.send(
        new Discord.MessageEmbed().setDescription(`
AFK modundan ayrıldın <@${kullanıcı.id}>.`)
      );
      db.delete(`afk_${message.author.id}`);
    }
    if (afkkullanıcı)
      return message.channel.send(
        `${message.author}\`${kullanıcı.tag}\` şu anda AFK. \n Sebep : \`${sebep}\``
      );
  }
  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        new Discord.MessageEmbed().setDescription(`
AFK modundan ayrıldın <@${kullanıcı.id}>.`)
      );
      db.delete(`afk_${message.author.id}`);
    }
  }
});

/*
client.on('message', async (message, args) => {
if(message.content.length > 2) {
let atılmaay = moment(Date.now()+10800000).format("MM")
let atılmagün = moment(Date.now()+10800000).format("DD")
let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
let atılma = `
\`${atılmagün} ${atılmaay
.replace(/01/, 'Ocak')
.replace(/02/, 'Şubat')
.replace(/03/, 'Mart')
.replace(/04/, 'Nisan')
.replace(/05/, 'Mayıs')
.replace(/06/, 'Haziran')
.replace(/07/, 'Temmuz')
.replace(/08/, 'Ağustos')
.replace(/09/, 'Eylül')
.replace(/10/, 'Ekim')
.replace(/11/, 'Kasım')
.replace(/12/, 'Aralık')} ${atılmasaat}\``

const user = message.mentions.users.first()
const sebep = args.join(" ")
const sebeb = db.fetch(`afksebep_${message.guild.id}_${user.id}`, sebep)
const kullanıcı = db.fetch(`afkkullanıcı_${user.id}`)

if(message.content.includes === kullanıcı){
let etiket = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`
<@${message.author.id}> hooop etiketlediğin kullanıcı afk sabırlı ol!
<@$${kullanıcı.id}> **ADLI KULLANICI'NIN AFK BILGILERI;**
**etiketlenenin afk sebebi:** \`${sebeb}\`
**Afk süresi:** \`${atılma}\``)
message.channel.send(etiket)
}

message.channel.send(new Discord.MessageEmbed().setDescription(`
<@${kullanıcı.id}> afk modundan ayrıldınız. **Afk kalma süren:** \`${atılma}\``).setColor("GREEN"))
db.delete(`afksebeb_${message.author.id}`, sebep)
db.delete(`afkkullanıcı_${message.author.id}`)
}})*/

//     [-----------------> Otorol <------------------]  \\

//     [-----------------> Sayaç <------------------]  \\

client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    new Discord.MessageEmbed()
      .setDescription(
        `:inbox_tray: <@${
          member.user.id
        }> sunucuya katıldı, **${sayac}** kişi olmamıza **${sayac -
          member.guild.members.size}** kişi kaldı.`
      )
      .setColor("GREEN")
      .setTitle("Alvi - Sayaç")
  );
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;

  skanal31.send(
    new Discord.MessageEmbed()
      .setDescription(
        `:outbox_tray: <@${
          member.user.id
        }> adlı kullanıcı sunucudan ayrıldı. **${sayac}** kullanıcı olmaya **${sayac -
          member.guild.members.size}** kullanıcı kaldı.`
      )
      .setColor("RED")
      .setTitle("Alvi - Sayaç")
  );
});
// ------------------->  [CAPTCHA] <--------------------------- \\

client.on("guildMemberAdd", async member => {
  let zorluk = await db.fetch(`captchazorluk.${member.guild.id}`);
  if (!zorluk) return;
  let user = client.users.get(member.id);
  if (user.bot) return;

  let kanal = await db.fetch(`captchaKanal.${member.guild.id}`);
  let rol = await db.fetch(`captcharol.${member.guild.id}`);

  let kolay = [
    "https://resimhub.com/1/jWqXwa.png",
    "https://resimhub.com/1/9WrXxZ.png",
    "https://resimhub.com/1/zaJlJG.png",
    "https://resimhub.com/1/AW0QdG.png",
    "https://resimhub.com/1/LGNJRG.png",
    "https://resimhub.com/1/LGNJRG.png",
    "https://resimhub.com/1/Da8y8W.png",
    "https://resimhub.com/1/pazXqG.png"
  ];

  let orta = [
    "https://resimhub.com/1/zaJj9a.png",
    "https://resimhub.com/1/AW0j3Z.png",
    "https://resimhub.com/1/4Gvdna.png",
    "https://resimhub.com/1/pZPDJZ.png",
    "https://resimhub.com/1/EW3p9G.png",
    "https://resimhub.com/1/bW4xXW.png",
    "https://resimhub.com/1/MW2Ela.png",
    "https://resimhub.com/1/wGnXma.png",
    "https://resimhub.com/1/LGA82W.png",
    "https://resimhub.com/1/dGXBJa.png",
    "https://resimhub.com/1/daeXkZ.png"
  ];

  let zor = [
    "https://resimhub.com/1/7GlXqG.png",
    "https://resimhub.com/1/va7R5Z.png",
    "https://resimhub.com/1/AZOQ6W.png",
    "https://resimhub.com/1/6GmXEW.png",
    "https://resimhub.com/1/qGLNEa.png",
    "https://resimhub.com/1/BaY10a.png",
    "https://resimhub.com/1/pGjX9a.png",
    "https://resimhub.com/1/jWdXYW.png",
    "https://resimhub.com/1/nZE4PG.png",
    "https://resimhub.com/1/9WrXlZ.png",
    "https://resimhub.com/1/jWqX5a.png",
    "https://resimhub.com/1/bW4xLW.png",
    "https://resimhub.com/1/EW3p5G.png",
    "https://resimhub.com/1/pZPDnZ.png",
    "https://resimhub.com/1/4GvdPa.png",
    "https://resimhub.com/1/va7RoZ.png"
  ];

  let s;
  if (zorluk === "kolay") s = kolay;
  if (zorluk === "orta") s = orta;
  if (zorluk === "zor") s = zor;

  let sonuc = s[Math.floor(Math.random() * s.length)];
  let filtre = mes => mes.author.id === user.id;
  let beklenen;
  //KOLAY CAPTCHA
  if (sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "qdb";
  if (sonuc === "https://resimhub.com/1/Da8y8W.png") beklenen = "srd";
  if (sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "koa";
  if (sonuc === "https://resimhub.com/1/pazXqG.png") beklenen = "cuq";
  if (sonuc === "https://resimhub.com/1/AW0QdG.png") beklenen = "cvi";
  if (sonuc === "https://resimhub.com/1/zaJlJG.png") beklenen = "sub";
  if (sonuc === "https://resimhub.com/1/9WrXxZ.png") beklenen = "rvs";
  if (sonuc === "https://resimhub.com/1/jWqXwa.png") beklenen = "dwi";

  //ORTA CAPTCHA

  if (sonuc === "https://resimhub.com/1/zaJj9a.png") beklenen = "xnp";

  if (sonuc === "https://resimhub.com/1/AW0j3Z.png") beklenen = "xnp";
  if (sonuc === "https://resimhub.com/1/4Gvdna.png") beklenen = "yluof";
  if (sonuc === "https://resimhub.com/1/pZPDJZ.png") beklenen = "tuewa";
  if (sonuc === "https://resimhub.com/1/EW3p9G.png") beklenen = "saptn";
  if (sonuc === "https://resimhub.com/1/bW4xXW.png") beklenen = "gjegu";
  if (sonuc === "https://resimhub.com/1/MW2Ela.png") beklenen = "ygse";
  if (sonuc === "https://resimhub.com/1/wGnXma.png") beklenen = "ncmg";
  if (sonuc === "https://resimhub.com/1/LGA82W.png") beklenen = "aadf";
  if (sonuc === "https://resimhub.com/1/dGXBJa.png") beklenen = "wwwy";
  if (sonuc === "https://resimhub.com/1/daeXkZ.png") beklenen = "osoft";

  //ZOR CAPTCHA
  if (sonuc === "https://resimhub.com/1/7GlXqG.png") beklenen = "hvoyoohd";
  if (sonuc === "https://resimhub.com/1/va7R5Z.png") beklenen = "jpjphytn";
  if (sonuc === "https://resimhub.com/1/AZOQ6W.png") beklenen = "xjxwh";
  if (sonuc === "https://resimhub.com/1/qGLNEa.png") beklenen = "wwuljyndın";
  if (sonuc === "https://resimhub.com/1/6GmXEW.png") beklenen = "ıxdbksoo";
  if (sonuc === "https://resimhub.com/1/BaY10a.png") beklenen = "ccggvxssz";
  if (sonuc === "https://resimhub.com/1/pGjX9a.png") beklenen = "svgngn";
  if (sonuc === "https://resimhub.com/1/nZE4PG.png") beklenen = "zngangzd";
  if (sonuc === "https://resimhub.com/1/jWdXYW.png") beklenen = "gmmcsax";
  if (sonuc === "https://resimhub.com/1/9WrXlZ.png") beklenen = "saffoo";
  if (sonuc === "https://resimhub.com/1/jWqX5a.png") beklenen = "fasassf";
  if (sonuc === "https://resimhub.com/1/EW3p5G.png") beklenen = "rcttyq";
  if (sonuc === "https://resimhub.com/1/bW4xLW.png") beklenen = "qcmty";
  if (sonuc === "https://resimhub.com/1/pZPDnZ.png") beklenen = "yevunqy";
  if (sonuc === "https://resimhub.com/1/4GvdPa.png") beklenen = "nmnnbqwb";
  if (sonuc === "https://resimhub.com/1/va7RoZ.png") beklenen = "trtwrcnrv";

  let embed = new Discord.MessageEmbed()
    .setTitle(member.guild.name + " Sunucusuna Hoşgeldin!")
    .setDescription(
      `Lütfen captcha kodunu buraya gönderin.
**Merhaba!** Sunucuya girmeden önce bir captcha tamamlamanız gerekir.
**Neden?**
Bu, sunucuyu karşı korumak için yapılır!
Self botlara karşı önlem olarak kullanılabilir.
** Captcha'nız:**.`
    )
    .setImage(sonuc)
    .setTimestamp()
    .setURL("https://discord.gg/NAzGC2cxXR")
    .setColor("BLUE");
  user.send(embed).then(s => {
    s.channel
      .awaitMessages(filtre, {
        max: 1
      })

      .then(collected => {
        if (collected.first().content === beklenen) {
          let embed = new Discord.MessageEmbed()
            .setTitle("Başarılı!")
            .setDescription(
              "**" +
                member.guild.name +
                "** Sunucusuna başarıyla giriş yaptınız."
            )
            .setTimestamp()
            .setURL("https://discord.gg/NAzGC2cxXR")
            .setColor("GREEN");
          user.send(embed);
          member.guild.members.get(user.id).addRole(rol);
          let kayıt1 = new Discord.MessageEmbed()
            .setTitle("Kayıt Başarılı!")
            .setDescription(
              "**" + user.tag + "** Adlı kullanıcı başarıyla kayıt oldu."
            )

            .setTimestamp()
            .setURL("https://discord.gg/NAzGC2cxXR")
            .setColor("GREEN");
          if (!member.guild.channels.get(kanal))
            return console.log(
              `[${moment().format("YYYY-MM-DD HH:mm:ss")}]  Kullandı`
            );
          else member.guild.channels.get(kanal).send(kayıt1);

          return;
        } else {
          user.send("**Deneme başarısız oldu.** Kalan 2 denemeniz var");
          let kayıt = new Discord.MessageEmbed()
            .setTitle("Deneme Başarısız!")
            .setDescription(
              "" + user.tag + " Kodu yanlış girdi! **1/3** Denemesi kaldı!"
            )

            .setTimestamp()
            .setColor("RED");
          if (!member.guild.channels.get(kanal))
            return console.log(
              `[${moment().format("YYYY-MM-DD HH:mm:ss")}]  Kullandı`
            );
          else member.guild.channels.get(kanal).send(kayıt);

          s.channel
            .awaitMessages(filtre, {
              max: 1
            })
            .then(collected => {
              if (collected.first().content === beklenen) {
                let embed = new Discord.MessageEmbed()
                  .setTitle("Teşekkürler!")
                  .setDescription(
                    "**" +
                      member.guild.name +
                      "** Sunucusuna başarıyla giriş yaptınız."
                  )
                  .setTimestamp()
                  .setURL("https://discord.gg/NAzGC2cxXR")
                  .setColor("GREEN");
                user.send(embed);
                member.guild.members.get(user.id).addRole(rol);
                let kayıt1 = new Discord.MessageEmbed()
                  .setTitle("Kayıt Başarılı!")
                  .setDescription(
                    "**" + user.tag + "** Adlı kullanıcı başarıyla kayıt oldu."
                  )
                  .setTimestamp()
                  .setURL("https://discord.gg/NAzGC2cxXR")
                  .setColor("GREEN");
                if (!member.guild.channels.get(kanal))
                  return console.log(
                    `[${moment().format("YYYY-MM-DD HH:mm:ss")}]  Kullandı`
                  );
                else member.guild.channels.get(kanal).send(kayıt1);

                return;
              } else {
                user.send("**Deneme başarısız oldu.** Kalan 1 denemeniz var");
                let kayıt = new Discord.MessageEmbed()
                  .setTitle("Deneme Başarısız!")
                  .setDescription(
                    "" +
                      user.tag +
                      " Kodu yanlış girdi! **2/3** Denemesi kaldı!"
                  )
                  .setTimestamp()
                  .setColor("RED");
                if (!member.guild.channels.get(kanal))
                  return console.log(
                    `[${moment().format("YYYY-MM-DD HH:mm:ss")}]  Kullandı`
                  );
                else member.guild.channels.get(kanal).send(kayıt);

                s.channel
                  .awaitMessages(filtre, {
                    max: 1
                  })
                  .then(collected => {
                    if (collected.first().content === beklenen) {
                      let embed = new Discord.MessageEmbed()
                        .setTitle("Teşekkürler!")
                        .setDescription(
                          "**" +
                            member.guild.name +
                            "** Sunucusuna başarıyla giriş yaptınız."
                        )
                        .setTimestamp()
                        .setURL("https://discord.gg/NAzGC2cxXR")
                        .setColor("GREEN");
                      user.send(embed);
                      member.guild.members.get(user.id).addRole(rol);
                      let kayıt1 = new Discord.MessageEmbed()
                        .setTitle("Kayıt Başarılı!")
                        .setDescription(
                          "**" +
                            user.tag +
                            "** Adlı kullanıcı başarıyla kayıt oldu."
                        )

                        .setTimestamp()
                        .setURL("https://discord.gg/NAzGC2cxXR")
                        .setColor("GREEN");
                      if (!member.guild.channels.get(kanal))
                        return console.log(
                          `[${moment().format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}]  Kullandı`
                        );
                      else member.guild.channels.get(kanal).send(kayıt1);
                      return;
                    } else {
                      let embed = new Discord.MessageEmbed()
                        .setTitle("Bu Kötü!")
                        .setDescription(
                          "Maalesef 3 hakkınızı da yanlış girdiniz.Sunucuya giriş yapmanız engellendi."
                        )
                        .setTimestamp()
                        .setColor("RED");
                      user.send(embed);
                      let kayıt = new Discord.MessageEmbed()
                        .setTitle("Kayıt Başarısız!")
                        .setDescription(
                          "**" +
                            user.tag +
                            "** Kodu yanlış girdi! **3/3** Kayıt Başarısız!"
                        )
                        .setTimestamp()
                        .setColor("RED");
                      if (!member.guild.channels.get(kanal))
                        return console.log(
                          `[${moment().format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}]  Kullandı`
                        );
                      else member.guild.channels.get(kanal).send(kayıt);
                      setTimeout(function() {
                        member.kick();
                      }, 2500);
                    }
                  });
              }
            });
        }
      });
  });
});

// --------------------> [Müzik Sistemi] <----------------------- \\

const youtube = new YouTube("API");

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === "sadecebotunsahibikullanır") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            ":x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**"
          )
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(
            ":x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**"
          )
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(
            ":x: Müziği açamıyorum / kanalda konuşmama izin verilmediğinden veya mikrofonum kapalı olduğundan şarkı çalamıyorum."
          )
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel
        .send(new Discord.MessageEmbed())
        .setTitle(`**Oynatma Listesi **${playlist.title}** Sıraya eklendi!**`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;

          msg.channel.send(
            new Discord.MessageEmbed()
              .setTitle(":musical_note: Şarkı Seçimi")
              .setThumbnail(
                "https://i.postimg.cc/W1b1LW13/youtube-kids-new-logo.png"
              )
              .setDescription(
                `${videos
                  .map(video2 => `**${++index} -** ${video2.title}`)
                  .join("\n")}`
              )
              .setFooter(
                "Lütfen 1-10 arasında bir rakam seçin ve liste 10 saniye içinde iptal edilecektir.."
              )
              .setColor("BLACK")
          );
          msg.delete(5000);

          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send(
              new Discord.MessageEmbed()
                .setColor("BLACK")
                .setDescription(
                  ":x: **Şarkı Değerini belirtmediği için seçim iptal edildi**."
                )
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(
            new Discord.MessageEmbed()
              .setColor("BLACK")
              .setDescription(":x: **Aradım ama sonuç yok**")
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === "volume") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(
              ":x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**"
            )
        );
    if (!serverQueue)
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(":x: Şu anda çalan şarkı yok.")
      );
    if (!args[1])
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setTitle(`Current Volume: **${serverQueue.volume}**`)
          .setColor("BLACK")
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Setting Volume: **${args[1]}**`)
        .setColor("BLACK")
    );
  } else if (command === "now") {
    if (!serverQueue)
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setTitle(":x: **Şu anda çalan şarkı yok.**")
          .setColor("BLACK")
      );
    return msg.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle(" :headphones: | Şimdi oynuyor")
        .addField(
          "Şarkı Adı",
          `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`,
          true
        )
        .addField(
          "Oynamaya kadar tahmini süre",
          `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`,
          true
        )
    );
  } else if (command === "") {
    let index = 0;
    if (!serverQueue)
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setTitle(":x: **Sırada Müzik Yok**")
          .setColor("BLACK")
      );
    return msg.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Şarkı sırası")
          .setDescription(
            `${serverQueue.songs
              .map(song => `**${++index} -** ${song.title}`)
              .join("\n")}`
          )
      )
      .addField("Şimdi oynuyor: " + `${serverQueue.songs[0].title}`);
  }
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    zg: video.raw.snippet.channelId,
    best: video.channel.title,
    views: video.raw.views
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`:x: Ses kanalına giremedim HATA: ${error}**`);
      queue.delete(msg.guild.id);
      return msg.channel.send(
        new Discord.MessageEmbed()
          .setTitle(`:x: Ses kanalına giremedim HATA: ${error}**`)
          .setColor("BLACK")
      );
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    return msg.channel.send(
      new Discord.MessageEmbed()
        .setTitle(
          `:arrow_heading_up:  **${song.title}** Sıraya Adlandırılmış Müzik Eklendi!`
        )
        .setColor("BLACK")
    );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === " :x: **Yayın akış hızı yeterli değil.**")
        console.log("Şarkı Sona Erdi");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(
    new Discord.MessageEmbed()
      .setTitle("**:microphone: Şarkı Başladı**")
      .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg`)
      .addField("Şarkı adı", `[${song.title}](${song.url})`, true)
      .addField("Ses", `${serverQueue.volume}%`, true)
      .addField("Süre", `${song.durationm}:${song.durations}`, true)
      .addField("Video ID", `${song.id}`, true)
      .addField("Kanal ID", `${song.zg}`, true)
      .addField("Kanal adı", `${song.best}`, true)
      .addField("Video Link", `${song.url}`, true)
      .setImage(`https://i.ytimg.com/vi/${song.id}/hqdefault.jpg`)
      .setColor("BLACK")
  );
}
client.on("message", msg => {
  if (msg.content.toLowerCase() === "a!invite") {
    const eris = new Discord.MessageEmbed().setDescription(
      `[Destek Sunucum](https://discord.gg/NAzGC2cxXR)`
    );
    msg.channel.send(eris);
  }
});

client.on("guildCreate", guild => {
  const emmmmbed = new Discord.MessageEmbed()
    .setColor("RAINBOW")
    .setDescription(
      `**Selamlar chat ben geldim sabahlara kadar kopmaya hazır mısınız? Bende bütün sistemler var rahat olun sadece** \`a!yardım\` **yazarak komutlarıma bakman yeterli.**`
    )
    .setTimestamp();

  let defaultChannel = "";
  guild.channels.cache.forEach(channel => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  });

  defaultChannel.send(emmmmbed);
});
/*
client.on('guildCreate', guild => {
let kanal = guild.channels.filters(c => c.type === "text").random()
const embed = new Discord.MessageEmbed()
.setTitle('Selamlar chat ben geldim sabahlara kadar kopmaya hazır mısınız? Bende bütün sistemler var rahat olun')
kanal.send(embed)
    
});
*/
// ------------------------> [EKLENDİM-ATILDIM] <------------------------- \\

client.on("guildDelete", (guild, message) => {
  let rrrsembed = new Discord.MessageEmbed()

    .setColor("RED")
    .setTitle("Bot Atıldı")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin İd'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);
  return message.guild.channels.get("834494251726667776").send(rrrsembed);
});

client.on("guildCreate", (guild, message) => {
  let rrrsembed = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setTitle("Bot Eklendi")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin İd'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);
  return message.guild.channels.get("834494251726667776").send(rrrsembed);
});

// ------------------> [AntiRaid] <-------------------------- \\

client.on("guildMemberAdd", async member => {
  if (db.has(`botkoruma_${member.guild.id}`) === false) return;
  if (member.user.bot === false) return;
  if (db.has(`botİzinli_${member.id}`) === true) return;

  member.kick(member, `Bot koruması aktif!`);

  member.guild.owner.send(
    `Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`a!giriş-izni ${member.id}\``
  );
});

// ----------------> [Sa-AS] <--------------------- \\
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`ss_${msg.guild.id}`);
  if (db.has(`ss_${msg.guild.id}`) === true) {
    if (db.has(`üyelikk_${msg.author.id}`)) {
      if (msg.content.toLowerCase() === "sa") {
        msg.channel.send(
          `:wave: Aleyküm Selam, \`${msg.author.tag}\` Hoşgeldin `
        );
        db.add(`slmal_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "selam") {
        msg.channel.send(
          `:wave: Aleyküm Selam, \`${msg.author.tag}\` Hoşgeldin `
        );
        db.add(`slmal_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "s.a") {
        msg.channel.send(
          `:wave: Aleyküm Selam, \`${msg.author.tag}\` Hoşgeldin `
        );
        db.add(`slmal_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "selamun aleyküm") {
        msg.channel.send(
          `:wave: Aleyküm Selam, \`${msg.author.tag}\` Hoşgeldin `
        );
        db.add(`slmal_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "selamün aleyküm") {
        msg.channel.send(
          `:wave: Aleyküm Selam, \`${msg.author.tag}\` Hoşgeldin `
        );
        db.add(`slmal_${msg.author.id}`, 1);
      }
    } else if (msg.content.toLowerCase() === "sa") {
      msg.channel.send(`Aleyküm Selam Hoşgeldin ${msg.author}`);
      db.add(`slmal_${msg.author.id}`, 1);
    } else if (msg.content.toLowerCase() === "selam") {
      msg.channel.send(`Aleyküm Selam Hoşgeldin ${msg.author}`);
      db.add(`slmal_${msg.author.id}`, 1);
    }
  }
});
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`ss_${msg.guild.id}`);
  if (db.has(`ss_${msg.guild.id}`) === true) {
    if (db.has(`üyelikk_${msg.author.id}`)) {
      if (msg.content.toLowerCase() === "as") {
        db.add(`slm_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "a.s") {
        db.add(`slm_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "aleyküm") {
        db.add(`slm_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "selam") {
        db.add(`slm_${msg.author.id}`, 1);
      }
      if (msg.content.toLowerCase() === "aleykümselam") {
        db.add(`slm_${msg.author.id}`, 1);
      }
    } else if (msg.content.toLowerCase() === "as") {
      db.add(`slm_${msg.author.id}`, 1);
    } else if (msg.content.toLowerCase() === "aleyküm selam") {
      db.add(`slm_${msg.author.id}`, 1);
    }
  }
});
// ------------> [Seviye-Sistemi] <----------- \\
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  if (db.has(`lvl2_${msg.author.id}`) === true) {
    if (db.has(`lvll_${msg.guild.id}`) === true) {
      let memberChannel = await db.fetch(`sk_${msg.guild.id}`);

      if (msg.channel.type === "dm") return;
      if (msg.author.bot) return;

      if (msg.content.length > 40) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 4);
      }
      if (msg.content.length > 35) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 4);
      }
      if (msg.content.length > 30) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 3);
      }
      if (msg.content.length > 25) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 3);
      }
      if (msg.content.length > 20) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 2);
      }
      if (msg.content.length > 15) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 2);
      }
      if (msg.content.length > 10) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 1);
      }
      if (msg.content.length < 5) {
        db.add(`puancik_${msg.author.id + msg.guild.id}`, 1);
      }

      if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
        db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);
        if (memberChannel) {
          if (db.has(`üyelikk_${msg.author.id}`)) {
            msg.guild.channels
              .get(memberChannel)
              .send(
                `:crow: Kral <@${
                  msg.author.id
                }>, Seviye atladın ve \`${db.fetch(
                  `seviye_${msg.author.id + msg.guild.id}`
                )}\` seviye oldun :tada:`
              );
          } else
            msg.guild.channels
              .get(memberChannel)
              .send(
                `Tebrik ederim <@${
                  msg.author.id
                }>! Seviye atladın ve \`${db.fetch(
                  `seviye_${msg.author.id + msg.guild.id}`
                )}\` seviye oldun!`
              );
        } else if (db.has(`üyelikk_${msg.author.id}`)) {
          msg.channel.send(
            `:crowng: Kral <@${msg.author.id}>, Seviye atladın ve \`${db.fetch(
              `seviye_${msg.author.id + msg.guild.id}`
            )}\` seviye oldun :tada:`
          );
        } else
          msg.channel.send(
            `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve \`${db.fetch(
              `seviye_${msg.author.id + msg.guild.id}`
            )}\` seviye oldun!`
          );

        db.delete(`puancik_${msg.author.id + msg.guild.id}`);
      }
    } else return;
  } else return;
});
// -----------------> [Caps-Engel] <-------------------- \\
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`<@${msg.author.id}>Lütfen CAPS kapat!`)
              .edit(
                `Bu sunucuda Caps Lock Engelleme sistemi kullanılıyor.Bu yüzden mesajını sildim!`
              )
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});
// -------------------> [Snipe] <---------------- \\
client.on("messageDelete", msg => {
  let asd = JSON.parse(fs.readFileSync("./jsonlar/snipe.json", "utf8"));
  asd[msg.guild.id] = {
    mesaj: msg.content,
    isim: msg.author.username + "#" + msg.author.discriminator
  };

  fs.writeFile("./jsonlar/snipe.json", JSON.stringify(asd), err => {
    //console.log(err)
  });

  asd[msg.guild.id].mesaj = msg.content;
});
// -------------------> [Spam-koruma] <--------------- \\
client.on("message", msg => {
  const antispam = require("discord-anti-spam-tr");
  let spamEngel = JSON.parse(
    fs.readFileSync("./jsonlar/spamEngelle.json", "utf8")
  );
  if (!msg.guild) return;
  if (!spamEngel[msg.guild.id]) return;
  if (spamEngel[msg.guild.id].spamEngel === "kapali") return;
  if (spamEngel[msg.guild.id].spamEngel === "acik") {
    antispam(client, {
      uyarmaSınırı: 3,
      banlamaSınırı: 7,
      aralık: 1000,
      uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.",
      rolMesajı: "Spam için yasaklandı, başka biri var mı?",
      maxSpamUyarı: 4,
      maxSpamBan: 12,
      zaman: 7,
      rolİsimi: "spamMUTED"
    });
  }
});

// -------------------> [Kufur-Engel] <---------------- \\
client.on("message", msg => {
  let kufurEngel = JSON.parse(
    fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8")
  );
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].kufurEngel === "kapali") return;
  if (kufurEngel[msg.guild.id].kufurEngel === "acik") {
    const kufur = [
      "mk",
      "amk",
      "aq",
      "orospu",
      "oruspu",
      "oç",
      "sikerim",
      "yarrak",
      "piç",
      "amq",
      "sik",
      "amcık",
      "çocu",
      "sex",
      "seks",
      "amına",
      "orospu çocuğu",
      "sg",
      "siktir git",
      "am çorbası",
      "am oşafı",
      "annanı sikim",
      "anneni pandikleyim",
      "OÇ",
      "taşşak",
      "piç",
      "sikiş",
      "porno",
      "porn"
    ];
    if (kufur.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.reply(
          new Discord.MessageEmbed()
            .setDescription(
              "Bu sunucuda küfürler **Alvi Bot** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!"
            )
            .then(message => message.delete(3000))
        );
      }
    }
  }
});

client.on("messageUptade", msg => {
  let kufurEngel = JSON.parse(
    fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8")
  );
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].kufurEngel === "kapali") return;
  if (kufurEngel[msg.guild.id].kufurEngel === "acik") {
    const kufur = [
      "mk",
      "amk",
      "aq",
      "orospu",
      "oruspu",
      "oç",
      "sikerim",
      "yarrak",
      "piç",
      "amq",
      "sik",
      "amcık",
      "çocu",
      "sex",
      "seks",
      "amına",
      "orospu çocuğu",
      "sg",
      "siktir git",
      "am çorbası",
      "am oşafı",
      "annanı sikim",
      "anneni pandikleyim",
      "OÇ",
      "taşşak",
      "piç",
      "sikiş",
      "porno",
      "porn"
    ];
    if (kufur.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.reply(
          new Discord.MessageEmbed()
            .setDescription(
              "Hoop dur bakayım! Kendini akıllımı zannediyorsun ben **Alvi BOT**'um istediğini yap küfürlerini engellicem!"
            )
            .then(message => message.delete(3000))
        );
      }
    }
  }
});
// -------------------> [Reklam-Engel] <---------------- \\
client.on("message", async (msg, message) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = db.fetch(`reklamFiltre_${message.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          msg.delete();
          let embed = new Discord.MessageEmbed()
            .setColor(0xffa300)
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL
            )
            .setDescription(
              "Alvi - Reklam Sistemi" +
                `***${msg.guild.name}***` +
                " adlı sunucunuzda reklam yakaladım."
            )
            .addField(
              "Reklamı yapan kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen mesaj", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(`${msg.author.tag}, Reklam Yapmak Yasak Lanet Zenci!`)
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

// -------------------> [ROL-KORUMA] <------------------ \\
client.on("roleCreate", async (rolee, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.MessageEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)"
      )
      .setColor("BLACK");
    rolee.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});
client.on("roleDelete", async (rol, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rol.guild.id}`);
  if (rolkoruma == "acik") {
    rol.clone();
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Sunucunuzda rol silindi ama herşeyi ayarladım! (Rol Koruma Sistemi)`
      )
      .setColor("GREEN");
    rol.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});
client.on("roleUptade", async (roll, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${roll.guild.id}`);
  if (rolkoruma == "acik") {
    roll.old();
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Sunucunuzda birtane rol'ün adı/rengi/yetkileri değiştirildi ama herşeyi eski haline getirdim! (Rol Koruma Sistemi)`
      )
      .setColor("GREEN");
    roll.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});
// ----------------> {Kanal-Koruma} <------------------------ \\
client.on("channelDelete", async (channel, message) => {
  let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`);
  if (kanalkoruma == "acik") {
    if (!channel.guild.me.hasPermission("MANAGE_CHANNELS")) return;
    let guild = channel.guild;
    const logs = await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" });
    let member = guild.members.get(logs.entries.first().executor.id);
    if (!member) return;
    if (member.hasPermission("ADMINISTRATOR")) return;
    channel
      .clone(channel.name, true, true, "Kanal silme koruması sistemi")
      .then(async klon => {
        if (!db.has(`korumalog_${guild.id}`)) return;
        let logs = guild.channels.find(
          ch => ch.id === db.fetch(`korumalog_${guild.id}`)
        );
        if (!logs) return db.delete(`korumalog_${guild.id}`);
        else {
          const embed = new Discord.MessageEmbed()
            .setDescription(
              `Silinen Kanal: <#${klon.id}> (Yeniden oluşturuldu!)\nSilen Kişi: ${member.user}`
            )
            .setColor("RED")
            .setAuthor(member.user.tag, member.user.displayAvatarURL);
          channel.guild.owner.send(embed);
        }
        await klon.setParent(channel.parent);
        await klon.setPosition(channel.position);
      });
  }
});
client.on("channelCreate", async (channel, message) => {
  let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`);
  if (kanalkoruma == "acik") {
    if (!channel.guild.me.hasPermission("MANAGE_CHANNELS")) return;
    let guild = channel.guild;
    const logs = await channel.guild.fetchAuditLogs({ type: "CHANNEL_CREATE" });
    let member = guild.members.get(logs.entries.first().executor.id);
    if (!member) return;
    if (member.hasPermission("ADMINISTRATOR")) return;
    channel.delete();
    const embed = new Discord.MessageEmbed().setDescription(
      `Sunucunuzda kanal oluşturuldu ama silindi! (Kanal Koruma Sistemi)`
    );
    channel.guild.owner.send(embed);
  }
});
client.on("channelUptade", async (channel, message) => {
  let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`);
  if (kanalkoruma == "acik") {
    if (!channel.guild.me.hasPermission("MANAGE_CHANNELS")) return;
    let guild = channel.guild;
    const logs = await channel.guild.fetchAuditLogs({ type: "CHANNEL_UPTADE" });
    let member = guild.members.get(logs.entries.first().executor.id);
    if (!member) return;
    if (member.hasPermission("ADMINISTRATOR")) return;
    channel.old();
    const embed = new Discord.MessageEmbed().setDescription(
      `Sunucunuzda kanal adı/rol izinleri/webhook güncellendi ama herşeyi eski haline getirdim! (Kanal Koruma Sistemi)`
    );
    channel.guild.owner.send(embed);
  }
});
// ---------------> [Emoji-Koruma] <------------------- \\
client.on("emojiDelete", async function(emoji, kisi, user, yetkili) {
  const i = await db.fetch(`emojikoruma_${emoji.guild.id}`, true);
  if (i) {
    const entry = await emoji.guild
      .fetchAuditLogs({ type: "EMOJİ_DELETE" })
      .then(audit => audit.entries.first());

    let kisi = emoji.guild.member(entry.executor);
    kisi.roles
      .filter(a => a.hasPermission("ADMINISTRATOR"))
      .forEach(x => kisi.removeRole(x.id));
    kisi.roles
      .filter(a => a.hasPermission("MANAGE_CHANNELS"))
      .forEach(x => kisi.removeRole(x.id));
    kisi.roles
      .filter(a => a.hasPermission("MANAGE_ROLES"))
      .forEach(x => kisi.removeRole(x.id));
    kisi.mute();

    const deleter = emoji.executor;
    const id = emoji.executor.id;

    if (id === client.user.id || id === emoji.guild.ownerID) return;

    emoji.guild.members.forEach(async function(members) {
      if (members.id !== id) return;
      members.roles.forEach(role => {
        if (role.hasPermission(8) || role.hasPermission("MANAGE_EMOJIS")) {
          members.removeRole(role.id);

          emoji.guild.owner.send(
            `** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Susturuldu Ve Yetkilerini Aldı`
          );
        }
      });
    });
  }
});

// -----------------------> [Kayıt-sistemi] <--------------------------------- \\

client.on("guildMemberAdd", (member, message) => {
  let kanal = db.fetch(`logkayıt_${message.guild.id}`);
  let kayıtçı = db.fetch(`kayıty_${message.guild.id}`);
  const strigadiyorumlogdiyorum = `${kanal}`;
  const register = `${kayıtçı}`;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  const kurulus = new Date().getTime() - user.createdAt.getTime();

  var kontrol;
  if (kurulus < 1296000000)
    kontrol = "<a:kapali:827620346491830272> **__Bu Hesap Güvenilir Değil__**";
  if (kurulus > 1296000000)
    kontrol =
      "<a:acik:827618729193242634> **__Bu Hesap Güvenilir Gözüküyor__**";
  moment.locale("tr");
  let strigalog = client.channels.get(strigadiyorumlogdiyorum);
  const embed = new Discord.MessageEmbed()
    .setColor("0xd8d8d8")
    .setTitle(`**Alvi - Kayıt Sistemi**`).setDescription(`
**:wave: Hoşgeldin!** ${member}  **Seninle \`${
    member.guild.memberCount
  }\` Kişiyiz.**  
**Müsait olduğunda Ses Teyit Odalarından Birine Geçip Kaydını Yaptırabilirsin.** 
👤 <@&${register}> seninle ilgilenicektir.
📖 Hesabın Oluşturulma Tarihi: ${moment(member.user.createdAt).format(
    "** YYYY __DD MMMM dddd__**"
  )} ${kontrol}`);
  strigalog.send(embed);
  strigalog
    .send(register)
    .setDescription(`@everyone`)
    .then(message => message.delete < 1000);
});
// -----------------------> [Davet-Sistemi] <------------------------------ \\
client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    client.channels
      .get(kanal)
      .send(
        `<:outbox_tray:  <@${member.user.id}> Sunucudan Ayrıldı.! Davet Eden Kişi: [ **BULUNAMADI**]`
      );
    return;
  } else {
    client.channels
      .get(kanal)
      .send(
        `:outbox_tray:  <@${member.user.id}> Sunucudan Ayrıldı.! Davet Eden Kişi: [ <@${sa.id}> ]`
      );

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    let invites;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    client.channels
      .get(kanal)
      .send(
        `:inbox_tray:  <@${member.user.id}> Sunucuya Katıldı.! Davet Eden Kişi: <@${davetçi.id}> [**${sayı2}**]`
      );
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});

client.login(ayarlar.token);
