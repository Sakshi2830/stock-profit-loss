var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


function calculateLossAndProfit(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity
        var lossPercentage = (loss / initial) * 100
        console.log(`loss${loss} and percentage ${lossPercentage}`);
    }else if(current > initial){
        var profit = (current - initial ) * quantity
        var profitPercentage = (profit / initial) * 100
        console.log(`profit${profit} and percentage ${profitPercentage}`);

    }else{


    }
}

calculateLossAndProfit(100,10,10)
calculateLossAndProfit(20,10,100)