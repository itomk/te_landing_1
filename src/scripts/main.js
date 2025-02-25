import { headerInit } from './blocks/header.js'
import { vhSetFix } from './functions/vh-fix.js'

window.addEventListener('DOMContentLoaded', () => {
  headerInit()
  vhSetFix()

  window.addEventListener('load', () => {
    return true
  })
})
