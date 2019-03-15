<template>
  <div>
    <img class="logo-box" src="@/assets/logo.png" />
    <div class="block-box">
      <div class="login-item-wrap bottom-line">
        <img class="item-icon" src="@/assets/user1.png"/>
        <flexbox>
           <flexbox-item >
             <x-input  class="input-wrap" type="number" placeholder="请输入手机号" v-model="userPhone"></x-input>
           </flexbox-item>
        </flexbox>
      </div>
      <div class="login-item-wrap">
        <img class="item-icon" src="@/assets/pass.png" />
        <flexbox>
           <flexbox-item >
             <x-input  class="input-wrap" type="number" placeholder="请输入图形验证码" v-model="imageCaptcha"></x-input>
           </flexbox-item >
           <flexbox-item>
             <div class="text-right">
                <img class="captcha-code" :src="imageCode" @click="getImageCode" />
             </div>
           </flexbox-item >
        </flexbox>
      </div>
      <div class="login-item-wrap">
        <img class="item-icon" src="@/assets/account.png" />
        <flexbox>
           <flexbox-item>
             <x-input  class="input-wrap" type="number" placeholder="请输入验证码"  v-model="userCode"></x-input>
           </flexbox-item>
           <flexbox-item >
             <div class="text-right" @click="sendCode()" v-if="!captchaFlag">
               <div class="counter-wrap">
                <span>获取验证码</span>
               </div>
             </div>
             <div v-else class="text-right">
                <div class="counter-wrap">
                  <span>{{timeCounter}}s</span>
                </div>
             </div>
           </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="option-box-wrap">
      <h6 class="other-code-wrap">收不到短信验证码？请尝试<span class="other-code" @click="getVoiceCaptcha()">语音验证码</span></h6>
      <x-button type="primary" @click.native="login()">登录</x-button>
    </div>
  </div>
</template>

<script>
import { XButton, XInput, Flexbox, FlexboxItem } from 'vux'
import { setInterval, clearInterval } from 'timers'
export default {
  components: {
    XButton,
    XInput,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      userPhone: '',
      imageCaptcha: '',
      imageCode: this.$chaptcha_api + '/Account/GetImageCaptcha?time=' + Date.parse(new Date()),
      userCode: '',
      captchaFlag: false,
      timeCounter: 59
    }
  },
  methods: {
    // 更换图形验证码
    getImageCode: function () {
      this.imageCode = this.$chaptcha_api + '/Account/GetImageCaptcha?time=' + Date.parse(new Date())
    },
    // 发送短信验证码
    sendCode: function () {
      let _self = this
      let phonePattern = /^1[3,4,5,6,7,8,9]\d{9}$/
      if (!this.userPhone) {
        this.$vux.toast.show({text: '请输入手机号码'})
        return false
      }
      if (!phonePattern.test(this.userPhone)) {
        this.$vux.toast.show({text: '手机号码输入有误'})
        return false
      }
      if (!this.imageCaptcha) {
        this.$vux.toast.show({text: '请输入图形验证码'})
        return false
      }
      if (!this.userCode) {
        this.$vux.toast.show({text: '请输入手机验证码'})
        return false
      }
      this.$axios({
        url: '/Account/GetCaptcha',
        method: 'post',
        data: { Phone: this.userPhone, imageCaptcha: this.imageCaptcha }
      }).then((data) => {
        if (data && data.State) {
          _self.captchaFlag = true
          let setCounter = setInterval(function () {
            _self.timeCounter--
            clearInterval(setCounter)
          }, 1000)
          _self.$vux.toast.show({text: data.Msg || '接口请求成功'})
        }
      }, (error) => {
        _self.$vux.toast.show({text: error.Msg || '接口请求失败'})
      })
    },
    // 语言验证码
    getVoiceCaptcha: function () {
      let _self = this
      let phonePattern = /^1[3,4,5,6,7,8,9]\d{9}$/
      if (!this.userPhone) {
        this.$vux.toast.show({text: '请输入手机号码'})
        return false
      }
      if (!phonePattern.test(this.userPhone)) {
        this.$vux.toast.show({text: '手机号码输入有误'})
        return false
      }
      this.$axios({
        url: '/Account/getVoiceCaptcha',
        method: 'post',
        data: { phone: this.userPhone }
      }).then((data) => {
        if (data && data.State) {
          _self.$vux.toast.show({text: data.Msg || '接口请求成功'})
        }
      }, (error) => {
        _self.$vux.toast.show({text: error.Msg || '接口请求失败'})
      })
    },
    // 登录
    login: function () {
      let _self = this
      // let phonePattern = /^1[3,4,5,6,7,8,9]\d{9}$/
      // if (!this.userPhone) {
      //   this.$vux.toast.show({text: '请输入手机号码'})
      //   return false
      // }
      // if (!phonePattern.test(this.userPhone)) {
      //   this.$vux.toast.show({text: '手机号码输入有误'})
      //   return false
      // }
      // if (!this.imageCaptcha) {
      //   this.$vux.toast.show({text: '请输入图形验证码'})
      //   return false
      // }
      // if (!this.userCode) {
      //   this.$vux.toast.show({text: '请输入手机验证码'})
      //   return false
      // }
      // this.$axios({
      //   url: '/Account/DataLogin',
      //   method: 'post',
      //   data: { Phone: this.userPhone, Captcha: this.userCode, imageCaptcha: this.imageCaptcha }
      // }).then((data) => {
      //   if (data && parseInt(data.ResultType) === 0) {
      //     _self.$router.replace('/next')
      //   }
      // }, (error) => {
      //   _self.$vux.toast.show({text: error.Message || '接口请求失败'})
      // })
      _self.$router.replace('/next')
    }
  }
}
</script>

<style scoped>
  .logo-box {
    height: 80px;
    display: block;
    margin: 80px auto 0px auto;
  }
  .block-box {
    padding: 0px;
    margin: 40px 15px auto 15px;
    border: solid 1px #eee;
    border-radius: 6px;
    background-color: #fff;
  }
  .login-item-wrap {
    position: relative;
    padding-left: 40px
  }
  .login-item-wrap .item-icon {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 22px;
    height: 26px
  }
  .login-item-wrap.bottom-line {
    border-bottom: solid 1px #eee;
  }
  .input-wrap {
    width: 100%;
    height: 46px;
    padding: 0;
  }
  .input-wrap::placeholder {
    color: #dddddd;
  }
  .text-right {
    text-align: right;
  }
  .captcha-code {
    padding-top: 12px;
    padding-right: 12px;
  }
  .counter-wrap {
    height: 26px;
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
    border: solid 2px #2196f3;
    border-radius: 13px;
    text-align: center;
    vertical-align: middle;
    background-color: #dddddd;
    margin-right: 12px;
    font-size: 12px;
    color: #2196f3;
    line-height: 26px;
  }
  .option-box-wrap {
    margin: 15px;
  }
  .other-code-wrap {
    margin-bottom: 6px;
  }
  .other-code-wrap .other-code {
    color: #2196f3;
  }
</style>
