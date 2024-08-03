import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from "@mui/material";

const DataTable = ({
	columns,
	data,
	totalItems,
	page,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange,
	renderRow,
}) => {
	return (
		<>
			<TableContainer component={Paper}>
				<Table className="min-w-[768px]">
					<TableHead>
						<TableRow>
							{columns.map(col => (
								<TableCell key={col}>{col}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>{data.map(item => renderRow(item))}</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[1, 5, 10, 25]}
				component="div"
				count={totalItems}
				rowsPerPage={rowsPerPage}
				page={page - 1}
				onPageChange={onPageChange}
				onRowsPerPageChange={onRowsPerPageChange}
			/>
		</>
	);
};

export default DataTable;
