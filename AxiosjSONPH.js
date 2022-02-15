// API JSON PlaceHolder
const obtenerDatos = async () => {
  try {
      const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
      //console.log(respuesta);
      const data = await respuesta.data
      console.log(data); 
      
    let body = ""
    data.forEach(item => {
         body+= `<tr>
                    <th>${item.id}</th>
                    <th>${item.name}</th>
                    <th>${item.email}</th>
                    <th>${item.phone}</th>
                 </tr>`
    });
  document.getElementById("body").innerHTML = body


    } catch (error) {
      console.log(error);
    }
  }
  obtenerDatos()

  

  