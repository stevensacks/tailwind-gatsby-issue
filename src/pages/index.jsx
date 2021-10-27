import React, {useState} from 'react';

const options = [
    {label: 'Corporate event', value: '1'},
    {label: 'Wedding', value: '2'},
    {label: 'Birthday', value: '3'},
    {label: 'Other', value: '4'},
];

const IndexPage = () => {
    const [state, setState] = useState('1');

    const onChange = event => {
        setState(event.currentTarget.value);
    };

    return(
        <div className="p-4">
            <h1 className="pb-2 text-2xl text-gray-900">Tailwind Forms Select Issue</h1>
            <div className="w-1/4">
                <div className="p-4 border">
                    <h2>Copied from tailwindcss/forms demo source code</h2>
                    <label className="block mt-2">
                        <span className="text-gray-700">What type of event is it?</span>
                        <select className="block w-full mt-1">
                            <option>Corporate event</option>
                            <option>Wedding</option>
                            <option>Birthday</option>
                            <option>Other</option>
                        </select>
                    </label>
                </div>
                <div className="p-4 mt-4 border">
                    <h2>React controlled select similar to demo</h2>
                    <label className="block mt-2">
                        <span className="text-gray-700">What type of event is it?</span>
                        <select
                            className="block w-full mt-1"
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
                    </label>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;
