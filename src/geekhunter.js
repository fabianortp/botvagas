const Landing = {
  url: 'https://www.geekhunter.com.br/graphql',

  payload: {
    operationName: 'findShowcaseJobs',
    variables: {
      showcaseParams: {
        focuses: [],
        order: 'newer',
        pagination: {
          page: 0,
          perPage: 10
        },
        remoteWork: true,
        salaryRange: {
          min: 1000,
          max: 30000
        },
        seniority: [],
        workMode: []
      }
    }
  },

  fetchData: async function () {
    return await fetch(this.url, {
      method: 'POST'
    }).then(res => res.json())
  },

  run: async function () {
    let resp = await this.fetchData()
    console.log(resp.offers)
  }
}

Landing.run()
