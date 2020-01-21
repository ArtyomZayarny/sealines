import React, {Component} from 'react';
import Result from "./Result";
import Filter from "./Filter";

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
        case 'services':
            filtered = array.filter( (item) => {
                //Walk through transShipments array
                //Return array with items that match to the filter
                let inner = item.transShipments.filter((shipment) => {
                    //Return item if service match filter
                    if(!filters.includes(shipment.service)) {
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

function sortByDeparture(arr) {
    arr.sort((a,b) => a.transShipments[0].departure.date > b.transShipments[0].departure.date? 1 : -1)
    return arr
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseList:{},
            services:[],
            sealines:[],
            filter:[],
            servicesFilter:[]
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
    filterBy =(options,action,type)=> {
        switch(type) {
            case 'sealines':
                if (action) {
                    let optionsFilter = this.state.filter;
                    if (!this.state.filter.includes(options)) {
                        optionsFilter.push(options);
                        this.setState({
                            filter:optionsFilter,
                            responseList:sortByDeparture(filter(this.state.initData,this.state.filter,'sealine'))
                        })
                    }
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
                break;
            case 'services':
                  if (action) {
                      console.log('add filter');
                       if(!this.state.servicesFilter.includes(options)) {
                           let updateFilter = this.state.servicesFilter;
                           updateFilter.push(options)
                           this.setState({
                               servicesFilter:updateFilter,
                               responseList:sortByDeparture(filter(this.state.initData,updateFilter,'services'))
                           })
                       }

                  } else {
                      let updateFilter = null;
                      console.log('remove filter');
                      let filters = this.state.services;
                      if (this.state.servicesFilter.length) {
                          updateFilter = this.state.servicesFilter.filter(item => item !== options);
                          this.setState({
                              servicesFilter:updateFilter,
                             responseList:sortByDeparture(filter(this.state.responseList,updateFilter,'services'))
                          })


                      } else {
                          updateFilter = filters.filter(item => item !== options);
                          this.setState({
                              servicesFilter:updateFilter,
                             responseList:sortByDeparture(filter(this.state.responseList,updateFilter,'services'))
                          })

                      }

                      }

                break;
            default:
                console.log('Filter type is undefined');
                break
        }

    }

    allowFilters = (responseList) => {
        console.log(responseList)

    }
    render() {
        return(
            <>
                <Filter  sealines={this.state.sealines}  services={this.state.services} filter={this.filterBy}  allowFilters={this.allowFilters(this.state.responseList)}/>
                <Result result={this.state.responseList} />
            </>
        )
    }
}

export default Content;