const escuelas = [
  // ===================== 0001 - ESTUDIOS GENERALES =====================
  {
  id: '0001',
  nombre: 'ESTUDIOS GENERALES',
  cursos: [
    {
      sigla: 'EG0007',
      nombre: 'HISTORIA DEL ARTE',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NORMA VARELA MARÍN',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0124',
      nombre: 'CURSO INTEGRADO DE HUMANIDADES I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '004',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '005',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '006',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '007',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Viernes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '008',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '009',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' },
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '010',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' },
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '011',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0313',
      nombre: 'APRECIACION DE CINE',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MAINOR GONZÁLEZ CALVO (AULA AUDIO #1)',
          horarios: [
            { dia: 'Martes', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0315',
      nombre: 'TALLER DE TEATRO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF WALTER PALACIOS CASTILLO',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0317',
      nombre: 'TALLER LITERARIO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RUTH ESPINOZA CASCANTE',
          horarios: [
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0319',
      nombre: 'TALLER DE ARTES PLASTICAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NORMA VARELA MARÍN',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0325',
      nombre: 'TALLER DE DANZA FOLKLORICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ÁLVARO VANEGAS PÉREZ (AULA AUDIO#1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EG0326',
      nombre: 'TALLER DE DANZA MODERNA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FLOR GAITÁN MONTENEGRO (AULA MULTIUSOS)',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '17:50' },
            { dia: 'Lunes', horaInicio: '18:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'RP0010',
      nombre: 'PROBLEMAS ECOLÓGICOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF INÉS AZOFEIFA ROJAS',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF INÉS AZOFEIFA ROJAS',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'RP0018',
      nombre: 'REPRODUCCIÓN, SEXUALIDAD Y HUMANISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL MÁRQUEZ CUEVAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    }
  ]
},

  // ===== 0003 - Seminarios =====
  {
  id: '0003',
  nombre: 'SEMINARIOS DE REALIDAD NACIONAL',
  cursos: [
    {
      sigla: 'SR0001',
      nombre: 'SEMINARIO DE REALIDAD NACIONAL I DERECHOS HUMANOS Y SEGURIDAD CIUDADANA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CARLOS SANDOVAL NÚÑEZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0003',
      nombre: 'SEM. REAL. NACIONAL 1: PATRIM. CULTURAL',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Sábado', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0004',
      nombre: 'SEMINARIO DE REALIDAD NACIONAL 1: MEDIO AMBIENTE',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF INÉS AZOFEIFA ROJAS',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0010',
      nombre: 'SEMINARIO DE REALIDAD I, SOCIEDAD: VIDA, DIÁLOGO Y PAZ',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FRANCINY OSÉS MARÍN',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0011',
      nombre: 'SEMINARIO DE REALIDAD NACIONAL II DERECHOS HUMANOS Y SEGURIDAD CIUDADANA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CARLOS SANDOVAL NÚÑEZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0033',
      nombre: 'SEM. REAL. NAC. 2: PATRIMONIO CULTURAL',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0044',
      nombre: 'SEM. REAL. NACIONAL 2: MEDIO AMBIENTE',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF INÉS AZOFEIFA ROJAS',
          horarios: [
            { dia: 'Miércoles', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SR0110',
      nombre: 'SEMINARIO DE REALIDAD NACIONAL II, SOCIEDAD: VIDA, DIÁLOGO Y PAZ',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FRANCINY OSÉS MARÍN',
          horarios: [
            { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    }
  ]
},


  // ======================= FILOLOGIA, LINGÜISTICA Y LITERATURA =======================
  {
  id: '1201',
  nombre: 'FILOLOGIA, LINGÜISTICA Y LITERATURA',
  cursos: [
    {
      sigla: 'FL2075',
      nombre: 'TÉCNICAS DE EXPRESIÓN ESCRITA Y ORAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF WALTER PALACIOS CASTILLO',
          horarios: [
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FL3119',
      nombre: 'CURSO BÁSICO DE REDACCIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DAYANA RODRÍGUEZ RODRÍGUEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FL3168',
      nombre: 'INTRODUCCIÓN A LA LINGÜÍSTICA I (EN INGLÉS)',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ADRIANA ACOSTA BALLESTERO',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'RP1202',
      nombre: 'EXPRESIÓN ORAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NELDYS RAMÍREZ VÁSQUEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '15:00', horaFin: '17:50' }
          ]
        }
      ]
    },

    {
      sigla: 'RP1203',
      nombre: 'CURSO BÁSICO DE REDACCIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DAYANA RODRÍGUEZ RODRÍGUEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    }
  ]
},


  // ============================ FILOSOFIA ============================
  {
  id: '1202',
  nombre: 'FILOSOFIA',
  cursos: [
    {
      sigla: 'RP1209',
      nombre: 'INTRODUCCIÓN A LA EPISTEMOLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VÍCTOR ALVARADO DÁVILA',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    }
  ]
},


  // =========================== LENGUAS MODERNAS ===========================
  {
  id: '1203',
  nombre: 'LENGUAS MODERNAS',
  cursos: [

    {
      sigla: 'LM0348',
      nombre: 'INGLÉS PARA ADMINISTRACIÓN Y COMERCIO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF SANDRA ARGUETA DÍAZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF SANDRA ARGUETA DÍAZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0352',
      nombre: 'GRAMÁTICA INGLESA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NELSON BUSTOS MENDOZA',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0354',
      nombre: 'GRAMÁTICA INGLESA III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CLAUDIA MARÍN MONTERO',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0356',
      nombre: 'GRAMÁTICA INGLESA V',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUCRECIA BORGE GONZÁLEZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0358',
      nombre: 'TRADUCCIÓN I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ADRIANA ACOSTA (AULA LAB INF #2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0360',
      nombre: 'TRADUCCIÓN III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GRETEL TORRES GRANADOS (AULA LAB INF #2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0362',
      nombre: 'TRADUCCIÓN V',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CLAUDIA MARÍN MONTERO',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0601',
      nombre: 'INGLÉS PARA ADMINISTRACIÓN DE NEGOCIOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF SONIA AGUILAR',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM0603',
      nombre: 'INGLÉS PARA ADMINISTRACIÓN DE NEGOCIOS III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LARIZA MAYORGA VARGAS',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1001',
      nombre: 'INGLÉS INTEGRADO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RUIZ Y MAYORGA',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF BUSTOS Y CARBALLO',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        { numero: '003', profesor: 'CONSULTAR ESCUELA', horarios: [] },
        {
          numero: '051',
          profesor: 'PROF RUIZ Y MAYORGA',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'PROF BUSTOS Y CARBALLO',
          horarios: [
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        { numero: '053', profesor: 'CONSULTAR ESCUELA', horarios: [] }
      ]
    },

        {
      sigla: 'LM1002',
      nombre: 'INGLÉS INTEGRADO II',
      grupos: [
        { numero: '001', profesor: 'CONSULTAR ESCUELA', horarios: [] },
        { numero: '002', profesor: 'CONSULTAR ESCUELA', horarios: [] }, // CERRADO
        { numero: '051', profesor: 'CONSULTAR ESCUELA', horarios: [] },
        { numero: '052', profesor: 'CONSULTAR ESCUELA', horarios: [] }
      ]
    },

    {
      sigla: 'LM1030',
      nombre: 'ESTRATEGIAS DE LECTURA EN INGLÉS I (PARA OTRAS CARRERAS)',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF REBECA RUÍZ (AULA LANAMME#1)',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1031',
      nombre: 'INGLÉS INTENSIVO I (ORAL)',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VALERIA CRUZ JIMÉNEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '16:00', horaFin: '18:50' },
            { dia: 'Jueves', horaInicio: '16:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1032',
      nombre: 'ESTRATEGIAS DE LECTURA EN INGLÉS II (PARA OTRAS CARRERAS)',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARIA F. MORA BELLO',
          horarios: [
            { dia: 'Miércoles', horaInicio: '16:00', horaFin: '18:50' },
            { dia: 'Jueves', horaInicio: '16:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1220',
      nombre: 'INTRODUCCIÓN A LA NARRATIVA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALFONSO GUTIÉRREZ SIBAJA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1221',
      nombre: 'CURSO PANORÁMICO DE LITERATURA NORTEAMERICANA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALONSO GUTIÉRREZ SIBAJA',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1222',
      nombre: 'INTRODUCCIÓN AL DRAMA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALFONSO GUTIÉRREZ SIBAJA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1230',
      nombre: 'COMUNICACIÓN ORAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ELIAS BENAVIDES MADRIGAL',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1235',
      nombre: 'COMPOSICIÓN INGLESA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VALERIA CRUZ JIMÉNEZ (AULA AUDIO VISUALES #2)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1246',
      nombre: 'COMPRENSIÓN DE LECTURA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOAN BOES NADERER',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1351',
      nombre: 'TÉCNICAS DE COMUNICACIÓN Y PRONUNCIACIÓN I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ELÍAS BENAVIDES MADRIGAL',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1352',
      nombre: 'RETÓRICA INGLESA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOAN BOES NADERER',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1471',
      nombre: 'TÉCNICAS DE COMUNICACIÓN Y PRONUNCIACIÓN III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NELSON BUSTOS MENDOZA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'LM1472',
      nombre: 'RETÓRICA INGLESA III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALONSO GUTIÉRREZ SIBAJA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    }

  ]
},


  // =========================== BIOLOGIA ===========================
  {
  id: '2101',
  nombre: 'BIOLOGIA',
  cursos: [
    {
      sigla: 'B0106',
      nombre: 'BIOLOGÍA GENERAL',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'B0107',
      nombre: 'LABORATORIO DE BIOLOGÍA GENERAL',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA (AULA LAB BIOLOGÍA)',
          horarios: [
            { dia: 'Martes', horaInicio: '07:00', horaFin: '09:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF RICARDO MURILLO (AULA LAB BIOLOGÍA)',
          horarios: [
            { dia: 'Jueves', horaInicio: '07:00', horaFin: '09:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'CONSULTAR ESCUELA (AULA LAB BIOLOGÍA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '07:00', horaFin: '09:50' }
          ]
        },
        {
          numero: '004',
          profesor: 'CONSULTAR ESCUELA (AULA LAB BIOLOGÍA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    }
  ]
},


  // ========================== FISICA ==========================
  {
  id: '2102',
  nombre: 'FISICA',
  cursos: [
    {
      sigla: 'FS0103',
      nombre: 'FÍSICA PARA CIENCIAS DE LA VIDA I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FS0210',
      nombre: 'FÍSICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '07:00', horaFin: '08:50' },
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FS0211',
      nombre: 'LABORATORIO DE FÍSICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA (AULA LAB FÍSICA)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA (AULA LAB FÍSICA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FS0310',
      nombre: 'FÍSICA GENERAL II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FABIÁN CHAVERRI',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FS0311',
      nombre: 'LABORATORIO DE FÍSICA GENERAL II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA (AULA LAB FÍSICA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FS0410',
      nombre: 'FÍSICA GENERAL III',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '09:50' },
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'FS0411',
      nombre: 'LABORATORIO DE FÍSICA GENERAL III',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA (AULA LAB FÍSICA)',
          horarios: [
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    }
  ]
},


  // ========== MATEMATICAS ==========
  {
  id: '2104',
  nombre: 'MATEMATICAS',
  cursos: [

    {
      sigla: 'MA0001',
      nombre: 'PRECÁLCULO',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '14:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '08:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        },
        {
          numero: '004',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Jueves', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA0322',
      nombre: 'ÁLGEBRA LINEAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL WALKER',
          horarios: [
            { dia: 'Martes', horaInicio: '07:00', horaFin: '08:50' },
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1001',
      nombre: 'CÁLCULO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GAUDY JIMÉNEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '15:00', horaFin: '17:50' },
            { dia: 'Viernes', horaInicio: '15:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1002',
      nombre: 'CÁLCULO II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Jueves', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1003',
      nombre: 'CÁLCULO III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GREIVIN HERNÁNDEZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Jueves', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1004',
      nombre: 'ÁLGEBRA LINEAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL WALKER',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF MIGUEL WALKER',
          horarios: [
            { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1005',
      nombre: 'ECUACIONES DIFERENCIALES',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1021',
      nombre: 'CÁLCULO PARA CIENCIAS ECONÓMICAS I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1022',
      nombre: 'CÁLCULO PARA CIENCIAS ECONÓMICAS II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1101',
      nombre: 'CÁLCULO I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Jueves', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA1210',
      nombre: 'CÁLCULO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GAUDY JIMÉNEZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Jueves', horaInicio: '07:00', horaFin: '08:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF GAUDY JIMÉNEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '07:00', horaFin: '09:50' },
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    },

    {
      sigla: 'MA2210',
      nombre: 'ECUACIONES DIFERENCIALES APLICADAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS AMAYA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '15:00', horaFin: '16:50' },
            { dia: 'Viernes', horaInicio: '15:00', horaFin: '17:50' }
          ]
        }
      ]
    }

  ]
},


  // ========== QUIMICA ==========
  {
  id: '2105',
  nombre: 'QUIMICA',
  cursos: [
    {
      sigla: 'QU0100',
      nombre: 'QUÍMICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ILEANA ORDÓÑEZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '09:50' },
            { dia: 'Viernes', horaInicio: '08:00', horaFin: '09:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF OMAR ROJAS',
          horarios: [
            { dia: 'Martes', horaInicio: '07:00', horaFin: '08:50' },
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '08:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'PROF OMAR ROJAS',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0101',
      nombre: 'LABORATORIO DE QUÍMICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF OMAR ROJAS (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '15:00', horaFin: '17:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'PROF ILEANA ORDÓÑEZ (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '004',
          profesor: 'CONSULTAR ESCUELA (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Viernes', horaInicio: '15:00', horaFin: '17:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0114',
      nombre: 'QUÍMICA GENERAL INTENSIVA',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0115',
      nombre: 'LABORATORIO DE QUÍMICA GENERAL INTENSIVA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ILEANA ORDÓÑEZ (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Lunes', horaInicio: '15:00', horaFin: '17:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'PROF CARLOS CERVANTES (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0200',
      nombre: 'QUÍMICA ANALÍTICA CUANTITATIVA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CARLOS CERVANTES',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0201',
      nombre: 'LABORATORIO DE QUÍMICA ANALÍTICA CUANTITATIVA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CARLOS CEREVANTES (AULA LAB QUÍMICA)',
          horarios: [
            { dia: 'Lunes', horaInicio: '15:00', horaFin: '16:50' },
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0212',
      nombre: 'QUÍMICA ORGÁNICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARIELA ARAYA BARAHONA',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0213',
      nombre: 'LABORATORIO DE QUÍMICA ORGÁNICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARIELA ARAYA BARAHONA (AULA LABORATORIO)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0304',
      nombre: 'QUÍMICA DE ALIMENTOS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VENEGAS, CHAVARRÍA Y MARÍN',
          horarios: [
            { dia: 'Martes', horaInicio: '14:00', horaFin: '16:50' },
            { dia: 'Jueves', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'QU0313',
      nombre: 'LABORATORIO DE QUÍMICA DE ALIMENTOS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VENEGAS, CHAVARRÍA Y MARÍN (AULA LAB ALIM)',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    }
  ]
},


  // ===================== DERECHO =====================
  {
  id: '3101',
  nombre: 'DERECHO',
  cursos: [

    { sigla: 'DE1001', nombre: 'INTRODUCCIÓN AL ESTUDIO DEL DERECHO I',
      grupos: [{ numero: '001', profesor: 'PROF MARILÚ RODRÍGUEZ ARAYA',
        horarios: [{ dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE1002', nombre: 'HISTORIA DEL DERECHO I',
      grupos: [{ numero: '001', profesor: 'PROF MARIANELA AGUIRRE R. (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE1117', nombre: 'MÉTODOS DE INVESTIGACIÓN I',
      grupos: [{ numero: '001', profesor: 'PROF JOSE CISNEROS MOJICA',
        horarios: [{ dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE1118', nombre: 'RAZONAMIENTO JURÍDICO I',
      grupos: [{ numero: '001', profesor: 'PROF DANIEL BALTODANO MAYORGA',
        horarios: [{ dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE1122', nombre: 'DERECHO AMBIENTAL I',
      grupos: [{ numero: '001', profesor: 'PROF MAURICIO FENNELL LÓPEZ',
        horarios: [{ dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE1124', nombre: 'DERECHO FINANCIERO Y TRIBUTARIO',
      grupos: [{ numero: '001', profesor: 'PROF YEHUDIN SÁNCHO ELIZONDO',
        horarios: [{ dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE1125', nombre: 'RESOLUCIÓN ALTERNATIVA DE CONFLICTOS',
      grupos: [{ numero: '001', profesor: 'PROF KARLA MONTENEGRO MEZA',
        horarios: [{ dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE1127', nombre: 'DERECHO DE LA RESPONSABILIDAD',
      grupos: [{ numero: '001', profesor: 'PROF IVETH OROZCO GARCÍA (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Viernes', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE1133', nombre: 'FORMACIÓN DE JUECES',
      grupos: [{ numero: '001', profesor: 'PROF WILSON FLORES FALLAS (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE1141', nombre: 'CONSULTORIOS JURÍDICOS',
      grupos: [
        { numero: '001', profesor: 'PROF ANA ALVARADO SALAZAR',
          horarios: [{ dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }]
        },
        { numero: '002', profesor: 'PROF IVETH OROZCO GARCÍA',
          horarios: [{ dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }]
        }
      ]
    },

    { sigla: 'DE2001', nombre: 'PRINCIPIOS DEL DERECHO PRIVADO I',
      grupos: [{ numero: '001', profesor: 'PROF RUTH ALPÍZAR RODRÍGUEZ',
        horarios: [{ dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE2002', nombre: 'TEORÍA DEL ESTADO I',
      grupos: [{ numero: '001', profesor: 'PROF MARILÚ RODRÍGUEZ ARAYA',
        horarios: [{ dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE2003', nombre: 'DERECHO PENAL I',
      grupos: [{ numero: '001', profesor: 'PROF GERARDO ALFARO VARGAS',
        horarios: [{ dia: 'Sábado', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE2005', nombre: 'FILOSOFÍA DEL DERECHO I',
      grupos: [{ numero: '001', profesor: 'PROF KAREN CORTÉS VÍQUEZ',
        horarios: [{ dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE2006', nombre: 'DERECHO CONSTITUCIONAL I',
      grupos: [{ numero: '001', profesor: 'PROF CARLOS SANDOVAL NÚÑEZ',
        horarios: [{ dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE2008', nombre: 'DERECHO ROMANO II',
      grupos: [{ numero: '001', profesor: 'PROF ANDREA GUTIÉRREZ BALTODANO',
        horarios: [{ dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE2011', nombre: 'TEORÍA GENERAL DEL PROCESO',
      grupos: [{ numero: '001', profesor: 'PROF CÉLIMO FUENTES VARGAS',
        horarios: [{ dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE3001', nombre: 'DERECHO PENAL III',
      grupos: [{ numero: '001', profesor: 'PROF JOSE CISNEROS MOJICA',
        horarios: [{ dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE3002', nombre: 'DERECHO DE FAMILIA',
      grupos: [{ numero: '001', profesor: 'PROF MARCELA GONZÁLEZ SOLERA',
        horarios: [{ dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE3003', nombre: 'OBLIGACIONES I',
      grupos: [{ numero: '001', profesor: 'PROF IVETH OROZCO GARCÍA',
        horarios: [{ dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE3006', nombre: 'DERECHOS REALES I',
      grupos: [{ numero: '001', profesor: 'PROF RUTH ALPÍZAR RODRÍGUEZ (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE3010', nombre: 'DERECHO PROCESAL CIVIL II',
      grupos: [{ numero: '001', profesor: 'PROF CÉLIMO FUENTES VARGAS',
        horarios: [{ dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE3012', nombre: 'DERECHO CONSTITUCIONAL III',
      grupos: [{ numero: '001', profesor: 'PROF ANA CORTÉS VÍQUEZ (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE4001', nombre: 'DERECHO PROCESAL PENAL I',
      grupos: [{ numero: '001', profesor: 'PROF RODRIGO CAMPOS ESQUIVEL',
        horarios: [{ dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE4003', nombre: 'DERECHO COMERCIAL I',
      grupos: [{ numero: '001', profesor: 'PROF NATALY RODRÍGUEZ PORRAS',
        horarios: [{ dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE4004', nombre: 'DERECHO DE LA CONTRATACIÓN PRIVADA I',
      grupos: [{ numero: '001', profesor: 'PROF ANA ALVARADO SALAZAR (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE4005', nombre: 'PRINCIPIOS DE DERECHO INTERNACIONAL PÚBLICO I',
      grupos: [{ numero: '001', profesor: 'CONSULTAR ESCUELA', horarios: [] }]
    },

    { sigla: 'DE4011', nombre: 'DERECHO LABORAL I',
      grupos: [{ numero: '001', profesor: 'PROF RODRIGO CAMPOS ESQUIVEL',
        horarios: [{ dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE4012', nombre: 'EJERCICIOS JURÍDICOS I',
      grupos: [{ numero: '001', profesor: 'PROF NATALY RODRÍGUEZ P. (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE5002', nombre: 'DERECHO COMERCIAL III',
      grupos: [{ numero: '001', profesor: 'PROF MARIANELLA AGUIRRE R. (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE5005', nombre: 'JUICIOS UNIVERSALES I',
      grupos: [{ numero: '001', profesor: 'PROF MARIANELLA AGUIRRE R. (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }]
      }]
    },

    { sigla: 'DE5009', nombre: 'DERECHO LABORAL III',
      grupos: [{ numero: '001', profesor: 'PROF CARLOS SANDOVAL NÚÑEZ (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE5011', nombre: 'DERECHO INTERNACIONAL PRIVADO',
      grupos: [{ numero: '001', profesor: 'PROF AURA CEDEÑO YANES (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }]
      }]
    },

    { sigla: 'DE6000', nombre: 'DERECHO ADMINISTRATIVO I',
      grupos: [{ numero: '001', profesor: 'PROF SHARON MOLINA HERNÁNDEZ',
        horarios: [{ dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    },

    { sigla: 'DE6002', nombre: 'DERECHO ADMINISTRATIVO III',
      grupos: [{ numero: '001', profesor: 'PROF ANDREA GUTIÉRREZ B. (AULA SALA DE JUICIOS)',
        horarios: [{ dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }]
      }]
    }

  ]
},


  // ============================ EDUCACION FISICA Y DEPORTES ============================
  {
  id: '3205',
  nombre: 'EDUCACION FISICA Y DEPORTES',
  cursos: [

    {
      sigla: 'EF6131',
      nombre: 'TENIS PRINCIPIANTES MIXTO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF6181',
      nombre: 'ACTIVIDAD DEPORTIVA: KARATE DO PRINCIPIANTE MIXTO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF6201',
      nombre: 'ACTIVIDAD DEPORTIVA: VOLIBOL PRINCIPIANTE MIXTO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF6221',
      nombre: 'ACTIVIDAD DEPORTIVA: BALONCESTO PRINCIPIANTES MIXTO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VINICIO RUIZ (AULA INST DEPORTIVA)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF6281',
      nombre: 'ACTIVIDAD DEPORTIVA: FÚTBOL PRINCIPIANTE MIXTO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF7301',
      nombre: 'ACTIVIDAD DEPORTIVA: NATACIÓN PRINCIPIANTE HOMBRES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF8301',
      nombre: 'ACTIVIDAD DEPORTIVA: NATACIÓN PRINCIPIANTE MUJERES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL FUENTES FALLAS (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '09:50' }
          ]
        }
      ]
    },

    {
      sigla: 'EF8381',
      nombre: 'ACTIVIDAD DEPORTIVA: FÚTBOL SALÓN PRINCIPIANTES MUJERES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VINICIO RUÍZ ORTEGA (AULA INSTALAC DEPORT)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    }

  ]
},


  // ===================== ADMINISTRACION DE NEGOCIOS =====================
  {
  id: '3301',
  nombre: 'ADMINISTRACION DE NEGOCIOS',
  cursos: [
    {
      sigla: 'DN0101',
      nombre: 'INTRODUCCIÓN A LA ADMINISTRACIÓN DE NEGOCIOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS BERMÚDEZ CARRILLO',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF LUIS BERMÚDEZ CARRILLO',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0103',
      nombre: 'ADMINISTRACIÓN DE PROYECTOS Y HERRAMIENTAS PARA EL ANÁLISIS DE DATOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CARLOS VEGA ALVARADO',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF BEYKER OBANDO ZAMBRANO',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0105',
      nombre: 'MÉTODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JESÚS CONTRERAS VILLEGAS',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0107',
      nombre: 'ECONOMÍA Y COMERCIO INTERNACIONAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ADRIÁN ELIZONDO UGALDE',
          horarios: [
            { dia: 'Viernes', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0113',
      nombre: 'ADMINISTRACIÓN MEDIADA POR TECNOLOGÍAS DE LA INFORMACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOEL JIMÉNEZ MAYORGA',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0118',
      nombre: 'MENTORING AND COACHING',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOSE MATARRITA SALAS',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0124',
      nombre: 'COSTEO GERENCIAL PARA ADMINISTRADORES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ROBERTO RODÍGUEZ CARRERA',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0202',
      nombre: 'PRINCIPIOS DE GERENCIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GUSTAVO ELIAS NEIRA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0304',
      nombre: 'LIDERAZGO GERENCIAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GUSTAVO ELÍAS NEIRA',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0320',
      nombre: 'PRINCIPIOS DE MERCADEO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL MONCADA ARAYA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0341',
      nombre: 'ADMINISTRACIÓN FINANCIERA II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0405',
      nombre: 'EMPRENDIMIENTO Y CREACIÓN DE EMPRESAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FERNANDO GUTIÉRREZ COTO',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0423',
      nombre: 'INVESTIGACIÓN DE MERCADOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF REBECA ÁLVAREZ NÚÑEZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0424',
      nombre: 'GERENCIA DE MERCADEO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL MONCADA ARAYA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0442',
      nombre: 'ADMINISTRACIÓN FINACIERA III',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0496',
      nombre: 'GERENCIA DE OPERACIONES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS DELGADO LOBO (AULA AUDIO #1)',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0507',
      nombre: 'ESTRATEGIAS Y TÁCTICAS DE NEGOCIACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF TAIRY ANGULO RUÍZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'DN0548',
      nombre: 'MERCADOS FINANCIEROS INTERNACIONALES',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PC0202',
      nombre: 'CONTABILIDAD INTERMEDIA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOSÉ RODRÍGUEZ CARRERA',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PC0240',
      nombre: 'MATEMÁTICA FINANCIERA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS BERMÚDEZ CARRILLO',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PC0261',
      nombre: 'LEGISLACIÓN COMERCIAL, BANCARIA Y FINANCIERA',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PC0344',
      nombre: 'FORMULACIÓN Y EVALUACIÓN DE PROYECTOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PC0462',
      nombre: 'LEGISLACIÓN TRIBUTARIA Y ADUANERA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ADRIANA RIVAS LOÁICIGA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XN2103',
      nombre: 'PRINCIPIOS DE ADMINISTRACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS ALEXANDER GARCÍA',
          horarios: [
            { dia: 'Lunes', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    }
  ]
},


  // ======================== ADMINISTRACION PUBLICA ========================
  {
  id: '3302',
  nombre: 'ADMINISTRACION PUBLICA',
  cursos: [

    {
      sigla: 'XP0240',
      nombre: 'INTRODUCCIÓN AL ESTADO, SOCIEDAD, COMERCIO Y ADUANAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF OLIVIER TRAÑA DUARTE',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF ANDREY CORRALES QUESADA',
          horarios: [
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0244',
      nombre: 'MERCEOLOGÍA Y CLASIFICACIÓN II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ANABEL ALVARADO GONZÁLEZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '12:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0245',
      nombre: 'CONTABILIDAD PARA COMERCIO INTERNACIONAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GUISSELLE ALVARADO MARTÍNEZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0246',
      nombre: 'TEORÍA DE LAS ORGANIZACIONES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF IRENE ÁLVAREZ MONTERO',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0247',
      nombre: 'COMERCIO MULTILATERAL Y REGIONAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF OLIVIER TRAÑA DUARTE',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0252',
      nombre: 'MERCEOLOGÍA Y CLASIFICACIÓN IV',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALVARADO Y CORRALES',
          horarios: [
            { dia: 'Miércoles', horaInicio: '15:00', horaFin: '16:50' },
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0253',
      nombre: 'ARANCEL Y BARRERAS NO ARANCELARIAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JORDAN ROJAS VÍCTOR',
          horarios: [
            { dia: 'Jueves', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0256',
      nombre: 'MODELOS DE NEGOCIOS DE LA ECONOMÍA DIGITAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JAIME CALDERÓN GUTIÉRREZ (AULA LAB INF#2)',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0257',
      nombre: 'INTRODUCCIÓN A LA LOGÍSTICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF KATTIA QUESADA ARAYA',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0259',
      nombre: 'CONTROL Y FISCALIZACIÓN ADUANERA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF IRENE BRENES BONILLA',
          horarios: [
            { dia: 'Lunes', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0260',
      nombre: 'TALLER PRÁCTICO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARTÍN PICADO BRENES',
          horarios: [
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0301',
      nombre: 'ASPECTOS LEGALES DEL PROCEDIMIENTO ADMINISTRATIVO ADUANERO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF SHARON MOLNA HERNÁNDEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0502',
      nombre: 'REGÍMENES ADUANEROS Y SUS PROCEDIMIENTOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JORDAN ROJAS VÍCTOR',
          horarios: [
            { dia: 'Martes', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XP0503',
      nombre: 'VALORACIÓN ADUANERA DE MERCANCÍAS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF IRENE BRENES BONILLA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    }

  ]
},


  // ===================== ECONOMIA =====================
  {
  id: '3303',
  nombre: 'ECONOMIA',
  cursos: [
    {
      sigla: 'XE0156',
      nombre: 'INTRODUCCIÓN A LA ECONOMÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ESTEBAN ARAYA SALAZAR',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '12:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF ADRIAN ELIZONDO UGALDE',
          horarios: [
            { dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    }
  ]
},


  // ===================== ESTADISTICA =====================
  {
  id: '3304',
  nombre: 'ESTADISTICA',
  cursos: [

    {
      sigla: 'XS0215',
      nombre: 'ESTADÍSTICA PARA BIOCIENCIAS',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'XS0276',
      nombre: 'ESTADÍSTICA GENERAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF IGNACIOSAÉN AGUILAR',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '13:50' }
          ]
        }
      ]
    }

  ]
},


  // ===================== PSICOLOGIA =====================
  {
  id: '3402',
  nombre: 'PSICOLOGIA',
  cursos: [

    {
      sigla: 'PS0044',
      nombre: 'INVESTIGACIÓN IV: TRATAMIENTO DE DATOS CUALITATIVOS',
      grupos: [
        {
          numero: '001',
          profesor: 'ANDRÉS CHAVES RAMÍREZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0046',
      nombre: 'INVESTIGACIÓN VI: ANÁLISIS MULTIVARIADO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JORGE PRADO CALDERÓN',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0048',
      nombre: 'INVESTIGACIÓN VIII: ANTEPROYECTO DE TESIS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARLENY CAMPOS CARRILLO',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0056',
      nombre: 'PSICOLOGÍA DEL DESARROLLO HUMANO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LISBETH LARA AMPIÉ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0058',
      nombre: 'PSICOLOGÍA DEL DESARROLLO HUMANO III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ENID JAÉN HERNÁNDEZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0132',
      nombre: 'HISTORIA DE LA PSICOLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL MARQUÉZ CUEVA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0140',
      nombre: 'PSICOLOGÍA DE LOS PROCESOS GRUPALES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ZEIDY MATA MEJÍA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0150',
      nombre: 'TEORÍA PSICOSOCIAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF TARYN TORRES CAMPOS',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS0158',
      nombre: 'NORMALIDAD, PATOLOGÍA Y DIAGNÓSTICO II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NAYURIBE ARAYA CERDAS',
          horarios: []
        }
      ]
    },

    {
      sigla: 'PS1004',
      nombre: 'BASES BIOLÓGICAS DE LA CONDUCTA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JONATAN PÉREZ ROCHA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1013',
      nombre: 'MÓDULO PSICOLOGÍA EDUCATIVA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF PAMELA ONDOY DÍAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1015',
      nombre: 'MÓDULO PSICOLOGÍA DE LOS PROCESOS LABORALES I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF BARBOZA Y ROMERO',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1026',
      nombre: 'MÓDULO PSICOLOGÍA DE LA ORGANIZACIÓN COMUNITARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF TORRES E HIDALGO',
          horarios: [
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1030',
      nombre: 'MÓDULO PSICOLOGÍA DE LA FAMILIA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MAGALY GARCÍA GÓMEZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '16:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1038',
      nombre: 'MÓDULO INTERVENCIÓN PSICOLÓGICA EN SITUACIONES DE CRISIS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF TARYN TORRES CAMPOS',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1051',
      nombre: 'MÓDULO DE NEUROPSICOLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ELENA PEÑA',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1057',
      nombre: 'CLÍNICA DE LOS TRASTORNOS DE LA ALIMENTACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JEAN CARLO CANALES MEJICANO',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1072',
      nombre: 'TEORÍAS Y SISTEMAS DE PSICOLOGÍA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF PÉREZ Y SÁENZ (AULA SALA DE JUICIOS)',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1074',
      nombre: 'CLÍNICA HUMANÍSTICA Y SISTÉMICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF SINDY CALVO JIMÉNEZ (AULA AUDIO#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1076',
      nombre: 'CLÍNICA COGNITIVO CONDUCTUAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ANNY MORALES BONILLA',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS1079',
      nombre: 'INVESTIGACIÓN II: MÉTODOS Y DISEÑOS DE INVESTIGACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS CASTELLÓN ZELAYA',
          horarios: [
            { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PS2028',
      nombre: 'MÓDULO PSICOLOGÍA DE LA SALUD I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALVARADO Y LARA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    }

  ]
},

 // ===================== CIENCIAS POLITICAS =====================
 {
  id: '3403',
  nombre: 'CIENCIAS POLITICAS',
  cursos: [
    {
      sigla: 'CP0403',
      nombre: 'POLÍTICA ECONÓMICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RODRIGO AGUILAR LOBO',
          horarios: [
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== HISTORIA =====================
 {
  id: '3407',
  nombre: 'HISTORIA',
  cursos: [
    {
      sigla: 'HA1001',
      nombre: 'HISTORIA DE LAS INSTITUCIONES DE COSTA RICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GINA RIVERA HERNÁNDEZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'HA4018',
      nombre: 'HISTORIA CONTEMPORÁNEA DE COSTA RICA II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GINA RIVERA ERNÁNDEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== GEOGRAFIA =====================
 {
  id: '3408',
  nombre: 'GEOGRAFIA',
  cursos: [
    {
      sigla: 'GF2510',
      nombre: 'GEOGRAFÍA REGIONAL DE COSTA RICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. MINOR MOYA',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== ANTOPOLOGIA =====================
 {
  id: '3409',
  nombre: 'ANTROPOLOGIA',
  cursos: [
    {
      sigla: 'AT1109',
      nombre: 'INTRODUCCIÓN A LA ANTROPOLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. CAROLINA ARIAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== SOCIOLOGIA =====================
 {
  id: '3410',
  nombre: 'SOCIOLOGIA',
  cursos: [
    {
      sigla: 'SO1133',
      nombre: 'SOCIOLOGÍA BÁSICA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CARLOS BLANCO OBANDO',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SO2439',
      nombre: 'INTRODUCCIÓN A LA SOCIOLOGÍA PARA PSICOLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ZULAY MARTÍNEZ M. (AULA SALA DE JUICIOS)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== CIVIL =====================
 {
  id: '4201',
  nombre: 'INGENIERIA CIVIL',
  cursos: [

    {
      sigla: 'IC0101',
      nombre: 'TALLER DE INTRODUCCIÓN A LA INGENIERÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF OCTAVIO ZÚÑIGA CUBILLO (AULA LANAMME#1)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IC0302',
      nombre: 'DISEÑO GRÁFICO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF REYES Y ZÚÑIGA (AULA LANAMME#1)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '14:50' },
            { dia: 'Jueves', horaInicio: '10:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. REYES Y ZÚÑIGA (AULA LANAMME #1)',
          horarios: [
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IC0401',
      nombre: 'ESTÁTICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VÍCTOR REYES CARVAJAL (AULA LANAMME#2)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IC0403',
      nombre: 'COMUNICACIÓN TÉCNICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ZÚÑIGA Y RODRÍGUEZ (AULA LANAMME#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. ZÚÑIGA Y RODRÍGUEZ (AULA LANAMME #2)',
          horarios: [
            { dia: 'Jueves', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IC0410',
      nombre: 'SEMINARIO DE ÉTICA, INGENIERÍA Y SOCIEDAD',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ZÚÑIGA Y OSES (AULA LANAMME#1)',
          horarios: [
            { dia: 'Lunes', horaInicio: '16:00', horaFin: '18:50' }
          ]
        }
      ]
    }

  ]
},


 // ===================== ELECTRICA =====================
{
  id: '4202',
  nombre: 'INGENIERIA ELECTRICA',
  cursos: [
    {
      sigla: 'IE0209',
      nombre: 'CIRCUITOS LINEALES I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALEJANDRO DELGADO',
          horarios: [
            { dia: 'Martes', horaInicio: '14:00', horaFin: '15:50' },
            { dia: 'Viernes', horaInicio: '14:00', horaFin: '15:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== MECANICA =====================
{
  id: '4204',
  nombre: 'INGENIERIA MECANICA',
  cursos: [
    {
      sigla: 'IM0101',
      nombre: 'GRÁFICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF OSCAR VANEGAS GUZMÁN (AULA LAB INF#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '18:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. OSCAR VANEGAS (AULA LAB DE INFORMÁTICA #2)',
          horarios: [
            { dia: 'Jueves', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    }
  ]
},

 // ===================== COMPUTACION =====================
 {
  id: '4207',
  nombre: 'CIENCIAS DE LA COMPUTACION E INFORMATICA',
  cursos: [
    {
      sigla: 'CI0202',
      nombre: 'PRINCIPIOS DE INFORMÁTICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALEJANDRO DELGADO (AULA LANAMME#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '14:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '14:00', horaFin: '15:50' }
          ]
        }
      ]
    }
  ]
},

// ===================== TOPOGRAFIA =====================
{
  id: '4209',
  nombre: 'INGENIERIA TOPOGRAFICA',
  cursos: [
    {
      sigla: 'IT0001',
      nombre: 'FUNDAMENTOS DE INGENIERÍA TOPOGRÁFICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ADRIANA IBARRA VARGAS (AULA LANAMME#1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    }
  ]
},

// ===================== MEDICINA =====================
{
  id: '5102',
  nombre: 'MEDICINA',
  cursos: [
    {
      sigla: 'MQ0329',
      nombre: 'BIOQUÍMICA PARA TECNOLOGÍA DE ALIMENTOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RICARDO ROLDÁN',
          horarios: [
            { dia: 'Martes', horaInicio: '15:00', horaFin: '16:50' },
            { dia: 'Jueves', horaInicio: '15:00', horaFin: '16:50' }
          ]
        }
      ]
    }
  ]
},

// ===================== TECNOLOGIA EN SALUD =====================
{
  id: '5104',
  nombre: 'TECNOLOGIAS EN SALUD',
  cursos: [

    {
      sigla: 'SL0139',
      nombre: 'INTRODUCCIÓN A LA SALUD AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MELISSA GONZÁLEZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0301',
      nombre: 'ECOLOGÍA HUMANA PARA SALUD AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MEDARDO MOSCOSO (AULA LAB DE CÓMPUTO)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0306',
      nombre: 'ELEMENTOS DE INGENIERÍA AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF WENDY PORRAS BARQUERO',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0502',
      nombre: 'ELEMENTOS DE HIDROLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ROJAS Y REYES (AULA LAB PLANOS)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0503',
      nombre: 'SALUD Y SEGURIDAD LABORAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DANIELA MOYA VÍQUEZ (AULA DE PLANOS)',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0504',
      nombre: 'SISTEMAS DE GESTIÓN DE ALIMENTOS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF WENDY PORRAS B. (AULA LAB DE PLANOS)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0603',
      nombre: 'PRÁCTICA DE INTERVENCIÓN EN SALUD AMBIENTAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF PORRAS, MOYA, GONZALEZ, CÉSPEDES',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '15:50' },
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0702',
      nombre: 'PARTICIPACIÓN COMUNITARIA EN LA GESTIÓN DE LA SALUD AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ARTURO SILVA LUCA (AULA LAB PLANOS)',
          horarios: [
            { dia: 'Viernes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0703',
      nombre: 'EPIDEMIOLOGÍA AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NICOLE VILLEGAS GONZÁLEZ (AULA DE COMPUTO)',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0705',
      nombre: 'EVALUACIÓN Y ESTUDIO DE IMPACTOS AMBIENTALES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DIEGO CÉSPEDES Y WENDY PORRAS (LANAMME #2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0801',
      nombre: 'LEGISLACIÓN PARA SALUD AMBIENTAL II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MELISSA GONZÁLEZ E. (AULA AUDIO VISUALES #2)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0802',
      nombre: 'FORMULACIÓN, EVALUACIÓN Y GESTIÓN DE PROYECTOS DE SALUD AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DIEGO CÉPEDES A. (AULA LAB DE CÓMPUTO)',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0806',
      nombre: 'GESTIÓN DE SUSTANCIAS TÓXICAS EN LA SALUD AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DANIELA MOYA Y POR DEFINIR',
          horarios: [
            { dia: 'Lunes', horaInicio: '14:00', horaFin: '15:50' }, 
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' }  
          ]
        }
      ]
    },

    {
      sigla: 'SL0807',
      nombre: 'MÉTODOS DE INVESTIGACIÓN EN SALUD AMBIENTAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. LEONEL CÓRDOBA',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0810',
      nombre: 'FUNDAMENTOS DE ECOTOXICOLOGÍA Y CONTAMINACIÓN AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA (AULA LAB DE PLANOS)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0811',
      nombre: 'GESTIÓN INTEGRADA DEL RECURSO HÍDRICO Y CAMBIO CLIMÁTICO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ROJAS Y POR DEFINIR (AULA LAB DE PLANOS)',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0814',
      nombre: 'INTRODUCCIÓN A LA EPIDEMIOLOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NICOLE VILLEGAS G. (AULA LAB DE CÓMPUTO)',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0901',
      nombre: 'GESTIÓN LOCAL DE LA SALUD AMBIENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ARTURO SILVA',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0903',
      nombre: 'CONSERVACIÓN Y GESTIÓN DE RECURSOS NATURALES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MEDARDO MOSCOSO',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0904',
      nombre: 'CONTROLES Y NORMAS DE CALIDAD INTERNACIONAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VÍCTOR PÉREZ O. (AULA LAB DE PLANOS)',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'SL0905',
      nombre: 'TALLER PARA EL DISEÑO DE PROPUESTAS DE SALUD AMBIENTAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VILLGEAS / POR DEFINIR (AULA PLANOS)',
          horarios: [
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '11:50' }
          ]
        }
      ]
    }

  ]
},

// ===================== CARRERAS GLOBALES =====================
{
  id: '6000',
  nombre: 'CARRERAS GLOBALES',
  cursos: [

    {
      sigla: 'IF0001',
      nombre: 'DESARROLLO DE SOFTWARE I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF KENNETH SÁNCHEZ (AULA LAB INF#1)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF KENNETH SÁNCHEZ (AULA LAB INF#1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. KENNETH SÁNCHEZ (AULA LAB. DE INFORM #1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'PROF. KENNETH SÁNCHEZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF0002',
      nombre: 'INTRODUCCIÓN A LA INFORMÁTICA EMPRESARIAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF IVAN CHAVARRIA (K-LANAMME #1 Y J-LAB INF#1)',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '10:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA (AULA LAB INF#1)',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '10:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. IVAN CHAVARRÍA (AULA LAB INFOR. #1)',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '10:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'CONSULTAR ESCUELA (AULA LAB DE INFOR. #1)',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '10:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF0003',
      nombre: 'MATEMÁTICA BÁSICA PARA INFORMÁTICA EMPRESARIAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LAURA BRICEÑO',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF CÉSAR LARA VANEGAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '10:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. LAURA BRICEÑO',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'PROF. CESAR LARA',
          horarios: [
            { dia: 'Viernes', horaInicio: '08:00', horaFin: '10:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF0006',
      nombre: 'DESARROLLO DE SOFTWARE III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOAQUIN ERAS (AULA LAB INF#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. JOAQUÍN ERAS (AULA LAB. DE INFORM #2)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF0007',
      nombre: 'BASES DE DATOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DOUGLAS SÁNCHEZ (AULA LAB INF#1)',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. DOUGLAS SÁNCHEZ (AULA LAB. INFORM. #1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF0008',
      nombre: 'CÁLCULO I PARA INFORMÁTICA EMPRESARIAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CÉSAR LARA',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF CÉSAR LARA VANEGAS',
          horarios: [
            { dia: 'Viernes', horaInicio: '16:00', horaFin: '18:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. CESAR LARA VANEGAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'PROF. CESAR LARA VANEGAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '15:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF3001',
      nombre: 'ALGORITMOS Y ESTRUCTURAS DE DATOS',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA (AULA LAB INF#1)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF JOSE MONTENEGRO (AULA LAB INF#1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'CONSULTAR ESCUELA (AULA LAB. DE INFORM. #1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '052',
          profesor: 'PROF. JOSÉ MONTENEGRO (AULA LAB. DE INFORM. #1)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF4101',
      nombre: 'LENGUAJES PARA APLICACIONES COMERCIALES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS CHARPENTIER',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. LUIS CHARPENTIER (AULA LAB. DE INFORM. #1)',
          horarios: [
            { dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF5000',
      nombre: 'REDES Y COMUNICACIONES DE DATOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JUAN HERNÁNDEZ (AULA LAB INF#1)',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF JUAN HERNÁNDEZ (AULA LAB. DE INFORM. #1)',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF5100',
      nombre: 'ADMINISTRACIÓN DE BASES DE DATOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ANDRÉS CORTÉZ (AULA LAB#1)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. ANDRÉS CORTÉZ (AULA LAB. INFORM. #1)',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF7100',
      nombre: 'INGENIERÍA DE SOFTWARE',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALFONSO CHAVARRÍA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. ALFONSO CHAVARRÍA (AULA LAB. INFORM. #2)',
          horarios: [
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF7101',
      nombre: 'COMPROMISO SOCIAL DE LA INFORMÁTICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF YEHUDIN SANCHO',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF7102',
      nombre: 'MULTIMEDIOS',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'CONSULTAR ESCUELA (AULA LAB DE INFORM. #2)',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF7200',
      nombre: 'MÉTODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS DELGADO',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. LUIS DELGADO',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IF7201',
      nombre: 'GESTIÓN DE PROYECTOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF HAZEL BUSTOS',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF HAZEL BUSTOS',
          horarios: [
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '08:50' }
          ]
        }
      ]
    }

  ]
},

// ===================== OCCIDENTE =====================
{
  id: '6001',
  nombre: 'SEDE REGIONAL DE OCCIDENTE',
  cursos: [

    {
      sigla: 'ED0012',
      nombre: 'DIDÁCTICA GENERAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FABRICIO VARGAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '15:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0017',
      nombre: 'BASES PSICOSOCIALES DE LA EDUCACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL MÁRQUEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0019',
      nombre: 'PROMOCIÓN DE LA SALUD Y CUIDADOS DE LA NIÑEZ',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF TANIA RAMÍREZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0026',
      nombre: 'DIDÁCTICA DE LA LITERATURA INFANTIL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF TANIA MORALES MARTÍNEZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF TANIA MORALES',
          horarios: [
            { dia: 'Lunes', horaInicio: '16:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0031',
      nombre: 'EXPERIENCIA EDUCATIVA EN LA EDUCACIÓN PRIMARIA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ANGIE PIZARRO LÓPEZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF MARGOT MIRANDA ROSALES',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'PROF HELLEN UREÑA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
            { dia: 'Viernes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0038',
      nombre: 'INVESTIGACIÓN EDUCATIVA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF KARINA MARÍN CASTRO',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0041',
      nombre: 'SALUD MENTAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LAN YING HERNÁNDEZ CHÉVEZ',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF ANA CRISTINA MONGE VARGAS',
          horarios: [
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0049',
      nombre: 'SEMINARIO DE ÉTICA EN EL EJERCICIO DOCENTE',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF FRNACINY OSÉS MARÍN',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0067',
      nombre: 'PEDAGOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF HELLEN UREÑA MORA (AULA AUDIO#1)',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF OLGA GUZMÁN',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0075',
      nombre: 'ABORDAJE PEDAGÓGICO DESDE EL ENFOQUE DE LA EDUCACIÓN INCLUSIVA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF HELEN UREÑA MORA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF OLGA GUZMÁN MORA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0078',
      nombre: 'FUNDAMENTACIÓN TEÓRICA DEL CURRÍCULO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MELISSA MONTERO OVARES',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0088',
      nombre: 'ALTA DOTACIÓN, TALENTO Y CREATIVIDAD EN LA EDUCACIÓN INICIAL Y PRIMARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ZAMORA Y SOLANO',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF OLGA GUZMAN MORA',
          horarios: [
            { dia: 'Viernes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '003',
          profesor: 'PROF OLGA GUMÁN (AULA AUDIO#1)',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0089',
      nombre: 'SEMINARIO DE INTEGRACIÓN ESCUELA Y CONTEXTO SOCIAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MILAGRO CARRILLO GÓMEZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0195',
      nombre: 'DESARROLLO DE LA NIÑEZ EN EDUCACIÓN INICIAL Y PRIMARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MIGUEL MÁRQUEZ CUEVA',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0196',
      nombre: 'EVALUACIÓN DE LOS APRENDIZAJES EN EDUCACIÓN INICIAL Y PRIMARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RAZIEL ACEVEDO ÁLVAREZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED0762',
      nombre: 'DIDÁCTICA DEL INGLÉS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF KAREN RUÍZ JUÁREZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED1101',
      nombre: 'SEMINARIO: FUNDAMENTOS TEÓRICOS Y PROFESIONALES DE LA EDUCACIÓN PRIMARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JAIRO JÚAREZ ROSALES',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '21:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF. KAREN RUIZ JUÁREZ (AULA AUDIO#2)',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED1102',
      nombre: 'DIDÁCTICA DE LA GRAMÁTICA PARA LA EDUCACIÓN PRIMARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NELDYS RAMÍREZ VÁSQUEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED1109',
      nombre: 'PLANEAMIENTO Y MEDIACIÓN PEDAGÓGICA EN LA EDUCACIÓN PRIMARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MILAGRO CARRILLO GÓMEZ',
          horarios: [
            { dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'ED1147',
      nombre: 'INGLÉS EN EL CONTEXTO DE LA EDUCACIÓN INICIAL Y PRIMARIA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF KAREN RUIZ JÚAREZ',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5001',
      nombre: 'LABORATORIO DE COMUNICACIÓN ORAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF REBECA RUÍZ DÍAZ (AULA LAB INF#2)',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF MAX ARIAS (AULA AUDIO#2)',
          horarios: [
            { dia: 'Miércoles', horaInicio: '16:00', horaFin: '18:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5003',
      nombre: 'LABORATORIO DE COMUNICACIÓN ORAL III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF NELSON BUSTOS',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5005',
      nombre: 'LABORATORIO DE COMUNICACIÓN ORAL V',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUCRECIA BORGE',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5200',
      nombre: 'COMUNICACIÓN ESCRITA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GRETEL TORRES',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF LUCRECIA BORGE',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5220',
      nombre: 'COMUNICACIÓN ESCRITA III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALBERTO CARBALLO (AULA LANAMME#2)',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5300',
      nombre: 'FONÉTICA Y LECTURA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ELÍAS BENAVIDES',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5301',
      nombre: 'LABORATORIO DE FONÉTICA Y LECTURA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALBERTO CARBALLO',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5400',
      nombre: 'COMUNICACIÓN ORAL I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VALERIA CRUZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF LARIZA MAYORGA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5420',
      nombre: 'COMUNICACIÓN ORAL III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOAN BOES NADERER',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'IO5440',
      nombre: 'COMUNICACIÓN ORAL V',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF JOAM BOES NADERER (AULA AUDIO#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    }

  ]
},

// ===================== GUANACASTE =====================
{
  id: '6003',
  nombre: 'SEDE REGIONAL DE GUANACASTE',
  cursos: [

    // ===================== EDUCACIÓN DE PERSONAS JÓVENES Y ADULTAS =====================
    {
      sigla: 'JA0001',
      nombre: 'FUNDAMENTOS DE LA EDUCACIÓN DE PERSONAS JÓVENES Y ADULTAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VIOLETA OBANDO MARTÍNEZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'JA0002',
      nombre: 'MEDIACIÓN EN LA EDUCACIÓN DE PERSONAS JÓVENES Y ADULTAS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RIGOBERTO MIRANDA GUDAMUZ',
          horarios: [
            { dia: 'Sábado', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'JA0003',
      nombre: 'DESARROLLO HUMANO EN LA ADOLESCENCIA Y EN LA ADULTEZ',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ANA CRISTINA MONGE VARGAS',
          horarios: [
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'JA0005',
      nombre: 'MATERIALES Y RECURSOS PARA LA EDUCACIÓN DE PERSONAS JÓVENES Y ADULTAS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF DOANSON TORRES',
          horarios: [
            { dia: 'Sábado', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'JA0006',
      nombre: 'METODOLOGÍA DE LA INVEST. PARA LA EDUCACIÓN DE PERSONAS JÓVENES Y ADULTAS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS CASTELLÓN',
          horarios: [
            { dia: 'Jueves', horaInicio: '18:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    // ===================== PRIMERA INFANCIA / INGLÉS =====================
    {
      sigla: 'PI0001',
      nombre: 'PEDAGOGÍA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF KAREN ZAMORA NAVARRETE',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0002',
      nombre: 'INGLÉS BÁSICO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MÓNICA CORDERO ELIZONDO',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' },
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0003',
      nombre: 'CRECIMIENTO Y DESARROLLO DE LA PRIMERA INFANCIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LANG YING HERNÁNDEZ CHÉVEZ (AULA AUDIO#1)',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '12:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0007',
      nombre: 'PRINCIPIOS DE LA GRAMÁTICA INGLESA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MAX ARIAS SEGURA',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0008',
      nombre: 'COMPRENSIÓN Y COMUNICACIÓN ORAL EN INGLÉS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARCELA MONTENEGRO (AULA LANAMME #2 - K)',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0009',
      nombre: 'COMPRENSIÓN Y COMUNICACIÓN ESCRITA EN INGLÉS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF YESENIA ARROYO GONZÁLEZ',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0010',
      nombre: 'ESTRATEGIAS PARA EL BIENESTAR INTEGRAL DE LA PRIMERA INFANCIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF GAUDY ACUÑA RIVERA',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0016',
      nombre: 'COMPRENSIÓN Y COMUNICACIÓN ORAL EN INGLÉS III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MARCELA MONTENEGRO (AULA SALA SESIONES - J)',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0017',
      nombre: 'COMPRENSIÓN Y COMUNICACIÓN ESCRITA EN INGLÉS III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS PINEDA CANALES',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0018',
      nombre: 'BASES TEÓRICAS DEL BILINGÜISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF YESENIA ARROYO GONZÁLEZ',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0019',
      nombre: 'LITERATURA INFANTIL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ALBERTO CARBALLO MEZA',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0020',
      nombre: 'FUNDAMENTOS EPISTEMOLÓGICOS Y TEORÍAS DE LA EDUCACIÓN DE LA PRIMERA INFANCIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF LUIS CASTELLÓN (AULA SALA DE SESIONES)',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0021',
      nombre: 'TECNOLOGÍAS DE LA INF. Y COMUNICACIÓN EN LA EDUCACIÓN DE LA PRIMERA INFANCIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF ADRIANA ACUÑA LEIVA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'PI0044',
      nombre: 'COMUNICACIÓN Y EXPRESIÓN ORAL Y ESCRITA EN ESPAÑOL',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '09:00', horaFin: '13:50' }
          ]
        }
      ]
    },

    // ===================== TURISMO =====================
    {
      sigla: 'TE0204',
      nombre: 'INTRODUCCIÓN AL TURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CHRISTIAN ZÚÑIGA',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0205',
      nombre: 'FUNDAMENTOS DE BIOLOGÍA PARA EL ECOTURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RICARDO MURILLO',
          horarios: [
            { dia: 'Miércoles', horaInicio: '10:00', horaFin: '12:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '12:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0206',
      nombre: 'INTRODUCCIÓN AL INGLÉS',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0211',
      nombre: 'COMPRENSIÓN AUDITIVA Y COMUNICACIÓN ORAL EN INGLÉS II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0212',
      nombre: 'BIODIVERSIDAD DE COSTA RICA II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RICARDO MURILLO',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Jueves', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0213',
      nombre: 'ESTADÍSTICA APLICADA AL TURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. ERICK CENTENO',
          horarios: [
            { dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0247',
      nombre: 'CONTABILIDAD GERENCIAL PARA TURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. DIEGO ARAYA',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0248',
      nombre: 'FRANCÉS PARA TURISMO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. MEYSBOL TORRES',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '19:50' },
            { dia: 'Sábado', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0249',
      nombre: 'METODOLOGÍA DE INVESTIGACIÓN Y ACCIÓN EN ECOTURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. MICHAEL MOYA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0301',
      nombre: 'ECODESARROLLO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. MINOR MOYA',
          horarios: [
            { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0401',
      nombre: 'SEMINARIO ECOTURISMO I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. YESENIA FALLAS',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0403',
      nombre: 'ECOTURISMO II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. SLAVICA DJENES',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0404',
      nombre: 'TALLER II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. YESENIA FALLAS',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0408',
      nombre: 'ADMINISTRACIÓN DE PERSONAL PARA TURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. DIEGO ARAYA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0500',
      nombre: 'EVALUACIÓN Y PLANIFICACIÓN DEL PATRIMINIO TURÍSTICO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. DORIAN MÉNDEZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '18:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. DORIAN MÉNDEZ',
          horarios: [
            { dia: 'Miércoles', horaInicio: '19:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0508',
      nombre: 'GESTIÓN DE IMPACTOS DEL ECOTURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. VICTOR MADRIGAL',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0512',
      nombre: 'GOBERNANZA Y GESTIÓN DE RECURSOS ECOTURÍSTICOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. VICTOR MADRIGAL',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0514',
      nombre: 'TENDENCIAS INTERNACIONALES DEL TURISMO',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. REBECA ÁLVAREZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0516',
      nombre: 'FORMULACIÓN Y EVALUACIÓN DE PROYECTOS ECOTURÍSTICOS',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: [
            { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TE0522',
      nombre: 'TALLER DE INVESTIGACIÓN III',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. MICHAEL MOYA',
          horarios: [
            { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    }

  ]
},

// ===================== AGRONOMIA =====================
{
  id: '9101',
  nombre: 'AGRONOMIA',
  cursos: [

    {
      sigla: 'AF0105',
      nombre: 'FISIOLOGÍA VEGETAL',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. JACQUELINE CERDAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF JACQUELINE CERDAS',
          horarios: [
            { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'AF0107',
      nombre: 'FITOGENÉTICA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. JOSÉ ANDRÉS ROJAS CHACÓN',
          horarios: [
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '17:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. JOSÉ ANDRÉS ROJAS CHACÓN',
          horarios: [
            { dia: 'Viernes', horaInicio: '07:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'AF0208',
      nombre: 'RELACIÓN SUELO-PLANTA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. JORGE ARMANDO LEIVA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        },
        {
          numero: '051',
          profesor: 'PROF. JORGE ARMANDO LEIVA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    }

  ]
},

// ===================== TECNOLOGIA DE ALIMENTOS =====================
{
  id: '9104',
  nombre: 'TECNOLOGIA DE ALIMENTOS',
  cursos: [

    {
      sigla: 'TA0109',
      nombre: 'OPERACIONES UNITARIAS EN EL PROCESAMIENTO DE ALIMENTOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VIALES, JIMÉNEZ Y MONGE',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '10:50' },
            { dia: 'Jueves', horaInicio: '13:00', horaFin: '14:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0110',
      nombre: 'LABORATORIO DE OPERACIONES UNITARIAS EN EL PROCESAMIENTO DE ALIMENTOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VIALES, JIMÉNEZ Y MONGE',
          horarios: [
            { dia: 'Lunes', horaInicio: '11:00', horaFin: '11:50' },
            { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0126',
      nombre: 'MICROBIOLOGÍA DEL PROCESAMIENTO DE ALIMENTOS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MURILLO, ARIAS Y BARRANTES (AULA AUDIO#2)',
          horarios: [
            { dia: 'Lunes', horaInicio: '16:00', horaFin: '17:50' },
            { dia: 'Martes', horaInicio: '16:00', horaFin: '17:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0127',
      nombre: 'LABORATORIO DE MICROBIOLOGÍA DEL PROCESAMIENTO DE ALIMENTOS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MURILLO, ARIAS Y BARRANTES (AULA LAB ALIM)',
          horarios: [
            { dia: 'Martes', horaInicio: '08:00', horaFin: '09:50' },
            { dia: 'Viernes', horaInicio: '08:00', horaFin: '09:50' }
          ]
        },
        {
          numero: '002',
          profesor: 'PROF MURILLO, ARIAS Y BARRANTES (AULA LAB ALIM)',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0128',
      nombre: 'INTRODUCCIÓN A LA INGENIERÍA DE ALIMENTOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MURILLO, BARRANTES Y ALVARADO',
          horarios: [
            { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0129',
      nombre: 'APLICACIONES ESTADÍSTICAS EN LA INDUSTRIA ALIMENTARIA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF. MURILLO, MARÍN Y VENEGAS',
          horarios: [
            { dia: 'Viernes', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0130',
      nombre: 'INTERACCIONES FÍSICAS Y REOLOGÍA DE ALIMENTOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VIALES, JIMÉNEZ, BARRANTES',
          horarios: [
            { dia: 'Viernes', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0211',
      nombre: 'TEMAS ESPECIALES EN TECNOLOGÍA DE ALIMENTOS II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VIALES, JIMÉNEZ Y ALVARADO',
          horarios: [
            { dia: 'Martes', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0213',
      nombre: 'GESTIÓN DE LA INNOVACIÓN',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF MONGE Y ALVARADO',
          horarios: [
            { dia: 'Martes', horaInicio: '14:00', horaFin: '15:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0217',
      nombre: 'TERMODINÁMICA Y BALANCES DE MASA',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF VIALES, JIMÉNEZ ALVARADO Y VENEGAS',
          horarios: [
            { dia: 'Martes', horaInicio: '10:00', horaFin: '12:50' },
            { dia: 'Viernes', horaInicio: '10:00', horaFin: '12:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0311',
      nombre: 'PROCESOS ALIMENTARIOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CHAVARRÍA RAMÍREZ Y MONGE',
          horarios: [
            { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0312',
      nombre: 'LABORATORIO DE PROCESOS ALIMENTARIOS I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CHAVARRÍA, RAMÍREZ Y MONGE (AULA LAB ALIMEN.)',
          horarios: [
            { dia: 'Jueves', horaInicio: '08:00', horaFin: '12:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0504',
      nombre: 'GESTIÓN DE INOCUIDAD Y CALIDAD II',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF CHAVARRÍA Y RAMÍREZ',
          horarios: [
            { dia: 'Viernes', horaInicio: '14:00', horaFin: '16:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0505',
      nombre: 'FUNDAMENTOS DE GESTIÓN PARA LA INGENIERÍA DE ALIMENTOS',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RAMÍREZ, MONGE Y BARRANTES',
          horarios: [
            { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA0506',
      nombre: 'INGENIERÍA DE PRODUCCIÓN EN LA INDUSTRIA ALIMENTARIA I',
      grupos: [
        {
          numero: '001',
          profesor: 'PROF RAMÍREZ Y CABALCETA',
          horarios: [
            { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
          ]
        }
      ]
    },

    {
      sigla: 'TA9500',
      nombre: 'INVESTIGACIÓN DIRIGIDA I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: []
        }
      ]
    },

    {
      sigla: 'TA9501',
      nombre: 'INVESTIGACIÓN DIRIGIDA II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: []
        }
      ]
    },

    {
      sigla: 'TA9502',
      nombre: 'INVESTIGACIÓN DIRIGIDA III',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: []
        }
      ]
    },

    {
      sigla: 'TA9800',
      nombre: 'PROYECTO DE GRADUACIÓN I',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: []
        }
      ]
    },

    {
      sigla: 'TA9801',
      nombre: 'PROYECTO DE GRADUACIÓN II',
      grupos: [
        {
          numero: '001',
          profesor: 'CONSULTAR ESCUELA',
          horarios: []
        }
      ]
    }

  ]
},
];
export { escuelas };