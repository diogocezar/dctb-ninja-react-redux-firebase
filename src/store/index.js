import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
import reducers                            from './reducers'
import thunk 		                       from 'redux-thunk'
import { reduxFirestore, getFirestore }    from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase                            from '../firebase'

const store = createStore(
	reducers,
	compose(
		applyMiddleware(
			thunk.withExtraArgument({
				getFirebase,
				getFirestore
			})
		),
		reduxFirestore(firebase),
		reactReduxFirebase(firebase, {
			userProfile: "users",
			useFirestoreForProfile: true,
			attachAuthIsReady: true
		})
	)
);

export default store