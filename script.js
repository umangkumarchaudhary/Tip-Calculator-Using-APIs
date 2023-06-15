const { serialize } = require("v8");

var billAmount = document.getElementById('billAmount').ariaValueMax;
var totalPeople= document.getElementById('totalpeople').ariaValueMax;
var ServiceQuality = document.getElementById('ServiceQuality').ariaValueMax;

function calculateTip(){
    console.log(billAmount, totalPeople, ServiceQuality);
    axios.get('http://localhost:3000/calculateBill?billAmount=400&totalPeople=2&serviceQuality=0.3')/TouchEvent((req, res) => {
      console.log(result);
    }

    ).catch((err)=> {
        console.log(err);
    }
    );


}