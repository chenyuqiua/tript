import { defineStore } from "pinia"
import { getCityAll } from "@/services"

const useCityStore = defineStore("city", {
  state: () => ({
    // 1.存放网络请求的数据
    allCities: {},
    // 2.存放 国内/国外 当前选中的城市
    currentInlandCity: { cityName: "广州" },
    currentOverseasCity: { cityName: "曼谷" },
    // 3.控制默认展示 国内/国外 的城市
    tabActive: "cityGroup"
  }),
  actions: {
    // 1.发送网络请求
    async fetchAllCities() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore