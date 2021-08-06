const RAVANA = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_Astro = ''
if (conf.LANG == 'TR') vtalk_dsc = 'Astro sesli sohbetini başlatır.', reply_Astro = '*Herhangi Bir Sesli Mesaja Yanıt Verin!*'
if (conf.LANG == 'EN') vtalk_dsc = 'Starts to Astro voice chat.', reply_Astro = '*Reply to Any Voice Message!*'
if (conf.LANG == 'AZ') vtalk_dsc = 'Astro səsli söhbətinə başlayır.', reply_Astro = '*Hər hansı bir səsli mesaja cavab verin!*'
if (conf.LANG == 'PT') vtalk_dsc = 'Começa o bate-papo por voz de Astro.', reply_Astro = '*Responder a qualquer mensagem de voz!*'
if (conf.LANG == 'RU') vtalk_dsc = 'Запускает голосовой чат Astro.', reply_Astro = '*Ответьте на любое голосовое сообщение!*'
if (conf.LANG == 'HI') vtalk_dsc = 'Astro ध्वनि चैट प्रारंभ करता है', reply_Astro = '*किसी भी ध्वनि संदेश का उत्तर दें!*'
if (conf.LANG == 'ES') vtalk_dsc = 'Comienza con el chat de voz de Astro.', reply_Astro = '*¡Responde a cualquier mensaje de voz!*'
if (conf.LANG == 'ML') vtalk_dsc = 'Astro വോയ്‌സ് ചാറ്റിലേക്ക് ആരംഭിക്കുന്നു.', reply_Astro = '*ഏത് വോയ്‌സ് സന്ദേശത്തിനും മറുപടി നൽകുക!*'
if (conf.LANG == 'ID') vtalk_dsc = 'Mulai obrolan suara Astro.', reply_Astro = '*Balas Pesan Suara Apapun!*'

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

RAVANA.addCommand({on: 'text', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('Astro') && conf.FULLAstro !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        let acc = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0] == 'RAVANA' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'
        var finm = message.message.replace('Astro', '').replace(' ', '')   
        var ainame = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0]
        if (ainame !== 'RAVANA') return;
        var ldet = lngDetector.detect(finm)
        var trmsg = ''
        if (ldet[0][0] !== 'english') {
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        } else { trmsg = finm }
        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
            if (conf.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.cnt }
            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
        })
    }
}));
RAVANA.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.FULLAstro == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        let acc = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0] == 'RAVANA' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'                       
                        var ainame = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0]
                        if (ainame !== 'RAVANA') return;
                        var finm = message.message
                        var ldet = lngDetector.detect(finm)
                        var trmsg = ''
                        if (ldet[0][0] !== 'english') {
                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        } else { trmsg = finm }
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (conf.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    let acc = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0] == 'RAVANA' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                    var ainame = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0]
                    if (ainame !== 'RAVANA') return;
                    var finm = message.message
                    var ldet = lngDetector.detect(finm)
                    var trmsg = ''
                    if (ldet[0][0] !== 'english') {
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    } else { trmsg = finm }
                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                let acc = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0] == 'RAVANA' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                var ainame = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0]
                if (ainame !== 'RAVANA') return;
                var finm = message.message
                var ldet = lngDetector.detect(finm)
                var trmsg = ''
                if (ldet[0][0] !== 'english') {
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                } else { trmsg = finm }
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        }

}));
RAVANA.addCommand({ pattern: 'vtalk$', desc: vtalk_dsc, fromMe: wk }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,reply_Astro, MessageType.text, { quoted: message.data }) 
    try {
        const file = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        })
        
        convertToWav(file)
            .on('end', async () => {
                const recognizedText = await recognizeAudio()
                
                var ssc = ''
                ceviri = await translatte(recognizedText, {from: 'auto', to: 'EN' });
                if ('text' in ceviri) {
                    ssc = ceviri.text
                }
                var unique_ident = message.client.user.jid.split('@')[0]
                let acc = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0] == 'RAVANA' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'       
                var ainame = os.userInfo().homedir.split('SL')[1].split('RAVANA/')[0]
                if (ainame !== 'RAVANA') return;
        
                var son = encodeURI(ssc)
                await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + son).then(async (response) => {
                    var trmsg = ''
                    cevir = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                    if ('text' in cevir) {
                        trmsg = cevir.text
                    }
            
                    let 
                        LANG = conf.LANG.toLowerCase(),
                        ttsMessage = trmsg,
                        SPEED = 1.0
                    var buffer = await googleTTS.synthesize({
                        text: ttsMessage,
                        voice: LANG
                    });
            
                    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
                }).catch(async (error) => {
	            console.log(error)
                });
        });
    } catch (err) { console.log(err) }
}));
var fullAstro_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
if (conf.LANG == 'TR') {
    fullAstro_dsc = 'Tam fonksiyonel Astro özelliklerini aktif eder. Hesabınızı bir chatbota dönüştürün!'
    already_on = 'Astro yapay zekası halihazırda tüm fonksiyonları etkin.'
    already_off = 'Astro yapay zekası halihazırda yarı fonksiyonel çalışıyor.'
    succ_on = 'Astro, Tam Fonksiyonel Olarak Açıldı! Lütfen Biraz Bekleyin! ✅'
    succ_off = 'Astro, Yarı Fonksiyonel Olarak Ayarlandı! Lütfen Biraz Bekleyin! ☑️'
}
if (conf.LANG == 'EN') {
    fullAstro_dsc = 'Activates full functional Astro features. Turn your account into a ai chatbot!'
    already_on = 'Astro artificial intelligence is already fully functional.'
    already_off = 'Astro artificial intelligence is currently running semi-functional.'
    succ_on = 'Astro Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Astro Set to Semi-Functional! Please wait a bit! ☑️'
}
if (conf.LANG == 'AZ') {
    fullAstro_dsc = 'Tam funksional Astro xüsusiyyətlərini aktivləşdirir. Hesabınızı bir chatbot halına gətirin!'
    already_on = 'Astro süni intellekt onsuz da tam işlək vəziyyətdədir.'
    already_off = 'Astro AI hazırda yarı funksionaldır.'
    succ_on = 'Astro Tamamilə İşlədi! Xahiş edirəm bir az gözləyin! ✅'
    succ_off = 'Astro Yarı İşləkdir! Xahiş edirəm bir az gözləyin! ☑️'
}
if (conf.LANG == 'RU') {
    fullAstro_dsc = 'Активирует полнофункциональные функции Astro. Превратите свой аккаунт в чат-бота!'
    already_on = 'Искусственный интеллект Astro уже полностью функционален.'
    already_off = 'Astro AI в настоящее время частично функционирует'
    succ_on = 'Astro открылась полностью функционально! Подождите немного! ✅'
    succ_off = 'Astro настроена на полуфункциональность! Подождите немного! ☑️'
}
if (conf.LANG == 'ES') {
    fullAstro_dsc = 'Activa todas las funciones funcionales de Astro. ¡Convierta su cuenta en un chatbot!'
    already_on = 'La inteligencia artificial de Astro ya es completamente funcional.'
    already_off = 'Astro AI es actualmente semi-funcional.'
    succ_on = '¡Astro abrió completamente funcionalmente! ¡Por favor espere un poco! ✅'
    succ_off = '¡Astro se pone semifuncional! ¡Por favor espere un poco! ☑️'
}
if (conf.LANG == 'HI') {
    fullAstro_dsc = 'पूरी तरह कार्यात्मक Astro सुविधाओं को सक्रिय करता है। अपने खाते को चैटबॉट में बदलें!'
    already_on = 'ईवा आर्टिफिशियल इंटेलिजेंस पहले से ही पूरी तरह कार्यात्मक है'
    already_off = 'ईवा एआई वर्तमान में अर्ध-कार्यात्मक है'
    succ_on = 'ईवा पूरी तरह कार्यात्मक रूप से खुल गई! कृपया थोड़ी प्रतीक्षा करें! ✅'
    succ_off = 'अर्ध-कार्यात्मक करने के लिए ईवा सेट! कृपया थोड़ी प्रतीक्षा करें! ☑️'
}
if (conf.LANG == 'ML') {
    fullAstro_dsc = 'പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായ Astro സവിശേഷതകൾ സജീവമാക്കുന്നു. നിങ്ങളുടെ അക്കൗണ്ട് ഒരു ചാറ്റ്ബോട്ടാക്കി മാറ്റുക!'
    already_on = 'ഇവ കൃത്രിമബുദ്ധി ഇതിനകം പൂർണ്ണമായി പ്രവർത്തിക്കുന്നു.'
    already_off = 'ഇവാ AI നിലവിൽ സെമി-ഫംഗ്ഷണൽ ആണ്.'
    succ_on = 'ഇവ പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായി തുറന്നു! കുറച്ച് കാത്തിരിക്കൂ! ✅'
    succ_off = 'സെമി-ഫങ്ഷണൽ ആയി ഇവാ സജ്ജമാക്കുക! കുറച്ച് കാത്തിരിക്കൂ! ☑️'
}
if (conf.LANG == 'PT') {
    fullAstro_dsc = 'Ativa recursos Astro totalmente funcionais. Transforme sua conta em um chatbot!'
    already_on = 'A inteligência artificial Astro já está totalmente funcional.'
    already_off = 'Astro AI está semi-funcional.'
    succ_on = 'Astro abriu totalmente funcionalmente! Por favor espere um pouco! ✅'
    succ_off = 'Astro definida como semi-funcional! Por favor espere um pouco! ☑️'
}
if (conf.LANG == 'ID') {
    fullAstro_dsc = 'Mengaktifkan fitur Astro yang berfungsi penuh. Ubah akun Anda menjadi chatbot!'
    already_on = 'Kecerdasan buatan Astro sudah berfungsi penuh.'
    already_off = 'Astro AI saat ini semi-fungsional.'
    succ_on = 'Astro Dibuka Sepenuhnya Secara Fungsional! Harap tunggu sebentar! ✅'
    succ_off = 'Astro Set ke Semi-Fungsional! Mohon tunggu sebentar! ☑️'
}

RAVANA.addCommand({ pattern: 'fullAstro ?(.*)', desc: fullAstro_dsc, fromMe: true, usage: '.fullAstro on / off' }, (async (message, match) => {
    var Astro_status = `${conf.FULLAstro}`
    if (match[1] == 'on') {
        if (Astro_status == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_Astro']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (Astro_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_Astro']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    }
}));
