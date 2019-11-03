/**
 * FORM VALIDATION RULES
 */

const required: boolean = true;

const fieldsMeta = {
  ownerType: {
    label: "Owner Type"
  },
  ntn: {
    label: "NTN"
  },
  cnic: {
    label: "CNIC"
  },
  passport: {
    label: "Owner Type"
  },
  ownerName: {
    label: "Owner Name"
  },
  fatherHusbandName: {
    label: "Father Husband Name"
  },
  contactNumber: {
    label: "Contact No"
  },
  otherContactNumber: {
    label: "Owner Type"
  },
  presentAddress: {
    label: "Owner Type"
  },
  presentAddressCity: {
    label: "Owner Type"
  },
  presentAddressDistrict: {
    label: "Owner Type"
  },
  permanentAddress: {
    label: "Owner Type"
  },
  permanentAddressCity: {
    label: "Owner Type"
  },
  permanentAddressDistrict: {
    label: "Permanent Address District"
  },
  taxpayerType: {
    label: "Owner Type"
  },
  vehicleHirePurchaseAgreement: {
    label: "VehicleHire Purchase Agreement"
  },
  vehicleHirePurchaseParty: {
    label: "Vehicle HirePurchase Party"
  },
  registrationNo: {
    label: "Registration No"
  },
  registrationDate: {
    label: "Registration Date"
  },
  representativeCnic: {
    label: "Representative Cnic"
  },
  representativeMobile: {
    label: "Representative Mobile"
  },
  representativeName: {
    label: "Representative Name"
  },
  representativeFName: {
    label: "Representative F Name"
  }
};

export const transferFormValidationRules = {
  ownerType: [
    {
      required,
      message: "Owner Type is required"
    }
  ],
  ntn: [],
  cnic: [
    {
      required,
      message: "CNIC is Required"
    },
    {
      len: 13,
      message: `${fieldsMeta["cnic"].label} should be exactly 13 characters`
    }
  ],
  passport: [],
  ownerName: [
    {
      required,
      message: "Name is required"
    }
  ],
  fatherHusbandName: [],
  contactNumber: [
    {
      required,
      message: "Contact No is required"
    }
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
      message: `District is Required`
    }
  ],
  taxpayerType: [
    {
      required,
      message: `Tax Payer Category is Required`
    }
  ],
  vehicleHirePurchaseAgreement: [],
  vehicleHirePurchaseParty: [],
  registrationNo: [
    {
      required: true,
      message: "Please input your registration no!"
    }
  ],
  registrationDate: [
    {
      type: "object",
      required: true,
      message: "Please select date!"
    }
  ],
  representativeCnic: [
    {
      required,
      message: "Rep CNIC is Required"
    }
  ],
  representativeMobile: [],
  representativeName: [
    {
      required,
      message: "Rep Name is Required"
    }
  ],
  representativeFName: []
};

const activateInitValues = true;

export const initialValues = {
  ownerType: activateInitValues ? "INDIVIDUAL" : null,
  ntn: activateInitValues ? "7677332" : null,
  cnic: activateInitValues ? "1120188007492" : null,
  passport: activateInitValues ? "DS-20192" : null,
  fatherHusbandName: activateInitValues ? "ABDUL HAMID" : null,
  contactNumber: activateInitValues ? "03425678374" : null,
  otherContactNumber: activateInitValues ? "0517783782" : null,
  presentAddress: activateInitValues ? "G13, Islamabad" : null,
  presentAddressCity: activateInitValues ? "ISLAMABAD" : null,
  presentAddressDistrict: activateInitValues ? "ISLAMABAD" : null,
  permanentAddress: activateInitValues ? "H9, STREET 87" : null,
  permanentAddressCity: activateInitValues ? "ISLAMABAD" : null,
  permanentAddressDistrict: activateInitValues ? "ISLAMABAD" : null,
  taxpayerType: activateInitValues ? "FILER" : null,
  representativeCnic: activateInitValues ? "1234567890987" : null,
  representativeMobile: activateInitValues ? "03445656877" : null,
  representativeName: activateInitValues ? "KALIM ULLAH" : null,
  representativeFName: activateInitValues ? "ABDUL HAMID" : null
};
