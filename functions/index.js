const functions  = require('firebase-functions')
const axios      = require('axios')
const cors       = require('cors')({origin: true})
const nodemailer = require('nodemailer')
const admin      = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

let url = "smtps://<EMAIL>:" + encodeURIComponent('<SENHA>') + "@smtp.gmail.com:465"
let transporter = nodemailer.createTransport(url)

const createNotification = ((notification) => {
	return admin.firestore().collection('notifications')
		.add(notification)
		.then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
	.document('projects/{projectId}')
	.onCreate(doc => {
		const project = doc.data()
		const notification = {
			content : 'Added a new project',
			user : `${project.authorFirstName} ${project.authorLastName}`,
			createdAt : admin.firestore.FieldValue.serverTimestamp()
		}
		return createNotification(notification)
	})

exports.projectCreated = functions.firestore
	.document('projects/{projectId}')
	.onCreate(doc => {
		const project = doc.data()
		const notification = {
			content: 'Added a new project',
			user: `${project.authorFirstName} ${project.authorLastName}`,
			createdAt: admin.firestore.FieldValue.serverTimestamp()
		}
		return createNotification(notification)
	})

exports.userJoined = functions.auth.user()
	.onCreate(user => {
		return admin.firestore().collection('users')
			.doc(user.uid).get().then(doc => {
				const newUser = doc.data()
				const notification = {
					content: 'Joined the party',
					user: `${newUser.firstName} ${newUser.lastName}`,
					createdAt: admin.firestore.FieldValue.serverTimestamp()
				}
				return createNotification(notification)
			})
	})

// Exemplo de como enviar um email
exports.sendTestMail = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		let remetente     = '"Diogo Cezar" <diogoctb@gmail.com>'
		let assunto       = 'Teste'
		let destinatarios = 'diogo@diogocezar.com'
		let corpoHtml     = '<h1>Ok\'s!</h1>'
		let email = {
			from: remetente,
			to: destinatarios,
			subject: assunto,
			html: corpoHtml
		}
		transporter.sendMail(email, (errMail, info) => {
			if (errMail) {
				res.status(500).json(errMail)
			}
			else{
				res.status(200).json(info)
			}
		})
	})
})

// Para utilizar isso é necessário pagar
exports.axiosTest = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		axios.get('https://rulianaediogo.diogocezar.com/ping')
			.then((resAxios) => {
				res.status(200).json({ data : resAxios.data})
			})
			.catch((err) => {
				res.status(500).json(err)
			})
	})
})