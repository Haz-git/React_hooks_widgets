import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
    return (
        // <Accordion items={items} />
        <Search />
    )
}
