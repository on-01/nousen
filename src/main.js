import 'babel-polyfill';
import DefaultLayout from '~/layouts/Default.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import smoothScroll from 'vue-smoothscroll';

export default function(Vue) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBQUqqxi7hAjp2UROiEAM8ZbfU7lkoFg1E',
      libraries: 'places',
      region: 'JP',
      language: 'ja',
    },
  });
  Vue.use(smoothScroll);
}
