import React from 'react';

function Card({name, price, concentration, size, img, index, inputValue}) {

    const alcoholCalc = () => {
        const result = price*2

        return result
    }

    return (
        <div className="col mb-5" key={index}>
        <div className={"card h-100"}>
        {img ? <img className="card-img-top" src={img} alt={[index, name].join('-')} /> : <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt={`${[index,name].join('-')} template 450x300`} />}
        <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex flex-wrap flex-column ">
            <div className="d-flex justify-content-between">
                <strong>Price:</strong> <span>{price} zł</span>
            </div>
            {concentration && (
                <div className="d-flex justify-content-between">
                <strong>Concentration:</strong> <span>{(concentration*100).toFixed(1)}%</span>
                </div>
            )}
            {size && (
                <div className="d-flex justify-content-between">
                <strong>Size:</strong> <span>{size} ml</span>
                </div>
            )}
            {inputValue && (
                <div className='d-flex justify-content-between'>
                    <strong>Gowno:</strong> <span>{alcoholCalc()}</span>
                </div>
            )}
            </div>
        </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <a className="btn btn-outline-dark m-3" href="https://www.google.pl">btn1</a>
                <a className="btn btn-outline-dark mx-3" href="https://www.google.pl">btn2</a>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Card;