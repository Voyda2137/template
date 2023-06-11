

function Card({id, name, price, concentration, size}) {
    return (
        <div className="col mb-5" key={id}>
        <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{name}</h5>
                {price && <span>{price}</span>}
                {concentration && <div>{concentration}</div>}
                {size && <div>{size}</div>}
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <a className="btn btn-outline-dark mx-3" href="https://www.google.pl">btn1</a>
                <a className="btn btn-outline-dark mx-3" href="https://www.google.pl">btn2</a>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Card;