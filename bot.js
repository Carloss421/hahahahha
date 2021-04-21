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
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
client.queue = new Map()
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

client.on("channelAdd", async channel => {
channel.create(`
  disableEveryone: false,
  autoReconnect: true,
  disabledEvents: ["TYPING_START"],
  partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']`)

})

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

client.on('guildMemberAdd', async (member, guild, message) => {

let role = await db.fetch(`otorolisim_${member.guild.id}`)
let kanal = await db.fetch(``)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {

  if (!otorol) return

  member.addRole(member.guild.roles.get(otorol))
                        .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('0x36393E')
                        .setFooter(`Sadis BOT Otorol Sistemi`)
     member.guild.channels.get(otorol).send(embed)  } catch (e) {
 console.log(e)
}
}

});

//     [-----------------> Sayaç <------------------]  \\

client.on("guildMemberAdd", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  if (!skanal31) return;
  skanal31.send(new Discord.MessageEmbed().setDescription(`:inbox_tray: <@${member.user.id}> sunucuya katıldı, **${sayac}** kişi olmamıza **${sayac - member.guild.members.size}** kişi kaldı.`).setColor("GREEN").setTitle("Alvi - Sayaç"))

});

client.on("guildMemberRemove", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  if (!skanal31) return;
    

  skanal31.send(new Discord.MessageEmbed().setDescription(`:outbox_tray: <@${member.user.id}> adlı kullanıcı sunucudan ayrıldı. **${sayac}** kullanıcı olmaya **${sayac - member.guild.members.size}** kullanıcı kaldı.`).setColor("RED").setTitle("Alvi - Sayaç"))

  });
// ---------------------> [Ramazan] <------------------------- \\
var prefix = ayarlar.prefix;
client.on('message', msg => {
  if (msg.content === prefix + 'iftar') {
  	if (msg.author.bot) return;
   	msg.reply(' a!iftar [Şehir İsmi] | Şehirin baş harfi büyük olacak şekilde yazınız!');
  }
  if (msg.content === prefix + 'iftar'+' Adana') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4892/ADANA/TURKIYE');
  } 
    if (msg.content === prefix + 'iftar'+' Adıyaman') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4893/ADIYAMAN/TURKIYE');
  }
    if (msg.content === prefix + 'iftar'+' Afyon') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4894/AFYON/TURKIYE');
  }
    if (msg.content === prefix + 'iftar'+' Ağrı') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4895/AGRI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Amasya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4911/AMASYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Ankara') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4913/ANKARA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Antalya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4914/ANTALYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Artvin') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4921/ARTVIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Aydın') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4924/AYDIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Balıkesir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4928/BALIKESIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bilecik') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4938/BILECIK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bingöl') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4939/BINGOL/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bitlis') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4941/BITLIS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bolu') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4942/BOLU/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Burdur') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4946/BURDUR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bursa') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4947/BURSA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Çanakkale') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4953/CANAKKALE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Çankırı') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4954/CANKIRI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Çorum') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4968/CORUM/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Denizli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4976/DENIZLI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Diyarbakır') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4984/DIYARBAKIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Edirne') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4987/EDIRNE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Elazığ') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4989/ELAZIG/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Erzincan') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4995/ERZINCAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Erzurum') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4996/ERZURUM/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Eskişehir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4998/ESKISEHIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Gaziantep') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5005/GAZIANTEP/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Giresun') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5010/GIRESUN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Gümüşhane') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5015/GUMUSHANE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Hakkari') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5020/HAKKARI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Hatay') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5023/HATAY/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Isparta') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5039/ISPARTA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Mersin') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5100/MERSIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' İstanbul') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5041/ISTANBUL/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' İzmir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5043/IZMIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kars') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5062/KARS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Malatya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5094/MALATYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Manisa') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5097/MANISA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Maraş') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5046/KAHRAMANMARAS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Mardin') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5098/MARDIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Muğla') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5104/MUGLA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Muş') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5105/MUS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Nevşehir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5110/NEVSEHIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Niğde') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5111/NIGDE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Ordu') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5117/ORDU/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Rize') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5128/RIZE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Sakarya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5130/SAKARYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Samsun') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5131/SAMSUN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Siirt') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5142/SIIRT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Sinop') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5147/SINOP/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Sivas') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5149/SIVAS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Tekirdağ') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5156/TEKIRDAG/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Tokat') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5160/TOKAT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bayburt') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4931/BAYBURT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Karaman') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5056/KARAMAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kırıkkale') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5076/KIRIKKALE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Batman') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4930/BATMAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Şırnak') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5148/SIRNAK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bartın') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4929/BARTIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Ardahan') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4916/ARDAHAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Iğdır') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5033/IGDIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Yalova') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5174/YALOVA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Karabük') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5050/KARABUK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kilis') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5073/KILIS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Osmaniye') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5119/OSMANIYE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Düzce') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4985/DUZCE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kastamonu') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5065/KASTAMONU/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kayseri') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5068/KAYSERI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kırklareli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5077/KIRKLARELI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kırşehir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5078/KIRSEHIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kocaeli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5082/KOCAELI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Konya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5084/KONYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kütahya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5092/KUTAHYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Trabzon') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5164/TRABZON/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Tunceli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5166/TUNCELI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Şanlıurfa') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5133/SANLIURFA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Uşak') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5169/USAK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Van') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5172/VAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Yozgat') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5178/YOZGAT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Zonguldak') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5181/ZONGULDAK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Aksaray') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4900/AKSARAY/TURKIYE');
  }
  if (msg.content === 'acıktım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Açlığını unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!Dur dur şaka coronayı unuttuk :) Açlık başımıza vurdu iyice ');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki çatalı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content === 'susadım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Susuzluğunu unutursun.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki içeceği yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bardağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }
  if (msg.content === 'of') {
   	msg.reply('Oflama geçer bugünler!');
  }
  if (msg.content === 'ah') {
   	msg.reply('Ah deme oh de!');
  }
  if (msg.content === 'oh') {
   	msg.reply('Oh deme püf de!');
  }
  if (msg.content === 'püf') {
   	msg.reply('Git, Barış MANÇO nun - Lambaya Püf De- dinle!');
  }
  if (msg.content === 'iftara ne kadar var') {
   	msg.reply('Şimdi öğren -> a!iftar [Şehir ismi ilk harfi büyük yaz]');
  }
  if (msg.content === 'iftara kaç saat var') {
   	msg.reply('Şimdi öğren -> a!iftar [Şehir ismi ilk harfi büyük yaz]');
  }
  if (msg.content === 'iftara kaç dakika var') {
   	msg.reply('Şimdi öğren -> a!iftar [Şehir ismi ilk harfi büyük yaz]');
  }
  if (msg.content === 'iftara kaç gün var') {
   	msg.reply('Yok devenin bale pabucu!?');
  }

  if (msg.content === 'iftar ne zaman') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Zamanı geldiği zaman!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('İmam uyumuş olmasın?');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('İmam bayıldı(!)');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! ;)');
   	}
  }

  if (msg.content === 'iftara ne kadar kaldı') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Çok değil! https://media.giphy.com/media/xUOwGn1kOzKcUZPBSw/giphy.gif');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('Görende 3 gün aç kaldı sanacak!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('Görende 3 gün susuz kaldı sanacak!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! :D');
   	}
  }
  if (msg.content === 'selamun aleyküm') {
   	msg.reply('ve aleyküm selam');
  }
 
  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }
  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :) ');
  }
  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler ');
  }
  
  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }
  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }
  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
  if (msg.content === 'iftar') {
   	msg.reply('Şimdi öğren -> a!iftar [Şehir ismi ilk harfi büyük yaz] ');
  }
  if (msg.content === 'oruçda geldi') {
   	msg.reply('Gelmesin mi ? :)');
  }
  if (msg.content === 'gelsin') {
   	msg.reply('iyi tamam geldim :)');
  }


    if (msg.content === 'a!ramazan') {
   	msg.channel.send(new Discord.MessageEmbed().setDescription(
`\`a!iftar\` Yazarak istediğiniz şehirin iftar saatine bakarsınız.
\`susadım\` Sizlere mesajlar atar.
\`acıktım\` Sizlere mesajlar atar. 
\`iftar ne zaman\` Sizlere mesajlar atar. 
\`iftara ne kadar kaldı\` Sizlere mesajlar atar.`).setColor("RANDOM"))
  }

});


// ------------------->  [CAPTCHA] <--------------------------- \\

client.on("guildMemberAdd", async member => {

let zorluk = await db.fetch(`captchazorluk.${member.guild.id}`)  
if(!zorluk) return
let user = client.users.get(member.id)
if(user.bot) return
  
 let kanal = await db.fetch(`captchaKanal.${member.guild.id}`)   
let rol = await db.fetch(`captcharol.${member.guild.id}`)  

  
let kolay = ["https://resimhub.com/1/jWqXwa.png", "https://resimhub.com/1/9WrXxZ.png","https://resimhub.com/1/zaJlJG.png",
             "https://resimhub.com/1/AW0QdG.png", "https://resimhub.com/1/LGNJRG.png","https://resimhub.com/1/LGNJRG.png",
             "https://resimhub.com/1/Da8y8W.png","https://resimhub.com/1/pazXqG.png"
            ]


let orta = ["https://resimhub.com/1/zaJj9a.png",
  "https://resimhub.com/1/AW0j3Z.png",
            "https://resimhub.com/1/4Gvdna.png", "https://resimhub.com/1/pZPDJZ.png", "https://resimhub.com/1/EW3p9G.png", "https://resimhub.com/1/bW4xXW.png", 
            "https://resimhub.com/1/MW2Ela.png","https://resimhub.com/1/wGnXma.png","https://resimhub.com/1/LGA82W.png",
            "https://resimhub.com/1/dGXBJa.png","https://resimhub.com/1/daeXkZ.png"
           ]


let zor = ["https://resimhub.com/1/7GlXqG.png","https://resimhub.com/1/va7R5Z.png", "https://resimhub.com/1/AZOQ6W.png","https://resimhub.com/1/6GmXEW.png","https://resimhub.com/1/qGLNEa.png","https://resimhub.com/1/BaY10a.png","https://resimhub.com/1/pGjX9a.png",
           "https://resimhub.com/1/jWdXYW.png","https://resimhub.com/1/nZE4PG.png","https://resimhub.com/1/9WrXlZ.png","https://resimhub.com/1/jWqX5a.png","https://resimhub.com/1/bW4xLW.png","https://resimhub.com/1/EW3p5G.png","https://resimhub.com/1/pZPDnZ.png",
           "https://resimhub.com/1/4GvdPa.png","https://resimhub.com/1/va7RoZ.png"
          ]

 let s;
if(zorluk === "kolay") s = kolay  
if(zorluk === "orta") s = orta
if(zorluk === "zor") s = zor 
  
   let sonuc = (s[Math.floor(Math.random() * s.length)])
 let filtre = mes => mes.author.id === user.id;   
let beklenen;
  //KOLAY CAPTCHA
if(sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "qdb"   
if(sonuc === "https://resimhub.com/1/Da8y8W.png") beklenen = "srd"   
if(sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "koa"  
if(sonuc === "https://resimhub.com/1/pazXqG.png") beklenen = "cuq"   
if(sonuc === "https://resimhub.com/1/AW0QdG.png") beklenen = "cvi"   
if(sonuc === "https://resimhub.com/1/zaJlJG.png") beklenen = "sub"   
if(sonuc === "https://resimhub.com/1/9WrXxZ.png") beklenen = "rvs"   
if(sonuc === "https://resimhub.com/1/jWqXwa.png") beklenen = "dwi"   

  //ORTA CAPTCHA
  
  
    if(sonuc === "https://resimhub.com/1/zaJj9a.png") beklenen = "xnp"   


  if(sonuc === "https://resimhub.com/1/AW0j3Z.png") beklenen = "xnp"   
if(sonuc === "https://resimhub.com/1/4Gvdna.png") beklenen = "yluof"   
if(sonuc === "https://resimhub.com/1/pZPDJZ.png") beklenen = "tuewa"   
if(sonuc === "https://resimhub.com/1/EW3p9G.png") beklenen = "saptn"   
if(sonuc === "https://resimhub.com/1/bW4xXW.png") beklenen = "gjegu"   
if(sonuc === "https://resimhub.com/1/MW2Ela.png") beklenen = "ygse"   
if(sonuc === "https://resimhub.com/1/wGnXma.png") beklenen = "ncmg"   
if(sonuc === "https://resimhub.com/1/LGA82W.png") beklenen = "aadf"   
if(sonuc === "https://resimhub.com/1/dGXBJa.png") beklenen = "wwwy"   
if(sonuc === "https://resimhub.com/1/daeXkZ.png") beklenen = "osoft"   
  
  
  //ZOR CAPTCHA
  if(sonuc === "https://resimhub.com/1/7GlXqG.png") beklenen = "hvoyoohd"   
  if(sonuc === "https://resimhub.com/1/va7R5Z.png") beklenen = "jpjphytn"   
if(sonuc === "https://resimhub.com/1/AZOQ6W.png") beklenen = "xjxwh"   
if(sonuc === "https://resimhub.com/1/qGLNEa.png") beklenen = "wwuljyndın"   
if(sonuc === "https://resimhub.com/1/6GmXEW.png") beklenen = "ıxdbksoo"   
if(sonuc === "https://resimhub.com/1/BaY10a.png") beklenen = "ccggvxssz"   
if(sonuc === "https://resimhub.com/1/pGjX9a.png") beklenen = "svgngn"   
if(sonuc === "https://resimhub.com/1/nZE4PG.png") beklenen = "zngangzd"   
if(sonuc === "https://resimhub.com/1/jWdXYW.png") beklenen = "gmmcsax"   
if(sonuc === "https://resimhub.com/1/9WrXlZ.png") beklenen = "saffoo"   
if(sonuc === "https://resimhub.com/1/jWqX5a.png") beklenen = "fasassf"   
if(sonuc === "https://resimhub.com/1/EW3p5G.png") beklenen = "rcttyq"   
if(sonuc === "https://resimhub.com/1/bW4xLW.png") beklenen = "qcmty"   
if(sonuc === "https://resimhub.com/1/pZPDnZ.png") beklenen = "yevunqy"   
if(sonuc === "https://resimhub.com/1/4GvdPa.png") beklenen = "nmnnbqwb"   
if(sonuc === "https://resimhub.com/1/va7RoZ.png") beklenen = "trtwrcnrv"    
  
let embed = new Discord.MessageEmbed()   
.setTitle(member.guild.name + ' Sunucusuna Hoşgeldin!')
.setDescription(`Lütfen captcha kodunu buraya gönderin.

**Merhaba!** Sunucuya girmeden önce bir captcha tamamlamanız gerekir.

**Neden?**
Bu, sunucuyu karşı korumak için yapılır!
Self botlara karşı önlem olarak kullanılabilir.

** Captcha'nız:**.`)
.setImage(sonuc)
.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('BLUE')      
user.send(embed).then(s => {
       
s.channel.awaitMessages(filtre, {
          max: 1,
        })
       
  .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.MessageEmbed()   
.setTitle('Başarılı!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
        let kayıt1 = new Discord.MessageEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')

.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  

 return
 } else {
   
user.send('**Deneme başarısız oldu.** Kalan 2 denemeniz var')   
           let kayıt = new Discord.MessageEmbed()   
                         .setTitle('Deneme Başarısız!')
.setDescription(''+user.tag+' Kodu yanlış girdi! **1/3** Denemesi kaldı!')

.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  

s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
        let kayıt1 = new Discord.MessageEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  

 return
   
 } else {
user.send('**Deneme başarısız oldu.** Kalan 1 denemeniz var')
              let kayıt = new Discord.MessageEmbed()  
              .setTitle('Deneme Başarısız!')
.setDescription(''+user.tag+' Kodu yanlış girdi! **2/3** Denemesi kaldı!')
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  

s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
   if(collected.first().content === beklenen) {
let embed = new Discord.MessageEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
     let kayıt1 = new Discord.MessageEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')

.setTimestamp()
.setURL('https://discord.gg/NAzGC2cxXR')
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  
     return
   
 } else {
let embed = new Discord.MessageEmbed()   
.setTitle('Bu Kötü!')
.setDescription('Maalesef 3 hakkınızı da yanlış girdiniz.Sunucuya giriş yapmanız engellendi.')
.setTimestamp()
.setColor('RED')    
 user.send(embed)  
        let kayıt = new Discord.MessageEmbed()   
.setTitle('Kayıt Başarısız!')
.setDescription('**'+user.tag+'** Kodu yanlış girdi! **3/3** Kayıt Başarısız!')
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  
   setTimeout(function() {
   member.kick()
  }, 2500)
 }})}})}})})}) 

// --------------------> [Müzik Sistemi] <----------------------- \\

const youtube = new YouTube('API');

client.on('message', async msg => {

	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'sadecebotunsahibikullanır') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.sendEmbed(new Discord.MessageEmbed()
      .setColor('BLACK')
    .setDescription(':x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**'));
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(':x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**'));
		}
		if (!permissions.has('SPEAK')) {
			 return msg.channel.sendEmbed(new Discord.MessageEmbed()
      .setColor('BLACK')
      .setTitle(":x: Müziği açamıyorum / kanalda konuşmama izin verilmediğinden veya mikrofonum kapalı olduğundan şarkı çalamıyorum."));
        }

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
		for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			 return msg.channel.sendEmbed(new Discord.MessageEmbed)
      .setTitle(`**Oynatma Listesi **${playlist.title}** Sıraya eklendi!**`)
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          
				 msg.channel.sendEmbed(new Discord.MessageEmbed()                  
         .setTitle(':musical_note: Şarkı Seçimi')
         .setThumbnail("https://i.postimg.cc/W1b1LW13/youtube-kids-new-logo.png")
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('Lütfen 1-10 arasında bir rakam seçin ve liste 10 saniye içinde iptal edilecektir..')
         .setColor('BLACK'));
          msg.delete(5000)
         
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						 return msg.channel.sendEmbed(new Discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription(':x: ***Selection cancelled for not specifying Song Value**.'));
                    }
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.sendEmbed(new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(':x: **I called but no results**'));
                }
            }
			return handleVideo(video, msg, voiceChannel);
      
		}
	
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(':x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.MessageEmbed()
     .setColor('BLACK')
     .setTitle(":x: Şu anda çalan şarkı yok."));                                              
		if (!args[1]) return msg.channel.sendEmbed(new Discord.MessageEmbed()
   .setTitle(`Current Volume: **${serverQueue.volume}**`)
    .setColor('BLACK'))
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setTitle(`Setting Volume: **${args[1]}**`)
    .setColor('BLACK'));                             
	} else if (command === 'now') {
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setTitle(":x: **Şu anda çalan şarkı yok.**")
    .setColor('BLACK'));
		return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(" :headphones: | Now Playing")                            
    .addField('Şarkı Adı', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Oynamaya kadar tahmini süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
	} else if (command === '') {
    let index = 0;
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setTitle(":x: **Sırada Müzik Yok**")
    .setColor('BLACK'));
		  return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setColor('RANDOM')
     .setTitle('Şarkı sırası')
    .setDescription(`${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}`))
    .addField('Şimdi oynuyor: ' + `${serverQueue.songs[0].title}`);
	
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
      views: video.raw.views,
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
			return msg.channel.sendEmbed(new Discord.MessageEmbed()
      .setTitle(`:x: Ses kanalına giremedim HATA: ${error}**`)
      .setColor('BLACK'))
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setTitle(`:arrow_heading_up:  **${song.title}** Sıraya Adlandırılmış Müzik Eklendi!`)
    .setColor('BLACK'))
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

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === ' :x: **Yayın akış hızı yeterli değil.**') console.log('Şarkı Sona Erdi');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	 serverQueue.textChannel.sendEmbed(new Discord.MessageEmbed()                                   
  .setTitle("**:microphone: Şarkı Başladı**")
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg`)
  .addField('Şarkı adı', `[${song.title}](${song.url})`, true)
  .addField("Ses", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .addField("Video ID", `${song.id}`, true)
  .addField("Kanal ID", `${song.zg}`, true)
  .addField("Kanal adı", `${song.best}`, true)
  .addField("Video Link", `${song.url}`, true)                              
  .setImage(`https://i.ytimg.com/vi/${song.id}/hqdefault.jpg`)
  .setColor('BLACK'));
}
client.on('message', msg => {
  
  if (msg.content.toLowerCase() === 'a!invite') {
    const eris = new Discord.MessageEmbed()
    .setDescription(`[Destek Sunucum](https://discord.gg/NAzGC2cxXR)`)
    msg.channel.send(eris);
  }
});
client.on('guildCreate', guild => {

    let kanal = guild.channels.filter(c => c.type === "text").random()
const embed = new Discord.MessageEmbed()
.setTitle('Selamlar chat ben geldim sabahlara kadar kopmaya hazır mısınız? Bende bütün sistemler var rahat olun')
kanal.send(embed)
    

});

// ------------------------> [EKLENDİM-ATILDIM] <------------------------- \\

client.on('guildDelete', guild => {

let rrrsembed = new Discord.MessageEmbed()

.setColor("RED")
.setTitle("Bot Atıldı")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin İd'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('834494251726667776').send(rrrsembed);
  
});

client.on('guildCreate', guild => {

let rrrsembed = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle("Bot Eklendi")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin İd'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('834494251726667776').send(rrrsembed);
  
});

// ------------------> [AntiRaid] <-------------------------- \\

client.on("guildMemberAdd", async member => {
if (db.has(`botkoruma_${member.guild.id}`) === false) return;
if (member.user.bot === false) return;
if (db.has(`botİzinli_${member.id}`) === true) return;

member.kick(member, `Bot koruması aktif!`)

member.guild.owner.send(`Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`a!giriş-izni ${member.id}\``)
})


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
      msg.channel.send(
        `Aleyküm Selam Hoşgeldin ${msg.author}`
      );
      db.add(`slmal_${msg.author.id}`, 1);
    } else if (msg.content.toLowerCase() === "selam") {
      msg.channel.send(
        `Aleyküm Selam Hoşgeldin ${msg.author}`
      );
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
    }}});
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
            `:crowng: Kral <@${
              msg.author.id
            }>, Seviye atladın ve \`${db.fetch(
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
client.login(ayarlar.token);