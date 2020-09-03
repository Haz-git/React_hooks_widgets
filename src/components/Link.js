import React from 'react';

const Link = ({ className, href, children }) => {

    //Adding onClick helper function to nav bar:
    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return;
        }
        
        event.preventDefault();
        window.history.pushState({}, '', href);

        //Tell dropdown components that URL changed:
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }


    return <a onClick={onClick} className={className} href={href}> {children}</a>;
}

export default Link;