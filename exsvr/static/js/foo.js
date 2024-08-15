
function foo_js_insertSpan() {
	// Create a new span element
	const newSpan = document.createElement("span");
	
	// Set the content of the span
	newSpan.textContent = "This is a dynamically inserted span! - foo.js";
	
	// Set a class or style for the span if needed
	newSpan.style.color = "blue";
	newSpan.style.fontWeight = "bold";
	
	// Insert the span into the body
	document.body.appendChild(newSpan);
}