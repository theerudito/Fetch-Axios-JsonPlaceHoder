
const obtenerDatos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data  = await res.json()
    console.log(data);
    let body = ""
    data.map((element) =>{
     body+= `<tr>
              <th>${element.id}</th>
              <th>${element.name}</th>
              <th>${element.email}</th>
              <th>${element.phone}</th>
            </tr>`
    })
    document.getElementById("body").innerHTML = body
  } catch (error) {
    console.log(error);
  }
}
obtenerDatos()

