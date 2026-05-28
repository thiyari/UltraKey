// InvoiceTable.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const InvoiceTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 3,
  });

  const [rowCount, setRowCount] = useState(0);
    const handleClick = (row) => {
        navigate(`/pdf/${row.id}`);
    };
    
  const formatedDate = (dateString) => {
    const date = new Date(dateString).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    return date
  }

  const fetchInvoices = async () => {

    try {
      setLoading(true);

      const response = await axios.get(
        `${apiUrl}/api/invoices?page=${
          paginationModel.page + 1
        }&limit=${paginationModel.pageSize}`
      );

      const formattedRows = response.data.data.map((invoice) => ({
        id: invoice._id,
        title: invoice.title,
        invoiceNumber: invoice.invoiceNumber,
        prefix: invoice.prefix,
        suffix: invoice.suffix,
        clientName: invoice.client?.businessOrClientName || "N/A",
        clientEmail: invoice.client?.email || "N/A",
        total: invoice.subTotal,
        status: invoice.status,
        createdDate: invoice.createdDate,
        dueDate: invoice.dueDate,
        currencySymbol: invoice.currencySymbol,
        date: invoice.createdAt,
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
      field: "title",
      headerName: "Title",
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "flex", fontSize: 12, color: "blue" }}>
          <span style={{ fontWeight: "bold" }}>{params.row.title}</span>
        </div>
      )
    },
    {
      field: "Number",
      headerName: "Number",
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "flex", fontSize: 12, color: "blue" }}>
          <span style={{ fontWeight: "bold" }}>{params.row.prefix ? params.row.prefix + '-' : ''}</span>
          <span style={{ fontWeight: "bold" }}>{params.row.invoiceNumber}</span>
          <span style={{ fontWeight: "bold" }}>{params.row.suffix ? '-' + params.row.suffix : ''}</span>
        </div>
      ),
    },
    {
      field: "client",
      headerName: "Client",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", fontSize: 12 }}>
            <span style={{ color: "blue" }}>{params.row.clientName}</span>
            <span>{params.row.clientEmail}</span>
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Statuses",
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", fontSize: 12 }}>
            <span style={{ fontWeight: "bold" }}>{params.row.status}</span>
          </div>
        );
      }
    },
    {
      field: "CreatedDate",
      headerName: "Created",
      flex: 1.2,
      renderCell: (params) => {return (
        <div style={{ display: "flex", flexDirection: "column", fontSize: 12}}>
          <span><i className="fa-regular fa-calendar-days fa-xl"></i>  {params.row.createdDate? new Date(params.row.createdDate).toISOString().split("T")[0] : ""}</span>
          <span>Due: {params.row.dueDate? new Date(params.row.dueDate).toISOString().split("T")[0] : ""}</span>
        </div>
      )}
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", fontSize: 12 }}>
            <span style={{ fontWeight: "bold" }}>Total: {params.row.currencySymbol}{params.row.total.toFixed(2)}</span>
          </div>
        );
      }
    },
    {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
        return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

        <button
            type="button"
            onClick={() => handleClick(params.row)}
            style={{
            background: "transparent",
            border: "1px solid #1976d2",
            cursor: "pointer",
            fontSize: "18px",
            color: "#1976d2"
            }}
        >
            <i className="fa-solid fa-file"></i>
        </button>

        </div>
        );
    },
    },
    {
      field: "publishedDate",
      headerName: "Date",
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", fontSize: 12 }}>
            <span>Published</span>
            <span>{params.row.date ? formatedDate(params.row.date) : ""}</span>
          </div>
        );
      }
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
        getRowHeight={() => "auto"}
      />
    </Box>
  );
};

export default InvoiceTable;