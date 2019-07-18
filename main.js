// Custom select dropdown
	// *********************
	window.addEventListener("load", customSelect)
	function customSelect(){
		// Display the options again after closure
		container = document.querySelectorAll(".select-wrap");
		options = document.querySelectorAll(".select-wrap input");
		siblings = [];
		for (var n = 0; n < container.length; n++) {
			container[n].addEventListener("click", restore);
			function restore(){
				this.children[1].classList.remove("hide")
			};

		};

		// Update the selection
		for (var i = 0; i < options.length; i++) {
			siblings.push(options[i]);
			options[i].addEventListener('change', choose);
			function choose(){
				for (var j = 0; j < siblings.length; j++) {
					siblings[j].parentElement.classList.remove("selected")
				};
				this.parentElement.classList.add("selected");
				this.parentElement.parentElement.parentElement.firstElementChild.children[0].value = this.value;
				this.parentElement.parentElement.classList.add("hide");
                                //Checking a fix
                                this.parentElement.parentElement.style.visibility = "hidden";
                                this.parentElement.parentElement.style.opacity = "0";
                                this.parentElement.parentElement.style.top = "-10px";
			}
		};
	}

