<template>
	<view class='popUpBg' v-if="popUpShow" ref='Calltel'>
		<view class='popUpInside'>
			<view class='popUpTop'>
				咨询电话
			</view>
			<view class='popUpTel'>
				400-4587-458
			</view>
			<view class='popUpBtn'  @click="close">
				立即咨询
			</view>
		</view>
	</view>


</template>

<script>
	export default {
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
		width: 600rpx;
		height: 300rpx;
		border-radius: 10rpx;
		margin: 0 auto;
		background: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		overflow: hidden;
	}

	.popUpTop {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		text-align: center;
		color: #1a1a1a;
	}

	.popUpBtn {
		width: 100%;
		height: 88rpx;
		background: #1485ee;
		color: #fff;
		font-size: 32rpx;
		line-height: 88rpx;

		text-align: center;
	}

	.popUpTel {
		text-align: center;
		padding: 20rpx;
		font-size: 40rpx;
		color: #1a1a1a;
		flex: 1;
	}
</style>
