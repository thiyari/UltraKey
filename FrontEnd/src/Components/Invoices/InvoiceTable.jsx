// InvoiceTable.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const InvoiceTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 3,
  });

  const [rowCount, setRowCount] = useState(0);
    const handleClick = (row) => {
        console.log("Clicked row:", row.id);
        // example: navigate or open modal
    };
  const fetchInvoices = async () => {

    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/invoices?page=${
          paginationModel.page + 1
        }&limit=${paginationModel.pageSize}`
      );

      const formattedRows = response.data.data.map((invoice) => ({
        id: invoice._id,
        invoiceNumber: invoice.invoiceNumber,
        clientName:
          invoice.client?.businessOrClientName || "N/A",
        totalDue: invoice.totalDue,
        status: invoice.status,
        createdDate: invoice.createdDate,
        dueDate: invoice.dueDate,
        currency: invoice.currency,
      }));

      setRows(formattedRows);
      setRowCount(response.data.total);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [paginationModel]);

  const columns = [
    {
      field: "invoiceNumber",
      headerName: "Invoice #",
      flex: 1,
    },
    {
      field: "clientName",
      headerName: "Client",
      flex: 1.5,
    },
    {
      field: "totalDue",
      headerName: "Total Due",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "currency",
      headerName: "Currency",
      flex: 1,
    },
    {
      field: "createdDate",
      headerName: "Created",
      flex: 1.2,
      renderCell: (params) =>
        params.value
          ? new Date(params.value).toISOString().split("T")[0] 
          : "",
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 1.2,
      renderCell: (params) =>
        params.value
          ? new Date(params.value).toISOString().split("T")[0] 
          : "",
    },
    {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
        return (
        <button
            onClick={() => handleClick(params.row)}
            style={{
            padding: "6px 10px",
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            }}
        >
            View
        </button>
        );
    },
    }
  ];

  return (
    <Box sx={{ width: "100%" }} className="mb-3">
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        rowCount={rowCount}
        pagination
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[3, 5, 10, 20]}
      />
    </Box>
  );
};

export default InvoiceTable;