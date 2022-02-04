const Discord = require('discord.js');

exports.run = async (client, message) => {

  if (client.guilds.size < 35) return message.reply("Bot `35` tane sunucuda bulunmuyor!")

const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
const embed = new Discord.MessageEmbed()
			.setDescription(`
  1. **${top[0].name}**: ${top[0].memberCount} Kişi Bulunuyor.
  2. **${top[1].name}**: ${top[1].memberCount} Kişi Bulunuyor.
  3. **${top[2].name}**: ${top[2].memberCount} Kişi Bulunuyor.
  4. **${top[3].name}**: ${top[3].memberCount} Kişi Bulunuyor.
  5. **${top[4].name}**: ${top[4].memberCount} Kişi Bulunuyor.
  6. **${top[5].name}**: ${top[5].memberCount} Kişi Bulunuyor.
  7. **${top[6].name}**: ${top[6].memberCount} Kişi Bulunuyor.
  8. **${top[7].name}**: ${top[7].memberCount} Kişi Bulunuyor.
  9. **${top[8].name}**: ${top[8].memberCount} Kişi Bulunuyor.
  10. **${top[9].name}**: ${top[9].memberCount} Kişi Bulunuyor. 
  11. **${top[10].name}**: ${top[10].memberCount} Kişi Bulunuyor 
  12. **${top[11].name}**: ${top[11].memberCount} Kişi Bulunuyor 
  13. **${top[12].name}**: ${top[12].memberCount} Kişi Bulunuyor 
  14. **${top[13].name}**: ${top[13].memberCount} Kişi Bulunuyor 
  15. **${top[14].name}**: ${top[14].memberCount} Kişi Bulunuyor 
  16. **${top[15].name}**: ${top[15].memberCount} Kişi Bulunuyor 
  17. **${top[16].name}**: ${top[16].memberCount} Kişi Bulunuyor 
  18. **${top[17].name}**: ${top[17].memberCount} Kişi Bulunuyor 
  19. **${top[18].name}**: ${top[18].memberCount} Kişi Bulunuyor 
  20. **${top[19].name}**: ${top[19].memberCount} Kişi Bulunuyor
  21. **${top[20].name}**: ${top[20].memberCount} Kişi Bulunuyor
  22. **${top[21].name}**: ${top[21].memberCount} Kişi Bulunuyor
  23. **${top[22].name}**: ${top[22].memberCount} Kişi Bulunuyor
  24. **${top[23].name}**: ${top[23].memberCount} Kişi Bulunuyor
  25. **${top[24].name}**: ${top[24].memberCount} Kişi Bulunuyor
  26. **${top[25].name}**: ${top[25].memberCount} Kişi Bulunuyor
  27. **${top[26].name}**: ${top[26].memberCount} Kişi Bulunuyor
  28. **${top[27].name}**: ${top[27].memberCount} Kişi Bulunuyor
  29. **${top[28].name}**: ${top[28].memberCount} Kişi Bulunuyor
  30. **${top[29].name}**: ${top[29].memberCount} Kişi Bulunuyor
  31. **${top[30].name}**: ${top[30].memberCount} Kişi Bulunuyor
  32. **${top[31].name}**: ${top[31].memberCount} Kişi Bulunuyor
  33. **${top[32].name}**: ${top[32].memberCount} Kişi Bulunuyor
  34. **${top[33].name}**: ${top[33].memberCount} Kişi Bulunuyor
  35. **${top[34].name}**: ${top[34].memberCount} Kişi Bulunuyor
  
  
  `)
			.setColor("RANDOM")
return message.channel.send(embed)

}

exports.conf = {
enabled: true,
aliases: ["top35"],
permLevel: 4
};

exports.help = {
name: "top35",
description: "Top20 listesi.",
usage: "top20"
};