const React = require("react");

const Input = ({ label, text, type, id, value, handleChange }) => (

    <div className="form-group">
        <label>{text}</label>
    </div>
    
);

module.exports = Input;