import React, { useEffect, useState } from 'react';
import { fetchData } from '../service/backendCalls';
import Card from "./Card";
import {PacmanLoader} from 'react-spinners'

function Section({inputValue}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetchData();
            setData(response);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setIsLoading(false);
          }
        };
        getData();
      }, []);

    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {isLoading && <PacmanLoader />}
                {data.map((item, i) => {
                    return (
                        <Card {...item} index={i} inputValue={inputValue} />
                    )
                })}
            </div>
        </div>
    </section>
    )
}

export default Section;