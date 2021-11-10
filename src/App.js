import './App.css';
import {RadioButton} from "./compoments/radio-button/radio-button";
import {useState} from "react";

const items = [
    {
        id: 1,
        label: 'fsdfsd',
        name: '1',
        value: '2'
    },
    {
        id:2,
        label: 'fdsfsdfs',
        name: '1',
        value: '3'
    }
]

function App() {
    const [item, setItem] = useState('')
    const onChange = (e) => {
        setItem(e.target.value)
    }
    return (
        <div className="App">
            {
                items.map((i) => <RadioButton key={i.id} value={i.value} checked={item === i.value} name={i.name} onChange={onChange}>{i.label}</RadioButton>)
            }
        </div>
    );
}

export default App;
