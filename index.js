const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/calculateBill', (req, res)=>{
    const {billAmount,totalPeople, serviceQuality } = req.query;
    let total = (Number(billAmount)* Number(serviceQuality)) / Number(totalPeople);
    res.json({ value: total});
})

app.listen(3000, () =>{
    console.log("server is runnig in port 3000");
})