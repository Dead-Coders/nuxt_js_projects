<template>
  <div id="animated-bg">
    <slot/>
  </div>
</template>

<style>
#animated-bg {
  background: linear-gradient(-45deg, #f44336, #e91e63, #673ab7, #23a6d5, #23d5ab, #4caf50);
  background-size: 400% 400%;
	animation: gradient 30s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>