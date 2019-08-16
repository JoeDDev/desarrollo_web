const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
var elemento = document.getElementsByClassName('list-item');

let draggedItem = null;



for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];
	 
	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'block';            
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
             item.style.display = 'block';
			 draggedItem = null;
			 console.log(item.id);
		},0);
	})

	

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];
		        
		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
	
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'white';
			
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'white';
			
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'white';
		});
	} 
}