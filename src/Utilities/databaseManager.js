




const InsertItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


const DeleteItem = (key) => {
    localStorage.removeItem(key);
}

const ClearCart = () => {
    localStorage.clear();
}


const getFullCart = () => {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return (values);
}
export { InsertItem, DeleteItem, ClearCart, getFullCart }














