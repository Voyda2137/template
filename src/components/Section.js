import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { alcoholAmountCalc, alcoholTotalPure } from '../service/AlcoholFunctions';
import { fetchData } from '../service/backendCalls';
import Card from "./Card";

function Section({ inputValue, weightValue }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        const sortedData = response.map(item => ({
          ...item,
          totalPureAlcohol: alcoholTotalPure(item.concentration, item.size, alcoholAmountCalc(item.price, inputValue))
        })).sort((a, b) => b.totalPureAlcohol - a.totalPureAlcohol);
        setData(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [inputValue, weightValue]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {isLoading && <PacmanLoader />}
            {data.map((item, i) => (
                <Card {...item} index={i} inputValue={inputValue} weightValue={weightValue} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Section;
