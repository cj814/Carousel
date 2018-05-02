;(function(){

	function Carousel(opt){
		this.elem = this.getElemById(opt.id);
		this.index = 0;
		this.temp = 0;
		this.timer = null;
		this.init(opt);
	}

	Carousel.prototype = {
		//初始化
		init: function(opt){
			this.setCarouselWidth(opt);
			this.setCarouselHeight(opt);
			this.setAutoPlay(opt);
			this.setBoxWidth();
			this.setPicWidth();
			this.setPicHeight();
			this.createArrow();
			this.createFooter();
		},
		//根据id获取元素
		getElemById: function(id){
			return document.getElementById(id);
		},
		//设置轮播容器宽度
		setCarouselWidth: function(opt){
			this.getElemById(opt.id).style.width = opt.width + 'px'
		},
		//设置轮播容器高度
		setCarouselHeight: function(opt){
			this.getElemById(opt.id).style.height = opt.height + 'px'
		},
		//设置轮播图是否自动播放
		setAutoPlay: function(opt){
			var that = this;
			if(opt.autoPlay == true){
				that.timer = setInterval(function(){
					that.bindLRClick(null,opt.direct)
				},opt.time)
			}
		},
		//创建底部
		createFooter: function(){
			var that = this,
				con = this.elem,
				len = this.calcLength(),
				footer = document.createElement('div'),
				front = document.createElement('div'),
				back = document.createElement('div');

			footer.className = 'ui-carousel-footer',
			front.className = 'ui-carousel-footer-front',
			back.className = 'ui-carousel-footer-back',
			con.appendChild(footer),
			footer.appendChild(front),
			footer.appendChild(back);

			for(i = 0;i < len;i++){
				var cir = document.createElement('span');
					cir.className = 'ui-carousel-footer-cir';
					front.appendChild(cir);
					that.bindBClick(cir,i);
			}

			this.setCurActive(this.index);
		},
		//创建左右箭头
		createArrow: function(){
			var con = this.elem,
				aLeft = document.createElement('div'),
				aRight = document.createElement('div');

			aLeft.className = 'ui-carousel-left',
			aRight.className = 'ui-carousel-right',
			con.appendChild(aLeft),
			con.appendChild(aRight);

			this.bindLRClick(aLeft,'left'),
			this.bindLRClick(aRight,'right')
		},
		//计算图片个数
		calcLength: function(){
			var con = this.elem,
				len = con.querySelectorAll(".ui-carousel-img").length;

			return len;
		},
		//绑定左右点击事件
		bindLRClick: function(elem,direct){
			var that = this,
				len = this.calcLength();

			if(elem){
				elem.addEventListener('click',function(){
					lrClick()
				})
			}else{
				lrClick()
			}

			function lrClick(){
				if(direct == 'left'){
					if(that.index == 0){
						that.index = len - 1;
					}else{
						that.index--;
					}
				}else if(direct == 'right'){
					if(that.index == len - 1){
						that.index = 0;
					}else{
						that.index++;
					}
				}

				that.setCurActive(that.index);
				that.picScroll(that.index);
				that.temp = that.index;
			}
		},
		//绑定底部点击事件
		bindBClick: function(elem,i){
			var that = this,
				len = this.calcLength();

			elem.addEventListener('click',function(){
				that.index = i;
				that.setCurActive(that.index);
				that.picScroll(that.index);
				that.temp = that.index;
			})
		},
		//计算容器宽度
		getConWidth: function(){
			var con = this.elem,
				width = con.offsetWidth;

			return width
		},
		//计算容器高度
		getConHeight: function(){
			var con = this.elem,
				height = con.offsetHeight;

			return height
		},
		//设置图片容器宽度
		setBoxWidth: function(){
			var con = this.elem,
				len = this.calcLength(),
				width = this.getConWidth();

			con.querySelector('.ui-carousel-img-box').style.width = width * len + 'px';
		},
		//设置图片宽度
		setPicWidth: function(){
			var con = this.elem,
				width = this.getConWidth(),
				len = this.calcLength();

			for(i = 0;i < len;i++){
				con.querySelectorAll('.ui-carousel-img')[i].style.width = width + 'px'
			}
		},
		//设置图片高度
		setPicHeight: function(){
			var con = this.elem,
				height = this.getConHeight(),
				len = this.calcLength();

			for(i = 0;i < len;i++){
				con.querySelectorAll('.ui-carousel-img')[i].style.height = height + 'px'
			}
		},
		//图片滚动
		picScroll: function(i){
			var con = this.elem,
				width = this.getConWidth(),
				height = this.getConHeight(),
				box = con.querySelector('.ui-carousel-img-box'),
				pos = i * width;

			box.style.transform = "translateX(-" + pos + "px)";
		},
		//设置当前图片所在的小圆点激活
		setCurActive: function(i){
			var that = this,
				cirArr = this.elem.querySelector('.ui-carousel-footer-front').querySelectorAll('.ui-carousel-footer-cir');

			cirArr[that.temp].classList.remove('active');
			cirArr[i].classList.add('active');
		}
	}

	window.Carousel = Carousel;
})();