# JotForm Calculate Choices Widget

A custom JotForm widget that calculates the total count of archetype-mapped answers across specified questions in a form. The widget maps each answer choice to a specific archetype (Atlas, Seer, Envoy, or Nexus) and maintains a running count for the target archetype.

## Quick Setup

Use this URL when creating a new custom widget in JotForm:
```
https://calculabs.github.io/jotform-calculate-choices/widget/calculate-choices.html
```

## Features

- Maps answer choices to archetypes:
  - Answer A → Atlas
  - Answer B → Seer
  - Answer C → Envoy
  - Answer D → Nexus
- Tracks responses across specified questions
- Maintains a running count of answers matching the target archetype
- Updates automatically when form answers change
- Can be added multiple times to track different archetypes
- Clean, modern UI with real-time updates

## Usage

1. Add the widget to your form (can be added multiple times to track different archetypes)
2. Configure the widget settings:
   - Set the target archetype to track (Atlas, Seer, Envoy, or Nexus)
   - Specify the question IDs to monitor (comma-separated list)
3. The widget will automatically count and display how many questions were answered with the specified archetype

## Installation

1. In your JotForm account:
   - Go to the Form Builder
   - Click on "Add Form Element"
   - Select "Widgets"
   - Click "Create New Widget"
   - Select "Custom Widget" as the type
   - Enter the widget URL: `https://calculabs.github.io/jotform-calculate-choices/widget/calculate-choices.html`

2. Configure the widget:
   - In widget settings, set the "archetype" parameter to one of: Atlas, Seer, Envoy, or Nexus
   - Set the "questionIds" parameter to a comma-separated list of question IDs to monitor
   - Position the widget where you want the count to be displayed

## Technical Details

The widget monitors specified single-choice (radio button) questions in the form and maintains a count of how many were answered with the specified archetype:

- Maps each answer option to an archetype:
  - Option A (index 0) → Atlas
  - Option B (index 1) → Seer
  - Option C (index 2) → Envoy
  - Option D (index 3) → Nexus

The widget uses JotForm's Custom Widget API to:
- Listen for changes on specified questions
- Map selected answers to archetypes
- Calculate and display the total count
- Integrate with JotForm's calculation system

## License

MIT License 