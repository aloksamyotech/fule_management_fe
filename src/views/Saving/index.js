/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../ui-component/iconify';
import SavingList from './AddSaving.js';

// ----------------------------------------------------------------------

const leadData = [
  {
    id: 1,
    sn: '1',
    amount: '55,000.00',
    bankDesc: 'SBI',
    shortNote: 'Fifty Five Thousand rupees Only ',
    date: 'Tue 15th March 2022'
  }
];
const SavingData = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'sn',
      headerName: 'S/N',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'amount',
      headerName: 'AMOUNT',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'bankDesc',
      headerName: 'BANK DESC',
      flex: 1
    },
    {
      field: 'shortNote',
      headerName: 'SHORT NOTE',
      flex: 1
    },
    {
      field: 'date',
      headerName: 'DATE',
      flex: 1
    }
  ];

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <SavingList open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Saving-Management</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              Bank Saving
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={leadData}
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

export default SavingData;
