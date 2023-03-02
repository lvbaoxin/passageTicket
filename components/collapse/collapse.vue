<template>
	<view class="ticketView">
		<uni-collapse class='ticketCollBg' v-for="(item,index) in arr" :key="index">
			<uni-collapse-item titleBorder="none" :show-arrow=false>
				<template v-slot:title>
					<view class="">
						<view class="forFlex justifyBetween">
							<view class="ticketListLeft">
								<view class="ticketInfo">
									<view class='ticketTime'>{{item.startOffTime}}</view>
									<view class='ticketCity'>{{item.startOffCity}}</view>
								</view>
								<view>
									<view class='ticketDuration'>{{item.ticketDuration}}</view>
									<view class='ticketType'>{{item.ticketType}}</view>
								</view>
								<view class="ticketInfo">
									<view class='ticketTime'>{{item.arriveTime}}<i class="ticketI">+1</i></view>
									<view class='ticketCity'>{{item.arriveCity}}</view>
								</view>
							</view>
							<view class="ticketListRight">
								<view class="forFlex justifyCenter">
									<view class="ticketListPrice">￥{{item.ticketPrice}}</view>
									<view class="ticketListPriceI">起</view>
								</view>
								<view class="ticketBuy">
									{{item.ticketName}}
								</view>
							</view>
						</view>
					</view>
				</template>
				<view class="content">
					<view class="myTab">
						<view @click="tabCur(item,0)" :class="{active:item.cur==0}">绩效奖</view>
						<view @click="tabCur(item,1)" :class="{active:item.cur==1}">其他奖项</view>
					</view>
					<view v-show="item.cur==0">
						0
					</view>
					<view v-show="item.cur==1">
						1
					</view>
				</view>
			</uni-collapse-item>


		</uni-collapse>
	</view>
</template>

<script>
	export default {
		name: "collapse",
		data() {
			return {
				value: ['0'],
				accordionVal: '1',
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
				cur: 0, // 默认选中第一个值
				arr: []
			};
		},
		props: {
			ticketList: { //列表
				type: [Array],
				default () {
					return [];
				}
			},

		},
		mounted() {
			this.arr = this.ticketList
			console.log(this.arr, 'arr')
		},
		// computed: {
		// 	ticketList() {
		// 		return this.ticketList
		// 	}
		// },
		methods: {
			tabCur(i, e) {


				this.arr.map(item => {
					if (i.id == item.id) {
						item.cur = e
						// this.$nextTick(() => {

						// });

					}
					console.log(this.arr,'arr2')
					return item
				})


			}
		}
	}
</script>

<style>
	.ticketView {
		margin-top: 150rpx;
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
