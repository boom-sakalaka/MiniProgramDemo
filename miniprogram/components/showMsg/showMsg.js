// components/showMsg/showMsg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: 'Tom'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInfo() {
      console.log(this.data.name) // 调用的组件自己的data
      console.log(this.properties.itemData) // 调用传递给组件的数据
    }
  }
})
