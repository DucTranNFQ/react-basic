import React, { useEffect, useState, useContext } from "react";
import "antd/dist/antd.css";
import { Table, Button, message, Popconfirm } from "antd";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { CreateAnimalForm, UpdateAnimalForm } from "../../components";
import fetchAPI from "../../utils/fetchAPI";
import { GlobalDataContext } from "../../contexts/GlobalProvider";

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const globalData = useContext(GlobalDataContext);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [updateUI, setUpdateUI] = useState(false);
  const animalsURL = "https://629836b0f2decf5bb73d67d4.mockapi.io/animals";

  const handleCreate = (values) => {
    console.log(values)
    const response = fetchAPI.post(values, animalsURL);
    response.then((res) => {
      if (res.status === 201) {
        setUpdateUI(!updateUI);
        message.success("Animal is added!");
      } else {
        message.error("Error! An error occurred. Please try again later");
      }
    });
    setVisibleCreate(false);
  };

  const handleUpdate = (values, id) => {
    console.log(values);
    const response = fetchAPI.put(values, animalsURL, id);
    response.then((res) => {
        console.log(res)
      if (res.status === 200) {
        setUpdateUI(!updateUI);
        message.success("Animal is updated!");
      } else {
        message.error("Error! An error occurred. Please try again later");
      }
    });
    setVisibleUpdate(false);
  };

  useEffect(() => {
    const response = fetchAPI.getAll(animalsURL);
    response.then(res => res.json()).then(data => {
        const animals = data.map(item => {
            return {
                key: item.id,
                ...item
            }
        })
        globalData.setField("animals", animals)
    })
  }, [updateUI]);

  const onClickEdit = (record) => {
    setVisibleUpdate(true);
    // console.log(record)
    setDataUpdate(record);
  };

  const handleDelete = (record) => {
    const response = fetchAPI.delete(animalsURL, record.id);
    response.then((res) => {
      if (res.status === 200) {
        setUpdateUI(!updateUI);
        message.success("Animal is deleted!");
      } else {
        message.error("Error! An error occurred. Please try again later");
      }
    });
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
              onClick={() => onClickEdit(record)}
              icon={<EditOutlined />}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure you want to delete this item？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => handleDelete(record)}
            >
              <Button type="text" danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Popconfirm>
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
        onClick={() => setVisibleCreate(true)}
      >
        Add
      </Button>

      <CreateAnimalForm
        visible={visibleCreate}
        onCreate={handleCreate}
        onCancel={() => {
          setVisibleCreate(false);
        }}
      />

      <UpdateAnimalForm
        visible={visibleUpdate}
        onUpdate={handleUpdate}
        onCancel={() => {
          setVisibleUpdate(false);
        }}
        prevData={{ ...dataUpdate }}
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
