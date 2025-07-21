<template>
  <div class="horario-container">
    <table class="horario-table">
      <thead>
        <tr>
          <th class="time-col-header">Horas</th>
          <th v-for="dia in diasSemana" :key="dia">{{ diaFormatoImagen(dia) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slot in timeSlots" :key="slot.start">
          <td class="time-slot-cell">{{ slot.display }}</td>

          <template v-for="dia in diasSemana" :key="dia">
            <template v-if="!estaCeldaCubierta(slot.start, dia)">
              <td
                v-if="claseQueInicia(slot.start, dia)"
                :rowspan="calcularRowspan(claseQueInicia(slot.start, dia))"
                class="clase-cell"
              >
                <div 
                  class="clase-info" 
                  :style="{ backgroundColor: claseQueInicia(slot.start, dia).color }"
                >
                  <div class="clase-content">
                   <strong>{{ claseQueInicia(slot.start, dia).nombre }} (G{{ claseQueInicia(slot.start, dia).grupo }})</strong>
                    <span>{{ claseQueInicia(slot.start, dia).profesor }}</span>
                  </div>
                  <button
                    @click.stop="$emit('eliminar-clase', claseQueInicia(slot.start, dia).id)"
                    class="delete-btn"
                  >
                    ×
                  </button>
                </div>
              </td>
              <td v-else class="empty-cell"></td>
            </template>
          </template>

        </tr>
      </tbody>
    </table>
    <p v-if="horario.length === 0" class="no-clases-message">
      No hay clases en el horario. ¡Añade algunas!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HorarioTabla',
  props: {
    horario: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      timeSlots: this.generarTimeSlots('07:00', '22:00'),
    };
  },
  methods: {
    diaFormatoImagen(dia) {
      if (window.innerWidth < 768) {
        const abreviacionesCortas = {
          'Lunes': 'L', 'Martes': 'K', 'Miércoles': 'M', 'Jueves': 'J',
          'Viernes': 'V', 'Sábado': 'S', 'Domingo': 'D'
        };
        return abreviacionesCortas[dia];
      }
      
      const abreviaciones = {
        'Lunes': '(L) Lunes', 'Martes': '(K) Martes', 'Miércoles': '(M) Miércoles',
        'Jueves': '(J) Jueves', 'Viernes': '(V) Viernes', 'Sábado': '(S) Sábado', 'Domingo': '(D) Domingo'
      };
      return abreviaciones[dia] || dia;
    },
    
    generarTimeSlots(inicioStr, finStr) {
      const slots = [];
      let startHour = parseInt(inicioStr.split(':')[0]);
      let endHourLoop = parseInt(finStr.split(':')[0]);

      const formatNumberToHHMM = (h, m) => {
          return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      };

      for (let h = startHour; h <= endHourLoop; h++) {
        const currentSlotStart = formatNumberToHHMM(h, 0);
        const currentSlotEnd = formatNumberToHHMM(h, 50); 
        
        slots.push({
          start: currentSlotStart,
          end: currentSlotEnd,
          display: `${currentSlotStart} - ${currentSlotEnd}`
        });
      }
      return slots;
    },

    timeToMinutes(timeStr) {
      if (!timeStr || !timeStr.includes(':')) return 0;
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    },

    claseQueInicia(slotStart, diaTabla) {
      const slotStartMinutes = this.timeToMinutes(slotStart);
      return this.horario.find(clase => {
        const claseInicioMinutes = this.timeToMinutes(clase.horaInicio);
        return clase.dia.toLowerCase() === diaTabla.toLowerCase() &&
               claseInicioMinutes === slotStartMinutes;
      });
    },

    estaCeldaCubierta(slotStart, diaTabla) {
      const slotStartMinutes = this.timeToMinutes(slotStart);
      return this.horario.some(clase => {
        const claseInicioMinutes = this.timeToMinutes(clase.horaInicio);
        const claseFinMinutes = this.timeToMinutes(clase.horaFin);
        return clase.dia.toLowerCase() === diaTabla.toLowerCase() &&
               claseInicioMinutes < slotStartMinutes &&
               claseFinMinutes > slotStartMinutes;
      });
    },

    calcularRowspan(clase) {
        if (!clase) return 1;
        const inicioMinutos = this.timeToMinutes(clase.horaInicio);
        const finMinutos = this.timeToMinutes(clase.horaFin);
        
        let spannedSlots = 0;
        for (const slot of this.timeSlots) {
            const slotStartMinutes = this.timeToMinutes(slot.start);
            if (slotStartMinutes >= inicioMinutos && slotStartMinutes < finMinutos) {
                spannedSlots++;
            }
        }
        return spannedSlots > 0 ? spannedSlots : 1;
    }
  },
};
</script>

<style scoped>
.horario-container {
  overflow-x: auto;
  margin: 0;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

.horario-table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  margin: 0 auto;
  background-color: #fff;
  table-layout: fixed; /* <-- AÑADE ESTA LÍNEA */
}

.horario-table th,
.horario-table td {
  border: 1px solid #eee;
  padding: 0;
  height: 50px;
  box-sizing: border-box;
}

.horario-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 10px 5px;
  white-space: nowrap;
}

.horario-table td.time-slot-cell {
  background-color: #f8f9fa;
  font-weight: 500;
  color: #6c757d;
  text-align: center;
  font-size: 0.85em;
  padding: 5px;
  min-width: 80px;
}

.clase-cell {
  padding: 3px 6px;
  vertical-align: top;
  border-color: #eee;
}

.clase-info {
  height: 100%;
  width: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
}

.clase-info strong {
  display: block;
  white-space: normal;
  font-weight: 600;
  line-height: 1.3;
}

.clase-content {
  font-size: 0.9em;
}

.clase-content span {
  font-size: 0.9em;
  opacity: 0.8;
}

.empty-cell {
  background-color: #fff;
}

.no-clases-message {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
}

.delete-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.25);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 18px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  transition: background-color 0.2s ease;
}

.delete-btn:hover {
  background: rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .horario-table {
    min-width: 0;
    font-size: 0.9em;
  }

  .horario-table th,
  .horario-table td {
    height: 40px;
    font-size: 0.8em;
  }
  
  .horario-table td.time-slot-cell {
    font-size: 0.7em;
    padding: 2px;
  }

  .horario-table th {
    padding: 5px 1px;
    font-size: 0.9em;
  }

  .clase-info {
    padding: 2px;
    line-height: 1.2;
  }

  .clase-content {
    font-size: 0.8em;
  }
  
  .clase-content span {
    display: none;
  }

  .delete-btn {
    width: 16px;
    height: 16px;
    line-height: 14px;
    font-size: 12px;
  }
}
</style>