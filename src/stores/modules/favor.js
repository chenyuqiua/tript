import { defineStore } from "pinia"
import { getFavorItem, getBrowseItem } from "@/services/modules/favor"

const useFavorStore = defineStore("favor", {
  state: () => ({
    favorItem: [],
    browsetItem: []
  }),
  actions: {
    async fetchFavorItem() {
      const res = await getFavorItem()
      this.favorItem = res.data.data.items
    },
    async fetchBrowseItem() {
      const res = await getBrowseItem()
      this.browsetItem = res.data.data.items
    }
  }
})

export default useFavorStore