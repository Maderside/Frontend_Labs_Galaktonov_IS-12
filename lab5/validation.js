document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = document.getElementById("myForm");

    //Creating object from form data
    const formData = Object.fromEntries(new FormData(form));
    
    let boolArr =[];

    //validating name
    let regex = /[A-ЯҐЄІЇ]+\s[A-ЯҐЄІЇ]\.[A-ЯҐЄІЇ]\./i;
    let result = validate(formData.PIB, 3, regex);
    boolArr.push(result);
    console.log("name is "+result);

    //validating birth date
    regex = /\d\d\.\d\d\.\d\d\d\d/i;
    result = validate(formData.brthDate, 3, regex);
    boolArr.push(result);
    console.log("BT is "+result);
    
    //validating city
    regex = /м\.\s[А-ЯҐЄІЇ]+/i;
    result = validate(formData.city, 3, regex);
    boolArr.push(result);
    console.log("adress is "+result);

    //validating e-mail
    regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
    result = validate(formData.email, 3, regex);
    boolArr.push(result);
    console.log("email is "+result);

    //Validating telegram
    regex = /@[A-Za-z0-9]+/i;
    result = validate(formData.telegram, 3, regex);
    boolArr.push(result);
    console.log("telegram is "+result);

    console.log("Bool arr "+boolArr);
    //Highlight all wrong fields
    highlightWrong(boolArr, formData);

    //Showing correct data
    let outputArea = document.getElementById("result").getElementsByTagName("p")[0];
    if(!boolArr.includes(false)){
        outputArea.innerText =
        `ПІБ: ${formData.PIB}
        Дата народження: ${formData.brthDate}
        Адреса: ${formData.city}
        E-Mail: ${formData.email}
        Телеграм: ${formData.telegram}`;
    }
    else{
        outputArea.innerText = "";
    }
});

//Returns true if validate is succesful, false otherwise
function validate(fieldValue, minValue, regex){
    if(fieldValue != null && fieldValue.length < minValue){
        alert("Заповніть поле");
        return false;
    }
    else if(regex.test(fieldValue) == false){
        alert("Поле введено некоректно");
        return false;
    }
    else{
        return true;
    }
}

//Changes field`s border on the defined color
function highlight(fieldName, color){
    const field = document.getElementsByName(fieldName)[0];
    field.style.borderColor = color;
}

function highlightWrong(boolArr, formObj){
    let i=0;
    for (const fieldName in formObj) {
        if(boolArr[i] == true && fieldName!=null && boolArr[i]!=null){
            highlight(fieldName, "black");
        }
        else{
            highlight(fieldName, "red");
        }
        i++;
    }
}