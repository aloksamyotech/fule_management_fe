/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import { IconButton } from '@mui/material';
import AddStaff from './AddStaff';
import EditIcon from '@mui/icons-material/Edit';
import { Visibility } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

// ----------------------------------------------------------------------

const policyData = [
  {
    id: 1,
    staffId: 'PSMS99287',
    name: 'AMAN LIKHAR',
    phone: '09993064875',
    email: 'amit@gm.com	',
    address: 'Sango Ota Ogun State',
    position: 'MANAGER',
    action: 'active'
  }
];
const StaffManagement = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'staffId',
      headerName: 'STAFF ID',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'name',
      headerName: 'NAME',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'phone',
      headerName: 'PHONE',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      flex: 1
    },
    {
      field: 'address',
      headerName: 'ADDRESS',
      flex: 1
    },
    {
      field: 'position',
      headerName: 'POSITION',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'ACTION ',
      flex: 1,
      renderCell: (params) => (
        <div>
          <IconButton color="primary" onClick={() => handleEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      )
    }
  ];
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <AddStaff open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Staff-Management</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              Add New staff
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={policyData}
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

export default StaffManagement;
