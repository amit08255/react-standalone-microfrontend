import * as React from 'react';

type Props = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ onSubmit }:Props) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="email">Email:</label>
            <input type="type" id="email" name="email" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;
