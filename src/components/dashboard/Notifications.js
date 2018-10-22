import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const Notifications = ({ notifications }) => {
	return (
		<div className="section">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Notifications</span>
					<ul className="online-users">
						{notifications && notifications.map((notification, index) => {
							return (
								<li key={index} style={{ 'marginBottom': '15px'}}>
									<p>{notification.user}</p>
									<p>{notification.content}</p>
									<p>{moment(notification.createdAt.toDate()).calendar()}</p>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Notifications