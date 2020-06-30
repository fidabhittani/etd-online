/**
 * MAP App to Transferee
 * */
import { fieldsList } from "config/rules";

const mappings: any = {
  ownerType: "ownerType",
  ntn: "ntn",
  cnic: "cnic",
  passport: "passportNo",
  ownerName: "name",
  fatherHusbandName: "fName",
  contactNumber: "contactNo",
  otherContactNumber: "contactNo",
  presentAddress: "tempAddress",
  presentAddressCity: "tempCity",
  presentAddressDistrict: "tempDist",
  permanentAddress: "prmntAddress",
  permanentAddressCity: "prmntCity",
  permanentAddressDistrict: "prmntDistrict",
  taxpayerType: "taxpayerType",
  vehicleHirePurchaseAgreement: "hpa",
  vehicleHirePurchaseParty: "vehicleHirePurchaseParty",
  registrationNo: "vehRegNo",
  registrationDate: "vehRegDate",
  representativeCnic: "repCnic",
  representativeMobile: "repMobile",
  representativeName: "repName",
  representativeFName: "repFName",
};

export const mapAppToTransfree = (appData: any) => {
  return fieldsList.reduce((sum: any, next: any, index: number) => {
    sum[next] = appData[mappings[next]];
    return sum;
  }, {});
  //   return { ...appData, ...mappingApp };
};
