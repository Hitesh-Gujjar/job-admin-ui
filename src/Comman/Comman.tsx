

const getLocalStorage = () => {
    const isUser: any = localStorage.getItem("user");

    return isUser ? JSON.parse(isUser) : false
}

export { getLocalStorage }