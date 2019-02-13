import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id} </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dicta, vero perspiciatis unde et, ut iusto corporis recusandae tempora aliquam libero blanditiis, consectetur dignissimos! Similique, placeat? Dignissimos perferendis earum sed.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Damodar Lohani</div>
                <div>1st February, 5pm</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
