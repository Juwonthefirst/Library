export const FormField = function(inputs, button){
	
	const getErrorMessage = function(input) {
		let errors = {
			valueMissing: 'This field can\'t be empty',
			typeMismatch: `Input a valid ${input.type}`,
			patternMismatch: 'This does not match the set format',
			rangeOverflow: `Your input can not be greater than ${input.max}`,
			rangeUnderflow: `Your input can not be less than ${input.min}`,
			stepMismatch: 'invalid number'
		}
		
		for(let error in errors){
			if(input.validity[error]){
				return errors[error]
			}
		}
		return ''
	}
	
	const hasErrors = function(){
		return Array.from(inputs).some(input => !input.validity.valid)
	}
	
	const createStyleTag = function(){
		let style = document.querySelector('#form-style-invalid')
			if(style === null){
				style = document.createElement('style')
				style.id = 'form-style-invalid'
				document.head.appendChild(style)
			}
			style.textContent = 'input:invalid{border-color: red;}'
	}
	
	const renderErrorMessage = function (input) {
		const errorMessage = getErrorMessage(input)
		let errorTag = input.nextElementSibling
		if ((errorTag === null) || (errorTag.className !== 'input-error' && errorTag.nodeName === 'P')){
			errorTag = document.createElement('p')
			errorTag.className = 'input-error'
			errorTag.style.cssText = 'color: red; font-size: 80%; padding-top: 5px; overflow-wrap: break-word'
			input.after(errorTag)
		}
		errorTag.style.display = 'block';
		(errorMessage)? errorTag.textContent = errorMessage : errorTag.style.display = 'none'
	}
	
	const validate = function(){
		
		button.addEventListener('click', (event) => {
			if (hasErrors()) {
				let inputHasListener;
				event.preventDefault()
				createStyleTag()
				inputs.forEach((input) => {
					if(!inputHasListener){
						input.addEventListener('input', () => { renderErrorMessage(input) })
					}
					renderErrorMessage(input)
				})
				inputHasListener = true
			}
		})		
	}
	
	return {getErrorMessage, renderErrorMessage, validate}
}