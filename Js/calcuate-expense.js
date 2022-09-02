function calculateExpenses() {
    const income = document.getElementById("income-input").value;
    const incomeParse = parseInt(income);
    const foodCost = document.getElementById("food-cost-input").value;
    const foodCostParse = parseInt(foodCost);
    const rentCost = document.getElementById("rent-cost-input").value;
    const rentCostParse = parseInt(rentCost);
    const clothCost = document.getElementById("cloth-cost-input").value;
    const clothCostParse = parseInt(clothCost);

    const totalCostOfMonth = foodCostParse + rentCostParse + clothCostParse;
    const totalBalanceLeft = incomeParse - totalCostOfMonth;

    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = totalCostOfMonth + "";

    const totalBalance = document.getElementById("total-balance");
    totalBalance.innerText = totalBalanceLeft + "";
}

document.getElementById("saving-amount-button").addEventListener('click', function () {
    const income = document.getElementById("income-input").value;
    const incomeParse = parseFloat(income);

    const saveAmount = document.getElementById("save-amount-input").value;
    const saveAmountParse = parseFloat(saveAmount);

    const savingAmount = (saveAmountParse / 100.0) * incomeParse;
    const savingAmountParse = parseInt(savingAmount);

    const userSavingAmount = document.getElementById("saving-amount");
    userSavingAmount.innerText = savingAmountParse + "";

    const totalBalanceNew = document.getElementById("total-balance").innerText;

    const remainingBalance = totalBalanceNew - savingAmountParse;


    const userRemainingBalance = document.getElementById("remaining-balance");
    userRemainingBalance.innerText = remainingBalance + "";
})