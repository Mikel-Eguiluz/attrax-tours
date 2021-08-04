const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

document.getElementById("modal-open-btn").addEventListener("click", () => {
  console.log("modal");
  overlay.classList.add("is-visible");
  modal.classList.add("is-visible");
});

const closeModal = () => {
  overlay.classList.remove("is-visible");
  modal.classList.remove("is-visible");
};

document.getElementById("close-btn").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
