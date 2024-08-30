import React from 'react'

export const ContenedorGif = ({arreglo}) => {
    return (
        <>
            <div className='d-flex flex-row justify-content-end flex-wrap gap-2 mt-4'>
                {arreglo.map(({ id, url }) => {
                    return (
                        <img key={id} src={url}></img>
                    )
                })}
            </div>
        </>
    )
}
