const componentOne = function () {
  const element = document.createElement('div')
  element.innerHTML = ['hello', 'webpack'].join(' ')
  return element
}

document.body.appendChild(componentOne())
