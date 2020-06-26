import React from "react";
import { transferFormValidationRules, initialValues } from "config/rules";
import { districts } from "utils/lookups";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { formItemLayout, tailFormItemLayout } from "utils/responsive";
import { saveVeh } from "actions/data";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Row,
  Col,
  Switch,
  Button,
  Card,
  Spin,
} from "antd";

const { Option } = Select;

const TransferForm = (props: any) => {
  const { getFieldDecorator } = props.form;
  const appLoading = useSelector(({ app }: any) => app.loading.app);

  const dispatch = useDispatch();
  const vehicle = useSelector((state: any) => state.data.vehicle);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const { registrationNo, registrationDate } = vehicle;
        const { vehicleHirePurchaseAgreement } = values;
        dispatch(
          saveVeh({
            ...values,
            registrationNo,
            registrationDate: moment(registrationDate).format("MM/DD/YYYY"),
            vehicleHirePurchaseAgreement:
              vehicleHirePurchaseAgreement === true ? "YES" : "NO",
          })
        );
      }
    });
  };

  const districtsOptions = districts.map((district: string) => (
    <Option key={district} value={district}>
      {district}
    </Option>
  ));

  const renderForm = () => {
    return (
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Card
          size="small"
          //title="TRANSFREE INFORMATION (PERSON/COMPANY, WHOSE NAME SUBJECTED VEHICLE IS GOING TO BE TRANSFERED)"
          title="TRANSFREE INFORMATION"
          headStyle={{ background: "#fafafa" }}
        >
          <Row gutter={24}>
            <Col span={12} xs={24} sm={24} md={12}>
              <Form.Item label="Owner Type" hasFeedback>
                {getFieldDecorator("ownerType", {
                  rules: transferFormValidationRules["ownerType"],
                })(
                  <Select placeholder="Select Owner type">
                    <Option value="INDIVIDUAL">INDIVIDUAL</Option>
                    <Option value="ORGANISATION">ORGANISATION</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    NTN&nbsp;
                    <Tooltip title="This is youur NTN Number?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator("ntn", {
                  rules: transferFormValidationRules["ntn"],
                  initialValue: initialValues["ntn"],
                })(<Input placeholder="National Tax Number" allowClear />)}
              </Form.Item>

              <Form.Item
                hasFeedback
                label={
                  <span>
                    CNIC&nbsp;
                    <Tooltip title="i-e 3740616435939">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator("cnic", {
                  rules: transferFormValidationRules["cnic"],
                  preserve: true,
                  initialValue: initialValues["cnic"],
                })(<Input placeholder={"i-e 3740616435939"} />)}
              </Form.Item>
              <Form.Item label={"Passport No."} hasFeedback>
                {getFieldDecorator("passport", {
                  initialValue: initialValues["passport"],
                  rules: transferFormValidationRules["passport"],
                })(<Input placeholder={"Your Passport"} />)}
              </Form.Item>

              <Form.Item label={"Name"} hasFeedback>
                {getFieldDecorator("ownerName", {
                  rules: transferFormValidationRules["ownerName"],
                  initialValue: "",
                  preserve: true,
                })(<Input placeholder={"Your Name"} />)}
              </Form.Item>
              <Form.Item label={"F/H/W/O Name"}>
                {getFieldDecorator("fatherHusbandName", {
                  rules: transferFormValidationRules["fatherHusbandName"],
                  initialValue: initialValues["fatherHusbandName"],
                })(<Input placeholder={"Your F/H/W/O Name"} />)}
              </Form.Item>
            </Col>
            <Col span={12} xs={24} sm={24} md={12}>
              <Form.Item label="Tax Payer Category" hasFeedback>
                {getFieldDecorator("taxpayerType", {
                  rules: transferFormValidationRules["taxpayerType"],
                  initialValue: initialValues["taxpayerType"],
                })(
                  <Select placeholder="Select Tax Payer Category">
                    <Option value="FILER">FILER</Option>
                    <Option value="NON-FILER">NON-FILER</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="Contact">
                <Row gutter={24}>
                  <Col xs={24} sm={12}>
                    <Form.Item>
                      {getFieldDecorator("contactNumber", {
                        rules: transferFormValidationRules["contactNumber"],
                        initialValue: initialValues["contactNumber"],
                      })(<Input placeholder={"Mobile No"} />)}
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item>
                      {getFieldDecorator("otherContactNumber", {
                        initialValue: initialValues["otherContactNumber"],
                      })(<Input placeholder={"Other Contact Number"} />)}
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item label="Present Address">
                {getFieldDecorator("presentAddress", {
                  initialValue: initialValues["presentAddress"],
                })(<Input.TextArea placeholder="Present address" />)}
                <Row gutter={24}>
                  <Col xs={24} sm={12}>
                    <Form.Item>
                      {getFieldDecorator("presentAddressCity", {
                        initialValue: initialValues["presentAddressCity"],
                      })(<Input placeholder={"City"} />)}
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item>
                      {getFieldDecorator("presentAddressDistrict", {
                        initialValue: initialValues["presentAddressDistrict"],
                      })(
                        <Select showSearch placeholder="Select District">
                          {districtsOptions}
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item label="Permanent Address">
                {getFieldDecorator("permanentAddress", {
                  initialValue: initialValues["permanentAddress"],
                })(<Input.TextArea placeholder="Permanent Address" />)}
                <Row gutter={24}>
                  <Col xs={24} sm={12}>
                    <Form.Item>
                      {getFieldDecorator("permanentAddressCity", {
                        initialValue: initialValues["permanentAddressCity"],
                      })(<Input placeholder={"City"} />)}
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item>
                      {getFieldDecorator("permanentAddressDistrict", {
                        rules:
                          transferFormValidationRules[
                            "permanentAddressDistrict"
                          ],
                        initialValue: initialValues["permanentAddressDistrict"],
                      })(
                        <Select showSearch placeholder="Select District">
                          {districtsOptions}
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <br />

        <Row gutter={24}>
          <Col span={12} xs={24} sm={24} md={12}>
            <Card
              size="small"
              headStyle={{ background: "#fafafa" }}
              title={
                <span>
                  Owner Representative&nbsp;
                  <Tooltip title="Person who will apear at ETD on behalf of vehicle owner">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              <Form.Item
                hasFeedback
                label={
                  <span>
                    CNIC&nbsp;
                    <Tooltip title="i-e 3740616435939">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator("representativeCnic", {
                  initialValue: initialValues["representativeCnic"],
                  rules: transferFormValidationRules["representativeCnic"],
                })(<Input placeholder={"i-e 1120188007493"} />)}
              </Form.Item>

              <Form.Item label={"Name"} hasFeedback>
                {getFieldDecorator("representativeName", {
                  initialValue: initialValues["representativeName"],
                  rules: transferFormValidationRules["representativeName"],
                })(<Input placeholder={"Representative Name"} />)}
              </Form.Item>

              <Form.Item label={"F/H Name."} hasFeedback>
                {getFieldDecorator("representativeFName", {
                  initialValue: initialValues["representativeFName"],
                  rules: transferFormValidationRules["representativeFName"],
                })(
                  <Input placeholder={"Representative Father/Husband Name"} />
                )}
              </Form.Item>

              <Form.Item label={"Mobile."} hasFeedback>
                {getFieldDecorator("representativeMobile", {
                  initialValue: initialValues["representativeMobile"],
                  rules: transferFormValidationRules["representativeMobile"],
                })(<Input placeholder={"Mobile No i-e 9999999999999"} />)}
              </Form.Item>
            </Card>
          </Col>
          <Col span={12} xs={24} sm={24} md={12}>
            <Card
              headStyle={{ background: "#fafafa" }}
              size="small"
              title={
                <span>
                  Hire Purchase Information&nbsp;
                  <Tooltip title="Pledge with company/bank ">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              <Form.Item label={"Bank/Company Name."} hasFeedback>
                {getFieldDecorator("vehicleHirePurchaseParty", {
                  rules:
                    transferFormValidationRules["vehicleHirePurchaseParty"],
                })(<Input placeholder={"Bank/Company Name"} />)}
              </Form.Item>

              <Form.Item label={"Hire Purchase Agreement."}>
                {getFieldDecorator("vehicleHirePurchaseAgreement", {
                  rules:
                    transferFormValidationRules["vehicleHirePurchaseAgreement"],
                })(<Switch />)}
              </Form.Item>
            </Card>
          </Col>
        </Row>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            block
            htmlType="submit"
            className="login-form-button"
          >
            Save
          </Button>
          <br />
        </Form.Item>
      </Form>
    );
  };

  if (appLoading.status === true) {
    return <Spin tip="Processing...">{renderForm()}</Spin>;
  }

  return <React.Fragment> {renderForm()}</React.Fragment>;
};

export default Form.create({ name: "transfer-form" })(TransferForm);
