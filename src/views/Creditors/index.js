/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import Iconify from '../../ui-component/iconify';
import CreditorsData from './AddCreditors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// ----------------------------------------------------------------------

const policyData = [
  {
    id: 1,
    name: 'ADEYINKA ADEOLA',
    phone: '09087654321',
    email: 'ade@gmail.com',
    address: 'somewhere sango Ota Ogun State',
    client: 'GOVERNMENT',
    action: 'edit/Delete'
  }
];
const Task = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'name',
      headerName: 'NAME',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'phone',
      headerName: 'PHONE',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
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
      field: 'client',
      headerName: 'CLIENT',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'ACTION',
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
      <CreditorsData open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Creditors Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              Add Creditors
            </Button>
            <Button
              variant="contained"
              startIcon={<Visibility />}
              component={Link}
              to="/details/cred"
              style={{ backgroundColor: '#673AB7 ' }}
            >
              View Purchase History
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

export default Task;
