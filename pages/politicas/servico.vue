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
          <span class="text-gray-900 dark:text-white">Termos de Serviço</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          Estes termos explicam as condições de uso do site do casamento da Ana
          e do Henrique. Ao navegar por aqui, assume-se que concorda com os
          nossos bons modos e com um ambiente de celebração e respeito.
        </span>
      </template>
    </LandingSectionhead>

    <div class="mt-8 text-lg text-slate-600 dark:text-gray-200">
      <p class="mb-6">
        O site foi criado com amor para partilhar informações sobre o casamento
        da Ana e do Henrique. Ao utilizá-lo, pedimos apenas que o faça com
        respeito e consideração. Afinal, estamos todos aqui para celebrar algo
        bonito!
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        1. Aceitação dos Termos
      </h3>
      <p class="mb-4">
        Ao aceder e navegar neste site, está a concordar com os presentes Termos
        de Serviço. Se por algum motivo não concordar, recomendamos que não
        utilize o site (mas esperamos que mude de ideias e venha celebrar
        connosco!).
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        2. Conteúdo e Direitos
      </h3>
      <p class="mb-4">
        As fotos, textos, vídeos e ilustrações aqui partilhados são da Ana, do
        Henrique, dos seus convidados ou dos fornecedores do casamento. Pode ver
        e rever à vontade, mas por favor, não utilize nada sem pedir antes. É
        tudo muito especial para nós.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        3. Boa Conduta
      </h3>
      <p class="mb-4">
        Esperamos que todos utilizem este site com respeito, especialmente se
        estiver a deixar mensagens ou a confirmar presença. Qualquer
        comportamento abusivo, ofensivo ou malicioso será removido — mas
        acreditamos que quem chega até aqui vem com boas intenções.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        4. Limitações
      </h3>
      <p class="mb-4">
        Este site é simples e feito com muito carinho, mas não é perfeito. Pode
        haver erros, links que não funcionam ou informações que mudem.
        Tentaremos manter tudo atualizado, mas agradecemos a compreensão se algo
        falhar.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        5. Alterações
      </h3>
      <p class="mb-4">
        Podemos atualizar estes termos a qualquer momento (por exemplo, se
        adicionarmos novas funcionalidades ou secções ao site). Qualquer
        alteração será refletida aqui.
      </p>

      <p class="mt-6">
        Se tiver dúvidas sobre estes termos (ou quiser apenas desejar
        felicidades!), entre em contacto connosco. Estamos felizes por ter você
        aqui neste momento tão especial.
      </p>
    </div>
  </LandingContainer>
</template>
