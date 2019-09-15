import React from "react";
import Select from "react-select";

export class SelectInput extends React.Component {
    handleChange = (value) => {
        const { fieldName } = this.props;
        this.props.onChange(fieldName, value);
    };

    handleBlur = () => {
        const { fieldName } = this.props;
        this.props.onBlur(fieldName, true);
    };

    render() {
        const { labelText, isMulti, options, value, errors, touched, disabled } = this.props;

        if (!options) return null;

        return (
            <div style={{ margin: "1rem 0" }}>
                <label htmlFor="options" style={{ textTransform: "capitalize" }}><strong>{labelText}</strong></label>
                <Select
                    value={value}
                    id="options"
                    options={options}
                    isMulti={isMulti}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    isDisabled={disabled}
                />
                {!!errors && touched && (
                    <div style={{ width: "100%", marginTop: "0.25rem", fontSize: "80%", color: "#f86c6b" }}>
                        {errors}
                    </div>
                )}
            </div>
        );
    }
}