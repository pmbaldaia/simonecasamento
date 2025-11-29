<template>
  <v-container fluid class="alojamento-section">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="section-title mb-10">Alojamento</h2>

        <div ref="alojamentoWrap" class="alojamento-wrap">
          <div
            ref="alojamentoEl"
            class="alojamento-list"
            :style="{ transform: `translateX(${translateX}px)` }"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend.passive="onTouchEnd"
            @mousedown.prevent="onMouseDown"
          >
            <div
              v-for="(hotel, index) in alojamentos"
              :key="index"
              class="alojamento-card"
              :ref="(el) => (cardRefs[index] = el)"
              :data-index="index"
            >
              <p class="hotel-nome">{{ hotel.nome }}</p>
              <v-btn
                :href="hotel.link"
                target="_blank"
                color="#503e36"
                variant="tonal"
                class="ver-btn"
              >
                Ver Alojamento
              </v-btn>
            </div>
          </div>
        </div>

        <div class="pagination" v-if="isMobile">
          <button
            v-for="page in pages"
            :key="page"
            class="dot"
            :class="{ active: page === activePage }"
            @click="scrollToPage(page)"
            aria-label="Ir para página"
          ></button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from "vue";

const alojamentos = [
  {
    nome: "Hotel Axis Vermar Conference & Beach Hotel",
    link: "https://www.axishoteis.com/axis-vermar.html",
  },
  {
    nome: "Grande Hotel da Póvoa",
    link: "https://www.grandehoteldapovoa.com/",
  },
  {
    nome: "Hotel Contriz",
    link: "http://hotel-contriz.com.es/",
  },
];

const alojamentoWrap = ref(null);
const alojamentoEl = ref(null);
const cardRefs = [];
const isMobile = ref(false);
const itemsPerPage = ref(1);
const activeIndex = ref(0);
const translateX = ref(0);

let isPointerDown = false;
let pointerStartX = 0;
let pointerLastX = 0;
let pointerDelta = 0;

const pageCount = computed(() =>
  Math.max(1, Math.ceil(alojamentos.length / itemsPerPage.value))
);
const pages = computed(() =>
  Array.from({ length: pageCount.value }, (_, i) => i)
);
const activePage = computed(() =>
  Math.floor(activeIndex.value / itemsPerPage.value)
);

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function calcBounds() {
  const wrap = alojamentoWrap.value;
  const el = alojamentoEl.value;
  if (!wrap || !el) return { min: 0, max: 0 };
  const cards = cardRefs.filter(Boolean);
  if (!cards.length) return { min: 0, max: 0 };
  const first = cards[0];
  const last = cards[cards.length - 1];
  const style = getComputedStyle(wrap);
  const paddingLeft = parseFloat(style.paddingLeft || 0);
  const paddingRight = parseFloat(style.paddingRight || 0);
  const wrapW = wrap.clientWidth;
  const listW = el.scrollWidth;
  if (listW <= wrapW) {
    const centerOffset = (wrapW - listW) / 2;
    return { min: centerOffset, max: centerOffset };
  }
  const max = paddingLeft - first.offsetLeft;
  const min = wrapW - paddingRight - (last.offsetLeft + last.offsetWidth);
  return { min, max };
}

function updateTranslateForIndex(index, smooth = true) {
  const wrap = alojamentoWrap.value;
  const el = alojamentoEl.value;
  const card = cardRefs[index];
  if (!wrap || !el || !card) return;
  const style = getComputedStyle(wrap);
  const paddingLeft = parseFloat(style.paddingLeft || 0);
  const wrapW = wrap.clientWidth;
  const listW = el.scrollWidth;
  let target;
  if (listW <= wrapW) {
    target = (wrapW - listW) / 2;
  } else {
    target = paddingLeft - card.offsetLeft;
    const { min, max } = calcBounds();
    target = clamp(target, min, max);
  }
  if (smooth) {
    el.style.transition = "transform 320ms cubic-bezier(.22,.9,.36,1)";
    void el.offsetWidth;
    translateX.value = target;
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 350);
  } else {
    translateX.value = target;
  }
}

function updateActiveIndexByTranslate() {
  const wrap = alojamentoWrap.value;
  const cards = cardRefs.filter(Boolean);
  if (!wrap || !cards.length) return;
  const style = getComputedStyle(wrap);
  const paddingLeft = parseFloat(style.paddingLeft || 0);
  const visibleLeft = -translateX.value + paddingLeft;
  const visibleCenter = visibleLeft + wrap.clientWidth / 2;
  let closest = 0;
  let minDist = Infinity;
  cards.forEach((el, idx) => {
    const elCenter = el.offsetLeft + el.offsetWidth / 2;
    const dist = Math.abs(elCenter - visibleCenter);
    if (dist < minDist) {
      minDist = dist;
      closest = idx;
    }
  });
  activeIndex.value = closest;
}

function scrollTo(index) {
  index = clamp(index, 0, alojamentos.length - 1);
  updateTranslateForIndex(index, true);
  activeIndex.value = index;
}

function scrollToPage(page) {
  const targetIndex = clamp(
    page * itemsPerPage.value,
    0,
    alojamentos.length - 1
  );
  scrollTo(targetIndex);
}

function checkMobile() {
  isMobile.value = window.innerWidth <= 768;
  itemsPerPage.value = isMobile.value ? 2 : 1;
}

let resizeHandler = () => {
  checkMobile();
  nextTick(() => updateTranslateForIndex(activeIndex.value, false));
};

onMounted(async () => {
  checkMobile();
  window.addEventListener("resize", resizeHandler);
  await nextTick();
  updateTranslateForIndex(activeIndex.value, false);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
});

function onTouchStart(e) {
  isPointerDown = true;
  pointerStartX = e.touches ? e.touches[0].clientX : e.clientX;
  pointerLastX = pointerStartX;
  pointerDelta = 0;
  if (alojamentoEl.value) alojamentoEl.value.style.transition = "";
}

function onTouchMove(e) {
  if (!isPointerDown) return;
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  pointerDelta = x - pointerLastX;
  pointerLastX = x;
  translateX.value += pointerDelta;
  const { min, max } = calcBounds();
  translateX.value = clamp(translateX.value, min - 60, max + 60);
}

function onTouchEnd() {
  if (!isPointerDown) return;
  isPointerDown = false;
  updateActiveIndexByTranslate();
  updateTranslateForIndex(activeIndex.value, true);
}

function onMouseDown(e) {
  isPointerDown = true;
  pointerStartX = e.clientX;
  pointerLastX = pointerStartX;
  pointerDelta = 0;
  if (alojamentoEl.value) alojamentoEl.value.style.transition = "";
  const onMouseMove = (moveEvent) => {
    if (!isPointerDown) return;
    const x = moveEvent.clientX;
    pointerDelta = x - pointerLastX;
    pointerLastX = x;
    translateX.value += pointerDelta;
    const { min, max } = calcBounds();
    translateX.value = clamp(translateX.value, min - 60, max + 60);
  };
  const onMouseUp = () => {
    isPointerDown = false;
    updateActiveIndexByTranslate();
    updateTranslateForIndex(activeIndex.value, true);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
}

watch([itemsPerPage], () => {
  nextTick(() => updateTranslateForIndex(activeIndex.value, false));
});
</script>

<style scoped lang="scss">
.alojamento-section {
  color: #3e3e3e;
  text-align: center;
  .section-title {
    font-size: 2rem;
    color: #503e36;
    letter-spacing: 1px;
  }
  .alojamento-wrap {
    padding-bottom: 1rem;
    overflow: hidden;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .alojamento-list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    min-width: max-content;
    padding: 0;
    transition: all 0.3s ease;
    will-change: transform;
    user-select: none;
  }
  .alojamento-card {
    background: #ffffff;
    border: 1px solid rgba(197, 164, 109, 0.25);
    border-radius: 1.25rem;
    padding: 2rem 1.75rem;
    min-width: 260px;
    width: 260px;
    box-shadow: 0 6px 18px rgba(197, 164, 109, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 28px rgba(197, 164, 109, 0.25);
      background: linear-gradient(180deg, #fffdfb 0%, #fff7f0 100%);
    }
    .hotel-nome {
      font-family: "Playfair Display", serif;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #3e3e3e;
    }
    .ver-btn {
      text-transform: none;
      font-weight: 500;
      border-radius: 9999px;
      padding: 0.5rem 1.25rem;
      transition: all 0.3s ease;
      margin-top: auto;
      align-self: center;
      &:hover {
        background-color: #c5a46d !important;
        color: #fff !important;
      }
    }
  }
  @media (max-width: 960px) {
    .alojamento-list {
      gap: 1.5rem;
    }
    .alojamento-card {
      width: 220px;
      min-width: 220px;
      padding: 1.75rem 1.25rem;
      .hotel-nome {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 768px) {
    .alojamento-list {
      justify-content: flex-start !important;
    }
    .alojamento-card {
      width: 200px;
      min-width: 200px;
      padding: 1.5rem 1rem;
      .hotel-nome {
        font-size: 1.1rem;
      }
      .ver-btn {
        font-size: 0.85rem;
      }
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
    background: rgba(62, 62, 62, 0.18);
    border-radius: 1px;
    cursor: pointer;
    transition: background 0.18s ease;
  }
  .dot.active {
    background: rgba(197, 164, 109, 0.95);
  }
}
</style>
