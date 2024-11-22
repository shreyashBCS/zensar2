import React from 'react';

function Industries() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column for the heading */}
        <div className="col-12 col-md-4 text-start">
          <h3>Industries</h3>
        </div>

        {/* Right Column for the descriptive text */}
        <div className="col-12 col-md-8 text-end overflow-hidden">
          <h5>We work with industries that touch lives daily and bring change to the</h5>
          <h5>world: Banking and Financial Services, Insurance Services, Retail and</h5>
          <h5>Consumer Services, Hi-tech Engineering Services, Healthcare and Life</h5>
          <h5>Sciences Services and Telecom Services</h5>
        </div>
      </div>





      <div className="container mt-4">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 mb-4">
            <div className="card position-relative" style={{ width: '16rem', height: '290px' }}>
              <img src="" className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <a
                  href="#"
                  className="position-absolute bottom-0 start-0 w-100 bg-black text-white p-2 text-decoration-none"
                >
                  Go somewhere &#8594;
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card position-relative" style={{ width: '16rem', height: '290px' }}>
              <img src="" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <a
                  href="#"
                  className="position-absolute bottom-0 start-0 w-100 bg-black text-white p-2 text-decoration-none"
                >
                  Go somewhere &#8594;
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card position-relative" style={{ width: '16rem', height: '290px' }}>
              <img src="" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <a
                  href="#"
                  className="position-absolute bottom-0 start-0 w-100 bg-black text-white p-2 text-decoration-none"
                >
                  Go somewhere &#8594;
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card position-relative" style={{ width: '16rem', height: '290px' }}>
              <img src="" className="card-img-top" alt="Card 4" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <a
                  href="#"
                  className="position-absolute bottom-0 start-0 w-100 bg-black text-white p-2 text-decoration-none"
                >
                  Go somewhere &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
