import React, { useState } from 'react';
import Step01 from './Step01';
import Step02 from './Step02';

const SignUp = ({ ...props }) => {

    const [step, setStep] = useState<number>(1);

    if (step === 1) return <Step01 setStep={setStep} {...props} />
    return <Step02 setStep={setStep} {...props} />
}

export default SignUp;