<template>
	<view class='popUpBg' v-if="popUpShow" ref='popUp'>
		<view class='popUpInside'>
			<view class='popUpTop'>
				公告
			</view>
			<view class='popUpText'>
				乘船公告 1.所有航线不允许绿牌纯电汽车以及绿牌插电式混合动力乘船。 2.乘船无需提供核酸检测 3.易燃易爆管制刀具有毒物品严禁乘船，比如散装白酒、煤气罐、酒精、各种刀具等物品 购票须知:
				1.应《水路交通管理局》规定请实名制购票，当阿天携带二代身份证取票。 2.身高1.2米以下免票，身高1.2米-1.5米需购儿童票(坐票半价)，1.5米以上需购成人票。 取票须知:
				1.请乘船人携带身份证原件在发船前至少提前1小时(节假日请提前2小时)至港口取票
			</view>
			<view class='popUpBtn' @click="close">
				我知道了
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
		max-height: 400rpx;
		padding: 20rpx;
		font-size: 24rpx;
		color: #1a1a1a;
		line-height: 40rpx;
	}
</style>
