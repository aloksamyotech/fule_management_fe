/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import AddPumps from './AddPump';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
// ----------------------------------------------------------------------

const pumpData = [
  {
    id: 1,
    pumpCode: 'Auto Insurance',
    pumpDesc: 'jonny petter',
    fuelType: 'jhon Dear',
    date: 'sender',
    status: 'ACTIVE',
    action: 'Edit'
  }
];
const Pump = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'pumpCode',
      headerName: 'PUMP CODE',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'pumpDesc',
      headerName: 'PUMP DESC',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'fuelType',
      headerName: 'FUEL TYPE',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'date',
      headerName: 'DATE',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'status',
      headerName: 'STATUS',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'action',
      headerName: 'ACTION',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize',
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handleEdit(params.row.id)}>
          <EditIcon />
        </IconButton>
      )
    }
  ];
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  return (
    <>
      <AddPumps open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">PUMP-MANAGEMENT</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Pump
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={pumpData}
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

export default Pump;
