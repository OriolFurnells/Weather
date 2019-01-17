var app = new Vue({
	el: '#app',

	data: {

		ciudades: ["Barcelona", "Madrid", "New York", "Paris", "Bangkok", "Shangai", "Tolouse", "London"],
		cityCaos: [],
		infoWeb: [],
		citySearch: document.getElementById('city').value,
		citys: [],
		temperaturaK: 0,
		tempMaxK: 0,
		tempMinK: 0,
		temperaturaC: 0,
		tempMaxC: 0,
		tempMinC: 0,
		aleatorio: 0,
		seleccion: 0,
		nameCity: "",

	},

	created: function () {
//		this.start();
		//				this.random(this.ciudades);
	},

	methods: {

		pruebaGet: function () {
			console.log("hola");
			this.citySearch = document.getElementById('city').value;
			console.log(this.citySearch);

		},
		
		//
		//				primeraMayus: function() {
		//					var search = this.citySearch.toLowerCase();
		//
		//					console.log(first.replace(/\b[a-z]/g, c => c.toUpperCase()));
		//				}
		//				for (let i = 0; i < this.ciudades.length; i++) {
		//
		//					if (this.citySearch.toUpperCase() == this.ciudades[i].toLowerCase()) {
		//						console.log("hola 1")
		//					}
		//				},


	}

});