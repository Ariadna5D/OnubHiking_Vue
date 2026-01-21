<script setup>
import HeroVideo from "../components/common/HeroVideo.vue";
import RouteCard from "../components/common/RouteCard.vue";
import SearchBar from "../components/common/SearchBar.vue";

const rutas = [
  {
    title: "Paraje Natural Marismas del Río Piedras",
    distance: "12 km",
    difficulty: "Dificultad moderada",
    audience:
      "Ideal para observar aves en un paisaje de marismas único. Recomendada para familias con niños mayores y mascotas con correa.",
    description:
      "Ruta circular con paisajes de marismas y observación de aves durante todo el recorrido.",
    image: "/images/ruta1.webp",
    link: "#",
  },
  {
    title: "Parque Natural de Doñana",
    distance: "8 km",
    difficulty: "Dificultad fácil",
    audience:
      "Perfecto para todos los niveles, incluyendo niños y personas mayores. Admite mascotas.",
    description:
      "Sendero accesible entre dunas y marismas con gran riqueza de fauna y flora.",
    image: "/images/ruta2.webp",
    link: "#",
  },
  {
    title: "Hornos de Cal",
    distance: "10 km",
    difficulty: "Dificultad moderada",
    audience:
      "Apta para familias activas con niños acostumbrados a caminar. Mascotas bienvenidas.",
    description:
      "Ruta que combina historia natural con patrimonio industrial en un entorno de sierra.",
    image: "/images/ruta3.webp",
    link: "#",
  },
  {
    title: "Senda del Tren Minero y minas del Río Tinto",
    distance: "14 km",
    difficulty: "Dificultad moderada-alta",
    audience:
      "Recomendada para adultos y adolescentes; no adecuada para niños pequeños ni mascotas.",
    description:
      "Itinerario por el paisaje “marciano” de las minas del Río Tinto y antiguo trazado ferroviario.",
    image: "/images/ruta4.webp",
    link: "#",
  },
  {
    title: "Castaño del Robledo y Picos de Aroche",
    distance: "18 km",
    difficulty: "Dificultad alta",
    audience:
      "Solo para senderistas experimentados con buena condición física.",
    description:
      "Ruta exigente con fuertes desniveles y vistas espectaculares de la sierra.",
    image: "/images/ruta5.webp",
    link: "#",
  },
  {
    title: "Ribera del Jabugo",
    distance: "6 km",
    difficulty: "Dificultad fácil",
    audience:
      "Ideal para familias con niños de todas las edades. Terreno llano y sombreado.",
    description:
      "Paseo junto al río Múrtiga, una de las rutas más populares y accesibles de la zona.",
    image: "/images/ruta6.webp",
    link: "#",
  },
  {
    title: "Sendero Charco Malo",
    distance: "5 km",
    difficulty: "Dificultad moderada",
    audience:
      "Apta para familias con niños acostumbrados a caminar. Mascotas con correa.",
    description:
      "Ruta hacia cascadas espectaculares en un entorno muy fotogénico.",
    image: "/images/ruta7.webp",
    link: "#",
  },
  {
    title: "Sendero de Alájar",
    distance: "1,7 km",
    difficulty: "Dificultad fácil",
    audience:
      "Perfecto para iniciarse en el senderismo. Ideal para niños, mayores y mascotas.",
    description:
      "Camino corto y accesible alrededor de Alájar, ideal como primera experiencia.",
    image: "/images/ruta8.webp",
    link: "#",
  },
  {
    title: "Ruta del Bosque Encantado",
    distance: "8 km",
    difficulty: "Dificultad moderada",
    audience:
      "Apta para familias con niños mayores de 8 años y mascotas con experiencia en senderismo.",
    description:
      "Recorrido entre alcornoques, encinas y castaños centenarios en un entorno muy sombrío.",
    image: "/images/ruta9.webp",
    link: "#",
  },
  {
    title: "Sendero el Talenque-Valdelarco",
    distance: "3 km",
    difficulty: "Dificultad fácil",
    audience:
      "Perfecta para toda la familia, incluyendo niños pequeños y mascotas.",
    description:
      "Senda histórica bien señalizada con terreno accesible y vistas de la sierra.",
    image: "/images/ruta10.webp",
    link: "#",
  },
];

const topRutas = [
  {
    rank: 1,
    name: "Ribera del Jabugo",
    km: "4,8 km",
    difficulty: "Media",
    score: "9,8 ★",
  },
  {
    rank: 2,
    name: "Sendero del Charco Malo",
    km: "1,7 km",
    difficulty: "Media",
    score: "9,0 ★",
  },
  {
    rank: 3,
    name: "Sendero Álajar - Los Madtroñeros",
    km: "1,7 km",
    difficulty: "Baja",
    score: "8,7 ★",
  },
  {
    rank: 4,
    name: "Sendero el Talenque-Valdelarco",
    km: "3,0 km",
    difficulty: "Media",
    score: "8,5 ★",
  },
  {
    rank: 5,
    name: "Sendero de la Peña de Arias Montano",
    km: "2,5 km",
    difficulty: "Alta",
    score: "8,3 ★",
  },
];
</script>

<template>
  <div class="container mx-auto px-4 mt-6 grow">
    <HeroVideo
      videoSrc="/videos/consejos_Ed.mp4"
      title="Rutas"
      subtitle="Los senderos más conocidos de Huelva"
    />

    <section class="mt-8 px-15">
      <SearchBar />

      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <RouteCard v-for="ruta in rutas" :key="ruta.title" v-bind="ruta" />
      </div>
    </section>
    <section class="mb-12 px-15">
      <h2 class="text-2xl font-bold text-emerald-950  mb-4">
        Top rutas más visitadas
      </h2>

      <div
        class="overflow-x-auto bg-white  rounded-xl shadow-md border border-gray-100 "
      >
        <table class="min-w-full text-sm">
          <thead class="bg-teal-200 ">
            <tr>
              <th
                class="text-left px-4 py-3 font-semibold text-gray-700 "
              >
                #
              </th>
              <th
                class="text-left px-4 py-3 font-semibold text-gray-700 "
              >
                Ruta
              </th>
              <th
                class="text-left px-4 py-3 font-semibold text-gray-700 "
              >
                Kilómetros
              </th>
              <th
                class="text-left px-4 py-3 font-semibold text-gray-700 "
              >
                Dificultad
              </th>
              <th
                class="text-left px-4 py-3 font-semibold text-gray-700 "
              >
                Puntuación
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="ruta in topRutas"
              :key="ruta.rank"
              class="border-t hover:bg-teal-50 border-gray-100 "
            >
              <td class="px-4 py-3  text-gray-700 ">
                {{ ruta.rank }}
              </td>
              <td class="px-4 py-3 text-gray-900 font-medium">
                {{ ruta.name }}
              </td>
              <td class="px-4 py-3 text-gray-700 ">
                {{ ruta.km }}
              </td>
              <td class="px-4 py-3 text-gray-700 ">
                {{ ruta.difficulty }}
              </td>
              <td class="px-4 py-3 text-gray-900">
                {{ ruta.score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
