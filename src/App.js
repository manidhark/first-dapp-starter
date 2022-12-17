import './App.css';
import Footer from './components/footer';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='bg-black'>

      <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-black">
          <div className="container">
            <b className='text-success' style={{ fontSize: "2em" }}>NFT</b>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <button className="btn text-white" style={{ backgroundColor: "#17B3C1" }}>Connect Wallet</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <br /><br /><br /><br /><br />
      <section className="py-5">
        <div className="container">

          <div className="row">
            <div className="col-md-12 text-center">

              <form >
                <div className="row">
                  <div className="col-md-3 mb-3"></div>
                  <div className="col-md-4 mb-3 form-group">
                    <input type="text" className="form-control" id="firstName" placeholder="Enter URI" required style={{ backgroundColor: "#fff", borderColor: "rgba(23, 179, 193, 0.1)", opacity: 20 }} /><br />
                  </div>
                  <div className="col-md-2 mb-3">
                    <button className="btn text-white" style={{ backgroundColor: "#17B3C1" }} >Mint</button>
                  </div>
                  <div className="col-md-3 mb-3"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section><br />

      {/* section7 */}
      <section className="py-5">
        <div className="container">
          <div className="row text-white text-center">
            <div className="row row-cols-1 row-cols-md-4 g-2">
              <div className="col">
                <div className="card h-100 bg-black" style={{ borderColor: "#fff" }}>
                  <div className="container">
                    <br /><div>
                      <img style={{ width: "150px", height: "150px" }} src="https://gateway.pinata.cloud/ipfs/QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB" alt="" />
                    </div><br />
                    <p className='text-center'>QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB</p>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="card h-100 bg-black" style={{ borderColor: "#fff" }}>
                  <div className="container">
                    <br /><br /><div>
                      <img style={{ width: "150px", height: "150px" }} src="https://gateway.pinata.cloud/ipfs/QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB" alt="" />
                    </div><br />
                    <p className='text-center'>QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 bg-black" style={{ borderColor: "#fff" }}>
                  <div className="container">
                    <br /><br /><div>
                      <img style={{ width: "150px", height: "150px" }} src="https://gateway.pinata.cloud/ipfs/QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB" alt="" />
                    </div><br />
                    <p className='text-center'>QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 bg-black" style={{ borderColor: "#fff" }}>
                  <div className="container">
                    <br /><br /><div>
                      <img style={{ width: "150px", height: "150px" }} src="https://gateway.pinata.cloud/ipfs/QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB" alt="" />
                    </div><br />
                    <p className='text-center'>QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 bg-black" style={{ borderColor: "#fff" }}>
                  <div className="container">
                    <br /><br /><div>
                      <img style={{ width: "150px", height: "150px" }} src="https://gateway.pinata.cloud/ipfs/QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB" alt="" />
                    </div><br />
                    <p className='text-center'>QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 bg-black" style={{ borderColor: "#fff" }}>
                  <div className="container">
                    <br /><br /><div>
                      <img style={{ width: "150px", height: "150px" }} src="https://gateway.pinata.cloud/ipfs/QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB" alt="" />
                    </div><br />
                    <p className='text-center'>QmUQ7hwx7jDJ3snuCby4CKpPDvWDkuAJdKhvHE4Ws5beEB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
