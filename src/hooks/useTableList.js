import { useEffect, useState } from 'react'

function useTableList() {
    const [tableList, setTableList] = useState([]);

    useEffect(() => {
        getList();
    }, []);

    async function getList() {
        let response = await fetch('http://ec2-63-34-145-237.eu-west-1.compute.amazonaws.com/msc/stream/list');
        let dataList = await response.json();
        setTableList(dataList?.streams);
    };

    async function deteteRow(uuid) {
        let bodyData = new URLSearchParams({
            uuid: uuid
        });

        let response = await fetch('http://ec2-63-34-145-237.eu-west-1.compute.amazonaws.com/msc/stream', {
            method: 'DELETE',
            headers: {
                'SYSTEM': 'SYSTEM',
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json'
            },
            body: bodyData.toString()

        });
        console.log({ response });
        if(response?.statusText === "OK"){
            alert(`Deleted ${uuid}`);
            getList();
        }
    }

    return ([
        tableList,
        deteteRow
    ]);
}

export default useTableList