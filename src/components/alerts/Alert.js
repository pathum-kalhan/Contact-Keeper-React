import React, { useContext} from 'react'
import AlertContext from '../context/alerts/AlertContext'

export default function Alert() {
    const alertContext = useContext(AlertContext)
    return (
       
            alertContext.alerts.length > 0 && alertContext.alerts.map(e => 
                <div key={e.id} className={`alert alert-${e.type}`}>
                    <i className="fas fa-info-circle"></i>{e.message}
                    
                </div>
            )
        
    )
}
