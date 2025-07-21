<template>
  <div id="app">
    <header class="main-header">
      <div class="header-content">
        <div class="header-left">
          <a href="https://www.instagram.com/ucr.aeg/" target="_blank" rel="noopener noreferrer">
            <img src="/aeg.jpg" alt="Logo AEG" class="header-logo-image" />
          </a>
          <h1 class="header-title">Planificador de Clases</h1>
        </div>
        <div class="header-actions">
          <button class="btn-about" @click="showAboutModal = true">Sobre la Página</button>
          <div class="dropdown" :class="{ 'is-open': isDropdownOpen }">
            <button class="btn-descargar" @click="toggleDropdown">
              Descargar
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="dropdown-icon"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
            </button>
            <div class="dropdown-content" v-if="isDropdownOpen">
              <button @click="descargarHorario('jpg')">Como JPG</button>
              <button @click="descargarHorario('pdf')">Como PDF</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="form-section">
      <SelectorDeCursos :escuelas="todasLasEscuelas" @grupo-agregado="agregarGrupoAHorario" />
    </div>

    <div class="horario-wrapper">
      <HorarioTabla
        :horario="clases"
        @eliminar-clase="eliminarClaseDelHorario"
      />
    </div>

    <div v-if="gifUrl" class="gif-modal">
      <div class="gif-modal-content">
        <h3>⚠️ ¡Choque de Horario!</h3>
        <img :src="gifUrl" alt="Meme de choque de horario">
        <button @click="gifUrl = null">Entendido</button>
      </div>
    </div>

    <div v-if="showAboutModal" class="about-modal">
      <div class="about-modal-content">
        <button class="close-btn" @click="showAboutModal = false">×</button>
        <h2>Sobre la Aplicación</h2>
        <p>Página perteneciente a la <strong>Asociación de Estudiantes de Guanacaste - UCR</strong>.</p>
        <p>La información es obtenida desde la página oficial de la Universidad de Costa Rica en la sección de guía de horario:
          <a href="https://guiahorarios.ucr.ac.cr/ggh/" target="_blank">guiahorarios.ucr.ac.cr</a>.
        </p>
        <p>La función de esta página es facilitar al estudiante el proceso de armar su matrícula de manera más visual y automática.</p>
        <p class="update-info"><em>Horarios actualizados al día {{ lastUpdatedDate }}.</em></p>
      </div>
      
    </div>

    <transition name="toast-fade">
      <div v-if="notification.visible" class="toast-notification">
        ✅ {{ notification.message }}
      </div>
    </transition>

    <footer class="simple-footer">
      <div class="footer-links">
        <a href="https://www.instagram.com/ucr.aeg/" target="_blank" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947C21.728 2.69 19.306.273 14.948.073 13.667.014 13.26 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44.796-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
        </a>
        <a href="https://www.facebook.com/UCRAEG" target="_blank" title="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.888v1.112h3l-.438 4h-2.562v12h-5v-12h-3v-4h3v-2.223c0-1.716.994-4.777 4.777-4.777h3.223v5z"/></svg>
        </a>
      </div>
      <p class="footer-text">&copy; {{ new Date().getFullYear() }} Asociación de Estudiantes de Guanacaste - UCR. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import HorarioTabla from './components/HorarioTabla.vue';
import SelectorDeCursos from './components/SelectorDeCursos.vue';
import { escuelas } from './data/cursos.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// --- Datos Reactivos (Composition API) ---
const clases = ref([]);
const todasLasEscuelas = ref(escuelas);
const coloresDisponibles = ref([
  '#2E86C1', '#28B463', '#F39C12', '#C0392B', '#8E44AD',
  '#16A085', '#D35400', '#7D3C98', '#2980B9', '#27AE60'
]);
const coloresAsignados = ref({});
const gifUrl = ref(null);
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
const isDropdownOpen = ref(false);
const notification = ref({ message: '', visible: false });
let notificationTimeout = null;
const showAboutModal = ref(false);
const lastUpdatedDate = ref('20 de julio 2025');

// --- Carga y guardado en LocalStorage ---
onMounted(() => {
  const horarioGuardado = localStorage.getItem('miHorario');
  if (horarioGuardado) {
    clases.value = JSON.parse(horarioGuardado);
    clases.value.forEach(clase => {
      if (!coloresAsignados.value[clase.nombreCompleto]) {
        coloresAsignados.value[clase.nombreCompleto] = clase.color;
      }
    });
  }
});

watch(clases, (nuevasClases) => {
  localStorage.setItem('miHorario', JSON.stringify(nuevasClases));
}, { deep: true });

// --- Funciones ---
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const timeToMinutes = (timeStr) => {
  if (!timeStr || !timeStr.includes(':')) return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const buscarGifDeChoque = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=crash,fail,no&rating=g`);
    const data = await response.json();
    gifUrl.value = data.data.images.original.url;
  } catch (error) {
    console.error("Error al buscar GIF:", error);
    alert("¡Choque de Horario!");
  }
};

const verificarChoque = (nuevoGrupo) => {
  for (const bloqueNuevo of nuevoGrupo.horarios) {
    const inicioNuevo = timeToMinutes(bloqueNuevo.horaInicio);
    const finNuevo = timeToMinutes(bloqueNuevo.horaFin);
    for (const claseExistente of clases.value) {
      if (claseExistente.dia.toLowerCase() === bloqueNuevo.dia.toLowerCase()) {
        const inicioExistente = timeToMinutes(claseExistente.horaInicio);
        const finExistente = timeToMinutes(claseExistente.horaFin);
        if (inicioNuevo < finExistente && finNuevo > inicioExistente) return true;
      }
    }
  }
  return false;
};

const agregarGrupoAHorario = (grupo) => {
  if (verificarChoque(grupo)) {
    buscarGifDeChoque();
    return;
  }
  
  const nombreCompleto = `${grupo.nombreCurso} (G${grupo.numero})`;
  let colorDelGrupo = coloresAsignados.value[nombreCompleto];

  if (!colorDelGrupo) {
    const coloresUsados = Object.values(coloresAsignados.value);
    colorDelGrupo = coloresDisponibles.value[coloresUsados.length % coloresDisponibles.value.length];
    coloresAsignados.value[nombreCompleto] = colorDelGrupo;
  }

  grupo.horarios.forEach(horario => {
    const nuevaClase = {
      id: `${grupo.siglaCurso}-${grupo.numero}-${horario.dia}-${horario.horaInicio}`,
      nombre: grupo.nombreCurso,
      grupo: grupo.numero,
      nombreCompleto,
      dia: horario.dia,
      horaInicio: horario.horaInicio,
      horaFin: horario.horaFin,
      profesor: grupo.profesor,
      color: colorDelGrupo
    };
    if (!clases.value.some(c => c.id === nuevaClase.id)) {
      clases.value.push(nuevaClase);
    }
  });
  showNotification(`'${grupo.nombreCurso}' agregado con éxito.`);
};

const eliminarClaseDelHorario = (claseId) => {
  const claseAEliminar = clases.value.find(c => c.id === claseId);
  if (!claseAEliminar) return;
  const nombreClaseCompleto = claseAEliminar.nombreCompleto;
  clases.value = clases.value.filter(clase => clase.nombreCompleto !== nombreClaseCompleto);
  delete coloresAsignados.value[nombreClaseCompleto];
};

const descargarHorario = async (formato) => {
  if (clases.value.length === 0) {
    alert("El horario está vacío. Añade al menos un curso para descargar.");
    return;
  }
  const elementoHorario = document.querySelector(".horario-table");
  if (!elementoHorario) {
    alert("Error: No se pudo encontrar la tabla del horario.");
    return;
  }
  isDropdownOpen.value = false;
  const botonesEliminar = elementoHorario.querySelectorAll(".delete-btn");
  botonesEliminar.forEach(boton => boton.style.display = 'none');
  
  await nextTick();

  const canvas = await html2canvas(elementoHorario, { scale: 2, useCORS: true });
  
  botonesEliminar.forEach(boton => boton.style.display = 'block');

  if (formato === 'jpg') {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 0.9);
    link.download = 'mi-horario.jpg';
    link.click();
  } else if (formato === 'pdf') {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('mi-horario.pdf');
  }
};

const showNotification = (message) => {
  if (notificationTimeout) clearTimeout(notificationTimeout);
  notification.value.message = message;
  notification.value.visible = true;
  notificationTimeout = setTimeout(() => {
    notification.value.visible = false;
  }, 3000);
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f0f2f5;
}

#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 0;
  box-sizing: border-box;
}

/* --- ESTILOS PARA EL HEADER --- */
.main-header {
  width: 100%;
  background-color: #ffffff;
  padding: 0 40px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;       /* Expandir al 100% */
  margin: 0;         /* Eliminar centrado */
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left a {
  line-height: 0;
}

.header-logo-image {
  height: 80px;
  margin-right: 15px;
}

.header-title {
  margin: 0;
  font-size: 1.4em;
  font-weight: 500;
  color: #343a40;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdown {
  position: relative;
}

.btn-descargar {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-descargar:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.dropdown-icon {
  width: 20px;
  height: 20px;
  margin-left: 8px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.dropdown.is-open .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px;
}

.dropdown-content button {
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  color: #343a40;
  text-align: left;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  border-radius: 6px;
}

.dropdown-content button:hover {
  background-color: #f1f3f5;
}

.form-section {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.07);
  border: 1px solid #dee2e6;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 110%;      /* Corregido */
  max-width: none;  /* Corregido */
  box-sizing: border-box;
  text-align: left;
  position: relative;
  transition: box-shadow 0.3s ease;
}

.horario-wrapper {
  width: 110%;
  max-width: 1800px; /* Mantener ancho grande */
  margin: 1;     /* Centrar */
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 50px;
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.gif-modal, .about-modal {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6); display: flex;
  justify-content: center; align-items: center; z-index: 1000;
  backdrop-filter: blur(5px);
}

.gif-modal-content, .about-modal-content {
  background: white; padding: 30px; border-radius: 16px; text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2); max-width: 500px; width: 90%;
  border: 1px solid #ddd; animation: fadeInScale 0.3s ease-out;
  display: flex; flex-direction: column; align-items: center;
}

.gif-modal-content h3 {
  margin-top: 0; margin-bottom: 20px; color: #d32f2f; font-size: 1.8em;
  font-weight: 700; display: flex; align-items: center; justify-content: center;
  gap: 10px; width: 100%;
}

.gif-modal-content img {
  max-width: 100%; max-height: 60vh; margin-bottom: 10px; border-radius: 10px;
  border: 1px solid #eee; object-fit: contain;
}

.gif-modal-content button {
  padding: 12px 30px; font-size: 1.1em; font-weight: bold;
  background-color: #d32f2f; color: white; border: none; border-radius: 8px;
  cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: 15px;
}

.gif-modal-content button:hover {
  background-color: #b71c1c; transform: translateY(-2px);
}

.simple-footer {
  width: 100vw;
  background-color: #ffffff;
  border-top: 1px solid #e9ecef;
  padding: 30px 60px; /* padding grande para altura */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50px; /* altura mínima */
  box-sizing: border-box;
}

.footer-links {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer-links a {
  color: #6c757d;
  display: inline-block;
  transition: all 0.2s ease-in-out;
}

.footer-links a:hover {
  color: #007bff;
  transform: translateY(-3px);
}

.footer-links svg {
  fill: currentColor;
}

.footer-text {
  margin: 0;
  color: #6c757d;
  font-size: 0.9em;
}

.toast-notification {
  position: fixed; bottom: 30px; left: 50%;
  transform: translateX(-50%); background-color: #28a745;
  color: white; padding: 12px 24px; border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 2000;
  font-weight: 600; font-size: 0.95em; white-space: nowrap;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.btn-about {
  padding: 10px 15px;
  background-color: #e9ecef;
  color: #495057;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.btn-about:hover {
  background-color: #ced4da;
  color: #212529;
}

.about-modal-content {
  padding: 30px 40px; text-align: left; max-width: 600px;
  line-height: 1.6; align-items: flex-start; position: relative;
}

.about-modal-content h2 {
  margin-top: 0; margin-bottom: 20px; color: #343a40;
  border-bottom: 1px solid #dee2e6; padding-bottom: 10px;
  width: 100%;
}

.about-modal-content p {
  color: #495057; margin-bottom: 15px;
}

.about-modal-content a {
  color: #007bff; text-decoration: none; font-weight: 500;
}

.about-modal-content a:hover {
  text-decoration: underline;
}

.update-info {
  font-size: 0.85em; color: #6c757d; text-align: center;
  margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;
  width: 100%;
}

.close-btn {
  position: absolute; top: 10px; right: 15px; background: transparent;
  border: none; font-size: 24px; font-weight: bold;
  color: #adb5bd; cursor: pointer; transition: color 0.2s ease;
}

.close-btn:hover {
  color: #343a40;
}

@media (max-width: 768px) {
  #app { padding-top: 70px; }
  .main-header { padding: 0 15px; }
  .header-content { height: 70px; }
  .header-logo-image { height: 32px; }
  .header-title { font-size: 1.1em; display: none; }
  .header-actions { margin-left: auto; }
  .btn-descargar, .btn-about { font-size: 0.8rem; padding: 8px 10px; }
  .btn-descargar .dropdown-icon { display:none; }
  .form-section { margin-top: 0; width: 100%; padding: 15px; border-radius: 0; border: none; box-shadow: none; border-bottom: 1px solid #eee; }
  .horario-wrapper { padding: 0; margin-top: 20px; }
  .gif-modal-content, .about-modal-content { padding: 20px; }
  .gif-modal-content h3, .about-modal-content h2 { font-size: 1.5em; }
  .gif-modal-content button { padding: 10px 25px; font-size: 1em; }
}
</style>
