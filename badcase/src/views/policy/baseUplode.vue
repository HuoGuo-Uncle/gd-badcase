<template>
    <div>
        <h2>底库上传数据</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="选择类型">
                <el-select v-model="form.region" placeholder="人脸数据">
                <el-option label="人脸数据" value="shanghai"></el-option>
                <el-option label="声纹数据" value="beijing"></el-option>
                <el-option label="TV logo数据" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="数据描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="底库分类">
                <el-col :span="11">
                    <el-form-item label="一级分类">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="政治有害" value="shanghai"></el-option>
                            <el-option label="其他" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="二级分类">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="政治有害" value="shanghai"></el-option>
                            <el-option label="其他" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-col :span="14">
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item>
                                <el-button type="primary" @click="onFaceRepeat">人脸排重</el-button>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">上传</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        }
    },
    created(){
        
    },
    methods:{
      onFaceRepeat(){
            this.$router.push({name:'faceRepeat'})
        },
    }
}
</script>
<style scoped>
.addTitle{
  margin-bottom: 20px;
}
.pagination{
  text-align: right;
}
</style>