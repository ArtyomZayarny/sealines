import React from 'react';

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month ;
    return time;
}
const Card =(props)=> {
    let {data} = props;
    let shipments = data.transShipments;
    const renderOptions = (shipments) => {
        let list = shipments.map( (item,i)=> {
            return (
                <div  key={i} className="option-item">
                    <p>Service:{shipments[i].service}</p>
                    <p>Departure:{timeConverter(shipments[i].departure.date)}</p>
                    <p>Arrival: {timeConverter(shipments[i].arrival.date)}</p>
                </div>
            );
        })
        let options = shipments.length > 1 ? 'options' : 'options-single';
        return(
            <div className={options}>
                {list}
            </div>
        )
    }
    return(
        <div className='card'>
            <h5>Sealine: {data.sealine}</h5>
            {renderOptions(shipments)}
        </div>
    )
}

export default Card;