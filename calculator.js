var answersDiv = document.getElementById(`answersDiv`)
document.querySelectorAll(`button`).forEach(Button => Button.onclick = button.bind(this, Button))
function button(button) {
    if (answersDiv.textContent == `Syntax error`) answersDiv.textContent = ``
    if (!button.id.includes(`dontshow`) && button.id != `sqrt`) answersDiv.textContent += button.textContent.toLowerCase()
    else if (button.id == `sqrt`) answersDiv.textContent += `${button.textContent}(`
    else if (button.textContent.toLowerCase() == `c`) answersDiv.textContent = ``
    else if (button.textContent.includes(`Del`) || button.textContent == `Backspace`) {answersDiv.textContent = answersDiv.textContent.slice(0, -1)
        if (answersDiv.textContent[answersDiv.textContent.length - 1] == `√`) answersDiv.textContent = answersDiv.textContent.slice(0, -1)
    } else if (button.textContent == `=` || button.textContent == `Enter`) answersDiv.textContent = answer()
} function answer() {
    let equation = answersDiv.textContent.replaceAll(`x`, `*`).replaceAll(`^`, `**`).replaceAll(`√(`, `Math.sqrt(`).replaceAll(`π`, `Math.PI`)
    try {return new Function(`if (isNaN(${equation})) {return "undefined"} else return ${equation}`)()
    } catch {return `Syntax error`}
} document.onkeydown = function(e) {
    var Button = document.createElement(`button`)
    Button.textContent = e.key
    if (e.key.toLowerCase() == `c` || e.key == `Delete` || e.key == `Backspace` || e.key == `Enter`) Button.id = `dontshow`
    if (!isNaN(e.key) || Button.id == `dontshow` || e.key.toLowerCase() == `x` || e.key == `*` || e.key == `(` || e.key == `)`
    || e.key == `/` || e.key == `^` || e.key == `-` || e.key == `+` || e.key == `.`) button(Button, true)
}