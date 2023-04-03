<template>
	<view>
		<view class="forPos">
			<Swiper　:indicatorDots='indicatorDots' :autoplay='autoplay' :interval='interval' :duration='duration'
				:imgList='imgList'></Swiper>
			<view class='noticeView' @click="open">
				公告：通知  
				<!-- <FontAwesome type="fas fa-angle-right" size="40" color="red"></FontAwesome> -->
			</view>
		</view>
		<view class="cityView">
			<view class="cityItem">
				<view class="cityTitle">出发城市</view>
				<input class="uni-input cityInput" placeholder="出发城市" />
			</view>
			<view class="indexBtn"></view>
			<view class="cityItem">
				<view class="cityTitle textr">到达城市</view>
				<input class="uni-input cityInput textr" placeholder="到达城市" />
			</view>
		</view>
		<view class="dateView">
			<input class="uni-input dateInput" placeholder="日期" />
		</view>
		<view class="ticketSearchBtn" @click="goTicketList()">
			船票查询
		</view>
		<view class="ticketAboutBtn">
			购票须知
		</view>
		<view class="copyRight">
			<image :src = 'guohui' class="guohui"></image><br>
			版权所有:海运票务<br>
			技术支持:喵喵科技有限责任公司
		</view>
		<Popup ref='popUp' :postTitle ="postTitle" :postContent="postContent"></Popup>
	</view>
</template>

<script>
	var api = require('../../utils/api')
	var tools = require('../../utils/utils')
	import Swiper from '../../components/swiper/swiper.vue'
	import Popup from '../../components/popup/popup.vue'
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		data() {
			return {
				guohui:'../../static/images/icon10.png',
				postTitle:'',
				postContent:'',
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
			this.getArticles()
		},
		created() {

		},
		components: {
			'Swiper': Swiper,
			'Popup': Popup,
			'FontAwesome':FontAwesome
		},
		methods: {
			open() {
				this.$refs.popUp.open()
			},
			getArticles() {
				api.get({
				    url: 'portal/articles/category/1',
				    data: {
				    },
				    success: data => {
				        if (data.code == 1) {
				            this.postTitle = data.data.list[1].post_title
				            this.postContent = data.data.list[1].post_content
				        }
				        if (data.code == 0) {
				            tools.showToast(data.msg)
				        }
				    }
				});
			},
			goTicketList(){
				uni.navigateTo({
					url: '/pages/ticketList/index'
				});
			}

		}
	}
</script>

<style>
	page{
		background:#fff;
	}
	.indexBtn{
		background:url('../../static/images/icon9.png') no-repeat;
		width:60rpx;height:60rpx;
		background-size:100% 100%;
	}
</style>
