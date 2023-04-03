<template>
	<view class='bg'>
		<view class="hotLineBG" style='margin-bottom:20rpx;'>
			<view class="lineHistory">
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
				<view class="lineHistoryText">大连-烟台</view>
			</view>
			<view class="clearHistory">
				清除历史
			</view>
			
		</view>
		
		<view class="hotLineBG">
			<view class="hotLineText">
				热门航线
			</view>
		
			<view class="hotLineBtn">
				大连-烟台
			</view>
			<view class="hotLineBtn">
				大连-烟台
			</view>
		</view>
		<view class="hotLineText">
			所有航线
		</view>
		<view class="hotLineBG">
			<view class="hotLine">大连-烟台</view>
			<view class="hotLine">烟台-大连</view>
		</view>
		
	</view>
	
</template>

<script>
</script>

<style>
	.hotLineBG{
		background:#fff;
		overflow: hidden;
		
	}
	.clearHistory,.lineHistoryText{
		font-size: 24rpx;
		color: #a8a8a8;
		float:left;
		margin:20rpx;
	}
	.hotLineText{
		font-size: 24rpx;
		color: #a8a8a8;
		padding:20rpx;
	}
	.hotLineBtn{
		background: #ffffff;
		border: 1rpx solid #a8a8a8;
		border-radius: 6rpx;
		text-align: center;
		font-size: 30rpx;
		padding:10rpx 20rpx;
		float:left;
		color: #1A1A1A;
		margin: 0 0 20rpx 20rpx;
	
	}
	.hotLine{
		color: #1A1A1A;
		border-bottom: 1rpx dashed #a8a8a8;
		padding:25rpx 20rpx;
		
		
	}
</style>