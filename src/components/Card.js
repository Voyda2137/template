import React from 'react';
import { alcoholAmountCalc, alcoholInOrganism, timeToBeSober } from '../service/AlcoholFunctions';

function Card({name, price, concentration, size, totalPureAlcohol, img, index, inputValue, weightValue}) {

    const alcoholAmount = alcoholAmountCalc(price, inputValue)
    // const totalPureAlcohol = alcoholTotalPure(concentration, size, alcoholAmount)
    const totalAlcoholInOrganism = alcoholInOrganism(totalPureAlcohol, weightValue)
    const timeToSober = timeToBeSober(totalAlcoholInOrganism)

    return (
        <>
            {alcoholAmount !== 0 &&
                (<div className="col mb-5" key={index}>
                    <div className={"card h-100"}>
                        {img ? (
                            <img className="card-img-top" src={img} alt={[index, name].join('-')}/>
                        ) : (
                            <img
                                className="card-img-top"
                                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                alt={`${[index, name].join('-')} template 450x300`}
                            />
                        )}
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{name}</h5>
                                <div className="d-flex flex-wrap flex-column ">
                                    <div className="d-flex justify-content-between">
                                        <strong>Price:</strong> <span>{price} zł</span>
                                    </div>
                                    {concentration && (
                                        <div className="d-flex justify-content-between">
                                            <strong>Concentration:</strong>
                                            <span>{(concentration * 100).toFixed(1)}%</span>
                                        </div>
                                    )}
                                    {size && (
                                        <div className="d-flex justify-content-between">
                                            <strong>Size:</strong> <span>{size} ml</span>
                                        </div>
                                    )}
                                    {inputValue && (
                                        <>
                                            <div className='d-flex justify-content-between'>
                                                <strong>Możesz kupić:</strong>
                                                <span>{alcoholAmount}</span>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <strong>Łącznie alkoholu:</strong>
                                                <span>{totalPureAlcohol} ml</span>
                                            </div>
                                            {totalAlcoholInOrganism && (<div className='d-flex justify-content-between'>
                                                <strong>Promile po wypiciu:</strong>
                                                <span>{totalAlcoholInOrganism}‰</span>
                                            </div>)}
                                            {timeToSober && (
                                                <div className='d-flex justify-content-between'>
                                                    <strong>Pokaż się na wykładzie po:</strong>
                                                    <span>{timeToSober}</span>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                {/*<a className="btn btn-outline-dark m-3">btn1</a>*/}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default Card;
