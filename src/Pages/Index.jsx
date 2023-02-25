import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const StepperForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const isLetters = (str) => /^[0-9]*$/.test(str);
    const isNumbers = (str) => /^[A-Za-z]*$/.test(str);
    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [val, setVal] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [bloodGroup, setBloodGroup] = React.useState("");
    const [birthday, setBirthday] = React.useState();
    const [gender, setGender] = React.useState();
    const [marital, setMarital] = React.useState();
    const [addressLine1, setAddressLine1] = React.useState("");
    const [addressLine2, setAddressLine2] = React.useState("");
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [pinCode, setPinCode] = React.useState("");
    const [selectedState, setSelectedState] = React.useState("");
    const [formErrors, setFormErrors] = React.useState({});
    
    let values = [firstName, middleName, lastName, val, email, birthday, age, bloodGroup, height, weight, gender, marital, addressLine1, addressLine2, city, selectedState, country, pinCode]
    
    let label = ["First Name", "Middle Name", "Last Name","Mobile No", "Email","Birthday","Age","Blood Group","Height","Weight", "Gender","Marital Status","Address Line 1","Address Line 2","City","State","Country",'Pin Code']
    
    const [formValues, setFormValues] = useState(values);
    const [formLabel, setFormLabel] = useState(label);
    
    let state = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
    
    var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    
    const [allState, setAllState] = useState(state);
    const [allCountry, setAllCountry] = useState(country_list);
    const handleNext = (e) => {    
        e.preventDefault();
        const errors = {};
        if (activeStep === 0) {
            if (!firstName.trim()) {
                errors.firstName = 'First name is required field';
            }
            
            if (!middleName.trim()) {
                errors.middleName = 'Middle name is required field';
            }

            if (!lastName.trim()) {
                errors.lastName = 'Last name is required field';
            }

            if (!val.trim()) {
                errors.val = 'Mobile No is required field';
            } 
            
            if (val.length < 10) {
                errors.val = 'Please enter valid 10 digit Mobile Number';
            }

            if (!email.trim()) {
                errors.email = 'Email is required field';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                errors.email = 'Email address is invalid';
            }

            if (!age.trim()) {
                errors.age = 'Age is required field';
            }

            if (!bloodGroup) {
                errors.bloodGroup = 'Blood Group is required field';
            }

            if (!height.trim()) {
                errors.height = 'Height is required field';
            }

            if (!weight.trim()) {
                errors.weight = 'Weight is required field';
            }

            if (!marital) {
                errors.marital = 'Marital Status is required field';
            }

            if (!gender) {
                errors.gender = 'Gender is required field';
            }

            if (!birthday) {
                errors.birthday = 'Birthday is a required field';
            }
        } 
        else if (activeStep === 1) {
            if (!addressLine1.trim()) {
                errors.addressLine1 = 'Address Line 1 is required field';
            }

            if (!addressLine2.trim()) {
                errors.addressLine2 = 'Address Line 2 is required field';
            }

            if (!city.trim()) {
                errors.city = 'City is required field';
            }

            if (!state) {
                errors.state = 'State is required field';
            }

            if (!country.trim()) {
                errors.country = 'Country is required field';
            }

            if (!pinCode.trim()) {
                errors.pinCode = 'Pin Code is required field';
            }

            if (pinCode.length < 6) {
                errors.pinCode = 'Please enter valid 6 digit Pin code';
            }
        // if (!password.trim()) {
        //   errors.password = 'Password is required';
        // } else if (password.length < 6) {
        //   errors.password = 'Password must be at least 6 characters';
        // }
        }
        
        if (Object.keys(errors).length === 0) {
          if (activeStep < 3) {
            setActiveStep(activeStep + 1);
            setFormErrors(false);
            localStorage.setItem("values", JSON.stringify(values));
            const b = document.getElementsByClassName("_formPage_data_label");
            // console.log("bbbb", b.filter(e=>e.textContent == ))
          } else {
            alert('Form submitted!');
          }
        } else {
          setFormErrors(errors);
        }
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        'USER INFORMATION',
        'ADDRESS DETAILS',
        'Thank You',
    ];

    function GetStepContent(step) {
        
    
        const handleChange = (newValue) => {
            setBirthday(newValue);  
        };
    
        const onHandleChange = (e) => {
            const { value } = e.target;
            if (isLetters(value)) {
                setVal(value);
            }
        };
        const handleChangeForHeight = (e) => {
            const { value } = e.target;
            if (isLetters(value)) {
                setHeight(value);
            }
        };
        const handleChangeForWeight = (e) => {
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

        const inputChangeforPinCode = (e) => {
            const { value } = e.target;
    
            if (isLetters(value)) {
                setPinCode(value);
            }
        };

        const inputChangeforFname = (e) => {
            const { value } = e.target;
    
            if (isNumbers(value)) {
                setFirstName(value);
            }
        };

        const inputChangeforLname = (e) => {
            const { value } = e.target;
    
            if (isNumbers(value)) {
                setLastName(value);
            }
        };

        const inputChangeforMname = (e) => {
            const { value } = e.target;
    
            if (isNumbers(value)) {
                setMiddleName(value);
            }
        };
    
        const inputChange = (e) => {
            const { value } = e.target;
            setBloodGroup(value);
        };

        const inputChangeForState = (e) => {
            const { value } = e.target;
            setSelectedState(value);
        };

        
        switch (step) {
          case 0:
            return (
              <>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="first-name"
                            label="First name"
                            variant="outlined"
                            placeholder="Enter Your First Name"
                            fullWidth
                            value={firstName}
                            onChange={inputChangeforFname}
                            margin="normal"
                            name="firstName"
                            inputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.firstName && <span className='_formPage_errors'>{formErrors.firstName}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="middle-name"
                            label="Middle name"
                            variant="outlined"
                            placeholder="Enter Your Middle Name"
                            fullWidth
                            margin="normal"
                            name="middleName"
                            value={middleName}
                            onChange={inputChangeforMname}
                            inputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.middleName && <span className='_formPage_errors'>{formErrors.middleName}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="last-name"
                            label="Last name"
                            variant="outlined"
                            placeholder="Enter Your Last name"
                            fullWidth
                            margin="normal"
                            name="lastName"
                            value={lastName}
                            onChange={inputChangeforLname}
                            inputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.lastName && <span className='_formPage_errors'>{formErrors.lastName}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                            inputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.val && <span className='_formPage_errors'>{formErrors.val}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="emailId"
                            label="Email"
                            variant="outlined"
                            placeholder="Enter Your Email Id"
                            fullWidth
                            type="email"
                            margin="normal"
                            name="emailId"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            inputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.email && <span className='_formPage_errors'>{formErrors.email}</span>}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{margin:'1.6rem 0 0.8rem'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={6}>
                                <DesktopDatePicker
                                    label="Birthday"
                                    inputFormat="DD/MM/YYYY"
                                    value={birthday}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    inputProps={{style: {fontSize: 14}}}
                                    InputLabelProps={{style: {fontSize: 14}}}
                                />
                            </Stack>
                        </LocalizationProvider>
                        {formErrors.birthday && <span className='_formPage_errors'>{formErrors.birthday}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="age"
                            label="Age"
                            variant="outlined"
                            placeholder="Enter Your Age"
                            fullWidth
                            margin="normal"
                            name="age"
                            value={age}
                            onChange={onInputChange}
                            // inputProps={{ maxLength: 2, fontSize: 14}}
                            // InputLabelProps={{style: {fontSize: 14}}}
                            inputProps={{maxLength: 2, style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.age && <span className='_formPage_errors'>{formErrors.age}</span>}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{margin:'1.6rem 0 0.8rem'}}>
                        <FormControl fullWidth>
                            <InputLabel id="bloodGroup">Blood Group</InputLabel>
                            <Select
                                labelId="bloodGroup"
                                id="bloodGroup"
                                value={bloodGroup}
                                label="Blood Group"
                                onChange={inputChange}
                                inputProps={{style: {fontSize: 14}}}
                                InputLabelProps={{style: {fontSize: 14}}}
                                sx={{fontSize: '1.4rem'}}
                            >
                                <MenuItem value={'A+'} onClick={() => setBloodGroup('A+')}>A RhD positive (A+)</MenuItem>
                                <MenuItem value={'A-'} onClick={() => setBloodGroup('A-')}>A RhD negative (A-)</MenuItem>
                                <MenuItem value={'B+'} onClick={() => setBloodGroup('B+')}>B RhD positive (B+)</MenuItem>
                                <MenuItem value={'B-'} onClick={() => setBloodGroup('B-')}>B RhD negative (B-)</MenuItem>
                                <MenuItem value={'O+'} onClick={() => setBloodGroup('O+')}>O RhD positive (O+)</MenuItem>
                                <MenuItem value={'O-'} onClick={() => setBloodGroup('O-')}>O RhD negative (O-)</MenuItem>
                                <MenuItem value={'AB+'} onClick={() => setBloodGroup('AB+')}>AB RhD positive (AB+)</MenuItem>
                                <MenuItem value={'AB-'} onClick={() => setBloodGroup('AB-')}>AB RhD negative (AB-)</MenuItem>
                            </Select>
                        </FormControl>
                        {formErrors.bloodGroup && <span className='_formPage_errors'>{formErrors.bloodGroup}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="height"
                            label="Height"
                            variant="outlined"
                            placeholder="Enter Your Height"
                            fullWidth
                            margin="normal"
                            name="height"
                            value={height}
                            onChange={handleChangeForHeight}
                            inputProps={{ maxLength: 2, style: {fontSize: 14} }}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.height && <span className='_formPage_errors'>{formErrors.height}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="weight"
                            label="Weight"
                            variant="outlined"
                            placeholder="Enter Your Weight"
                            fullWidth
                            margin="normal"
                            name="weight"
                            inputProps={{ maxLength: 3, style: {fontSize: 14} }}
                            value={weight}
                            onChange={handleChangeForWeight}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                        {formErrors.weight && <span className='_formPage_errors'>{formErrors.weight}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="Gender"
                                sx={{
                                    '& .MuiTypography-root': {
                                      fontSize: 12 
                                    },
                                }}
                            >
                                <FormControlLabel value="male" onClick={() => setGender('Male')} control={<Radio />} label="Male" />
                                <FormControlLabel value="female" onClick={() => setGender('female')} control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                        {formErrors.gender && <span className='_formPage_errors'>{formErrors.gender}</span>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{
                                    '& .MuiTypography-root': {
                                      fontSize: 12 
                                    },
                                }}
                            >
                                <FormControlLabel value="single" onClick={() => setMarital('single')} control={<Radio />} label="Single" />
                                <FormControlLabel value="married" onClick={() => setMarital('married')} control={<Radio />} label="Married" />
                                <FormControlLabel value="divorced" onClick={() => setMarital('divorced')} control={<Radio />} label="Divorced" />
                                <FormControlLabel value="widowed" onClick={() => setMarital('widowed')} control={<Radio />} label="Widowed" />
                            </RadioGroup>
                        </FormControl>
                        {formErrors.marital && <span className='_formPage_errors'>{formErrors.marital}</span>}
                    </Grid>
                </Grid>
              </>
            );
      
          case 1:
            return (
              <>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="addressLine1"
                                label="Adress Line 1"
                                variant="outlined"
                                placeholder="Enter Your Address Line 1"
                                fullWidth
                                value={addressLine1 ? addressLine1 : " "}
                                onChange={(e)=>{setAddressLine1(e.target.value)}}
                                margin="normal"
                                name="Address"
                                inputProps={{style: {fontSize: 14}}}
                                InputLabelProps={{style: {fontSize: 14}}}
                            />
                            {formErrors.addressLine1 && <span className='_formPage_errors'>{formErrors.addressLine1}</span>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="addressLine2"
                                label="Address Line 2"
                                variant="outlined"
                                placeholder="Enter Your Address Line 2"
                                fullWidth
                                margin="normal"
                                name="Address"
                                value={addressLine2 ? addressLine2 : " "}
                                onChange={(e)=>{setAddressLine2(e.target.value)}}
                                inputProps={{style: {fontSize: 14}}}
                                InputLabelProps={{style: {fontSize: 14}}}
                            />
                            {formErrors.addressLine2 && <span className='_formPage_errors'>{formErrors.addressLine2}</span>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="city"
                                label="City"
                                variant="outlined"
                                placeholder="Enter Your City"
                                fullWidth
                                margin="normal"
                                name="lastName"
                                value={city ? city : ""}
                                onChange={(e)=>{setCity(e.target.value)}}
                                inputProps={{style: {fontSize: 14}}}
                                InputLabelProps={{style: {fontSize: 14}}}
                            />
                            {formErrors.city && <span className='_formPage_errors'>{formErrors.city}</span>}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{margin:'1.6rem 0 0.8rem'}}>
                            <FormControl fullWidth>
                                <InputLabel id="state">State</InputLabel>
                                <Select
                                    labelId="state"
                                    id="state"
                                    value={selectedState}
                                    label="State"
                                    onChange={inputChangeForState}
                                    inputProps={{style: {fontSize: 14}}}
                                    InputLabelProps={{style: {fontSize: 14}}}
                                    sx={{fontSize: '1.4rem'}}
                                >
                                    {
                                        allState && allState.map((states, index) => (
                                        <MenuItem key={index} value={states} onClick={() => setSelectedState(states)}>{states}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {formErrors.selectedState && <span className='_formPage_errors'>{formErrors.selectedState}</span>}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{margin:'1.6rem 0 0.8rem'}}>
                            <FormControl fullWidth>
                                <InputLabel id="country">Country</InputLabel>
                                <Select
                                    labelId="country"
                                    id="country"
                                    value={country ? country : ""}
                                    label="country"
                                    onChange={(e)=>{setCountry(e.target.value)}}
                                    inputProps={{style: {fontSize: 14}}}
                                    InputLabelProps={{style: {fontSize: 14}}}
                                    sx={{fontSize: '1.4rem'}}
                                >
                                    {
                                        allCountry && allCountry.map((countries, index) => (
                                        <MenuItem key={index} value={countries} onClick={() => setCountry(countries)}>{countries}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                            {formErrors.country && <span className='_formPage_errors'>{formErrors.country}</span>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="pincode"
                                label="pincode"
                                variant="outlined"
                                placeholder="Enter Your Pin Code"
                                fullWidth
                                margin="normal"
                                name="pincode"
                                inputProps={{ maxLength: 6, style: {fontSize: 14} }}
                                value={pinCode}
                                onChange={inputChangeforPinCode}
                                InputLabelProps={{style: {fontSize: 14}}}
                            />
                            {formErrors.pinCode && <span className='_formPage_errors'>{formErrors.pinCode}</span>}
                        </Grid>
                </Grid>
              </>
            );
          default:
            return (
                <>
                    <section>
                        <h2>Data Added Successfully</h2>
                        <Grid container>
                            <Grid item xs={6} md={6} lg={6} >
                                {formLabel && formLabel.map((formVal, index) => (
                                    <div key={index} className="_formPage_data">
                                        <span className={`_formPage_data_label`}>{formVal}:</span>
                                    </div>
                                ))}
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                            {formValues && formValues.map((formVal, index) => (
                                <div key={index} className="_formPage_data">
                                    <span className={`_formPage_data_label`}>{formVal}</span>
                                </div>
                            ))}
                            </Grid>
                        </Grid>
                    </section>
                </>
            );
        }
    }

    return (
        <>  
            <section className="_stepper-form _formPage">
                <div className="_formPage_container">
                    <Box className="_formPage_wrapper">
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label} {steps.length}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <>
                                <Typography sx={{ mt: 2, mb: 1, textAlign:'center', fontSize:'14px' }}>
                                    All steps completed - you&apos;re finished
                                    {/* {console.log(activeStep, steps.length)} */}
                                </Typography>
                            </>
                        ) : (
                            <>
                            <form className="_formPage_content">{GetStepContent(activeStep)}</form>
                            <Box mt={4}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    size="large"
                                >
                                back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    size="large"
                                >
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