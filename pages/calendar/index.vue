<template>
	<view >

		<!-- <button form-type="submit" open-type="getUserInfo" @getuserinfo="getUserInfo">点我登录</button>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">点我手机号</button> -->
		<calendar :is-show="true" :start-date='startDate' :isFixed='isFixed' :initMonth='initMonth' @callback="getDate">
			<template v-slot:footer>
				<div>我是脚部</div>
			</template>
		</calendar>

	</view>
</template>

<script>
	import Calendar from '../../components/mobile-calendar-simple/Calendar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				isShow: true,
				//startDate: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
				startDate: '',
				endDate: '',
				betweenStart: '',
				betweenEnd: '',
				initMonth: 12,
				mode: 1,
				isFixed: false,
			}
		},
		onLoad() {

		},
		created() {
			var a = new Date().getDate()
			console.log(a, 'a')
		},
		components: {
			'Calendar': Calendar
		},
		methods: {
			getUserInfo() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
							}
						});
					}
				});
			},
			getPhoneNumber(e) {
				console.log(e)
			},
			//获取回调的日期数据
			getDate(date) {
				console.log(date)
			}

		}
	}
</script>

<style>
page{
	background:#fff;
}


</style>
