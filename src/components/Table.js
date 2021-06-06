import TableRow from './TableRow';

const Table = (props) => {
    const rowTitles = [ 'A', 'B', 'C'];
    const { rowData } = props;

    return (
        <div>
            {rowTitles.map((rowTitle,idx) => {
                return (
                    <TableRow
                        rowTitle={rowTitle}
                        key={idx}
                        data={rowData[idx]}
                    />
                );
            })}
        </div>
    );
};

export default Table;