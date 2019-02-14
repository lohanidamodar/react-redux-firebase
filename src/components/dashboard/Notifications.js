import React from 'react';
import moment from 'moment';

const Notifications = props => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {props.notifications && props.notifications
              .map(notification=><li key={notification.id}>
                <span className="pink-text">{notification.user} </span>
                {notification.content}
                <span className="grey-text note-date"> {moment(notification.time.toDate()).calendar()}</span>
              </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
