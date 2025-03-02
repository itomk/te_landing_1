import MicroModal from 'micromodal'
import { Cookies } from '../functions/cookies.js'

class InitModal {
  constructor(modalId = 'modal', btnListAttr = 'data-bs-target', timerMsec = 7000, cookieName, numberDay = 1) {
    this.modalId = modalId
    this.modal = document.getElementById(this.modalId)

    this.form = this.modal.querySelector("form")
    this.formControls = this.form.querySelectorAll(".form-control")
    this.formMain = this.modal.querySelector(".modal__first")
    this.formResult = this.modal.querySelector(".modal__result")
    this.wpcf7Elm = this.modal.querySelector(".wpcf7")

    this.btnListAttr = btnListAttr
    this.btnList = document.querySelectorAll(`[${btnListAttr}=${modalId}]`)

    this.timerMsec = timerMsec
    this.cookieName = cookieName
    this.numberDay = numberDay
    this.cookies = new Cookies(this.cookieName, true, this.numberDay)

    this.btnOpenModal()
    this.openModalTimer()
    this.mailSent()
  }

  mailSent = () => {
    this.wpcf7Elm.addEventListener("wpcf7mailsent", () => {
      this.formMain.style.display = 'none'
      this.formResult.style.display = 'flex'
    }, false)
  }

  btnOpenModal = () => {
    this.btnList.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        this.openModal()
      })
    })
  }

  openModal = (openFromTimer = false) => {
    MicroModal.show(this.modalId, {
      closeTrigger: 'data-modal-close',
      disableScroll: true,
      onClose: () => {
        this.hiddenModal()
      },
      onShow: () => {
        openFromTimer && this.showModal()
      },
    })
  }

  showModal = () => {
    this.cookies.createCookies()
  }

  hiddenModal = () => {
    setTimeout(() => {
      this.formMain.style.display = 'flex'
      this.formResult.style.display = 'none'
      this.formControls.forEach((control) => (control.value = ''))
    }, 500)
  }

  openModalTimer = () => {
    const isOpenModal = this.cookies.getCookieVal(this.cookieName)

    isOpenModal ?? setTimeout(() => {
      this.openModal(true)
    }, this.timerMsec)
  }
}

export default InitModal
