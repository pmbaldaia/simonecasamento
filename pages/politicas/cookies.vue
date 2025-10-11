<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900 dark:text-white">Política de Cookies</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Usamos cookies para garantir que a navegação pelo site do casamento da
          Ana e do Henrique seja simples, rápida e personalizada. Aqui
          explicamos como e porquê.
        </span>
      </template>
    </LandingSectionhead>

    <div class="mt-8 text-lg text-slate-600 dark:text-gray-200">
      <p class="mb-6">
        Esta página foi criada com todo o carinho para partilhar informações
        sobre o nosso casamento. Para garantir que tudo corre bem tecnicamente e
        oferecer uma boa experiência de navegação, utilizamos cookies. Ao
        navegar neste site, está a aceitar a utilização de cookies conforme
        descrito nesta política.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        1. O que são Cookies?
      </h3>
      <p class="mb-4">
        Cookies são pequenos ficheiros de texto guardados no seu dispositivo
        quando visita o nosso site. Eles ajudam-nos a lembrar de certas
        preferências, como se já confirmou presença ou viu uma galeria de fotos.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        2. Tipos de Cookies Utilizados
      </h3>
      <div class="mb-4">
        Usamos apenas cookies essenciais e analíticos leves para melhorar a sua
        experiência:
        <ul class="list-disc pl-6 mb-4">
          <li>
            <strong>Cookies Essenciais:</strong> Necessários para o
            funcionamento básico do site (como lembrar a sua resposta ao RSVP);
          </li>
          <li>
            <strong>Cookies Analíticos:</strong> Ajudam-nos a perceber se as
            páginas estão a ser úteis (por exemplo, se os horários ou
            localizações estão claros).
          </li>
        </ul>
        Não utilizamos cookies de publicidade ou partilhamos dados com
        terceiros.
      </div>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        3. Como Gerir os Cookies
      </h3>
      <p class="mb-4">
        Pode gerir ou desativar cookies nas definições do seu navegador. No
        entanto, algumas funcionalidades — como o RSVP ou certas animações —
        podem não funcionar corretamente sem cookies.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        4. Consentimento
      </h3>
      <p class="mb-4">
        Ao continuar a navegar na nossa página do casamento, está a aceitar o
        uso de cookies conforme descrito nesta Política. Se preferir, pode
        sempre desativá-los nas definições do seu navegador.
      </p>

      <p class="mt-6">
        Se tiver dúvidas sobre esta política (ou quiser apenas dizer olá!), não
        hesite em contactar-nos. Estamos muito felizes por ter você connosco
        neste momento tão especial!
      </p>
    </div>
  </LandingContainer>
</template>
