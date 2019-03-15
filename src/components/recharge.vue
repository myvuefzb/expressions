<template>
  <div>
    <x-header :left-options="{preventGoBack:true,showBack:true}" left-options.backText="返回" @on-click-back="isBack()" title="充值"></x-header>
    <div class="popup-wrap">
      <img class="record-img-box" src="@/assets/sucessbag.png" />
      <div class="block-box">
        <div class="record-item-wrap bottom-line">
          <span class="item-title">姓名：</span>
          <img class="item-icon" src="@/assets/right.png"/>
          <flexbox>
            <flexbox-item >
              <x-input  class="input-wrap" type="text" placeholder="请输入您的真实姓名" v-model="userPhone"></x-input>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="record-item-wrap  bottom-line">
          <span class="item-title">手机号：</span>
          <img class="item-icon" src="@/assets/right.png" />
          <flexbox>
            <flexbox-item >
              <x-input  class="input-wrap" type="number" placeholder="请输入手机号" v-model="imageCaptcha"></x-input>
            </flexbox-item >
          </flexbox>
        </div>
        <div class="record-item-wrap  bottom-line">
          <span class="item-title">身份证：</span>
          <img class="item-icon" src="@/assets/right.png" />
          <flexbox>
            <flexbox-item>
              <x-input  class="input-wrap" type="text" placeholder="请输入您的身份证号码"  v-model="userCode"></x-input>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="record-item-wrap  bottom-line">
          <span class="item-title">会员费：</span>
          <flexbox>
            <flexbox-item>
              <x-input  class="input-wrap" type="text" placeholder="请输入充值金额"  v-model="userCode"></x-input>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div class="check-box-wrap">
        <check-icon :value.sync="noticeFlag">会员充值告知书</check-icon>
      </div>
      <div class="option-box-wrap">
        <x-button type="primary" @click.native="recharge()">充值</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Popup, TransferDom, XButton, XInput, Flexbox, FlexboxItem, CheckIcon, XTable, PopupHeader } from 'vux'
// import { setTimeout } from 'timers'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Popup,
    XButton,
    XInput,
    Flexbox,
    FlexboxItem,
    CheckIcon,
    XTable,
    PopupHeader
  },
  data () {
    return {
      showPopup: false,
      noticeFlag: false,
      userPhone: '',
      imageCaptcha: '',
      userCode: '',
      imageCode: 'http://112.74.170.114:20052/api/Account/GetImageCaptcha?time=' + Date.parse(new Date())
    }
  },
  methods: {
    // 充值
    recharge: function () {
      location.href = 'http://www.baidu.com'
      // setTimeout(function () {
      //   location.href = 'http://localhost:8080/#/recharge'
      // }, 5000)
    },
    isBack: function () {
      this.$router.replace('/record')
    }
  },
  mounted () {
    debugger
  }
}
</script>

<style scoped>
  .record-img-box {
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
  .record-item-wrap {
    position: relative;
    padding-left: 80px;
    padding-right: 40px;
  }
  .record-item-wrap .item-title {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 80px;
    height: 26px
  }
  .record-item-wrap .item-icon {
    position: absolute;
    right: 8px;
    top: 13px;
    width: 22px;
    height: 22px;
  }
  .record-item-wrap.bottom-line {
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
  .check-box-wrap {
    margin: 4px 15px;
    font-size: 13px;
  }
  .option-box-wrap {
    margin: 15px;
  }
  .vux-popup-header {
    background-color: #35495e;
  }
  .popup-wrap .vux-popup-header .vux-popup-header-title {
    color: #fff !important;
  }
</style>
