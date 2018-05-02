原生js轮播插件

``` bash
# 使用方法

HTML：

<div class="ui-carousel-container" id="carouselContaier">
	<div class="ui-carousel-img-box">
		<img class="ui-carousel-img" src="images/1.jpg">
		<img class="ui-carousel-img" src="images/2.jpg">
		<img class="ui-carousel-img" src="images/3.jpg">
	</div>
</div>
<br>
<div class="ui-carousel-container" id="carouselContaier2">
	<div class="ui-carousel-img-box">
		<img class="ui-carousel-img" src="images/1.jpg">
		<img class="ui-carousel-img" src="images/2.jpg">
		<img class="ui-carousel-img" src="images/3.jpg">
	</div>
</div>

CSS：

<link rel="stylesheet" href="css/ui-carousel.css">

JS：

<script src="js/carousel.js"></script>
<script>
	var carousel = new Carousel({
		id: "carouselContaier",//轮播容器id
		width: 600, //轮播容器宽度
		height: 400, //轮播容器高度
		autoPlay: true, //是否自动轮播，只能为true或false，若为false，则下面两项不需要配置
		direct: 'right', //设置自动轮播方向，只能为'left'或'right'
		time: 3000 //自动轮播时间间隔，单位毫秒
	});

	var carousel2 = new Carousel({
		id: "carouselContaier2",
		width: 450,
		height: 300,
		autoPlay: false
	});
</script>

```

预览地址：https://cj814.github.io/Carousel/index.html