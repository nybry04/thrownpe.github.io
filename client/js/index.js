var app = new Vue({ 
    el: '#app',
	data: {},
	
	methods: {},
	
	watch: {}
});

VK.init(function(){
	console.log("Vk loaded");
}, function(){
	console.log("vk load failed");
},'5.103');

VK.api("wall.post", {"message": "Hello!", "v":"5.73"}, function (data) {
		console.log(data);
});
