function loader () {
    const getNamesButton = document.getElementById('getNames');
    const functionButton = document. getElementById('getFunctionObject');

    getNamesButton.onclick = function() {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name; 

        const fullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;
    }

    const functionObject = new FunctionObject();
    console.log(funtionObject.GetFullName());
    //console.log(funtionobject.getName());
    //functionButton.onclick = functionObject;
}

window.onload = loader;

// key value pairs
// coma seperated list of 
const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

myObject.middleName = 'barfoo';

myObject.getFullName = function() {
    return this.firstName + 
    ' ' + this.middleName +
    ' ' + this.lastName;
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());

 function FunctionObject () {
    const firstName = 'sue';
    const lastName = 'jones';

    const getName = () => {
        return 'Function Object';
    }

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }

    console.log(getName());
}