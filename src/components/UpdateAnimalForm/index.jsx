import React from "react";
import { Modal, Form, Input } from "antd";

const UpdateAnimalForm = ({ visible, onUpdate, onCancel, prevData }) => {
    const [form] = Form.useForm();
    console.log("update form", prevData);
    return (
        <Modal
            visible={visible}
            title="Update an Animal"
            okText="Update"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onUpdate(values);
                    })
                    .catch((info) => {
                        // console.log("Validate Failed:", info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: "public",
                }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input the Name of animal!",
                        },
                    ]}
                >
                    <Input value={"prevData && prevData.name"} />
                </Form.Item>

                <Form.Item
                    name="age"
                    label="Age"
                    rules={[
                        {
                            required: true,
                            message: "Please input the age of animal!",
                        },
                    ]}
                >
                    <Input value={prevData && prevData.age} />
                </Form.Item>

                <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                        {
                            required: true,
                            message: "Please input the type of animal!",
                        },
                    ]}
                >
                    <Input value={prevData && prevData.type} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UpdateAnimalForm;
