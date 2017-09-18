var app5 = new Vue({
	el:'#app5',
	data: {
		message: 'hello vuejs 5'
	},
	methods: {
		reverseMessage: function (){
			this.message = this.message.split('').reverse().join('')
		}
	}
})