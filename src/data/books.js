const BOOKS = [
  {
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    cover: 'https://live.staticflickr.com/7868/47606288691_68b2a43cb8_b.jpg',
    description:
      'La obra maestra de Cervantes es una novela sobre un hombre común que se vuelve loco leyendo libros de caballería y decide convertirse en un caballero andante.',
    editorial: 'Editorial Planeta',
    price: 20.99,
  },
  {
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    cover: 'https://www.altamiralibros.com/imagenes/9788491/978849105132.GIF',
    description:
      "Una de las novelas más populares de Austen, 'Orgullo y prejuicio' cuenta la historia de la señorita Elizabeth Bennet y el señor Darcy, y cómo superan sus prejuicios para enamorarse.",
    editorial: 'Penguin Clásicos',
    price: 12.95,
  },
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    cover:
      'https://1.bp.blogspot.com/-P8RTMQN-w1I/U1uC4dp27EI/AAAAAAAAkWs/9umUoSL25R4/s1600/CAS+1.jpg',
    description:
      "La novela más famosa de García Márquez, 'Cien años de soledad', cuenta la historia de la familia Buendía y su ciudad, Macondo, a lo largo de varias generaciones.",
    editorial: 'Sudamericana',
    price: 18.5,
  },
  {
    title: 'Matar a un ruiseñor',
    author: 'Harper Lee',
    cover: 'https://contrapunto.cl/22071/matar-un-ruisenor.jpg',
    description:
      "Ganadora del Premio Pulitzer, 'Matar a un ruiseñor' es la historia de la niña Scout Finch y su padre, el abogado Atticus Finch, mientras defienden a un hombre negro acusado de violación en el sur de los Estados Unidos.",
    editorial: 'Harper Bolsillo',
    price: 11.99,
  },
  {
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    cover:
      'https://dialoguemos.ec/wp-content/uploads/2021/12/madame-bovary-471-414x600.jpg',
    description:
      "Una de las obras más importantes de la literatura francesa, 'Madame Bovary' cuenta la historia de Emma Bovary, una mujer infeliz y aburrida con su vida matrimonial que busca la felicidad en otras cosas.",
    editorial: 'Luna',
    price: 13.5,
  },
  {
    title: 'El gran Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://www.penguinlibros.com/es/1511309/el-gran-gatsby.jpg',
    description:
      "Considerada una obra maestra de la literatura estadounidense, 'El gran Gatsby' es una novela sobre la riqueza, el amor y la obsesión en los años 20 en Nueva York.",
    editorial: 'Debolsillo',
    price: 9.95,
  },
  {
    title: 'La Ilada',
    author: 'Homero',
    cover:
      'https://www.catedra.com/imagenes/libros/grande/9788437621975-iliada.jpg',
    description:
      "La epopeya griega más famosa, 'La Ilíada' cuenta la historia de la guerra de Troya y la lucha del héroe griego Aquiles.",
    editorial: 'Ediciones Cátedra',
    price: 20.0,
  },
  {
    title: 'La Odisea',
    author: 'Homero',
    cover:
      'https://audiolibrosencastellano.com/sites/default/files/l/homero_la-odisea_8437606403.jpg',
    description:
      "La otra epopeya griega famosa, 'La Odisea' cuenta la historia del héroe griego Odiseo y su lucha para regresar a casa después de la guerra de Troya.",
    editorial: 'Ediciones Cátedra',
    price: 20.0,
  },
  {
    title: 'Los miserables',
    author: 'Victor Hugo',
    cover:
      'https://www.planetadelibros.com.mx/usuaris/libros/fotos/142/m_libros/141294_los-miserables_9788408015796.jpg',
    description:
      "'Los miserables' es una novela épica de Hugo que cuenta la historia de Jean Valjean, un exconvicto que lucha por redimirse en la sociedad francesa del siglo XIX.",
    editorial: 'Editorial Planeta',
    price: 23.99,
  },
  {
    title: 'Anna Karenina',
    author: 'León Tolstói',
    cover: 'https://www.penguinlibros.com/es/1513936/anna-karenina.jpg',
    description:
      "'Anna Karenina' es una obra maestra de la literatura rusa y cuenta la historia de una mujer infelizmente casada que se enamora de un oficial del ejército.",
    editorial: 'Penguin Clásicos',
    price: 16.95,
  },
  {
    title: 'La metamorfosis',
    author: 'Franz Kafka',
    cover:
      'https://www.alianzaeditorial.es/imagenes/libros/grande/9788420651361-la-metamorfosis.jpg',
    description:
      "Uno de los trabajos más influyentes de Kafka, 'La metamorfosis' cuenta la historia de Gregor Samsa, un vendedor que se despierta una mañana convertido en un insecto.",
    editorial: 'Alianza Editorial',
    price: 9.95,
  },
  {
    title: 'El retrato de Dorian Gray',
    author: 'Oscar Wilde',
    cover:
      'https://www.penguinlibros.com/es/2445622/el-retrato-de-dorian-gray.jpg',
    description:
      "Una novela sobre la belleza y la corrupción, 'El retrato de Dorian Gray' cuenta la historia de un joven rico que, después de ver su retrato envejecer en su lugar, se sumerge en una vida de pecado y depravación.",
    editorial: 'Penguin Clásicos',
    price: 10.95,
  },
  {
    title: 'El extranjero',
    author: 'Albert Camus',
    cover:
      'https://m.media-amazon.com/images/I/61RLAWzw+rL._AC_UF1000,1000_QL80_.jpg',
    description:
      "'El extranjero' es una novela filosófica que cuenta la historia de Meursault, un empleado de oficina francés que mata a un hombre árabe enla playa y luego es juzgado por su crimen y su aparente indiferencia ante la vida.",
    editorial: 'Alianza Editorial',
    price: 11.95,
  },
  {
    title: 'El proceso',
    author: 'Franz Kafka',
    cover:
      'https://www.alianzaeditorial.es/imagenes/libros/grande/9788420678191-el-proceso.jpg',
    description:
      "Otra obra influyente de Kafka, 'El proceso' es una novela sobre la burocracia y la opresión del individuo por parte del sistema.",
    editorial: 'Alianza Editorial',
    price: 10.95,
  },
  {
    title: 'Las aventuras de Tom Sawyer',
    author: 'Mark Twain',
    cover:
      'https://www.penguinlibros.com/es/2495100/las-aventuras-de-tom-sawyer.jpg',
    description:
      "Una de las obras más populares de Twain, 'Las aventuras de Tom Sawyer' cuenta la historia de un niño travieso en la América rural del siglo XIX y sus aventuras junto a su amigo Huckleberry Finn.",
    editorial: 'Penguin Clásicos',
    price: 12.95,
  },
  {
    title: 'La isla del tesoro',
    author: 'Robert Louis Stevenson',
    cover: 'https://www.penguinlibros.com/es/1513886/la-isla-del-tesoro.jpg',
    description:
      'Una novela de aventuras clásica que cuenta la historia del joven Jim Hawkins y su búsqueda del tesoro en una isla remota con el pirata Long John Silver.',
    editorial: 'Penguin Clásicos',
    price: 11.95,
  },
  {
    title: 'El conde de Montecristo',
    author: 'Alexandre Dumas',
    cover:
      'https://www.penguinlibros.com/es/2013137/el-conde-de-montecristo.jpg',
    description:
      'Una novela de venganza clásica que cuenta la historia del joven Edmond Dantès, quien es traicionado y encarcelado injustamente, y su búsqueda de venganza contra aquellos que lo hicieron sufrir.',
    editorial: 'Penguin Clásicos',
    price: 21.95,
  },
  {
    title: 'Drácula',
    author: 'Bram Stoker',
    cover:
      'https://www.penguinlibros.com/es/1497794/dracula-los-mejores-clasicos.jpg',
    description:
      'Una novela de terror clásica que cuenta la historia del Conde Drácula y su lucha contra un grupo de personas que intentan acabar con él.',
    editorial: 'Penguin Clásicos',
    price: 12.95,
  },
  {
    title: 'El retrato de una dama',
    author: 'Henry James',
    cover: 'https://www.penguinlibros.com/es/1514262/retrato-de-una-dama.jpg',
    description:
      'Una novela de la alta sociedad que cuenta la historia de Isabel Archer, una joven americana que se muda a Europa y se encuentra enredada en una red de intriga y manipulación.',
    editorial: 'Random House',
    price: 16.95,
  },
  {
    title: 'El corazón de las tinieblas',
    author: 'Joseph Conrad',
    cover:
      'https://www.alianzaeditorial.es/imagenes/libros/grande/9788420669809-el-corazon-de-las-tinieblas.jpg',
    description:
      'Una novela corta que cuenta la historia del capitán Marlow, quien navega por el río Congo en busca de un misterioso comerciante llamado Kurtz, y descubre los horrores del colonialismo y la naturaleza humana.',
    editorial: 'Alianza Editorial',
    price: 9.95,
  },
  {
    title: 'La náusea',
    author: 'Jean-Paul Sartre',
    cover:
      'https://www.alianzaeditorial.es/imagenes/libros/grande/9788420652764-la-nausea.jpg',
    description:
      'Una novela filosófica que cuenta la historia de Antoine Roquentin, un escritor que experimenta una profunda sensación de náusea y alienación en su vida cotidiana.',
    editorial: 'Alianza Editorial',
    price: 11.95,
  },
  {
    title: 'Mujercitas',
    author: 'Louisa May Alcott',
    cover:
      'https://www.penguinlibros.com/es/1921164/mujercitas-edicion-conmemorativa.jpg',
    description:
      'Una novela que cuenta la historia de las cuatro hermanas March y sus experiencias de crecimiento y madurez durante la Guerra Civil estadounidense.',
    editorial: 'Penguin Clásicos',
    price: 9.95,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    cover:
      'https://m.media-amazon.com/images/I/91mq5khI9-L._AC_UF1000,1000_QL80_.jpg',
    description:
      'Una novela que cuenta la historia del capitán Ahab y su obsesión por cazar a la ballena blanca, y que es considerada una obra maestra de la literatura estadounidense.',
    editorial: 'Penguin Clásicos',
    price: 14.95,
  },
  {
    title: 'La guerra y la paz',
    author: 'León Tolstói',
    cover: 'https://www.penguinlibros.com/es/1488746/guerra-y-paz.jpg',
    description:
      'Una novela que cuenta la historia de varias familias aristocráticas rusas durante las guerras napoleónicas, y que es considerada una de las obras cumbre de la literatura universal.',
    editorial: 'Random House',
    price: 24.95,
  },
  {
    title: 'Sentido y sensibilidad',
    author: 'Jane Austen',
    cover:
      'https://www.penguinlibros.com/es/1513913/sentido-y-sensibilidad-edicion-conmemorativa.jpg',
    description:
      'Una novela que cuenta la historia de las hermanas Dashwood y sus experiencias en el amor y la sociedad en la Inglaterra del siglo XIX.',
    editorial: 'Penguin Clásicos',
    price: 9.95,
  },
  {
    title: 'Emma',
    author: 'Jane Austen',
    cover:
      'https://m.media-amazon.com/images/I/91PEkzhb80L._AC_UF1000,1000_QL80_.jpg',
    description:
      'Una novela de comedia romántica que cuenta la historia de Emma Woodhouse y sus intentos de hacer de casamentera en su pequeña ciudad inglesa.',
    editorial: 'Penguin Clásicos',
    price: 10.95,
  },
  {
    title: 'El amor en los tiempos del cólera',
    author: 'Gabriel García Márquez',
    cover:
      'https://www.penguinlibros.com/es/2281021/el-amor-en-los-tiempos-del-colera-edicion-ilustrada.jpg',
    description:
      'Una novela que cuenta la historia de amor entre Florentino Ariza y Fermina Daza, que se extiende por más de 50 años, en la ciudad caribeña de Cartagena.',
    editorial: 'Penguin Clásicos',
    price: 12.95,
  },
  {
    title: 'Crónica de una muerte anunciada',
    author: 'Gabriel García Márquez',
    cover:
      'https://www.unitheque.com/Intermediaire1/CouvertureC/R/9788497592437-cronica-muerte-anunciada_g.jpg',
    description:
      'Una novela que cuenta la historia de un asesinato en un pequeño pueblo colombiano, y cómo todos los habitantes conocían los planes del asesinato, pero nadie hizo nada para evitarlo.',
    editorial: 'Debolsillo',
    price: 9.95,
  },
  {
    title: 'Doña Bárbara',
    author: 'Rómulo Gallegos',
    cover:
      'https://adriw.com/wp-content/uploads/2020/02/do%C3%B1a-barbara-libro-18.jpg',
    description:
      'Una novela que cuenta la historia de la lucha entre Doña Bárbara, una terrateniente sin escrúpulos, y Santos Luzardo, un abogado que busca recuperar sus tierras y su honor.',
    editorial: 'Andrés Bello',
    price: 10.95,
  },
  {
    title: 'La casa de los espíritus',
    author: 'Isabel Allende',
    cover: 'https://editorial.tirant.com/high/9788401343438.jpg',
    description:
      'Una novela que cuenta la historia de la familia Trueba en Chile, y su lucha contra la opresión política y social en el siglo XX, con un toque mágico y poético.',
    editorial: 'Plaza & Janés',
    price: 14.95,
  },
  {
    title: 'Los pasos perdidos',
    author: 'Miguel Otero Silva',
    cover:
      'https://m.media-amazon.com/images/I/51EHtVYVCYL._AC_UF1000,1000_QL80_.jpg',
    description:
      'Una novela que cuenta la historia de la familia Liscano en Venezuela, y su lucha contra la dictadura de Juan Vicente Gómez a principios del siglo XX.',
    editorial: 'Lectorum',
    price: 12.95,
  },
  {
    title: 'La invención de Morel',
    author: 'Adolfo Bioy Casares',
    cover: 'https://m.media-amazon.com/images/I/81KtTUKjcYL.jpg',
    description:
      'Una novela que cuenta la historia de un hombre que se encuentra en una isla misteriosa, y su encuentro con una mujer que parece no darse cuenta de su presencia.',
    editorial: 'Emecé Editores',
    price: 10.95,
  },
  {
    title: 'El Libro de las Bestias Fantásticas',
    author: 'Newton Scamander',
    cover:
      'https://static.wikia.nocookie.net/esharrypotter/images/8/89/Animales_Fant%C3%A1sticos_y_D%C3%B3nde_Encontrarlos_2009.jpg/revision/latest/scale-to-width/360?cb=20110728035143',
    description:
      'Una guía completa sobre las criaturas mágicas que habitan nuestro mundo.',
    editorial: 'Salamandra',
    price: 29.99,
  },
  {
    title: 'El Necronomicón',
    author: 'Abdul Alhazred',
    cover:
      'https://images.cdn3.buscalibre.com/fit-in/360x360/36/26/36263f832494dc84a92df3491586865c.jpg',
    description:
      'Un antiguo grimorio que contiene conocimientos prohibidos sobre magia negra.',
    editorial: 'La factoría de ideas',
    price: 15.66,
  },
  {
    title: 'Las Crónicas de Narnia',
    author: 'C.S. Lewis',
    cover: 'https://www.libreriagenesis.net/libros/5375.jpg',
    description:
      'Una saga épica que narra las aventuras de cuatro hermanos en un mundo mágico.',
    editorial: 'Editorial Planeta',
    price: 17.99,
  },
  {
    title: 'El Hobbit',
    author: 'J.R.R. Tolkien',
    cover:
      'https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg',
    description:
      'La historia de un hobbit que se embarca en una aventura épica.',
    editorial: 'Editorial Planeta',
    price: 20.99,
  },
  {
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg',
    description: 'Una fábula poética sobre la amistad, el amor y la vida.',
    editorial: 'Emecé Editores',
    price: 13.99,
  },
];

module.exports = BOOKS;
