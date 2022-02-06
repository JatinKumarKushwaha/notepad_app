function create_note() {
	let text = document.getElementById("text-box").value;
	if (!text) {
		console.log("No note created as the string is empty");
		return;
	}
	console.log("Created note with text: ",text);
	const text_node = document.createTextNode(text);
	const note = document.createElement("div");

	// note only takes node text as input
	// error: Argument 1 of Node.appendChild is not an object
	// read more https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
	note.appendChild(text_node);
	note.setAttribute('id', 'note');
	document.getElementById("notes-container").appendChild(note);
};

function clear_notes(n) {
	let notes = document.getElementById("notes-container");
	if (n == 1) {
		if (notes.hasChildNodes()) {
			notes.removeChild(notes.lastChild);
		}
		return;
	}
	while (notes.hasChildNodes()) {
		notes.removeChild(notes.lastChild);
	}
}