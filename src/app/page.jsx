import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  const data = await GetData();
  return (<div>
    <h1>Blog de pruebas</h1> 
    <p>Este es el contenido del blog</p>
    <br></br>
    <br></br>
        <ul> 
            {data.results.map(({id, name, status,image})=>(
                <li key={id}> 
                <Image src={image} width={300} height={300}/>
                    <Link href={`/${id}`}><h3>{id}</h3></Link>
                    <h3>{name}</h3>
                    <p>{status}</p>
                    <br></br>
                </li>

            )) //Arrow funtion si o si tiene que ser con parentesis en el segundo porque es JSX no JS Y la Li toca si o si ponerle una Key
            }
        </ul>
    </div>)
}

async function GetData() {
  try {
      const res = await fetch('https://rickandmortyapi.com/api/character') //Es un llamada bloqueante usando await
      if(!res.ok){
          throw new Error ('Hubo un error en la red'); //Si hay error de una salta al catch
      }
      const posts = await res.json();
      return posts
  } catch (error) {
      console.error(error);
  }
}