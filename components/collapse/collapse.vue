<template>
	<view class="ticketView">
		<uni-collapse class='ticketCollBg' v-for="(item,index) in arr" :key="index">
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
				<view >
					<view class="ticketBuyAdd">
						<uni-icons type="plus" color='#1485ee' size="26"></uni-icons>乘客预定

						<!-- <view @click="tabCur(item,0)" :class="{active:item.cur==0}">绩效奖</view>
						<view @click="tabCur(item,1)" :class="{active:item.cur==1}">其他奖项</view> -->
					</view>
					
					<view class="ticketTypeList" v-for='(v,i) in item.list' :key="i">
						<view class="ticketTypePic">
							 <image  class="ticketTypePic" mode="heightFix" :src="v.src"
							                        ></image>
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
				cur: 0, // 默认选中第一个值
				arr: [],
				src:'../../static/images/1.jpg'
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
					console.log(this.arr, 'arr2')
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
		padding:10rpx 0;
	}
	.ticketTypeList{
		display:flex;align-items: center;
		justify-content: space-between;
	}
	.ticketTypePic{
		width: 120rpx;
		height: 90rpx;
		border-radius: 5rpx;
	}
	.ticketTypeTitle{
		font-size: 30rpx;
	}
	.ticketTypeNum{
	color: #1485ee;
		font-size: 24rpx;
		margin-left: 10rpx;
	}
	.ticketTypeAbout{
		margin-top: 10rpx;
		color: #a7a7a7;
		font-size: 24rpx;
	}
	.ticketTypePrice{
		text-align: right;
		font-size: 36rpx;
		margin-bottom: 10rpx;
		color: #FF5A00;
	}
	.ticketTypeBtn{
		font-size: 30rpx;
		width: 120rpx;
		height: 60rpx;
		background: #1485ee;
		border-radius: 5rpx;
		text-align: center;
		line-height: 60rpx;
		color:#fff;
		float: right;
	}
</style>
