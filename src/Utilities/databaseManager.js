




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

        const temp=JSON.parse(localStorage.getItem(keys[i]));

      if(temp.hasOwnProperty('id') && temp.hasOwnProperty('name') && temp.hasOwnProperty('price') && temp.hasOwnProperty('quantity') && temp.hasOwnProperty('category'))
        values.push(temp);
    }

    return (values);
}
export { InsertItem, DeleteItem, ClearCart, getFullCart }














