import React from 'react';
import "./Products.css";

const Products = (props) => {
  return (
    <div>
        <div>
          <div className="d-inline" style={{textAlign: 'center', maxWidth: '504px'}}>
            <div className="container d-inline" style={{textAlign: 'center'}}>
              <div className="row g-0 row-cols-1 text-center d-inline justify-content-center align-items-start space-rows" id="responsiveness" style={{textAlign: 'center'}}>
                <div className="col" style={{textAlign: 'center', maxWidth: '70%', height: '331px', maxHeight: '367px', display: 'block', position: 'relative', overflow: 'clip', marginTop: '50px', marginLeft: '15%'}}>
                  <div className="card cards-shadown cards-hover" data-aos="flip-left" data-aos-duration={950} style={{textAlign: 'center'}}>
                    <div className="card-header"><span className="space"><a target="_blank" rel="noreferrer" href={props.images}><img className="img" src={props.thumbnail} alt="" /></a></span>
                      <div className="cardheader-text">
                        <h4 id="heading-card-1">{props.title}</h4>
                        <p id="cardheader-subtext-1">{props.price}</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="pro card-text sub-text-color">{props.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Products;