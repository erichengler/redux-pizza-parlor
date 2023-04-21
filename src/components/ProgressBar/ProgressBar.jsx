import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './ProgressBar.css';

const steps = [
    'Order',
    'Information',
    'Review'
];

function ProgressBar({ currentStep })  {

    return (
        <div className="stepperContainer">
            <Stepper sx={{ 
                marginTop: '40px', marginBottom: '40px', 
                minWidth: '500px' }} 
                activeStep={currentStep}
            >
                {
                    steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </div>
    )
}

export default ProgressBar;