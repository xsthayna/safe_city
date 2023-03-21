import React, { useState } from 'react';
import Step01 from './Step01';
import Step02 from './Step02';

export type signUpTypes = {
    name: string,
    surname: string,
    cpf: string,
    email: string,
    password: string,
    cep: string,
    country: string
}
const SignUp = ({ ...props }) => {

    const [step, setStep] = useState<number>(1);
    const [data, setData] = useState<signUpTypes>( { name: "", surname: "", cpf: "", email: "", password: "", cep: "", country: "" } )

    if (step === 1) return <Step01 setStep={setStep} data={data} setData={setData} {...props} />
    return <Step02 setStep={setStep} data={data} setData={setData} {...props} />
}

export default SignUp;