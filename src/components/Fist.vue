<template>
  <div></div>
</template>

<script>
export default {
  name: 'fist',
  data () {
    return {
      ul: 'Welcome to Your Vue.js App1111',
      ty: 'it',
      // d: 'LiuXuDong'
      d: ''
    }
  },
  mounted () {
    this.ul = window.location.href
    this.getConfig(this.ul, this.ty)
    // this.getUser()
  },
  methods: {
    
    // 获取微信用户
    getConfig (ul, ty) {
      var that = this
      var formData = {
        value: this.ul,
        type: this.ty
      }
      // try {
      that.$http.post('http://www.tcteco.com/aipi/api/tlog', formData)
        .then(
          (response) => {
            if (response.data.code == 1) {
              sessionStorage.setItem('user', JSON.stringify(response.data.data[0]))
              that.$router.push('/home')
            }
            that.$router.push('/home')
          }).catch((error) => {
          window.location = 'http://www.underproved.cn'
        })
        // } catch (error) {
        //   window.location = 'http://www.underproved.cn'
        // }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
