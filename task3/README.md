# Gas Station Management System

This project implements a database schema for managing gas stations, their products, pumps, and transactions.

## Database Schema

The database consists of four main tables:

1. `TRAM_XANG` (Gas Station)
2. `TRU_BOM` (Pumps)
3. `GIAO_DICH` (Transactions)

### Tables

#### TRAM_XANG (Gas Station)

- Stores information about gas stations.
- Fields: id, ten (name), dia_chi (address), so_dien_thoai (phone number)

#### HANG_HOA (Products)

- Contains details about the products sold (e.g., different types of fuel).
- Fields: id, ten (name), mo_ta (description), gia_hien_tai (current price)

#### TRU_BOM (Pumps)

- Represents the fuel pumps at each gas station.
- Fields: id, tram_xang_id (gas station id), hang_hoa_id (product id), ma_tru (pump code), trang_thai (status)

#### GIAO_DICH (Transactions)

- Records all transactions made at the gas stations.
- Fields: id, tram_xang_id (gas station id), tru_bom_id (pump id), hang_hoa_id (product id), thoi_gian (timestamp), so_luong (quantity), gia (price), tong_tien (total amount)

### Indexes

The following indexes have been created to optimize query performance:

- `idx_tram_xang_ten` on TRAM_XANG(ten)
- `idx_giao_dich_thoi_gian` on GIAO_DICH(thoi_gian)
- `idx_giao_dich_hang_hoa` on GIAO_DICH(hang_hoa_id)
- `idx_giao_dich_tru_bom_thoi_gian` on GIAO_DICH(tru_bom_id, thoi_gian)
- `idx_giao_dich_tram_xang_hang_hoa` on GIAO_DICH(tram_xang_id, hang_hoa_id)

## Setup

To set up the database, run the provided SQL script in your MySQL environment. This will create the necessary tables and indexes.

## Usage

This database schema can be used as the foundation for a gas station management system. It allows for:

1. Managing multiple gas stations
2. Tracking different types of fuel and their prices
3. Monitoring fuel pumps at each station
4. Recording and analyzing transactions

## Potential Features

Based on this schema, you could implement features such as:

1. Dashboard for real-time sales monitoring
2. Inventory management system
3. Price adjustment tools
4. Transaction history and reporting
5. Pump status monitoring

## Contributing

Feel free to fork this project and submit pull requests for any enhancements or bug fixes.
