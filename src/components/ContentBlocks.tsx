// File containing building blocks for content.
import { PropsWithChildren } from 'react';
import './ContentBlocks.css';

export function ContentSection({ children }: PropsWithChildren<{}>) {
    return <div className="section">
        {children}
    </div>;
}