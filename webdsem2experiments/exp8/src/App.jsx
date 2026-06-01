import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'NovaBook Pro',
    description: 'A lightweight performance laptop for study, coding, and creative work.',
    details:
      'NovaBook Pro includes a 14-inch full HD display, long battery life, fast SSD storage, and a comfortable keyboard for daily productivity.',
    price: '$899',
    badge: 'New',
    badgeClass: 'text-bg-success',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Pulse Wireless Headphones',
    description: 'Clear audio, soft ear cushions, and noise isolation for focused listening.',
    details:
      'Pulse Wireless Headphones offer Bluetooth connectivity, balanced sound, up to 32 hours of battery backup, and quick charging support.',
    price: '$149',
    badge: 'Sale',
    badgeClass: 'text-bg-danger',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'PixelFit Smart Watch',
    description: 'Track fitness, notifications, heart rate, and daily goals from your wrist.',
    details:
      'PixelFit Smart Watch has a bright touch display, step tracking, heart-rate monitoring, water resistance, and smartphone notifications.',
    price: '$199',
    badge: 'New',
    badgeClass: 'text-bg-success',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-vh-100 bg-body-tertiary d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            TechStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#techStoreNavbar"
            aria-controls="techStoreNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="techStoreNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">
        <section className="hero-section text-white">
          <div className="container py-5">
            <div className="col-lg-8 py-4">
              <span className="badge text-bg-warning mb-3">Experiment 8</span>
              <h1 className="display-5 fw-bold mb-3">Bootstrap UI Components for Web Page Design</h1>
              <p className="lead mb-0">
                A responsive TechStore page using navbar, product cards, buttons, badges, images,
                grid layout, and modal popup.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-5" id="products">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
            <div>
              <p className="text-uppercase text-primary fw-semibold small mb-1">Featured Products</p>
              <h2 className="h1 fw-bold mb-0">Shop Latest Tech</h2>
            </div>
            <a href="#contact" className="btn btn-outline-primary">
              Contact Sales
            </a>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <div className="card h-100 shadow-sm product-card">
                  <img src={product.image} className="card-img-top product-image" alt={product.name} />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                      <h3 className="h5 card-title mb-0">{product.name}</h3>
                      <span className={`badge ${product.badgeClass}`}>{product.badge}</span>
                    </div>
                    <p className="card-text text-secondary flex-grow-1">{product.description}</p>
                    <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                      <span className="fs-5 fw-bold text-dark">{product.price}</span>
                      <button className="btn btn-primary" type="button" onClick={() => setSelectedProduct(product)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container pb-5" id="about">
          <div className="bg-white border rounded-2 p-4 p-md-5">
            <h2 className="h3 fw-bold">About TechStore</h2>
            <p className="text-secondary mb-0">
              TechStore presents useful technology products with clean Bootstrap components,
              responsive columns, clear typography, and action buttons.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-4" id="contact">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="mb-0">&copy; 2026 TechStore. All Rights Reserved.</p>
          <div className="d-flex gap-3 fs-5">
            <a className="text-white" href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a className="text-white" href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a className="text-white" href="#" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </footer>

      {selectedProduct && (
        <div className="modal-backdrop-custom" role="presentation">
          <div className="modal d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <span className={`badge ${selectedProduct.badgeClass} mb-2`}>{selectedProduct.badge}</span>
                    <h5 className="modal-title">{selectedProduct.name}</h5>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setSelectedProduct(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedProduct.image}
                    className="img-fluid rounded-2 mb-3 modal-product-image"
                    alt={selectedProduct.name}
                  />
                  <p className="text-secondary">{selectedProduct.details}</p>
                  <p className="fs-4 fw-bold mb-0">{selectedProduct.price}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setSelectedProduct(null)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
