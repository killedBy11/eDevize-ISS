import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({className, children, isFocused, ref, ...props}) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select {...props} ref={input} className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' + className}>
            {children}
        </select>
    );
});

export function Option({className, children, ...props}) {
    return (
        <option className={className} {...props}>
            {children}
        </option>
    );
}

