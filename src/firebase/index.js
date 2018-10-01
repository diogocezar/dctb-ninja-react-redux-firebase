import firebaseConfig from '../configs/firebaseConfig'
import firebase       from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({
	timestampsInSnapshots: true
})

export default firebase