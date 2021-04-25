import React, {useEffect, useState} from 'react';
import axios from "axios"
import ItemCard from "./ItemCard";

const API_URL = process.env.REACT_APP_API_URL


function AnalogList(props) {
    const [item_list, set_item_list] = useState([])

    const fetch = () => {
        axios({
            method: "get",
            url: `${API_URL}/analog`
        })
            .then(res => set_item_list(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="home-collection-container">
            <h4>Analog Cameras</h4>
            <div className="cards-container">
                {
                    item_list.map(data => <ItemCard data={data}/>)
                }
            </div>
        </div>
    );
}

export default AnalogList;