-- Natives Querys (for tests)
use db_api_praiagrande;
CREATE OR REPLACE VIEW vw_zoneGroup as
	SELECT ds_zone as "Zone", COUNT(nm_district) as "Quantity" 
		FROM  districts
	GROUP BY ds_zone;
    
SELECT * FROM vw_zoneGroup;