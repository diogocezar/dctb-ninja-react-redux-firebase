const functions = require('firebase-functions')
const axios     = require('axios')

exports.external = functions.https.onRequest((request, response) => {
	axios.get('https://rulianaediogo.diogocezar.com/ping')
		.then(response => {
			response.send(JSON.stringify(response))
		})
		.catch(err => {
			response.send(JSON.stringify(err))
		})
})