let calculateTip = function() {
 let bill = Number(document.getElementById('bill').value);
 let split = Number(document.getElementById('split').value)
 let tipperc = Number(document.getElementById('tipperc').value)
 let tip = bill * (tipperc/100);
 let totalBill = bill + tip
 let splitPerPerson = totalBill / split
 let splitTip = tip / split

 document.getElementById("tip").innerHTML = "$" + Number(splitTip).toFixed(2);
 document.getElementById("total").innerHTML = "$" + Number(totalBill).toFixed(2);
 document.getElementById("splitTotal").innerHTML = "$" + Number(splitPerPerson).toFixed(2);
}


const inputBill = document.getElementById('bill')

let inbill = 0

inputBill.addEventListener('input', handleBill)

function handleBill(e) {
  const newBill = parseFloat(e.target.value)

  if (!isNaN(newBill)) {
    inbill = newBill
  } else {
    e.target.value = inbill
  }
}
