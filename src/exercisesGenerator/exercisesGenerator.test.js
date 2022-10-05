import { render, screen } from '@testing-library/react';
import ExercisesGenerator from '.';
import '@testing-library/jest-dom';

describe('ExercisesGenerator component', () => {
    test('should initialize the exercise as 550 + 5', () => {
        // const {} = render(<ExercisesGenerator />);
        render(<ExercisesGenerator />);

        const initialExercise = screen.getByText('550 + 5');
        expect(initialExercise).toBeInTheDocument();
    });

    test('should initialize the result span with the class hide-result', () => {
        render(<ExercisesGenerator />);
        
        const initialResult = screen.getByText('555');
        expect(initialResult).toHaveClass('hide-result');
    }); 
});