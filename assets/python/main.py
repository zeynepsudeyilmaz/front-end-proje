import pandas as pd
import json 
# CSV dosyasını oku
""" df = pd.read_csv('waste_facility.csv')

# Veriyi JSON formatına dönüştür
json_verisi = df.to_json(orient='records')

# JSON verisini bir dosyaya yaz
with open('waste_facility.json', 'w') as json_dosyası:
    json_dosyası.write(json_verisi)

print("CSV dosyası başarıyla JSON formatına dönüştürüldü.") """

with open('waste_facility2.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
def fix_turkish_chars(text):
    text = text.replace('\u015e', 'Ş').replace('\u015f', 'ş') \
               .replace('\u011e', 'Ğ').replace('\u011f', 'ğ') \
               .replace('\u00c7', 'Ç').replace('\u00e7', 'ç') \
               .replace('\u00dc', 'Ü').replace('\u00fc', 'ü') \
               .replace('\u00d6', 'Ö').replace('\u00f6', 'ö') \
               .replace('\u0130', 'İ').replace('\u0131', 'ı')
    return text
for item in data:
    item['facility_name'] = fix_turkish_chars(item['facility_name'])
    item['address'] = fix_turkish_chars(item['address'])
    item['neighborhood_name'] = fix_turkish_chars(item['neighborhood_name'])
    item['county'] = fix_turkish_chars(item['county'])
    
with open('waste_facility2.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile, ensure_ascii=False, indent=4)