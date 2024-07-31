const AUTHORS = [
  {
    name: 'Abdul Alhazred',
    photo:
      'https://images.nightcafe.studio/jobs/JVSCByy9VgybBzEPJ1E6/JVSCByy9VgybBzEPJ1E6--1--771ix.jpg?tr=w-1600,c-at_max',
    biography:
      'Figura legendaria, autor ficticio del Necronomicón, un grimorio de magia negra que ha inspirado numerosas obras de terror.',
  },
  {
    name: 'Adolfo Bioy Casares',
    photo:
      'https://www.planetadelibros.com/usuaris/autores/fotos/13/original/000012495_1_Adolfo_Bioy_Casares.jpg',
    biography:
      'Novelista argentino, conocido por sus colaboraciones con Jorge Luis Borges y por obras como "La invención de Morel".',
  },
  {
    name: 'Albert Camus',
    photo:
      'https://www.planetadelibros.com.ve/usuaris/autores/fotos/12/original/000011052_1_AlbertCamus_202405100045.jpg',
    biography:
      'Filósofo y escritor francés, premio Nobel de Literatura en 1957, reconocido por obras como "El extranjero" y "La peste".',
  },
  {
    name: 'Alexandre Dumas',
    photo: 'https://www.biografiasyvidas.com/biografia/d/fotos/dumas.jpg',
    biography:
      'Novelista francés, famoso por sus novelas históricas como "Los tres mosqueteros" y "El conde de Montecristo".',
  },
  {
    name: 'Antoine de Saint-Exupéry',
    photo:
      'https://www.iwc.com/content/dam/brand/partnerships/saint-exupery/exupery_ecole_militaire_new.jpg.transform.global_image_375_2x.jpeg',
    biography:
      'Escritor y aviador francés, autor del clásico infantil "El principito".',
  },
  {
    name: 'Bram Stoker',
    photo: 'https://www.biografiasyvidas.com/biografia/s/fotos/stoker.jpg',
    biography: 'Novelista irlandés, creador del mítico personaje de Drácula.',
  },
  {
    name: 'C.S. Lewis',
    photo:
      'https://alvaroprian.wordpress.com/wp-content/uploads/2013/11/cs-lewis1.jpg',
    biography:
      'Escritor británico, conocido por las Crónicas de Narnia y sus ensayos teológicos.',
  },
  {
    name: 'Franz Kafka',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/640px-Franz_Kafka%2C_1923.jpg',
    biography:
      'Escritor checo, reconocido por sus novelas existencialistas como "La Metamorfosis".',
  },
  {
    name: 'F. Scott Fitzgerald',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/F_Scott_Fitzgerald_1921.jpg',
    biography:
      'Novelista estadounidense, considerado uno de los grandes autores de la Generación Perdida, famoso por "El gran Gatsby".',
  },
  {
    name: 'Gabriel García Márquez',
    photo:
      'https://elpais.com/elpais/imagenes/2014/04/03/fotorrelato/1396552630_753518_1396553803_album_normal.jpg',
    biography:
      'Novelista colombiano, premio Nobel de Literatura en 1982, padre del realismo mágico con obras como "Cien años de soledad".',
  },
  {
    name: 'Gustave Flaubert',
    photo: 'https://img.txalaparta.eus/Autores/2165-Gustave-Flaubert.jpg',
    biography:
      'Novelista francés, considerado uno de los fundadores del realismo literario, famoso por "Madame Bovary".',
  },
  {
    name: 'Harper Lee',
    photo:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-50358657.jpg',
    biography:
      'Novelista estadounidense, ganadora del Premio Pulitzer por su obra maestra "Matar a un ruiseñor".',
  },
  {
    name: 'Henry James',
    photo:
      'https://espaciodeescritura.com/wp-content/uploads/espaciodeescritura-james-henry-3.jpg',
    biography:
      'Novelista estadounidense, conocido por sus novelas psicológicas y su exploración de la conciencia.',
  },
  {
    name: 'Herman Melville',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Herman_Melville_by_Joseph_O_Eaton.jpg',
    biography:
      'Novelista estadounidense, autor de "Moby Dick", una de las grandes novelas de la literatura universal.',
  },
  {
    name: 'Homero',
    photo:
      'https://hablaconlahistoria.es/wp-content/uploads/2023/10/platon-768x1152.webp',
    biography:
      'Poeta épico griego, autor de la Ilíada y la Odisea, considerados los poemas épicos más importantes de la antigüedad.',
  },
  {
    name: 'Isabel Allende',
    photo:
      'https://media.newyorker.com/photos/64fb90ac673df1e00aeebb40/master/pass/Taladrid-Allende-Final.jpg',
    biography:
      'Novelista chilena, reconocida por sus novelas históricas y mágicas como "La casa de los espíritus".',
  },
  {
    name: 'Jane Austen',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/jane-austen.jpg',
    biography:
      'Novelista inglesa, famosa por sus novelas de costumbres y romances como "Orgullo y prejuicio".',
  },
  {
    name: 'Jean-Paul Sartre',
    photo:
      'https://cdn.britannica.com/76/9476-050-6661C2E1/photograph-Jean-Paul-Sartre-Gisele-Freund-1968.jpg',
    biography:
      'Filósofo y escritor francés, uno de los máximos exponentes del existencialismo.',
  },
  {
    name: 'Joseph Conrad',
    photo:
      'https://www.biografiasyvidas.com/biografia/c/fotos/conrad_joseph.jpg',
    biography:
      'Novelista polaco-británico, conocido por sus novelas marítimas y psicológicas como "El corazón de las tinieblas".',
  },
  {
    name: 'J.R.R. Tolkien',
    photo:
      'https://i0.wp.com/elanillounico.com/wp-content/uploads/2015/03/JRR-Tolkien15.jpg?fit=760%2C1076&ssl=1',
    biography:
      'Filólogo y escritor británico, creador del universo de la Tierra Media y de obras como "El Señor de los Anillos".',
  },
  {
    name: 'León Tolstói',
    photo: 'https://www.ecured.cu/images/9/98/Leon111.jpg',
    biography:
      'Novelista ruso, considerado uno de los más grandes escritores de la historia, autor de "Guerra y paz".',
  },
  {
    name: 'Louisa May Alcott',
    photo:
      'https://historia.nationalgeographic.com.es/medio/2024/05/16/louisa-may-alcott_0c4203f1_240516130630_1280x1634.jpg',
    biography: 'Escritora estadounidense, conocida por su novela "Mujercitas".',
  },
  {
    name: 'Mark Twain',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/640px-Mark_Twain_by_AF_Bradley.jpg',
    biography:
      'Escritor estadounidense, famoso por sus sátiras sociales y sus personajes como Tom Sawyer y Huckleberry Finn.',
  },
  {
    name: 'Miguel de Cervantes',
    photo: 'https://alcalaturismoymas.com/wp-content/uploads/2019/04/0020.jpg',
    biography:
      'Escritor español, autor de "El ingenioso hidalgo don Quijote de la Mancha", considerada la primera novela moderna.',
  },
  {
    name: 'Miguel Otero Silva',
    photo: 'https://www.anecdotashipicas.com/Imagenes/MiguelOteroSilva2.JPG',
    biography:
      'Escritor venezolano, reconocido por sus novelas y cuentos, entre ellos "Casas muertas".',
  },
  {
    name: 'Newton Scamander',
    photo:
      'https://pm1.aminoapps.com/7669/e66d3f663dd17758e8462c6931ccafdae4336d22r1-563-734v2_uhq.jpg',
    biography:
      'Magizoólogo ficticio, protagonista de la saga "Animales fantásticos y dónde encontrarlos".',
  },
  {
    name: 'Oscar Wilde',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated.jpg',
    biography:
      'Dramaturgo, novelista y poeta irlandés, conocido por su ingenio y su estética esteticista.',
  },
  {
    name: 'Robert Louis Stevenson',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Robert_Louis_Stevenson_by_Henry_Walter_Barnett_bw.jpg/800px-Robert_Louis_Stevenson_by_Henry_Walter_Barnett_bw.jpg',
    biography:
      'Novelista escocés, autor de "La isla del tesoro" y "El extraño caso del doctor Jekyll y Mr. Hyde".',
  },
  {
    name: 'Rómulo Gallegos',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/R%C3%B3mulo_Gallegos_1940s.jpg/640px-R%C3%B3mulo_Gallegos_1940s.jpg',
    biography:
      'Novelista venezolano, considerado el padre de la novela venezolana, autor de "Doña Bárbara".',
  },
  {
    name: 'Victor Hugo',
    photo:
      'https://elemblob.blob.core.windows.net/media/victor-hugo5a7b4b28f1ecc_500h.jpg',
    biography:
      'Poeta, dramaturgo y novelista francés, famoso por obras como "Los miserables" y "Nuestra Señora de París".',
  },
];

module.exports = AUTHORS;
