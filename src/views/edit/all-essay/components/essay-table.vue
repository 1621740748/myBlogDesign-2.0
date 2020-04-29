<template>
  <el-table
    :data="essayList"
    @selection-change="handleChange"
    :row-class-name="tableRowClassName"
    style="width: 100%"
  >
    >
    <el-table-column type="selection" width="45"> </el-table-column>
    <el-table-column prop="title" label="标题" width="400"></el-table-column>
    <el-table-column sortable prop="checkCategory" label="分类目录">
      <template slot-scope="{ row }">
        <router-link
          v-for="(category, index) in row.checkCategory"
          :key="index"
          :to="'/edit/all-essay/' + category"
        >
          {{ category }}

          <span v-if="!(index + 1 == row.checkCategory.length)">、</span>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column sortable prop="comment" label="评论"></el-table-column>
    <el-table-column sortable prop="date" label="日期"></el-table-column>
    <el-table-column sortable prop="click_sum" label="点击数">
      <template slot-scope="scope">
        <router-link :to="'/edit/all-essay/' + scope.row.category">
          {{ scope.row.category }}</router-link
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  methods: {
    handleChange() {},
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) return 'warning-row'
      else {
        return 'success-row'
      }
      return ''
    }
  },
  computed: {
    ...mapState({
      essayList: state => state.essay.essayList
    })
  }
}
</script>

<style lang="scss" scoped>
@import url(../../../../style/table.scss);
.el-table >>> .warning-row {
  background: #fff;
}
.el-table >>> .success-row {
  background: #f9f9f9;
}
</style>