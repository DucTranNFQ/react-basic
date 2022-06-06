import React, { useEffect, useState } from "react";
import { Modal, Form, Input } from "antd";

const UpdateAnimalForm = ({ visible, onUpdate, onCancel, prevData }) => {
    const [form] = Form.useForm();
    form.setFieldsValue({
        name: prevData.name,
        age: prevData.age,
        type: prevData.type,
    })
    return (
        <>
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
                        onUpdate(values, prevData.id);
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
                    <Input />
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
                    <Input />
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
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
        </>
    );
};

export default UpdateAnimalForm;
