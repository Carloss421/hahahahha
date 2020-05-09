
const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('708186757463539762') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketlemelisin!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send("Lütfen bir isim girin!").then(m => m.delete(5000));
   let yas = args[2];
      if(!yas) return message.channel.send("Lütfen bir yaş girin!")
await member.setNickname(` ${isim} | ${yas}`);
  member.addRole("708185266669748224"); //kadın,kız Rol id
  member.removeRole("708185769835102239"); //kayıtsız id
  message.react('708715363071819807') //emojiid
     const kanal = message.guild.channels.find(c => c.id == "708648441567379506")  //LOG İD
    const embed1 = new Discord.RichEmbed() 
    .addField(`Kob's`, `<a:white_check_mark:704682052133584917>  ${member.user} **Hoşgeldin , Seninle Beraber** \`${member.guild.memberCount}\` **Üyeye Ulaştık.**`)
    .setColor("BLACK")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .addField(`Kob's`, `<a:white_check_mark:704682052133584917> ${member.user} **adlı üyeye** <@&İD> **rolünü verip ismini**  \` ${isim} | ${yas}\` **olarak ayarladım!**`)                                                                             
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k" , "kız"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'k',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'k'
} 