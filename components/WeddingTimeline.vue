<template>
  <section class="timeline-section">
    <v-container>
      <div ref="timelineEl" class="timeline" @scroll.passive="onScroll">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-step"
          :data-index="index"
          :ref="(el) => (stepRefs[index] = el)"
        >
          <div class="icon">
            <component :is="item.icon" weight="thin" size="26" />
          </div>
          <div class="time">{{ item.time }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
      </div>

      <div class="pagination" v-if="isMobile">
        <button
          v-for="page in pages"
          :key="page"
          :class="['dot', { active: page === activePage }]"
          @click="scrollToPage(page)"
          aria-label="Ir para página"
        ></button>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import { PhUsers, PhHeart, PhWine, PhForkKnife } from "@phosphor-icons/vue";

const timeline = [
  { label: "Receção", time: "14h00", icon: PhUsers },
  { label: "Cerimónia", time: "15h00", icon: PhHeart },
  { label: "Cocktail", time: "16h30", icon: PhWine },
  { label: "Jantar", time: "20h00", icon: PhForkKnife },
];

const timelineEl = ref(null);
const stepRefs = [];
const activeIndex = ref(0);
const isMobile = ref(false);
const itemsPerPage = ref(1);
let ticking = false;

const pageCount = computed(() =>
  Math.max(1, Math.ceil(timeline.length / itemsPerPage.value))
);
const pages = computed(() =>
  Array.from({ length: pageCount.value }, (_, i) => i)
);
const activePage = computed(() =>
  Math.floor(activeIndex.value / itemsPerPage.value)
);

function updateActiveIndexByScroll() {
  if (!timelineEl.value) return;
  const container = timelineEl.value;
  const center = container.scrollLeft + container.clientWidth / 2;
  const steps = stepRefs.filter(Boolean);
  if (!steps.length) return;
  let closest = 0;
  let minDist = Infinity;
  steps.forEach((el, idx) => {
    const elCenter = el.offsetLeft + el.offsetWidth / 2;
    const dist = Math.abs(elCenter - center);
    if (dist < minDist) {
      minDist = dist;
      closest = idx;
    }
  });
  activeIndex.value = closest;
  ticking = false;
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateActiveIndexByScroll);
}

function scrollTo(index) {
  const container = timelineEl.value;
  const el = stepRefs[index];
  if (!container || !el) return;
  const target =
    el.offsetLeft - (container.clientWidth / 2 - el.offsetWidth / 2);
  container.scrollTo({ left: target, behavior: "smooth" });
  activeIndex.value = index;
}

function scrollToPage(page) {
  const targetIndex = Math.min(page * itemsPerPage.value, timeline.length - 1);
  scrollTo(targetIndex);
}

function checkMobile() {
  isMobile.value = window.innerWidth <= 600;
  itemsPerPage.value = isMobile.value ? 2 : 1;
}

let resizeHandler = () => checkMobile();

onMounted(async () => {
  checkMobile();
  window.addEventListener("resize", resizeHandler);
  await nextTick();
  updateActiveIndexByScroll();
  scrollTo(activeIndex.value);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

:root {
  --slide-percent: 75%;
}

.timeline-section {
  background: vars.$copper-dark;
  text-align: center;
  color: vars.$white-color;
  padding: 2rem 0;
}

.timeline {
  display: flex;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
}

.timeline-step {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  text-align: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.icon {
  width: 66px;
  height: 66px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  background: transparent;
  color: vars.$white-color;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.22s ease;
}

.icon:hover {
  transform: translateY(-3px);
}

.time {
  font-family: vars.$heading-font-family;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: vars.$white-color;
}

.label {
  font-family: vars.$body-font-family;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 900px) {
  .timeline {
    gap: 1.5rem;
  }
  .timeline-step {
    min-width: 160px;
  }
}

@media (max-width: 600px) {
  .timeline {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-inline: calc((100% - var(--slide-percent)) / 2);
    box-sizing: content-box;
    scroll-padding-inline: calc((100% - var(--slide-percent)) / 2);
  }

  .timeline::-webkit-scrollbar {
    display: none;
  }

  .timeline-step {
    flex: 0 0 auto;
    min-width: var(--slide-percent);
    max-width: var(--slide-percent);
    padding: 1rem;
    scroll-snap-align: center;
    border-radius: 12px;
    background: transparent;
    margin: 0 0.5rem;
  }

  .timeline-step[data-index="0"] {
    margin-left: 0;
  }

  .timeline-step[data-index="${timeline.length - 1}"] {
    margin-right: 0;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
}

.dot {
  width: 32px;
  height: 1px;
  padding: 0;
  margin: 0;
  display: block;
  border: none;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 1px;
  cursor: pointer;
  transition: background 0.18s ease;
}

.dot.active {
  background: rgba(255, 255, 255, 0.95);
}
</style>
