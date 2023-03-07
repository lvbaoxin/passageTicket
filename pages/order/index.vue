<template>
	<view class='bg'>
		<view class="orderTab">
			<view class="orderTabItem" @click="tabCur(0)" :class="{active:cur==0}">全部</view>
			<view class="orderTabItem" @click="tabCur(1)" :class="{active:cur==1}">待支付</view>
			<view class="orderTabItem" @click="tabCur(2)" :class="{active:cur==2}">待使用</view>
		</view>
		<view class="orderItem">
			<view class="orderShipName">
				龙兴岛
			</view>
			<view class="orderInfo">
				<view class='orderInfoLeft'>
					<view class="shipLine">大连湾港——烟台打捞局</view>
					<view class="shipTime">2月27日（星期一）21:30出发</view>
				</view>
				<view class='orderInfoRight'>
					<view class="shipPrice">￥200</view>
					<view class="shipState" data-state='1'>等待支付</view>
				</view>
			</view>
			<view class="orderBtnList">
				<view class='orderBtn'>
					取消订单
				</view>
				<view class='orderBtn'>
					立即支付
				</view>
				<view class='orderBtn'>
					联系客服
				</view>
			</view>
		</view>
		<view class="orderItem">
			<view class="orderShipName">
				龙兴岛
			</view>
			<view class="orderInfo">
				<view class='orderInfoLeft'>
					<view class="shipLine">大连湾港——烟台打捞局</view>
					<view class="shipTime">2月27日（星期一）21:30出发</view>
				</view>
				<view class='orderInfoRight'>
					<view class="shipPrice">￥200</view>
					<view class="shipState" data-state='2'>支付成功</view>
				</view>
			</view>
			<view class="orderBtnList">
				
				<view class='orderBtn'>
					再买一单
				</view>
				<view class='orderBtn'>
					联系客服
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "Mr.vue",
		data() {
			return {
				cur: 0
			}
		},
		methods: {
			tabCur(e) {
				this.cur = e
			}
		}
	}
</script>

<style>
	.orderTab {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
		background: #fff;
	}

	.orderTabItem {
		text-align: center;
		color: #1A1A1A;
		font-size: 36rpx;
		border-bottom:5rpx solid #fff;
		flex: 1;
		line-height: 88rpx;
	}

	.orderTabItem.active {
		border-bottom: 5rpx solid #1485EE;
		color: #1485EE;
	}

	.orderItem {
		background: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		margin:20rpx;
	}

	.orderShipName {
		border-bottom: 1rpx solid #a7a7a7;
		font-size: 30rpx;
		height:60rpx;
		line-height:60rpx;
		margin-bottom: 20rpx;
	}

	.orderInfo {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.shipLine {
		font-size: 30rpx;
		margin-bottom: 20rpx;
	}

	.shipTime {
		color: #a7a7a7;
		font-size: 24rpx;
	}

	.shipPrice {
		text-align: right;
		font-size: 36rpx;
		margin-bottom: 20rpx;
		color: #FF5A00;
	}

	.shipState {
		background: #f6f6f6;
		border-radius: 20px;
		font-size: 24rpx;
		padding: 2rpx 24rpx;
	}

	.shipState[data-state='1'] {
		color: #FF5A00;
	}

	.shipState[data-state='2'] {
		color: #1485EE;
	}

	.orderBtnList {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.orderBtn {
		font-size: 24rpx;
		background: #eff7ff;
		border-radius: 5rpx;
		text-align: center;
		color: #1485EE;
		padding: 12rpx 24rpx;
		margin-left: 20rpx;
	}
</style>
