<template>
	<view>
		<view class="forPos">
			<Swiper　:indicatorDots='indicatorDots' :autoplay='autoplay' :interval='interval' :duration='duration'
				:imgList='imgList'></Swiper>
			<view class='noticeView' @click="open">
				公告：通知
			</view>
		</view>
		<view class="cityView">
			<view class="cityItem">
				<view class="cityTitle">出发城市</view>
				<input class="uni-input cityInput" placeholder="出发城市" />
			</view>
			<button>1</button>
			<view class="cityItem">
				<view class="cityTitle">到达城市</view>
				<input class="uni-input cityInput" placeholder="到达城市" />
			</view>
		</view>
		<view class="dateView">
			<input class="uni-input dateInput" placeholder="日期" />
		</view>
		<view class="ticketSearchBtn">
			船票查询
		</view>
		<view class="ticketAboutBtn">
			购票须知
		</view>
		<view class="copyRight">
			服务提供：交通运输部中国交通通信信息中心<br>
			技术支持:中交信有限责任公司
		</view>
		<Popup ref='popUp'></Popup>
	</view>
</template>

<script>
	import Swiper from '../../components/swiper/swiper.vue'
	import Popup from '../../components/popup/popup.vue'
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				imgList: [
					{"img": '../../static/images/1.jpg'
					},
					{
						"img": '../../static/images/2.jpg'
					},
					{
						"img": '../../static/images/3.jpg'
					}
				]
			}
		},
		onLoad() {

		},
		created() {

		},
		components: {
			'Swiper': Swiper,
			'Popup': Popup
		},
		methods: {
			open() {
				this.$refs.popUp.open()
			}


		}
	}
</script>

<style>
</style>
