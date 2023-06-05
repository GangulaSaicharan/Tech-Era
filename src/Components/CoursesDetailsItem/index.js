import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-details-card">
      <div className="Course-details-container">
        <img className="course-details-image" src={imageUrl} alt={name} />
        <div className="course-info-container">
          <h1 className="course-details-title">{name}</h1>
          <p className="course-details-Info">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
