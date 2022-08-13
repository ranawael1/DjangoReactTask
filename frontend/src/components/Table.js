import { useState, useEffect } from "react";
import axios from "axios"

function Table(props) {
    let males = props.males
    let females = props.females
  return (
    <div className="container">
        <h4 className="text-center mt-3">Males Vs. Females (thousands) </h4>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">No. of Males</th>
                    <th scope="col">No. of Females</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{males}</td>
                    <td>{females}</td>
                </tr>            
            </tbody>
        </table>
    </div>

            

  )}
export default Table;

