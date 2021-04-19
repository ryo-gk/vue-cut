import { DirectiveFunction, DirectiveOptions, VNode } from 'vue'
import { DirectiveBinding } from 'vue/types/options'

interface Options {
  len: number
  trail: string
}

const bind: DirectiveFunction = (el: HTMLElement, binding: DirectiveBinding, _vnode: VNode) => {
  const { len, trail }: Options = binding.value
  const text = el.innerText

  const cutText = addTrail(extractText(text, len), trail)

  el.innerText = cutText
}

const extractText = (text: string, length: number): string => {
  return text.substr(0, length)
}

const addTrail = (text: string, trail: string): string => {
  return text + trail
}

const CutDirective: DirectiveOptions = {
  bind
}

export default CutDirective