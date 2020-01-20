import React, {Component} from 'react';


class Checkbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked:true
        }
        
    }


togglCheck = (name) => {
    
    this.setState({
        checked:!this.state.checked
    })
   this.props.filter(name,!this.state.checked)
}
    render() {
        
        let {name} = this.props;
        return (
            <label >{name}
                    <input
                        type="checkbox"
                        defaultChecked
                        onChange={() => {this.togglCheck(name)}}
                        />
                </label>
        )
    }
    
}
const Filter = (props) => {

    let {sealines,services,filter} = props;
    let sealinesFilter;
    let servicesFilter;

    if (sealines.length) {
        sealinesFilter = sealines.map((item) => {
            return (
                <Checkbox key={item} name={item} filter={filter}/>
            )
        });
    }

    
return (

        <aside>
            <div className="sealines">
              <h2>Sealines</h2>
              {sealinesFilter}
            </div>
        </aside>
)
}

const Card =(props)=> {
let {data} = props;
let shipments = data.transShipments;
let departure = timeConverter(data.transShipments[0].departure.date);

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

function sortByDeparture(arr) {
    arr.sort((a,b) => a.transShipments[0].departure.date > b.transShipments[0].departure.date? 1 : -1)
    return arr
}

function filter(array,[...filters],type = ['sealine']) {
    let filtered = [];
    if (filter.length === 0) {
        return filtered;
    }
    switch(type){
        case 'sealine':
            filtered = array.filter( (item) => {
                if (filters.includes(item.sealine)) {
                    return item
                }
            });
            return filtered;
            break;
        case 'service':
            filtered = array.filter( (item) => {
                //Walk through transShipments array
                //Return array with items that match to the filter
                let inner = item.transShipments.filter((shipment) => {
                    //Return item if service match filter
                    if(filters.includes(shipment.service)) {
                        return item
                    }
                });
                //Filter items with no matches
                if (inner.length === 0) {
                    return item
                }
            })
            return filtered;
            break;
        default:
            return 'Filer type is indefined';
    }
}
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month ;
    return time;
  }

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseList:{},
            services:[],
            sealines:[],
            filter:[]
        }
    }

    componentDidUpdate = (prevProps) => {
        let initDataSize = Object.keys(prevProps.data).length;
        let responseDataSize = Object.keys(this.props.data).length
        
        if (initDataSize != responseDataSize) {
            let initData = [];
            Object.assign(initData,this.props.data)
            this.setState({
                initData:initData,
                responseList: sortByDeparture(this.props.data),
                sealines:this.getSealines(this.props.data),
                services:this.getServices(this.props.data)
            })
        }
    }
    getSealines = (data) => {
        let sealines  = Array.from(new Set(data.map( (item) => item.sealine)));
        return Array.from(sealines);  
    }
    getServices = (data) => {
        let services =  new Set();
        data.map( (card) => {
            card.transShipments.map( (item) => {
                    services.add(item.service);
            })
        })
        return Array.from(services)
    }
     filterBy =(options,action)=> {
           if (action) {
               const options = this.state.filter
               options.push(options);
               this.setState({
                    filter:options
               }) 

            //    console.log(this.state.initData)
            //    console.log(filter);
               console.log(filter(this.state.initData,options,'sealine'));
           }else {
               let filters = this.state.sealines;
              if (this.state.filter.length == 1) {
                 this.setState({
                     filter:[],
                     responseList:[]
                 })
                 
              }else {
                let updateFilter = filters.filter(item => item !== options)
                this.setState({
                    filter:updateFilter,
                    responseList:filter(this.state.responseList,updateFilter,'sealine')
                })  
                
              }
           }

  
        
     } 
     
    
    render() {
        return(
            <>  
            <Filter  sealines={this.state.sealines}  services={this.state.services} filter={this.filterBy}  />
            <Result result={this.state.responseList} />
            </>
        )
    }
}
    

export default Content;