
fetch('http://localhost:8000/clinte?name="yahya"',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

fetch('http://localhost:8000/clinte/yahya',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({massage: "hello", name: 'yahya'}),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
