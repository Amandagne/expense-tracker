let paymentType = document.querySelector("#payment-type")
let name = document.querySelector("#name")
let date = document.querySelector("#date")
let amount = document.querySelector("#amount")

// let paymentType = document.sample.paytype.value;
// let name = document.sample.name.value;
// let date = document.sample.date.value;
// let amount = document.sample.amount.value;



let submit = document.querySelector("#submit")
let tableBody = document.querySelector("#tbody");
let mytable = document.querySelector("#table")
let form = document.querySelector("#form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let tr = document.createElement("tr")
    let td1 = tr.appendChild(document.createElement("td"))
    let td2 = tr.appendChild(document.createElement("td"))
    let td3 = tr.appendChild(document.createElement("td"))
    let td4 = tr.appendChild(document.createElement("td"))
    let del = tr.appendChild(document.createElement("button"))
    del.innerHTML = "Delete";
    del.style.padding = "10px"
    del.onclick = () => tr.display = "none"
        

    
    td1.innerHTML = paymentType.value
    td2.innerHTML = name.value
    td3.innerHTML = date.value
    td4.innerHTML = amount.value
    tableBody.appendChild(tr)

    console.log(paymentType.value, date.value, name.value, amount.value)
})