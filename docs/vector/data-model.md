# Вектор. Модель данных

## Атрибутивный состав слоёв

Описание полей по каждому слою. Бейджи указывают тип данных:
<span class="type-badge str">STR</span> текст ·
<span class="type-badge num">NUM</span> число ·
<span class="type-badge geom">GEOM</span> геометрия

---

## Структура слоёв векторных карт

Полное описание состава слоёв, используемых в векторных картах.

<a href="https://spdit-products-blocks-8961d6.gitlab-pages.2gis.io/" target="_blank" rel="noopener noreferrer">
  Структура слоёв векторных карт
</a>


### Стандартный набор слоёв

#### 🏙 Административные территории

<details class="layer-block" open>
<summary><span class="layer-name">City</span> <span class="geom-badge polygon">Polygon</span> <span class="layer-desc">— границы населённых пунктов</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Границы населённых пунктов</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Административные</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">3</span></div>
</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">City</span></td><td>Название населённого пункта</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

<details class="layer-block">
<summary><span class="layer-name">District</span> <span class="geom-badge polygon">Polygon</span> <span class="layer-desc">— административные районы</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Границы административных районов</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Административные</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">4</span></div>
</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">District</span></td><td>Название района</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">DistrictId</span></td><td>Идентификатор района, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

<details class="layer-block">
<summary><span class="layer-name">Division</span> <span class="geom-badge polygon">Polygon</span> <span class="layer-desc">— административные округа</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Границы округов</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Административные</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">4</span></div>
</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Division</span></td><td>Название округа</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор округа, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

<details class="layer-block">
<summary><span class="layer-name">LivingArea</span> <span class="geom-badge polygon">Polygon</span> <span class="layer-desc">— жилмассивы</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Жилмассивы</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Административные</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">4</span></div>
</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название жилмассива</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

<details class="layer-block">
<summary><span class="layer-name">Quarter</span> <span class="geom-badge polygon">Polygon</span> <span class="layer-desc">— кварталы</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Кварталы</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Административные</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">3</span></div>
</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Type</span></td><td>Тип квартала <details class="field-values"><summary>Показать все значения (22)</summary><ul><li>административная территория</li><li>взлётно-посадочные полосы</li><li>вспомогательные кварталы</li><li>газоны внутридворовые</li><li>гаражи</li><li>горнолыжные трассы</li><li>дачные территории</li><li>дорожное полотно / асфальт</li><li>жилые</li><li>зелёные насаждения</li><li>зимние развлечения</li><li>кварталы под мостами</li><li>кладбища</li><li>клумбы</li><li>парк</li><li>перроны</li><li>пешеходные территории</li><li>пирсы / причалы</li><li>растительность внутридворовая</li><li>растительность загородная</li><li>спортивные территории</li><li>территория предприятий</li><li>частный сектор</li></ul></details></td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

#### 🏠 Адресные и строительные объекты

<details class="layer-block">
  <summary>
    <span class="layer-name">House</span>
    <span class="geom-badge polygon">Polygon</span>
    <span class="layer-desc">— дома</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Дома</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Адресные объекты</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">27</span></div>
  </div>
  <div class="field-group">🆔 Идентификаторы</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">DistrictId</span></td><td>Идентификатор района, стаб</td></tr>
  </table>
  <div class="field-group">📝 Описание здания</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название здания</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Caption</span></td><td>Подпись здания</td></tr>
    <tr>
      <td><span class="type-badge str">STR</span></td>
      <td><span class="field-name">Type</span></td>
      <td>
        Тип здания
        <details class="field-values">
          <summary>Показать все значения (11)</summary>
          <ul>
            <li>административные сооружения</li>
            <li>вход в переход</li>
            <li>дома-новостройки</li>
            <li>дошкольные</li>
            <li>жилые дома</li>
            <li>известный по назначению</li>
            <li>киоски</li>
            <li>навес</li>
            <li>станция метро</li>
            <li>частные дома</li>
                    <li>школы</li>
          </ul>
        </details>
      </td>
    </tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Purpose</span></td><td>Назначение</td></tr>
  </table>
  <div class="field-group">🏗 Характеристики</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">PostIndex</span></td><td>Почтовый индекс</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Elevation</span></td><td>Максимальная этажность</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Entrance</span></td><td>Количество подъездов</td></tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td>
        <span class="field-name">Apartments</span>
        <span class="field-optional">опц.</span>
      </td>
      <td>
        Количество квартир
        <span class="field-note">Передаётся как дополнительный атрибут</span>
      </td>
    </tr>
  </table>
  <div class="field-group">📍 Привязка к территории</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">City</span></td><td>Название населённого пункта</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">District</span></td><td>Название района</td></tr>
  </table>
  <div class="field-group">🏷 Основной адрес</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Street</span></td><td>Название улицы и тип</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">StreetId1</span></td><td>Идентификатор улицы, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Number</span></td><td>Номер дома</td></tr>
  </table>

  <div class="field-group">🏷 Альтернативные адреса <span class="field-optional">опц.</span></div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Street2</span></td><td>Название улицы и тип</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">StreetId2</span></td><td>Идентификатор улицы, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Number2</span></td><td>Номер дома</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Street3</span></td><td>Название улицы и тип</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">StreetId3</span></td><td>Идентификатор улицы, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Number3</span></td><td>Номер дома</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Street4</span></td><td>Название улицы и тип</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">StreetId4</span></td><td>Идентификатор улицы, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Number4</span></td><td>Номер дома</td></tr>
  </table>
  <div class="field-group">🗺 Геометрия</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">Street</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— улицы</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Улицы</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Адресные объекты</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">5</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">StreetId</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название улицы</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">City</span></td><td>Название населённого пункта</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>    

#### 💧 Гидрография

<details class="layer-block">
  <summary>
    <span class="layer-name">RiverLine</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— реки линейные</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Реки линейные</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Гидрография</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">RiverPolygon</span>
    <span class="geom-badge polygon">Polygon</span>
    <span class="layer-desc">— реки площадные</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Реки площадные</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Гидрография</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">RiverDirect</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— направление течения</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Направление течения</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Гидрография</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">NameRiver</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— подписи рек</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Подписи рек</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Гидрография</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">3</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название реки</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

#### 🚉 Транспортная основа

<details class="layer-block">
  <summary>
    <span class="layer-name">Zven</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— ж/д полотно</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Ж/д полотно</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Транспортная основа</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">Bridge</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— мосты</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Мосты</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Транспортная основа</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">Tunnel</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— туннели</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Туннели</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Транспортная основа</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">RailwayStops</span>
    <span class="geom-badge point">Point</span>
    <span class="layer-desc">— остановки ЖД</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Остановки ЖД</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Транспортная основа</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">4</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

---

### Дополнительные слои

#### 🚪 Входы и доступность

<details class="layer-block">
  <summary>
    <span class="layer-name">HouseEnter</span>
    <span class="geom-badge point">Point</span>
    <span class="layer-desc">— вход в здание</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Вход в здание</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Входы и доступность</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">10</span></div>
  </div>
  <div class="field-group">🆔 Идентификаторы</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseEntId</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, стаб</td></tr>
  </table>
  <div class="field-group">📝 Описание входа</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название входа</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Numer</span></td><td>Номер подъезда</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Apartments</span></td><td>Диапазон квартир</td></tr>
  </table>
  <div class="field-group">🚪 Признаки доступности</div>
  <table class="layer-fields">
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">IsPrimary</span></td>
      <td>
        Главный вход
        <details class="field-values">
          <summary>Значения</summary>
          <ul><li><code>0</code> — неглавный</li><li><code>1</code> — главный</li></ul>
        </details>
      </td>
    </tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">IsPorch</span></td>
      <td>
        Признак подъезда
        <details class="field-values">
          <summary>Значения</summary>
          <ul><li><code>0</code> — нет</li><li><code>1</code> — да</li></ul>
        </details>
      </td>
    </tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">Intercom</span></td>
      <td>
        Наличие домофона
        <details class="field-values">
          <summary>Значения</summary>
          <ul><li><code>0</code> — нет</li><li><code>1</code> — да</li></ul>
        </details>
      </td>
    </tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">HasRamp</span></td>
      <td>
        Доступная среда
        <details class="field-values">
          <summary>Значения</summary>
          <ul><li><code>0</code> — нет</li><li><code>1</code> — да</li></ul>
        </details>
      </td>
    </tr>
  </table>
  <div class="field-group">🗺 Геометрия</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">HouseEnterDirection</span>
    <span class="geom-badge polyline">Polyline</span>
    <span class="layer-desc">— направление входа в здание</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Направление входа в здание</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Входы и доступность</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">3</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseEntId</span></td><td>Идентификатор входа в здание, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

<details class="layer-block">
<summary><span class="layer-name">Gateway</span> <span class="geom-badge point">Point</span> <span class="layer-desc">— проход-проезд</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Проход-проезд</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Входы и доступность</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">7</span></div>
</div>
<div class="field-group">🆔 Идентификатор</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
</table>
<div class="field-group">🚧 Типы ограждения и проезда</div>
<table class="layer-fields">
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">BarrType</span></td><td>Код типа ограждения<details class="field-values"><summary>Показать все значения (5)</summary><ul><li><code>0</code> — проход-проезд</li><li><code>1</code> — ворота</li><li><code>2</code> — шлагбаум</li><li><code>3</code> — турникет</li><li><code>4</code> — калитка</li></ul></details></td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">GatewType</span></td><td>Код типа проезда<details class="field-values"><summary>Показать значения</summary><ul><li><code>0</code> — центральный</li><li><code>1</code> — дополнительный</li><li><code>2</code> — служебный</li></ul></details></td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">PaymType</span></td><td>Код типа оплаты<details class="field-values"><summary>Показать значения</summary><ul><li><code>0</code> — бесплатный</li><li><code>1</code> — платный</li><li><code>2</code> — по пропускам</li></ul></details></td></tr>
</table>
<div class="field-group">📍 Координаты и геометрия</div>
<table class="layer-fields">
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

#### 🚌 Транспорт

<details class="layer-block">
<summary><span class="layer-name">TransportEdge</span> <span class="geom-badge polyline">Polyline</span> <span class="layer-desc">— транспортный граф</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полилиния / <code>Polyline</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Транспортный граф</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Транспорт</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">3</span></div>
</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Type</span></td><td>Тип звена</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

<details class="layer-block">
<summary><span class="layer-name">TransportStops</span> <span class="geom-badge point">Point</span> <span class="layer-desc">— остановки ОТ</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Остановки общественного транспорта</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Транспорт</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">8</span></div>
</div>
<div class="field-group">🆔 Идентификаторы</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">TrStopId</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">CityId</span></td><td>Идентификатор населённого пункта, стаб</td></tr>
</table>
<div class="field-group">📝 Описание остановки</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">TrType</span></td><td>Тип транспорта</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">TypeCode</span></td><td>Код типа остановки, сис-код</td></tr>
</table>
<div class="field-group">📍 Координаты и геометрия</div>
<table class="layer-fields">
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>

#### 🅿️ Парковки

<details class="layer-block">
<summary><span class="layer-name">ParkingsGround</span> <span class="geom-badge point">Point</span> <span class="layer-desc">— парковки наземные</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Парковки наземные</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Парковки</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">13</span></div>
</div>
<div class="field-group">🆔 Идентификаторы</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, к которому привязана парковка, стаб</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">ParkingTer</span></td><td>Привязка к территории парковок, сис-код</td></tr>
</table>
<div class="field-group">📝 Описание</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Purpose</span></td><td>Назначение</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Synonym</span></td><td>Текстовый синоним</td></tr>
</table>
<div class="field-group">📊 Параметры парковки</div>
<table class="layer-fields">
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">LevelCount</span></td><td>Количество уровней</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MinCpcty</span></td><td>Минимальная вместимость</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MaxCpcty</span></td><td>Максимальная вместимость</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Charged</span></td><td>Платность<details class="field-values"><summary>Значения</summary><ul><li><code>0</code> — бесплатная</li><li><code>1</code> — платная</li></ul></details></td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">ParkingAcc</span></td><td>Доступность<details class="field-values"><summary>Значения</summary><ul><li>общедоступная</li><li>для клиентов</li><li>для инвалидов</li></ul></details></td></tr>
</table>
<div class="field-group">📍 Координаты</div>
<table class="layer-fields">
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
</table>
</details>

<details class="layer-block">
<summary><span class="layer-name">ParkingsMultilevel</span> <span class="geom-badge point">Point</span> <span class="layer-desc">— парковки многоуровневые</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Парковки многоуровневые</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Парковки</span></div>
<div class="layer-meta-item"><span class="

#### 🅿️ Парковки

<details class="layer-block">
  <summary>
    <span class="layer-name">ParkingsGround</span>
    <span class="geom-badge point">Point</span>
    <span class="layer-desc">— парковки наземные</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Парковки наземные</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Парковки</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">13</span></div>
  </div>
  <div class="field-group">🆔 Идентификаторы</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, к которому привязана парковка, стаб</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">ParkingTer</span></td><td>Привязка к территории парковок, сис-код</td></tr>
  </table>
  <div class="field-group">📝 Описание</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Purpose</span></td><td>Назначение</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Synonym</span></td><td>Текстовый синоним</td></tr>
  </table>
  <div class="field-group">📊 Параметры парковки</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">LevelCount</span></td><td>Количество уровней</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MinCpcty</span></td><td>Минимальная вместимость</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MaxCpcty</span></td><td>Максимальная вместимость</td></tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">Charged</span></td>
      <td>
        Платность
        <details class="field-values">
          <summary>Значения</summary>
          <ul>
            <li><code>0</code> — бесплатная</li>
            <li><code>1</code> — платная</li>
          </ul>
        </details>
      </td>
    </tr>
    <tr>
      <td><span class="type-badge str">STR</span></td>
      <td><span class="field-name">ParkingAcc</span></td>
      <td>
        Доступность
        <details class="field-values">
          <summary>Значения</summary>
          <ul>
            <li>общедоступная</li>
            <li>для клиентов</li>
            <li>для инвалидов</li>
          </ul>
        </details>
      </td>
    </tr>
  </table>
  <div class="field-group">📍 Координаты</div>
  <table class="layer-fields">
    <div class="field-group">📍 Координаты</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">ParkingsMultilevel</span>
    <span class="geom-badge point">Point</span>
    <span class="layer-desc">— парковки многоуровневые</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Парковки многоуровневые</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Парковки</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">14</span></div>
  </div>
  <div class="field-group">🆔 Идентификаторы</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, к которому привязана парковка, стаб</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">ParkingTer</span></td><td>Привязка к территории парковок, сис-код</td></tr>
  </table>
  <div class="field-group">📝 Описание</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Purpose</span></td><td>Назначение</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Synonym</span></td><td>Текстовый синоним</td></tr>
  </table>
  <div class="field-group">📊 Параметры парковки</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">LevelCount</span></td><td>Количество уровней</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MinCpcty</span></td><td>Минимальная вместимость</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MaxCpcty</span></td><td>Максимальная вместимость</td></tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">Charged</span></td>
      <td>
        Платность
        <details class="field-values">
          <summary>Значения</summary>
          <ul>
            <li><code>0</code> — бесплатная</li>
            <li><code>1</code> — платная</li>
          </ul>
        </details>
      </td>
    </tr>
    <tr>
      <td><span class="type-badge str">STR</span></td>
      <td><span class="field-name">ParkingAcc</span></td>
      <td>
        Доступность
        <details class="field-values">
          <summary>Значения</summary>
          <ul>
            <li>общедоступная</li>
            <li>для клиентов</li>
            <li>для инвалидов</li>
          </ul>
        </details>
      </td>
    </tr>
  </table>
  <div class="field-group">📍 Координаты и геометрия</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>
<details class="layer-block">
  <summary>
    <span class="layer-name">ParkingsUnderground</span>
    <span class="geom-badge point">Point</span>
    <span class="layer-desc">— парковки подземные</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Парковки подземные</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Парковки</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">13</span></div>
  </div>
  <div class="field-group">🆔 Идентификаторы</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, к которому привязана парковка, стаб</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">ParkingTer</span></td><td>Привязка к территории парковок, сис-код</td></tr>
  </table>
  <div class="field-group">📝 Описание</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Purpose</span></td><td>Назначение</td></tr>
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Synonym</span></td><td>Текстовый синоним</td></tr>
  </table>
  <div class="field-group">📊 Параметры парковки</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">LevelCount</span></td><td>Количество уровней</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MinCpcty</span></td><td>Минимальная вместимость</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">MaxCpcty</span></td><td>Максимальная вместимость</td></tr>
    <tr>
      <td><span class="type-badge num">NUM</span></td>
      <td><span class="field-name">Charged</span></td>
      <td>
        Платность
        <details class="field-values">
          <summary>Значения</summary>
          <ul>
            <li><code>0</code> — бесплатная</li>
            <li><code>1</code> — платная</li>
          </ul>
        </details>
      </td>
    </tr>
    <tr>
      <td><span class="type-badge str">STR</span></td>
      <td><span class="field-name">ParkingAcc</span></td>
      <td>
        Доступность
        <details class="field-values">
          <summary>Значения</summary>
          <ul>
            <li>общедоступная</li>
            <li>для клиентов</li>
            <li>для инвалидов</li>
          </ul>
        </details>
      </td>
    </tr>
  </table>
  <div class="field-group">📍 Координаты</div>
  <table class="layer-fields">
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
    <tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
  </table>
</details>

<details class="layer-block">
  <summary>
    <span class="layer-name">ParkingTerritory</span>
    <span class="geom-badge polygon">Polygon</span>
    <span class="layer-desc">— территория парковок</span>
  </summary>
  <div class="layer-meta">
    <div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Полигон / <code>Polygon</code></span></div>
    <div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Территория парковок</span></div>
    <div class="layer-meta-item"><span class="label">Группа</span><span class="value">Парковки</span></div>
    <div class="layer-meta-item"><span class="label">Полей</span><span class="value">2</span></div>
  </div>
  <table class="layer-fields">
    <tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Id</span></td><td>Идентификатор, стаб</td></tr>
    <tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
  </table>
</details>

#### 📍 Объекты интереса

<details class="layer-block">
<summary><span class="layer-name">Sights</span> <span class="geom-badge point">Point</span> <span class="layer-desc">— достопримечательности</span></summary>
<div class="layer-meta">
<div class="layer-meta-item"><span class="label">Тип объекта</span><span class="value">Точка / <code>Point</code></span></div>
<div class="layer-meta-item"><span class="label">Содержание</span><span class="value">Достопримечательности</span></div>
<div class="layer-meta-item"><span class="label">Группа</span><span class="value">Объекты интереса</span></div>
<div class="layer-meta-item"><span class="label">Полей</span><span class="value">9</span></div>
</div>
<div class="field-group">🆔 Идентификаторы</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">SightId</span></td><td>Идентификатор, стаб</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">HouseId</span></td><td>Идентификатор здания, стаб</td></tr>
</table>
<div class="field-group">📝 Описание</div>
<table class="layer-fields">
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Name</span></td><td>Название</td></tr>
<tr><td><span class="type-badge str">STR</span></td><td><span class="field-name">Purpose</span></td><td>Назначение достопримечательности</td></tr>
</table>
<div class="field-group">📅 Сезонность</div>
<table class="layer-fields">
<tr><td><span class="type-badge date">DATE</span></td><td><span class="field-name">StartDate</span></td><td>Дата начала сезона</td></tr>
<tr><td><span class="type-badge date">DATE</span></td><td><span class="field-name">EndDate</span></td><td>Дата окончания сезона</td></tr>
</table>
<div class="field-group">📍 Координаты и геометрия</div>
<table class="layer-fields">
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">X</span></td><td>Координата X</td></tr>
<tr><td><span class="type-badge num">NUM</span></td><td><span class="field-name">Y</span></td><td>Координата Y</td></tr>
<tr><td><span class="type-badge geom">GEOM</span></td><td><span class="field-name">Shape</span></td><td>Геометрия объекта</td></tr>
</table>
</details>