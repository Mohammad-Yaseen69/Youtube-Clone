import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../assets'

const SideBar = ({SelectedCategory , SetSelectedCategory}) => {
    return (
        <Stack
            direction={'row'}
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
                mr : 3
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
                            SetSelectedCategory(Name)
                        }}
                        style={{
                            background: SelectedCategory === Name ? '#FC1503' : '',
                            color: 'white'
                        }}
                    >
                        <span
                            style={{ color: Name === SelectedCategory ? 'white' : 'red', marginRight: '5px' }}
                        >{<Icon />}</span>
                        <span
                            style={{ opacity: Name === SelectedCategory ? 1 : 0.8 }}
                        >{Name}</span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default SideBar