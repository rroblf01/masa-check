const newVideoText = "Buenas noticias, hay nuevo vídeo"
const happyRabbit = "happy.png"

const noNewVideoText = "Lo sentimos, no ha subido vídeo"
const sadRabbit = "sad.png"

const checkNewVideo = async () => {
    console.log('Checking new video...')
    const message = document.getElementById('message')
    const image = document.getElementById('rabbit')
    try {
        const response = await fetch('/api/v1/newvideo')
        const data = await response.json()
        message.innerText = data.newVideo ? newVideoText : noNewVideoText
        image.src = data.newVideo ? happyRabbit : sadRabbit
    } catch (error) {
        console.error(error)
    }
}

globalThis.addEventListener('DOMContentLoaded', checkNewVideo);
