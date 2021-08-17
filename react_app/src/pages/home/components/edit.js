import {useState} from "react";
import {v4} from "uuid";

const Edit = ({add, submittingDataStatus}) => {
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function noteChange(note) {
        setNote(note.target.value);
    }

    function dateChange(date) {
        setDate(date.target.value);
    }

    function timeChange(time) {
        setTime(time.target.value);
    }

    function addItem() {
        submittingDataStatus.current = true
        add(function (pervData) {
            return [{id: v4(), note, date, time}, ...pervData];
        });
    }

    return (
        <div>
            <h1>備忘錄</h1>
            <p>記事：</p>
            <input type="text" value={note} onChange={noteChange}/>
            <p>日期：</p>
            <input type="date" value={date} onChange={dateChange}/>
            <p>時間：</p>
            <input type="time" value={time} onChange={timeChange}/>
            <button className="add" onClick={addItem}>
                新增
            </button>
        </div>
    );
};

export default Edit;
