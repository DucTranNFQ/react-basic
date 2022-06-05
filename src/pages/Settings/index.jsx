import React, { useEffect, useState, useContext } from "react";
import "antd/dist/antd.css";
import { Table, Button, message } from "antd";
import {
    PlusCircleOutlined,
    DeleteOutlined,
    EditOutlined,
} from "@ant-design/icons";

import { CreateAnimalForm } from "../../components";
import fetchAPI from "../../utils/fetchAPI";
import { GlobalDataContext } from "../../contexts/GlobalProvider";

const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const globalData = useContext(GlobalDataContext);
    const [visible, setVisible] = useState(false);
    const [updateUI, setUpdateUI] = useState(false);
    const animalsURL = "https://629836b0f2decf5bb73d67d4.mockapi.io/animals";

    const onCreate = (values) => {
        const response = fetchAPI.post(animalsURL, values);
        response.then((res) => {
            if (res.status === 201) {
                setUpdateUI(!updateUI);
                message.success("Animal is added!");
            } else {
                message.error(
                    "Error! An error occurred. Please try again later"
                );
            }
        });
        setVisible(false);
    };

    useEffect(() => {
        const response = fetchAPI.getAll(
            "https://629836b0f2decf5bb73d67d4.mockapi.io/animals"
        );
        response.then((result) => globalData.setField("animals", result));
    }, [updateUI]);

    const handleEdit = (e) => {
        console.log(e);
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Type",
            dataIndex: "type",
        },
        {
            title: "CreatedAt",
            dataIndex: "createdAt",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => {
                return (
                    <>
                        <Button
                            type="text"
                            onClick={() => handleEdit(record)}
                            icon={<EditOutlined />}
                        >
                            Edit
                        </Button>
                        <Button
                            type="text"
                            danger
                            onClick={() => handleEdit(record)}
                            icon={<DeleteOutlined />}
                        >
                            Delete
                        </Button>
                    </>
                );
            },
        },
    ];

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: "odd",
                text: "Select Odd Row",
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }

                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: "even",
                text: "Select Even Row",
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }

                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <>
            <Button
                type="primary"
                shape="round"
                icon={<PlusCircleOutlined />}
                onClick={() => setVisible(true)}
            >
                Add
            </Button>

            <CreateAnimalForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />

            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={globalData.animals}
            />
        </>
    );
};

export default App;
