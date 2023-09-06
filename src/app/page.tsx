'use client'
import React from 'react';
import { useLiquid } from '../utils/liquid';
import {
  LdTable,
  LdTableCaption,
  LdTableToolbar,
  LdTableHead,
  LdTableRow,
  LdTableHeader,
  LdTableBody,
  LdTableCell,
  LdBreadcrumbs,
  LdCrumb,
  LdCircularProgress,
  LdTypo
} from '@emdgroup-liquid/liquid/dist/react-define-excluded';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  useLiquid();
  return (
    <>
      <div className="container mx-auto p-4">
        <LdBreadcrumbs >
          <LdCrumb href="/">Back to Home</LdCrumb>
          <LdCrumb href="/">Dashboard</LdCrumb>
        </LdBreadcrumbs>
        <LdTable className="mt-4">
          <LdTableToolbar slot="toolbar">
            <LdTableCaption>
              Chinese administrative divisions by population in 2017
            </LdTableCaption>
          </LdTableToolbar>
          <LdTableHead style={{ textAlign: 'right' }}>
            <LdTableRow>
              <LdTableHeader sortable style={{ textAlign: 'left' }}>
                Administrative Division
              </LdTableHeader>
              <LdTableHeader sortable sortOrder="desc">
                Total
              </LdTableHeader>
              <LdTableHeader sortable>Urban</LdTableHeader>
              <LdTableHeader sortable>Rural</LdTableHeader>
            </LdTableRow>
          </LdTableHead>
          <LdTableBody style={{ textAlign: 'right' }}>
            {/* Sample table rows, you can add more rows as needed */}
            <TableRow
              division="Mainland China"
              total="1,485,710,000"
              urban="831,370,000"
              rural="564,010,000"
            />
            <TableRow
              division="Guangdong"
              total="188,690,000"
              urban="78,020,000"
              rural="33,670,000"
            />
            <TableRow
              division="Beijing"
              total="188,690,000"
              urban="78,020,000"
              rural="33,670,000"
            />
            <TableRow
              division="Shandong"
              total="188,690,000"
              urban="78,020,000"
              rural="33,670,000"
            />
            <TableRow
              division="Shanghai"
              total="188,690,000"
              urban="78,020,000"
              rural="33,670,000"
            />
            {/* Add more rows here */}
          </LdTableBody>
        </LdTable>

        <LdCircularProgress aria-valuenow={125}>
          <LdTypo variant="b6" style={{ color: 'var(--ld-thm-error)' }}>125%</LdTypo>
          <LdTypo variant="label-s">complete</LdTypo>
        </LdCircularProgress>
        <LdCircularProgress aria-valuenow={175}>
          <LdTypo variant="b6" style={{ color: 'var(--ld-thm-error)' }}>175%</LdTypo>
          <LdTypo variant="label-s">complete</LdTypo>
        </LdCircularProgress>
        <LdCircularProgress aria-valuenow={225}>
          <LdTypo variant="b6" style={{ color: 'var(--ld-thm-error)' }}>225%</LdTypo>
          <LdTypo variant="label-s">complete</LdTypo>
        </LdCircularProgress>
      </div>
    </>
  );
};

interface TableRowProps {
  division: string;
  total: string;
  urban: string;
  rural: string;
}

// Create a separate TableRow component for better organization
const TableRow: React.FC<TableRowProps> = ({ division, total, urban, rural }) => (
  <LdTableRow>
    <LdTableCell style={{ textAlign: 'left' }}>{division}</LdTableCell>
    <LdTableCell>{total}</LdTableCell>
    <LdTableCell>{urban}</LdTableCell>
    <LdTableCell>{rural}</LdTableCell>
  </LdTableRow>
);

export default Home;
