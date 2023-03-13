<template>
	<view class="bg">
		<sl-filter :ref="'slFilter'" :topFixed="true" :isTransNav="true" :navHeight="0" :color="titleColor"
			:themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter>
		<Collapse :ticketList="ticketList"></Collapse>
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
		<view class='addUserViewBg' v-show='swiperInside'>
			<view class='swiperInside'>
				<view class='addUserTool'>
					<image class="ticketTypePic" mode="heightFix" :src="imgSrc"></image>
				</view>
				<view class="userItem">
					<view class="userItemLeft">

						<view class="itemRight">
							<view class="forFlex">
								<view class="userName">
									散席—硬座
								</view>
								<view class='ticketBuyInfo'>余票:12张</view>
							</view>

							<view class="userCardId">
								四等特—卧铺
							</view>
						</view>

					</view>
					<view class="userItemRight">
						<view class="collUserPrice">
							￥100.0
						</view>
					</view>
				</view>
				<view class='submitBtn'>
					预定
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	// 引入 api 下的 index 文件
	const $api = require('@/api/index')
	import Collapse from '../../components/collapse/collapse.vue'
	import slFilter from '@/components/sl-filter/sl-filter.vue';
	export default {
		data() {
			return {
				imgSrc: '../../static/images/1.jpg',
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
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
				ticketList: [{
						"id": 0,
						"startOffTime": "22:00",
						"startOffCity": "大连湾综合交通枢纽",
						"arriveTime": "6:00",
						"arriveCity": "烟台客运站港",
						"ticketDuration": "07:00",
						"ticketType": "棒棰岛—国企",
						"ticketPrice": "200.00",
						"ticketName": "渤海翠珠",
						"cur": 0,
						"list": [{
								"ticketTypeTitle": '四等特—卧铺',
								"ticketTypeNum": '24',
								"ticketTypePrice": '200.00',
								"src": '../../static/images/1.jpg'
							},
							{
								"ticketTypeTitle": '三等特—卧铺',
								"ticketTypeNum": '22',
								"ticketTypePrice": '230.00',
								"src": '../../static/images/2.jpg'
							}
						]
					},
					{
						"id": 1,
						"startOffTime": "23:00",
						"startOffCity": "大连湾综合交通枢纽",
						"arriveTime": "6:00",
						"arriveCity": "烟台客运站港",
						"ticketDuration": "07:00",
						"ticketType": "棒棰岛—国企",
						"ticketPrice": "100.00",
						"ticketName": "翠珠",
						"cur": 0,
						"list": [{
							"ticketTypeTitle": '四等特—卧铺',
							"ticketTypeNum": '20',
							"ticketTypePrice": '100.00',
							"src": '../../static/images/3.jpg'
						}, ]
					},

				],
				cur: 0, // 默认选中第一个值
				themeColor: '#1485ee',
				titleColor: '#1A1A1A',
				filterResult: '',
				menuList: [{
						'title': '出发港口',
						'detailTitle': '请选择职位类型（可多选）(默认值为[1,2,5])',
						'isMutiple': true,
						'key': 'jobType',
						'defaultSelectedIndex': [1, 2],
						'detailList': [{
								'title': '不限',
								'value': ''
							},
							{
								'title': 'uni-app',
								'value': 'uni-app'
							},
							{
								'title': 'java开发',
								'value': 'java'
							},
							{
								'title': 'web开发',
								'value': 'web'
							},
							{
								'title': 'Android开发',
								'value': 'Android'
							},

						]
					},
					{
						'title': '到达港口',
						'key': 'salary',
						'isMutiple': true,
						'detailList': [{
								'title': '不限',
								'value': ''
							},
							{
								'title': '0~2000',
								'value': '0~2000'
							},
							{
								'title': '2000~3000',
								'value': '2000~3000'
							},
							{
								'title': '3000~4000',
								'value': '3000~4000'
							},
							{
								'title': '4000~5000',
								'value': '4000~5000'
							},
							{
								'title': '5000~6000',
								'value': '5000~6000'
							}
						]
					},
					{
						'title': '开船时间',
						'key': 'single',
						'isMutiple': false,
						'reflexTitle': false,
						'detailTitle': '请选择（单选）(默认值为1)',
						'defaultSelectedIndex': 1,
						'detailList': [{
								'title': '不限',
								'value': ''
							},
							{
								'title': '条件1',
								'value': 'test_1'
							},
							{
								'title': '条件2',
								'value': 'test_2'
							},
							{
								'title': '条件3',
								'value': 'test_3'
							},

						]
					},
					// {
					// 	'title': '排序',
					// 	'key': 'sort',
					// 	'isSort': true,
					// 	'reflexTitle': true,
					// 	'defaultSelectedIndex': 2,
					// 	'detailList': [{
					// 			'title': '默认排序',
					// 			'value': ''
					// 		},
					// 		{
					// 			'title': '发布时间',
					// 			'value': 'add_time'
					// 		},
					// 		{
					// 			'title': '薪资最高',
					// 			'value': 'wages_up'
					// 		},
					// 		{
					// 			'title': '离我最近',
					// 			'value': 'location'
					// 		}
					// 	]
					// }
				],
				swiperInside:false
			}
		},
		computed: {
			showTitle() {
				return (item) => {
					return (item.checkedName && item.checkedName.length) ? item.checkedName.join('/') : item[this
						.fileds]
				}
			},
		},
		components: {
			'Collapse': Collapse,
			'slFilter': slFilter
		},

		methods: {
			tabCur(e) {
				this.cur = e
			},
			confirm(e) {
				console.log('eeee', e);
			},
			reset(val) {
				this.defaultVal = val
			},
			// 在方法中调用
			goList() {

				let data = {}
				$api.getNavList(data).then((res) => {
					console.log(res, 'res');
				})
			},
			result(val) {
				console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
			},
		}
	}
</script>

<style>
	.dateTop {
		background: #fff;
		position: fixed;
		bottom: 0px;
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
		/* margin-top: 150rpx; */
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
		font-size: 26rpx;
		color: #1485ee;
		text-align: right;
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
		/* right: 10rpx; */
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
		font-size: 30rpx;
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

	.addUserViewBg {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.2);
		position: fixed;
		top: 0px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}

	.swiperInside {
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10rpx;
		width: 95%;
		overflow: hidden;
	}

	.addUserTool {
		overflow: hidden;
	}

	.submitBtn {
		width: 590rpx;
		height: 88rpx;
		background: #1485ee;
		border-radius: 44rpx;
		color: #fff;
		font-size: 32rpx;
		line-height: 88rpx;
		margin: 60rpx auto 30rpx;
		text-align: center;
	}

	.userItem {
		display: flex;
		justify-content: space-between;
		padding: 24rpx;
		overflow: hidden;
	}

	.userItem .title {
		width: 170rpx;
		/* font-size: 30rpx; */
		color: #a7a7a7;

	}

	.ticketBuyInfo {
		color: #1485EE;
		font-size: 24rpx;
		margin: 0 12rpx;
	}

	.userName {
		font-size: 32rpx;
		color: #1a1a1a;
	}

	.userCardId {
		margin-top: 10rpx;
		font-size: 24rpx;
		color: #a7a7a7;
	}

	.collUserPrice {
		font-size: 34rpx;
		color: #FF5A00;
	}
</style>
