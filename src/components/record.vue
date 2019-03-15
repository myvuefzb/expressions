<template>
  <div>
    <x-header :left-options="{preventGoBack:true,showBack:true}" left-options.backText="返回" @on-click-back="isBack()" title="充值记录"><a slot="right" @click="recharge()">充值</a></x-header>
    <x-table full-bordered :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th>申请账号</th>
            <th>会员费</th>
            <th>未缴金额</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25 x 10</td>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
    </x-table>
  </div>
</template>

<script>
import { XHeader, XButton, XInput, Flexbox, FlexboxItem, XTable } from 'vux'
export default {
  components: {
    XHeader,
    XButton,
    XInput,
    Flexbox,
    FlexboxItem,
    XTable
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
    // 返回
    isBack: function () {
      this.$router.replace('/next')
    },
    // 充值
    recharge: function () {
      this.$router.replace('/recharge')
    }
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
