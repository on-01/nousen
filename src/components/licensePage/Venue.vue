<template>
  <div class="venue" :class="['venue',{'is-open':isOpen}]">
    <section class="venue-section">
      <!-- <div v-for="(item) in oneVenue.edges.node" :key="item.city"> -->
      <div class="head" v-on:click='isOpen=!isOpen'>
        <div class="head-inner">
          <div class="city-wrapper">
            <p class="city">{{city}}</p>
          </div>
          <p class="period">●{{period}}</p>
          <p class="hall">●{{hall}}</p>
        </div>
        <div class="more">
          <i v-show="isOpen">閉じる</i>
          <i v-show="!isOpen">続きを読む</i>
          <IconBase class="close-icon"><IconClose /></IconBase>
        </div>
      </div>
      <transition name="slide">
        <div class="body" v-if="isOpen">
          <div class="body-inner" >
            <div class="details" v-html="richtextToHTML(details)">
            </div>
            <div class="address-map">
              <div class="address-wrap">
                <p class="address-title">
                  <span>{{city}}会場</span> {{hall}}
                </p>
                <div class="address" v-html="richtextToHTML(address)">
                </div>
              </div>
              <div class="map">
                <GmapMap
                  :center="{lat: map.lat, lng: map.lon}"
                  :zoom="16"
                  map-type-id="terrain"
                  style="width: 100%; height: 280px;"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in [{ position: { lat: map.lat, lng: map.lon } }]"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  />
                </GmapMap>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconClose from '@/components/icons/IconClose.vue'
import { documentToHtmlString } from '../../../node_modules/@contentful/rich-text-html-renderer';
export default {
  name: 'venue',
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    city: String,
    period: String,
    hall: String,
    details: Object,
    address: Object,
    map: Object,
  },
  components: {
    IconBase,
    IconClose
  },
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content).replace(/\n/g, `</br>`).replace(/<a((?: .+?))?>(.*?)<\/a>/g,'<a $1 target="_blank">$2</a>');
      return richtextString
    }
  },
}
</script>

<style lang="scss" scoped>
.venue {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  .close-icon {
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-left: 10px;
  }
  &:not(.is-open) .close-icon {
    transform: rotate(45deg);
  }
}
.venue-section {
  background-color: #f2f2f2;
  position: relative;
  margin-top: 50px;
  & ::v-deep a {
    text-decoration: underline;
  }
}
.head {
  color: #fff;
  background-color: #000;
  font-weight: bold;
  display: flex;
  padding: 10px 0;
  @media print, screen and (min-width: 1001px) {
    align-items: center;
  }
  @media print, screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .head-inner {
    display: flex;
    padding-left: 50px;
    max-width: calc(100% - 130px);
    width: 100%;
    @media print, screen and (min-width: 1001px) {
      align-items: center;
    }
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      padding-left: 5%;
      max-width: 95%;
    }
    p {
      margin: 0;
    }
  }
  .more {
    max-width: 130px;
    width: 100%;
    padding-right: 50px;
    @media print, screen and (max-width: 1000px) {
      text-align: right;
      padding-right: 5%;
      max-width: 95%;
    }
  }
  .city-wrapper {
    max-width: 150px;
    width: 100%;
  }
  .city {
    background-color: #fff;
    color: #000;
    padding: 0 10px;
    display: inline-block;
  }
  .period {
    max-width: 300px;
    width: 100%;
  }
  .hall {
    max-width: 200px;
    width: 100%;
  }
}
.body {
  padding: 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 5%;
  }
}
.details {
  ::v-deep h1 {
    display: inline-block;
    font-size: 1em;
    padding: 0 1em;
    border-radius: 20px;
    color: #fff;
    background-color: #000;
  }
}
.address-title {
  font-weight: bold;
  font-size: 18px;
  span {
    font-size: 14px;
    margin-right: 0.5em;
  }
}
.address-map {
  border-top: 1px solid #999;
  @media print, screen and (min-width: 1001px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
}
.address-wrap {
  @media print, screen and (min-width: 1001px) {
    width: calc(100% - 500px);
  }
}
.map {
  width: 100%;
  max-width: 460px;
}
//個別のカラー
.denken3 {
  .head {
    background-color: #e60039;
    .city {
      color: #e60039;
    }
  }
  .info-section ::v-deep a {
    color: #e60039;
  }
  .venue-section {
    ::v-deep a {
      color: #e60039;
    }
    .details {
      ::v-deep h1 {
        background-color: #e60039;
      }
      ::v-deep b {
        color: #e60039;
      }
    }
  }
  .address-title {
    color: #e60039;
  }
}
.koujishi1,.koujishi2 {
  .head {
    background-color: #b60081;
    .city {
      color: #b60081;
    }
  }
  .info-section ::v-deep a {
    color: #b60081;
  }
  .venue-section {
    & ::v-deep a {
      color: #b60081;
    }
    .details {
      ::v-deep h1 {
        background-color: #b60081;
      }
      ::v-deep b {
        color: #b60081;
      }
    }
  }
  .address-title {
    color: #b60081;
  }
}
.denkikoujisekou,.kenchiku,.kankouji,.doboku {
  .head {
    background-color: #00a73c;
    .city {
      color: #00a73c;
    }
  }
  .info-section ::v-deep a {
    color: #00a73c;
  }
  .venue-section {
    & ::v-deep a {
      color: #00a73c;
    }
    .details {
      ::v-deep h1 {
        background-color: #00a73c;
      }
      ::v-deep b {
        color: #00a73c;
      }
    }
  }
  .address-title {
    color: #00a73c;
  }
}
.kyuusui {
  .head {
    background-color: #00afcc;
    .city {
      color: #00afcc;
    }
  }
  .info-section ::v-deep a {
    color: #00afcc;
  }
  .venue-section {
    & ::v-deep a {
      color: #00afcc;
    }
    .details {
      ::v-deep h1 {
        background-color: #00afcc;
      }
      ::v-deep b {
        color: #00afcc;
      }
    }
  }
  .address-title {
    color: #00afcc;
  }
}

// トランジション
.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>