import React from 'react'
import M1 from '../../img/M1.png'
export default function CardList() {
    return (
    <>
        <div className='container'>
            <div className='CardL'>
                <div className='MidC'>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={M1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
