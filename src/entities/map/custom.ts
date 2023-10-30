import { VectorCustomization } from "@yandex/ymaps3-types";

export const CUSTOMIZATION: VectorCustomization[] = [
  {
    types: "polyline",
    stylers: {
      scale: 0.35,
      lightness: 0.5,
    },
    elements: "geometry",
  },
  {
    tags: {
      any: ["admin", "urban_area", "poi", "land", "structure"],
    },
    types: "polygon",
    stylers: {
      color: "F9F7F2",
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["transit"],
    },
    types: ["polygon"],
    stylers: {
      color: "EDEBF290",
    },
  },
  {
    tags: {
      any: ["vegetation", "park"],
    },
    types: "polygon",
    stylers: {
      color: "#E6F2E3",
    },
  },
  {
    tags: {
      any: ["landscape"],
      none: ["land", "landcover", "urban_area"],
    },
    types: "polygon",
    stylers: {
      color: "E6F2E3",
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["water"],
    },
    types: ["polygon", "polyline"],
    stylers: {
      color: "dce9f5",
    },
  },
  {
    tags: {
      any: ["building", "fence"],
    },
    types: "polygon",
    stylers: [
      {
        color: "F3F0E7",
      },
      {
        zoom: [15, 16],
        color: "F2F0E660",
      },
      {
        zoom: [16, 17],
        color: "F2F0E690",
      },
      {
        zoom: [17, 18],
        color: "F2F0E6",
      },
    ],
  },
  {
    tags: {
      any: ["country"],
    },
    types: "polyline",
    stylers: {
      color: "999588",
      scale: 0.8,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["region"],
    },
    types: "polyline",
    stylers: {
      color: "B3B1A4",
      scale: 0.2,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["admin"],
      none: ["country", "region"],
    },
    types: "polyline",
    stylers: {
      color: "999588",
      scale: 0.1,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["road"],
      none: ["path", "crosswalk"],
    },
    types: "polyline",
    stylers: [
      {
        color: "ffffff",
        scale: 0.9,
      },
      {
        zoom: [5, 9],
        color: "E6E3D3",
      },
      {
        zoom: [9, 10],
        color: "#EDEBDF",
      },
      {
        zoom: [10, 12],
        color: "F2F0E4",
      },
      {
        zoom: [12, 13],
        color: "F7F5EB",
      },
      {
        zoom: [13, 14],
        color: "FAFAF2",
      },
    ],
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["road_3", "road_4"],
    },
    types: "polyline",
    stylers: {
      zoom: [8, 10],
      color: "E0DBC5",
      scale: 0.5,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["road_5"],
    },
    types: "polyline",
    stylers: {
      zoom: [10, 11],
      color: "E0DBC5",
      scale: 0.8,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["road_6"],
    },
    types: "polyline",
    stylers: {
      zoom: [11, 12],
      color: "E0DBC5",
      scale: 0.8,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["road_7", "road_limited", "road_unclassified"],
    },
    types: "polyline",
    stylers: {
      zoom: [13],
      color: "E0DBC5",
      scale: 0.8,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["road"],
    },
    types: "polyline",
    stylers: [
      {
        color: "D1CBAB",
        scale: 0.9,
      },
      {
        zoom: [8, 11],
        color: "E0DBC5",
        scale: 0.8,
      },
    ],
    elements: "geometry.outline",
  },
  {
    tags: {
      any: ["path"],
    },
    types: "polyline",
    stylers: {
      hue: "C3BC95",
      scale: 0.5,
      lightness: 0.2,
      saturation: 1,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["crosswalk"],
    },
    types: "polyline",
    stylers: {
      color: "D1CBAB",
      scale: 0.5,
      lightness: 0.2,
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["path"],
      none: ["structure"],
    },
    types: "polyline",
    stylers: {
      color: "00000000",
      scale: 0.5,
    },
    elements: "geometry.outline",
  },
  {
    tags: {
      any: ["poi"],
      none: ["park"],
    },
    types: "point",
    stylers: [
      {
        lightness: 0.4,
        saturation: -1,
      },
      {
        zoom: [0, 17],
        visibility: "off",
      },
    ],
    elements: "label.icon",
  },
  {
    tags: {
      any: ["poi"],
      none: ["park"],
    },
    types: "point",
    stylers: [
      {
        lightness: 0.4,
        saturation: -1,
      },
      {
        zoom: [0, 17],
        visibility: "off",
      },
    ],
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["poi"],
      none: ["park"],
    },
    types: "point",
    stylers: [
      {
        color: "ffffff40",
      },
      {
        zoom: [0, 17],
        visibility: "off",
      },
    ],
    elements: "label.text.outline",
  },
  {
    tags: {
      any: ["park"],
    },
    types: "point",
    stylers: {
      hue: "B0D2B7",
      lightness: 0.3,
      saturation: -0.3,
    },
    elements: "label.icon",
  },
  {
    tags: {
      any: ["park"],
    },
    types: "point",
    stylers: {
      hue: "A1C4AA",
      lightness: 0.3,
      saturation: -0.3,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["park"],
    },
    types: "point",
    stylers: {
      color: "ffffff40",
    },
    elements: "label.text.outline",
  },
  {
    tags: {
      all: ["road"],
    },
    types: "point",
    stylers: {
      scale: 0.9,
      lightness: 0.2,
    },
    elements: "label.icon",
  },
  {
    tags: {
      all: ["road"],
    },
    types: "point",
    stylers: {
      scale: 0.9,
    },
    elements: "label.text",
  },
  {
    tags: {
      any: ["entrance"],
    },
    types: "point",
    stylers: {
      scale: 1.05,
      lightness: 0.2,
      saturation: -1,
    },
  },
  {
    tags: {
      all: "transit_schema",
    },
    types: "polyline",
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      all: ["transit_line"],
    },
    types: "polyline",
    stylers: [
      {
        scale: 0.8,
        lightness: 0.35,
      },
      {
        zoom: [0, 11],
        visibility: "off",
      },
    ],
  },
  {
    tags: {
      any: ["transit"],
    },
    types: "point",
    stylers: {
      scale: 1,
      lightness: 0.15,
      saturation: 0.2,
    },
    elements: "label",
  },
  {
    tags: {
      any: ["transit_stop"],
    },
    types: "point",
    stylers: [
      {
        hue: "3796FA",
        scale: 1.2,
        lightness: 0.1,
        saturation: 0.4,
      },
      {
        zoom: [0, 17],
        scale: 1.3,
      },
    ],
    elements: "label.icon",
  },
  {
    tags: {
      any: ["transit_entrance"],
    },
    types: "point",
    stylers: [
      {
        scale: 1.2,
      },
      {
        zoom: [0, 17],
        scale: 1.3,
      },
    ],
    elements: "label.icon",
  },
  {
    tags: {
      any: ["country"],
    },
    types: "point",
    stylers: {
      color: "9E9983",
      scale: 0.85,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["locality"],
    },
    types: "point",
    stylers: {
      color: "5C5849",
      scale: 0.9,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["admin"],
    },
    types: "point",
    stylers: {
      color: "F9F7F2",
    },
    elements: "label.text.outline",
  },
  {
    tags: {
      any: ["locality"],
    },
    types: "point",
    stylers: {
      scale: 0.9,
      lightness: 0.2,
    },
    elements: "label.icon",
  },
  {
    tags: {
      any: ["district"],
    },
    types: "point",
    stylers: [
      {
        color: "a6a0a0",
        scale: 0.9,
      },
      {
        zoom: [14, 20],
        visibility: "off",
      },
    ],
    elements: "label.text",
  },
  {
    tags: {
      any: ["district"],
    },
    types: "point",
    stylers: {
      color: "F9F7F2",
    },
    elements: "label.text.outline",
  },
  {
    tags: {
      any: ["water"],
    },
    types: ["point", "polyline"],
    stylers: {
      color: "91A1B3",
      scale: 0.9,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["road", "road_1", "road_2"],
    },
    types: "polyline",
    stylers: {
      color: "75705E",
      scale: 0.8,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["road_3", "road_4"],
    },
    types: "polyline",
    stylers: {
      scale: 0.88,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: [
        "road_5",
        "road_6",
        "road_7",
        "road_limited",
        "road_unclassified",
        "road_minor",
        "path",
        "crosswalk",
        "road_construction",
      ],
    },
    types: "polyline",
    stylers: {
      scale: 0.95,
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["road"],
    },
    types: "polyline",
    stylers: {
      color: "ffffff",
    },
    elements: "label.text.outline",
  },
  {
    tags: {
      any: ["address"],
    },
    types: "point",
    stylers: {
      color: "C0BCAC",
    },
    elements: "label.text.fill",
  },
  {
    tags: {
      any: ["address"],
    },
    types: "point",
    stylers: {
      color: "CECABB00",
    },
    elements: "label.text.outline",
  },
  {
    tags: {
      any: ["admin", "landscape", "traffic_light", "structure"],
      none: [
        "country",
        "region",
        "locality",
        "district",
        "address",
        "entrance",
      ],
    },
    types: "point",
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: ["is_tunnel"],
    },
    types: "polyline",
    stylers: {
      color: "F9F7F2",
    },
    elements: "geometry.fill",
  },
  {
    tags: {
      any: ["is_tunnel"],
    },
    types: "polyline",
    stylers: {
      color: "D1CBAB",
    },
    elements: "geometry.outline",
  },
  {
    tags: {
      any: ["road", "is_tunnel"],
    },
    types: "polyline",
    stylers: [
      {
        color: "E0DBC5",
        scale: 1,
      },
      {
        zoom: [1, 16],
        visibility: "off",
      },
    ],
    elements: "geometry.fill.pattern",
  },
];
