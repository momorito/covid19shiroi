<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="$emit('open-navigation', $event)"
      >
        {{ mdiMenu }}
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <app-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            :src="logoSrc"
            width="111"
            height="28"
            :alt="$t('東京都')"
          />
          <div class="SideNavigation-HeaderText">
            {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
              $t('menu/対策サイト（※非公式）')
            }}
          </div>
        </app-link>
      </h1>
    </header>

    <div
      v-if="isNaviOpen || $vuetify.breakpoint.smAndUp"
      :class="['SideNavigation-Body', { '-opened': isNaviOpen }]"
    >
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('close-navigation', $event)"
      >
        {{ mdiClose }}
      </v-icon>

      
      <nav class="SideNavigation-Menu">
        <!--　多言語化メニューを隠している（いずれ復活させたい）

        <div class="SideNavigation-Language">
          <div v-if="$i18n.locales.length > 1" class="SideNavigation-Language">
            <label class="SideNavigation-LanguageLabel" for="LanguageSelector">
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <language-selector />
          </div>
        </div>

        -->
        <menu-list :items="items" @click="$emit('close-navigation', $event)" />
      </nav>

    
      <footer class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <app-link
            to="https://line.me/R/ti/p/%40408efpjd"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/line.webp" type="image/webp" />
              <img src="/line.png" width="130" height="130" alt="LINE" />
            </picture>
          </app-link>
          <app-link
            to="https://twitter.com/shiroi_city"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/twitter.webp" type="image/webp" />
              <img src="/twitter.png" width="130" height="130" alt="Twitter" />
            </picture>
          </app-link>
          <app-link
            to="https://www.facebook.com/shiroinomiryoku/"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/facebook.webp" type="image/webp" />
              <img
                src="/facebook.png"
                width="130"
                height="130"
                alt="Facebook"
              />
            </picture>
          </app-link>
          <app-link
            to="https://github.com/momorito/covid19shiroi"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/github.webp" type="image/webp" />
              <img src="/github.png" width="130" height="130" alt="GitHub" />
            </picture>
          </app-link>
          <app-link
            to="https://www.youtube.com/channel/UC5O21usiaJUMHwvSuAm1Wng"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/youtube.webp" type="image/webp" />
              <img src="/youtube.png" width="130" height="130" alt="YouTube" />
            </picture>
          </app-link>
        </div>
        <i18n
          tag="small"
          path="このサイトの内容物は{creativeCommons}の下に提供されています（ただし商標等の他団体が権利を持つものは除く）。"
          class="SideNavigation-Copyright"
        >
          <template #creativeCommons>
            <app-link
              :to="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
              :icon-size="12"
              class="SideNavigation-LicenseLink"
            >
              {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
            </app-link>
          </template>
        </i18n>
        <br />
        <small class="SideNavigation-Copyright">
          &copy; 2021 Shiroi Stop Covid19 Team
        </small>
        <!--
        <div class="SideNavigation-GMarkWrapper">
          <app-link
            to="https://www.g-mark.org/award/describe/51112"
            :show-icon="false"
          >
            <img
              src="/.netlify/functions/g-mark"
              width="200"
              alt="GOOD DESIGN AWARD 2020年度受賞"
            />
          </app-link>
        </div>
        -->
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiAccountMultiple,
  mdiChartTimelineVariant,
  mdiClose,
  mdiDomain,
  mdiMenu,
} from '@mdi/js'
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'

import AppLink from '@/components/AppLink.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  iconPath?: string
  svg?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList,
    AppLink,
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mdiClose,
      mdiMenu,
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          iconPath: mdiChartTimelineVariant,
          title: this.$t('市内の最新感染動向'),
          link: this.localePath('/'),
        },
        {
          svg: 'CovidIcon',
          title: this.$t('市内における感染発生状況について.nav'),
          link:
            'https://www.city.shiroi.chiba.jp/kenko/covid19/jokyo/index.html',
        },
        {
          svg: 'CovidIcon',
          title: this.$t('新型コロナワクチンの接種について'),
          link:
            'https://www.city.shiroi.chiba.jp/kenko/covid19/vaccine/8405.html',
        },
        {
          svg: 'CovidIcon',
          title: this.$t(
            '感染対策・予防'
          ),
          link:
            'https://www.city.shiroi.chiba.jp/kenko/covid19/yobou/index.html',
        },
        {
          svg: 'CovidIcon',
          title: this.$t('市の相談・支援'),
          link:
            'https://www.city.shiroi.chiba.jp/kenko/covid19/sien/index.html',
          divider: true,
        },
        {
          svg: 'CovidIcon',
          title: this.$t('About the New Coronavirus 外国人向け情報'),
          link: ('https://www.city.shiroi.chiba.jp/kenko/covid19/info/8402.html'),
        },
        {
          iconPath: mdiAccountMultiple,
          title: this.$t('白井市新型コロナウイルス感染症対策本部会議'),
          link: 'https://www.city.shiroi.chiba.jp/kenko/covid19/taiou/9033.html',
          divider:true,
        },
        {
          title: this.$t('市長メッセージ'),
          link:
            'https://www.city.shiroi.chiba.jp/kenko/covid19/info/8590.html',
        },
        {
          title: this.$t('千葉県からのお願い'),
          link:
            'https://www.city.shiroi.chiba.jp/kenko/covid19/info/8404.html',
        },
        {
          title: this.$t('白井市公式ホームページ'),
          link: 'https://www.city.shiroi.chiba.jp/',
          divider:true,
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about'),
        },
    
        
      ]
    },
    logoSrc(): string {
      switch (this.$i18n.locale) {
        case 'ja':
        case 'ja-basic':
        case 'zh-tw':
          return '/logo.svg'
        case 'ko':
          return '/logo-ko.png'
        case 'zh-cn':
          return '/logo-zh-cn.png'
        default:
          return '/logo-en.png'
      }
    },
  },
  watch: {
    $route: 'handleChageRoute',
  },
  methods: {
    handleChageRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  color: #707070;
  font-weight: 600;
  @include font-size(13);
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: 600;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  @include font-size(14);
}

.SideNavigation-Footer {
  padding-top: 20px;
}

.SideNavigation-Social {
  display: flex;
}

.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;
  margin-bottom: 15px;

  &:link,
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    color: inherit;
    text-decoration: none;
    border: 1px dotted $gray-3;
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  img {
    width: 30px;
  }
}

.SideNavigation-Copyright {
  display: inline-block;
  color: $gray-1;
  line-height: 1.3;
  font-weight: 600;
  @include font-size(10);
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-GMarkWrapper {
  margin-top: 16px;
}
</style>
