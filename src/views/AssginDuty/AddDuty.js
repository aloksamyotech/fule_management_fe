/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Palette from '../../ui-component/ThemePalette';

const AddDuty = (props) => {
  const { open, handleClose } = props;

  // Validation Schema
  const validationSchema = yup.object({
    pump: yup.string().required('Pump is required'),
    fuel: yup.string().required('Fuel is required'),
    price: yup.string().required('Price is required'),
    reading: yup.string().required('Current Reading is required'),
    assign: yup.string().required('assign is required')
  });

  // Initial Values
  const initialValues = {
    pump: '',
    fuel: '',
    price: '',
    reading: '',
    assign: ''
  };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log('MeetingsValues', values);
      handleClose();
      toast.success('Meeting Add successfully');
      resetForm();
    }
  });

  return (
    <div>
      <Dialog open={open} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" style={{ marginLeft: '180px' }}>
            Add Duty List
          </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Select Pump</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="pump"
                      name="pump"
                      label=""
                      size="small"
                      fullWidth
                      value={formik.values.pump || null}
                      onChange={formik.handleChange}
                      error={formik.touched.pump && Boolean(formik.errors.pump)}
                      helperText={formik.touched.pump && formik.errors.pump}
                    >
                      <MenuItem value="Master">Master</MenuItem>
                      <MenuItem value="Express">Express </MenuItem>
                      <MenuItem value="Combo">Combo </MenuItem>
                      <MenuItem value="Bassuka">Bassuka </MenuItem>
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.pump && formik.errors.pump}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Fuel Type</FormLabel>
                  <TextField
                    id="fuel"
                    name="fuel"
                    size="small"
                    fullWidth
                    value={formik.values.fuel}
                    onChange={formik.handleChange}
                    error={formik.touched.fuel && Boolean(formik.errors.fuel)}
                    helperText={formik.touched.fuel && formik.errors.fuel}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Today Price</FormLabel>
                  <TextField
                    id="price"
                    name="price"
                    size="small"
                    type="number"
                    fullWidth
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Current Reading</FormLabel>
                  <TextField
                    id="reading"
                    name="reading"
                    size="small"
                    type="number"
                    fullWidth
                    value={formik.values.reading}
                    onChange={formik.handleChange}
                    error={formik.touched.reading && Boolean(formik.errors.reading)}
                    helperText={formik.touched.reading && formik.errors.reading}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <FormLabel>Assign this Pump to</FormLabel>
                  <Select
                    id="assign"
                    name="assign"
                    label=""
                    size="small"
                    fullWidth
                    value={formik.values.assign || null}
                    onChange={formik.handleChange}
                    error={formik.touched.assign && Boolean(formik.errors.assign)}
                    helperText={formik.touched.assign && formik.errors.assign}
                  >
                    <MenuItem value="Aman">Aman</MenuItem>
                    <MenuItem value="Abhishek">Abhishek</MenuItem>
                    <MenuItem value="Vardan">Vardan</MenuItem>
                    <MenuItem value="Harshit">Harshit</MenuItem>
                  </Select>
                  <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.assign && formik.errors.assign}</FormHelperText>
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>

        <DialogActions>
          <Button type="submit" variant="contained" onClick={formik.handleSubmit} style={{ textTransform: 'capitalize' }} color="secondary">
            Save
          </Button>
          <Button
            type="reset"
            variant="outlined"
            style={{ textTransform: 'capitalize' }}
            onClick={() => {
              formik.resetForm();
              handleClose();
            }}
            color="error"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDuty;
