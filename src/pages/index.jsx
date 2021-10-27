import React, {useState} from 'react';

const options = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
];

const IndexPage = () => {
    const [state, setState] = useState('1');

    const onChange = event => {
        setState(event.currentTarget.value);
    };

    return(
        <div className="p-4">
            <h1 className="pb-2 text-2xl text-gray-900">Tailwind Forms Select Issue</h1>
            <select
                onChange={onChange}
                value={state}
            >
                {options.map((item) => (
                    <option
                        key={String(item.value)}
                        value={String(item.value)}
                    >
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default IndexPage;
