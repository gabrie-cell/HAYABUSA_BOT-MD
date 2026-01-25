import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
"51941658192",
"5491162424280",
"5714222810",
]

global.suittag = ["51941658192"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2 • Latest"
global.nameqr = "ɢᴏᴊᴏ-ʙᴏᴛ.ᴍᴅ"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "🪴 ღNAGI-BOT༻๖ۣۜ◥ὦɧ◤ 🪴"
global.textbot = "Nagi вσт ν1 • мα∂є ву Gabrie-ux.яν"
global.dev = "© ⍴᥆ᥕᥱrᥱძ ᑲᥡ ★彡[༺★᭄ꦿ᭄ꦿɢαвяιє-υχ★᭄ꦿ᭄ꦿ]彡★"
global.author = "© mᥲძᥱ ᥕі𝗍һ ᑲᥡ Gabriel.ux"
global.etiqueta = "✫.ƚԋҽ ƈαɾʅσʂ.ɾʋ  ⊹꙰ "
global.currency = "ᴅᴏʟᴀʀᴇs💶"
global.banner = "https://files.catbox.moe/svaupe.jpg"
global.icono = "https://files.catbox.moe/7lwdza.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/IDo5RtlTvyt59hqj7E9O28?mode=wwt"
global.community = "https://chat.whatsapp.com/Jl7Y9alraIr2sFzOfBNhSO?mode=wwt"
global.channel = "https://whatsapp.com/channel/0029VbBGlokA89MliWWv1x16"
global.github = "https://github.com/Carlos13ra/GOJOBOT-MD "
global.gmail = "carlosramirezvillanueva30@gmail.com"
global.ch = {
ch1: "120363421367237421@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
