import React                from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose }          from 'redux'
import { connect }          from 'react-redux'
import { Link }             from 'react-router-dom'

const ProjectDetails = (props) => {
	const { project } = props
	if(project){
		return <div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">
							{project.title}
						</span>
						<p>{project.content}</p>
					</div>
					<div className="card-content">
						<Link to="/">
							<button className="btn pink lighten-1 z-depth-0">
								Back
							</button>
						</Link>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>
							Posted by {project.authorFirstName} {project.authorLastName}
						</div>
						<div>2nd September, 2am</div>
					</div>
				</div>
			</div>;
	}
	else{
		return (
			<div className="container center">Loading project...</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id       = ownProps.match.params.id
	const projects = state.firestore.data.projects
	const project  = projects ? projects[id] : null
	return {
		project: project
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(ProjectDetails)