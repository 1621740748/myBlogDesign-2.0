<template>
  <div>
    <el-table
      header-align="center"
      @selection-change="handleChange"
      border
      style="width: 100%;"
      :data="
        tableData2.filter(
          (data) =>
            !search ||
            data.time.toLowerCase().includes(search.toLowerCase()) ||
            data.ip.toLowerCase().includes(search.toLowerCase()) ||
            data.os.toLowerCase().includes(search.toLowerCase()) ||
            data.browser.version.toLowerCase().includes(search.toLowerCase())
        )
      "
    >
      <el-table-column
        align="center"
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="time"
        label="登录时间"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="ip"
        label="ip"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="os"
        label="设备信息"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="browser.version"
        label="浏览器信息"
      ></el-table-column>
      <el-table-column align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
            @change="show(scope.row)"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.row, scope.$index)"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData2: Array,
    handleDelete: Function,
    handleChange: Function,
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {},
}
</script>

<style scoped>
.el-table__row {
  width: 100%;
}

.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
</style>
<style></style>
