/**
 * FORM VALIDATION RULES
 */

const required: boolean = true;

const fieldsMeta = {
  ownerType: {
    label: "Owner Type",
  },
  ntn: {
    label: "NTN",
  },
  cnic: {
    label: "CNIC",
  },
  passport: {
    label: "Owner Type",
  },
  ownerName: {
    label: "Owner Name",
  },
  fatherHusbandName: {
    label: "Father Husband Name",
  },
  contactNumber: {
    label: "Contact No",
  },
  otherContactNumber: {
    label: "Owner Type",
  },
  presentAddress: {
    label: "Owner Type",
  },
  presentAddressCity: {
    label: "Owner Type",
  },
  presentAddressDistrict: {
    label: "Owner Type",
  },
  permanentAddress: {
    label: "Owner Type",
  },
  permanentAddressCity: {
    label: "Owner Type",
  },
  permanentAddressDistrict: {
    label: "Permanent Address District",
  },
  taxpayerType: {
    label: "Owner Type",
  },
  vehicleHirePurchaseAgreement: {
    label: "VehicleHire Purchase Agreement",
  },
  vehicleHirePurchaseParty: {
    label: "Vehicle HirePurchase Party",
  },
  registrationNo: {
    label: "Registration No",
  },
  registrationDate: {
    label: "Registration Date",
  },
  representativeCnic: {
    label: "Representative Cnic",
  },
  representativeMobile: {
    label: "Representative Mobile",
  },
  representativeName: {
    label: "Representative Name",
  },
  representativeFName: {
    label: "Representative F Name",
  },
};

export const fieldsList = Object.keys(fieldsMeta);

export const transferFormValidationRules = {
  computerId: [
    {
      required,
      message: "ComputerId is required",
    },
  ],

  ownerType: [
    {
      required,
      message: "Owner Type is required",
    },
  ],
  ntn: [],
  cnic: [
    {
      required,
      message: "CNIC is Required",
    },
    {
      len: 13,
      message: `${fieldsMeta["cnic"].label} should be exactly 13 characters`,
    },
  ],
  passport: [],
  ownerName: [
    {
      required,
      message: "Name is required",
    },
  ],
  fatherHusbandName: [],
  contactNumber: [
    {
      required,
      message: "Contact No is required",
    },
  ],
  otherContactNumber: [],
  presentAddress: [],
  presentAddressCity: [],
  presentAddressDistrict: [],
  permanentAddress: [],
  permanentAddressCity: [],
  permanentAddressDistrict: [
    {
      required,
      message: `District is Required`,
    },
  ],
  taxpayerType: [
    {
      required,
      message: `Tax Payer Category is Required`,
    },
  ],
  vehicleHirePurchaseAgreement: [],
  vehicleHirePurchaseParty: [],
  registrationNo: [
    {
      required: true,
      message: "Registration no is required!",
    },
  ],
  registrationDate: [
    {
      type: "object",
      required: true,
      message: "Please select date!",
    },
  ],
  representativeCnic: [
    {
      required,
      message: "Rep CNIC is Required",
    },
    {
      len: 13,
      message: `${fieldsMeta["cnic"].label} should be exactly 13 characters`,
    },
  ],
  representativeMobile: [],
  representativeName: [
    {
      required,
      message: "Rep Name is Required",
    },
  ],
  representativeFName: [],
};

const activateInitValues = false;

export const initialValues = {
  ownerType: activateInitValues ? "INDIVIDUAL" : null,
  ntn: activateInitValues ? "7677332" : null,
  cnic: activateInitValues ? "1120188007492" : null,
  passport: activateInitValues ? "DS-20192" : null,
  fatherHusbandName: activateInitValues
    ? "ABDUL HAMID" + (Math.random() * 1000).toFixed()
    : null,
  contactNumber: activateInitValues ? "123123" : null,
  otherContactNumber: activateInitValues ? "123123" : null,
  presentAddress: activateInitValues ? "G13, Islamabad" : null,
  presentAddressCity: activateInitValues ? "ISLAMABAD" : null,
  presentAddressDistrict: activateInitValues ? "ISLAMABAD" : null,
  permanentAddress: activateInitValues ? "G13, Islamabad" : null,
  permanentAddressCity: activateInitValues ? "ISLAMABAD" : null,
  permanentAddressDistrict: activateInitValues ? "ISLAMABAD" : null,
  taxpayerType: activateInitValues ? "FILER" : null,
  representativeCnic: activateInitValues ? "1234567890987" : null,
  representativeMobile: activateInitValues ? "3210323" : null,
  representativeName: activateInitValues ? "Ali" : null,
  representativeFName: activateInitValues ? "Khan" : null,
  ownerName: activateInitValues ? "Fida BHittani" : null,
  vehicleHirePurchaseAgreement: activateInitValues ? true : false,
};
