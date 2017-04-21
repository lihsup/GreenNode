var LinkedList = require('linkedlist')
 
var list = new LinkedList()

module.exports = {


	initial:function(req) {

		list.push("NULL")
		list.push("NULL")
		list.push("NULL")
		list.push("NULL")
		list.push("NULL")

		list.resetCursor()
	},


	listall:function(req) {
		while (list.next()) {
  			console.log(list.current)
		}
	console.log("-----------------")
	list.resetCursor()
	},

	addfunc:function(name) {
	list.resetCursor()
		while (list.next()) {
  			if(list.current == name) {
				list.unshiftCurrent()
				
				
			}
		}
	list.resetCursor()

	if (list.current != name){
		console.log(list.pop()+":::::rueiw")
		list.unshift(name)
	}

	list.resetCursor()
	
	},

	check:function(name){

		while (list.next()) {
  			if(list.current == name){
			list.resetCursor()
			return 1;
			}
		}
	list.resetCursor()
	return 0;
	},

}
