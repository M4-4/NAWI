const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalLink = document.getElementById("modal-link");

const data = [
  {
    title: "Bild 1",
    text: "Dies ist eine ausführlichere Beschreibung für Bild 1.",
    link: "https://example.com/bild1"
  },
  // Weitere Objekte für Bild 2 bis 6 ...
];

function openModal(index) {
  modalTitle.textContent = data[index].title;
  modalText.textContent = data[index].text;
  modalLink.href = data[index].link;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
