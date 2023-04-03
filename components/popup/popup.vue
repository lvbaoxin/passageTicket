<template>
	<view class='popUpBg' v-if="popUpShow" ref='popUp'>
		<view class='popUpInside'>
			<view class='popUpTop'>
				{{postTitle}}
			</view>
			<view class='popUpText' v-html = 'postContent'>
				{{postContent}}
			</view>
			<view class='popUpBtn' @click="close">
				我知道了
			</view>
		</view>
	</view>


</template>

<script>
	export default {
		props: {
		  postTitle: {
		      type: [String],
		      default() {
		          return false;
		      }
		  },
		  postContent: {
		      type: [String],
		      default() {
		          return true;
		      }
		  },
		  
		  
		},
		data() {
			return {
				popUpShow: false
			}
		},
		methods: {
			open() {
				this.popUpShow = true
			},
			close() {
				this.popUpShow = false
			},

		}

	}
</script>

<style>
	.popUpBg {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 0px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}

	.popUpInside {
		width: 90%;
		margin: 0 auto;
		background: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 20rpx;
		overflow: hidden;
	}

	.popUpTop {
		width: 100%;
		height: 80rpx;
		background: #eff7ff;
		line-height: 80rpx;
		font-size: 32rpx;
		text-align: center;
		color: #1a1a1a;
	}

	.popUpBtn {
		width: 590rpx;
		height: 88rpx;
		background: #1485ee;
		border-radius: 44rpx;
		color: #fff;
		font-size: 32rpx;
		line-height: 88rpx;
		margin: 20rpx auto;
		text-align: center;
	}

	.popUpText {
		overflow: hidden;
		padding: 20rpx;
		font-size: 24rpx;
		color: #1a1a1a;
		line-height: 40rpx;
	}
</style>
