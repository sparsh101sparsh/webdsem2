import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

      {/* Header */}
      <header className="bg-primary text-white text-center p-4">
        <h1>My Responsive Website</h1>
      </header>

      {/* Navbar */}
      <nav className="bg-dark p-3 text-center">
        <a href="#" className="text-white m-3 text-decoration-none">Home</a>
        <a href="#" className="text-white m-3 text-decoration-none">About</a>
        <a href="#" className="text-white m-3 text-decoration-none">Services</a>
        <a href="#" className="text-white m-3 text-decoration-none">Contact</a>
      </nav>

      {/* Content */}
      <div className="container mt-4">
        <div className="row">

          {/* Column 1 */}
          <div className="col-12 col-md-6">
            <div className="bg-light p-4 border">
              <h3>Column 1</h3>
              <p>
                This is the first content section.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <div className="bg-light p-4 border">
              <h3>Column 2</h3>
              <p>
                This is the second content section.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        © 2026 My Website | All Rights Reserved
      </footer>

    </div>
  );
}

export default App;