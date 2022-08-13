var answersDiv = document.getElementById(`answersDiv`)
document.querySelectorAll(`button`).forEach(Button => Button.onclick = button.bind(this, Button))
function button(button) {
    if (answersDiv.textContent == `Syntax error`) answersDiv.textContent = ``
    if (!button.id.includes(`dontshow`) && button.id != `sqrt`) answersDiv.textContent += button.textContent
    else if (button.id == `sqrt`) answersDiv.textContent += `${button.textContent}(`
    else if (button.textContent == `C`) answersDiv.textContent = ``
    else if (button.textContent == `Del`) {answersDiv.textContent = answersDiv.textContent.slice(0, -1)
        if (answersDiv.textContent[answersDiv.textContent.length - 1] == `√`) answersDiv.textContent = answersDiv.textContent.slice(0, -1)
    } else if (button.textContent == `=`) answersDiv.textContent = answer()
} function answer() {
    let equation = `return ${answersDiv.textContent.replaceAll(`x`, `*`).replaceAll(`^`, `**`).replaceAll(`√(`, `Math.sqrt(`).replaceAll(`π`, `Math.PI`)}`
    try {new Function(equation)()
        return new Function(equation)()
    } catch {return `Syntax error`}
}