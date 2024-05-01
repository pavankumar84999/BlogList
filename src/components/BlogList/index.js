// Write your JS code here

import './index.css'

const BlogList = props => {
  const {blogDetails} = props

  const {title, description, publishedDate} = blogDetails

  return (

    <li>
      <h1>{title}</h1>
      <p className="date">{publishedDate}</p>

      <p>{description}</p>
       <hr />
    </li>
  )
}

export default BlogList
