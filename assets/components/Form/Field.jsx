import React from 'react'

export default function Field({name, label, value, onChange, placeholder ="", type="text", error="", flexcolumns="6"}) {
  return (
    <div className={'form-group col-'+flexcolumns}>
        <label htmlFor={name}>{label}</label>
        <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        name={name}
        id={name}
        className={"form-control" + (error && " is-invalid")}
        />
        {error && <p className='invalid-feedback'>{error}</p>}
    </div>
  )
}
