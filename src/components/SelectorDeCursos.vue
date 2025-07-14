<template>
  <div class="selector-cursos-container">
    <div class="form-group">
      <label for="escuela">Escuela</label>
      <select id="escuela" v-model="escuelaSeleccionada">
        <option :value="null" disabled>-- Seleccione una escuela --</option>
        <option v-for="escuela in escuelas" :key="escuela.id" :value="escuela">
          {{ escuela.nombre }}
        </option>
      </select>
    </div>

    <div class="form-group" v-if="escuelaSeleccionada">
      <label for="curso">Curso</label>
      <select id="curso" v-model="cursoSeleccionado">
        <option :value="null" disabled>-- Seleccione un curso --</option>
        <option v-for="curso in escuelaSeleccionada.cursos" :key="curso.sigla" :value="curso">
          {{ curso.sigla }} - {{ curso.nombre }}
        </option>
      </select>
    </div>

    <div class="grupos-container" v-if="cursoSeleccionado">
      <h4>Grupos Disponibles</h4>
      <ul class="lista-grupos">
        <li v-for="grupo in cursoSeleccionado.grupos" :key="grupo.numero">
          <div class="info-grupo">
            <strong class="grupo-numero">Grupo {{ grupo.numero }}</strong>
            <span class="profesor-nombre">{{ grupo.profesor }}</span>
            <div class="horario-grupo">
              <span v-for="(h, index) in grupo.horarios" :key="index" class="horario-item">
                <strong>{{ getDiaAbreviado(h.dia) }}</strong>: {{ h.horaInicio }} - {{ h.horaFin }}
              </span>
            </div>
          </div>
          <button @click="agregarGrupo(grupo)" class="btn-anadir">Añadir</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// El script no ha cambiado
export default {
  name: 'SelectorDeCursos',
  props: {
    escuelas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      escuelaSeleccionada: null,
      cursoSeleccionado: null,
    };
  },
  watch: {
    escuelaSeleccionada() {
      this.cursoSeleccionado = null;
    }
  },
  methods: {
    getDiaAbreviado(diaCompleto) {
      const mapaDias = {
        'Lunes': 'L', 'Martes': 'K', 'Miércoles': 'M',
        'Jueves': 'J', 'Viernes': 'V', 'Sábado': 'S', 'Domingo': 'D'
      };
      return mapaDias[diaCompleto] || diaCompleto.substring(0, 1);
    },
    agregarGrupo(grupo) {
      const grupoCompleto = {
        ...grupo,
        siglaCurso: this.cursoSeleccionado.sigla,
        nombreCurso: this.cursoSeleccionado.nombre,
      };
      this.$emit('grupo-agregado', grupoCompleto);
    }
  }
};
</script>

<style scoped>
/* --- ESTILOS REFINADOS Y PROFESIONALES --- */
:root {
  --primary-color: #007bff;
  --primary-hover: #0056b3;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --surface-color: #ffffff;
  --border-color: #e9ecef;
  --background-color: #f8f9fa;
}

.selector-cursos-container {
  display: flex;
  flex-direction: column;
  gap: 28px; /* Un poco más de espacio vertical */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 1rem;
  padding: 12px 40px 12px 16px;
  background-color: var(--surface-color);
  border: 1px solid #ced4da; /* Borde un poco más visible */
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.grupos-container h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 12px;
}

.lista-grupos {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lista-grupos li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary-color); /* Borde de acento */
  border-radius: 8px;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); /* Transición más suave */
}

.lista-grupos li:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.info-grupo {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.grupo-numero {
  font-weight: 600;
  color: var(--text-primary);
}

.profesor-nombre {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.horario-grupo {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.9rem;
}

.horario-item strong {
  color: var(--primary-color);
}

.btn-anadir {
  padding: 10px 20px;
  background-color: #007bff; /* Color azul asignado directamente */
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-anadir:hover {
  background-color: #0056b3; /* Un azul más oscuro para el hover */
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

/* --- ESTILOS RESPONSIVE --- */
@media (max-width: 768px) {
  .lista-grupos li {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-left: 1px solid var(--border-color); /* Borde normal en móvil */
    border-top: 4px solid var(--primary-color); /* Acento en la parte superior */
  }
  
  .btn-anadir {
    width: 100%;
    text-align: center;
  }
}
</style>