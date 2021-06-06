import styled from 'styled-components';
import TableRowWithImage from './TableRowWithImage';

const TableWithImage = (props) => {
    const { dataList , handleRowClick } = props;

    return (
        <Table>
            {dataList.length > 0 &&
                dataList.map((data,idx) => {
                    return (
                        <TableRowWithImage
                            data={data}
                            key={idx+1}
                            handleRowClick={handleRowClick}
                        />
                    );
                })}
        </Table>
    );
};

const Table = styled.ul`
    list-style: none;
`;

export default TableWithImage;