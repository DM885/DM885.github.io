import { nominalTypeHack } from "prop-types";
import React,   {useState} from "react";
import { v4 as uuidv4 } from 'uuid';



// Create a new component that will produce some HTML where a user can choose multiple Solver from a dropdown and also give a text input for some flags to set.


const NewRunPage = () => {
    const [inputFields, setInputField] = useState([
        {id:uuidv4(),solver:'', flag:''},
    ]);

    const [models, setModels] = useState([
        {
            key: 2132,
            name: "solveExam",
            size: 13132}, 
        {
            key: 2133,
            name: "solveExam1",
            size: 13133,
        }
    ]);

    const [data, setData] = useState([
        {
            key: 2132,
            name: "data",
            size: 13132}, 
        {
            key: 2133,
            name: "data1",
            size: 13133,
        }
    ]);

    const [solvers, setSolver] = useState([
        {
            name: "GeCode",
            }, 
        {   
            name: "OR-Tool",
           
        }
    ]);
  

    const chooseSolver = (id, e) => {
        e.preventDefault();
        const newInputFields = inputFields.map(i => {
            if(id === i.id) {
              i[e.target.solver] = e.target.value
            }
            return i;
          })
          
          setInputField(newInputFields);

        }

    const setFlags= (id, e) => {
        e.preventDefault();
        const newInputFields = inputFields.map(i => {
            if(id === i.id) {
              i[e.target.flag] = e.target.value
            }
            return i;
          })
              
          setInputField(newInputFields);
    
        }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputFields.solver, inputFields.flag);
    }
    const removeFields = (id) => {
        const list  = [...inputFields];
        list.splice(list.findIndex(v => v.id === id), 1);
        setInputField(list);
    }
    const addFields = () => {
        setInputField([...inputFields, {id:uuidv4(),solver:'', flag:''}]);
    }

    return (
        //box around form
        <div className="container" style={{width: '100%', backgroundColor:'lightgray', color:'black', width:'50%', marginTop:"15px"}}>
            <div className="row" >
                
                    <form onSubmit={handleSubmit}>

                    
                        <><label>Please choose the model the solvers should work with </label>
                        <div class="dropdown">
                            <select class="col-25" style={{float:"left", width:"100%", marginTop:"6px"}}>
                                {models.map(model => (
                                    <option value={model.name}>{model.name}</option>
                                ))}
                            </select>
                        </div><label>Please choose the data the solvers should work with </label>
                        <div class="dropdown">
                                <select class="col-25" style={{float:"left", width:"100%", marginTop:"6px"}}>
                                    {data.map(data => (
                                        <option value={data.name}>{data.name}</option>
                                    ))}
                                </select>
                            </div><br></br></>
                            {inputFields.map(inputField => (
                                //make a gray box around each solver
                                <div className="card" style={{width: '100%', backgroundColor:'gray', color:'white', width:"100%"}}>
                                    <div className="card-body">
                                        

                                        <div key={inputField.id}>
                                            <container> 
                                            <label>
                                                Choose solver:
                                            </label>
                                            <container>
                                                <select class="col-25" style={{float:"left", width:"50%", marginTop:"6px"}} id="solver" value={inputFields.solver} onChange={e => chooseSolver(inputField.id, e)}>
                                                        {solvers.map(solver => (
                                                            <option value={solver.name}>{solver.name}</option>
                                                            ))}
                                                </select>
                                            </container>
                                            </container>
                                            <label>
                                                Set flags:
                                                <input type="text" id="flag" style= {{width:"100%", padding: "12px", border: "1px solid black", borderRadius:"4px", resize: "vertical"}}value={inputFields.flag} onChange={e => setFlags(inputField.id, e)}/>
                                            </label>
                                            <container>
                                                <i class="bi bi-plus" onClick={addFields}></i>
                                                <i class="bi bi-x" onClick={() => removeFields(inputField.id)}></i>
                                             </container>

                                        </div>
                                        </div>
                                </div>

                            ), this)}
                            <button type="submit" class="btn btn-primary" style={{marginTop:'15px', float:"right", borderRadius: "4px", border: "none", padding:"12px 20px"}}>Submit</button>
                        </form>
                    </div >
                
            </div >
            
    );
}

export default NewRunPage;
