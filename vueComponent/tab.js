Vue.component('tabs', {
  template: `
    <div class="">
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
  `,
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.href === selectTab.href)
      })
    }
  }
});

Vue.component('tab', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,
  props: {
    name: { required: true },
    selectTab: { default: false }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted() {
    this.isActive = this.selected;
  },
});

new Vue({
  el: '#root'
})
