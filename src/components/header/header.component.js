import { BarChart2, HelpCircle, Settings } from 'react-feather'
import { useContext } from 'react'
import { GlobalContext } from '../../App'

import './style.css'


export default function Header() {
    const { dispatch } = useContext(GlobalContext)


    function OpenInstructions() {

        dispatch({type: 'OPEN_MODAL', modalName: 'isInstructionModalOpend'})
    }

    function OpenStatistics() {
        dispatch({type: 'OPEN_MODAL', modalName: 'isStatisticsOpend'})
    }
   

    return (
        <div className="header">
            <div className="header-content">
                <div className="left-settings">
                    <HelpCircle  onClick={() => OpenInstructions()}/>
                </div>
                
                <h2 className="app-title">Deduletras!</h2>
                <div className="right-settings">
                    <BarChart2 className="bar-chart" onClick={ () => OpenStatistics()}/>
                    <Settings />
                </div>
                
            </div>
            

        </div>
    )
}