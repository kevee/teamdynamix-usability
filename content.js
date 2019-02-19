$(function() {
  if (window.location.href.search('TDAdmin') > -1) {
    //Don't run extension when logged into administrator interface
    return
  }
  $('body').addClass('tdx-usability')
  window.tdxKeepInWindow = (url, width, height, name, scrollbars) => {
    window.location.href = url
  }
  const fixTdx = () => {
    $('a[href*=javascript]').each(function() {
      const href = $(this).attr('href')
      if (href.search(/openWin\(/) === -1) {
        return
      }
      let newHref = href
        .replace(/javascript(.*)\(('|")/, '')
        .replace(/('|"),(.*)/, '')

      $(this).attr('href', `javascript:window.location.href="${newHref}"`)
    })
    $('[onClick*=openWin]').each(function() {
      let location = $(this).attr('onclick')
      location = location
        .replace(/javascript(.*)\(('|")/, '')
        .replace(/\',(.*)$/, '')
      $(this).removeAttr('onclick')
      const $clone = $(this).clone(false)
      $clone.data('location', location)
      $(this).replaceWith($clone)
      $clone.on('click', function(event) {
        window.location.href = $(this).data('location')
        return false
      })
    })
  }

  const refresh = () => {
    fixTdx()
    setTimeout(refresh, 500)
  }
  refresh()
})
