import {useState, useEffect, useRef} from "react";
import {API_GET_DATA} from '../../global/constants'

import Edit from "./components/edit";
import List from "./components/list";
import "./index.css";

async function fetchData(setData) {
    const response = await fetch(API_GET_DATA)
    const {data} = await response.json()
    setData(data)
}

async function fetchSetData(data) {
    const response = await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const Home = () => {
    const [data, setData] = useState([])
    const submittingDataStatus = useRef(false)

    useEffect(() => {
        if (!submittingDataStatus.current) {
            return
        }
        fetchSetData(data).then(data => submittingDataStatus.current = false)
    }, [data])

    useEffect(() => { // useEffect 會綁定一個狀態(下方之data)，若該狀態改變，則執行 useEffect
        fetchData(setData)
    }, []) // 如果為空，則只會在載入頁面時執行一次


    return (
        <div className="app">
            <Edit add={setData} submittingDataStatus={submittingDataStatus}/>
            <List listData={data} deleteData={setData} submittingDataStatus={submittingDataStatus}/>
        </div>
    );
};

export default Home;
