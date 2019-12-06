import React from 'react'
export default function textoDestacado(texto, destaque) {
    let partes = texto.split(new RegExp(`(${destaque})`, 'gi'));
    return <span> { partes.map((parte, i) => 
        <span key={i} style={parte.toLowerCase() === destaque.toLowerCase() ? { background: 'yellow' } : {} }>
            { parte }
        </span>)
    } </span>;
}