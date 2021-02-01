<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <form @submit="formSubmit"
            @reset="formReset">
        <view class="uni-form-item uni-column">
          <view class="title">预期月消费</view>
          <input class="uni-input"
                 type="number"
                 name="budget"
                 placeholder="请输入每个月预期花费" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">预期寿命</view>
          <input class="uni-input"
                 type="number"
                 name="life"
                 value="88"
                 placeholder="请输入每个月预期花费" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">货币年贬值率%</view>
          <input class="uni-input"
                 type="number"
                 name="devaluation"
                 value="7.5"
                 placeholder="请输入" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">年龄</view>
          <slider value="30"
                  name="age"
                  show-value></slider>
        </view>
        <text class="total">{{total}}￥</text>
        <view class="uni-btn-v">
          <button form-type="submit">计算</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from 'vue';

  var graceChecker = require("../../common/graceChecker.js");
  export default Vue.extend({
    data() {
      return {
        total: 0,
      }
    },
    methods: {
      formSubmit(e: any) {
        console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        //定义表单规则
        var rule = [
          { name: "budget", checkType: "number", checkRule: "", errorMsg: "请输入预算" },
        ];
        //进行表单检查
        var formData = e.detail.value;
        var checkRes = graceChecker.check(formData, rule);
        if (checkRes) {
          const { budget, age, life, devaluation } = e.detail.value
          const years: Number = life - age
          let total = budget * 12
          const rate = 1 + devaluation/100
          for(let i = 1; i < years; i++){
            total = total * rate
          }
          console.log('age',age)
          this.total = total
        } else {
          
          uni.showToast({ title: graceChecker.error, icon: "none" });
        }
      },
      formReset: function (e: any) {
        console.log('清空数据')
      }
    }
  })
</script>

<style>
  .res-text-box {
		margin-bottom: 40rpx;
		padding: 40rpx 0;
		display: flex;
		min-height: 300rpx;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30rpx;
		color: #353535;
		line-height: 1.8;
	}

  .total{
    display: flex;
    text-align: right;
    justify-content: flex-end;
    font-size: 48rpx;
  }
</style>