Vue.component('upgrade-item', {
	props: ['item'],
	template: '<li>{{item.name}} {{item.cost}}</li>'
})

var app = new Vue({ 
    el: '#root',
	data: {
		opened: false,
		upgrades: [
			{name: "Coal", cost: 1, id: 0},
			{name: "Iron", cost: 22, id: 1},
			{name: "Diamond", cost: 44, id: 2},
			{name: "Emerald", cost: 55, id: 3},
		],
		message: "Not secured"
	},
	
	methods: {
		toggle: function(){
			this.opened = !this.opened
		}
	},
	
	watch: {
		message: function(newQuestion, oldQuestion){
			if(newQuestion.length > 4){
				this.message = oldQuestion
			}
			if(newQuestion === "1234"){
				this.message = "****"
			}
		}
	}
});

VK.init(function(){
	console.log("Vk loaded");
	VK.api("wall.post", {"message": "Hello!", "v":"5.73"}, function (data) {
		console.log(data);
	});
}, function(){
	console.log("vk load failed");
},'5.103');
