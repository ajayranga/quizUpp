/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import DataTable from 'react-data-table-component';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const DataTableComp = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchCap, setSearchCap] = useState('');

  const getData = async () => {
    const url = 'https://restcountries.com/v2/all';

    let data = await axios(url);
    setCountries(data.data);
    setFilteredCountry(data.data);
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: any[] = [
    {
      name: 'Country Name',
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: 'Capital',
      selector: (row: any) => row.capital,
      sortable: true,
    },
    {
      name: 'Region',
      selector: (row: any) => row.region,
      sortable: true,
    },
    {
      name: 'Flag',
      selector: (row: any) => (
        <img width={50} height={50} src={row.flag} alt={row.name} />
      ),
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const result = countries.filter((country: any) => {
      return search
        ? country.name.toLowerCase().match(search.toLowerCase()) ||
            country.alpha2Code?.toLowerCase().match(search.toLowerCase()) ||
            country.alpha3Code?.toLowerCase().match(search.toLowerCase()) ||
            country.capital?.toLowerCase().match(search.toLowerCase()) ||
            country.cioc?.toLowerCase().match(search.toLowerCase()) ||
            country.demonym?.toLowerCase().match(search.toLowerCase()) ||
            country.name?.toLowerCase().match(search.toLowerCase()) ||
            country.nativeName?.toLowerCase().match(search.toLowerCase()) ||
            country.region?.toLowerCase().match(search.toLowerCase()) ||
            country.subregion?.toLowerCase().match(search.toLowerCase()) ||
            (country.altSpellings &&
              country.altSpellings[0]
                .toLowerCase()
                .match(search.toLowerCase()) &&
              country.altSpellings[1]
                .toLowerCase()
                .match(search.toLowerCase()) &&
              country.altSpellings[2]
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.currencies &&
              country.currencies[0].code
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.currencies &&
              country.currencies[0].name
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.currencies &&
              country.currencies[0].symbol
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.languages &&
              country.languages[0].iso639_1
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.languages &&
              country.languages[0].iso639_2
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.languages &&
              country.languages[0].name
                .toLowerCase()
                .match(search.toLowerCase())) ||
            (country.languages &&
              country.languages[0].nativeName.toLowerCase().match(search))
        : country.capital?.toLowerCase().match(searchCap.toLowerCase());
    });

    setFilteredCountry(result);
  }, [countries, search, searchCap]);
  return (
    <div className="container">
      <DataTable
        title="Country List"
        columns={columns}
        data={filteredCountry}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="600px"
        highlightOnHover
        striped
        subHeader
        // subHeaderComponent={
        //   <div className="d-flex,flex-column , w-50">
        //     <input
        //       type="text"
        //       placeholder="Search anything"
        //       className="form-control w-100"
        //       value={search}
        //       onChange={(e) => setSearch(e.target.value)}
        //       onFocus={() => setSearchCap('')}
        //     />

        //     <input
        //       type="text"
        //       placeholder="Search Capital"
        //       className="form-control , mt-5"
        //       onFocus={() => setSearch('')}
        //       value={searchCap}
        //       onChange={(e) => setSearchCap(e.target.value)}
        //     />
        //   </div>
        // }
        defaultSortFieldId={1}
        responsive={true}
        // selectableRows={selectableRows}
        //       selectableRowsComponentProps={selectableRowsComponentProps}
        //       selectableRowsNoSelectAll={selectableRowsNoSelectAll}
        //       selectableRowsHighlight={selectableRowsHighlight}
        //       selectableRowsSingle={selectableRowsSingle}
        //       selectableRowsVisibleOnly={selectableRowsVisibleOnly}
        //       expandableRows={expandableRows}
        //       expandableRowsComponent={ExpandableRowComponent}
        //       expandOnRowClicked={expandOnRowClicked}
        //       expandOnRowDoubleClicked={expandOnRowDoubleClicked}
        //       expandableRowsHideExpander={expandableRowsHideExpander}
        //       pagination={pagination}
        //       highlightOnHover={highlightOnHover}
        //       striped={striped}
        //       pointerOnHover={pointerOnHover}
        //       dense={dense}
        //       noTableHead={noTableHead}
        //       persistTableHead={persistTableHead}
        //       progressPending={progressPending}
        //       noHeader={noHeader}
        //       subHeader={subHeader}
        //       subHeaderComponent={subHeaderComponent}
        //       subHeaderAlign={subHeaderAlign}
        //       subHeaderWrap={subHeaderWrap}
        //       noContextMenu={noContextMenu}
        //       fixedHeader={fixedHeader}
        //       fixedHeaderScrollHeight={fixedHeaderScrollHeight}
        //       direction={direction}
        //       responsive={responsive}
        //       disabled={disabled}
      />
    </div>
  );
};

export default DataTableComp;
// import React from 'react';

// // @ts-ignore
// import data from '../constants/sampleMovieData';
// import { Form } from 'react-bootstrap';
// // import DataTable, {
// //   Alignment,
// //   Direction,
// //   TableProps,
// //   TableColumn,
// //   ExpanderComponentProps,
// // } from '../../src/index';
// import DataTable, {
//   Alignment,
//   Direction,
//   TableProps,
//   TableColumn,
//   ExpanderComponentProps,
// } from 'react-data-table-component';

// interface Row {
//   title: string;
//   director: string;
//   year: string;
// }

// const ExpandableRowComponent: React.FC<ExpanderComponentProps<Row>> = ({
//   data,
// }) => {
//   return (
//     <>
//       <p>{data.title}</p>
//       <p>{data.director}</p>
//       <p>{data.year}</p>
//     </>
//   );
// };

// const subHeaderComponent = (
//   <div style={{ display: 'flex', alignItems: 'center' }}>
//     <Form.Control
//       id="outlined-basic"
//       //   label="Search"
//       //   variant="outlined"
//       size="sm"
//       style={{ margin: '5px' }}
//     />
//     {/* <Icon1 style={{ margin: '5px' }} color="action" />
//     <Icon2 style={{ margin: '5px' }} color="action" />
//     <Icon3 style={{ margin: '5px' }} color="action" /> */}
//   </div>
// );

// const columns: TableColumn<Row>[] = [
//   {
//     name: 'Title',
//     selector: (row) => row.title,
//     sortable: true,
//     reorder: true,
//   },
//   {
//     name: 'Director',
//     selector: (row) => row.director,
//     sortable: true,
//     reorder: true,
//   },
//   {
//     name: 'Year',
//     selector: (row) => row.year,
//     sortable: true,
//     reorder: true,
//   },
// ];

// interface TablePropsExtended extends TableProps<Row> {
//   selectableRowsRadio: boolean;
// }

// export function DataTableComp({
//   selectableRows,
//   selectableRowsNoSelectAll,
//   selectableRowsVisibleOnly,
//   selectableRowsHighlight,
//   selectableRowsSingle,
//   expandableRows,
//   expandOnRowClicked,
//   expandOnRowDoubleClicked,
//   expandableRowsHideExpander,
//   pagination,
//   highlightOnHover,
//   striped,
//   pointerOnHover,
//   dense,
//   persistTableHead,
//   noHeader,
//   fixedHeader,
//   fixedHeaderScrollHeight,
//   progressPending,
//   selectableRowsRadio,
//   noTableHead,
//   noContextMenu,
//   direction,
//   subHeader,
//   subHeaderAlign,
//   subHeaderWrap,
//   responsive,
//   disabled,
// }: TablePropsExtended): JSX.Element {
//   const selectableRowsComponentProps = React.useMemo(
//     () => ({
//       type: selectableRowsRadio ? 'radio' : 'checkbox',
//     }),
//     [selectableRowsRadio]
//   );

//   return (
//     <DataTable
//       title="Movie List"
//       columns={columns}
//       data={data}
//       defaultSortFieldId={1}
//       selectableRows={selectableRows}
//       selectableRowsComponentProps={selectableRowsComponentProps}
//       selectableRowsNoSelectAll={selectableRowsNoSelectAll}
//       selectableRowsHighlight={selectableRowsHighlight}
//       selectableRowsSingle={selectableRowsSingle}
//       selectableRowsVisibleOnly={selectableRowsVisibleOnly}
//       expandableRows={expandableRows}
//       expandableRowsComponent={ExpandableRowComponent}
//       expandOnRowClicked={expandOnRowClicked}
//       expandOnRowDoubleClicked={expandOnRowDoubleClicked}
//       expandableRowsHideExpander={expandableRowsHideExpander}
//       pagination={pagination}
//       highlightOnHover={highlightOnHover}
//       striped={striped}
//       pointerOnHover={pointerOnHover}
//       dense={dense}
//       noTableHead={noTableHead}
//       persistTableHead={persistTableHead}
//       progressPending={progressPending}
//       noHeader={noHeader}
//       subHeader={subHeader}
//       subHeaderComponent={subHeaderComponent}
//       subHeaderAlign={subHeaderAlign}
//       subHeaderWrap={subHeaderWrap}
//       noContextMenu={noContextMenu}
//       fixedHeader={fixedHeader}
//       fixedHeaderScrollHeight={fixedHeaderScrollHeight}
//       direction={direction}
//       responsive={responsive}
//       disabled={disabled}
//     />
//   );
// }

// const Template: any = (args: any) => <DataTableComp {...args} />;

// export const KitchenSinkTS = Template.bind({});

// KitchenSinkTS.args = {
//   selectableRows: false,
//   selectableRowsNoSelectAll: false,
//   selectableRowsVisibleOnly: false,
//   selectableRowsHighlight: false,
//   selectableRowsSingle: false,
//   expandableRows: false,
//   expandOnRowClicked: false,
//   expandOnRowDoubleClicked: false,
//   expandableRowsHideExpander: false,
//   pagination: true,
//   highlightOnHover: false,
//   striped: false,
//   pointerOnHover: false,
//   dense: false,
//   persistTableHead: false,
//   noHeader: false,
//   fixedHeader: false,
//   fixedHeaderScrollHeight: '300px',
//   progressPending: false,
//   noTableHead: false,
//   noContextMenu: false,
//   direction: Direction.AUTO,
//   subHeader: false,
//   subHeaderAlign: Alignment.RIGHT,
//   subHeaderWrap: true,
//   responsive: true,
//   disabled: false,
// };

// export default {
//   title: 'Getting Started/Kitchen Sink TS',
//   component: KitchenSinkTS,
//   parameters: {
//     controls: {
//       sort: 'requiredFirst',
//     },
//   },
//   argTypes: {
//     selectableRows: {
//       table: {
//         category: 'Selectable Rows',
//       },
//     },
//     selectableRowsNoSelectAll: {
//       table: {
//         category: 'Selectable Rows',
//       },
//     },
//     selectableRowsVisibleOnly: {
//       table: {
//         category: 'Selectable Rows',
//       },
//     },
//     selectableRowsHighlight: {
//       table: {
//         category: 'Selectable Rows',
//       },
//     },
//     selectableRowsSingle: {
//       table: {
//         category: 'Selectable Rows',
//       },
//     },
//     expandableRows: {
//       table: {
//         category: 'Expandable Rows',
//       },
//     },
//     expandOnRowClicked: {
//       table: {
//         category: 'Expandable Rows',
//       },
//     },
//     expandOnRowDoubleClicked: {
//       table: {
//         category: 'Expandable Rows',
//       },
//     },
//     expandableRowsHideExpander: {
//       table: {
//         category: 'Expandable Rows',
//       },
//     },
//     subHeaderAlign: {
//       options: [Alignment.RIGHT, Alignment.CENTER, Alignment.LEFT],
//       control: { type: 'select' },
//     },
//     direction: {
//       options: [Direction.AUTO, Direction.LTR, Direction.RTL],
//       control: { type: 'select' },
//     },
//     selectableRowsRadio: {
//       options: ['radio', 'checkbox'],
//       control: { type: 'select' },
//       table: {
//         category: 'Selectable Rows',
//       },
//     },
//   },
// };
