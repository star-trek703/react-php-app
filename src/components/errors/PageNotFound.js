import { Helmet } from "react-helmet"

const PageNotFound = () => {
  return (
    <div className='container'>
      <Helmet>
          <title>404 - Page Not Found</title>
      </Helmet>

      <main className='main'>
        <h2 style={{ textAlign: "center" }}>
          404 <br />
          Page Not Found
        </h2>
      </main>
    </div>
  )
}

export default PageNotFound
