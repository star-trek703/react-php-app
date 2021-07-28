const Category = ({ category }) => {
  return (
    <>
      <div key={ category.id }>
        { category.name }
      </div>
    </>
  )
}

export default Category
