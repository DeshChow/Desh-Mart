

const InsertUserInfo = (value) => {

    //sessionStorage.clear();

    console.log('hamaisi')

    const key="DeshMart";

    sessionStorage.setItem(key, JSON.stringify(value));

   
}
const ClearUserInfo=()=>
{
    sessionStorage.clear();

    window.location.reload(false);

}

const getUserInfo=()=>
{
    return (JSON.parse(sessionStorage.getItem('DeshMart')) || {});
}

export { InsertUserInfo , ClearUserInfo,getUserInfo}