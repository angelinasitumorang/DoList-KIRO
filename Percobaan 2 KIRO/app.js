// app.js - ToDo List Application Logic

// ─── DOM References ───────────────────────────────────────────────────────────
const taskInput  = document.getElementById('taskInput');
const addBtn     = document.getElementById('addBtn');
const taskList   = document.getElementById('taskList');
const errorMsg   = document.getElementById('errorMsg');
const taskCount  = document.getElementById('taskCount');

// ─── Update Count ─────────────────────────────────────────────────────────────
function updateCount() {
  const n = taskList.querySelectorAll('li').length;
  taskCount.textContent = `${n} tugas`;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.display = 'block';
  taskInput.focus();
}

function clearError() {
  errorMsg.textContent = '';
  errorMsg.style.display = 'none';
}

// ─── Task 3: Tambah Tugas ─────────────────────────────────────────────────────

/**
 * Membuat elemen <li> untuk satu tugas beserta tombol hapusnya.
 * @param {string} text - Teks tugas
 * @returns {HTMLLIElement}
 */
function createTaskElement(text) {
  const li = document.createElement('li');

  const bullet = document.createElement('span');
  bullet.className = 'task-bullet';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.setAttribute('aria-label', `Hapus tugas: ${text}`);
  // Trash icon SVG
  deleteBtn.innerHTML = `<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>`;
  deleteBtn.addEventListener('click', () => deleteTask(li));

  li.appendChild(bullet);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

/**
 * Membaca nilai input, memvalidasi, lalu menambahkan tugas baru ke daftar.
 * Placeholder untuk saveTasks() akan dipanggil di sini (Task 5).
 */
function addTask() {
  const text = taskInput.value.trim();

  if (text.length < 3) {
    showError('Tugas minimal 3 karakter.');
    return;
  }
  if (text.length > 50) {
    showError('Tugas maksimal 50 karakter.');
    return;
  }

  clearError();
  const li = createTaskElement(text);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();

  updateCount();
  saveTasks();
}

// ─── Task 4: Hapus Tugas ──────────────────────────────────────────────────────

/**
 * Menghapus elemen <li> yang diberikan dari DOM.
 * Placeholder untuk saveTasks() akan dipanggil di sini (Task 5).
 * @param {HTMLLIElement} li - Elemen tugas yang akan dihapus
 */
function deleteTask(li) {
  li.remove();
  updateCount();
  saveTasks();
}

// ─── Event Listeners ──────────────────────────────────────────────────────────

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

taskInput.addEventListener('input', clearError);

// ─── Task 5: Persistensi LocalStorage ────────────────────────────────────────

/**
 * Menyimpan semua teks tugas saat ini ke localStorage dengan key 'todos'.
 */
function saveTasks() {
  const tasks = Array.from(taskList.querySelectorAll('span')).map(span => span.textContent);
  localStorage.setItem('todos', JSON.stringify(tasks));
}

/**
 * Membaca data tugas dari localStorage dan merender ulang daftar tugas.
 */
function loadTasks() {
  const stored = localStorage.getItem('todos');
  if (!stored) return;

  const tasks = JSON.parse(stored);
  tasks.forEach(text => {
    const li = createTaskElement(text);
    taskList.appendChild(li);
  });
  updateCount();
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', loadTasks);
