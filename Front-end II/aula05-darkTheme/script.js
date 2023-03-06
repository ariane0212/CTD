const chk = document.getElementById('chk')
const title = document.getElementById('title')
const itens = document.getElementById('itens')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})