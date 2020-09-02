import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript Library'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS Library among Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }

]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    }
]

export default () => {
    return (
        // <Accordion items={items} />
        // <Search />
        <Dropdown options={options}/>
    )
}
