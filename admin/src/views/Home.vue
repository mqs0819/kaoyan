<template>
  <div class="home">
    <el-container style="border: 1px solid #eee">
      <el-aside
        width="230px"
        style="height: 100vh; background-color: rgb(238, 241, 246)"
      >
        <el-menu :default-openeds="['1']" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>院校管理</template
            >
            <el-menu-item-group>
              <template slot="title">院校</template>
              <el-menu-item index="/schools/create">添加院校</el-menu-item>
              <el-menu-item index="/schools/list">院校列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>资讯中心</template>
            <el-menu-item-group>
              <template slot="title">分数线</template>
              <el-menu-item index="2-1">国家线</el-menu-item>
              <el-menu-item index="2-2">资料</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
					<router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(10).fill(item),
    };
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
