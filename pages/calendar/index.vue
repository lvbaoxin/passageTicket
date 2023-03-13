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
			getDate(dateObj) {
				//console.log(dateObj.startStr)
				this.getDateArr(dateObj.startStr)
			},
			 getDateArr(dataObj) {
			  const dateArr = [];
			  let date = new Date(dataObj.dateStr);
			  const weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
			  // 获取当天
			  dateArr.push({
			    week: weeks[date.getDay()],
			    dateDate: date.getDate()
			  });
			  // 获取未来6天
			  for (let i = 0; i < 6; i++) {
			    date.setDate(date.getDate() + 1);
			    dateArr.push({
			      week: weeks[date.getDay()],
			      dateDat: date.getDate()
			    });
			  }
			  console.log(dateArr)
			  return dateArr;
			}

		}
	}
</script>

<style>
page{
	background:#fff;
}


</style>
