import VueHeroicons from "./VueHeroicons.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueHeroicons', VueHeroicons);
}

const plugin = { install };

let GlobalVue = null;

GlobalVue = typeof window !== "undefined"
  ? window.Vue
  : typeof global !== "undefined"
    ? global.vue
    : null;

if (GlobalVue)
  GlobalVue.use(plugin);

VueHeroicons.install = install;

export default VueHeroicons;
