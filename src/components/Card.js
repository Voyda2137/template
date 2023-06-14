

function Card({id, name, price, concentration, size, img}) {
    return (
        <div className="col mb-5" key={id}>
        <div className={"card h-100 "}>
        {img ? <img className="card-img-top" src={img} alt={[id, name].join('-')} /> : <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt={`${[id,name].join('-')} template 450x300`} />}
        <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex flex-wrap flex-column ">
            <div className="d-flex justify-content-between">
                <strong>Price:</strong> <span>{price}</span>
            </div>
            {concentration && (
                <div className="d-flex justify-content-between">
                <strong>Concentration:</strong> <span>{concentration}</span>
                </div>
            )}
            {size && (
                <div className="d-flex justify-content-between">
                <strong>Size:</strong> <span>{size}</span>
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