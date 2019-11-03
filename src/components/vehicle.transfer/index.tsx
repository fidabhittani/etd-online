import React from "react";
import SecondaryView from "components/secondary-view";
import TransferForm from "./tranfer.form";
import { PageHeader, Alert, Divider, Table, Row, Col, Spin } from "antd";
import { vehicleColumns } from "utils/lookups";
import CheckVehicle from "./check.vehicle";
import { useSelector } from "react-redux";
import { Empty } from "antd";
import UpdateSlotForm from "./update.slot";
import "./styles.less";
import moment from "moment";

const VehicleTransfer = () => {
  const { getVehicle: vehicleLoading, getSlots: slotsLoading } = useSelector(
    (state: any) => state.app.loading
  );
  const { vehicle, transfer } = useSelector((state: any) => state.data);

  const isVehicle = Object.keys(vehicle).length !== 0;

  const isVehicleSearchTried =
    vehicleLoading && vehicleLoading.status === false;

  return (
    <SecondaryView>
      <PageHeader
        title="Change of Ownership"
        subTitle=""  //Use the below form to process vehicle transfer
      />
      <div className="vehicle-transfer">
        <CheckVehicle />
        <br />

        {isVehicleSearchTried && !isVehicle && (
          <React.Fragment>
            <Empty
              description={
                <Alert
                  message={`Invalid vehicle registration no, Please contact ETO office if your vehilce data is incorrect.`}
                  type="warning"
                />
              }
            />
            <Divider />
          </React.Fragment>
        )}

        {isVehicle && (
          <React.Fragment>
            <Table
              dataSource={[{ ...vehicle, key: "vehicle-info-1" }]}
              columns={vehicleColumns}
              size={"middle"}
              pagination={false}
              bordered={true}
            />
            <br />
            {transfer.id && transfer.apTime ? (
              <React.Fragment>
                <Row gutter={24}>
                  <Col sm={24} md={24}>
                    <Alert
                      showIcon
                      //message="Application Save Successfully" 
                      //message={'Application Save Successfully, Computer No ${transfer.window} '}
                      message={`YOUR APPLICATION'S COMPUTER NUMBER IS: ${transfer.id}`}
                      description={`YOUR APOINTMENT TIME IS ${moment(
                        transfer.apTime
                      ).format("LLLL")} at ${transfer.window &&
                        transfer.window.toUpperCase()}
                        \nPLEASE VISIT E.T.D ISLAMABAD OFFICE ALONG WITH ORIGINAL DOCUMENTS.
                        \nCHANGE OF OWNERSHIP IS SUBJECT TO CURRENT OWNER'S BIOMETRIC VERIFICATION FROM NADRA.`}
                      type="info"
                    />
                  </Col>
                  <Col sm={24} md={6}>
                    {slotsLoading && slotsLoading.status ? (
                      <Spin tip="Loading Time Slots" />
                    ) : (
                      <UpdateSlotForm />
                    )}
                  </Col>
                </Row>
              </React.Fragment>
            ) : (
              <TransferForm />
            )}
          </React.Fragment>
        )}
      </div>
    </SecondaryView>
  );
};

export default VehicleTransfer;
