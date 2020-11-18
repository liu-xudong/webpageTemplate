<template>
	<el-container>
		<el-header>
			<div class="header">
				<h2 class="company">CLUSTER</h2>
				<ul class="headerList">
					<li v-for="(item,index) in headerList" :key="index" @click="scrollToPosition(index)">{{item.lable}}</li>
				</ul>
			</div>
		</el-header>
		<el-main>
			<ul class="mainList">
				<li class="roll">
					<carousel></carousel>
				</li>
				<li class="roll services">
					<flex>SERVICES</flex>
					<services></services>
				</li>
				<li class="roll">
					<flex>OUT WORKS</flex>
					<div class="content"></div>
				</li>
				<li class="roll">
					<flex>PRICING</flex>
					<div class="content"></div>
				</li>
				<li class="roll">
					<flex>OUR TEAM</flex>
					<div class="content"></div>
				</li>
				<li class="roll">
					<flex>CONTACT US</flex>
					<div class="content"></div>
				</li>
			</ul>
		</el-main>
	</el-container>
</template>

<script>
	import Carousel from '../components/carousel.vue'
	import Flex from '../components/flex.vue'
	import Services from '../components/services.vue'
	export default {
		name: 'home',
		data() {
			return {
				headerList: [{
						lable: 'HOME',
					},
					{
						lable: 'SERVICES',
					},
					{
						lable: 'WORKS',
					},
					{
						lable: 'PRICING',
					},
					{
						lable: 'TEAM',
					},
					{
						lable: 'CONTACT',
					},
					{
						lable: 'LOGIN IN',
					}
				]
			}
		},
		components:{
			Carousel,
			Flex,
			Services
		},
		methods: {
			scrollToPosition(i) {
				if(i === 6) {
					this.$router.push('/login')
					return 
				}
				
				document.getElementsByClassName('roll')[i].scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest'
				})
			}
		}
	}
</script>

<style scoped>
	.el-header {
		height: 10vh !important;
	}
	
	.header {
		width: 70%;
		height: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.el-main {
		height: 90vh;
		overflow: auto;
		padding: 0;
		margin: 0;
	}

	/* 滚动条样式 */
	.el-main::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 5px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 1px;
	}

	.el-main::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: #535353;
	}

	.el-main::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		background: #ededed;
	}
	
	.el-header h2 {
		width: 20%;
	}
	
	.headerList {
		width: 40%;
		display: flex;
		justify-content: space-between;
		list-style: none;
		font-weight: bold;
	}

	.headerList li {
		cursor: pointer;
	}

	.mainList {
		margin: 0;
		padding: 0;
	}

	.mainList li {
		list-style: none;
	}

	.services {
		background-color: #F5F5F5;
	}
</style>
