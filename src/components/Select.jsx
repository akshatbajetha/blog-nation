import React, {useId} from 'react'

function Select({
    options=[], //By Default array hi hoga
    label,
    className, //ClassName if empty then element mein "null" value jaayegi, otherwise to make it look clean pass empty string ""
    ...props
}, ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => ( //? for making sure the array is not empty otherwise it'll throw error and app might crash
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)