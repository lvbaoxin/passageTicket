<template>
	<view class='bg'>
		<view class='bindView'>
			<view class="bindItem">
				<view class='forFlex'>
					<span class="iconfont icon-shouji" style='color: #a3a3a3;'></span>
					<input maxlength="11" class="BindInput" type="number" placeholder="请输入手机号码" @blur="phoneTest()"
						v-model="telNumber" />
				</view>
				<button class="bindWxBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">使用微信手机号</button>
			</view>
			<view class="bindItem">
				<view class='forFlex'>

					<span class="iconfont icon-yanzhengma" style='color: #a3a3a3;'></span>
					<input class="BindInput" type="number" placeholder="验证码" />
				</view>
				<button v-bind:class="{grey:isGrey,bindCodeBtn:!isGrey}" v-bind:disabled="dis" type="primary"
					class="bindCodeBtn" @click="sendCode()">
					<span v-if="show">获取验证码</span>
					<span v-else>重新发送({{count}}s)</span>

				</button>
			</view>
			<button type="primary" class="bindTelBtn">绑定手机</button>

		</view>
	</view>
</template>

<script>
	var api = require('../../utils/api')
	var tools = require('../../utils/utils')

	export default {
		data() {
			return {
				telNumber: null,
				dis: false,
				show: true,
				isGrey: false, //按钮样式
				timer: null, //设置计时器,
				count: ""
			}
		},
		methods: {
			phoneTest() {
				let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
				if (this.telNumber == '' || this.telNumber.length <= 10 || !reg.test(this.telNumber)) {
					tools.showToast('请输入正确的手机号')
					return false
				}
			},
			getPhoneNumber(e) {
				console.log(e.detail.errMsg)
				console.log(e.detail.iv)
				console.log(e.detail.encryptedData)
			},
			sendCode() {
				api.post({
					url: 'user/verification_code/send',
					data: {
						username: this.telNumber
					},
					success: data => {
						if (data.code == 1) {
							tools.showToast(data.msg)
							let TIME_COUNT = 60;
							if (!this.timer) {
								this.count = TIME_COUNT;
								this.isGrey = true;
								this.show = false;
								this.dis = true;
								this.timer = setInterval(() => {
									if (this.count > 0 && this.count <= TIME_COUNT) {
										this.count--;
									} else {
										this.dis = false;
										this.isGrey = false;
										this.show = true;
										clearInterval(this.timer);
										this.timer = null;
									}
								}, 1000);
							}
						}

						if (data.code == 0) {
							tools.showToast(data.msg)
							
						}
						console.log(data);
					}
				});
			}
		}
	}
</script>

<style>
	.grey {
		background-color: #EDEEF1 !important;
		border-color: #EDEEF1;
		color: #666;
		width: 30%;
	}


	.bindView {
		margin-top: 20rpx;
	}

	.bindItem {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		padding: 0 20rpx;
		border-bottom: 1rpx solid #F6F6F6;
	}

	.bindWxBtn {
		color: #1485EE;
		font-size: 24rpx;
		background: transparent;
		border: none;
		outline: none;
		margin: 0;
	}

	.BindInput {
		color: #A7A7A7;

	}

	.bindCodeBtn {
		border: none;
		margin: 0;
		line-height: 40rpx;
		background: #1485ee !important;
		border-radius: 20rpx;
		color: #fff !important;
		font-size: 24rpx;
		padding: 0rpx 30rpx;
		outline: none;

	}

	.bindTelBtn {
		outline: none;
		border: none;
		width: 650rpx;
		height: 88rpx;
		background: #1485ee !important;
		border-radius: 10rpx;
		line-height: 88rpx;
		color: #fff;
		font-size: 32rpx;
		margin: 90rpx auto 0;
	}
</style>