const inputField = document.getElementById('input')
const listItems = list.querySelectorAll('.list-item')
const btnCancel = document.getElementById('btn-cancel')

inputField.addEventListener('keyup', filterNames)

function filterNames() {
  const inputValue = inputField.value.toUpperCase()
  const list = document.getElementById('list')
  listItems.forEach(item => {
    if (item.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
      item.style.display = ''
    } else {
      item.style.display = 'none'
    }
  })
}

btnCancel.addEventListener('click', clearSearch)

function clearSearch() {
  inputField.value = ''
  listItems.forEach(item => item.style.display = '')
}