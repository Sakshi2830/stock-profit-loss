var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


function calculateLossAndProfit(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity
        var lossPercentage = (loss / initial) * 100
        outputBox.innerText = `Hey the loss is ${loss} and percentage is ${lossPercentage}`
    }else if(current > initial){
        var profit = (current - initial ) * quantity
        var profitPercentage = (profit / initial) * 100
       outputBox.innerText =`Hey the profit is ${profit} and percentage is ${profitPercentage}`

    }else{
        outputBox.innerText = `No Pain No Gain!! No Gain No Pain!1`

    }
}

submitBtn.addEventListener('click', submitHandler) ;

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateLossAndProfit(ip,qty,curr)
}

