/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, DialogContent, DialogContentText, Typography, Stack, Box, Card } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import TableStyle from '../../../ui-component/TableStyle';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { apiurls } from 'Service/api';

const ViewOrderHistory = () => {
  const [orderData, setOrderData] = useState([]);
  console.log(orderData);
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(apiurls?.getOrder);

      const data = response.data.map((item) => {
        return {
          fuelType: item?.fuel.fuel_type,
          liters: item?.liters,
          cost: item?.cost,
          supplier: item?.supplier.name,
          date: item?.created_at,
          id: item?._id
        };
      });
      setOrderData(data);
    } catch (error) {
      console.error('Error fetching fuel data:', error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit: async (values) => {
  //     console.log('leadValues', values);
  //     toast.success('Lead added successfully');
  //   }
  // });

  // const fuelData = [
  //   {
  //     id: 1,
  //     fuelType: 'Petrol',
  //     totalLitersSupplied: '1,930.00 Liters',
  //     cost: '40,000,.00',
  //     supplier: 'Adeola',
  //     date: 'Wed 2nd March, 2022'
  //   }
  // ];

  const columns = [
    {
      field: 'fuelType',
      headerName: 'FUEL TYPE',
      flex: 1,
      cellClassName: ' name-column--cell--capitalize',
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'liters',
      headerName: 'TOTAL LITERS SUPPLIED',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize',
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'cost',
      headerName: 'COST',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize',
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'supplier',
      headerName: 'SUPPLIER',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize',
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'date',
      headerName: 'DATE',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize',
      headerAlign: 'center',
      align: 'center'
    }
  ];

  return (
    <div>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <Stack direction="row" alignItems="center" mb={5} justifyContent="space-between">
            <Typography style={{ marginBottom: '15px' }} variant="h6">
              <h1>ORDER HISTORY DETAILS</h1>
            </Typography>{' '}
            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <Button variant="contained" component={Link} to="/managment/Fuel">
                BACK
              </Button>
            </Stack>
          </Stack>
          <TableStyle>
            <Box width="100%">
              <Card style={{ height: '600px', paddingTop: '15px' }}>
                <DataGrid
                  rows={orderData && orderData}
                  columns={columns}
                  getRowId={(row) => row.id}
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{ toolbar: { showQuickFilter: true } }}
                />
              </Card>
            </Box>
          </TableStyle>
        </DialogContentText>
      </DialogContent>
    </div>
  );
};

export default ViewOrderHistory;
