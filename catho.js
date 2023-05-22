module.exports = {
  url: "Catho's URL",

  fetchData: async function () {
    return await fetch(this.url)
  }
}
