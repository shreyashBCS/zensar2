import React from 'react';

function Insight() {
  return (
    <div className="ms-5 mt-5">
      {/* Upper section with text and button */}
      <div className="d-flex align-items-start mb-4">
        <div className="me-5">
          <h2>Insights</h2>
          <h5>Our thinking on ideas,</h5>
          <h5>technology</h5>
          <h5>that create impact</h5>
          <button className="p-2 bg-black text-white rounded-sm">Read More &#8594;</button>
        </div>

        {/* Cards section */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card " style={{ width: '16rem', height: '290px' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                </p>
                <a href="#" className="position-absolute bottom-0 start-0 w-10 bg-black text-white p-2 text-decoration-none" >Go somewhere &#8594;</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '16rem', height: '290px' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                </p>
                <a href="#" className="position-absolute bottom-0 start-0 w-10 bg-black text-white p-2 text-decoration-none">Go somewhere &#8594;</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '16rem', height: '290px' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                </p>
                <a href="#" className="position-absolute bottom-0 start-0 w-10 bg-black text-white p-2 text-decoration-none">Go somewhere &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insight;
