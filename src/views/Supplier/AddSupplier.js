/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  TextField
} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Palette from '../../ui-component/ThemePalette';

const SupplierData = (props) => {
  const { open, handleClose } = props;

  const validationSchema = yup.object({
    company: yup.string().required('Company Name is required'),
    status: yup.string().required('Status  is required'),
    representative: yup.string().required('representative is required'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Phone number is invalid')
      .required('Phone number is required'),
    emailAddress: yup.string().email('Invalid email').required('Email is required'),
    address: yup.string().required('Address is required')
  });

  const initialValues = {
    company: '',
    status: '',
    representative: '',
    phoneNumber: '',
    emailAddress: '',
    address: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log('leadValues', values);
      handleClose();
      toast.success('Lead added successfully');
    }
  });

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" style={{ marginLeft: '180px' }}>
            Add New Supplier
          </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Typography style={{ marginBottom: '15px' }} variant="h6">
                <h1>Enter Supplier Details</h1>
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Company Name</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="company"
                      name="company"
                      type="string"
                      size="small"
                      fullWidth
                      value={formik.values.company || null}
                      onChange={formik.handleChange}
                      error={formik.touched.company && Boolean(formik.errors.company)}
                      helperText={formik.touched.company && formik.errors.company}
                    >
                      <MenuItem value="Petrol">Petrol</MenuItem>
                      <MenuItem value="Diesel">Diesel </MenuItem>
                      <MenuItem value="Gas">Gas </MenuItem>
                      <MenuItem value="Kerosene">Kerosene </MenuItem>
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.company && formik.errors.company}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Representative</FormLabel>
                    <Select
                      id="representative"
                      name="representative"
                      type="string"
                      size="small"
                      fullWidth
                      value={formik.values.representative || null}
                      onChange={formik.handleChange}
                      error={formik.touched.representative && Boolean(formik.errors.representative)}
                      helperText={formik.touched.representative && formik.errors.representative}
                    >
                      <MenuItem value="NBC">NBC</MenuItem>
                      <MenuItem value="AP">AP</MenuItem>
                      <MenuItem value="BOAS">BOAS</MenuItem>
                      <MenuItem value="ORDO">ORDO </MenuItem>
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>
                      {formik.touched.representative && formik.errors.representative}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    id="emailAddress"
                    name="emailAddress"
                    size="small"
                    type="string"
                    fullWidth
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                    helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Office Address</FormLabel>
                  <TextField
                    id="address"
                    name="address"
                    size="small"
                    type="string"
                    fullWidth
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Phone Number</FormLabel>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    size="small"
                    type="number"
                    fullWidth
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Status</FormLabel>
                  <Select
                    id="status"
                    name="status"
                    type="string"
                    size="small"
                    fullWidth
                    value={formik.values.status || null}
                    onChange={formik.handleChange}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
                  >
                    <MenuItem value="NBC">ACTIVE</MenuItem>
                    <MenuItem value="AP">PENDING</MenuItem>
                    <MenuItem value="BOAS">TERMINATED</MenuItem>
                  </Select>
                  <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.status && formik.errors.status}</FormHelperText>
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={formik.handleSubmit} variant="contained" color="primary" type="submit">
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

export default SupplierData;
