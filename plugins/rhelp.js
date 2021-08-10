/* # Exclusively from RAVANA
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved RAVANA Wa.me/+94714898434
# Credit : RAVANA
උස්සන එකාට හොදක් වෙන්න එපා
*/

const RAVANA  = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const HELP = "Bot help Center"

RAVANA.addCommand({pattern: 'rhelp', fromMe: true, deleteCommand: true, desc: HELP,}, (async (message, match) => {

    await message.sendMessage("*🇱🇰HELLOW THIS IS RAVANA HELP CENTER🇱🇰* \n\n✨What's Your Problem \n\n\n▶ මොකක්ද මේ RAVANA BOT කියන්නේ (.1) \n\n▶සිංදු වීඩියෝ එන්නේ නෑ (.2)\n\n▶ ලොගෝ වැඩ නෑ (.3)\n\n▶ Alive එක වැඩ කරන්නේ නෑ (.4)\n\n▶ Shutdown කරාම on කරන්නේ කොහොමද (.5) \n\n▶ බොට් එක පාරම වැඩ නැතුව ගියොත් මොකද කරන්නේ (.6)\n\n▶ කොහොමද බොට්ගේ කමාන්ඩ් ටික ගන්නේ (.7) \n\n▶ බොට් ගේ කමාන්ඩ් අපිට වැඩ නැත්තේ ඇයි (.8) \n\n▶ වෙනත් (.9) \n\n\n☯ Thank you for using RAVANA HELP CENTER🇱🇰.");

}));
RAVANA.addCommand({pattern: '1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*RAVANA BOT කියන්නේ Whatsapp Bot ජාතියක්.\n\n*මෙකෙන් මොකක්ද කරන්න පුලුවන්?*\n⭕Whatsapp හරහා song,video ගත හැක.ඔබ බොට් කෙනෙක් නිසා ඔබ කරන්නේ එක වෙන කට්ටියට යවන එක හැබැයි ඔයාටත් ගත හැක.\n⭕100 logos මෙහි ලොගෝ පැක් දෙකක් තිබේ එකක් rpack(.rpack) අනෙක් එක rnpack(.rnpack)\n⭕sticker එකක් පොටෝ එකක් කිරීම ස්ටිකර් සෑදීම පොටෝ ස්ටිකර් කිරීම\n⭕තවත් බොහෝ දේ තිබේ ඒවා දැන ගැනීමට .ravana කියලා ගැහුවම එනවා(ඒක ඔයා ගැහුවොත් එන්නේ නෑ ඔයාගේ බොට් public නම් ඒක වෙන කෙනෙක්ට කියලා ගහගන්න)\n\n*මතක තබා ගන්න මෙය සදහා ඔබගේ ඩේටා කැපෙන්නේ නෑ කැපෙනවනම් ඒ ඔයා auto download on කරලා නිසා පමණි*\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*කරුණාකර ඔබගේ බොට්ව restart කරන්න.* \n\n .restart \n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*එය අපගේ ප්‍රශ්නයක් නොවේ එය ලොගෝ සයිට් එකේ ලිමිට් එක නිසා* \n\nදැන් එයට විසදුමක් ඇත .\n\n```ඔයාලට පුලුවන් ඒ ලොගෝ api වෙනස් කිරීමට ```\n\n.setvar XTEAM_API:ඔයාල ගත්ත api එක \n\n .setvar LOLUHUMAN_API:ඔයාල ගත්ත api එක \n\n\nඔය api ගන්න ක්‍රමේ මෙම වීඩියෝ එකේ ඇත.\n https://youtu.be/vGHpome5e3k\n\n\n 🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*ඔබේ alive එක වැඩ නොකර නේ ඔබ alive logo එක වෙනස් කර ඒ ලින්ක් එක වැරදි*\n\nහරියට ලින්ක් එක ගන්න\nසයිට් එක telegra.ph\n\n 🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*ඔබ බොට්ව shutdown කරවිට ඔබ heroku එකට ගොස් නැවතත් Resources key එක on කර යුතුයි.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*ඒකට කරන්න තියෙන්නේ ඔයා ආයේ heroku එකට ගිහින් more එක ඔබලා restart all dyno ඔබන්න.වෙනත් ප්‍රශ්නයක්නම් හෙරොකු එකේ log එකේ ss එකක් අපේ suppoted group එකට දාන්න.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*බොට් හට .ravana හෝ .help ගසන්න.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*ඔබගේ බොට් public නම් එය ඔබට වැඩ නෑ අනිත් අයට වැඩ* \n\nඑය private කිරීමටනම්\n.setvar WORK_TYPE:private\n\nනැවත public කිරීමට\n .setvar WORK_TYPE:public\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
RAVANA.addCommand({pattern: '9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("*ප්‍රශ්නය අපගේ whatsapp supposed group https://chat.whatsapp.com/BZxwFPt5pUe19Y4EW9DjDP එක තුලට හෝ මෙම නම්බර් එකට දාන්න wa.me/94756872976*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");

}));
