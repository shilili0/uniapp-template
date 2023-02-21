<template>
	<div onClick="toPrepayCard">
		{{toPrepayCard}}
	</div>
</template>

<script lang="ts">
	export default {
		components:{
		},
		setup() {
			function toPrepayCard(){
				console.log(1111);
			}
			return {
				toPrepayCard
			}
		},
	}
</script>

<style>
</style>