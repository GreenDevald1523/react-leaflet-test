import { Button } from '@mantine/core';
import React from 'react'

export const PickTransport = () => {
  return (
    <Button 
        onClick={(e) => {
            e.stopPropagation(); 
        }} 
        className='leaflet-bottom leaflet-left pick-transport'>
        Машина
    </Button>
  )
}
