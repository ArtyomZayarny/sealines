import React from 'react';
import Card from "./Card";

const Result = (props) => {
    let {result} = props;
    let list = '';
    if (result && result.length) {

        list  = result.map((item, i) =>{
            return <Card key={i} data={item} />
        })
    }
    return(
        <div className="result">
            {list}
        </div>
    )
}
export default Result;