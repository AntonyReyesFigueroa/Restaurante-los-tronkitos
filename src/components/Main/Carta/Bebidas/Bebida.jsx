import React, { useEffect, useState } from 'react'
import useGet from '../../../../Hooks/useGet'
import DetallePlato from '../Platos/DetallePlato/DetallePlato'
import HeaderCarta from '../HeaderCarta'
import useModal from '../../../../Hooks/useModal'
import FormPlato from '../Platos/FormPlato/FormPlato'

const Bebida = () => {

    const { isOpenModal, setIsOpenModal } = useModal()
    const [obtenerData, setObtenerData] = useState()

    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/platos'
    // const URL = 'https://64ae40a1c85640541d4cae10.mockapi.io/Empleado'
    const { data, getData } = useGet(URL)
    // console.log(data);



    // console.log(data);



    useEffect(() => {
        getData()
    }, [isOpenModal])


    useEffect(() => {
        getData()
    }, [obtenerData])


    return (
        <div>
            <HeaderCarta />



            <div className='main__container'>

                <div className='btn__agregar'>
                    <button onClick={() => {
                        setIsOpenModal(!isOpenModal)
                        setObtenerData(false)
                    }}
                    >
                        + Agregar
                    </button>
                </div>

                <div>
                    {
                        isOpenModal ?
                            <div>
                                <FormPlato
                                    isOpenModal={isOpenModal}
                                    setIsOpenModal={setIsOpenModal}
                                    getData={getData}
                                    obtenerData={obtenerData}
                                    setObtenerData={setObtenerData}
                                />

                            </div>
                            :
                            <div>

                            </div>
                    }

                </div>



                <div className='container__empleado-general'>
                    {
                        data && data?.map(data => (
                            data?.categoria === 'Bebida' ?
                                <DetallePlato
                                    key={data?.id_plato}
                                    data={data}
                                    setIsOpenModal={setIsOpenModal}
                                    setObtenerData={setObtenerData}
                                    getData={getData}
                                // getAllPlato={getAllPlato}
                                // setUpdateInfoPlato={setUpdateInfoPlato}
                                // handleOpenForm={handleOpenForm}
                                />
                                :
                                ''
                        ))
                    }


                  

                </div>
                :






            </div>





        </div>
    )
}

export default Bebida