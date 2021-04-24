const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //+mute <@üye> <1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün> <nedenin>

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.users.get(args[0]));
  if(!tomute) return message.reply(new Discord.MessageEmbed().setDescription(
    "Doğru Kullanım: a!mute <kullanıcı> <süre> <sebep>\n`Örnek;`\na!mute @AliBerat 15d Küfür\n\n**NOT:** Sonsuz susturmak için şunu kullanın: a!mute @Kullanıcı 10000d 100h 10m 1s\nSüre Kullanım: `d` gün `h` saat `m` dakika `s` saniye"));
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(new Discord.MessageEmbed().setDescription("Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!"));
let muterole = message.guild.roles.find(r => r.name === "MUTE");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply(new Discord.MessageEmbed().setDescription("a!mute <kullanıcı> <süre>"));

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> mutelendi! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Kişinin susturulma süresi dolduğu için mutesi kaldırıldı!`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçicisustur', 'gsustur'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sureli Susturur.',
  usage: 'mute [Kullanıcı] [Süre] [Nedeni]'
};