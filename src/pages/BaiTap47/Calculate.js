import React, {useState} from 'react';
import { useCalculate } from '../../hooks/useCalculate';
import { CFormInput, CButton, CFormLabel } from '@coreui/react';

const Calculate = () => {

    const { result, addCalculate, subtractCalculate, multiplyCalculate, devideCalculate } = useCalculate();
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='row'>
                <CFormLabel>Result: {result}</CFormLabel>
                <div className='p-5'>
                    <CFormInput
                        style={{width: '150px'}}
                        
                        value={a}
                        className=''
                        onChange={(e) => setA(Number(e.target.value))} 
                    />
                    <CFormInput
                        style={{width: '150px'}}
                        
                        value={b}
                        className=' mt-4'
                        onChange={(e) => setB(Number(e.target.value))} 
                    />
                </div>
                <div className='d-flex'>
                    <CButton 
                        onClick={() => addCalculate(a, b)}
                        className='py-2 px-5 fw-bold' 
                        style={{
                            borderRadius: "8px",
                            outline: "none",
                            border: "1px solid orange"
                        }}>
                        ADD
                    </CButton>
                    <CButton 
                        onClick={() => subtractCalculate(a, b)}
                        className='py-2 px-5 fw-bold ml-3' 
                        style={{
                            borderRadius: "8px",
                            outline: "none",
                            border: "1px solid orange"
                        }}>
                        SUB
                    </CButton>
                    <CButton 
                        onClick={() => multiplyCalculate(a, b)}
                        className='py-2 px-5 fw-bold ml-3' 
                        style={{
                            borderRadius: "8px",
                            outline: "none",
                            border: "1px solid orange"
                        }}>
                        MULTIPLY
                    </CButton>
                    <CButton 
                        onClick={() => devideCalculate(a, b)}
                        className='py-2 px-5 fw-bold ml-3' 
                        style={{
                            borderRadius: "8px",
                            outline: "none",
                            border: "1px solid orange"
                        }}>
                        DEVIDE
                    </CButton>
                </div>
            </div>
        </div>
    );
}

export default Calculate;