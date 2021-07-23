/* Copyright (C) 2020 TOXIC DEVIL

REEDITE BY RAVANA-SL 
##v 3.1

Licensed under the  GPL-3.0 License;
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "``හායි යාලුවනේ😀! මම දැන් online මේක පුද්ගලික් බොට් සේවාවක්. ♠```\n\n*Version:* ```v3.0 - Stable```\n\n*Developer:* ```RAVANA```\n\n*WhatsApp :* wa.me/94714898434\n\n*Youtube channel :* https://www.youtube.com/channel/UC4WaTaXOPPFP3V6sDBogJug\n\n```RAVANA v3.0 භාවිතා කිරීම ගැන ස්තූතියි.```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*සැකසුම © 2021 | RAVANA_SL*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```හායි යාලුවනේ😃!මම දැන් online ඔයාලට මගේ සේවාව ලබාගත හැක. ✨```\n\n*Version:* ```v3.0 - Stable```\n\n*Developer:* ```RAVANA```\n\n*WhatsApp :* wa.me/94714898434\n\n*Youtube channel :* https://www.youtube.com/channel/UC4WaTaXOPPFP3V6sDBogJug\n\n```ස්තූතියි RAVANA v3.0 බොට්ව පාවිච්චි කිරීම පිළිබදව```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*සැකසුම © 2021  | RAVANA_SL*' })
     }
    }));
    
    Asena.addCommand({pattern: 'ravana', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n*║*  *RAVANA BOT MENU*\n*║*  *by '+Config.MENUTEXT+'🚀*\n*╚═══❖═══▣  ╩  ▣════❖═══╝*\n\n\n※‗‗‗‗‗‗ *Media commands* ‗‗‗‗‗‗※\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .song <song name>\n🔹𝙐𝙨𝙚➜ ඔබ වෙනුවෙන් ගීතය බාගත කරයි..\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .video <yt link>\n🔹𝙐𝙨𝙚➜ යූ ටියුබ් සබැඳියෙන් වීඩියෝ බාගන්න.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .profinsta<පරිශීලක නාමය>\n🔹𝙐𝙨𝙚➜ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .insta <link> \n🔹𝙐𝙨𝙚➜   Instagram වෙතින් අන්තර්ගතය බාගන්න. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .yt<text>\n🔹𝙐𝙨𝙚➜   ඔබට yt සබැඳි ලබා දෙයි. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .movie <පෙන්වන්න නම>\n🔹𝙐𝙨𝙚➜   movie සම්බන්ධ තොරතුරු ලබා ගන්න.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gif \n🔹𝙐𝙨𝙚➜ වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .mp3 \n🔹𝙐𝙨𝙚➜ වීඩියෝව ශ්රව්ය උපකරණ බවට පරිවර්තනය කරයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .img <පෙළ> \n🔹𝙐𝙨𝙚➜ එය ගූගල් වෙතින් රූපය යවයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trt <language code> \n🔹𝙐𝙨𝙚➜ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wiki <පෙළ>\n🔹𝙐𝙨𝙚➜ එය විකිපීඩියාවේ ප්රති .ලය යවයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lyric <පෙළ>\n🔹𝙐𝙨𝙚➜  ගීතයේ පද රචනා සොයා ගනී.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .covid <රටේ කේතය>\n🔹𝙐𝙨𝙚➜ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .weather <නගරය>\n🔹𝙐𝙨𝙚➜ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .removebg \n🔹𝙐𝙨𝙚➜ රූපයේ පසුබිම ඉවත් කරයි \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ocr\n🔹𝙐𝙨𝙚➜ රූපයේ ලියා ඇති පෙළ සොයා ගනී.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wallpaper\n🔹𝙐𝙨𝙚➜ එය අහඹු බිතුපත ඔබට යවයි.\n\n💠💠💠💠💠💠💠💠💠💠💠💠\n\n\n😁 *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* 😁 \n\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .joke  \n🔹𝙐𝙨𝙚➜ එය අහඹු විහිළුවක් යවයි. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .meme <පෙළ> \n🔹𝙐𝙨𝙚➜ Cations the image into a meme. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .quote \n🔹𝙐𝙨𝙚➜ එය අහඹු උපුටා දැක්වීමක් යවයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ss <වෙබ් අඩවි සබැඳිය> \n🔹𝙐𝙨𝙚➜ එය වෙබ් අඩවියේ තිර රුව යවයි. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .changesay <පෙළ> \n🔹𝙐𝙨𝙚➜ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trumpsay \n🔹𝙐𝙨𝙚➜ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න  \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .compliment  \n🔹𝙐𝙨𝙚➜ ඔබට ප්‍රශංසාවක් ලබා දෙයි.\n\n 🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .bitly <link> \n🔹𝙐𝙨𝙚➜   ඔබේ සබැඳිය කෙටි කරන්න.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .dict  \n🔹𝙐𝙨𝙚➜   ශබ්ද කෝෂය [-dict en; anime] \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .zodiac <leo>  \n🔹𝙐𝙨𝙚➜   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .qr <text>  \n🔹𝙐𝙨𝙚➜   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.\n\n 🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .movie  \n🔹𝙐𝙨𝙚➜  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .anime <text> \n🔹𝙐𝙨𝙚➜  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.\n\n\n💠💠💠💠💠💠💠💠💠💠💠💠 \n\n\n※‗‗‗‗‗‗‗*Sticker commands*‗‗‗‗‗‗‗‗※ \n\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sticker \n🔹𝙐𝙨𝙚➜ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි. \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .photo  \n 🔹𝙐𝙨𝙚➜ ස්ටිකර් රූපයට පරිවර්තනය කරයි. \n\n 🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .attp <text> \n🔹𝙐𝙨𝙚➜ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.\n\n\n  💠💠💠💠💠💠💠💠💠💠💠💠 \n\n\n ※‗‗‗‗‗‗‗*Logo packs commands*‗‗‗‗‗‗‗‗※\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .txttiomg\n🔹𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න\n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .rpack\n🔹𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න \n\n 🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .rnpack\n🔹𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න \n\n\n *╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗* \n *║*  *RAVANA BOT MENU*\n*║*  *by '+Config.MENUTEXT+'🚀*\n*╚═══❖═══▣  ╩  ▣════❖═══╝*\n🟦🟨🟩🟦🟨🟩🟦🟨🟩🟦🟨🟩'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*සැකසුම © 2021  | RAVANA_SL*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
