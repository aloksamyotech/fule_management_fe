/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddDuty from './AddDuty';
import { Visibility } from '@mui/icons-material';
import Iconify from '../../ui-component/iconify';
import { Link } from 'react-router-dom';
import ViewDuty from './ViewDuty/index';
// ----------------------------------------------------------------------

const meetingData = [
  {
    id: 1,
    subject: 'Task Testing',
    status: 'In progress',
    startDate: '08/01/2024',
    endDate: '09/01/2024',
    duration: '30 min',
    relatedTo: 'petter max',
    assignedUser: 'active user'
  }
];
const MainDuty = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const columns = [
    {
      field: 'attendant',
      headerName: 'ATTENDANT',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },

    {
      field: 'fuel',
      headerName: 'FUEL',
      flex: 1
    },
    {
      field: 'pumpNo',
      headerName: 'PUMP NO',
      flex: 1
    },
    {
      field: 'price/L',
      headerName: 'PRICE/L',
      flex: 1
    },
    {
      field: 'beforeSales',
      headerName: '(BEFORE SALES)',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'afterSales',
      headerName: '(AFTER SALES )	',
      flex: 1
    },
    {
      field: 'soldLiters',
      headerName: 'SOLD(LTRS)',
      flex: 1
    },
    {
      field: 'amount',
      headerName: 'AMOUNT',
      flex: 1
    },
    {
      field: 'edit',
      headerName: 'EDIT',
      flex: 1
    }
  ];
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <AddDuty open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Assign Duty List</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              Meter Allocation
            </Button>
            <Button
              variant="contained"
              startIcon={<Visibility />}
              component={Link}
              to="/OrderDuty/orderCum"
              style={{ backgroundColor: '#673AB7 ' }}
            >
              View Sales History
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={meetingData}
                columns={columns}
                getRowId={(row) => row.id}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
              />
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default MainDuty;
