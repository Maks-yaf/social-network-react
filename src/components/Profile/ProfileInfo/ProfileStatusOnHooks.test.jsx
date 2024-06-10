import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileStatusOnHooks from './ProfileStatusOnHooks';

describe('ProfileStatusOnHooks component', () => {
    test('renders the status from props', () => {
        render(<ProfileStatusOnHooks status="Hello World" updateStatus={() => {}} />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    test('renders default status text when no status is provided', () => {
        render(<ProfileStatusOnHooks status="" updateStatus={() => {}} />);
        expect(screen.getByText('No status')).toBeInTheDocument();
    });

    test('enters edit mode on double click', () => {
        render(<ProfileStatusOnHooks status="Hello World" updateStatus={() => {}} />);
        fireEvent.doubleClick(screen.getByText('Hello World'));
        expect(screen.getByDisplayValue('Hello World')).toBeInTheDocument();
    });

    test('calls updateStatus on blur with the new status', () => {
        const mockUpdateStatus = jest.fn();
        render(<ProfileStatusOnHooks status="Hello World" updateStatus={mockUpdateStatus} />);

        fireEvent.doubleClick(screen.getByText('Hello World'));
        fireEvent.change(screen.getByDisplayValue('Hello World'), { target: { value: 'New Status' } });
        fireEvent.blur(screen.getByDisplayValue('New Status'));

        expect(mockUpdateStatus).toHaveBeenCalledWith('New Status');
    });

    test('updates the state when props change', () => {
        const { rerender } = render(<ProfileStatusOnHooks status="Initial Status" updateStatus={() => {}} />);
        rerender(<ProfileStatusOnHooks status="Updated Status" updateStatus={() => {}} />);
        expect(screen.getByText('Updated Status')).toBeInTheDocument();
    });
});

//renders the status from props: This test checks that the status passed via props is rendered correctly.
// renders default status text when no status is provided: This test verifies that when no status is provided, the default text "No status" is displayed.
// enters edit mode on double click: This test ensures that double-clicking the status text switches the component to edit mode and displays an input field with the current status.
// calls updateStatus on blur with the new status: This test checks that when the input field loses focus (blur event), the updateStatus function is called with the updated status.
// updates the state when props change: This test ensures that the component updates its state correctly when it receives new props.