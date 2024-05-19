import React from "react";

interface TextFieldType {
    name: string
    id: string
    type?: string
    value: any
    handleOnChange: any
    autoComplete?: string
    required?: boolean
}

function TextField(
    {
        id,
        type = 'text',
        name,
        value,
        autoComplete,
        handleOnChange,
        required
    }: TextFieldType) {

    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={handleOnChange}
            autoComplete={autoComplete}
            required={required}
            className=" z-0  block w-full px-2 border-solid border-2 rounded-md border-grayJob-400 py-2 outline outline-0 focus:outline-0  focus:border-blueJob-400 hover:border-blueJob-400   sm:text-sm text-sm"
        />
    );
}

export default TextField;
{ }