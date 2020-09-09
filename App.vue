<template>
	<div id="app">
			<button @click='executeWithLoader("requestWithSuccess")' :disabled='loading' class='button button--success'>
				Will respond with Success
			</button>
			<button @click='executeWithLoader("requestWithError")' :disabled='loading' class='button button--failure'>
				Will respond with Error but it's good
			</button>
			<button @click='clearUsersList' :disabled='loading' class='button button--neutral'>
				Clear Users List
			</button>
			<div class='results'>
				<div># of users fetched: {{usersList}}</div>
				<br />
				<div>{{ loadingStatus }}</div>
			</div>
			<error-toastr />
	</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
	import errorToastr from './components/errorToastr'
	export default {
    name: 'app',
		components: { errorToastr },
		methods: {
			...mapActions([ 
				'requestWithSuccess', 
				'requestWithError', 
				'executeWithLoader',
				'clearUsersList'])
		},
		computed: {
			...mapGetters([ 'usersList', 'loading', 'loadingStatus' ])
		}
  }
</script>

<style lang='sass'>
#app
	display: flex
	flex-direction: column
	justify-content: flex-start

	padding: 4em


	.button
		position: relative
		padding: 12px 16px
		margin-bottom: 2em

		border: 1px solid #efefef
		border-radius: 8px
		
		background: #fff
		color: #444
		font-size: 1em


		&.button--success
			border-bottom: 4px solid #41b883
		&.button--failure
			border-bottom: 4px solid #cc0000
		&.button--neutral
			border-bottom: 4px solid #8a80d1	
		&:active
			border-bottom-width: 2px
			padding: 13px 16px


	.results
		text-align: center
		padding: 1em
		border-radius: 8px
		border: 1px solid #efefef
</style>