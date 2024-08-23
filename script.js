function displayimg(){
    const selectElement = document.getElementById('pxl')
    const selectvalue = selectElement.value 

    const updateimg = document.getElementById('blur-img')

    updateimg.style.filter = `blur(${selectvalue})`

}

window.onload = function(){
    displayimg()
}