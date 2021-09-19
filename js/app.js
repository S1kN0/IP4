// const totallOrder = [];
// const orderSummary = document.querySelector("#order-summary");
// const tot = document.querySelector("#total-price");
// const prices = {
//     small : 500,
//     medium: 700,
//     large: 1200
// }
// let total = 0;

const totallOrder = [];
const orderSummary = $("#order-summary");
const tot = $("#total-price");

const prices = {
    small : 500,
    medium: 900,
    large: 1200
}
let total = 0;


$("form").submit(function(event){
    event.preventDefault()
    const fd = new FormData(this);   
    const orderLine = {
        type: fd.get("type"),
        flavour : fd.get("flavour"),
        size : fd.get("size"),
        qty: fd.get("qty"),
        toppings: fd.getAll("toppings"),
        cost: prices[fd.get("size")]
    }
    total += parseFloat(prices[fd.get("size")])
    totallOrder.push(orderLine)
    orderSummary.append(`
        <tr>
            <td>${orderLine.type}</td>
            <td>${orderLine.flavour}</td>
            <td>${orderLine.size}</td>
            <td>${orderLine.qty}</td>
            <td>${orderLine.toppings.join()}</td>
            <td>${orderLine.cost}</td>
            <td><button class='btn-remove'>Remove</button></td>
        </tr>
    `);
    tot.html(`<strong>KSH${total}</strong>`);
  });

$("#tbl").on('click', '.btn-remove', function () {
    $(this).closest('tr').remove();
});

//     alert("Thank you " + name + "! Your order has been confirmed, Thank you .");
//     document.getElementById("").reset();

// $(document).ready(function () {
// document.getElementById("form").addEventListener("submit", popUp);
// function popUp() {
//     alert("Your order is will be with you in 40 mins. Thank you for choosing us")
// }