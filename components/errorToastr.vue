<template>
	<div class='error-wrapper'>
    <transition-group name="fade" tag='div'>
    <div class='error' v-for='(error, index) in errors' :key='index'>
      {{error}}
    </div>
    </transition-group>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

	export default {
    name: 'errorToastr',
		computed: {
			...mapGetters([ 'errors' ])
		}
  }
</script>

<style lang='sass'>
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s;
  
  .fade-enter, .fade-leave-to
    opacity: 0;
  

  .error-wrapper
    position: absolute
    top: 0
    right: 0
    .error
      padding: 0.5em 2em
      margin-top: 1em

      border-radius: 8px

      background: #cc0000
      color: #fff

</style>