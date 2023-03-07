<template>
	<view class='bg'>
		<view class="orderDetailsTop">
			<view class='orderDetailsLeft'>
				<view class="orderState">支付成功！</view>
				<view class="orderText2">请于出发前30分钟取票！</view>
			</view>
			<view class='orderDetailsRight'>
				<view class="orderPrice">￥1800.00</view>
				<view class="orderPriceDetails">价格明细 》</view>
			</view>
		</view>
		<view class="buyTop">
			<view class="buyInfo">
				<view class="ticketListLeft">
					<view class="ticketInfo">
						<view class='ticketDay'>2023-02-27</view>
						<view class='ticketTime'>23:00</view>
						<view class='ticketCity'>大连湾综合交通枢纽</view>
					</view>
					<view>
						<view class='ticketType'>棒棰岛—国企</view>
						<view class='ticketDuration'>07:00</view>

					</view>
					<view class="ticketInfo">
						<view class='ticketDay textr'>2023-02-28</view>
						<view class='ticketTime textr'>06:00</view>
						<view class='ticketCity textr'>烟台客运站港</view>
					</view>
				</view>

			</view>
			<view class="buyAbout" @click="open">
				购取票/退票须知
			</view>

		</view>
		<uni-collapse class="orderCollapse">
			<uni-collapse-item titleBorder="none" :border="false">
				<template v-slot:title>
					<view class="forFlex justifyBetween">
						<view class="orderTitle">乘客信息</view>
						<view class="orderText">2人</view>
					</view>
				</template>
				<view class="content">
					<view class="collList forFlex justifyBetween">
						<view class="collListLeft">
							<view class='forFlex '>
								<view class="collItem1">张三疯</view>
								<view class="collItem5">（网络售票）</view>
							</view>
							<view class="collItem2">身份证：124456185602134526</view>
							<view class="collItem2">舱位等级：坐席—坐席</view>
						</view>
						<view class="collListRight">
							<view class="collItem4">￥200.0</view>
						</view>
					</view>
					<view class="collList forFlex justifyBetween">
						<view class="collListLeft">
							<view class='forFlex '>
								<view class="collItem1">张三疯</view>
								<view class="collItem5">（网络售票）</view>
							</view>
							<view class="collItem2">身份证：124456185602134526</view>
							<view class="collItem2">舱位等级：坐席—坐席</view>
						</view>
						<view class="collListRight">
							<view class="collItem4">￥200.0</view>
						</view>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<uni-collapse class="orderCollapse">
			<uni-collapse-item titleBorder="none" :border="false">
				<template v-slot:title>
					<view class="forFlex ">
						<view class="orderTitle">车辆信息</view>
					</view>
				</template>
				<view class="content">
					<view class="collList forFlex justifyBetween">
						<view class="collListLeft">
							<view class="collItem1">车牌号：辽A1245</view>
							<view class="collItem2">车辆类型：小轿车</view>
						</view>
						<view class="collListRight">
							<view class="collItem4">￥700.0</view>
						</view>
					</view>
					<view class="collList forFlex justifyBetween">
						<view class="collListLeft">
							<view class="collItem1">车牌号：辽A1245</view>
							<view class="collItem2">车辆类型：小轿车</view>
						</view>
						<view class="collListRight">
							<view class="collItem4">￥700.0</view>
						</view>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="orderBottomInfo">
			<view class="orderInfoTitle">
				取票信息
			</view>
			<view class="orderInfoText">
				身份证：张丹峰（13545678956）
			</view>
			<view class="orderInfoText">
				出发港口：大连湾客运中心
			</view>
		</view>
		<view class="orderBottomInfo" >
			<view class="orderInfoTitle">
				订单信息
			</view>
			<view class="orderInfoText">
				订单编号：1524682356813545678956）
			</view>
			<view class="orderInfoText">
				预定日期：2023-03-05 10:15
			</view>
		</view>
		<view class='dialogBg' v-if="dialogShow" ref='dialog'>
			<view class='dialogInside'>
				<view class='dialogTop'>
					<view>价格明细</view>
					<view>
						<uni-icons type="close" size="28" color='#A8A8A8' @click="dialogShow = false"></uni-icons>
					</view>
				</view>
				<view class='dialogText'>
					<view class="dialogOrderList">
						<view class="dialogTit">船票金额：坐席—坐席</view>
						<view>X2</view>
						<view>￥1800.00</view>
					</view>
					<view class="dialogOrderList">
						<view class="dialogTit">车辆上船：小轿车</view>
						<view>X2</view>
						<view>￥1800.00</view>
					</view>
				</view>
				<view class='dialogBottom'>
					<view>总额：</view>
					<view class="dialogPrice">￥1800.00</view>
				</view>

			</view>
		</view>
		<view class="buttomBtn">
			<view class="forFlex justifyBetween" style='width: 100%;' v-show="0">
				<view class="buttomBtnItem">申请退票</view>
				<view class="buttomBtnItem buttomBlue">改签</view>
			</view>
			<view class="forFlex justifyBetween" style='width: 100%;' v-show="0">
				<view class="buttomBtnItem">取消订单</view>
				<view class="buttomBtnItem buttomBlue">立即支付</view>
			</view>
			<view class="forFlex justifyBetween" style='width: 100%;' v-show="1">
				<view class="buttomBtnItem buttomBlue">再来一单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dialogShow: false
			}
		}
	}
</script>

<style>
	.orderDetailsTop {
		background: #1485EE;
		padding: 40rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
	}

	.orderState {
		font-size: 30rpx;
		margin-bottom: 20rpx;
	}

	.orderText2 {
		font-size: 24rpx;
	}

	.orderPrice {
		font-size: 30rpx;
		margin-bottom: 20rpx;
	}

	.orderPriceDetails {
		font-size: 24rpx;
	}

	.buyTop {

		border-radius: 10rpx;
		overflow: hidden;
	}

	.buyInfo {
		background: #fff;
		padding: 30rpx 20rpx;
		color: #000;
		margin: 20rpx 20rpx 0 20rpx;
		border-radius: 10rpx 10rpx 0 0;
	}

	.buyAbout {
		margin: 0 20rpx;
		font-size: 30rpx;
		text-align: center;
		color: #1485ee;
		padding: 24rpx 0;
		background: #fff;
		border-top: 1rpx solid #A8A8A8;
		border-radius: 0 0 10rpx 10rpx;
	}

	.ticketListLeft {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.ticketTime {
		font-size: 32rpx;
		margin-bottom: 14rpx;
		position: relative;
	}

	.ticketDay {
		font-size: 26rpx;
		margin-bottom: 14rpx;
	}

	.ticketDuration {
		color: #000;
		font-size: 24rpx;
		margin-top: 10rpx;
		align-items: center;
		text-align: center;

	}

	.ticketType {
		color: #000;
		text-align: center;
		font-size: 26rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #000;
	}

	.ticketCity {
		font-size: 26rpx;
	}

	.ticketInfo {
		width: 37%;
	}

	.collItem1 {
		font-size: 30rpx;
	}

	.collItem2,
	.collItem3 {
		color: #a7a7a7;
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.collItem4 {
		text-align: right;
		font-size: 36rpx;
		color: #FF5A00;
	}

	.collItem5 {
		color: #1485ee;
		font-size: 24rpx;
		margin-left: 10rpx;
	}

	.orderCollapse .uni-collapse {
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		width: auto;
	}

	.orderTitle {
		color: #1485ee;
	}

	.orderText {
		color: #a7a7a7;
		font-size: 24rpx;
	}

	.collList {
		border-bottom: 1rpx solid #F6F6F6;
		padding: 20rpx 0;
	}

	.orderBottomInfo {
		background: #fff;
		padding: 20rpx;
		color: #A7A7A7;
		margin: 20rpx;
		border-radius: 10rpx;
	}

	.orderInfoTitle {
		border-bottom: 1rpx solid #F6F6F6;
		color: #1485ee;
		height: 80rpx;
		line-height: 80rpx;
	}

	.orderInfoText {
		color: #a7a7a7;
		font-size: 24rpx;
		margin: 10rpx 0;
	}

	.dialogBg {
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

	.dialogInside {
		width: 90%;
		margin: 0 auto;
		background: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10rpx;
		overflow: hidden;
	}

	.dialogTop {

		height: 100rpx;
		border-bottom: 1rpx solid #F6F6F6;
		padding: 0 20rpx;
		font-size: 32rpx;
		color: #1a1a1a;
		align-items: center;
		justify-content: space-between;
		display: flex;
	}

	.dialogBottom {
		height: 100rpx;

		padding: 0 20rpx;
		font-size: 32rpx;
		color: #1a1a1a;
		align-items: center;
		justify-content: space-between;
		display: flex;
	}

	.dialogOrderList {
		align-items: center;
		justify-content: space-between;
		display: flex;
		margin-bottom: 10rpx;

	}

	.dialogText {

		padding: 20rpx;
		font-size: 24rpx;
		color: #1a1a1a;

	}

	.dialogPrice {
		text-align: right;
		font-size: 36rpx;
		color: #FF5A00;
	}

	.dialogTit {
		width: 40%;
		color: #a7a7a7;
	}
	.buttomBtn{
		position: sticky;bottom:0;
		left:0;right:0;
		display:flex;
		align-items: center;
		justify-content: space-between;
	}
	.buttomBtnItem{
		flex:1;
		text-align:center;
		height:94rpx;
		color:#A8A8A8;
		line-height: 94rpx;
		background:#fff;
		font-size:32rpx;
	}
	.buttomBlue{
		background:#1485ee;
		color:#fff;
	}
</style>
