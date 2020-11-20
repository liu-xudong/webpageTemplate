<template>
	<div class="title">
	<h1><slot></slot></h1><p></p></div>
</template>

<script>
	export default {
		name: 'flex',
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.title {
		width: 70%;
		display: flex;
		justify-content: space-between;
		margin: 80px auto 30px;
	}
	
	.title h1 {
		width: 20%;
		height: 40px;
		position: relative;
	}
	
	.title h1::before {
		content: '';
		width: 36px;
		height: 10px;
		position: absolute;
		bottom: 0;
		left: 0;
		border-bottom: 1px solid #000000;
	}
	
	.title p {
		width: 40%;
	}
</style>
