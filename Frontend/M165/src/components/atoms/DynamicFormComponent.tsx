import { Input, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { field, module } from '../../models/config'
import { configAPI } from '../../service/API'

const numberInput = (onChange:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined, name:string) => {
    <Input
        onChange={onChange}
        type="number"
        name={name}
    />
}
const stringInput = (onChange:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined, name:string) => {
    <Input
        onChange={onChange}
        name={name}
    />
}

type props = {
    module:module
    onSubmit: (e:any) => void
}

const DynamicFormComponent = ({module}:props) => {
    const [entity, setEntity] = useState<{}>({})
    const fields = module.fields;
    const handleSubmit = (event:any) =>{
        event.preventDefault()
        configAPI(module.backendUrl).post("").then(response => 
                console.log(response)
                // REMOVE CONSOLE.LOG NIAAAAAAAAAAAAAASDLKFJALKSDJFLKAJSFKLJSADLKFASDLJKFJLSADKJFSKLADJFLSDAKJ
            ).catch(error => console.log(error))
    }
    const onChangeHandler = (event:any) =>{
        
    }
    useEffect(() => {
      
      return () => {
        
      }
    }, [])
    
    return (
        <>
            {fields.map((field)=>{
                if (field.type === "number"){
                    return (
                        numberInput(onChangeHandler, field.name)
                    )
                }
                return (
                    stringInput(onChangeHandler, field.name)
                )
            })}
        </>
    )
}

export default DynamicFormComponent