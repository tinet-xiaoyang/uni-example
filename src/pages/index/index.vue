<template>
	<view class="content">
		<view>
			<navigator url="/pages/calculator/calculator">uniCloud操作演示</navigator>
		</view>
		<view>
			<navigator url="/pages/password/password">用户名和密码</navigator>
		</view>
		<!-- <view>
			<navigator url="/pages/mobile/mobile">手机号和验证码</navigator>
		</view>
		<view>
			<navigator url="/pages/email/email">邮箱与验证码</navigator>
		</view> -->
		<!-- #ifdef APP-PLUS || MP-WEIXIN -->
		<view>
			<navigator url="/pages/weixin/weixin">微信登录</navigator>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-ALIPAY -->
		<view>
			<navigator url="/pages/alipay/alipay">支付宝登录</navigator>
		</view>
		<!-- #endif -->
		<!-- <view>
			<navigator url="/pages/util/util">通用方法</navigator>
		</view>
		<view>
			<navigator url="/pages/rbac/rbac">角色权限</navigator>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		padding: 15px;
	}
</style>
