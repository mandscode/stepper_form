import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
const isLetters = (str) => /^[0-9]*$/.test(str);

function GetStepContent(step) {
    const [val, setVal] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [age, setAge] = React.useState("");
    const [bloodGroup, setBloodGroup] = React.useState("");
    const [birthday, setBirthday] = React.useState();
    

    const handleChange = (newValue) => {
        setBirthday(newValue);  
    };

    const onHandleChange = (e) => {
        const { value } = e.target;
        if (isLetters(value)) {
        setVal(value);
        }
    };
    const handleChangeInput = (e) => {
        const { value } = e.target;
        if (isLetters(value)) {
        setHeight(value);
        }
    };
    const onHandleChangeInput = (e) => {
        const { value } = e.target;
        if (isLetters(value)) {
        setWeight(value);
        }
    };

    const onInputChange = (e) => {
        const { value } = e.target;

        if (isLetters(value)) {
        setAge(value);
        }
    };

    const inputChange = (e) => {
        const { value } = e.target;
        
        setBloodGroup(value);
    };
    
    switch (step) {
      case 0:
        return (
          <>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="first-name"
                        label="First name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        name="firstName"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="middle-name"
                        label="Middle name"
                        variant="outlined"
                        placeholder="Enter Your Middle Name"
                        fullWidth
                        margin="normal"
                        name="middleName"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="last-name"
                        label="Last name"
                        variant="outlined"
                        placeholder="Enter Your Last name"
                        fullWidth
                        margin="normal"
                        name="lastName"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="mobile-no"
                        label="Mobile No"
                        variant="outlined"
                        placeholder="Enter Your Mobile No"
                        fullWidth
                        margin="normal"
                        name="mobileNo"
                        value={val}
                        onChange={onHandleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="emailId"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Your Email Id"
                        fullWidth
                        type="email"
                        margin="normal"
                        name="emailId"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={6}>
                            <DesktopDatePicker
                                label="Birthday"
                                inputFormat="DD/MM/YYYY"
                                value={birthday}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="age"
                        label="Age"
                        variant="outlined"
                        placeholder="Enter Your Age"
                        fullWidth
                        margin="normal"
                        name="age"
                        value={age}
                        inputProps={{ maxLength: 2 }}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="bloodGroup">Blood Group</InputLabel>
                        <Select
                            labelId="bloodGroup"
                            id="bloodGroup"
                            value={bloodGroup}
                            label="Blood Group"
                            onChange={inputChange}
                        >
                            <MenuItem value={'A+'}>A RhD positive (A+)</MenuItem>
                            <MenuItem value={'A-'}>A RhD negative (A-)</MenuItem>
                            <MenuItem value={'B+'}>B RhD positive (B+)</MenuItem>
                            <MenuItem value={'B-'}>B RhD negative (B-)</MenuItem>
                            <MenuItem value={'O+'}>O RhD positive (O+)</MenuItem>
                            <MenuItem value={'O-'}>O RhD negative (O-)</MenuItem>
                            <MenuItem value={'AB+'}>AB RhD positive (AB+)</MenuItem>
                            <MenuItem value={'AB-'}>AB RhD negative (AB-)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="height"
                        label="Height"
                        variant="outlined"
                        placeholder="Enter Your Height"
                        fullWidth
                        margin="normal"
                        name="height"
                        value={height}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="weight"
                        label="Weight"
                        variant="outlined"
                        placeholder="Enter Your Weight"
                        fullWidth
                        margin="normal"
                        name="weight"
                        value={weight}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="single" control={<Radio />} label="Single" />
                            <FormControlLabel value="married" control={<Radio />} label="Married" />
                            <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                            <FormControlLabel value="widowed" control={<Radio />} label="Widowed" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
          </>
        );
  
      case 1:
        return (
          <>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              name="emailAddress"
            />
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              name="phoneNumber"
            />
            <TextField
              id="alternate-phone"
              label="Alternate Phone"
              variant="outlined"
              placeholder="Enter Your Alternate Phone"
              fullWidth
              margin="normal"
              name="alternatePhone"
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              name="address1"
            />
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              name="address2"
            />
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              name="country"
            />
          </>
        );
      case 3:
        return (
          <>
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              name="cardNumber"
            />
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              name="cardMonth"
            />
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              name="cardYear"
            />
          </>
        );
      default:
        return "unknown step";
    }
}

const StepperForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const isStepOptional = (step) => {
        return step === 1;
    };
    
    const handleNext = () => {    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = [
        'USER INFORMATION',
        'ADDRESS DETAILS',
        'Thank You',
    ];

    
    return (
        <>  
            <section className="_stepper-form _formPage">
                <div className="_formPage_container">
                    <Box className="_formPage_wrapper">
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </>
                        ) : (
                            <>
                            <form>{GetStepContent(activeStep)}</form>
                            <Box mt={4}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                >
                                    {console.log(activeStep, steps.length)}
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </Box>
                          </> 
                        )}
                    </Box>
                </div>
            </section>
        </>
    );
}
 
export default StepperForm;