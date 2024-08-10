import { notFound } from "next/navigation"
import Image from "next/image"

//Nombre OBLIGATORIO
export async function generatestaticParams() {
    const characters = await fetch('https://rickandmortyapi.com/api/character/').then( (res) => res.json())
    return characters.map((character)=>(
        {id: String(character.id)} //el nombre de de la variable TIENE QUE SER LA MISMA QUE LA CARPETA
    ))
}

//obligatorio params, el params es el return de la funcion generatestaticParams
export default async function Page({params}){
    const data = await GetData(params.id)
    if(!data) {
        notFound()
    }
    return (
        <div>
            <Image src={data.image} width={300} height={300}/>
            <h1>{data.id}</h1>
            <h3>{data.name}</h3>
            <p>{data.status}</p>
        </div>
    )
}

async function GetData(id) {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character/'+id) //Es un llamada bloqueante usando await
        if(!res.ok){
            throw new Error ('Hubo un error en la red'); //Si hay error de una salta al catch
        }
        const posts = await res.json();
        return posts
    } catch (error) {
        console.error(error);
        return null
    }
}