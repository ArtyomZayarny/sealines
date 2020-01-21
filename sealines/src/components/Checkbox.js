import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked:true
        }
    }
    togglCheck = (name,type,allow) => {

        this.setState({
            checked:!this.state.checked
        })
        this.props.filter(name,!this.state.checked,type)
        // console.log(allow())
    }
    render() {
        let {name,type, allow} = this.props;
        return (
            <label >{name}
                <input
                    type="checkbox"
                    defaultChecked
                    // disabled={allow}
                    onChange={() => {this.togglCheck(name,type,allow)}}
                />
            </label>
        )
    }
}

export default Checkbox;