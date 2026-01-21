<script setup>
import { ref, onMounted } from "vue";
import EventCard from "./EventCard.vue";
import { Flame, Hammer, Clock } from "lucide-vue-next";

// Asegúrate de importar los componentes si no los registraste globalmente
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

const isLoading = ref(true);

const activeEvents = ref([
  {
    date: "13 Enero 2026",
    title: "Salida a Río Tinto",
    description:
      "Haremos una ruta circular de 5km, apto para todas las edades...",
    participants: "18 personas confirmadas",
  },
  {
    date: "20 Diciembre 2025",
    title: "Ruta de Hornos de Cal",
    description: "Nos veremos pronto para desayunar juntos...",
    participants: "50 personas confirmadas",
  },
]);

const tabs = ref([
  { id: "activos", label: "Eventos Activos", icon: Flame, disabled: false },
  {
    id: "anteriores",
    label: "Eventos Anteriores",
    icon: Hammer,
    disabled: true,
  },
  { id: "futuros", label: "Eventos Futuros", icon: Clock, disabled: true },
]);

onMounted(() => {
  setTimeout(() => (isLoading.value = false), 1500);
});
</script>

<template>
  <div
    class="w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
  >
    <Tabs value="activos">
      <div class="border-b border-gray-200 bg-gray-50/30 overflow-x-auto">
        <TabList class="flex flex-row! items-center min-w-full">
          <Tab
            v-for="tab in tabs"
            :key="tab.id"
            :value="tab.id"
            :disabled="tab.disabled"
            class="flex-1 flex items-center justify-center gap-2 px-4 py-5 font-bold transition-all duration-300 border-b-2 cursor-pointer whitespace-nowrap data-active:border-emerald-500 data-active:text-emerald-600 data-active:bg-white text-gray-400 border-transparent hover:text-gray-600 disabled:opacity-30"
          >
            <component :is="tab.icon" :size="20" />
            <span class="text-xs sm:text-sm md:text-base">{{ tab.label }}</span>
          </Tab>
        </TabList>
      </div>

      <TabPanels class="p-6">
        <TabPanel value="activos">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <template v-if="isLoading">
              <div
                v-for="i in 2"
                :key="i"
                class="border border-gray-100 rounded-xl p-5 animate-pulse bg-gray-50/50"
              >
                <div class="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div class="h-7 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div class="space-y-2 text">
                  <div class="h-3 bg-gray-200 rounded w-full"></div>
                  <div class="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </template>
            <template v-else>
              <EventCard
                v-for="event in activeEvents"
                :key="event.title"
                v-bind="event"
              />
            </template>
          </div>
        </TabPanel>

        <TabPanel value="anteriores">
          <div class="text-center py-16 text-gray-400 font-medium">
            No hay eventos para mostrar.
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
:deep([role="tablist"]) {
  display: flex !important;
  flex-direction: row !important;
  width: 100% !important;
}

:deep([role="tabpanel"]:not([data-p-active="true"])) {
  display: none !important;
}

.overflow-x-auto {
  scrollbar-width: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
