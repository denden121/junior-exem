import * as React from 'react';
import './radio-button.scss'

export function RadioButton({children, ...args }) {
    return (
        <label className={'radio'}>
            <input className={"radio__check"} type="radio" {...args}/>
            <span className={'radio__button'}/>
            <span className={'radio__text'}>{children}</span>
        </label>
    );
}