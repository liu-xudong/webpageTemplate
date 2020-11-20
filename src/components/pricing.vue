<template>
	<div class="content">
		<ul class="contentul">
			<li class="contentli" v-for="(item,index) in list" :key="index">
				<div class="title">{{item.title}}</div>
				<div class="price">${{item.price}}</div>
				<p class="underline"></p>
				<ul>
					<li v-for="(it,i) in item.data" :key="i">
						{{it}}
					</li>
				</ul>
				<p class="button" @click="signUp(item)">SIGN UP</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'pricing',
		data() {
			return {
				list: [
					{
						id: 1,
						title: 'BASIC',
						price: 39,
						data: [
							'Free Download',
							'1000+ Softwear',
							'Full Access',
							'Free Update',
							'Live Support'
						]
					},
					{
						id: 2,
						title: 'BASIC',
						price: 89,
						data: [
							'Free Download',
							'1000+ Softwear',
							'Full Access',
							'Free Update',
							'Live Support'
						]
					},
					{
						id: 3,
						title: 'BASIC',
						price: 209,
						data: [
							'Free Download',
							'1000+ Softwear',
							'Full Access',
							'Free Update',
							'Live Support'
						]
					}
				]
			}
		},
		methods:{
			signUp(item) {
				console.log(item);
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 70%;
		margin: auto;
		margin-bottom: 50px;
	}
	
	.contentul {
		width: 100%;
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}
	
	.contentli {
		width: 30%;
		margin-bottom: 30px;
		background-color: #FFFFFF;
		transition: all 0.5s; 
	}
	
	.contentli:hover {
		box-shadow: 0 0 25px #ccc;
	}
	
	.contentli ul {
		width: 100%;
		padding: 0;
	}
	
	.contentli ul li {
		width: 100%;
		list-style: none;
		text-align: center;
		line-height: 50px;
	}
	
	.title {
		width: 100%;
		text-align: center;
		font-weight: bold;
		margin: 30px auto 20px;
	}
	
	.price {
		font-weight: bold;
		font-size: 26px;
		text-align: center;
	}
	
	.underline {
		width: 80%;
		margin: 15px auto;
		background-color: #ccc;
		height: 1px;
	}
	
	.button {
		width: 30%;
		height: 40px;
		background-color: #333;
		color: #FFFFFF;
		text-align: center;
		line-height: 40px;
		margin: 30px auto;
		cursor: pointer;
	}
</style>
