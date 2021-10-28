import { useState, useEffect } from "react";
import { projectFirestore } from "../fire";

const useFirestore = (collection) =>{
    const [docs,setDocs]=useState([]);

    //creating a useEffect hook that will rerun everytime the collection changes
    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
            .onSnapshot((snap)=>{
                //takes a snapshot of that moment in time of the database
                let documents = [];
                //cycles through the documents at that moment in time
                snap.forEach(doc=>{
                    //gets us all the data and pushes it to the documents array
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents);
            })
            
        //unsubscribes from the collection when we no longer use it (clean up function)
        return ()=>unsub();
    }, [collection])

    return {docs};
}

export default useFirestore;