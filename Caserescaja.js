import React, {useState} from 'react'


const Caserescaja = ({Tarea,setTarea}) => {
    console.log(Tarea, "si llega la Tarea")



    const borrartarea = (numero) =>{
        console.log(numero)
        setTarea([...Tarea].filter((estodemomentonoestoyusando , indice) => indice !== numero))
    }
    
    const activarSub=(index)=>{
       

        const newList = Tarea.map((item,i) => {
            if (i===index) {
                return { ...item, estado: !item.estado };
            } else {
                return item;
            }
        });
        setTarea(newList);
    }
    return (
    <div>
        <p> Tareas realizadas</p>
        < div className="Conteiner"> { 
            Tarea.map((item, index)=>(
                <div key={index} style={{ textDecoration: item.estado ? 'line-through' : ''}} >

                        <p> {item.tarea} </p>
                        <button key={index} onClick={()=>activarSub(index)}>
                        <input type="checkbox"  />
                        
                       </button>
                       <button className='btn btn-danger' 
                            onClick={()=> borrartarea(index)}> Borrar {Tarea.Tarea}
                        </button>

                    
                   
                </div>
                
            ))
           
         }
         </div>
        
    </div>
    )
}

export default Caserescaja;
