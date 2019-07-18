export default {
  name: 'Sidebar',
  template: `
    <div class="sidebar">
      <div class="sidebar-item" 
        v-for="item in items" 
        :key="item"
        @click="itemClicked(item)">
          {{ item }}
      </div>
    </div>
  `,
  data() {
    return {
      items: [
        'Intro',
        'Fincher',
        'Wright',
        'Tarantino'
      ]
    }
  },
  methods: {
    itemClicked(item) {
      this.$emit('item-clicked', item)
    },
  }
};
