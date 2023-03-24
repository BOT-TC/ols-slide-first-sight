import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'Home',
      fn: () => nav.go(1),
      autoRepeat: false,
    },
    {
      key: 'End',
      fn: () => nav.go(17),
      autoRepeat: false,
    },
  ]
})