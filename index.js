let btn = document.querySelector(".btn");
let box = document.querySelector("#time");
//let dateTime = new Date(box.value * 1000)
btn.addEventListener("click", getDates);
let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function getDates() {
    dayName=new Date(box.value * 1000).getUTCDay();
    //console.log(dayName)

    getDateObj = {
        "nap": day[dayName],
        "dátum": new Date(box.value * 1000).toLocaleDateString(),
        "idő": new Date(box.value * 1000).toLocaleTimeString(),

    };
    
    document.querySelector("h5").innerHTML = getDateObj.dátum +"  "+ getDateObj.idő+" "+getDateObj.nap;
    //return getDateObj
};
