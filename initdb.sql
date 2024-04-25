INSERT INTO "Color" (color_hex, updated_date) VALUES 
('#816DFA', NOW()),
('#000000', NOW()),
('#B88E2F', NOW());

INSERT INTO "Size" ("name" , updated_date) VALUES
('XXS', NOW()),
('XS', NOW()),
('S', NOW()),
('MS', NOW()),
('M', NOW()),
('MT', NOW()),
('L', NOW()),
('XL', NOW()),
('XXL', NOW());

INSERT INTO "Category" ("name", image_link, updated_date) VALUES
('Dining', 'https://i.postimg.cc/XNcsnjHC/jantar.png', NOW()),
('Living', 'https://i.postimg.cc/Xq3x9mJq/sala.png', NOW()),
('Bedroom', 'https://i.postimg.cc/MTJY8N15/quarto.png', NOW());

INSERT INTO "Product" ("name" , sku , category_id , description , large_description , price , discount_price , discount_percent , is_new , image_link , other_images_link , updated_date) VALUES
('Syltherine', 'SYL-001-3500000-WHI', 1, 'Stylish cafe chair',
'The Syltherine cafe chair combines style and comfort with its elegant design. Ideal for modern cafes, it offers durability and sophistication, becoming an essential element for any contemporary setting.',
3500000, 2500000, 0.3, false, 'https://i.postimg.cc/Qtc09hjv/mesa.png', '', NOW()),

('Leviosa', 'LEV-002-2500000-WHI', 2, 'Stylish cafe chair',
'The Leviosa chair provides elegance and ergonomics for cafes. Its modern and comfortable design is perfect for relaxed moments. Ideal for those seeking an inviting atmosphere filled with style.',
2500000, null, null, false, 'https://i.postimg.cc/sDmH4j5r/cadeira.png', '', NOW()),

('Lolito', 'LOL-001-7000000-WHI', 1, 'Luxury big sofa',
'The Lolito sofa offers unparalleled luxury and comfort. With its spacious design and soft cushions, its perfect for relaxing in style. An essential piece for those seeking a touch of opulence in their living room.',
14000000, 7000000, 0.5, false, 'https://i.postimg.cc/kGcsss6c/sofa-grande.png', '', NOW()),

('Respira', 'RES-002-500000-BEI', 2, 'Outdoor bar table and stool',
'The Respira table and stool set is ideal for outdoor areas. Its sturdy and minimalist design seamlessly integrates into any outdoor environment, providing moments of leisure and relaxation with elegance.',
500000, null, null, true, 'https://i.postimg.cc/y8WjhFVm/sofa-sala.png', '', NOW()),

('Grifo', 'GRI-003-1500000-WHI', 3, 'Night lamp',
'The Grifo lamp adds charm and brightness to spaces. Its elegant design and soft light create a cozy atmosphere in any room. Perfect for adding a touch of sophistication to your bedroom or living room.',
1500000, null, null, false, 'https://i.postimg.cc/RV4bt66d/abajur.png', '', NOW()),

('Muggo', 'MUG-002-150000-BEI', 2, 'Small mug',
'The Muggo mug combines practicality and style. With its compact design and ergonomic handle, its perfect for daily use. A charming choice to enjoy your favorite beverages with comfort and elegance.',
1500000, null, null, true, 'https://i.postimg.cc/Z5gcwCR1/sofa.png', '', NOW()),

('Pingky', 'PIN-002-7000000-GRA', 2, 'Cute bed set',
'The Pingky bed set transforms any bedroom into a cozy retreat. Its charming design and soft textures provide a tranquil environment for rest and relaxation. Ideal for a serene and welcoming atmosphere.',
14000000, 7000000, 0.5, false, 'https://i.postimg.cc/DyvBZ9HY/sofa-grande2.png', '', NOW()),

('Potty', 'POT-002-500000-BEI', 2, 'Minimalist flower pot',
'The Potty vase adds a touch of elegance to any space. Its minimalist design and versatile size make it perfect for displaying your favorite plants. A charming option to add a touch of greenery and style to your home.',
500000, null, null, true, 'https://i.postimg.cc/3Jt9DLHr/sofa-pequeno.png', '', NOW()),

('Stellar Sofa', 'STE-002-9000000-BLU', 2, 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.',
9000000, null, null, false, 'https://i.postimg.cc/KYM5wx34/sofas.png', 'https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png;https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png;https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png;https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png', NOW()),

('Syltherine', 'SYL-001-3500000-WHI', 1, 'Stylish cafe chair',
'The Syltherine cafe chair combines style and comfort with its elegant design. Ideal for modern cafes, it offers durability and sophistication, becoming an essential element for any contemporary setting.',
3500000, 2500000, 0.3, false, 'https://i.postimg.cc/Qtc09hjv/mesa.png', '', NOW()),

('Leviosa', 'LEV-002-2500000-WHI', 2, 'Stylish cafe chair',
'The Leviosa chair provides elegance and ergonomics for cafes. Its modern and comfortable design is perfect for relaxed moments. Ideal for those seeking an inviting atmosphere filled with style.',
2500000, null, null, false, 'https://i.postimg.cc/sDmH4j5r/cadeira.png', '', NOW()),

('Lolito', 'LOL-001-7000000-WHI', 1, 'Luxury big sofa',
'The Lolito sofa offers unparalleled luxury and comfort. With its spacious design and soft cushions, its perfect for relaxing in style. An essential piece for those seeking a touch of opulence in their living room.',
14000000, 7000000, 0.5, false, 'https://i.postimg.cc/kGcsss6c/sofa-grande.png', '', NOW()),

('Respira', 'RES-002-500000-BEI', 2, 'Outdoor bar table and stool',
'The Respira table and stool set is ideal for outdoor areas. Its sturdy and minimalist design seamlessly integrates into any outdoor environment, providing moments of leisure and relaxation with elegance.',
500000, null, null, true, 'https://i.postimg.cc/y8WjhFVm/sofa-sala.png', '', NOW()),

('Grifo', 'GRI-003-1500000-WHI', 3, 'Night lamp',
'The Grifo lamp adds charm and brightness to spaces. Its elegant design and soft light create a cozy atmosphere in any room. Perfect for adding a touch of sophistication to your bedroom or living room.',
1500000, null, null, false, 'https://i.postimg.cc/RV4bt66d/abajur.png', '', NOW()),

('Muggo', 'MUG-002-150000-BEI', 2, 'Small mug',
'The Muggo mug combines practicality and style. With its compact design and ergonomic handle, its perfect for daily use. A charming choice to enjoy your favorite beverages with comfort and elegance.',
1500000, null, null, true, 'https://i.postimg.cc/Z5gcwCR1/sofa.png', '', NOW()),

('Pingky', 'PIN-002-7000000-GRA', 2, 'Cute bed set',
'The Pingky bed set transforms any bedroom into a cozy retreat. Its charming design and soft textures provide a tranquil environment for rest and relaxation. Ideal for a serene and welcoming atmosphere.',
14000000, 7000000, 0.5, false, 'https://i.postimg.cc/DyvBZ9HY/sofa-grande2.png', '', NOW()),

('Potty', 'POT-002-500000-BEI', 2, 'Minimalist flower pot',
'The Potty vase adds a touch of elegance to any space. Its minimalist design and versatile size make it perfect for displaying your favorite plants. A charming option to add a touch of greenery and style to your home.',
500000, null, null, true, 'https://i.postimg.cc/3Jt9DLHr/sofa-pequeno.png', '', NOW()),

('Stellar Sofa', 'STE-002-9000000-BLU', 2, 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.',
9000000, null, null, false, 'https://i.postimg.cc/KYM5wx34/sofas.png', 'https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png;https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png;https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png;https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png', NOW());


INSERT INTO "_ProductColor" ("A" , "B") VALUES
(1, 1),  (2, 1),  (3, 1),
(1, 2),  (2, 2),  (3, 2),
(1, 3),  (2, 3),  (3, 3),
(1, 4),  (2, 4),  (3, 4),
(1, 5),  (2, 5),  (3, 5),
(1, 6),  (2, 6),  (3, 6),
(1, 7),  (2, 7),  (3, 7),
(1, 8),  (2, 8),  (3, 8),
(1, 9),  (2, 9),  (3, 9),
(1, 10), (2, 10), (3, 10),
(1, 11), (2, 11), (3, 11),
(1, 12), (2, 12), (3, 12),
(1, 13), (2, 13), (3, 13),
(1, 14), (2, 14), (3, 14),
(1, 15), (2, 15), (3, 15),
(1, 16), (2, 16), (3, 16),
(1, 17), (2, 17), (3, 17),
(1, 18), (2, 18), (3, 18);

INSERT INTO "_ProductSize" ("A", "B") VALUES
(1, 2),  (1, 3),  (1, 5),  (1, 7),
(2, 2),  (2, 3),  (2, 5),  (2, 7),
(3, 2),  (3, 3),  (3, 5),  (3, 7),
(4, 2),  (4, 3),  (4, 5),  (4, 7),
(5, 2),  (5, 3),  (5, 5),  (5, 7),
(6, 2),  (6, 3),  (6, 5),  (6, 7),
(7, 2),  (7, 3),  (7, 5),  (7, 7),
(8, 2),  (8, 3),  (8, 5),  (8, 7),
(9, 2),  (9, 3),  (9, 5),  (9, 7),
(10, 2), (10, 3), (10, 5), (10, 7),
(11, 2), (11, 3), (11, 5), (11, 7),
(12, 2), (12, 3), (12, 5), (12, 7),
(13, 2), (13, 3), (13, 5), (13, 7),
(14, 2), (14, 3), (14, 5), (14, 7),
(15, 2), (15, 3), (15, 5), (15, 7),
(16, 2), (16, 3), (16, 5), (16, 7),
(17, 2), (17, 3), (17, 5), (17, 7),
(18, 2), (18, 3), (18, 5), (18, 7);

INSERT INTO "OurProducts" (product_id, updated_date) VALUES
(1, NOW()),
(2, NOW()),
(4, NOW()),
(5, NOW()),
(6, NOW()),
(7, NOW()),
(8, NOW()),
(9, NOW());

INSERT INTO "RelatedProducts" (product_id, updated_date) VALUES
(6, NOW()),
(2, NOW()),
(7, NOW()),
(1, NOW());

