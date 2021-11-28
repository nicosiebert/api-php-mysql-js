const $ = (getelement, from=document)=> from.querySelector(getelement);

class $e{
    constructor(url, met, dat){
    this.url = url;
    this.method =met;
    this.datos = dat;
    }
    sel(url, met, dat){
        let datt = new FormData(dat);  //aqui va el id de form
        fetch(url, {method: met, body:datt})
        .then(res => res.text())
        .then(dat => {
            let arr = JSON.parse(dat);
            console.log(arr);
            $('#resp').innerHTML = arr;

        });
    }

}
let form = $('#form');
form.addEventListener('submit', e=>{
    e.preventDefault();  
    let sl = new $e;
    let ar = sl.sel('crud.php','POST', form);
});
