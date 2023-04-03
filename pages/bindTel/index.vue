<template>
	<view class='bg'>
		<view class='bindView'>
			<view class="bindItem">
				<view class='forFlex'>
					<uni-icons type="phone" color='#a8a8a8' size="28"></uni-icons>
					<!-- <FontAwesome type="fas fa-car-alt" size="40"></FontAwesome> -->
					<input class="BindInput" type="number" placeholder="请输入手机号码" v-model="telNumber"/>
				</view>
				
				<button class="bindWxBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">使用微信手机号</button>
			</view>
			<view class="bindItem">
				<view class='forFlex'>
					<uni-icons type="phone" color='#a8a8a8' size="28"></uni-icons>
					<input class="BindInput" type="number" placeholder="验证码" />
				</view>
				<button type="primary"  class="bindCodeBtn" @click="sendCode()">获取验证码</button>
			</view>
			<button type="primary"  class="bindTelBtn">绑定手机</button>
			
		</view>
	</view>
</template>

<script>
	var api = require('../../utils/api')
	var tools = require('../../utils/utils')
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		data() {
			return {
				telNumber:null
			}
		},
		components: {
			'FontAwesome': FontAwesome
		},
		methods: {
			getPhoneNumber (e) {
			    console.log(e.detail.errMsg)
			    console.log(e.detail.iv)
			    console.log(e.detail.encryptedData)
			  },
			  sendCode(){
				  api.post({
				      url: 'user/verification_code/send',
				      data: {username: this.telNumber},
				      success: data => {
				          if (data.code == 1) {
				               tools.showToast(data.msg)
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
	.bindView{
		margin-top:20rpx;
	}
	.bindItem{
		height:100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		padding:0 20rpx;
		border-bottom:1rpx solid #F6F6F6;
	}
	.bindWxBtn{
		color:#1485EE;
		font-size:24rpx;
		background:transparent;border:none;outline: none;margin:0;
	}
	.BindInput{
		color:#A7A7A7;
		
	}
	.bindCodeBtn{
		border:none;
		margin: 0;
		line-height: 40rpx;
		background: #1485ee !important;
		border-radius: 20rpx;
		color:#fff !important;
		font-size:24rpx;
		padding:0rpx 30rpx;
		outline: none;
		
	}
	.bindTelBtn{
		outline: none;
		border:none;
		width: 650rpx;
		height: 88rpx;
		background: #1485ee !important;
		border-radius: 10rpx;
		line-height: 88rpx;
		color:#fff;
		font-size: 32rpx;
		margin:90rpx auto 0;
	}

</style>
