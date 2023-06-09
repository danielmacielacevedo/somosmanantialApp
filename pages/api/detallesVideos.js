const cache = require("../../cache");

export default function detallesVideos(req, res) {
  const cacheKey = "detallesVideos";

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log("Data from cache");
    return res.status(200).json(cachedData);
  }

  const manantial = [
    {
      title: "Como ser ujier en 9 pasos",
      autor: "Manantial de Vida",
      picture: "/assets/profile-picture.png",
      date: "27 MARZO 2019",
      dia: "27",
      mes: "03",
      año: "2019",
      hora: "13",
      minuto: "00",
      desc: "Guia ujieres Manantial de Vida",
      image: "/assets/tutoriales",
      url: "/como-ser-ujier",
      profileURL: "/",
      embed: "ocphbfUEpWk",
    },
  ];

  const pastorIsaac = [
    {
      title: "Él Vive",
      autor: "Pastor Isaac Delgado",
      picture: "/assets/predicadores/pastor-isaac.png",
      date: "09 ABRIL 2023",
      dia: "09",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/pastor-isaac/el-vive.jpg",
      url: "/el-vive",
      profileURL: "/@pastorisaac",
      embed: "YOCJ-BZ5fvA",
    },

    {
      title: "¿De dónde vienes?",
      autor: "Pastor Isaac Delgado",
      picture: "/assets/predicadores/pastor-isaac.png",
      date: "12 ABRIL 2023",
      dia: "12",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/pastor-isaac/de-donde-vienes.jpg",
      url: "/de-donde-vienes",
      profileURL: "/@pastorisaac",
      embed: "tKQuTw-99Ww",
    },

    {
      title: "Atrévete a caminar en la dirección de Dios",
      autor: "Pastor Isaac Delgado",
      picture: "/assets/predicadores/pastor-isaac.png",
      date: "16 ABRIL 2023",
      dia: "16",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/pastor-isaac/atrevete-a-caminar-en-la-direccion-de-DIOS.jpg",
      url: "/atrevete-a-caminar-en-la-direccion-de-DIOS",
      profileURL: "/@pastorisaac",
      embed: "ocKoE3kWrs4",
    },

    {
      title: "Nunca te olvides",
      autor: "Pastor Isaac Delgado",
      picture: "/assets/predicadores/pastor-isaac.png",
      date: "19 ABRIL 2023",
      dia: "19",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Especial de nuestro primer servicio de Aniversario en Manantial de Vida.",
      image: "/assets/predicadores/pastor-isaac/nunca-te-olvides.jpg",
      url: "/nunca-te-olvides",
      profileURL: "/@pastorisaac",
      embed: "LrikdGempDM",
    },

    {
      title: "La verdadera adoración",
      autor: "Pastor Isaac Delgado",
      picture: "/assets/predicadores/pastor-isaac.png",
      date: "03 MAYO 2023",
      dia: "03",
      mes: "05",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/pastor-isaac/la-verdadera-adoracion.jpg",
      url: "/la-verdadera-adoracion",
      profileURL: "/@pastorisaac",
      embed: "FF8QGn4russ",
    },

    {
      title: "El poder de la oración",
      autor: "Pastor Isaac Delgado",
      picture: "/assets/predicadores/pastor-isaac.png",
      date: "07 MAYO 2023",
      dia: "07",
      mes: "05",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/pastor-isaac/el-poder-de-la-oracion.jpg",
      url: "/el-poder-de-la-oracion",
      profileURL: "/@pastorisaac",
      embed: "ld3xPECRZDA",
    },
  ];

  const pastoraDina = [
    {
      title: "Hossana",
      autor: "Pastora Dina Campos",
      picture: "/assets/predicadores/pastora-dina.png",
      date: "02 ABRIL 2023",
      dia: "02",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/pastora-dina/hossana.jpg",
      url: "/hossana",
      profileURL: "/@pastoradina",
      embed: "Xf769btY9aw",
    },

    {
      title: "En mi angustia",
      autor: "Pastora Dina Campos",
      picture: "/assets/predicadores/pastora-dina.png",
      date: "30 ABRIL 2023",
      dia: "30",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/pastora-dina/en-mi-angustia.jpg",
      url: "/en-mi-angustia",
      profileURL: "/@pastoradina",
      embed: "EvNvGzqYkJI",
    },
  ];

  const adrielRamos = [
    {
      title: "¿Cuánto dependes de Dios?",
      autor: "Adriel Ramos",
      picture: "/assets/predicadores/adriel-ramos.png",
      date: "31 OCTUBRE 2021",
      dia: "31",
      mes: "10",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/adriel-ramos/cuanto-dependes-de-Dios.jpg",
      url: "/cuanto-dependes-de-DIOS",
      profileURL: "/@adrielramos",
      embed: "AJ8SAXWCeOs",
    },
  ];

  const anitaMinchaca = [
    {
      title: "Amor incomparable",
      autor: "Anita Minchaca",
      picture: "/assets/predicadores/anita-minchaca.png",
      date: "28 OCTUBRE 2022",
      dia: "28",
      mes: "10",
      año: "2022",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/anita-minchaca/amor-incomparable.jpg",
      url: "/amor-incomparable",
      profileURL: "/@anitaminchaca",
      embed: "1RTGfSivYJs",
    },
  ];

  const emmanuelAguilar = [
    {
      title: "Tú decides",
      autor: "Emmanuel Aguilar",
      picture: "/assets/predicadores/emmanuel-aguilar.png",
      date: "20 ENERO 2023",
      dia: "20",
      mes: "01",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/emmanuel-aguilar/tu-decides.jpg",
      url: "/tu-decides",
      profileURL: "/@emmanuelaguilar",
      embed: "tPN6kRgjl9A",
    },
  ];

  const florFernandez = [
    {
      title: "Metamorfosis del alma",
      autor: "Flor Fernández",
      picture: "/assets/predicadores/flor-fernandez.png",
      date: "23 ENERO 2023",
      dia: "23",
      mes: "01",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/flor-fernandez/metamorfosis-del-alma.jpg",
      url: "/metamorfosis-del-alma",
      profileURL: "/@florfernandez",
      embed: "c7Ok6yvFALA",
    },
  ];

  const franciscoGarcia = [
    {
      title: "Conectados 2021",
      autor: "Francisco Garcia",
      picture: "/assets/predicadores/francisco-garcia.png",
      date: "06 DICIEMBRE 2021",
      dia: "06",
      mes: "12",
      año: "2020",
      hora: "13",
      minuto: "00",
      desc: "Predicación Campamento de Jóvenes Conectados 2021",
      image: "/assets/predicadores/francisco-garcia/conectados2021.jpg",
      url: "/conectados2021",
      profileURL: "/@franciscogarcia",
      embed: "L5pPfoxTYhk",
    },

    {
      title: "Integra Fidelidad",
      autor: "Francisco Garcia",
      picture: "/assets/predicadores/francisco-garcia.png",
      date: "21 ABRIL 2023",
      dia: "21",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación especial de nuestro segundo servicio de Aniversario en Manantial de Vida.",
      image: "/assets/predicadores/francisco-garcia/integra-fidelidad.jpg",
      url: "/integra-fidelidad",
      profileURL: "/@franciscogarcia",
      embed: "vDvJMzunM7g",
    },
  ];

  const franciscoSerrano = [
    {
      title: "Nehemías",
      autor: "Francisco Serrano",
      picture: "/assets/predicadores/francisco-serrano.png",
      date: "29 MARZO 2023",
      dia: "29",
      mes: "03",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/francisco-serrano/nehemias.jpg",
      url: "/nehemias",
      profileURL: "/@franciscoserrano",
      embed: "F5MqdWHDeE0",
    },

    {
      title: "Crucifixión",
      autor: "Francisco Serrano",
      picture: "/assets/predicadores/francisco-serrano.png",
      date: "07 ABRIL 2023",
      dia: "07",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/francisco-serrano/crucifixion.jpg",
      url: "/crucifixion",
      profileURL: "/@franciscoserrano",
      embed: "GpjFkvmX9yk",
    },

    {
      title: "La importancia de lo que no se ve",
      autor: "Francisco Serrano",
      picture: "/assets/predicadores/francisco-serrano.png",
      date: "10 MAYO 2023",
      dia: "10",
      mes: "05",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/francisco-serrano/la-importancia-de-lo-que-no-se-ve.jpg",
      url: "/la-importancia-de-lo-que-no-se-ve",
      profileURL: "/@franciscoserrano",
      embed: "qZ8C3tjW_xM",
    },
  ];

  const juanLeyva = [
    {
      title: "La palabra que transforma las generaciones",
      autor: "Juan Leyva",
      picture: "/assets/predicadores/juan-leyva.png",
      date: "22 ABRIL 2023",
      dia: "22",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Especial de nuestro tercer servicio de Aniversario en Manantial de Vida.",
      image:
        "/assets/predicadores/juan-leyva/la-palabra-que-transforma-las-generaciones.jpg",
      url: "/la-palabra-que-transforma-las-generaciones",
      profileURL: "/@juanleyva",
      embed: "_Kmx8yeON4Q",
    },
  ];

  const juanPabloRodriguez = [
    {
      title: "[YOUTH] Conectados a la fuente",
      autor: "Juan Pablo Rodríguez",
      picture: "/assets/predicadores/juan-pablo-rodriguez.png",
      date: "07 AGOSTO 2021",
      dia: "07",
      mes: "08",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/juan-pablo-rodriguez/conectados-a-la-fuente.jpg",
      url: "/conectados-a-la-fuente",
      profileURL: "/@juanpablorodriguez",
      embed: "ssT6VNPYMuk",
    },

    {
      title: "Derribando para ganar",
      autor: "Juan Pablo Rodríguez",
      picture: "/assets/predicadores/juan-pablo-rodriguez.png",
      date: "26 MARZO 2023",
      dia: "26",
      mes: "03",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/juan-pablo-rodriguez/derribando-para-ganar.jpg",
      url: "/derribando-para-ganar",
      profileURL: "/@juanpablorodriguez",
      embed: "nem8shsfciE",
    },
  ];

  const karlaCervantes = [
    {
      title: "Familias Bendecidas",
      autor: "Karla Cervantes",
      picture: "/assets/predicadores/karla-cervantes.png",
      date: "06 DICIEMBRE 2021",
      dia: "06",
      mes: "12",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/karla-cervantes/familias-bendecidas.jpg",
      url: "/familias-bendecidas",
      profileURL: "/@karlacervantes",
      embed: "Oq-gy_YcQZs",
    },
  ];

  const leonorRuiz = [
    {
      title: "3 Enseñanzas edificantes para la Iglesia",
      autor: "Leonor Ruiz",
      picture: "/assets/predicadores/leonor-ruiz.png",
      date: "23 ABRIL 2023",
      dia: "23",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Especial de nuestro cuarto servicio de Aniversario en Manantial de Vida.",
      image: "/assets/predicadores/leonor-ruiz/marcos5.jpg",
      url: "/marcos5",
      profileURL: "/@leonorruiz",
      embed: "1gzPiaqFOFc",
    },
  ];

  const luisRios = [
    {
      title: "La reflexión",
      autor: "Luis Rios",
      picture: "/assets/predicadores/luis-rios.png",
      date: "06 NOVIEMBRE 2022",
      dia: "06",
      mes: "11",
      año: "2022",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/luis-rios/la-reflexion.jpg",
      url: "/la-reflexion",
      profileURL: "/@luisrios",
      embed: "gOhyHwN2tCU",
    },
  ];

  const magdielPastrana = [
    {
      title: "Devoción a Dios",
      autor: "Magdiel Pastrana",
      picture: "/assets/predicadores/magdiel-pastrana.png",
      date: "14 FEBRERO 2021",
      dia: "14",
      mes: "02",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/magdiel-pastrana/devocion-a-DIOS.jpg",
      url: "/devocion-a-DIOS",
      profileURL: "/@magdielpastrana",
      embed: "S5EBfykxVOc",
    },

    {
      title: "El Poder de la Fe",
      autor: "Magdiel Pastrana",
      picture: "/assets/predicadores/magdiel-pastrana.png",
      date: "14 FEBRERO 2021",
      dia: "14",
      mes: "02",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/magdiel-pastrana/el-poder-de-la-fe.jpg",
      url: "/el-poder-de-la-fe",
      profileURL: "/@magdielpastrana",
      embed: "V5QIeW5793M",
    },
  ];

  const obedGarcia = [
    {
      title: "Preparados para la gloria postrera",
      autor: "Obed García",
      picture: "/assets/predicadores/obed-garcia.png",
      date: "26 JUNIO 2022",
      dia: "26",
      mes: "06",
      año: "2022",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/obed-garcia/preparados-para-la-gloria-postrera.jpg",
      url: "/preparados-para-la-gloria-postrera",
      profileURL: "/@obedgarcia",
      embed: "HG0NGChqitI",
    },
  ];

  const omarMorales = [
    {
      title: "Qué hacer al cruzar la tempestad",
      autor: "Omar Morales",
      picture: "/assets/predicadores/omar-morales.png",
      date: "17 MARZO 2021",
      dia: "17",
      mes: "03",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/omar-morales/que-hacer-al-cruzar-la-tempestad.jpg",
      url: "/que-hacer-al-cruzar-la-tempestad",
      profileURL: "/@omarmorales",
      embed: "W_L5zoL6-tw",
    },
  ];

  const oswaldoAli = [
    {
      title: "Nuestra Esperanza",
      autor: "Oswaldo Ali",
      picture: "/assets/predicadores/oswaldo-ali.png",
      date: "25 JULIO 2021",
      dia: "25",
      mes: "06",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/oswaldo-ali/nuestra-esperanza.jpg",
      url: "/nuestra-esperanza",
      profileURL: "/@oswaldoali",
      embed: "FlJUUXHdpz8",
    },

    {
      title: "Dios busca adoradores",
      autor: "Oswaldo Ali",
      picture: "/assets/predicadores/oswaldo-ali.png",
      date: "01 AGOSTO 2021",
      dia: "01",
      mes: "08",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/oswaldo-ali/DIOS-busca-adoradores.jpg",
      url: "/DIOS-busca-adoradores",
      profileURL: "/@oswaldoali",
      embed: "hBz5cVs5BN4",
    },

    {
      title: "Mateo 26:6-13",
      autor: "Oswaldo Ali",
      picture: "/assets/predicadores/oswaldo-ali.png",
      date: "16 DICIEMBRE 2022",
      dia: "16",
      mes: "12",
      año: "2022",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/oswaldo-ali/mateo26.jpg",
      url: "/mateo26",
      profileURL: "/@oswaldoali",
      embed: "UTJUFI82Ci0",
    },
  ];

  const veliaAcevedo = [
    {
      title: "Getsemaní",
      autor: "Velia Acevedo",
      picture: "/assets/predicadores/velia-acevedo.png",
      date: "05 ABRIL 2023",
      dia: "05",
      mes: "04",
      año: "2023",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/velia-acevedo/getsemani.jpg",
      url: "/getsemani",
      profileURL: "/@veliaacevedo",
      embed: "4Id_ZH0aRIM",
    },
    {
      title: "Una respuesta inesperada",
      autor: "Velia Acevedo",
      picture: "/assets/predicadores/velia-acevedo.png",
      date: "17 MAYO 2023",
      dia: "17",
      mes: "05",
      año: "2023",
      hora: "19",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/velia-acevedo/una-respuesta-inesperada.jpg",
      imageHD:
        "/assets/predicadores/velia-acevedo/una-respuesta-inesperadaHD.jpg",
      url: "/una-respuesta-inesperada",
      profileURL: "/@veliaacevedo",
      embed: "sUG65_2U1H8",
    },
  ];

  const willyMartinez = [
    {
      title: "Pentecostés 2021",
      autor: "Willy Martínez",
      picture: "/assets/predicadores/willy-martinez.png",
      date: "26 MAYO 2021",
      dia: "26",
      mes: "05",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image: "/assets/predicadores/willy-martinez/pentecostes2021.jpg",
      url: "/Pentecostes2021",
      profileURL: "/@willymartinez",
      embed: "9uvCbOuMa8g",
    },
  ];

  const yolandaPerez = [
    {
      title: "¿Porqué buscáis entre los muertos al que vive?",
      autor: "Yolanda Pérez",
      picture: "/assets/predicadores/yolanda-perez.png",
      date: "04 ABRIL 2021",
      dia: "04",
      mes: "04",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/yolanda-perez/porque-buscais-entre-los-muertos-al-que-vive.jpg",
      url: "/porque-buscais-entre-los-muertos-al-que-vive",
      profileURL: "/@yolandaperez",
      embed: "YAYKrd7H6WU",
    },

    {
      title: "Un encuentro con El Resucitado",
      autor: "Yolanda Pérez",
      picture: "/assets/predicadores/yolanda-perez.png",
      date: "04 ABRIL 2021",
      dia: "04",
      mes: "04",
      año: "2021",
      hora: "13",
      minuto: "00",
      desc: "Predicación Manantial de Vida",
      image:
        "/assets/predicadores/yolanda-perez/un-encuentro-con-el-resicitado.jpg",
      url: "/un-encuentro-con-el-resicitado",
      profileURL: "/@yolandaperez",
      embed: "5QpUVnCLeuc",
    },
  ];

  const data = {
    Manantial: manantial,
    PastorIsaac: pastorIsaac,
    PastoraDina: pastoraDina,
    AdrielRamos: adrielRamos,
    AnitaMinchaca: anitaMinchaca,
    EmmanuelAguilar: emmanuelAguilar,
    FlorFernandez: florFernandez,
    FranciscoGarcia: franciscoGarcia,
    FranciscoSerrano: franciscoSerrano,
    JuanPabloRodriguez: juanPabloRodriguez,
    JuanLeyva: juanLeyva,
    KarlaCervantes: karlaCervantes,
    LeonorRuiz: leonorRuiz,
    LuisRios: luisRios,
    MagdielPastrana: magdielPastrana,
    ObedGarcia: obedGarcia,
    OmarMorales: omarMorales,
    OswaldoAli: oswaldoAli,
    VeliaAcevedo: veliaAcevedo,
    WillyMartinez: willyMartinez,
    YolandaPerez: yolandaPerez,
  };

  cache.set(cacheKey, data, 60 * 60); // Cache durante 1 hora

  console.log("Data from API");

  res.status(200).json(data);
}
