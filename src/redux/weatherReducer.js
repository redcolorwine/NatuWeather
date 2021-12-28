initialState={
    city:'Amursk',
    temp:-30,
    feels_like: -50,
    wind:{
        speed:1.5,
        deg: 350
    },
    description: "clear sky"
}


const weatherReducer=(state=initialState, action)=>{
    return state;
}

export default weatherReducer;