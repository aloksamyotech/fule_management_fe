const pmsUrl = 'http://localhost:3200/';

export const apiurls = {
  //Fuel Api
  fuelList: pmsUrl + 'fuel/details',

  //Supplier Api
  supplierList: pmsUrl + 'supplier/getalldetails',

  //Order Api
  addOrder: pmsUrl + 'order/details',
  getOrder: pmsUrl + 'order/getAllDetails',

  //Pump Api
  addPump: pmsUrl + 'add/pump',
  getPump: pmsUrl + 'pump/getalldetails'
};
