<template>


	<view class='bg'>

		<form @submit="formSubmit">

			<view class="userItem">
				<view class="title">乘客姓名</view>
				<input class="userItemInput" name="userName" placeholder="乘客姓名" />
			</view>
			<view class="userItem">
				<view class="title">手机号码</view>
				<input class="userItemInput" name="telNum" placeholder="手机号码" />
			</view>
			<view class="userItem">
				<view class="title">邮寄地址</view>
				<input class="userItemInput" name="telNum" placeholder="邮寄地址" />
			</view>
			<view class="userItem">
				<view class="title">订单筛选</view>
				<input class="userItemInput" name="cardID" placeholder="订单筛选" />
			</view>
			<button form-type="submit" class='submitBtn'>保 存</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				testValue: 'Hello',
				index: 0,
				array: ['身份证']
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			}

		}
	}
</script>

<style>
	.userItem {
		height: 100rpx;
		border-bottom: 1rpx solid #a8a8a8;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		background: #fff;
	}

	.userItem .title {
		/* font-size: 30rpx; */
		color: #a7a7a7;
		line-height: 100rpx;
	}

	.userItemInput {
		height: 100rpx;
		background: #fff;
		margin-left: 20rpx;
		line-height: 100rpx;
	}

	.submitBtn {
		width: 590rpx;
		height: 88rpx;
		background: #1485ee;
		border-radius: 44rpx;
		color: #fff;
		font-size: 32rpx;
		line-height: 88rpx;
		margin: 80rpx auto 0;
		text-align: center;
	}
</style>
