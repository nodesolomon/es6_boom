// Store Object
var store = {
	nextId: 1,
	cache: {},
	add: function(fn){
		if(!fn.id){
			fn.id = this.nextId++;
			this.cache[fn.id] = fn;
			return true;
		}
	} 
};


function humans(){};

assert(store.add(humans), "function was safely added");
assert(store.add(humans), "But it was only added once")