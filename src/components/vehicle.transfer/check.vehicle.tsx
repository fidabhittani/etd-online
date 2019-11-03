import React from "react";

import { Form, Input, Button, DatePicker, Row, Col } from "antd";
import { getVeh } from "actions/data";
import { useDispatch, useSelector } from "react-redux";
import { transferFormValidationRules } from "config/rules";

const CheckVehicle = (props: any): any => {
  const dispatch = useDispatch();
  const { getVehicle: loading = { status: false } } = useSelector(
    ({ app }: any) => app.loading
  );
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        dispatch(
          getVeh({
            ...values,
            registrationDate: values.registrationDate.format("DD-MM-YYYY")
          })
        );
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Row gutter={24}>
        <Col span={6} xs={24} sm={10} md={8} lg={6}>
          <Form.Item label="Registration No">
            {getFieldDecorator("registrationNo", {
              rules: transferFormValidationRules["registrationNo"]
            })(
              <Input
                allowClear
                placeholder="Registration No."
                style={{ textTransform: "capitalize" }}
              />
            )}
          </Form.Item>
        </Col>

        <Col span={6} xs={24} sm={9} md={8} lg={6}>
          <Form.Item label="Registration Date">
            {getFieldDecorator("registrationDate", {
              rules: transferFormValidationRules["registrationDate"]
            })(<DatePicker style={{ width: "100%" }} format={"DD-MM-YYYY"} />)}
          </Form.Item>
        </Col>
        <Col span={3} xs={24} sm={5} md={4} lg={3}>
          <Form.Item label={<span>&nbsp;</span>} colon={false}>
            <Button
              type="primary"
              loading={loading && loading.status}
              htmlType="submit"
              block
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );

  // Only show error after a field is touched.
};

export default Form.create({ name: "check_vehicle" })(CheckVehicle);
