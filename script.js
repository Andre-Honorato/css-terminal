const body = document.querySelector('body')
const terminal = document.querySelector('.terminal')
const texto = document.querySelector('.texto')
let ultimoTexto = terminal.lastElementChild.querySelector('.texto p')
let ultimaSeta = terminal.lastElementChild.querySelector('.linha ion-icon')
const teclasProibidas = ['CapsLock', 'Shift', 'Alt', 'Meta', 'ControlAltGraph', 'ContextMenu', 'Control', 'Dead', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Delete', 'End', 'PageDown', 'Insert', 'Home', 'PageUp', 'ScrollLock', 'Pause', 'Tab', 'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']
let link = false;
body.onkeydown = e => {
    if (e.key == 'Backspace') {
        ultimoTexto.innerHTML = ultimoTexto.innerHTML.substr(0, (ultimoTexto.innerHTML.length - 1))
    }
    else if (e.key == ' ') {
        ultimoTexto.innerHTML += '⠀'
    }
    else if (e.key == 'Enter') {
        let linha = document.createElement('div')
        linha.classList.add('linha')
        linha.innerHTML = '<ion-icon name="arrow-forward"></ion-icon><span>~</span><div class="texto"><p></p></div><div class="barra"></div>'
        let ultimaBarra = terminal.lastElementChild.querySelector('.barra')
        ultimaSeta.style.display = 'none'
        ultimaBarra.style.display = 'none'
        ultimoTexto.style.marginRight = '20px'
        if (ultimoTexto.innerHTML == 'github') {
            link = true
        }
        else if (ultimoTexto.innerHTML == 'clear') {
            let todasLinhas = document.querySelectorAll('.linha')
            todasLinhas.forEach(linha => {
                terminal.removeChild(linha)
            })
        }
        else if (ultimoTexto.innerHTML == 'dedehlol') {
            let linha = document.createElement('div')
            linha.classList.add('linha')
            linha.innerHTML = '<ion-icon name="arrow-forward"></ion-icon><span>~</span><div class="texto"><p></p></div><div class="barra"></div>'
            let ultimaBarra = terminal.lastElementChild.querySelector('.barra')
            ultimaBarra.style.display = 'none'
            ultimoTexto.style.marginRight = '20px'
            terminal.appendChild(linha)
            ultimoTexto = terminal.lastElementChild.querySelector('.texto p')
            ultimoTexto.innerHTML = 'A really nice guy! 😃'
            ultimaSeta = terminal.lastElementChild.querySelector('.linha ion-icon')
            ultimaSeta.style.display = 'none'
            ultimaBarra = terminal.lastElementChild.querySelector('.barra')
            ultimaBarra.style.display = 'none'
        }
        terminal.appendChild(linha)
        ultimaSeta = terminal.lastElementChild.querySelector('.linha ion-icon')
        ultimoTexto = terminal.lastElementChild.querySelector('.texto p')
        if (link) {
            ultimaSeta.style.display = 'none'
            ultimoTexto.innerHTML = "<a href='https://github.com/dedehlol/css-terminal' target='_blank'>https://github.com/dedehlol/css-terminal</a>"
            link = false
            let linha = document.createElement('div')
            linha.classList.add('linha')
            linha.innerHTML = '<ion-icon name="arrow-forward"></ion-icon><span>~</span><div class="texto"><p></p></div><div class="barra"></div>'
            let ultimaBarra = terminal.lastElementChild.querySelector('.barra')
            ultimaBarra.style.display = 'none'
            ultimoTexto.style.marginRight = '20px'
            terminal.appendChild(linha)
            ultimoTexto = terminal.lastElementChild.querySelector('.texto p')
            ultimaSeta = terminal.lastElementChild.querySelector('.linha ion-icon')
        }
        ultimaSeta = terminal.lastElementChild.querySelector('.linha ion-icon')
    }
    else {
        if (!teclasProibidas.includes(e.key)) {
            if (ultimoTexto.clientWidth <= terminal.clientWidth - 100) {
                ultimoTexto.innerHTML += e.key
            }
        }
    }
}