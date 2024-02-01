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
import Palette from '../../ui-component/ThemePalette';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurls } from 'Service/api';

const AddLead = (props) => {
  const { open, handleClose } = props;

  const [fuelData, setFuelData] = useState([]);
  const [supplierData, setSupplierData] = useState([]);

  const validationSchema = yup.object({
    fuel: yup.string().required('Fuel Type is required'),
    supplier: yup.string().required('Supplier Name is required'),
    cost: yup.string().required('Cost is required'),
    dateOfBirth: yup.date().required('Date of Birth is required'),
    liters: yup.string().required('Liters is required')
  });

  const initialValues = {
    fuel: '',
    supplier: '',
    cost: '',
    liters: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log('==========>> ', values);
    }
  });

  const fetchSupplierData = async () => {
    try {
      const response = await axios.get(apiurls?.supplierList);

      const data = response.data.map((item) => ({
        supplier: item?.name,
        id: item?._id
      }));
      setSupplierData(data);
    } catch (error) {
      console.error('Error fetching supplier data:', error);
    }
  };

  const fetchFuelData = async () => {
    try {
      const response = await axios.get(apiurls?.fuelList);

      const data = response.data.map((item) => ({
        name: item?.fuel_type,
        qty: item?.litres,
        status: item?.status,
        id: item?._id
      }));
      setFuelData(data);
    } catch (error) {
      console.error('Error fetching fuel data:', error);
    }
  };

  useEffect(() => {
    fetchFuelData();
    fetchSupplierData();
  }, []);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" style={{ marginLeft: '180px' }}>
            Add New Order
          </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Typography style={{ marginBottom: '15px' }} variant="h6">
                <h1>Enter Order Details</h1>
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Fuel Type</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="fuel"
                      name="fuel"
                      label=""
                      size="small"
                      fullWidth
                      value={formik.values.fuel || ''}
                      onChange={formik.handleChange}
                      error={formik.touched.fuel && Boolean(formik.errors.fuel)}
                      helperText={formik.touched.fuel && formik.errors.fuel}
                    >
                      {fuelData &&
                        fuelData.map((item) => (
                          <MenuItem key={item.id} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.fuel && formik.errors.fuel}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Supplier</FormLabel>
                  <Select
                    id="supplier"
                    name="supplier"
                    label=""
                    size="small"
                    fullWidth
                    value={formik.values.supplier || ''}
                    onChange={formik.handleChange}
                    error={formik.touched.supplier && Boolean(formik.errors.supplier)}
                    helperText={formik.touched.supplier && formik.errors.supplier}
                  >
                    {supplierData &&
                      supplierData.map((item) => (
                        <MenuItem key={item.id} value={item.supplier}>
                          {item.supplier}
                        </MenuItem>
                      ))}
                  </Select>
                  <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.supplier && formik.errors.supplier}</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Total Liters</FormLabel>
                  <TextField
                    id="liters"
                    name="liters"
                    type="number"
                    size="small"
                    fullWidth
                    value={formik.values.liters}
                    onChange={formik.handleChange}
                    error={formik.touched.liters && Boolean(formik.errors.liters)}
                    helperText={formik.touched.liters && formik.errors.liters}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Total Cost</FormLabel>
                  <TextField
                    id="cost"
                    name="cost"
                    size="small"
                    type="number"
                    fullWidth
                    value={formik.values.cost}
                    onChange={formik.handleChange}
                    error={formik.touched.cost && Boolean(formik.errors.cost)}
                    helperText={formik.touched.cost && formik.errors.cost}
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </form>

          <DialogActions>
            <Button onClick={formik.handleSubmit} type="submit" variant="contained" color="primary">
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddLead;
