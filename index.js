
const bindAll = (instance, methods) => {
  if (methods) {
    return methods.forEach(method => {
      instance[method] = instance[method].bind(instance)
    })
  }

  return Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).forEach(property => {
    if (typeof instance[property] === 'function' && property !== 'constructor') {
      instance[property] = instance[property].bind(instance)
    }
  })
}

module.exports = bindAll
