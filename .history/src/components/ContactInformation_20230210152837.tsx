import * as React from 'react';

export interface IContactInformationProps {
}

export default function ContactInformation(props: IContactInformationProps) {
    return (
        <div>
            <h3>Contact Information</h3>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St</p>
            <p>City: San Francisco</p>
            <p>Email: contact@example.com</p>
        </div>
    );
}
