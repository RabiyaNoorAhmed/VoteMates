const addBtn = document.getElementById("addBtn");
const friendInput = document.getElementById("friendInput");
const friends = ["Rabiya", "Saima", "Iqra", "Nousheen", "Hafsa"];
const votes = Array(friends.length).fill(0);

addBtn.addEventListener("click", () => {
    if (friendInput.value.trim() !== "") {
        friends.push(friendInput.value);
        votes.push(0);
        friendInput.value = "";
        displayFriend();
    };
});

function displayFriend() {
    let friendList = document.getElementById("friendList");
    friendList.innerHTML = "";

    friends.forEach((friends, index) => {
        let row = document.createElement("ul");

        let nameCell = document.createElement("li");
        nameCell.textContent = friends


        let indexCell = document.createElement("li");
        indexCell.textContent = index + 1;

        let voteCell = document.createElement("li");
        voteCell.textContent = votes[index];

        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(voteCell);

        row.addEventListener("click", () => {
            votes[index]++;
            voteCell.textContent = votes[index];
        });
        friendList.appendChild(row);
    })
};

displayFriend();