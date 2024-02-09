/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import PayrollData from './AddPayroll';
import ViewPayrollHistory from './ViewPayroll';
import { IconButton } from '@mui/material';
import ViewIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchPayrollRecords } from './payrollApi';
// ----------------------------------------------------------------------

const documentData = [
  {
    id: 1,
    name: 'Tiger Nixon',
    position: 'System Architect	',
    qualification: 'Edinburgh',
    salary: '61',
    joinDate: '09/01/2024',
    action: 'add/Edit'
  }
];
const Documents = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [payroll , setPayroll] = useState([])
  const columns = [
    {
      field: 'name',
      headerName: 'NAME',
      flex: 1,
      cellClassName: ' name-column--cell--capitalize'
    },
    {
      field: 'position',
      headerName: 'POSITION ',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'qualification',
      headerName: 'QUALIFICATION',
      flex: 1
    },
    {
      field: 'salary',
      headerName: 'SALARY',
      flex: 1
    },
    {
      field: 'joinDate',
      headerName: 'JOIN DATE',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'ACTION',
      flex: 1,
      renderCell: () => (
        <div>
          <IconButton component={Link} to="/ping/payrollData" color="primary">
            <ViewIcon />
          </IconButton>
        </div>
      )
    }
  ];
  const fetchPayrollDetails = async () => {
    try {
      const response = await fetchPayrollRecords();
      console.log(response)
      if (response?.data === 'internal server error') {
        toast.error('internal server error');
      } else {

        const data = response.data.map((item) => {
          return {
            name: item?.name,
            position: item?.designation,
            qualification: item?.qualification,
            salary: item?.salary,
            joinDate : item?.created_at,
            id : item?._id
          };
        });
        setPayroll(data);
      }
    } catch (error) {
      toast.error('something went wrong');
    }
  };
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  useEffect(() => {
    fetchPayrollDetails()
  }, []);
  return (
    <>
      <PayrollData open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Payroll Lists</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              Add Payroll
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={payroll}
                columns={columns}
                getRowId={payroll.id}
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

export default Documents;
