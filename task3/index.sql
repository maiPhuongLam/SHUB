CREATE TABLE TRAM_XANG (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ten VARCHAR(100) NOT NULL,
  dia_chi VARCHAR(255) NOT NULL,
  so_dien_thoai VARCHAR(20)
);

CREATE TABLE HANG_HOA (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ten VARCHAR(50) NOT NULL,
  mo_ta TEXT,
  gia_hien_tai DECIMAL(10, 2) NOT NULL
);

CREATE TABLE TRU_BOM (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tram_xang_id INT NOT NULL,
  hang_hoa_id INT NOT NULL,
  ma_tru VARCHAR(20) NOT NULL,
  trang_thai BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (tram_xang_id) REFERENCES TRAM_XANG(id),
  FOREIGN KEY (hang_hoa_id) REFERENCES HANG_HOA(id)
);

CREATE TABLE GIAO_DICH (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tram_xang_id INT NOT NULL,
  tru_bom_id INT NOT NULL,
  hang_hoa_id INT NOT NULL,
  thoi_gian DATETIME NOT NULL,
  so_luong DECIMAL(10, 2) NOT NULL,
  gia DECIMAL(10, 2) NOT NULL,
  tong_tien DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (tram_xang_id) REFERENCES TRAM_XANG(id),
  FOREIGN KEY (tru_bom_id) REFERENCES TRU_BOM(id),
  FOREIGN KEY (hang_hoa_id) REFERENCES HANG_HOA(id)
);

CREATE INDEX idx_tram_xang_ten ON TRAM_XANG(ten);
CREATE INDEX idx_giao_dich_thoi_gian ON GIAO_DICH(thoi_gian);
CREATE INDEX idx_giao_dich_hang_hoa ON GIAO_DICH(hang_hoa_id);
CREATE INDEX idx_giao_dich_tru_bom_thoi_gian ON GIAO_DICH(tru_bom_id, thoi_gian);
CREATE INDEX idx_giao_dich_tram_xang_hang_hoa ON GIAO_DICH(tram_xang_id, hang_hoa_id);

