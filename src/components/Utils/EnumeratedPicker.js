import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function EnumeratedPicker(props) {

    const [value, setValue] = React.useState(props.values[0]);

    React.useEffect(() => {
        if (props.disabled == false) {
            props.valueChanged(value.Value);
        }
    }, [])

    React.useEffect(() => {
        if (props.disabled == false) {
            props.valueChanged(value.Value);
        }

    }, [value])

    React.useEffect(() => {

        props.values.forEach((v) => {
            if (v.Value == props.value) {
                setValue(v);
                return
            }
        })

    }, [props.value])


    return (

        <Autocomplete
            id="enum-code-box"
            options={props.values}
            disabled={props.disabled}
            value={value}
            onChange={(event, newValue) => {
                if (newValue == null) {
                    return
                }
                setValue(newValue);
                props.valueChanged(newValue.value);
            }}
            getOptionLabel={(option) => option.Description}
            style={{width: "80%"}}
            renderInput={(params) => <TextField {...params} margin={"dense"} variant="standard"/>}
        />
    );


}

