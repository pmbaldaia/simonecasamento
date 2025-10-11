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
          <span class="text-gray-900 dark:text-white"
            >Política de Privacidade</span
          >
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template #desc>
        <span class="text-slate-600 dark:text-gray-300">
          A Ana e o Henrique valorizam a sua privacidade. Esta Política de
          Privacidade tem como objetivo esclarecer como tratamos as informações
          pessoais dos convidados do nosso casamento.
        </span>
      </template>
    </LandingSectionhead>

    <div class="mt-8 text-lg text-slate-600 dark:text-gray-200">
      <p class="mb-6">
        Esta página foi criada para partilhar informações sobre o nosso
        casamento. Respeitamos a sua privacidade e estamos comprometidos em
        proteger os seus dados pessoais. Esta Política de Privacidade explica
        que dados recolhemos e como os utilizamos.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        1. Dados Pessoais Recolhidos
      </h3>
      <p class="mb-4">
        Poderemos recolher informações como o seu nome, endereço de e-mail,
        número de telefone, e preferências relacionadas com o evento (como
        confirmação de presença, restrições alimentares ou mensagens pessoais
        para os noivos).
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        2. Finalidade da Recolha dos Dados
      </h3>
      <div class="mb-4">
        As informações recolhidas serão utilizadas exclusivamente para:
        <ul class="list-disc pl-6 mb-4">
          <li>
            Organizar e planear o casamento com base nas confirmações de
            presença;
          </li>
          <li>
            Comunicar informações relevantes sobre o evento (local, horários,
            alterações, etc.);
          </li>
          <li>
            Personalizar a experiência dos convidados e preparar surpresas
            especiais;
          </li>
          <li>
            Garantir que todos os aspetos logísticos estejam adequados às
            necessidades dos convidados.
          </li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        3. Proteção dos Dados Pessoais
      </h3>
      <p class="mb-4">
        Os dados fornecidos serão tratados com confidencialidade e usados apenas
        para os fins mencionados. Não partilharemos os seus dados com terceiros
        e tomaremos as precauções razoáveis para manter essas informações
        seguras.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        4. Direitos dos Convidados
      </h3>
      <p class="mb-4">
        Os convidados podem solicitar a correção ou remoção dos seus dados a
        qualquer momento. Para isso, basta entrar em contacto connosco através
        dos canais que partilhámos no convite.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        5. Cookies
      </h3>
      <p class="mb-4">
        Este site pode utilizar cookies apenas para melhorar a sua navegação e
        garantir uma boa experiência de utilização. Não usamos cookies para fins
        publicitários ou de rastreio.
      </p>

      <p class="mt-6">
        Ao utilizar esta página, está a concordar com os termos desta Política
        de Privacidade. Se tiver alguma dúvida, pode sempre entrar em contacto
        connosco — teremos todo o gosto em ajudar!
      </p>
    </div>
  </LandingContainer>
</template>
