import React, {Component} from 'react';
import Checkbox from "./Checkbox";

const Filter = (props) => {

    let {sealines,services,filter,allowFilters} = props;
    let sealinesFilter;
    let servicesFilter;





    if (sealines.length) {
        sealinesFilter = sealines.map((item) => {
            return (
                <Checkbox key={item} name={item} filter={filter} type={'sealines'} />
            )
        });
    }
    if (services.length) {
        servicesFilter = services.map( (item) => {
            return (
                <Checkbox key={item} name={item} filter={filter} type={'services'} allow={allowFilters}/>
            )
        });
    }

    return (

        <aside>
            <div className="sealines">
                <h2>Sealines</h2>
                {sealinesFilter}
            </div>
            <div className="services">
                <h2>Services</h2>
                {servicesFilter}
            </div>
        </aside>
    )
}

export default Filter;