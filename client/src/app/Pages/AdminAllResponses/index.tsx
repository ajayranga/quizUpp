import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoEnterOutline } from 'react-icons/io5';
import DataTable, {
  SortOrder,
  TableColumn,
  TableStyles,
} from 'react-data-table-component';

import { UseResponseForAdminSlice } from './Features/ResponsesForAdmin/slice';
import {
  selectAllResponses,
  selectPageNumber,
  selectPageSize,
  selectTotalRecords,
} from './Features/ResponsesForAdmin/slice/selectors';
import Loader from 'app/components/Loader';
import Meta from 'app/components/Meta';

type Props = {};
interface DataRow {
  srno: number;
  name: string;
  fatherName: string;
  docNum: string;
  email: string;
  dataAndTime: string;
  score: number;
  id: string;
}
const columns: TableColumn<DataRow>[] = [
  {
    id: 1,
    name: 'Sr No.',
    selector: (row: DataRow) => row.srno,
    sortable: true,
    reorder: true,
    minWidth: '50px',
    maxWidth: '100px',
    center: true,
  },
  {
    id: 2,
    name: 'Name',
    selector: (row: DataRow) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: 'Father Name',
    selector: (row: DataRow) => row.fatherName,
    sortable: false,
    reorder: false,
  },
  {
    id: 4,
    name: 'Document Number',
    selector: (row: DataRow) => row.docNum,
  },
  {
    id: 5,
    name: 'Email',
    selector: (row: DataRow) => row.email,
    sortable: true,
    reorder: true,
  },
  {
    id: 6,
    name: 'Submitted On',
    selector: (row: DataRow) => row.dataAndTime,
    sortable: true,
    wrap: true,
  },
  {
    id: 7,
    name: 'Score',
    selector: (row: DataRow) => row.score,
    sortable: true,
    reorder: true,
    minWidth: '50px',
    maxWidth: '100px',
    center: true,
  },
  {
    id: 8,
    name: 'Answers',
    button: true,
    cell: (row: DataRow) => (
      <Link to={`/admin/response/${row.id}`}>
        <IoEnterOutline />
      </Link>
    ),
  },
];
const customStyles: TableStyles = {
  header: {
    style: {
      minHeight: '56px',
      fontSize: '2rem',
      marginTop: '1rem',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: 'rgba(0, 0, 0, 0.12)',
      color: '#000',
      fontWeight: 'bold',
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'rgba(0, 0, 0, 0.12)',
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
const AdminAllResponses = (props: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<DataRow[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const { actions: ResponseForAdminActions } = UseResponseForAdminSlice();
  const pageNumber = useSelector(selectPageNumber);
  const pageSize = useSelector(selectPageSize);
  const totalRecords = useSelector(selectTotalRecords);
  const allResponses = useSelector(selectAllResponses);

  const handleSort = (
    column: TableColumn<DataRow>,
    sortDirection: SortOrder
  ) => {
    if (
      column.id === 2 ||
      column.id === 5 ||
      column.id === 6 ||
      column.id === 7
    ) {
      const colName =
        column.id === 2
          ? 'name'
          : column.id === 5
          ? 'email'
          : column.id === 6
          ? 'createdAt'
          : column.id === 7
          ? 'score'
          : '';
      dispatch(
        ResponseForAdminActions.fetchAllStart({
          pageNumber,
          sortField: colName,
          dir: sortDirection,
          pageSize: pageSize,
        })
      );
    }
  };
  const handlePerRowsChange = (PaginationChangeRowsPerPage: number) => {
    dispatch(
      ResponseForAdminActions.fetchAllStart({
        pageNumber: 1,
        pageSize: PaginationChangeRowsPerPage,
      })
    );
  };
  const handlePageChange = (PaginationChangePage: number) => {
    dispatch(
      ResponseForAdminActions.fetchAllStart({
        pageNumber: PaginationChangePage,
      })
    );
  };
  useEffect(() => {
    setPending(true);
    dispatch(ResponseForAdminActions.fetchAllStart({ pageNumber }));
    setPending(false);
  }, [ResponseForAdminActions, dispatch, pageNumber]);

  useEffect(() => {
    setPending(true);
    const dataForTable = allResponses.map((itm, index) => {
      return {
        srno: pageSize * (pageNumber - 1) + index + 1,
        name: itm.name,
        fatherName: itm.fatherName,
        docNum: itm.docNum,
        email: itm.email,
        dataAndTime:
          new Date(itm.createdAt).toLocaleDateString() +
          ' @ ' +
          new Date(itm.createdAt).toLocaleTimeString(),
        score: itm.score,
        id: itm._id,
      };
    });
    setData(dataForTable);
    setPending(false);
  }, [allResponses, pageNumber, pageSize]);

  return (
    <Container>
      <Meta title="All Responses" />
      <DataTable
        title="Here are the responses of all students"
        columns={columns}
        data={data}
        customStyles={customStyles}
        striped
        responsive
        pagination
        paginationServer
        paginationTotalRows={totalRecords}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onSort={handleSort}
        defaultSortFieldId={1}
        progressPending={pending}
        progressComponent={<Loader />}
      />
    </Container>
  );
};

export default AdminAllResponses;

//  const BootyPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage, // available but not used here
//   currentPage,
// }) => {
//   const handleBackButtonClick = () => {
//     onChangePage(currentPage - 1);
//   };

//   const handleNextButtonClick = () => {
//     onChangePage(currentPage + 1);
//   };

//   const handlePageNumber = (e) => {
//     onChangePage(Number(e.target.value));
//   };

//   const pages = getNumberOfPages(rowCount, rowsPerPage);
//   const pageItems = toPages(pages);
//   const nextDisabled = currentPage === pageItems.length;
//   const previosDisabled = currentPage === 1;

//   return (
//     <nav>
//       <ul className="pagination">
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleBackButtonClick}
//             disabled={previosDisabled}
//             aria-disabled={previosDisabled}
//             aria-label="previous page"
//           >
//             Previous
//           </button>
//         </li>
//         {pageItems.map((page) => {
//           const className =
//             page === currentPage ? 'page-item active' : 'page-item';

//           return (
//             <li key={page} className={className}>
//               <button
//                 className="page-link"
//                 onClick={handlePageNumber}
//                 value={page}
//               >
//                 {page}
//               </button>
//             </li>
//           );
//         })}
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleNextButtonClick}
//             disabled={nextDisabled}
//             aria-disabled={nextDisabled}
//             aria-label="next page"
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };
