class FormValidator{
    constructor(formElement, autoFocusElement){
        this.__formElement = formElement;
        this.setFocus(formElement.elements);
        autoFocusElement.focus();
    }

    setFocus(elements){
        for(let element of elements){
            element.onfocus = function(event){
                console.log('focus on: ', event.target);
            }

            element.onblur = function(event){
                console.log('blur on: ', event.target);
            }
        }
    }
}

// can access to each form with name of form.
// each form is a object in js that can acccess to it with its name
new FormValidator(firstForm, firstForm.elements.list);