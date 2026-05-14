# Hachioji Landscape 100 (hachioji-keikan100)

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project provides a dataset of the "100 Scenic Views of Hachioji," an open data initiative by Hachioji City, Japan. It includes geolocated data, descriptions, and images for each spot, presented as a clean CSV file and visualized on interactive maps.

## Demo

Explore the 100 scenic spots on an interactive map.

- **[Standard Map View](https://code4fukui.github.io/hachioji-keikan100/)**: Displays locations with standard map pins. Fast and lightweight.
- **[Image Icon Map View (Heavy)](https://code4fukui.github.io/hachioji-keikan100/useimage.html)**: Displays a thumbnail image for each location directly on the map. Note: This version may load slowly due to the number of images.

## Data

The primary dataset is available for direct use.

- **CSV File**: [`hachioji-keikan100.csv`](https://code4fukui.github.io/hachioji-keikan100/hachioji-keikan100.csv)

The CSV file contains the following columns:
- `no`: Unique identifier for the scenic spot (1-100).
- `name`: Name of the location.
- `lat`: Latitude.
- `lon`: Longitude.
- `要素` (Category): Original category from the source data.
- `住所` (Address): Address of the location.
- `説明` (Description): A brief description of the spot.
- `image`: URL to the primary image for the spot.
- `nimage`: The number of available images for the spot.

## Scripts

This repository contains Deno scripts used to process the source data and images:

- `renames.js`: A utility to clean up original image filenames.
- `makelist.js`: Scans image files (e.g., `1-1.jpg`, `1-2.jpg`) and generates `hachioji-keikan100-photo.csv`, which lists the total number of images for each spot.
- `makecsvwithimg.js`: Combines the original location data with the image metadata to produce the final `hachioji-keikan100.csv` with complete image URLs.

## Data Source

This dataset is based on the "Landscape Image Open Data" provided by the City of Hachioji.

- **Source**: [Landscape Image Open Data | Hachioji City Official Website](https://www.city.hachioji.tokyo.jp/shisei/001/006/001/004/p032712.html)
- **License**: Creative Commons Attribution 4.0

## License

This repository is licensed under the [MIT License](LICENSE).