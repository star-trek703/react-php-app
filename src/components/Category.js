import { Link } from "react-router-dom"

const Category = ({ category }) => {
  return (
    <>
      <div key={ category.id }>
        <Link to="category/{ category.name }">
          { category.name }
        </Link>
      </div>
    </>
  )
}

export default Category
