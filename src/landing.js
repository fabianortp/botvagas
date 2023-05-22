const Landing = {
  url: 'https://landing.jobs/jobs/search.json?hd=false&t_co=false&t_st=false&fr=true',

  fetchData: async function () {
    return await fetch(this.url).then(res => res.json())
  },

  run: async function () {
    let resp = await this.fetchData()
    // console.log(Object.keys(resp))
    console.log(resp.offers)
  }
}

export default Landing;