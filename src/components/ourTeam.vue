<template>
	<div class="content">
		<ul class="contentul">
			<li class="contentli" v-for="(item,index) in list" :key="index">
				<img :src="item.img" alt="">
				<h3>
					{{item.title}}
				</h3>
				<p>
					{{item.value}}
				</p>
			</li>
		</ul>
		<div class="more">
			<div class="morebox">
				<h3>DOLOR SIT AMET</h3>
				<div class="morecontent">dolor sit amet, consectetur adipisicing elit. Earum aliquid obcaecati deleniti minus quisquam quis magnam reprehenderit quaerat molestias rerum, excepturi autem fugiat corporis quidem a ipsum quos beatae! Ut!</div>
				<div class="morebutton">View More</div>
			</div>
			<el-carousel class="morebox" height="100%" indicator-position="none">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3 class="small">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ourteam',
		data() {
			return {
				list: [{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1052437823,2294515059&fm=26&gp=0.jpg',
						title: 'KHALIL UDDIN',
						value: 'DESIGNER'
					},
					{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1052437823,2294515059&fm=26&gp=0.jpg',
						title: 'RUBEL MIAH',
						value: 'LEAD DEVELOPER'
					},
					{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1052437823,2294515059&fm=26&gp=0.jpg',
						title: 'SHAMIM SHOHAG',
						value: 'DEVELOPER'
					},
					{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1052437823,2294515059&fm=26&gp=0.jpg',
						title: 'ZUBAYER RAHMAN',
						value: 'MARKETER'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
	}

	.contentul {
		width: 70%;
		margin: auto;
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}

	.contentli {
		width: 23%;
		margin-bottom: 30px;
		background-color: #F5F5F5;
		transition: all 0.5s;
	}

	.contentli img {
		width: 100%;
	}

	.contentli h3 {
		padding-left: 20px;
		margin: 10px auto;
	}

	.contentli p {
		padding-left: 20px;
		margin: 10px auto;
	}

	.more {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.morebox {
		width: 50%;
		height: 500px;
	}

	.more div:first-child {
		background-color: #F5F5F5;
	}
	
	.more div:first-child h3 {
		margin: 30px auto;
		text-align: center;
	}
	
	.morecontent {
		width: 80%;
		height: 150px;
		margin: auto;
		text-align: center;
	}
	
	.morebutton {
		width: 120px;
		height: 36px;
		background-color: #333;
		color: #FFFFFF;
		line-height: 36px;
		margin: auto;
		text-align: center;
		cursor: pointer;
	}
	
	.el-carousel {
		background-color: #CCCCCC;
	}
</style>
