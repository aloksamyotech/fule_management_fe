/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FormControl, FormHelperText, FormLabel, Grid, MenuItem, Select, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
// import { useEffect, useState } from 'react';

// import { apiget, apipost } from '../../service/api';
import Palette from '../../ui-component/ThemePalette';

const AddPolicy = (props) => {
  const { open, handleClose } = props;

  //   const [contactList, setContactList] = useState([]);
  //   const userid = localStorage.getItem('user_id');
  //   const userRole = localStorage.getItem('userRole');

  // -----------  validationSchema
  const validationSchema = yup.object({
    designation: yup.string().required('Designation Type is required'),
    name: yup.string().required('Name is required'),
    address: yup.string().required('address is required'),
    qualification: yup.string().required('Qualification is required'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Phone number is invalid')
      .required('Phone number is required'),
    emailAddress: yup.string().email('Invalid email').required('Email is required')
  });

  // -----------   initialValues
  const initialValues = {
    designation: '',
    name: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    qualification: ''

    // createdBy: userid,
    // contact_id: _id,
    // assigned_agent: userid
  };

  // add policy api
  //   const addPolicy = async (values) => {
  //     const data = values;
  //     const result = await apipost('policy/add', data);

  //     setUserAction(result);

  //     if (result && result.status === 201) {
  //       toast.success(result.data.message);
  //       formik.resetForm();
  //       handleClose();
  //     }
  //   };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      //   addPolicy(values);
      console.log('values', values);
      toast.success('policy Add successfully');
      handleClose();
      formik.resetForm();
    }
  });

  //   const fetchdata = async () => {
  //     const result = await apiget(userRole === 'admin' ? `contact/list` : `contact/list/?createdBy=${userid}`);
  //     if (result && result.status === 200) {
  //       setContactList(result?.data?.result);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchdata();
  //   }, []);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h3">ENTER STAFF DETAILS </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Typography style={{ marginBottom: '15px' }} variant="h6">
                Staff Details
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Designation</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="designation"
                      name="designation"
                      size="small"
                      fullWidth
                      value={formik.values.designation || null}
                      onChange={formik.handleChange}
                      error={formik.touched.designation && Boolean(formik.errors.designation)}
                      helperText={formik.touched.designation && formik.errors.designation}
                    >
                      <MenuItem value="Manager">Manager</MenuItem>
                      <MenuItem value="Attendant">Attendant </MenuItem>
                      <MenuItem value="Messenger">Messenger </MenuItem>
                      <MenuItem value="Security">Security </MenuItem>
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>
                      {formik.touched.designation && formik.errors.designation}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Full Name</FormLabel>
                  <TextField
                    name="name"
                    type="string"
                    size="small"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Phone Number</FormLabel>
                  <TextField
                    name="phoneNumber"
                    type="number"
                    size="small"
                    fullWidth
                    value={formik.values.policyStartDate}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    size="small"
                    fullWidth
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                    helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Address</FormLabel>
                  <TextField
                    id="address"
                    name="address"
                    type="string"
                    size="small"
                    fullWidth
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Qualification</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="qualification"
                      name="qualification"
                      size="small"
                      fullWidth
                      value={formik.values.qualification || null}
                      onChange={formik.handleChange}
                      error={formik.touched.qualification && Boolean(formik.errors.qualification)}
                      helperText={formik.touched.qualification && formik.errors.qualification}
                    >
                      <MenuItem value="PHD Holder">PHD Holder</MenuItem>
                      <MenuItem value="Degree Holder"> DegreeHolder</MenuItem>
                      <MenuItem value="BSC Holder">BSC Holder </MenuItem>
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>
                      {formik.touched.qualification && formik.errors.qualification}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={formik.handleSubmit} variant="contained" color="primary">
            Save
          </Button>
          <Button
            onClick={() => {
              formik.resetForm();
              handleClose();
            }}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPolicy;
