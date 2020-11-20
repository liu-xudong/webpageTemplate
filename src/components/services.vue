<template>
	<div class="content">
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<div>
					<p><i :class="item.icon"></i></p>
					<h3>{{item.title}}</h3>
				</div>
				<div>
					{{item.value}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'services',
		data() {
			return {
				list: [
					{
						icon: 'el-icon-monitor',
						title: 'WEB DESIGN',
						value: 'dolor sit amet, consectetur adipisicing elit. Dicta libero autem, magni veritatis, optio dolor.'
					},
					{
						icon: 'el-icon-s-tools',
						title: 'WEB DEVELOPEMENT',
						value: 'dolor sit amet, consectetur adipisicing elit. Dicta libero autem, magni veritatis, optio dolor.'
					},
					{
						icon: 'el-icon-finished',
						title: 'CUSTOM DEVELOPMENT',
						value: 'dolor sit amet, consectetur adipisicing elit. Dicta libero autem, magni veritatis, optio dolor.'
					},
					{
						icon: 'el-icon-message-solid',
						title: 'SUPER FAST WEB',
						value: 'dolor sit amet, consectetur adipisicing elit. Dicta libero autem, magni veritatis, optio dolor.'
					},
					{
						icon: 'el-icon-s-help',
						title: 'FRIENDLY SUPPORT',
						value: 'dolor sit amet, consectetur adipisicing elit. Dicta libero autem, magni veritatis, optio dolor.'
					},
					{
						icon: 'el-icon-chat-dot-square',
						title: 'LIVE SUPPORT',
						value: 'dolor sit amet, consectetur adipisicing elit. Dicta libero autem, magni veritatis, optio dolor.'
					}
				]
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
	
	.content ul {
		width: 100%;
		list-style: none;
		padding: 0;
	}
	
	.content ul li {
		width: 30%;
		margin-bottom: 30px;
		display: inline-block;
		margin-right: 3%;
	}
	
	.content ul li div:first-child {
		display: flex;
		justify-content: initial;
		align-items: center;
	}
	
	.content ul li div:first-child h3 {
		margin-left: 10px;
	}
</style>
