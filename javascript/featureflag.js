function getFlags () {
  const query = qs.parse(window.location.search.slice(1))
  Object.entries(query).forEach(([k, v]) => {
    delete query[k]
    if (k.indexOf('flag-') !== 0) return
    query[k.replace('flag-', '')] = v
  })
  return parseBooleanObject(query)
}

function parseBooleanObject (obj) {
  if (!obj) return false
  const booleanObj = {}
  Object.entries(obj).forEach(([name, value]) => {
    booleanObj[name] = value.toLowerCase() === 'true'
  })

  return booleanObj
}
