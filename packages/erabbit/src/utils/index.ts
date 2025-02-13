import type { Component } from 'vue'
import { createApp } from 'vue'

export function createNamespace(
  name: string,
): [string, (...mods: string[]) => string] {
  const prefixedName = `er-${name}`

  const bem = (...mods: string[]) => {
    const classNames: string[] = []
    if (mods) {
      mods.forEach((mod) => {
        if (mod) {
          if (/^__/.test(mod)) return classNames.push(`${prefixedName}${mod}`)
          else return classNames.push(`${prefixedName}--${mod}`)
        }
      })
    }
    return classNames.join(' ')
  }

  return [prefixedName, bem]
}

export function isNumeric(val: number | string): val is string {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export function mountComponent<T>(RootComponent: Component) {
  const app = createApp(RootComponent)
  const root = document.createElement('div')

  document.body.appendChild(root)

  return {
    instance: app.mount(root) as T,
    unmount() {
      app.unmount()
      document.body.removeChild(root)
    },
  }
}

export function omit(obj: Record<string, any>, keys: string[]) {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result
}
