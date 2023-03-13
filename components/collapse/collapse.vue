<template>
	<view class="ticketView">
		<uni-collapse class='ticketCollBg' v-for="(item,index) in arr" :key="index" :ref="'collapse'+index"
			>
			<uni-collapse-item titleBorder="none" :show-arrow=false :border="false">
				<template v-slot:title>
					<view>
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
				<view>
					<!-- <view class="ticketBuyAdd">
						<uni-icons type="plus" color='#1485ee' size="26"></uni-icons>乘客预定
					</view> -->
					<view class="collapseTab">
						<view class="collapseTabItem" @click="tabCur(item,0)" :class="{active:item.cur==0}">
							<FontAwesome type="fas fa-user-friends" size="40"></FontAwesome>&nbsp;乘客预定
						</view>
						<view class="collapseTabItem" @click="tabCur(item,1)" :class="{active:item.cur==1}">
							<FontAwesome type="fas fa-car-alt" size="40"></FontAwesome> &nbsp;车票预定
						</view>
					</view>

					<view class="ticketTypeList" v-for='(v,i) in item.list' :key="i" v-show="item.cur==0">
						<view class="ticketTypePic">
							<image class="ticketTypePic" mode="heightFix" :src="v.src"></image>
						</view>
						<view class="ticketMid">
							<view class="forFlex">
								<view class="ticketTypeTitle">{{v.ticketTypeTitle}}</view>
								<view class="ticketTypeNum">余票：{{v.ticketTypeNum}}张</view>
							</view>
							<view class="ticketTypeAbout">{{v.ticketTypeTitle}}</view>
						</view>
						<view class="ticketTypeRight">
							<view class="ticketTypePrice">￥{{v.ticketTypePrice}}</view>
							<view class="ticketTypeBtn">预定</view>
						</view>
					</view>
					<view v-show="item.cur==1">
						<view class="addCarView">
							<view class="orderInfoTitle">车辆上船</view>
							<view class='addCarBtn'>预定</view>
						</view>
					</view>

				</view>
			</uni-collapse-item>


		</uni-collapse>
	</view>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		name: "collapse",
		data() {
			return {
				value: ['0'],
				accordionVal: '1',
				cur: 0, // 默认选中第一个值
				arr: [],
				src: '../../static/images/1.jpg'
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
		components: {
			'FontAwesome': FontAwesome
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

				let that = this
				this.arr.map(item => {
					if (i.id == item.id) {
						item.cur = e
					}
					//console.log(this.arr, 'arr2')
					// this.$nextTick(() => {
					// 	this.$refs.collapse[item.id].resize()
					// })
					return item
				})
			}
		}
	}
</script>

<style>
	/* .ticketView {
		margin-top: 150rpx;
	} */
	.addCarView {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
	}

	.addCarBtn {
		width: 120rpx;
		height: 60rpx;
		background: #1485ee;
		border-radius: 5rpx;
		color: #fff;
		text-align: center;
		line-height: 60rpx;
	}

	.orderInfoTitle {
		color: #1a1a1a;
		line-height: 60rpx;
	}

	.ticketView .uni-collapse {
		background: transparent;
		background: #ffffff;
		border-radius: 10rpx;
		padding: 18rpx;
		margin: 20rpx;
		width: 90%;
	}

	.ticketBuyAdd {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #1485ee;
		padding: 10rpx 0;
	}

	.ticketTypeList {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.ticketTypePic {
		width: 120rpx;
		height: 90rpx;
		border-radius: 5rpx;
	}

	.ticketTypeTitle {
		font-size: 30rpx;
	}

	.ticketTypeNum {
		color: #1485ee;
		font-size: 24rpx;
		margin-left: 10rpx;
	}

	.ticketTypeAbout {
		margin-top: 10rpx;
		color: #a7a7a7;
		font-size: 24rpx;
	}

	.ticketTypePrice {
		text-align: right;
		font-size: 36rpx;
		margin-bottom: 10rpx;
		color: #FF5A00;
	}

	.ticketTypeBtn {
		font-size: 30rpx;
		width: 120rpx;
		height: 60rpx;
		background: #1485ee;
		border-radius: 5rpx;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		float: right;
	}

	.collapseTab {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
		background: #fff;
		border-bottom: 1rpx solid #A8A8A8;
	}

	.collapseTabItem {
		text-align: center;
		color: #1A1A1A;
		font-size: 32rpx;
		border-bottom: 5rpx solid transparent;
		flex: 1;
		line-height: 88rpx;
	}

	.collapseTabItem.active {
		border-bottom: 5rpx solid #1485EE;
		color: #1485EE;
	}
</style>
