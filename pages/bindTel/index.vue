<template>
	<view class='bg'>
		<view class='bindView'>
			<view class="bindItem">
				<view class='forFlex'>
					<uni-icons type="phone" color='#a8a8a8' size="28"></uni-icons>
					<input class="BindInput" type="number" placeholder="请输入手机号码" />
				</view>
				<view class="bindWxBtn">使用微信手机号</view>
			</view>
			<view class="bindItem">
				<view class='forFlex'>
					<uni-icons type="phone" color='#a8a8a8' size="28"></uni-icons>
					<input class="BindInput" type="number" placeholder="验证码" />
				</view>
				<button type="primary"  class="bindCodeBtn" >获取验证码</button>
			</view>
			<button type="primary"  class="bindTelBtn" >绑定手机</button>
			
		</view>
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
