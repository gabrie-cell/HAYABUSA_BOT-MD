import yts from "yt-search"
import fetch from "node-fetch"

const handler = async (m, { conn, text }) => {
  if (!text) return m.reply(" `Ingresa el nombre del video de YouTube`.")

  await m.react("🕘")

  try {
    let url = text
    let title = "Desconocido"
    let authorName = "Desconocido"
    let durationTimestamp = "Desconocida"
    let views = "Desconocidas"
    let thumbnail = ""

    if (!text.startsWith("http")) {
      const res = await yts(text)
      if (!res?.videos?.length) return m.reply("🚫 No encontré nada.")
      const v = res.videos[0]
      title = v.title
      authorName = v.author?.name || "Desconocido"
      durationTimestamp = v.timestamp
      views = v.views
      url = v.url
      thumbnail = v.thumbnail
    }

    const caption = `
✧━───『 𝙸𝚗𝚏𝚘 𝚍𝚎𝚕 𝚅𝚒𝚍𝚎𝚘 』───━✧

🎼 𝑻𝒊́𝒕𝒖𝒍𝒐: ${title}
📺 𝑪𝒂𝒏𝒂𝒍: ${authorName}
👁️ 𝑽𝒊𝒔𝒕𝒂𝒔: ${formatViews(views)}
⏳ 𝑫𝒖𝒓𝒂𝒄𝒊𝒐́𝒏: ${durationTimestamp}
🌐 𝑬𝒏𝒍𝒂𝒄𝒆: ${url}

✧━───『 🥷 ঔHAYABUSA-MDᬊ᭄ 🥷🏻』───━✧
⚡ 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 Gabrie-ux ⚡
`

    await conn.sendMessage(
      m.chat,
      {
        image: { url: thumbnail },
        caption,
        footer: "⚡ Hayabusa — Descargas rápidas ⚡",
        buttons: [
          {
            buttonId: `shadowaudio ${url}`,
            buttonText: { displayText: "🎵 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝘼𝙪𝙙𝙞𝙤" },
            type: 1
          },
          {
            buttonId: `shadowvideo ${url}`,
            buttonText: { displayText: "🎬 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙑𝙞𝙙𝙚𝙤" },
            type: 1
          }
        ],
        headerType: 4
      },
      { quoted: m }
    )

    await m.react("✅")
  } catch (e) {
    console.error(e)
    m.reply("❌ Error inesperado")
    await m.react("⚠️")
  }
}

handler.before = async (m, { conn }) => {
  const selected = m?.message?.buttonsResponseMessage?.selectedButtonId
  if (!selected) return

  const [cmd, ...rest] = selected.split(" ")
  const url = rest.join(" ")

  if (cmd === "shadowaudio") return download(conn, m, url, "mp3")
  if (cmd === "shadowvideo") return download(conn, m, url, "mp4")
}

const download = async (conn, m, url, type) => {
  try {
    await m.react("⬇️")

    const apiUrl =
      type === "mp3"
        ? `https://api-adonix.ultraplus.click/download/ytaudio?url=${encodeURIComponent(url)}&apikey=SHADOWKEYBOTMD`
        : `https://api-adonix.ultraplus.click/download/ytvideo?url=${encodeURIComponent(url)}&apikey=SHADOWKEYBOTMD`

    const r = await fetch(apiUrl, { timeout: 15000 })
    const text = await r.text()

    let data
    try {
      data = JSON.parse(text)
    } catch {
      console.error(text)
      return m.reply("🚫 No se pudo procesar la descarga.")
    }

    if (!data?.status || !data?.data?.url)
      return m.reply("🚫 No se pudo descargar el archivo.")

    const fileUrl = data.data.url
    const fileTitle = cleanName(data.data.title || "media")

    if (type === "mp3") {
      await conn.sendMessage(
        m.chat,
        {
          audio: { url: fileUrl },
          mimetype: "audio/mpeg",
          fileName: fileTitle + ".mp3"
        },
        { quoted: m }
      )
    } else {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: fileUrl },
          mimetype: "video/mp4",
          fileName: fileTitle + ".mp4"
        },
        { quoted: m }
      )
    }

    await m.react("✅")
  } catch (e) {
    console.error(e)
    m.reply("❌ Error en la descarga")
    await m.react("💀")
  }
}

const cleanName = (name) =>
  name.replace(/[^\w\s-_.]/gi, "").slice(0, 60)

const formatViews = (views) => {
  if (!views) return "No disponible"
  if (views >= 1e9) return (views / 1e9).toFixed(1) + "B"
  if (views >= 1e6) return (views / 1e6).toFixed(1) + "M"
  if (views >= 1e3) return (views / 1e3).toFixed(1) + "K"
  return views.toString()
}

handler.command = ["play", "yt", "ytsearch"]
handler.tags = ["downloader"]
handler.register = true

export default handler