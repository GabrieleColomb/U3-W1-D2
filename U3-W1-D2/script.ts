const sonBalanceElem = document.getElementById("sonBalance");
const motherBalanceElem = document.getElementById("motherBalance");

let sonBalance = 0;
let motherBalance = 0;

function updateBalances() {
  sonBalanceElem.innerText = sonBalance.toFixed(2);
  motherBalanceElem.innerText = motherBalance.toFixed(2);
}

function deposit(account) {
  const amountElem = document.getElementById(`${account}DepositAmount`);
  const amount = parseFloat(amountElem.value);
  if (!isNaN(amount)) {
    if (account === "son") {
      sonBalance += amount;
    } else if (account === "mother") {
      motherBalance += amount;
    }
    updateBalances();
  }
  amountElem.value = "";
}

function withdraw(account) {
  const amountElem = document.getElementById(`${account}WithdrawAmount`);
  const amount = parseFloat(amountElem.value);
  if (!isNaN(amount)) {
    if (account === "son" && sonBalance >= amount) {
      sonBalance -= amount;
    } else if (account === "mother" && motherBalance >= amount) {
      motherBalance -= amount;
    } else {
      console.log("Saldo insufficiente per il prelievo richiesto.");
    }
    updateBalances();
  }
  amountElem.value = "";
}

function addInterest() {
  motherBalance += motherBalance * 0.1; // Aggiungi l'interesse del 10% al saldo di MotherAccount
  updateBalances();
}

updateBalances();