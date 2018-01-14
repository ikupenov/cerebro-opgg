const React = require("react");
const Input = require("../presentational/input-field");

class FirstContainer extends React.Component {

    constructor() {
        super();

        this.text = "Hola";
    }

    render() {
        return (

            <div>
                <Input text={this.text}></Input>
                <label>GOSHO</label>
            </div>

        );
    }
}

module.exports = () => new FirstContainer();