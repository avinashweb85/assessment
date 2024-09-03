import './TableList.css'
import useTableList from '../hooks/useTableList';
import { changeFormat } from '../utils/formatTime';

function TableList() {
    const [tableList, deteteRow] = useTableList();

    function handleDeteteRow(uuid, removeAt) {
        if (!removeAt) {
            deteteRow(uuid);
        }
    }

    console.log(tableList)
    return (
        <div>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            UUID
                        </th>
                        <th>
                            NAME
                        </th>
                        <th>
                            DESCRIPTION
                        </th>
                        <th>
                            PUBLISH
                        </th>
                        <th>
                            CREATE AT
                        </th>
                        <th>
                            DELETE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableList?.map((data) => (
                        <tr key={data?.id} className={data?.status ? 'body-row-green' : 'body-row-red'}>
                            <th>{data?.id}</th>
                            <th>{data?.uuid}</th>
                            <th>{data?.name}</th>
                            <th>{data?.description?.substring(3, 14)}...</th>
                            <th>{changeFormat(data?.publishAt)}</th>
                            <th>{changeFormat(data?.createdAt)}</th>
                            <th className={data?.removedAt ? ' ' : 'delete-column'} onClick={() => handleDeteteRow(data?.uuid, data?.removedAt)}>Delete</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableList