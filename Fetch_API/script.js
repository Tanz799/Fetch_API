fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1 = "";
    completedata.map((values)=>{
        data1 = `<div class="card">
        <h3>${values.name}</h3>
        <h3>${values.email}</h3>
        <h3>${values.address.city}</h3>
        <h3>${values.website}</h3>
    </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})