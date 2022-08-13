import { useState, useEffect } from "react";
import axios from "axios"
import MapEgypt from "../components/MapEgypt";
import Table from "../components/Table";

function Home() {
    let [governorates, setGovernorates] = useState(null)
    let [governorate, setGovernorate] = useState(null)
    let [markers, setMarkers] = useState(null)
    let [males, setMales] = useState(null)
    let [females, setFemales] = useState(null)
    let [show, setShow] = useState(false)
    // onLoad
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/governorates/?format=json')
            .then((res) => {
                setGovernorates(res.data)
                }
            )
            .catch(err => {
                console.log(err)
            })
    }, []
    )
    useEffect(() => { }, [markers, show])
    // for testing
    // const test = () => {
    //     console.log("test")
    // }
    
    const getUniversities = (gov) => {     
        axios
            .get(`http://localhost:8000/api/governorate/${gov.id}/?format=json`)
            .then((res) => {
                setMarkers(res.data)
                setMales(gov.no_males)
                setFemales(gov.no_females)
                setGovernorate(gov.name)
            }
            )
            .catch(err => {
                console.log(err)
            })
        setShow(true)
    }
  return (
    <div className="container">
        <h1 className="text-center mb-5">Egyptian Governorates </h1>
        <div className="row container">
            {/* Governorates Table */}
            <div className="col-12 col-lg-6 ">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Governorates</th>
                        <th scope="col">No. of Males th.</th>
                        <th scope="col">No. of Females th.</th>
                        <th scope="col">No. of Universities</th>
                        </tr>
                    </thead>
                    <tbody>
                    {governorates &&
                    <>
                    {governorates.map((govName,index) =>  (
                    <tr key={index} onClick={() => getUniversities(govName)}>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{govName.name}</td>
                        <td>{govName.no_males}</td>
                        <td>{govName.no_females}</td>
                        <td>{govName.no_universities}</td>
                    </tr>
                    ))}  
                    </>
                    }
                    </tbody>
                </table>
            </div>
            {show && 
            <div className="col-12 col-lg-6 ">
                {governorate&& <h2 className="text-center">{governorate}</h2>}
                 <div className="row">
                    <div className="col-12  ">
                   <MapEgypt markers={markers}/>
                   </div>
                   <div className="col-12  ">
                   <Table males={males} females={females}/>
                   </div>
                </div>  
            </div>
            }
        </div>
    </div>
  )}
export default Home;

