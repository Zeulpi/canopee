import React from 'react'

export default function FieldArea({name, label, value, onChange, placeholder ="", resize="none", rows="6", error="", flexcolumns="12"}) {
  return (
    <div className={'form-group col-'+flexcolumns}>
        <label htmlFor={name}>{label}</label>
        <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        name={name}
        id={name}
        className={"form-control" + (error && " is-invalid")}
        style={{'resize': resize}}
        rows={rows}
        />
        {error && <p className='invalid-feedback'>{error}</p>}
    </div>
  )
}
