import React from 'react'
import PersonalInfo from '../pages/PersonalInfo'
import SelectPlan from '../pages/SelectPlan'

export default function Section(props) {
    return(<>
            {props.currentPage===1? <PersonalInfo setCurrentPage={props.setCurrentPage}/> : ""}
            {props.currentPage===2? <SelectPlan setCurrentPage={props.setCurrentPage}/> : ""}
    </>)
}