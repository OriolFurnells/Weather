var app = new Vue({
	el: '#app',

	data: {
		ciudades: ["Barcelona", "Madrid", "New York", "Paris", "Bangkok", "Shangai", "Tolouse", "London"],
		infoWeb: [],
		citySearch: "",
		search: document.getElementById('city').value,
		citys: [],
		temperaturaK: 0,
		tempMaxK: 0,
		tempMinK: 0,
		temperaturaC: 0,
		tempMaxC: 0,
		tempMinC: 0,
		nameCity: "",
		humidity: "",
		sky: "",
		skyNew: "",
		show: false,	
		
		
	},

	created: function () {
		//		
	},

	methods: {
		//ok!! coge la temperatura en kelvin y la transforma en celsius
		info: function () {
			this.temperaturaK = this.citys.main.temp;
			//			console.log(this.temperaturaK);
			this.tempMaxK = this.citys.main.temp_max;
			this.tempMinK = this.citys.main.temp_min;
			this.temperaturaC = ((this.temperaturaK - 273.15).toFixed(2)) + " ℃";
			console.log(this.temperaturaC);
			this.tempMaxC = ((this.tempMaxK - 273.15).toFixed(2)) + " ℃";
			this.tempMinC = ((this.tempMinK - 273.15).toFixed(2)) + " ℃";
			console.log(this.tempMaxC);
			console.log(this.tempMinC);
			
			
			this.sky = this.citys.weather[0].description;
			console.log(this.sky)
			if(this.sky.includes("overcast")){
				this.skyNew="Nublado";
				console.log("hola nubes")
			}else if(this.sky.includes("clear")){
				this.skyNew="Despejado";
				console.log("hola cielo")
			} else if(this.sky.includes("rain")){
				this.skyNew="Lluvioso";
				console.log("hola lluvia");
				console.log(this.skyNew);
				
			}
			console.log(this.skyNew)

		},


		//ok, coge las ciudades y las mezcla aleatoriamente
		random: function (ciudades) {
			var j, x, i;
			for (i = ciudades.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = ciudades[i];
				ciudades[i] = ciudades[j];
				ciudades[j] = x;
			}
			return ciudades;
		},

		firstMayus: function () {
			this.search = document.getElementById('city').value;
			this.citySearch = this.search.toLowerCase();
			this.citySearch=this.citySearch.replace(/\b[a-z]/g, c => c.toUpperCase());
			console.log(this.citySearch)
		},

		//hacer un fetch x ciudad + busqueda
		busqueda: function (array) {

			this.firstMayus();
			console.log(this.citySearch),
				//			array = newOrder (random)
				//			(search) this.citySearch - primera en mayus-;
				fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.citySearch + "&APPID=da7e3daf6eedd914ddf7524632500625", {
					method: "GET",
				}).then(function (response) {
					if (response.ok) {
						return response.json();
					}
				}).then(function (json) {

					//						console.log(json)
					app.infoWeb = json;

					app.citys = app.infoWeb;
					console.log(app.citys)
					
					app.info();
					app.show=true;
				console.log(app.show)


				}).catch(function (error) {
					console.log("Request failed:" + error.message);
				})
		},



	}

});

/*
quantity: function (member, R, D, I) {
	var Rep = [];
	var Dem = [];
	var Ind = [];
	for (let j = 0; j < member.length; j++) {
		if (member[j].party == "R") {
			Rep.push(member[j].party);
		}
		if (member[j].party == "D") {
			Dem.push(member[j].party);
		}
		if (member[j].party == "I") {
			Ind.push(member[j].party);
		}
	}

	this[R] = Rep.length;
	this[D] = Dem.length;
	this[I] = Ind.length;

},*/