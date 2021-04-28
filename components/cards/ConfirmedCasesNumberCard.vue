<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesNumberCard">
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
        :url="'https://www.city.shiroi.chiba.jp/kenko/covid19/jokyo/8420.html'"
      >
        <template #description>
          <!--
          <app-link
            :to="`${
              $i18n.locale !== 'ja' ? $i18n.locale : ''
            }/cards/positive-number-by-developed-date`"
            class="Description-Link"
          >
            {{ $t('発症日別による陽性者数の推移はこちら') }}
          </app-link>
          -->
        </template>
        <template #additionalDescription>
          <!--
          <div class="Description-ExternalLink">
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/todokedehcyouseisya.html"
            >
              {{ $t('65歳以上の新規陽性者数の推移及び届出保健所別の内訳') }}
            </app-link>
          </div>
          -->
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('白井市が公開した日を基準とする') }}
            </li>
            <li>
              {{ $t('発生が確認されなかった場合の人数は0人としている') }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import AppLink from '@/components/AppLink.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
    AppLink,
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const date = Data.patients_summary.date

    return {
      patientsGraph,
      date,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}
.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
