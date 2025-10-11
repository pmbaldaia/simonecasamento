<script setup>
import { PhInstagramLogo, PhFacebookLogo } from "@phosphor-icons/vue";
</script>

<template>
  <footer
    class="w-full mt-12 rounded-lg py-12 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300 px-6 sm:px-12 md:px-20"
  >
    <div class="max-w-screen-xl mx-auto">
      <hr
        class="border-t-2 border-pink-300 dark:border-pink-700 my-8 w-full mx-auto"
      />

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-2xl font-serif font-bold mb-2 dark:text-pink-400">
            Sobre
          </h3>
          <div
            class="w-12 border-b-2 border-pink-600 dark:border-pink-400 mb-4"
          ></div>
          <p class="text-sm leading-relaxed font-serif">
            Somos Ana & Henrique, apaixonados e prontos para celebrar o nosso
            amor com amigos e familiares neste dia inesquecível.
          </p>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-2xl font-serif font-bold mb-2 dark:text-pink-400">
            Links Úteis
          </h3>
          <div
            class="w-12 border-b-2 border-pink-600 dark:border-pink-400 mb-4"
          ></div>
          <ul class="space-y-3 text-sm font-serif">
            <li>
              <a
                href="/rsvp"
                class="transition-colors duration-300 dark:text-pink-300 hover:text-pink-500 hover:underline"
              >
                Confirmar Presença
              </a>
            </li>
            <li>
              <a
                href="/detalhes"
                class="transition-colors duration-300 dark:text-pink-300 hover:text-pink-500 hover:underline"
              >
                Detalhes do Evento
              </a>
            </li>
            <li>
              <a
                href="/politicas/privacidade"
                class="transition-colors duration-300 dark:text-pink-300 hover:text-pink-500 hover:underline"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="/politicas/servico"
                class="transition-colors duration-300 dark:text-pink-300 hover:text-pink-500 hover:underline"
              >
                Termos de Serviço
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-2xl font-serif font-bold mb-2 dark:text-pink-400">
            Redes Sociais
          </h3>
          <div
            class="w-12 border-b-2 border-pink-600 dark:border-pink-400 mb-4"
          ></div>
          <!--
          <ul class="space-y-3 text-sm font-serif">
            <li>
              <a
                href="https://www.facebook.com/gdcscasteloes/"
                target="_blank"
                class="flex items-center space-x-3 dark:text-pink-300 hover:text-pink-500 hover:underline transition-colors duration-300"
              >
                <PhFacebookLogo class="w-6 h-6 fill-current" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gdcsscasteloes/"
                target="_blank"
                class="flex items-center space-x-3 dark:text-pink-300 hover:text-pink-500 hover:underline transition-colors duration-300"
              >
                <PhInstagramLogo class="w-6 h-6 fill-current" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
          -->
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-2xl font-serif font-bold mb-2 dark:text-pink-400">
            Contacto
          </h3>
          <div
            class="w-12 border-b-2 border-pink-600 dark:border-pink-400 mb-4"
          ></div>
          <p class="text-sm leading-relaxed font-serif">
            Tens dúvidas ou só queres mandar um "Olá"?<br />
            Envia-nos uma mensagem para: <br />
            <span class="italic font-semibold dark:text-pink-300"
              >contato@casamentoanaehenrique.pt</span
            ><br />
            Ou liga para o nosso número fictício: <br />
            <span class="italic font-semibold dark:text-pink-300"
              >+351 912 345 678</span
            >
          </p>
        </div>
      </div>

      <hr
        class="border-t-2 border-pink-300 dark:border-pink-700 my-8 w-full mx-auto"
      />

      <p class="text-center text-xs font-serif dark:text-pink-300">
        Copyright © {{ new Date().getFullYear() }} Ana & Henrique. Todos os
        direitos reservados.
      </p>

      <p class="text-center text-xs mt-2 font-serif dark:text-pink-300">
        Feito com ❤️ por
        <a
          href="https://instagram.com/webcreaterpt"
          target="_blank"
          rel="noopener"
          class="hover:text-pink-500 hover:underline transition-colors duration-300"
        >
          Webcreaterpt
        </a>
      </p>
    </div>
  </footer>
</template>
