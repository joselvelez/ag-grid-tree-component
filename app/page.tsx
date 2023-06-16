"use client";
import { useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// data
import RowData from "./data/gridData";

export default function Home() {
  const gridRef = useRef();
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Organisation Hierarchy",
      minWidth: 300,
      cellRendererParams: {
        suppressCount: true,
      },
    };
  }, []);
  const getDataPath = useMemo(() => {
    return (data) => {
      return data.orgHierarchy;
    };
  }, []);

  const columnDefs = [
    // we're using the auto group column by default!
    { field: "jobTitle" },
    { field: "employmentType" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          ref={gridRef}
          rowData={RowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          treeData={true}
          animateRows={true}
          groupDefaultExpanded={-1}
          getDataPath={getDataPath}
        ></AgGridReact>
      </div>
    </main>
  );
}
