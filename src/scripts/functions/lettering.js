function LetteringInjection(element, separator, klass, after_elem) {
  let lett_text = element.textContent
  let lett_symbols = lett_text.split(separator)
  let lett_inject = ''

  if (lett_symbols.length) {
    [].forEach.call(lett_symbols, (symbol, key) => {
      lett_inject += `<span class="${klass + (key + 1)}" aria-hidden="true">${symbol}</span>${after_elem}`
    })

    element.innerHTML = ''
    element.setAttribute('aria-label', lett_text)
    element.insertAdjacentHTML('beforeend', lett_inject)
  }
}

/**
 * Модуль для разделения текста
 * @lines Строки
 * @words Слова
 * @letters Символы
 */
export const Lettering = {
  letters(elems) {
    [].forEach.call(elems, element => {
      LetteringInjection(element, '', 'symb', '')
    })
  },
  words(elems) {
    [].forEach.call(elems, element => {
      LetteringInjection(element, ' ', 'word', ' ')
    })
  },
  lines(elems) {
    [].forEach.call(elems, element => {
      const br_replace = 'eefec303079ad17405c889e092e105b0'
      element.querySelector('br').replaceWith(br_replace)
      LetteringInjection(
        element,
        br_replace,
        'line',
        ''
      )
    })
  }
}
