'use strict';
const notesContainer = document.querySelector('.notes-container'),
  createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p'),
    i = document.createElement('i');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  i.src = 'fa-regular fa-trash-can';
  notesContainer.appendChild(inputBox).appendChild(i);
});

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    document.execCommand('insertLinkBreak');
    event.preventDefault();
  }
});
