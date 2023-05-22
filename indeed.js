module.exports = {
  url: "Indeed's URL",

  fetchData: async function () {
    return await fetch(this.url)
  }
}
