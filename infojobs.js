module.exports = {
  url: "Infojobs' URL",

  fetchData: async function () {
    return await fetch(this.url)
  }
}
