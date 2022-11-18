<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <FloorOne
      v-for="(floor, index) in floorlist"
      :key="floor.id"
      :list="floor"
    />

    <Brand></Brand>

  </div>
</template>

<script>
// 辅助函数mapState

import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodyRecommend/index.vue";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import FloorOne from "@/pages/Home/FloorOne"
import { mapState } from "vuex";

import Brand from "@/pages/Home/Brand"
export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    FloorOne,

    Brand
  },
  mounted () {
    this.$store.dispatch("getFloorList")
  },
  computed: {
    ...mapState({
      floorlist: state => state.home.floorlist
    })

  }

}
</script>

<style>
</style>