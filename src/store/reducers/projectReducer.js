const initState = {
	projects: [
		{id: '1', title: 'test1', content: 'content1'},
		{id: '2', title: 'test2', content: 'content2'},
		{id: '3', title: 'test3', content: 'content3'}
	]
};

const projectReducer = (state = initState, action) => {
	return state
};

export default projectReducer
