import React, { ChangeEvent, useState } from 'react'
import s from './EditableTitle.module.css'

const EditableTitle = () => {
   const [edit, setEdit] = useState(false)
   const [data, setData] = useState('Some Title')

   const ValidateData = () => {
      data.length === 0 ? setData('Set Title') : setData(data)
      setEdit(!edit)
   }
   const changeDataHandler = () => {
      ValidateData()
   }
   const changeValueData = (e: ChangeEvent<HTMLInputElement>) => {
      setData(e.currentTarget.value)
   }
   const keyPressValueData = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         ValidateData()
      }
   }

   return (
      <span>
         {edit ? (
            <input
               type='text'
               value={data}
               autoFocus
               onChange={changeValueData}
               onBlur={changeDataHandler}
               onKeyPress={keyPressValueData}
            />
         ) : (
            <h2 onClick={changeDataHandler} className={s.EditableTitle}>
               {data}
            </h2>
         )}
      </span>
   )
}

export default EditableTitle
