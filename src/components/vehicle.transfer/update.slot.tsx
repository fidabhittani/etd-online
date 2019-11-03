import React from "react";
import { Form, Select, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateTimeSlot } from "actions/data";
const { Option } = Select;

const UpdateSlotForm = (props: any) => {
  const { timeslots, vehicle, transfer }: any = useSelector(
    ({ data }: any) => data
  );
  const {
    updateSlot: updateSlotLoading = {},
    getSlots: getSlotLoading = {}
  } = useSelector(({ app }: any) => app.loading);
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const { timeSlot } = values;
        const slectedSlot = timeslots.find(
          (slot: any) => Number(slot.id) === Number(timeSlot)
        );

        dispatch(
          updateTimeSlot({
            ...values,
            apTime: slectedSlot.time,
            sessionId: transfer.sessionId,
            computerId: transfer.id,
            timeSlot: Number(timeSlot),
            chasis: vehicle.chasisNo,
            ...slectedSlot
          })
        );
        console.log("Received values of form: ", values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  const slotsOptions = (timeslots || []).map((timeSlot: any) => (
    <Option key={timeSlot.id} value={timeSlot.id}>
      {timeSlot.time}
    </Option>
  ));

  // Only show error after a field is touched.
  return (
    <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Form.Item label={"Available Time Slots"}>
        {getFieldDecorator("timeSlot", {
          rules: [{ required: true, message: "Select appointment time slot!" }]
        })(
          <Select
            placeholder="Select appointment time slot"
            style={{ width: "100%", minWidth: "200px" }}
            loading={(getSlotLoading || {}).status}
            showSearch
          >
            {slotsOptions}
          </Select>
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={(updateSlotLoading || {}).status}
        >
          Update Appiontment Time
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "update_slot" })(UpdateSlotForm);
