import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import * as XLSX from "xlsx";
import axios from "axios";

const ExcelUpload = () => {
  const [data, setData] = useState([]);
  const [sendData, setSendData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Assuming the first row contains headers and data starts from the second row
      const headers = excelData[0];
      const rows = excelData.slice(1);

      const formattedData = rows.map((row) => {
        return {
          first_name: row[0],
          last_name: row[1],
          phone_no: row[2],
          address1: row[3],
          address2: row[4],
        };
      });

      setData(formattedData);
    };

    reader.readAsBinaryString(file);
  };

  const handleSubmit = async (e) => {
    try {
      if (sendData && sendData.length) {
        console.log("data");
        const res = await axios.post(
          "http://localhost:3000/api/employee/add_employee",
          sendData
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = (e, row) => {
    sendData.push(row);
  };

  return (
    <div>
      <div className="container mt-4 file_parent">
        <h2>Upload a File</h2>
        <form action="/upload" method="post" encType="multipart/form-data">
          <div className="form-group">
            <div className="custom-file">
              {/* <input
                className="custom-file-input"
                type="file"
                id="excelFile"
                onChange={handleFileUpload}
                accept=".xls,.xlsx"
                name="fileUpload"
              /> */}

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Choose a xls file:
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  // id="excelFile"
                  onChange={handleFileUpload}
                  accept=".xls,.xlsx"
                  name="fileUpload"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {data.length > 0 && (
        <div className="pt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th>Upload data</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.first_name}</td>
                  <td>{row.last_name}</td>
                  <td>{row.phone_no}</td>
                  <td>{row.address1}</td>
                  <td>{row.address2}</td>
                  <td>
                    <input
                      type="checkBox"
                      value={row}
                      onClick={(e) => handleData(e, row)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-center">
          <button type="button" onClick={handleSubmit} class="btn btn-primary">
            Submit
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelUpload;
