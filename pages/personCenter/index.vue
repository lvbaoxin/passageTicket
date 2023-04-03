<template>
	<view class='bg'>
		<view class='centerView'>
			<view class="personTop">
				<view class="personLeft">
					<view class="avatar">
						<image :src="userInfo.avatar" class="avatar"></image>
					</view>
					<view class="nickRight">
						<view class="nickName">{{userInfo.user_nickname}}</view>
						<view class="personTel">15999999999</view>
					</view>
				</view>
				<view class="personTools">
					<uni-icons type="gear" size="26" color="#fff;" @click="goBindTel()"></uni-icons>
				</view>
			</view>
			<view class="buyItem forFlex justifyBetween">
				<view style="color:#1A1A1A">
					优惠券
				</view>
				<view class='forFlex' >
					 <uni-icons type="forward" color='#a8a8a8' size="28"></uni-icons>
				</view>
			</view>
			<view class="buyItem forFlex justifyBetween">
				<view style="color:#1A1A1A">
					联系我们
				</view>
				<view style="color:#1A1A1A">
					400-4564-0000
				</view>
			</view>
			<view class="buyItem forFlex justifyBetween">
				<view style="color:#1A1A1A">
					关于我们
				</view>
				<view class='forFlex' >
					 <uni-icons type="forward" color='#a8a8a8' size="28"></uni-icons>
				</view>
			</view>
			<view class="buyItem forFlex justifyBetween">
				<view style="color:#1A1A1A">
					发票信息
				</view>
				<view class='forFlex' >
					 <uni-icons type="forward" color='#a8a8a8' size="28"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'personCenter',
		
		data() {
			return {
				userInfo:wx.getStorageSync('user')
			}
		},
		mounted(){
			this.userInfo = wx.getStorageSync('user')
			console.log(this.userInfo,'this.userInfo')
		},
		methods:{
			goBindTel(){
				uni.navigateTo({
					url: '/pages/bindTel/index'
				});
			}
		}
	}

</script>

<style>
	.personTop{
		background:#1485EE;
		padding:20rpx;
		display:flex;align-items: flex-start;
		justify-content: space-between;
		border-radius: 10rpx;
		margin:20rpx;
	}
	.personLeft{
		display:flex;align-items: flex-start;
		justify-content: space-between;
	}
	.nickName{
		color: #ffffff;
		font-size:32rpx;
	}
	.personTel{
		color: #ffffff;
		font-size:32rpx;
		margin-top:20rpx;
	}
	.avatar{
		width: 100rpx;
		height: 100rpx;
		background: #f6f6f6;
		border-radius: 100rpx;
		margin-right:20rpx;
	}
	
	.buyItem {
		border-radius: 10rpx;
		font-size: 32rpx;
		padding: 24rpx;
		background: #fff;
		margin: 20rpx ;
	}
	
</style>
