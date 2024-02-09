const pmsUrl = 'http://localhost:3200/';

export const apiurls = {
  //Fuel Api
  fuelList: pmsUrl + 'fuel/details',

  //Supplier Api
  supplierList: pmsUrl + 'supplier/getalldetails',

  //Order Api
  addOrder: pmsUrl + 'order/details',


  //Staff Api 

  getAllStaff: pmsUrl + 'staff/get/all',
  saveStaff: pmsUrl + 'staff/add',


  // payroll api 

  savePayroll: pmsUrl + 'payroll/add',
  fetchPayroll: pmsUrl + 'payroll/get/all'

};
