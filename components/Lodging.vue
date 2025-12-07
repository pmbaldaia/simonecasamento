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
            @pointerdown="onPointerDown"
            @click="onCardClick"
            tabindex="0"
            @keydown.left.prevent="scrollTo(activeIndex - 1)"
            @keydown.right.prevent="scrollTo(activeIndex + 1)"
          >
            <div
              v-for="(hotel, index) in alojamentos"
              :key="index"
              class="alojamento-card"
              :ref="(el) => setCardRef(el, index)"
              :data-index="index"
            >
              <p class="hotel-nome">{{ hotel.nome }}</p>
              <v-btn
                type="button"
                @click.stop="openLink(hotel.link)"
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
    nome: "Hotel Costa Verde",
    link: "https://www.booking.com/hotel/pt/costa-verde.pt-pt.html",
  },
  {
    nome: "Hotel Torre Mar",
    link: "https://www.booking.com/hotel/pt/torre-mar.pt-pt.html",
  },
  {
    nome: "Varzinn Hotel",
    link: "https://www.booking.com/hotel/pt/sol-povoa.pt-pt.html",
  },
  {
    nome: "THE ONE Grand Hotel da Póvoa",
    link: "https://www.booking.com/hotel/pt/grande-da-povoa.pt-pt.html",
  },
  {
    nome: "São Félix Hotel Hillside & Nature",
    link: "https://www.booking.com/hotel/pt/sao-felix-hotel-hillside-nature.pt-pt.html",
  },
  {
    nome: "Tivoli Estela Golf & Lodges Porto",
    link: "https://www.booking.com/hotel/pt/tivoli-estela-golf-amp-lodges-porto.pt-pt.html",
  },
];

const alojamentoWrap = ref(null);
const alojamentoEl = ref(null);
const cardRefs = ref([]);
const isMobile = ref(false);
const itemsPerPage = ref(1);
const activeIndex = ref(0);
const translateX = ref(0);

let isPointerDown = false;
let pointerId = null;
let startX = 0;
let lastX = 0;
let lastTime = 0;
let velocity = 0;
let dragDistance = 0;
let preventClick = false;

const VELOCITY_THRESHOLD = 0.45;
const DISTANCE_THRESHOLD = 60;
const OVERSCROLL = 60;

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

function setCardRef(el, idx) {
  if (el) {
    cardRefs.value[idx] = el;
  } else {
    delete cardRefs.value[idx];
  }
}

function calcBounds() {
  const wrap = alojamentoWrap.value;
  const el = alojamentoEl.value;
  const cards = cardRefs.value.filter(Boolean);
  if (!wrap || !el || !cards.length) return { min: 0, max: 0 };

  const style = getComputedStyle(wrap);
  const paddingLeft = parseFloat(style.paddingLeft || "0") || 0;
  const paddingRight = parseFloat(style.paddingRight || "0") || 0;
  const wrapW = wrap.clientWidth;
  const listW = el.scrollWidth;

  if (listW <= wrapW) {
    const centerOffset = (wrapW - listW) / 2;
    return { min: centerOffset, max: centerOffset };
  }

  const first = cards[0];
  const last = cards[cards.length - 1];
  const max = paddingLeft - first.offsetLeft;
  const min = wrapW - paddingRight - (last.offsetLeft + last.offsetWidth);
  return { min, max };
}

function updateTranslateForIndex(index, smooth = true) {
  const wrap = alojamentoWrap.value;
  const el = alojamentoEl.value;
  const cards = cardRefs.value;
  const card = cards[index];
  if (!wrap || !el || !card) return;

  const style = getComputedStyle(wrap);
  const paddingLeft = parseFloat(style.paddingLeft || "0") || 0;
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
  const cards = cardRefs.value.filter(Boolean);
  if (!wrap || !cards.length) return;

  const style = getComputedStyle(wrap);
  const paddingLeft = parseFloat(style.paddingLeft || "0") || 0;
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
  activeIndex.value = index;
  updateTranslateForIndex(index, true);
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

const resizeHandler = () => {
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

function onPointerDown(e) {
  if (e.button && e.button !== 0) return;
  isPointerDown = true;
  pointerId = e.pointerId;
  startX = e.clientX;
  lastX = startX;
  lastTime = performance.now();
  velocity = 0;
  dragDistance = 0;
  preventClick = false;

  const el = alojamentoEl.value;
  if (el) {
    try {
      el.setPointerCapture(pointerId);
    } catch {}
    el.style.transition = "";
  }

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
}

function onPointerMove(e) {
  if (!isPointerDown || e.pointerId !== pointerId) return;

  const x = e.clientX;
  const now = performance.now();
  const dt = now - lastTime || 1;
  const dx = x - lastX;
  velocity = dx / dt;

  lastX = x;
  lastTime = now;

  dragDistance = x - startX;

  translateX.value += dx;

  const { min, max } = calcBounds();
  translateX.value = clamp(
    translateX.value,
    min - OVERSCROLL,
    max + OVERSCROLL
  );

  if (Math.abs(dragDistance) > 8) {
    preventClick = true;
  }
}

function onPointerUp(e) {
  if (!isPointerDown || e.pointerId !== pointerId) return;

  isPointerDown = false;
  const el = alojamentoEl.value;
  if (el) {
    try {
      el.releasePointerCapture(pointerId);
    } catch {}
  }

  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("pointerup", onPointerUp);
  window.removeEventListener("pointercancel", onPointerUp);

  const absVelocity = Math.abs(velocity);
  const absDrag = Math.abs(dragDistance);
  const direction = dragDistance < 0 ? 1 : -1;

  updateActiveIndexByTranslate();
  let targetIndex = activeIndex.value;

  if (absVelocity > VELOCITY_THRESHOLD) {
    const step = Math.min(2, Math.round(absVelocity / VELOCITY_THRESHOLD));
    targetIndex = clamp(
      targetIndex + step * direction,
      0,
      alojamentos.length - 1
    );
  } else if (absDrag > DISTANCE_THRESHOLD) {
    targetIndex = clamp(targetIndex + 1 * direction, 0, alojamentos.length - 1);
  }

  updateTranslateForIndex(targetIndex, true);
  activeIndex.value = targetIndex;

  setTimeout(() => {
    preventClick = false;
  }, 250);
}

function onCardClick(evt) {
  if (preventClick) {
    evt.stopPropagation();
    evt.preventDefault();
  }
}

function openLink(url) {
  if (!url) return;
  window.open(url, "_blank", "noopener");
}

watch([() => alojamentos.length, () => itemsPerPage.value], () => {
  nextTick(() => {
    cardRefs.value = cardRefs.value.slice(0, alojamentos.length);
    updateTranslateForIndex(activeIndex.value, false);
  });
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.alojamento-section {
  color: #3e3e3e;
  text-align: center;

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
    will-change: transform;
    user-select: none;
    cursor: grab;
  }

  .alojamento-card {
    background: #ffffff;
    border: 1px solid rgba(197, 164, 109, 0.25);
    border-radius: 1.25rem;
    padding: 2rem 1.75rem;
    min-width: 260px;
    width: 260px;
    box-shadow: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    touch-action: pan-y;

    &:hover {
      box-shadow: none;
      border: 1px solid #503e36;
    }

    .hotel-nome {
      font-family: vars.$heading-font-family;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #3e3e3e;
      font-weight: bold;
    }

    .ver-btn {
      text-transform: none;
      font-weight: 500;
      font-family: vars.$heading-font-family;
      border-radius: 9999px;
      padding: 0.5rem 1.25rem;
      transition: all 0.3s ease;
      margin-top: auto;
      align-self: center;

      &:hover {
        box-shadow: none;
        border: 1px solid #503e36;
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
    background: #3e3e3e;
  }
}
</style>
