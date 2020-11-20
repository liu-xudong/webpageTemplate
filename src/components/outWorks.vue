<template>
	<div class="content">
		<ul class="label">
			<li v-for="(item,index) in titleList" :key="index" @click="titleClick(item)">{{item}}</li>
		</ul>
		<ul class="obj">
			<li v-for="(item,index) in obj" :key="index">
				<el-image
				      style="width: 100%"
				      :src="item.img"
				      fit="contain"></el-image>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'outworks',
		data() {
			return {
				obj: [],
				titleList: [
					'ALL',
					'WORDPRESS',
					'HTML',
					'GRAPHIC',
					'PHP',
					'BOOTSTRAP'
				],
				objAll: [
					{
						label: ['WORDPRESS','HTML'],
						img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg'
					},
					{
						label: ['WORDPRESS','GRAPHIC','BOOTSTRAP'],
						img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg'
					},
					{
						label: ['WORDPRESS','HTML','PHP'],
						img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg'
					},
					{
						label: ['GRAPHIC','HTML','BOOTSTRAP'],
						img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg'
					},
					{
						label: ['WORDPRESS','PHP','BOOTSTRAP'],
						img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg'
					},
					{
						label: ['HTML','PHP'],
						img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg'
					}
				]
			}
		},
		mounted() {
			this.obj = this.objAll
		},
		methods:{
			titleClick(e) {
				if(e === 'ALL') {
					this.obj = this.objAll
					return
				}
				let a = []
				for(let i = 0; i < this.objAll.length; i++) {
					for(let j = 0; j < this.objAll[i].label.length; j++) {
						if(this.objAll[i].label[j] === e) {
							a.push(this.objAll[i])
						}
					}
				}
				this.obj = a
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 70%;
		margin: auto;
		margin-bottom: 80px;
	}
	
	ul {
		padding: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	.label {
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-weight: bold;
	}
	
	.label li {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}
	
	.obj {
		transition: all 1s; 
	}
	
	.obj li {
		width: 30%;
		display: inline-block;
		margin-top: 20px;
		margin-right: 3%;
	}
</style>
