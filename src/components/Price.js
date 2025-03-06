import React from 'react'

const Price = () => {
  return (
    <div><>
    {/* Required meta tags */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Bootstrap CSS */}
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossOrigin="anonymous"
    />
    <title>Bootstrap 5.0 Pricing Table</title>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .card {\n      border:none;\n      padding: 10px 50px;\n    }\n\n    .card::after {\n      position: absolute;\n      z-index: -1;\n      opacity: 0;\n      -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .card:hover {\n\n\n      transform: scale(1.02, 1.02);\n      -webkit-transform: scale(1.02, 1.02);\n      backface-visibility: hidden; \n      will-change: transform;\n      box-shadow: 0 1rem 3rem rgba(0,0,0,.75) !important;\n    }\n\n    .card:hover::after {\n      opacity: 1;\n    }\n\n    .card:hover .btn-outline-primary{\n      color:white;\n      background:#007bff;\n    }\n\n  "
      }}
    />
    <div
      className="container-fluid"
      style={{ background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)" }}
    >
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title">Basic</h5>
                  <small>Individual</small>
                  <br />
                  <br />
                  <span className="h2">$8</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Cras justo odio
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Vestibulum at eros
                </li>
              </ul>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{ borderRadius: 30 }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title">Standard</h5>
                  <small>Small Business</small>
                  <br />
                  <br />
                  <span className="h2">$20</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Cras justo odio
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Vestibulum at eros
                </li>
              </ul>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{ borderRadius: 30 }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title">Premium</h5>
                  <small>Large Companies</small>
                  <br />
                  <br />
                  <span className="h2">$40</span>/month
                  <br />
                  <br />
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Cras justo odio
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>{" "}
                  Vestibulum at eros
                </li>
              </ul>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  style={{ borderRadius: 30 }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Option 1: Bootstrap Bundle with Popper */}
    </div>
  </>
  </div>
  )
}

export default Price