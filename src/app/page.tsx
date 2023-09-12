'use client'

import { Suspense, useState } from "react";
import Membros from "../components/ServerComponent";

export default function homepage() {

    const [show, setShow] = useState<Boolean>(false)

    function showMembros() {
        setShow(!show)
    }

    return (
        <div className="box-centered">
            <h1>Membros</h1>
            <button onClick={() => { showMembros() }}>{!show ? 'Mostrar' : 'Esconder'}</button>
            <div className="gap">

                {
                    show &&
                    <Suspense fallback={Array.from({ length: 5 }).map(() => {
                        return <div className="card animate" />
                    })}>
                        <Membros path="http://localhost:3000/membros" time={1000} />
                    </Suspense>
                }
            </div>
        </div>
    )
}