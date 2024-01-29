import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../assets'

const SideBar = () => {
    let SelectedBtn = 'New'
    return (
        <Stack
            direction={'row'}
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map(category => {
                const Icon = category.icon
                const Name = category.name
                return (
                    <button
                        key={Name}
                        className='category-btn'
                        onClick={() => {
                            SelectedBtn = Name
                            console.log(SelectedBtn);
                        }}
                        style={{
                            background: SelectedBtn === Name ? '#FC1503' : '',
                            color: 'white'
                        }}
                    >
                        <span
                            style={{ color: Name === SelectedBtn ? 'white' : 'red', marginRight: '5px' }}
                        >{<Icon />}</span>
                        <span
                            style={{ opacity: Name === SelectedBtn ? 1 : 0.8 }}
                        >{Name}</span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default SideBar