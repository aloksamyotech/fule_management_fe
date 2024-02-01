/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ClearIcon from '@mui/icons-material/Clear';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { toast } from 'react-toastify';
// import { apipost } from '../../service/api';
// import { FiSave } from "react-icons/fi";
// import { GiCancel } from "react-icons/gi";
import Palette from '../../ui-component/ThemePalette';

const SavingList = (props) => {
  const { open, handleClose } = props;
  // const userid = localStorage.getItem('user_id');

  // -----------  validationSchema
  const validationSchema = yup.object({
    desc: yup.string().required('Bank Description is required'),
    amount: yup.string().required('Amount is required'),
    note: yup.string().required('Note is required'),
    pass: yup.string().required('PassCode is required')
  });

  // -----------   initialValues
  const initialValues = {
    desc: '',
    amount: '',
    note: '',
    pass: ''
  };

  // add contact api
  // const addContact = async (values) => {
  //   const data = values;
  //   const result = await apipost('contact/add', data)
  //   setUserAction(result)

  //   if (result && result.status === 201) {
  //     formik.resetForm();
  //     handleClose();
  //     toast.success(result.data.message)
  //   }
  // }

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // addContact(values)
      console.log('ContactValues', values);
      handleClose();
      toast.success('Contact Add successfully');
    }
  });

  return (
    <div>
      <Dialog open={open} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            // backgroundColor: "#2b4054",
            // color: "white",
          }}
        >
          <Typography variant="h6">Add New </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <form>
            <Typography style={{ marginBottom: '15px' }} variant="h6">
              Basic Information
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth>
                  <FormLabel>Bank Desc</FormLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="desc"
                    name="desc"
                    label=""
                    size="small"
                    fullWidth
                    value={formik.values.desc || null}
                    onChange={formik.handleChange}
                    error={formik.touched.desc && Boolean(formik.errors.desc)}
                    helperText={formik.touched.desc && formik.errors.desc}
                  >
                    <MenuItem value="SBI">SBI</MenuItem>
                    <MenuItem value="UCO">UCO </MenuItem>
                    <MenuItem value="INDIAN">INDIAN </MenuItem>
                    <MenuItem value="PNB">PNB </MenuItem>
                  </Select>
                  <FormHelperText style={{ color: Palette.error.main }}>{formik.touched.desc && formik.errors.desc}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel>Amount Taking to Bank</FormLabel>
                <TextField
                  id="amount"
                  name="amount"
                  size="small"
                  fullWidth
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel>Note</FormLabel>
                <TextField
                  id="note"
                  name="note"
                  size="small"
                  fullWidth
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  error={formik.touched.note && Boolean(formik.errors.note)}
                  helperText={formik.touched.note && formik.errors.note}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel>PassCode</FormLabel>
                <TextField
                  id="pass"
                  name="pass"
                  size="small"
                  fullWidth
                  value={formik.values.pass}
                  onChange={formik.handleChange}
                  error={formik.touched.pass && Boolean(formik.errors.pass)}
                  helperText={formik.touched.pass && formik.errors.pass}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            onClick={formik.handleSubmit}
            style={{ textTransform: 'capitalize' }}
            // startIcon={<FiSave />}
          >
            Save
          </Button>
          <Button
            type="reset"
            variant="outlined"
            style={{ textTransform: 'capitalize' }}
            color="error"
            onClick={() => {
              formik.resetForm();
              handleClose();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SavingList;
