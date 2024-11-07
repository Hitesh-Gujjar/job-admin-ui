

const getFormField = (fieldDetails, value, handleChange) => {
    switch (fieldDetails?.filedType) {
        case 1:
            return (
                <input
                    type={fieldDetails?.type}
                    name={fieldDetails?.name}
                    id={fieldDetails?.id}
                    placeholder={fieldDetails?.placeholder}
                    value={value}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
            );
        case 2:
            return (
                <textarea
                    type={fieldDetails?.type}
                    name={fieldDetails?.name}
                    id={fieldDetails?.id}
                    placeholder={fieldDetails?.placeholder}
                    value={value}
                    onChange={handleChange}
                    rows={1}
                    className="w-full px-3 py-2 border rounded-md"
                />
            )
        case 3:
            return (
                <select
                    name="gender"
                    value={value}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            )
        default:
            break;
    }
}

export { getFormField }