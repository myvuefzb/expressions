<template>
  <div>
    <img class="display-box" src="@/assets/exbag.png" />
    <div class="block-box">
      <div class="login-item-wrap bottom-line">
        <img class="item-icon" src="@/assets/user2.png"/>
        <flexbox>
           <flexbox-item >
             <x-input  class="input-wrap" type="text" placeholder="请输入您的真实姓名" v-model="userPhone"></x-input>
           </flexbox-item>
        </flexbox>
      </div>
      <div class="login-item-wrap  bottom-line">
        <img class="item-icon" src="@/assets/moblie.png" />
        <flexbox>
           <flexbox-item >
             <x-input  class="input-wrap" type="number" placeholder="请输入手机号" v-model="imageCaptcha"></x-input>
           </flexbox-item >
        </flexbox>
      </div>
      <div class="login-item-wrap  bottom-line">
        <img class="item-icon" src="@/assets/id3.png" />
        <flexbox>
           <flexbox-item>
             <x-input  class="input-wrap" type="text" placeholder="请输入您的身份证号码"  v-model="userCode"></x-input>
           </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="option-box-wrap">
      <x-button type="primary" @click.native="nextStep()">下一步</x-button>
    </div>
  </div>
</template>

<script>
import { XButton, XInput, Flexbox, FlexboxItem } from 'vux'
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
      userCode: '',
      imageCode: 'http://112.74.170.114:20052/api/Account/GetImageCaptcha?time=' + Date.parse(new Date())
    }
  },
  methods: {
    // 更换图形验证码
    getImageCode: function () {
      this.imageCode = 'http://112.74.170.114:20052/api/Account/GetImageCaptcha?time=' + Date.parse(new Date())
    },
    nextStep: function () {
      this.$router.replace('/record')
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style scoped>
  .display-box {
    display: block;
    height: 200px;
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
