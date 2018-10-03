export const createProject = (project) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		dispatch({type: 'CREATE_PROJECT', project})
	}
}