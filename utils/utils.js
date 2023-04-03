module.exports = {
	// 封装toast函数
	 showToast (title, icon='none', duration=2500, mask=false) {
	  wx.showToast({
	    title: title || '',
	    icon,
	    duration,
	    mask
	  });
	}
}