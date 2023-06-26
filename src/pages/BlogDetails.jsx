import { Link, useParams, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"


const BlogDetails = ()=>{

    const [searchParams,setSearchParams] = useSearchParams()

    useEffect(()=>{
        console.log(searchParams)
    },[searchParams])
    
    const {id}  = useParams()
    
    const {data,loading,error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if(loading) return <p>Loading data...</p>
    if(error) return <p>error...</p>
    return(

        <>

            <h1>{data.id}--{data.title}</h1>
            <p>{data.body}</p>

            <Link to="/Blog">Volver</Link>
        </>
        
    )
}


export default BlogDetails