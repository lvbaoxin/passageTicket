<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item  v-for="(item,index) in imgList" :key="index">
					<image mode="heightFix" :src="item.img"
					                       ></image>
											
				</swiper-item>
				
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		name: "swiper",
		props: {
		  indicatorDots: {
		      type: [Boolean],
		      default() {
		          return false;
		      }
		  },
		  autoplay: {//是否自动切换
		      type: [Boolean],
		      default() {
		          return true;
		      }
		  },
		  interval: {//自动切换时间间隔
		      type: [Number],
		      default() {
		          return 2000;
		      }
		  },
		  duration: {//滑动动画时长
		      type: [Number],
		      default() {
		          return 500;
		      }
		  },
		  imgList: {//图片列表
		      type: [Array],
		      default() {
		          return [];
		      }
		  },
		  
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				
			};
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 360rpx;
	}
	.swiper-item {
		display: block;
		height: 360rpx;
		line-height: 360rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
