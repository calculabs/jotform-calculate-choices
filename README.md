# JotForm Calculate Choices Widget

A custom JotForm widget that calculates the total count of specific answer choices (A, B, C, D) across all single-choice questions in a form.

## Features

- Counts occurrences of specific answer choices (A, B, C, D) across all radio button questions
- Can be added multiple times to track different answer choices
- Updates automatically when form answers change
- Displays both the choice letter and its corresponding value (1, 2, 3, or 4)
- Clean, modern UI with real-time updates

## Usage

1. Add the widget to your form (can be added up to 4 times, once for each choice you want to track)
2. For each widget instance, configure which choice to track (A, B, C, or D) in the widget settings
3. The widget will automatically count and display how many questions were answered with the specified choice

## Installation

1. Download the widget files:
   - `calculate-choices.html`: The main widget code
   - `calculate-choices.json`: The widget manifest

2. Create a new custom widget in your JotForm account:
   - Go to your JotForm account
   - Navigate to the Form Builder
   - Click on "Add Form Element"
   - Select "Widgets"
   - Click "Create New Widget"
   - Upload both files

3. Configure the widget:
   - Select which choice (A, B, C, D) this instance should track
   - Position the widget where you want the count to be displayed

## Technical Details

The widget monitors all single-choice (radio button) questions in the form and maintains a count of how many were answered with the specified choice value:

- Choice A corresponds to value 1
- Choice B corresponds to value 2
- Choice C corresponds to value 3
- Choice D corresponds to value 4

## License

MIT License 