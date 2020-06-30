import React from "react";

import { Form, Input, Button, Row, Col, Alert } from "antd";
import { getApp } from "actions/data";
import { useDispatch, useSelector } from "react-redux";
import { transferFormValidationRules } from "config/rules";

const CheckVehicle = (props: any): any => {
  const dispatch = useDispatch();
  const { getApplication: loading = { status: false } } = useSelector(
    ({ app }: any) => app.loading
  );
  const messages = useSelector(({ app }: any) =>
    app.messages.filter((message: any) => message.context === "header")
  );

  const { getFieldDecorator } = props.form;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        dispatch(
          getApp({
            ...values,
          })
        );
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="update-get-form">
      <Row>
        {(messages || []).map((message: any) => (
          <Alert
            message={message.devMessage}
            type={message.type}
            closable
            showIcon
          />
        ))}
      </Row>
      <Row gutter={8}>
        <Col span={6} xs={24} sm={10} md={8} lg={10}>
          <Form.Item>
            {getFieldDecorator("computerId", {
              rules: transferFormValidationRules["computerId"],
            })(
              <Input
                allowClear
                placeholder="computer Id."
                style={{ textTransform: "capitalize" }}
              />
            )}
          </Form.Item>
        </Col>

        <Col span={6} xs={24} sm={9} md={8} lg={10}>
          <Form.Item>
            {getFieldDecorator("registrationNo", {
              rules: transferFormValidationRules["registrationNo"],
            })(
              <Input
                allowClear
                placeholder="Registration No."
                style={{ textTransform: "capitalize" }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={3} xs={24} sm={5} md={4} lg={4}>
          <Form.Item colon={false}>
            <Button
              type="primary"
              loading={loading && loading.status}
              htmlType="submit"
              block
              className="login-form-button"
            >
              Get
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );

  // Only show error after a field is touched.
};

export default Form.create({ name: "check_vehicle" })(CheckVehicle);
