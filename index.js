const fetch = require("isomorphic-unfetch")

class AlQuranApiClient {
    constructor(basePath) {
        if (basePath == null) {
            this.basePath = "https://api.alquran.cloud/v1"
        }
    }

    request(endpoint) {
        let url = this.basePath + endpoint
        console.log(url)
        let headers = {
            'Content-type': 'application/json'
        }

        let options = {
            method: 'GET'
        }

        let config = {
            ...options,
            ...headers
        }

        return fetch(url, config).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error(r)
        })
    }

    ayah(reference, edition) {
        let url = "/ayah/"

        if (edition != null) {
            url += reference + '/' + edition
        } else {
            url += reference
        }

        return this.request(url)
    }

}

