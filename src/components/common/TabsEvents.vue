<script setup>
import { ref } from 'vue';
import EventCard from './EventCard.vue';

const activeTab = ref('activos');
const activeEvents = ref([
  { date: '13 Enero 2026', title: 'Salida a Río Tinto', description: 'Haremos una ruta circular de 5km, apto para todas las edades, apúntate! Llevad mucho abrigo.', participants: '18 personas confirmadas' },
  { date: '20 Diciembre 2025', title: 'Ruta de Hornos de Cal', description: 'Nos veremos pronto para desayunar juntos e iniciaremos la marcha... juntos! es apto para todas las edades, no olvideis llevar agua!', participants: '50 personas confirmadas' }
]);
const pastEvents = ref([]); // En construcción
const futureEvents = ref([]); // En construcción

const tabs = [
  { id: 'activos', label: 'Eventos Activos', icon: 'fire' },
  { id: 'anteriores', label: 'Eventos Anteriores', disabled: true },
  { id: 'futuros', label: 'Eventos Futuros', disabled: true }
];
</script>

<template>
  <div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
    <!-- Tabs Header -->
    <div class="border-b border-gray-200 dark:border-gray-700">
      <nav class="flex space-x-1 px-4 -mb-px">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'px-4 py-3 rounded-t-lg text-sm font-semibold transition-all duration-200 flex items-center',
            activeTab === tab.id
              ? 'bg-primary text-white shadow-md'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
          ]"
          :disabled="tab.disabled"
          @click="!tab.disabled && (activeTab = tab.id)"
        >
          <i :class="`fas fa-${tab.icon} mr-2`"></i>
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <!-- Tab Content -->
    <div class="p-6">
      <div v-if="activeTab === 'activos'" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EventCard v-for="event in activeEvents" :key="event.title" v-bind="event" />
      </div>
      <div v-else-if="activeTab === 'anteriores'" class="text-center py-12 text-gray-500 dark:text-gray-400">
        <i class="fas fa-hammer text-4xl mb-4 block"></i>
        <p class="text-lg font-semibold mb-2">En construcción</p>
        <p class="text-sm">Pronto podrás ver eventos anteriores.</p>
      </div>
      <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
        <i class="fas fa-clock text-4xl mb-4 block"></i>
        <p class="text-lg font-semibold mb-2">En construcción</p>
        <p class="text-sm">Próximamente eventos futuros.</p>
      </div>
    </div>
  </div>
</template>
