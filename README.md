# D3 Scatterplot

This project visualizes data from professional bicycle racing, focusing on athletes' performance and doping allegations. The project uses **D3.js** to create an interactive scatterplot graph.

## Features

- **Dynamic Scatterplot**: Each dot represents a cyclist's performance in terms of their year and race time.
- **Interactive Tooltips**: Hovering over a dot shows detailed information about the cyclist, including their name, nationality, year, time, and doping allegations (if any).
- **Axes**: Dynamically scaled X and Y axes provide an intuitive view of the data.
- **Responsive Design**: The chart is scalable and adjusts to different container sizes.

## Technologies Used

- **D3.js**: For rendering the scatterplot and managing interactive data visualization.
- **JavaScript (ES6)**: For handling data manipulation and DOM interaction.
- **HTML5**: For structuring the page and integrating the chart.

## Getting Started

### Prerequisites

- **Web Browser**: Any modern browser (e.g., Chrome, Firefox, Edge, Safari).
- **Text Editor/IDE**: Optional, for editing the project files.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/abelgideon/D3-Scatterplot.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd D3-Scatterplot
   ```
3. Open the `index.html` file in your browser to view the scatterplot graph.
4. Alternatively, you can access the live site [here](https://abelgideon.github.io/D3-Scatterplot/).

## Usage

1. Hover over a dot to view details about a cyclist, including:
   - Name
   - Nationality
   - Year and time
   - Doping allegations (if any)
2. The X-axis represents the year of the race.
3. The Y-axis represents the race time, displayed in minutes and seconds.

## Customizing the Graph

You can modify the following parameters in `script.js` to customize the graph:

- **Width and Height**: Adjust the `w` and `h` variables to resize the chart.
- **Padding**: Change the `padding` value to alter the spacing around the chart.
- **Dot Radius**: Modify the `r` attribute in the circle elements to change the size of the scatterplot dots.

## Project Highlights

### Interactive Tooltips

- Tooltips display the cyclist's name, nationality, year, time, and doping allegations (if applicable) when hovering over a data point.

### Scalable Axes

- The X-axis is scaled to include two extra years on both sides of the data range.
- The Y-axis dynamically converts time from seconds to a `minutes:seconds` format for better readability.

### Data Handling

- Data is fetched from a remote JSON file hosted on GitHub, ensuring accurate and up-to-date information.

## File Structure

- `index.html`: The main HTML file that includes the script and renders the chart.
- `script.js`: Contains the JavaScript code for creating the scatterplot graph and adding interactivity.
- `styles.css`: (Optional) Add custom styles to enhance the graph's appearance.

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.