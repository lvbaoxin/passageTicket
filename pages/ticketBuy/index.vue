<template>
	<view class='bg'>
		<view class='buyView'>
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
			<view class="buyItem">
				<uni-collapse>
					<uni-collapse-item titleBorder="none" :border='false'>
						<template v-slot:title>
							<view class="forFlex justifyBetween">
								<view class="forFlex justifyBetween">
									<view class="ticketCollTitle">乘客</view>
									<view class="ticketCollInfo">（单笔订单限5张票）</view>
								</view>
								<view class="ticketCollNum">
									2人
								</view>
							</view>
						</template>

						<view class="collUserList" v-for="(item,index ) in userList" :key="index">
							<view class="forFlex justifyBetween collUserItem">
								<view class="collDel">
									-
								</view>
								<view class="collFlex">
									<view class="collUserName">{{item.name}}</view>
									<view class="collUserIdcard">身份证：{{item.idCard}}</view>
								</view>
								<view class="collUserPrice">
									￥{{item.price}}
								</view>
							</view>
							<view class="collTypeItem">
								<view>舱位</view>
								<view>{{item.shippingSpace}}</view>
							</view>
							<view class="collTypeItem">
								<view>票价类型</view>
								<view>{{item.fareType}}</view>
							</view>
						</view>

					</uni-collapse-item>
				</uni-collapse>
			</view>
			<view class="buyItem">
				<view class="addUser" @click="addUser">
					<uni-icons type="plus" color='#1485ee' size="26"></uni-icons>添加乘客
				</view>
			</view>
			<view style='color:#1485EE;'>车辆上船</view>
			<view class="buyItem">
				<view class="forFlex justifyBetween">
					<view class="carLeft">
						<view class='carType'>
							小型汽车
						</view>
						<view class='carInfo'>
							6米以内车型轿车/吉普车/商务车 (车票不带司机票)
						</view>
					</view>
					<view class="carRight">
						<view class='carPrice textr'>￥700.00</view>
						<view class='carInfo textr'>余票:12张</view>
						<uni-number-box @change="changeValue" background="#fff" color="#1485EE" :value="numberValue" />
					</view>
				</view>
			</view>
			<view class="buyItem">
				<view class="forFlex justifyBetween">
					<view class="carLeft">
						<view class='carType'>
							皮卡车
						</view>
						<view class='carInfo'>
							7米内皮卡车
						</view>
					</view>
					<view class="carRight">
						<view class='carPrice textr'>￥750.00</view>
						<view class='carInfo textr'>余票:12张</view>
						<uni-number-box @change="changeValue2" background="#fff" color="#1485EE" :value="numberValue" />
					</view>
				</view>
			</view>
			<view class="buyItem">
				<view class="forFlex justifyBetween">
					<view class="carLeft">
						<view class='carType'>
							货车
						</view>
						<view class='carInfo'>
							如需货车上船，请联系我们
						</view>
					</view>
					<view class="carRight">
						<view class='carTelBtn'>立即咨询</view>
					</view>
				</view>
			</view>

			<!-- <view class="buyItem" style='padding:0'>
				<view class=' forFlex justifyBetween' style="padding:24rpx">
					<view>
						车辆上船
					</view>
					<view>
						<switch color="#1485ee" @change="switch2Change" style="transform:scale(0.9)" />
					</view>
				</view>
				<view v-if='getCar' class='getCar'>
					<view class="getCarItem">
						<view class="forFlex justifyBetween">
							<view @tap="plateShow=true">车牌号</view>
							<view class="cu-form-group">
								<input disabled="true" v-model.trim="plateNo" />

							</view>
							<uni-icons @tap="plateShow=true" type="forward" color='#A7A7A7' size="28"></uni-icons>
						</view>
					</view>
					<view class="getCarItem">
						<view class="forFlex justifyBetween">
							<view>车辆类型</view>
							<picker @change="bindPickerChange" :value="index" name="cardType" :range="array">
								<view class="uni-input">{{array[index]}}</view>
							</picker>
							<uni-icons type="forward" color='#A7A7A7' size="28"></uni-icons>
						</view>
					</view>
					<view class="getCarItem" style="border: none;">
						<view class="forFlex" style='align-items: flex-end;'>
							<view>预计：</view>
							<view class='getCarPrice'>￥0</view>
							<view class='getCarInfo'>（此价格仅为参考价格，实际以检车价格为准）</view>
						</view>
					</view>
				</view>

			</view>

			<view class="buyItem">
				<view class="userItem">
					<view class="title">联系人</view>
					<input class="userItemInput" name="userName" placeholder="与联系人证件一致" />
				</view>

				<view class="userItem">
					<view class="title">身份证号码</view>
					<input class="userItemInput" name="cardID" placeholder="与联系人证件一致" />
				</view>
				<view class="userItem" style="border:none;">
					<view class="title">手机号码</view>
					<input class="userItemInput" name="telNum" placeholder="接收通知信息" />
				</view>

			</view>
			<view class="buyItem forFlex justifyBetween">
				<view style="color:#A7A7A7">
					优惠券
				</view>
				<view class='forFlex' style="color:#A7A7A7">
					无可用优惠券 <uni-icons type="forward" color='#A7A7A7' size="28"></uni-icons>
				</view>
			</view> -->


		</view>




		<view class="affirmView">
			<view class="affirmViewLeft">订单总额:<view class='affirmPrice'>￥{{affirmPrice}}</view>
			</view>
			<view class="affirmViewRight">确认订单</view>
		</view>
		<plate-input v-if="plateShow" :plate="plateNo" @export="setPlate" @close="plateShow=false" />
		<Popup ref='popUp' :postTitle ="postTitle" :postContent="postContent"></Popup>
		<Calltel ref='Calltel'></Calltel>
		<view class='addUserViewBg' v-show='addUserViewBg'>
			<view class='addUserInside'>
				<view class='addUserTool'>
					<view style="color:#A8A8A8;">取消</view>
					<view style='color:#1485ee'>确认</view>
				</view>
				<view class="userList">
					<view class="userItem">
						<view class="userItemLeft">
							<view>
								<uni-icons type="compose" size="24" color='#A8A8A8'></uni-icons>
							</view>
							<view class="itemRight">
								<view class="userName">
									张三疯
								</view>
								<view class="userCardId">
									身份证：124456185602134526
								</view>
							</view>

						</view>
						<view class="userItemRight">
							<checkbox value="cb" style="transform:scale(0.7)" />
						</view>
					</view>
				</view>
				<view class="addUserToolsBtm" @click="addUser">
					<uni-icons type="plus" color='#1485ee' size="26"></uni-icons>添加乘客
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import plateInput from '../../components/uni-plate-input/uni-plate-input.vue'
	import Popup from '../../components/popup/popup.vue'
	import Calltel from '../../components/calltel/calltel.vue'
	export default {
		data() {
			return {
				postTitle:'',
				postContent:'',
				plateNo: '',
				plateShow: false,
				getCar: false,
				index: 0,
				array: ['轿车'],
				carNum: 0,
				carNum2: 0,
				affirmPrice: 0,
				numberValue: 0,
				addUserViewBg: false,
				userList: [{
						'name': '张三疯',
						'idCard': '124456185602134526',
						'price': '200.00',
						'shippingSpace': '坐席—坐席',
						'fareType': '网络售票'
					},
					{
						'name': '张三疯2',
						'idCard': '124456185602134526',
						'price': '200.00',
						'shippingSpace': '坐席—坐席',
						'fareType': '网络售票'
					},
				]
			}
		},

		components: {
			'plateInput': plateInput,
			'Popup': Popup,
			'Calltel': Calltel
		},
		methods: {
			setPlate(plate) {
				console.log(plate, 'plate')
				//车牌号验证方法
				var creg = /^(?=.*\d)[\da-zA-Z挂学警港澳]{5}$/;
				if (creg.test(plate.slice(2, 7))) {
					console.log("正确")
					this.plateNo = plate
					this.plateShow = false
				} else {
					uni.showToast({
						title: '请输入正确的车牌号码',
						icon: 'none'
					})
					this.plateShow = true
				}


			},
			open() {
				this.$refs.popUp.open()
			},
			changeValue(value) {
				this.carNum = value
				this.affirmPrice = Number(this.carNum * 700) + Number(this.carNum2 * 750)
			},
			changeValue2(value) {
				this.carNum2 = value
				this.affirmPrice = Number(this.carNum * 700) + Number(this.carNum2 * 750)
			},
			switch2Change: function(e) {

				this.getCar = e.detail.value
			}


		}
	}
</script>

<style>
	.buyView {
		padding: 20rpx;
		margin: 0 auto;
	}

	.buyTop {

		border-radius: 10rpx;
		overflow: hidden;
	}

	.buyInfo {
		background: #1485EE;
		padding: 30rpx 20rpx;
		color: #fff;
	}

	.buyAbout {
		font-size: 32rpx;
		text-align: center;
		color: #1485ee;
		padding: 24rpx 0;
		background: #fff;
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
		color: #fff;
		font-size: 24rpx;
		margin-top: 10rpx;
		align-items: center;
		text-align: center;

	}

	.ticketType {
		color: #fff;
		text-align: center;
		font-size: 26rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #fff;
	}

	.ticketCity {
		font-size: 26rpx;
	}

	.ticketInfo {
		width: 37%;
	}

	.buyItem {
		border-radius: 10rpx;
		font-size: 32rpx;
		padding: 24rpx;
		background: #fff;
		margin: 20rpx 0;
	}


	.addUser {
		display: flex;
		align-items: center;
		justify-content: center;

		color: #1485ee;

	}

	.userItem {
		height: 100rpx;
		border-bottom: 1rpx dashed #a8a8a8;
		display: flex;
		align-items: center;

		background: #fff;
	}

	.userItem .title {
		width: 170rpx;
		/* font-size: 30rpx; */
		color: #a7a7a7;
		line-height: 100rpx;
	}

	.userItemInput {
		height: 100rpx;
		background: #fff;
		margin-left: 20rpx;
		line-height: 100rpx;
	}

	.getCar {
		border-top: 1rpx solid #a8a8a8;

	}

	.getCarItem {

		padding: 24rpx;
		background: #fff;
		margin: 0 20rpx;
		color: #a7a7a7;
		border-bottom: 1rpx solid #a8a8a8;
	}

	.getCarPrice {
		color: red;
	}

	.getCarInfo {
		font-size: 20rpx;
	}

	.carInfo {
		color: #a8a8a8;
		font-size: 22rpx;
		margin: 12rpx 0;
	}

	.carLeft {
		width: 50%;
	}

	.carPrice {
		color: #FF5A00;
		font-size: 28rpx;
		margin-top: 16rpx;
	}

	.carTelBtn {
		width: 120rpx;
		height: 40rpx;
		background: #eff7ff;
		border-radius: 2.5rpx;
		color: #1a1a1a;
		font-size: 22rpx;
		text-align: center;
		line-height: 40rpx;
	}

	.affirmView {
		z-index: 99;
		position: sticky;
		bottom: 0;
		height: 110rpx;
		background: #fff;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
	}

	.affirmViewLeft {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		color: #a8a8a8;
	}

	.affirmPrice {
		color: #FF5A00;
	}

	.affirmViewRight {
		width: 240rpx;
		height: 88rpx;
		background: #1485ee;
		border-radius: 44rpx;
		font-size: 32rpx;
		text-align: center;
		color: #ffffff;
		line-height: 88rpx;
		;
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

	.addUserInside {
		height: 580rpx;
		background: #fff;
		position: absolute;
		bottom: 0;
		padding: 20rpx;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.addUserTool {
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #a8a8a8;
		line-height: 80rpx;
	}

	.addUserToolsBtm {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
		border-top: 1px solid #a8a8a8;
		color: #1485ee;
	}

	.userItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.userItemLeft {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.userList {
		flex: 1;
	}

	.itemRight {
		margin-left: 20rpx;
	}

	.userName {
		font-size: 32rpx;
		color: #1a1a1a;
	}

	.userCardId {
		margin-top: 10rpx;
		font-size: 22rpx;
		color: #a7a7a7;
	}

	.ticketCollTitle {
		color: #1A1A1A;
		font-size: 32rpx;
	}

	.ticketCollInfo,
	.ticketCollNum {
		font-size: 26rpx;
		color: #A7A7A7;
	}

	.collUserName {
		font-size: 32rpx;
		color: #1a1a1a;
		margin-bottom: 16rpx;
	}

	.collUserIdcard {
		font-size: 26rpx;
		color: #A7A7A7;
	}

	.collUserPrice {
		font-size: 32rpx;
		color: #FF5A00;
	}

	.collFlex {
		flex: 1;
	}

	.collDel {
		text-align: center;
		width: 40rpx;
		height: 40rpx;
		border: 1rpx solid #ff5a00;
		margin-right: 20rpx;
		border-radius: 40rpx;
		color: #ff5a00;
	}

	.collUserItem {
		/* margin:30rpx 0 0; */
	}

	.collUserList {
		padding: 30rpx 0 0;
	}

	.buyItem .uni-collapse-item__title-arrow {
		margin-right: 0px;
	}

	.collTypeItem {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 16rpx 0;
		font-size: 26rpx;
	}
</style>
