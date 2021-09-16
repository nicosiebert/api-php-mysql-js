var selectd = $('#selectd')
var lp1 = $('#lp1')
var lp2 = $('#lp2')
var laa = $('#laa')
var aa = $('#aa')

selectd.addEventListener("input", e =>{
    if(selectd.value == "select"){
        lp1.textContent = "Where"
        lp2.textContent = "Es igual a"
        laa.textContent = "columnas que desea seleccionar" 
        laa.classList.remove('inv')
        aa.classList.remove('inv')  
    }
    if(selectd.value == "update"){
        lp1.textContent = "WHERE"
        lp2.textContent = "Es igual a" 
        laa.textContent = "SET"
        laa.classList.remove('inv') 
        aa.classList.remove('inv')
           
    }
    if(selectd.value == "delete"){
        lp1.textContent = "WHERE"
        lp2.textContent = "Es igual a"
        laa.classList.add('inv') 
        aa.classList.add('inv')  
    }
    if(selectd.value == "insert"){
        lp1.textContent = "db(insert)"
        lp2.textContent = "VALUES"
        laa.classList.add('inv')
        aa.classList.add('inv')    
    }
})
