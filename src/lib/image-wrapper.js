module.exports = ({url, width, height}) => {
  const w = width || 64
  const h = height || 36
  return `https://images.weserv.nl/?url=${url.replace(/http(s?):\/\//, '')}&w=${w}0&h=${h}&`
}