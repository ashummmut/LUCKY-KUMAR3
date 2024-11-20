// script.js
let highestBid = 100;  // starting bid
let bidHistory = [];
let countdownTimer;

function placeBid() {
    const bidAmount = parseFloat(document.getElementById("bidAmount").value);
    const highestBidElement = document.getElementById("highestBid");
    const bidHistoryList = document.getElementById("bidHistoryList");

    if (isNaN(bidAmount) || bidAmount <= highestBid) {
        alert("Your bid must be higher than the current highest bid.");
        return;
    }

    highestBid = bidAmount;
    highestBidElement.textContent = highestBid;

    // Add the new bid to the bid history
    bidHistory.push(bidAmount);
    const newBid = document.createElement("li");
    newBid.textContent = `Bid of $${bidAmount.toFixed(2)}`;
    bidHistoryList.appendChild(newBid);

    // Clear the input field
    document.getElementById("bidAmount").value = "";
}

function startTimer() {
    let timeLeft = 10;  // Auction duration in seconds

    countdownTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            alert("Auction ended! The highest bid was: $" + highestBid);
        }
    }, 1000);
}

// Initialize the auction timer
startTimer();
const auctions = [
    { id: 1, product: "Wheat", currentBid: "₹1500", endDate: "2024-11-30" },
    { id: 2, product: "Rice", currentBid: "₹2000", endDate: "2024-12-05" },
];

const schemes = [
    { name: "PM-Kisan", description: "Income support to farmers with Rs. 6,000 per year." },
    { name: "Soil Health Card Scheme", description: "Provides soil testing and fertility data to farmers." },
];

const mspData = [
    { crop: "Wheat", msp: "₹2125" },
    { crop: "Rice", msp: "₹1940" },
];

const fertilizers = [
    { name: "Urea", price: "₹266/bag", description: "High nitrogen fertilizer for crop growth." },
    { name: "DAP", price: "₹1350/bag", description: "Phosphate-rich fertilizer for root development." },
];

// Populate Auctions
const auctionList = document.getElementById("auction-list");
auctions.forEach((auction) => {
    const auctionCard = document.createElement("div");
    auctionCard.classList.add("card");
    auctionCard.innerHTML = `
        <h3>${auction.product}</h3>
        <p>Current Bid: ${auction.currentBid}</p>
        <p>Ends On: ${auction.endDate}</p>
    `;
    auctionList.appendChild(auctionCard);
});

// Populate Schemes
const schemesList = document.getElementById("schemes-list");
schemes.forEach((scheme) => {
    const schemeCard = document.createElement("div");
    schemeCard.classList.add("card");
    schemeCard.innerHTML = `
        <h3>${scheme.name}</h3>
        <p>${scheme.description}</p>
    `;
    schemesList.appendChild(schemeCard);
});

// Populate MSP Data
const mspTableBody = document.querySelector("#msp-table tbody");
mspData.forEach((msp) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${msp.crop}</td>
        <td>${msp.msp}</td>
    `;
    mspTableBody.appendChild(row);
});

// Populate Fertilizers
const fertilizerList = document.getElementById("fertilizer-list");
fertilizers.forEach((fertilizer) => {
    const fertilizerCard = document.createElement("div");
    fertilizerCard.classList.add("card");
    fertilizerCard.innerHTML = `
        <h3>${fertilizer.name}</h3>
        <p>Price: ${fertilizer.price}</p>
        <p>${fertilizer.description}</p>
    `;
    fertilizerList.appendChild(fertilizerCard);
});