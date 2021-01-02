function unFollow() {
  // Clean console log
  console.clear();

  console.log("Script started");

  setTimeout(() => {
    // Open modal and show following users
    const openModal = document.querySelector(".k9GMp li:last-child a ");
    openModal.click();

    console.log("Selecting all users...");
  }, 1000);

  // Select only user who I'm following
  const users = document.querySelectorAll(".PZuss li .sqdOP");
  setInterval(() => {
    users.forEach(user => (user.innerHTML === "Following" ? user.click() : ""));
  }, 1300);

  setInterval(() => {
    // Confirm unfollow
    const buttonUnfollow = document.querySelectorAll(".aOOlW");
    buttonUnfollow.forEach(button => button.click());
  }, 1600);
}
unFollow();
