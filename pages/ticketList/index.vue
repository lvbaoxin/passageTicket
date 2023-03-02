<template>
	<view class="bg">
		<view class="dateTop">
			<view class='dateTopList'>
				<view class="dateTopItem" v-for="(item,index) in dateTopList" :class="item.active" :key="index">
					<view class='dateDay'>{{item.dateDay}}</view>
					<view class='dateWeek'>{{item.dateWeek}}</view>
				</view>
			</view>
			<view class="line"></view>
			<view class='dateTopSelect'>
				<view class="dateTopSelectBtn">按钮</view>
			</view>
		</view>

		<Collapse :ticketList="ticketList"></Collapse>
		<!-- 
			<view class="ticketList">
				<view class="forFlex justifyBetween">
					<view class="ticketListLeft">
						<view class="ticketInfo">
							<view class='ticketTime'>23:00</view>
							<view class='ticketCity'>大连湾综合 交通枢纽</view>
						</view>
						<view>
							<view class='ticketDuration'>07:00</view>
							<view class='ticketType'>棒棰岛—国企</view>
						</view>
						<view class="ticketInfo">
							<view class='ticketTime'>06:00<i class="ticketI">+1</i></view>
							<view class='ticketCity'>烟台客运站港</view>
						</view>
					</view>
					<view class="ticketListRight">
						<view class="forFlex justifyCenter">
							<view class="ticketListPrice">￥200.00</view>
							<view class="ticketListPriceI">起</view>
						</view>
						<view class="ticketBuy">
							渤海翠珠
						</view>
					</view>
				</view>
				<view class="ticketTab">
					<view>111</view>
					<view>222</view>
				</view>
				<view class="ticketTabCont">
					<view>111</view>
					<view>222</view>
				</view>
			</view> -->

		<!-- <uni-collapse class='ticketCollBg'>
				<uni-collapse-item titleBorder="none" :show-arrow=false>
					<template v-slot:title>
						<view class="">
							<view class="forFlex justifyBetween">
								<view class="ticketListLeft">
									<view class="ticketInfo">
										<view class='ticketTime'>23:00</view>
										<view class='ticketCity'>大连湾综合 交通枢纽</view>
									</view>
									<view>
										<view class='ticketDuration'>07:00</view>
										<view class='ticketType'>棒棰岛—国企</view>
									</view>
									<view class="ticketInfo">
										<view class='ticketTime'>06:00<i class="ticketI">+1</i></view>
										<view class='ticketCity'>烟台客运站港</view>
									</view>
								</view>
								<view class="ticketListRight">
									<view class="forFlex justifyCenter">
										<view class="ticketListPrice">￥200.00</view>
										<view class="ticketListPriceI">起</view>
									</view>
									<view class="ticketBuy">
										渤海翠珠
									</view>
								</view>
							</view>
						</view>
					</template>
					<view class="content">
						<view class="myTab">
							<view @click="tabCur(0)" :class="{active:cur==0}">绩效奖</view>
							<view @click="tabCur(1)" :class="{active:cur==1}">其他奖项</view>
						</view>
						<view v-show="cur==0">
							0
						</view>
						<view v-show="cur==1">
							1
						</view>
					</view>
				</uni-collapse-item>


			</uni-collapse> -->



	</view>

</template>

<script>
	import Collapse from '../../components/collapse/collapse.vue'
	export default {
		data() {
			return {
				dateTopList: [{
						'dateDay': 25,
						'dateWeek': '星期日',
						'active': "active"
					},
					{
						'dateDay': 26,
						'dateWeek': '星期日',
						'active': ""
					},
					{
						'dateDay': 27,
						'dateWeek': '星期日',
						'active': ""
					},
					{
						'dateDay': 28,
						'dateWeek': '星期日',
						'active': ""
					},
					{
						'dateDay': 29,
						'dateWeek': '星期日',
						'active': ""
					},
					{
						'dateDay': 30,
						'dateWeek': '星期日',
						'active': ""
					},
					{
						'dateDay': 31,
						'dateWeek': '星期日',
						'active': ""
					},
				],
				value: ['0'],
				accordionVal: '1',
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
				ticketList:[
					{
						"id":0,
						"startOffTime":"22:00",
						"startOffCity":"大连湾综合交通枢纽",
						"arriveTime":"6:00",
						"arriveCity":"烟台客运站港",
						"ticketDuration":"07:00",
						"ticketType":"棒棰岛—国企",
						"ticketPrice":"200.00",
						"ticketName":"渤海翠珠",
						"cur":0
					},
					{
						"id":1,
						"startOffTime":"23:00",
						"startOffCity":"大连湾综合交通枢纽",
						"arriveTime":"6:00",
						"arriveCity":"烟台客运站港",
						"ticketDuration":"07:00",
						"ticketType":"棒棰岛—国企",
						"ticketPrice":"100.00",
						"ticketName":"翠珠",
						"cur":0
					},
					
				],
				cur: 0, // 默认选中第一个值
			}
		},
		components: {
			'Collapse': Collapse
		},
		methods: {
			tabCur(e) {
				this.cur = e
			}
		}
	}
</script>

<style>
	.dateTop {
		background: #fff;
		position: fixed;
		top: 0px;
		height: 130rpx;
		display: flex;
		align-items: center;
		z-index: 99;
	}

	.dateTopList {
		display: -webkit-box;
		overflow-x: scroll;
		width: 48%;
	}

	.ticketView {
		margin-top: 150rpx;
	}

	.dateTopSelect {
		width: 165rpx;
	}

	.dateTopSelectBtn {
		width: 120rpx;
		height: 90rpx;
		background: #eff7ff;
		border-radius: 10rpx;

	}

	.dateTopItem {
		/* float: left; */
		width: 120rpx;
		height: 90rpx;
		background: #eff7ff;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #1A1A1A;
		margin: 0 10rpx;
	}

	.dateTopList .dateTopItem.active {
		background: #1485EE;
		color: #fff;
	}

	.dateDay {
		font-size: 32rpx;
		margin-bottom: 10rpx;
	}

	.dateWeek {
		font-size: 22rpx;
	}

	.ticketList {
		background: #ffffff;
		border-radius: 10rpx;
		padding: 20rpx;
		margin: 20rpx;
	}

	.ticketBuy {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;

		color: #1485ee;
		text-align: center;
	}

	.ticketTime {
		font-size: 32rpx;
		margin-bottom: 26rpx;
		position: relative;
	}

	.ticketCity {
		font-size: 26rpx;
	}

	.ticketDuration {
		color: #A8A8A8;
		font-size: 22rpx;
		border-bottom: 1rpx solid #A8A8A8;
		align-items: center;
		text-align: center;
		padding-bottom: 10rpx;
	}

	.ticketType {
		color: #A8A8A8;
		text-align: center;
		font-size: 22rpx;
		margin-top: 10rpx;
	}

	.ticketListLeft {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-right: 20rpx;
	}

	.ticketInfo {
		width: 26%;
	}

	.ticketI {
		display: initial;
		font-size: 20rpx;
		position: absolute;
		right: 10rpx;
		top: 0rpx;
	}

	.line {
		height: 90rpx;
		background: #a8a8a8;
		width: 1rpx;
		margin: 0 16rpx;
	}

	.ticketListPrice {
		color: red;
		font-size: 28rpx;
	}

	.ticketListPriceI {
		color: #A8A8A8;
		font-size: 20rpx;
	}

	.ticketTab {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		// margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}

	.ticketView .uni-collapse {
		background: transparent;
		background: #ffffff;
		border-radius: 10rpx;
		padding: 18rpx;
		margin: 20rpx;
		width: 90%;
	}

	.myTab {
		display: flex;
		font-size: 14px;
		width: 92%;
		padding: 4px 0;
		margin: 12px auto 0;
		background: #fff;
	}

	.myTab li {
		font-size: 14px;
		color: #a7abbc;
		margin-right: 26px;
		height: 26px;
	}

	.myTab li.active {
		/*border-bottom:4px solid rgb(4, 96, 169);*/
		color: rgb(4, 96, 169);
		font-size: 16px;
		font-weight: bold;
		position: relative;
	}

	.myTab li.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		background: rgb(4, 96, 169);
		width: 100%;
		height: 4px;
		left: 0px;
		border-radius: 8px;
	}
</style>
