const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Alvi Aktif, Komutlar yüklendi!`);
  var oyun = [ 
"🎀 Yardım almak için | a!yardım",
"🔔 Yeni Özellikler İçin | a!yardım-güncelleme",
"🤖 Botu eklemek için | a!yardım-bot"
  
    ];
client.user.setActivity("online")

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setWatch(oyun[random]);
        }, 2 * 6000);
}
/*const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Alvi Aktif, Komutlar yüklendi!`);

 client.user.setActivity("online");
  var oyun = [ 
`🎀 Yardım almak için | a!yardım`,
`🔔 Yeni Özellikler İçin | a!yardım-güncelleme`,
`🤖 Botu eklemek için | a!yardım-bot`
  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setWatch(oyun[random], "https://www.twitch.tv/asreaper13");
        }, 2 * 18000);
}*/