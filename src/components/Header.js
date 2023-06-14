import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Header({header, setInputValue}) {
    return (
        <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">{header}</h1>
                <p className="lead fw-normal text-white-50 mb-0"></p>
            </div>
        </div>
        <Form className='container'>
                <Form.Group as={Row} className='m-4'>
                    <Form.Label column sm="2" style={{color: 'white'}}>
                        Sos
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="piniadz" onChange={(e) => setInputValue(e.target.value)} />
                    </Col>
                </Form.Group>
            </Form>
    </header>
    )
}

export default Header;