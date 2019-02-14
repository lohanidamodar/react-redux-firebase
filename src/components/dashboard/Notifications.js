import React from 'react';
import moment from 'moment';

const Notifications = props => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {props.notifications && props.notifications.map(notification=><li>{notification.content} by {notification.user} {moment(notification.time.toDate()).calendar()}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
