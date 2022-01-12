<template>
  <v-col cols="12" md="6">
    <lazy-static-info
      class="Consultation"
      url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
      :text="$t('人権への配慮をお願いします\nこれまで、全国で、感染者やその家族、職場、施設等について、匿名の非難や中傷、排除を促す落書き、SNS（ソーシャール・ネットワーク・サービス）上での攻撃的言辞などで差別を助長する行動がニュースなどで取り上げられています。こうした行動は決して許されることではありません。感染予防をしていても、感染してしまう恐れは誰しもあります。恐れるべきは、新型コロナウイルスであって、人ではありません。新型コロナウイルス感染者やその家族、関係者への偏見、差別、排除など人権侵害へ繋がることのないよう、お願いいたします。')"
      :btn-text="$t('相談の手順を見る')"
    />
  </v-col>
</template>

<style lang="scss" scoped>
.Consultation {
  padding: 3px 18px;
  min-height: 5.5em;
}
</style>
