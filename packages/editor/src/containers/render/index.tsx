import { defaultMobileType, mobileTypes } from './mobile'
import './index.css';
import { useState } from 'react';

export default function CoreRender() {
    const [selectedMobileType, setSelectedMobileType] = useState(defaultMobileType);
    return (<>
        <select onChange={(e) => setSelectedMobileType(mobileTypes[parseInt(e.target.value)])}>
            {mobileTypes.map((mobileType, index) => {
                return <option key={index} value={index}>{mobileType.name}</option>
            })}
        </select>
        <section
            className='bg-slate-100 rounded-[8px]'
            style={{
                width: selectedMobileType.width,
                height: selectedMobileType.height
            }}>
            yes
        </section>
    </>);
}