class Cookies {
  constructor(cookiesName = "", cookiesValue = false, cookiesDateTime = 1) {
    var dateNew = new Date()
    dateNew.setTime(dateNew.getTime() + (cookiesDateTime * 24 * 60 * 60 * 1000))

    this.cookiesName = cookiesName
    this.cookiesValue = cookiesValue
    this.cookiesDateTime = dateNew
  }

  getCookieVal(cookiesName) {
    if (document.cookie.length > 0) {
      var cStart = document.cookie.indexOf(cookiesName + "=")

      if (cStart != -1) {
        cStart = cStart + cookiesName.length + 1
        var cEnd = document.cookie.indexOf(";", cStart)

        if (cEnd == -1) {
          cEnd = document.cookie.length
        }

        return decodeURI(document.cookie.substring(cStart, cEnd))
      }
    }

    return null
  }

  createCookies(
    cookiesName = this.cookiesName,
    cookiesValue = this.cookiesValue
  ) {
    let expires = "; expires=" + this.cookiesDateTime.toGMTString()
    document.cookie = cookiesName + "=" + cookiesValue + expires + "; path=/"
  }
}

export { Cookies }
