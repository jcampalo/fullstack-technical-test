module.exports = (config) => {
  return {
    ...config,
    node: {
      fs: 'empty'
    }
  }
}
