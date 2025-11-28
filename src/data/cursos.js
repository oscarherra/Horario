const escuelas = [
  // ===================== 0001 - ESTUDIOS GENERALES =====================
  {
    id: '0001',
    nombre: 'ESTUDIOS GENERALES',
    cursos: [
      {
        sigla: 'EG0088',
        nombre: 'CINE Y LITERATURA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF WALTER PALACIOS CASTILLO',
            horarios: [
              { dia: 'Viernes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Viernes', horaInicio: '13:00', horaFin: '15:50' }
            ]
          }
        ]
      }
    ]
  },

  // =========== 0002 - SEMINARIOS DE REALIDAD NACIONAL ===========
  {
    id: '0002',
    nombre: 'SEMINARIOS DE REALIDAD NACIONAL',
    cursos: [
      {
        sigla: 'SR0001',
        nombre: 'SEMINARIO DE REALIDAD NACIONAL I DERECHOS HUMANOS Y SEGURIDAD CIUDADANA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF CARLOS SANDOVAL NÚÑEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'SR0011',
        nombre: 'SEMINARIO DE REALIDAD NACIONAL II DERECHOS HUMANOS Y SEGURIDAD CIUDADANA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF CARLOS SANDOVAL NUÑÚZ',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      }
    ]
  },

  // ===== 0003 - FILOLOGÍA, LINGÜÍSTICA Y LITERATURA =====
  {
    id: '0003',
    nombre: 'FILOLOGÍA, LINGÜÍSTICA Y LITERATURA',
    cursos: [
      {
        sigla: 'RP1203',
        nombre: 'CURSO BÁSICO DE REDACCIÓN',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF RUTH ESPINOZA CASCANTE',
            horarios: [
              { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' }
            ]
          }
        ]
      }
    ]
  },

  // ======================= 0004 - LENGUAS MODERNAS =======================
  {
    id: '0004',
    nombre: 'LENGUAS MODERNAS',
    cursos: [
      {
        sigla: 'LM1030',
        nombre: 'ESTRATEGIAS DE LECTURA EN INGLÉS I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF NELSON BUSTOS MENDOZA',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'LM1031',
        nombre: 'INGLÉS INTENSIVO I (ORAL)',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF LUCRECIA BORGE GONZÁLEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'LM1033',
        nombre: 'INGLÉS INTENSIVO II (ORAL)',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF CLAUDIA MARÍN MONTERO',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'LM1237',
        nombre: 'INTRODUCCIÓN A LA LITERATURA INGLESA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. ALFONSO GUTIÉRREZ SIBAJA',
            horarios: []
          }
        ]
      }
    ]
  },

  // ============================ 0005 - FÍSICA ============================
  {
    id: '0005',
    nombre: 'FÍSICA',
    cursos: [
      {
        sigla: 'FS0101',
        nombre: 'FUNDAMENTOS DE ASTRONOMÍA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF FABIAN CHAVERRI MIRANDA',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'FS0210',
        nombre: 'FÍSICA GENERAL I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. OCTAVIO ZÚÑIGA',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      }
      
    ]
  },

  // =========================== 0006 - MATEMÁTICAS ===========================
  {
    id: '0006',
    nombre: 'MATEMÁTICAS',
    cursos: [
      {
        sigla: 'MA0001',
        nombre: 'PRECÁLCULO',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. GAUDY JIMÉNEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '17:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '17:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA0125',
        nombre: 'MATEMÁTICA ELEMENTAL',
        grupos: [
          {
            numero: '901',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '17:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '17:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA0321',
        nombre: 'CÁLCULO DIFERENCIAL E INTEGRAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. CÉSAR LARA',
            horarios: [
              { dia: 'Lunes', horaInicio: '07:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '07:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA0322',
        nombre: 'ÁLGEBRA LINEAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PORF. MIGUEL WALKER',
            horarios: [
              { dia: 'Martes', horaInicio: '07:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '07:00', horaFin: '11:50' }
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
            profesor: 'PROF. MIGUEL WALKER',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '17:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '17:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA1004',
        nombre: 'ÁLGEBRA LINEAL',
        grupos: [
          {
            numero: '901',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Martes', horaInicio: '07:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '07:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA1021',
        nombre: 'CÁLCULO PARA CIENCIAS ECONÓMICAS I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. GAUDY JIMÉNEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '07:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '07:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA1101',
        nombre: 'CÁLCULO I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. HELLEN MENA',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '17:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '17:50' }
            ]
          }
        ]
      },
      {
        sigla: 'MA1210',
        nombre: 'CÁLCULO I',
        grupos: [
          {
            numero: '901',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Martes', horaInicio: '07:00', horaFin: '11:50' },
              { dia: 'Viernes', horaInicio: '07:00', horaFin: '11:50' }
            ]
          }
        ]
      }
    ]
  },

  // =========================== 0007 - QUÍMICA ===========================
  {
    id: '0007',
    nombre: 'QUÍMICA',
    cursos: [
      {
        sigla: 'QU0114',
        nombre: 'QUÍMICA GENERAL INTENSIVA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. MARIELA ARAYA BARAHONA',
            horarios: [
              { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:50' },
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Martes', horaInicio: '10:00', horaFin: '11:50' },
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      }
    ]
  },

  // ========================== 0008 - DERECHO ==========================
  {
    id: '0008',
    nombre: 'DERECHO',
    cursos: [
      {
        sigla: 'DE1136',
        nombre: 'LÓGICA Y RAZONAMIENTO JURÍDICO',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. ANDRÉS VILLAFUERTE',
            horarios: []
          }
        ]
      },
      {
        sigla: 'DE1141',
        nombre: 'CONSULTORIOS JURÍDICOS',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. IVETH OROZCO GARCÍA',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
            ]
          },
          {
            numero: '902',
            profesor: 'PROF. ANA ELENA ALVARADO SALAZAR',
            horarios: [
              { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
            ]
          },
          {
            numero: '903',
            profesor: 'PROF. ANDREA GUTIÉRREZ BALTODANO',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'DE2001',
        nombre: 'PRINCIPIOS DEL DERECHO PRIVADO I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. MARIANELLA AGUIRRE RODRÍGUEZ',
            horarios: [
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'DE2007',
        nombre: 'PRINCIPIOS DEL DERECHO PRIVADO II',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. MARIANELLA AGUIRRE RODRÍGUEZ',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'DE4004',
        nombre: 'DERECHO DE LA CONTRATACIÓN PRIVADA I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. ANA ELENA ALVARADO SALAZAR',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Viernes', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      }
    ]
  },

  // ====================== 0009 - FORMACIÓN DOCENTE ======================
  {
    id: '0009',
    nombre: 'FORMACIÓN DOCENTE',
    cursos: [
      {
        sigla: 'FD0264',
        nombre: 'SEMINARIO: INVESTIGACIÓN EN DIDÁCTICA DE LA MATEMÁTICA EN LA ETAPA ESCOLAR',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF EYLIN ABARCA',
            horarios: [
              { dia: 'Viernes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Viernes', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'FD5013',
        nombre: 'LA NARRACIÓN ORAL EN EL CONTEXTO DEL AULA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF MARGOT MIRANDA SALAZAR',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      }
    ]
  },

  // ========== 0010 - EDUCACIÓN FÍSICA Y DEPORTES ==========
  {
    id: '0010',
    nombre: 'EDUCACIÓN FÍSICA Y DEPORTES',
    cursos: [
      {
        sigla: 'EF6201',
        nombre: 'ACTIVIDAD DEPORTIVA: VOLIBOL PRINCIPIANTE MIXTO',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF VINICIO RUIZ ORTEGA',
            horarios: [
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'EF6221',
        nombre: 'ACTIVIDAD DEPORTIVA: BALONCESTO PRINCIPIANTES MIXTO',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF VINICIO RUIZ ORTEGA',
            horarios: [
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      }
    ]
  },

  // ========== 0011 - ADMINISTRACIÓN DE NEGOCIOS ==========
  {
    id: '0011',
    nombre: 'ADMINISTRACIÓN DE NEGOCIOS',
    cursos: [
      {
        sigla: 'DN0102',
        nombre: 'APLICACIONES OFIMÁTICAS PARA LA TOMA DE DECISIONES',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. CARLOS VEGA',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'DN0103',
        nombre: 'ADMINISTRACIÓN DE PROYECTOS Y HERRAMIENTAS PARA EL ANÁLISIS DE DATOS',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. JOEL JIMÉNEZ',
            horarios: [
              { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' },
              { dia: 'Viernes', horaInicio: '16:00', horaFin: '19:50' }
            ]
          }
        ]
      },
      {
        sigla: 'DN0109',
        nombre: 'PRINCIPIOS DE AUDITORÍA FINANCIERA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. IVÁN VILLAVERDE CARBAJO',
            horarios: [
              { dia: 'Lunes', horaInicio: '17:00', horaFin: '19:50' },
              { dia: 'Miércoles', horaInicio: '17:00', horaFin: '19:50' }
            ]
          }
        ]
      },
      {
        sigla: 'DN0340',
        nombre: 'ADMINISTRACIÓN FINANCIERA I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. LUIS ALBERTO BERMÚDEZ CARRILLO',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
              { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'PC0200',
        nombre: 'CONTABILIDAD BÁSICA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. BEYKER STEFAN OBANDO ZAMBRANO',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'PC0202',
        nombre: 'CONTABILIDAD INTERMEDIA I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. IVÁN VILLAVERDE CARBAJO',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'PC0304',
        nombre: 'CONTABILIDAD INTERMEDIA II',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF CHRISTHIAN MORA PONCE',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'PC0462',
        nombre: 'LEGISLACIÓN TRIBUTARIA Y ADUANERA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. PROF. ADRIANA RIVAS LOÁICIGA',
            horarios: [
              { dia: 'Martes', horaInicio: '17:00', horaFin: '19:50' },
              { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' }
            ]
          }
        ]
      }
    ]
  },

  // ===================== 0012 - ADMINISTRACIÓN PÚBLICA =====================
  {
    id: '0012',
    nombre: 'ADMINISTRACIÓN PÚBLICA',
    cursos: [
      {
        sigla: 'XP0201',
        nombre: 'ECONOMÍA INTERNACIONAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. ESTEBAN ARAYA SALAZAR',
            horarios: [
              { dia: 'Martes', horaInicio: '18:00', horaFin: '20:50' },
              { dia: 'Jueves', horaInicio: '18:00', horaFin: '20:50' }
            ]
          }
        ]
      },
      {
        sigla: 'XP0243',
        nombre: 'MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. ANABEL ALVARADO GONZÁLEZ',
            horarios: [
              { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'XP0254',
        nombre: 'MERCADEO ESTRATÉGICO',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF- KATTIA QUESADA ARAYA',
            horarios: [
              { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
               { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
           ]
          }
        ]
      },
      {
        sigla: 'XP0258',
        nombre: 'ACCESO A MERCADOS EN LOS TRATADOS COMERCIALES DE COSTA RICA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. OLIVIER TRAÑA DUARTE',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
            ]
          }
        ]
      }
    ]
  },

  // ============================ 0013 - ECONOMÍA ============================
  {
    id: '0013',
    nombre: 'ECONOMÍA',
    cursos: [
      {
        sigla: 'XE0156',
        nombre: 'INTRODUCCIÓN A LA ECONOMÍA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. STEPHANIE PORRAS ACEVEDO',
            horarios: [
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      }
    ]
  },

  // ===================== 0014 - TECNOLOGÍAS EN SALUD =====================
  {
    id: '0014',
    nombre: 'TECNOLOGÍAS EN SALUD',
    cursos: [
      {
        sigla: 'SL0303',
        nombre: 'SISTEMAS DE ATENCIÓN EN SALUD Y AMBIENTE',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. YORDAN BRENES VARGAS',
            horarios: [
              { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'SL0306',
        nombre: 'ELEMENTOS DE INGENIERÍA AMBIENTAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. WENDY PORRAS BARQUERO',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'SL0810',
        nombre: 'FUNDAMENTOS DE ECOTOXICOLOGÍA Y CONTAMINACIÓN AMBIENTAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. GABRIEL BRENES BRAVO',
            horarios: [
              { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '15:50' }
            ]
          }
        ]
      }
    ]
  },

  // ======================== 0015 - CARRERAS GLOBALES ========================
  {
    id: '0015',
    nombre: 'CARRERAS GLOBALES',
    cursos: [
      {
        sigla: 'IF0003',
        nombre: 'MATEMÁTICA BÁSICA PARA INFORMÁTICA EMPRESARIAL',
        grupos: [
          {
            numero: '901',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Lunes', horaInicio: '08:00', horaFin: '10:50' },
              { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' }
            ]
          },
          {
            numero: '951',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '10:50' }
            ]
          }
        ]
      },
      {
        sigla: 'IF0004',
        nombre: 'DESARROLLO DE SOFTWARE II',
        grupos: [
          {
            numero: '901',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' }
            ]
          },
          {
            numero: '951',
            profesor: 'CONSULTAR ESCUELA',
            horarios: [
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Jueves', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      }
    ]
  },

  // ===================== 0016 - SEDE REGIONAL DE OCCIDENTE =====================
  {
    id: '0016',
    nombre: 'SEDE REGIONAL DE OCCIDENTE',
    cursos: [
      {
        sigla: 'ED0019',
        nombre: 'PROMOCIÓN DE LA SALUD Y CUIDADOS DE LA NIÑEZ',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. TANIA RAMÍREZ',
            horarios: [
              { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' },
              { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
            ]
          },
          {
            numero: '902',
            profesor: 'PROF TANIA RAMÍREZ LÓPEZ',
            horarios: [
              { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' },
              { dia: 'Jueves', horaInicio: '17:00', horaFin: '20:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED0026',
        nombre: 'DIDÁCTICA DE LA LITERATURA INFANTIL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. MILAGRO CARRILLO GÓMEZ',
            horarios: [
              { dia: 'Sábado', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Sábado', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED0038',
        nombre: 'INVESTIGACIÓN EDUCATIVA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF LUIS CASTELLÓN ZELAYA',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED0039',
        nombre: 'FUNDAMENTOS DE ADMINISTRACIÓN EDUCATIVA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF VIRGINIA SALAS VALLEJOS',
            horarios: [
              { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' },
              { dia: 'Martes', horaInicio: '17:00', horaFin: '20:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED0049',
        nombre: 'SEMINARIO DE ÉTICA EN EL EJERCICIO DOCENTE',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF ESTEBAN SÁNCHEZ SALAZAR',
            horarios: [
              { dia: 'Martes', horaInicio: '13:00', horaFin: '15:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED0051',
        nombre: 'MÚSICA Y EXPRESIÓN CORPORAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF ERICK ESPINOZA HERNÁNDEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '17:00', horaFin: '20:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED0089',
        nombre: 'SEMINARIO DE INTEGRACIÓN ESCUELA Y CONTEXTO SOCIAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF HELEN UREÑA MORA',
            horarios: [
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'ED1100',
        nombre: 'DIDÁCTICA DE LA LENGUA ESPAÑOLA PARA LA EDUCACIÓN PRIMARIA I',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF TANIA MORALES MARTÍNEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '17:00', horaFin: '20:50' },
              { dia: 'Martes', horaInicio: '16:00', horaFin: '19:50' }
            ]
          }
        ]
      }
    ]
  },

  // ===================== 0017 - SEDE REGIONAL DE GUANACASTE =====================
  {
    id: '0017',
    nombre: 'SEDE REGIONAL DE GUANACASTE',
    cursos: [
      {
        sigla: 'JA0004',
        nombre: 'ABORDAJE DE LA DIVERSIDAD EN LA EDUCACIÓN DE PERSONAS JÓVENES Y ADULTAS',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. OLGA GUZMÁN',
            horarios: [
              { dia: 'Jueves', horaInicio: '17:00', horaFin: '19:50' },
              { dia: 'Viernes', horaInicio: '17:00', horaFin: '19:50' }
            ]
          }
        ]
      },
      {
        sigla: 'JA0008',
        nombre: 'ÉTICA PROFESIONAL',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF ESTEBAN SÁNCHEZ SALAZAR',
            horarios: [
              { dia: 'Sábado', horaInicio: '08:00', horaFin: '10:50' },
              { dia: 'Sábado', horaInicio: '13:00', horaFin: '15:50' }
            ]
          }
        ]
      },
      {
        sigla: 'PI0004',
        nombre: 'INGLÉS BÁSICO II',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. MARCELA MONTENEGRO SÁNCHEZ',
            horarios: [
              { dia: 'Lunes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Martes', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '09:00', horaFin: '11:50' }
            ]
          }
        ]
      },
      {
        sigla: 'TE0204',
        nombre: 'INTRODUCCIÓN AL TURISMO',
        grupos: [
          {
            numero: '001',
            profesor: 'PROF. MICHAEL MOYA CALDERÓN',
            horarios: [
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      },
      {
        sigla: 'TE0210',
        nombre: 'FUNDAMENTOS DE ADMINISTRACIÓN',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. LUIS ALEXANDER GARCÍA UGALDE',
            horarios: [
              { dia: 'Lunes', horaInicio: '18:00', horaFin: '20:50' },
              { dia: 'Miércoles', horaInicio: '18:00', horaFin: '20:50' }
            ]
          }
        ]
      },
      {
        sigla: 'TE0400',
        nombre: 'INGLÉS CONVERSACIONAL II',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF. LUPITA FONSECA BRENES',
            horarios: [
              { dia: 'Miércoles', horaInicio: '09:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '15:50' }
            ]
          }
        ]
      }
    ]
  },

  // ===================== 0018 - TECNOLOGÍA DE ALIMENTOS =====================
  {
    id: '0018',
    nombre: 'TECNOLOGÍA DE ALIMENTOS',
    cursos: [
      {
        sigla: 'TA0214',
        nombre: 'PASANTÍA',
        grupos: [
          {
            numero: '901',
            profesor: 'PROF RAMIREZ, MURILLO,BARRANTES',
            horarios: [
              { dia: 'Lunes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Martes', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Miércoles', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Jueves', horaInicio: '08:00', horaFin: '11:50' },
              { dia: 'Lunes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Martes', horaInicio: '13:00', horaFin: '16:50' },
              { dia: 'Miércoles', horaInicio: '13:00', horaFin: '16:50' }
            ]
          }
        ]
      }
    ]
  }
];
export { escuelas };