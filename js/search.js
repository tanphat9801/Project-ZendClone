funcSearch = () =>{
    const text = document.getElementById('text1')
    const text2 = document.getElementById('text2')
    const text3 = document.getElementById('text3')
    const text4 = document.getElementById('text4')


    let input = document.getElementById('input').value;
    console.log(input)
    if(input !== ""){
        let regExp = new RegExp(input , "gi")

        text.innerHTML = (text.textContent).replace(regExp, "<mark>$&</mark>" )
        text2.innerHTML = (text2.textContent).replace(regExp, "<mark>$&</mark>" )
        text3.innerHTML = (text3.textContent).replace(regExp, "<mark>$&</mark>" )
        text4.innerHTML = (text4.textContent).replace(regExp, "<mark>$&</mark>" )
    }

}