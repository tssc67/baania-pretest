import React from 'react';
import './main.scss';
import Axios from 'axios';

import lt from '../../assets/img/lt.png';
import gt from '../../assets/img/gt.png';
import success from '../../assets/img/check.png';
import fail from '../../assets/img/x.png';
import { Button, ButtonToolbar, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { api, createHouse, deleteHouse, getHouselist, getPostcodeDetail, getPostcodes, House, patchHouse } from '../api';

const EmptyHouseObject = {
    id: null,
    name: '',
    post_code: '',
    price: '',
    desc: '',
};


const Header: React.FunctionComponent<{
    url: string,
    setURL(url: string),
    port: string,
    setPort(port: string),
    connect(),
}> = ({url, setURL, port, setPort, connect}) => {
    return <header>
        <table className='content-center'>
            <tbody>
                <tr>
                    <td width='100%'>URL</td>
                    <td width='100%'>PORT</td>
                    <td></td>
                </tr>
                <tr>
                    <td><input placeholder='http://localhost' id='url' type='text' value={url} onChange={(e) => setURL(e.target.value)}/></td>
                    {/* Could be number input but styling is not suitable */}
                    <td><input placeholder='8000' id='port' type='text' value={port} onChange={(e) => setPort(e.target.value)}/></td>
                    <td><Button className='houselist-btn' id='connect-btn' variant="primary" onClick={connect}>CONNECT</Button></td>
                </tr>
            </tbody>
        </table>
    </header>
}
const Content: React.FunctionComponent<any> = ({houselist, setShowCreateModal, rpp, setRpp, page, setPage, fetchHouselist} ) => {
    const handleDeleteHouse = async (houseId: number) => {
        const result = await deleteHouse(houseId);
        if(result) {
            setShowCreateModal([true, 'SUCCESS', null]);
        } else {
            setShowCreateModal([true, 'FAIL', null]);
        }
    }
    return <div id='content' className='content-center'>
        <div id='content-header'>
            <div id='label'>HOUSE LIST</div>
            <Button className='houselist-btn' id='create-btn' variant="success" onClick={() => setShowCreateModal([true, 'CREATE', {...EmptyHouseObject}])}>CREATE</Button>
        </div>
        <table id='houselist-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Post code</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            {houselist[1].map((house) => <tbody key={house.id}>
                <tr>
                    <td>{house.id}</td>
                    <td>{house.name}</td>
                    <td>{house.post_code}</td>
                    <td>{house.price}</td>
                    <td>
                        <div id='view-detail-btn' onClick={() => {
                            setShowCreateModal([true, 'UPDATE', {...house}]);
                        }}>VIEW DETAIL</div>
                        <div id='delete-btn' onClick={()=> handleDeleteHouse(house.id)}>DELETE</div>
                    </td>
                </tr>
            </tbody>)}
        </table>
        <div id='rpp-selector'>
            Rows per page:
            <select value={rpp} onChange={(e) => {
                const _rpp = Number(e.target.value)
                const _page = Math.floor(rpp / _rpp * page);
                setRpp(_rpp);
                setPage(_page)
                fetchHouselist(_rpp, _page);
            }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
            {page * rpp + 1} - {((page + 1) * rpp)} of {houselist[0]}
            &nbsp;
            <img id='previous-page' src={lt} onClick={() => {
                const prevPage = Math.max(0, page - 1)
                setPage(prevPage);
                fetchHouselist(rpp, prevPage);
            }} />
            <img id='next-page' src={gt} onClick={() => {
                const nextPage = page + 1;
                setPage(nextPage);
                fetchHouselist(rpp, nextPage);
            }} />
        </div>
    </div>
}

const Footer: React.FunctionComponent<{
    postcodes: { post_code: string }[]
    }> = ({postcodes}) => {
    const [postcode, setPostcode] = React.useState<string>('')
    const [detail, setDetail] = React.useState<[number, number]>(null);
    return <footer className='content-center'>
        <div>
            <div id="select-container">
                <FloatingLabel controlId="floatingSelect" label="SELECT POST CODE">
                    <Form.Select id='postcode-select' value={postcode} onChange={async (e) => {
                        setPostcode(e.target.value);
                        const _detail = await getPostcodeDetail(e.target.value);
                        setDetail(_detail);
                    }} aria-label="Floating label select example">
                        {postcodes.map(({ post_code }) => <option value={post_code} key={post_code}>{post_code}</option>)}
                    </Form.Select>
                </FloatingLabel>
            </div>
            {detail && <React.Fragment>
                <span id='postcode-detail'>
                    Average: {detail[0]}<br/>
                    Median: {detail[1]}
                </span>
            </React.Fragment>}
        </div>
    </footer>
}


type ModalState = [boolean, 'CREATE' | 'UPDATE' | 'SUCCESS' | 'FAIL', {
    id?: number,
    name: string,
    post_code: string,
    price: string,
    desc: string,
}];

const UpsertModal: React.FunctionComponent<{
    showCreateModal: ModalState,
    setShowCreateModal(modalState: ModalState),
    refreshHouselist()}> = ({showCreateModal, setShowCreateModal, refreshHouselist}) => {
    const mode = showCreateModal[1];
    const house = showCreateModal[2];
    const handleChange = (propName: keyof House) => (e: any) => {
        setShowCreateModal([true, mode, {
            ...house,
            [propName]: e.target.value
        }])
    }
    const isSuccess = mode === 'SUCCESS';
    const handleUpsert = async () => {
        let ok = false;
        if(mode === 'CREATE') {
            ok = await createHouse(house as House);
            
        } else {
            ok = await patchHouse(house as House);
        }
        if(ok) {
            setShowCreateModal([
                true,
                'SUCCESS',
                null,
            ]);
        } else {
            setShowCreateModal([
                true,
                'FAIL',
                showCreateModal[2],
            ]);
        }
    }
    return <Modal className={(mode === 'FAIL' || mode === 'SUCCESS') ? 'result-modal' : ''} show={showCreateModal[0]} animation={false} centered>
        {(mode === 'CREATE' || mode === 'UPDATE') && <React.Fragment>
            <div className='my-modal-header'>Create</div>
            <Form>
                <Row>
                    <Col className='px-1 m-0' xs={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="p-0 m-0">
                            <Form.Control type="text" placeholder="Name" onChange={handleChange('name')} value={house.name}/>
                        </FloatingLabel>
                    </Col>
                    <Col className='px-1 m-0'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Postcode"
                            className="p-0 m-0">
                            <Form.Control type="text" placeholder="Name" onChange={handleChange('post_code')}  value={house.post_code}/>
                        </FloatingLabel>
                    </Col>
                    <Col className='px-1 m-0'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Price"
                            className="p-0 m-0">
                            <Form.Control type="text" placeholder="Name" onChange={handleChange('price')}  value={house.price}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-1 pt-2 m-0'>
                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                style={{ height: '100px' }} onChange={handleChange('desc')}  value={house.desc}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <ButtonToolbar className='pt-1'>
                    <Button className='mx-1' variant="light" id='upsert-cancel-btn' onClick={() => {
                        setShowCreateModal([false, 'CREATE', {...EmptyHouseObject}]);
                    }}>Cancel</Button>
                    <Button variant='success' id='upsert-confirm-btn' onClick={handleUpsert}>{mode}</Button>
                </ButtonToolbar>
            </Form>
        </React.Fragment>}  
        {(mode === 'FAIL' || mode === 'SUCCESS') && <React.Fragment>
            <div id='result-icon' className={mode.toLowerCase()}>
                <img src={isSuccess ? success : fail}/>
            </div>
            <span id='result-label'>{isSuccess ? 'Success' : 'Fail'}</span>
            <span id='result-description'>{isSuccess ? 'Create successfully' : 'Let\'s try one more again'}</span>
            <Button variant='light' onClick={() => {
                setShowCreateModal([false, 'CREATE', {...EmptyHouseObject}]);
                refreshHouselist();
            }}>{isSuccess ? 'CONTINUE' : 'TRY AGAIN'}</Button>
        </React.Fragment>}
    </Modal>
}

const ResultModal: React.FunctionComponent<{
    status: boolean,
    showCreateModal: ModalState ,
    setShowCreateModal(modalState: ModalState)}
    > =  ({status, showCreateModal, setShowCreateModal}) => {
    return <Modal show={showCreateModal[0]} animation={false} centered>

    </Modal>
}


export const Main: React.FunctionComponent = (props) => {
    const [url, setURL] = React.useState('');
    const [port, setPort] = React.useState('');
    const [postcodes, setPostcodes] = React.useState([]);
    const [houselist, setHouselist] = React.useState<[number, House[]]>([0, []]);
    const [rpp, setRpp] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [showCreateModal, setShowCreateModal] = React.useState<ModalState>([false, 'CREATE', {...EmptyHouseObject}]);
    const fetchPostcodes = async () => {
        setPostcodes(await getPostcodes());
    }
    const fetchHouselist = async (_rpp: number, _page: number) => {
        setHouselist(await getHouselist(_rpp * _page, _rpp));
    }
    const refreshHouselist = async () => {
        try {
            await fetchHouselist(rpp, page);
        } catch (err) {
            
        }
    }

    const connect = async () => {
        try {
            const _url = new URL(url);
            _url.port = port;
            api.defaults.baseURL = _url.toString();
            await fetchPostcodes();
            await fetchHouselist(5, 0);
            setShowCreateModal([true, 'SUCCESS', {...EmptyHouseObject}]);
        } catch (e) {
            setShowCreateModal([true, 'FAIL', {...EmptyHouseObject}]);
        }
    }


    // React.useEffect(() => {

    // }, []);

    return <React.Fragment>
        <UpsertModal 
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal}
            refreshHouselist={refreshHouselist}/>
        <Header url={url} setURL={setURL} port={port} setPort={setPort} connect={connect}/>
        <Content
            houselist={houselist}
            setShowCreateModal={setShowCreateModal}
            rpp={rpp}
            setRpp={setRpp}
            page={page}
            setPage={setPage}
            fetchHouselist={fetchHouselist}
        />
        <Footer postcodes={postcodes}/>
    </React.Fragment>
}