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

const PayrollData = (props) => {
  const { open, handleClose } = props;

  const validationSchema = yup.object({
    staff: yup.string().required('Staff is required'),
    salary: yup.string().required(' Basic Salary is required'),
    allowances: yup.string().required(' Total Allowances is required'),
    Tax: yup.string().required('TDS is required')
  });

  const initialValues = {
    staff: '',
    salary: '',
    allowances: '',
    Tax: ''
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
            Add New Payroll
          </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Typography style={{ marginBottom: '15px' }} variant="h6">
                <h1>Enter Payroll Details</h1>
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Staff</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="staff"
                      name="staff"
                      label=""
                      size="small"
                      fullWidth
                      value={formik.values.staff || null}
                      onChange={formik.handleChange}
                      error={formik.touched.staff && Boolean(formik.errors.staff)}
                      helperText={formik.touched.staff && formik.errors.staff}
                    >
                      <MenuItem value="ASSU">ASSU</MenuItem>
                      <MenuItem value="AMAN">AMAN </MenuItem>
                      <MenuItem value="HARSHIT">HARSHIT </MenuItem>
                      <MenuItem value="MOHIT">MOHIT </MenuItem>
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.staff && formik.errors.staff}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Basic Salary</FormLabel>
                  <TextField
                    id="salary"
                    name="salary"
                    size="small"
                    fullWidth
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    error={formik.touched.salary && Boolean(formik.errors.salary)}
                    helperText={formik.touched.salary && formik.errors.salary}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Total Allowances</FormLabel>
                  <TextField
                    id="allowances"
                    name="allowances"
                    size="small"
                    type="number"
                    fullWidth
                    value={formik.values.allowances}
                    onChange={formik.handleChange}
                    error={formik.touched.allowances && Boolean(formik.errors.allowances)}
                    helperText={formik.touched.allowances && formik.errors.allowances}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Tax Deducted at Source (TDS) </FormLabel>
                  <TextField
                    id="Tax"
                    name="Tax"
                    size="small"
                    type="number"
                    fullWidth
                    value={formik.values.Tax}
                    onChange={formik.handleChange}
                    error={formik.touched.Tax && Boolean(formik.errors.Tax)}
                    helperText={formik.touched.Tax && formik.errors.Tax}
                  />
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

export default PayrollData;
