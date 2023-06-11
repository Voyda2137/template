import Card from "./Card"

function Section() {

    const propss = [
        {
            id: 1,
            name: 'Snajper',
            price: 3.29,
            concentration: 6,
            size: 500
        },
        {
            id: 2,
            name: 'Zubr',
            price: 5.29,
            concentration: 12,
            size: 800
        }
];
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {propss.map((item) => {
                    return (
                        <Card {...item} />
                    )
                })}
            </div>
        </div>
    </section>
    )
}

export default Section;