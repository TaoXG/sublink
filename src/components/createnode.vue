<template>
<div class="create-add">

  <el-button
    @click="dialogVisible=true"
    round
    type="primary"
    size="mini"
  >新增节点</el-button>

  <el-dialog
    title="新增一个节点"
    :visible.sync="dialogVisible"
  >
    <el-input
      v-model.trim="Edit.node"
      type="textarea"
      rows="10"
      placeholder="节点"
    />
    <div style="margin-bottom: 10px"></div>

    <el-input
      v-model.trim="Edit.remarks"
      placeholder="备注"
      @keyup.enter.native="handleEdit"
    />
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleEdit">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
import { CreateNode } from '@/api/sub'

export default {
  name: 'CreateNode',
  data () {
    return {
      dialogVisible: false,
      Edit: {
        name: '',
        remarks: '',
        node: ''
      }
    }
  },
  props: {
    optionValue: String
  },
  mounted () {
    this.$watch('optionValue', this.handleOptionValueChange)
  },
  methods: {
    handleOptionValueChange (newValue, oldValue) {
      this.Edit.name = newValue
      // console.log(newValue)
    },
    async handleEdit () {
      const { code, msg } = await CreateNode({
        name: this.Edit.name,
        node: this.Edit.node.trim(),
        remarks: this.Edit.remarks.trim()
      })
      if (code === 200) {
        // console.log(code, msg)
        this.$emit('RefreshSub')
        this.dialogVisible = false
        this.Edit.node = ''
        this.Edit.remarks = ''
      }
      this.$message({
        type: code === 200 ? 'success' : 'warning',
        message: msg
      })
    }
  }
}
</script>

<style scoped>
.create-add{
  /*position: absolute;*/
  /*right: 5%;*/
  /*bottom: 10%;*/
  /*transform: translate(-5%,-10%);*/
}
</style>
