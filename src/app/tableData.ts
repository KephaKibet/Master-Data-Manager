
// testing table render
export interface Element {
  ERPNumber: string;
  state: string;
  descriptor: string;
  shortFormatDescription: string;
  purchaseOrderDescription: string;
  insertedAt:string
}

export const ELEMENT_DATA: Element[] = [
  {
  "ERPNumber": "E387144",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;KN 3068 PP AS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: KN 3068 PP AS SKF",
  "insertedAt": "2021-11-01 15:32:52.370"
},
{
  "ERPNumber": "016332",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;5375-31E SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 5375-31E SKF",
  "insertedAt": "2021-10-31 18:40:09.967"
},
{
  "ERPNumber": "917210",
  "state": "Active",
  "descriptor": "WRENCH SET, ALLEN",
  "shortFormatDescription": "WRENCH SET ALLN;FUH1473,BALL,12",
  "purchaseOrderDescription": "WRENCH SET, ALLEN; REFERENCE NO: FUH1473, TYPE: BALL, SIZE RANGE: , SET QUANTITY: 12",
  "insertedAt": "2023-02-23 21:12:15.783"
},
{
  "ERPNumber": "90002377",
  "state": "Active",
  "descriptor": "WRENCH SET, ALLEN",
  "shortFormatDescription": "WRENCH SET ALLN;FUH1473,BALL,12",
  "purchaseOrderDescription": "WRENCH SET, ALLEN; REFERENCE NO: FUH1473, TYPE: BALL, SIZE RANGE: , SET QUANTITY: 12",
  "insertedAt": "2021-11-02 09:19:01.167"
},
{
  "ERPNumber": "E135056",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;",
  "purchaseOrderDescription": "BEARING, BALL; BRG:BALL,POM ROUND,22X8X7MM,POM ROUND,60; ",
  "insertedAt": "2021-10-30 11:06:29.867"
},
{
  "ERPNumber": "030722",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;2213/C3 SKF,2213 C3",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 2213/C3 SKF",
  "insertedAt": "2021-10-30 12:48:36.517"
},
{
  "ERPNumber": "030577",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;LBE 40 UU IKO",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: LBE 40 UU IKO, LINEAR; ",
  "insertedAt": "2021-11-03 09:18:55.440"
},
{
  "ERPNumber": "238905",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;ELECTRONIC COMPACT,MZ-TD118",
  "purchaseOrderDescription": "BALLAST, LAMP; SERIAL NO: 24138829,  TYPE: ELECTRONIC COMPACT LAMP ACCOMMODATION QUANTITY: 1 LAMP STYLE: COOL WHITE 4 PINS BALLAST STYLE: DIMMABLE 1XTC-TE POWER: 18 W POTENTIAL: 220 VOLT LENGTH: 80 MM WIDTH: 40 MM HEIGHT: 20 MM, SUPPL P/N: MZ-TD118",
  "insertedAt": "2021-11-02 15:24:47.547"
},
{
  "ERPNumber": "030617",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6014 2RS SKF,P/LINER,,DIFF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6014 2RS SKF, MACHINE NO: M/BENZ, MODEL NO: P/LINER,, SPECIFICATION: DIFF",
  "insertedAt": "2021-11-01 15:23:00.443"
},
{
  "ERPNumber": "ES0000578",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6208 2Z SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6208 2Z SKF",
  "insertedAt": "2021-10-30 13:16:07.930"
},
{
  "ERPNumber": "030543",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6208 2Z SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6208 2Z SKF",
  "insertedAt": "2021-10-30 13:16:07.930"
},
{
  "ERPNumber": "011299",
  "state": "Active",
  "descriptor": "KIT, VALVE REPAIR",
  "shortFormatDescription": "KIT VLV REPR;BALL,COCK VALVE",
  "purchaseOrderDescription": "KIT, VALVE REPAIR; MODEL NO: MIXOMAT,  TYPE: BALL APPLICATION: COCK VALVE",
  "insertedAt": "2021-10-30 17:59:37.943"
},
{
  "ERPNumber": "ES0370255",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6000 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6000 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2023-02-22 09:52:07.557"
},
{
  "ERPNumber": "E120217",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6000 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6000 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2021-11-03 09:06:58.863"
},
{
  "ERPNumber": "247691",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6000 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6000 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2023-02-21 10:11:48.727"
},
{
  "ERPNumber": "E119912",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;2208 ETN9 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 2208 ETN9 SKF",
  "insertedAt": "2021-10-30 04:33:05.560"
},
{
  "ERPNumber": "E0044692",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;A3892690844 DAIMLER CHRYSLER",
  "purchaseOrderDescription": "BALL; OEM P/N: A3892690844 DAIMLER CHRYSLER, MACHINE NO: M/BENZ, MODEL NO: ATEGO, ACTROS, ATEGO, ATEGO, ACTROS, ATEGO",
  "insertedAt": "2021-10-30 20:11:51.763"
},
{
  "ERPNumber": "044692",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;A3892690844 DAIMLER CHRYSLER",
  "purchaseOrderDescription": "BALL; OEM P/N: A3892690844 DAIMLER CHRYSLER, MACHINE NO: M/BENZ, MODEL NO: ATEGO, ACTROS, ATEGO, ATEGO, ACTROS, ATEGO",
  "insertedAt": "2021-10-30 20:11:51.763"
},
{
  "ERPNumber": "006800",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;100104B O&H,VENT, BALL POINT,163MM",
  "purchaseOrderDescription": "TUBE; OEM P/N: 100104B O&H,  TYPE: VENT, BALL POINT LENGTH: 163 MM MATERIAL: SS, MNFR DRAWING: 20018 REV 0 ",
  "insertedAt": "2021-10-30 08:50:17.887"
},
{
  "ERPNumber": "E0006800",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;100104B O&H,VENT, BALL POINT,163MM",
  "purchaseOrderDescription": "TUBE; OEM P/N: 100104B O&H,  TYPE: VENT, BALL POINT LENGTH: 163 MM MATERIAL: SS, MNFR DRAWING: 20018 REV 0 ",
  "insertedAt": "2021-10-30 08:50:17.887"
},
{
  "ERPNumber": "006800",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;100104B O&H,VENT, BALL POINT,163MM",
  "purchaseOrderDescription": "TUBE; OEM P/N: 100104B O&H,  TYPE: VENT, BALL POINT LENGTH: 163 MM MATERIAL: SS, MNFR DRAWING: 20018 REV 0 ",
  "insertedAt": "2021-10-30 08:50:17.887"
},
{
  "ERPNumber": "006800",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;100104B O&H,VENT, BALL POINT,163MM",
  "purchaseOrderDescription": "TUBE; OEM P/N: 100104B O&H,  TYPE: VENT, BALL POINT LENGTH: 163 MM MATERIAL: SS, MNFR DRAWING: 20018 REV 0 ",
  "insertedAt": "2022-04-04 07:34:32.263"
},
{
  "ERPNumber": "E0395493",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;0400304711 KRONES",
  "purchaseOrderDescription": "BEARING, BALL; OEM P/N: 0400304711 KRONES",
  "insertedAt": "2023-03-14 15:41:49.740"
},
{
  "ERPNumber": "E0078638",
  "state": "Active",
  "descriptor": "HANDRAIL",
  "shortFormatDescription": "HANDRAIL;MST40 ANDREW MENTIS,STANCHION",
  "purchaseOrderDescription": "HANDRAIL; OCM P/N: MST40 ANDREW MENTIS, TYPE: STANCHION, MATERIAL: MS, DIMENSIONS: 500X500X42.9X2.5 MM, USAGE LOCATION: RAILING, BALL TYPE WELDED CONSTRUCTION; ",
  "insertedAt": "2021-10-30 11:35:58.723"
},
{
  "ERPNumber": "030610",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;GE 50 KRR-B INA",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: GE 50 KRR-B INA",
  "insertedAt": "2021-10-30 19:55:43.887"
},
{
  "ERPNumber": "914483",
  "state": "Active",
  "descriptor": "DISINFECTANT",
  "shortFormatDescription": "DISINFECTANT;TOILET BALLS,5 PIECE,200G",
  "purchaseOrderDescription": "DISINFECTANT;  TYPE: TOILET BALLS UNIT PACKAGE TYPE: 5 PIECE PACKAGE WEIGHT: 200 G",
  "insertedAt": "2021-11-02 14:54:29.157"
},
{
  "ERPNumber": "099377",
  "state": "Active",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;4335039125 TOYOTA,JOINT",
  "purchaseOrderDescription": "JOINT, BALL; OEM P/N: 4335039125 TOYOTA,  CONNECTION: JOINT MATERIAL: STEEL APPLICATION: BALL, UPPER",
  "insertedAt": "2021-11-02 02:26:56.403"
},
{
  "ERPNumber": "099377",
  "state": "Active",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;4335039125 TOYOTA,JOINT",
  "purchaseOrderDescription": "JOINT, BALL; OEM P/N: 4335039125 TOYOTA,  CONNECTION: JOINT MATERIAL: STEEL APPLICATION: BALL, UPPER",
  "insertedAt": "2021-11-02 02:26:56.403"
},
{
  "ERPNumber": "ES0002230",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;TR-SA206 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: TR-SA206 SKF",
  "insertedAt": "2021-10-30 12:32:11.337"
},
{
  "ERPNumber": "007671",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6804 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6804 SKF",
  "insertedAt": "2022-11-29 06:18:58.770"
},
{
  "ERPNumber": "007671",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6804 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6804 SKF",
  "insertedAt": "2022-11-29 06:18:58.770"
},
{
  "ERPNumber": "007671",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6804 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6804 SKF",
  "insertedAt": "2022-11-29 06:18:58.770"
},
{
  "ERPNumber": "E0132085",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;3/4 INCH 3 PIECE BALL VALVE",
  "purchaseOrderDescription": "VALVE, BALL;  VALVE SIZE: 3/4 IN BODY MATERIAL: SS 316 OPERATED: LEVER SPECIFICATION: 3 PIECE, SUPPL P/N: 3/4 INCH 3 PIECE BALL VALVE",
  "insertedAt": "2021-11-02 16:13:16.530"
},
{
  "ERPNumber": "E367687",
  "state": "Deleted",
  "descriptor": "NO OBJECT",
  "shortFormatDescription": "MALE/FEMALE BALL VALVE",
  "purchaseOrderDescription": "MALE/FEMALE BALL VALVE; ",
  "insertedAt": "2021-11-01 00:37:47.087"
},
{
  "ERPNumber": "ES0369182",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;606 EE C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 606 EE C3 SKF, TYPE: BALL",
  "insertedAt": "2023-02-20 15:05:57.727"
},
{
  "ERPNumber": "E350204",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;606 EE C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 606 EE C3 SKF, TYPE: BALL",
  "insertedAt": "2021-10-31 23:15:08.647"
},
{
  "ERPNumber": "108638",
  "state": "Active",
  "descriptor": "VALVE",
  "shortFormatDescription": "VALVE;150MM,FLANGED BS4504 EQUILIBRIUM",
  "purchaseOrderDescription": "VALVE;  VALVE SIZE: 150 MM CONNECTION: FLANGED BS4504 EQUILIBRIUM STYLE: BALL VALVE WITH ARM AND FLOAT SPECIFICATION: PN16",
  "insertedAt": "2021-11-02 17:16:05.703"
},
{
  "ERPNumber": "ES0383463",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;0000608203 ROBOPAC,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: 0000608203 ROBOPAC, TYPE: BALL",
  "insertedAt": "2023-03-07 17:14:15.383"
},
{
  "ERPNumber": "E363462",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;0000608203 ROBOPAC,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: 0000608203 ROBOPAC, TYPE: BALL",
  "insertedAt": "2021-11-02 04:42:11.623"
},
{
  "ERPNumber": "235788",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;0000608203 ROBOPAC,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: 0000608203 ROBOPAC, TYPE: BALL",
  "insertedAt": "2021-11-02 04:42:11.623"
},
{
  "ERPNumber": "S002298",
  "state": "Deleted",
  "descriptor": "PEN, REFILL",
  "shortFormatDescription": "PEN, REFILL;BLACK,MEDUIM, BALL,PARKER",
  "purchaseOrderDescription": "PEN, REFILL;  COLOR: BLACK POINT: MEDUIM, BALL TYPE: PARKER",
  "insertedAt": "2021-10-30 18:57:45.577"
},
{
  "ERPNumber": "008284",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;BALL POINT V/FILLING",
  "purchaseOrderDescription": "TUBE; BALL POINT V/FILLING; ",
  "insertedAt": "2021-10-31 09:30:47.640"
},
{
  "ERPNumber": "008284",
  "state": "Deleted",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;BALL POINT V/FILLING",
  "purchaseOrderDescription": "TUBE; BALL POINT V/FILLING; ",
  "insertedAt": "2021-10-31 09:30:47.640"
},
{
  "ERPNumber": "213650",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;61805 2RZ SKF,25MM,37MM,7",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 61805 2RZ SKF, SPECIFICATION: SEAL, LOW FRICTION,  INSIDE DIAMETER: 25 MM OUTSIDE DIAMETER: 37 MM WIDTH: 7 MM TYPE: DEEP GROOVE",
  "insertedAt": "2021-11-02 04:37:58.523"
},
{
  "ERPNumber": "213650",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;61805 2RZ SKF,25MM,37MM,7",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 61805 2RZ SKF, SPECIFICATION: SEAL, LOW FRICTION,  INSIDE DIAMETER: 25 MM OUTSIDE DIAMETER: 37 MM WIDTH: 7 MM TYPE: DEEP GROOVE",
  "insertedAt": "2021-11-02 04:37:58.523"
},
{
  "ERPNumber": "003885",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6309 SKF,OPEN,SINGLE,45MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6309 SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 100 MM WIDTH: 25 MM TYPE: CONRAD IBI: 13227",
  "insertedAt": "2021-11-02 00:44:05.950"
},
{
  "ERPNumber": "003885",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6309 SKF,OPEN,SINGLE,45MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6309 SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 100 MM WIDTH: 25 MM TYPE: CONRAD IBI: 13227",
  "insertedAt": "2021-11-02 00:44:05.950"
},
{
  "ERPNumber": "E0003885",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6309 SKF,OPEN,SINGLE,45MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6309 SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 100 MM WIDTH: 25 MM TYPE: CONRAD IBI: 13227",
  "insertedAt": "2021-11-02 00:44:05.950"
},
{
  "ERPNumber": "075274",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;61904 SKF,SINGLE,20MM,37MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 61904 SKF, OEM P/N: 0902498637 KRONES,  ROW: SINGLE INSIDE DIAMETER: 20 MM OUTSIDE DIAMETER: 37 MM WIDTH: 9 MM TYPE: DEEP GROOVE",
  "insertedAt": "2022-07-29 13:47:29.497"
},
{
  "ERPNumber": "075274",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;61904 SKF,SINGLE,20MM,37MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 61904 SKF, OEM P/N: 0902498637 KRONES,  ROW: SINGLE INSIDE DIAMETER: 20 MM OUTSIDE DIAMETER: 37 MM WIDTH: 9 MM TYPE: DEEP GROOVE",
  "insertedAt": "2022-07-29 13:47:29.497"
},
{
  "ERPNumber": "E380088",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;61844  SKF,BALL,220MM,270,24MM",
  "purchaseOrderDescription": "BEARING; OCM P/N: 61844  SKF, OEM P/N: 0405002301 KRONES, MODEL NO: K137032, TYPE: BALL, INSIDE DIAMETER: 220 MM, OUTSIDE DIAMETER: 270, WIDTH: 24 MM, STYLE: OPEN TYPE, SPECIFICATION: 220X270X24 MILLIMETER",
  "insertedAt": "2021-10-31 15:17:21.287"
},
{
  "ERPNumber": "095869",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;61844  SKF,BALL,220MM,270,24MM",
  "purchaseOrderDescription": "BEARING; OCM P/N: 61844  SKF, OEM P/N: 0405002301 KRONES, MODEL NO: K137032, TYPE: BALL, INSIDE DIAMETER: 220 MM, OUTSIDE DIAMETER: 270, WIDTH: 24 MM, STYLE: OPEN TYPE, SPECIFICATION: 220X270X24 MILLIMETER",
  "insertedAt": "2022-07-04 09:54:24.667"
},
{
  "ERPNumber": "095869",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;61844  SKF,BALL,220MM,270,24MM",
  "purchaseOrderDescription": "BEARING; OCM P/N: 61844  SKF, OEM P/N: 0405002301 KRONES, MODEL NO: K137032, TYPE: BALL, INSIDE DIAMETER: 220 MM, OUTSIDE DIAMETER: 270, WIDTH: 24 MM, STYLE: OPEN TYPE, SPECIFICATION: 220X270X24 MILLIMETER",
  "insertedAt": "2021-10-31 15:17:21.287"
},
{
  "ERPNumber": "095869",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;61844  SKF,BALL,220MM,270,24MM",
  "purchaseOrderDescription": "BEARING; OCM P/N: 61844  SKF, OEM P/N: 0405002301 KRONES, MODEL NO: K137032, TYPE: BALL, INSIDE DIAMETER: 220 MM, OUTSIDE DIAMETER: 270, WIDTH: 24 MM, STYLE: OPEN TYPE, SPECIFICATION: 220X270X24 MILLIMETER",
  "insertedAt": "2021-10-31 15:17:21.287"
},
{
  "ERPNumber": "ES0368965",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;61844  SKF,BALL,220MM,270,24MM",
  "purchaseOrderDescription": "BEARING; OCM P/N: 61844  SKF, OEM P/N: 0405002301 KRONES, MODEL NO: K137032, TYPE: BALL, INSIDE DIAMETER: 220 MM, OUTSIDE DIAMETER: 270, WIDTH: 24 MM, STYLE: OPEN TYPE, SPECIFICATION: 220X270X24 MILLIMETER",
  "insertedAt": "2023-02-20 12:42:56.533"
},
{
  "ERPNumber": "095869",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;61844  SKF,BALL,220MM,270,24MM",
  "purchaseOrderDescription": "BEARING; OCM P/N: 61844  SKF, OEM P/N: 0405002301 KRONES, MODEL NO: K137032, TYPE: BALL, INSIDE DIAMETER: 220 MM, OUTSIDE DIAMETER: 270, WIDTH: 24 MM, STYLE: OPEN TYPE, SPECIFICATION: 220X270X24 MILLIMETER",
  "insertedAt": "2021-10-31 15:17:21.287"
},
{
  "ERPNumber": "003837",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004 2Z SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004 2Z SKF",
  "insertedAt": "2021-10-30 08:18:53.867"
},
{
  "ERPNumber": "E0003837",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004 2Z SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004 2Z SKF",
  "insertedAt": "2021-10-30 08:18:53.867"
},
{
  "ERPNumber": "003837",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004 2Z SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004 2Z SKF",
  "insertedAt": "2021-10-30 08:18:53.867"
},
{
  "ERPNumber": "ES0363819",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004 2Z SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004 2Z SKF",
  "insertedAt": "2022-11-17 19:52:28.133"
},
{
  "ERPNumber": "009440",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;4305-ZZ SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 4305-ZZ SKF",
  "insertedAt": "2021-11-03 10:30:38.627"
},
{
  "ERPNumber": "206745",
  "state": "Active",
  "descriptor": "BALL, VALVE",
  "shortFormatDescription": "BALL VLV;COMPACT, SOCKETED,25MM,UPVC",
  "purchaseOrderDescription": "BALL, VALVE; SPECIFICATION: COMPACT, SOCKETED,  VALVE SIZE: 25 MM MATERIAL: UPVC",
  "insertedAt": "2021-10-30 02:16:48.090"
},
{
  "ERPNumber": "E0003945",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;GLE 30 KRR-B INA",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: GLE 30 KRR-B INA",
  "insertedAt": "2021-11-03 08:20:18.067"
},
{
  "ERPNumber": "ES0392670",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;GLE 30 KRR-B INA",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: GLE 30 KRR-B INA",
  "insertedAt": "2023-03-16 15:45:34.970"
},
{
  "ERPNumber": "146996",
  "state": "Active",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;341/189 PERKINS,GENERATOR",
  "purchaseOrderDescription": "JOINT, BALL; OCM P/N: 341/189 PERKINS, MODEL NO: DGBM2544, U11908T,  APPLICATION: GENERATOR",
  "insertedAt": "2022-02-22 12:53:12.217"
},
{
  "ERPNumber": "146996",
  "state": "Active",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;341/189 PERKINS,GENERATOR",
  "purchaseOrderDescription": "JOINT, BALL; OCM P/N: 341/189 PERKINS, MODEL NO: DGBM2544, U11908T,  APPLICATION: GENERATOR",
  "insertedAt": "2021-11-02 10:26:00.927"
},
{
  "ERPNumber": "078705",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;5308ZZ SKF,DOUBLE,5308 ZZ",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 5308ZZ SKF, SPECIFICATION: RECYCLED WATER PUMPRECYCLED WATER PUMP,  STYLE: DOUBLE SHIELD ROW: DOUBLE INSIDE DIAMETER: 40 MM OUTSIDE DIAMETER: 90 MM WIDTH: 36.5 MM TYPE: ANGULAR CONTACT",
  "insertedAt": "2021-11-02 12:50:48.383"
},
{
  "ERPNumber": "059946",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;7310 BW SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 7310 BW SKF",
  "insertedAt": "2021-10-30 09:59:34.130"
},
{
  "ERPNumber": "M000964",
  "state": "Active",
  "descriptor": "PEN, BALL POINT",
  "shortFormatDescription": "PEN BALL PNT;CC-1700,SS W/GIFT BOX",
  "purchaseOrderDescription": "PEN, BALL POINT; CATALOGUE NO: CC-1700,  TYPE: SS W/GIFT BOX",
  "insertedAt": "2021-11-02 17:55:37.687"
},
{
  "ERPNumber": "171568",
  "state": "Active",
  "descriptor": "GASKET",
  "shortFormatDescription": "GASKET;A100012654 VAN DER MOLEN,DN25",
  "purchaseOrderDescription": "GASKET; OEM P/N: A100012654 VAN DER MOLEN,  DIMENSIONS: DN25 APPLICATION: BALL FLOAT STEAM VALVE SPECIFICATION: CONA-SC DN25 12.631",
  "insertedAt": "2021-10-31 03:52:39.103"
},
{
  "ERPNumber": "030630",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004 2RS SKF",
  "insertedAt": "2021-11-02 02:58:52.713"
},
{
  "ERPNumber": "ES0014549",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004 2RS SKF",
  "insertedAt": "2021-11-02 02:58:52.713"
},
{
  "ERPNumber": "ES0002180",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6004.2RSR SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6004.2RSR SKF",
  "insertedAt": "2021-11-02 00:57:03.920"
},
{
  "ERPNumber": "E126652",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;CRIMPING HEAD CROWNER L2",
  "purchaseOrderDescription": "BALL; CRIMPING HEAD CROWNER L2; ",
  "insertedAt": "2021-10-31 21:41:10.050"
},
{
  "ERPNumber": "043110",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;UC 208 SKF,UC208,SINGLE",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: UC 208 SKF, ROW: SINGLE, TYPE: UC208",
  "insertedAt": "2021-10-30 11:04:53.623"
},
{
  "ERPNumber": "E0043110",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;UC 208 SKF,UC208,SINGLE",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: UC 208 SKF, ROW: SINGLE, TYPE: UC208",
  "insertedAt": "2021-10-30 11:04:53.623"
},
{
  "ERPNumber": "ES0364081",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;UC 208 SKF,UC208,SINGLE",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: UC 208 SKF, ROW: SINGLE, TYPE: UC208",
  "insertedAt": "2022-11-17 20:36:49.387"
},
{
  "ERPNumber": "015904",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;1240176",
  "purchaseOrderDescription": "BEARING, BALL; REFERENCE NO: 1240176",
  "insertedAt": "2021-11-02 23:12:01.623"
},
{
  "ERPNumber": "E369775",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;51305 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 51305 SKF, TYPE: BALL",
  "insertedAt": "2021-11-01 19:18:39.240"
},
{
  "ERPNumber": "ES0369605",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;51305 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 51305 SKF, TYPE: BALL",
  "insertedAt": "2023-02-20 20:03:48.837"
},
{
  "ERPNumber": "111222",
  "state": "Deleted",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;LINK,STEEL,RH,TRUCK",
  "purchaseOrderDescription": "JOINT, BALL;  CONNECTION: LINK MATERIAL: STEEL TYPE: RH APPLICATION: TRUCK",
  "insertedAt": "2021-11-01 08:02:33.000"
},
{
  "ERPNumber": "015789",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6006 2Z SKF,6006 ZZ",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6006 2Z SKF",
  "insertedAt": "2021-10-31 02:39:07.853"
},
{
  "ERPNumber": "073643",
  "state": "Deleted",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;44193,BALL MATL:NYLON",
  "purchaseOrderDescription": "VALVE, BALL; REFERENCE NO: 44193,  TRIM: BALL MATL:NYLON, MKV; ",
  "insertedAt": "2021-10-30 04:18:10.743"
},
{
  "ERPNumber": "044296",
  "state": "Deleted",
  "descriptor": "BALLAST",
  "shortFormatDescription": "BALLAST;1144160400 FRIGOGLASS1459010 ",
  "purchaseOrderDescription": "BALLAST; OCM P/N: 1144160400 FRIGOGLASS1459010 FRIGOGLASS9942510010 FRIGOGLASS, MODEL NO: HV141",
  "insertedAt": "2021-11-01 16:17:43.797"
},
{
  "ERPNumber": "044296",
  "state": "Deleted",
  "descriptor": "BALLAST",
  "shortFormatDescription": "BALLAST;1144160400 FRIGOGLASS1459010 ",
  "purchaseOrderDescription": "BALLAST; OCM P/N: 1144160400 FRIGOGLASS1459010 FRIGOGLASS9942510010 FRIGOGLASS, MODEL NO: HV141",
  "insertedAt": "2021-11-01 16:17:43.797"
},
{
  "ERPNumber": "E379138",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6307 AV25 NSK",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6307 AV25 NSK",
  "insertedAt": "2021-10-30 20:07:06.147"
},
{
  "ERPNumber": "M007392",
  "state": "Active",
  "descriptor": "TABLE",
  "shortFormatDescription": "TABLE;FOOSBALL,RECTANGULAR",
  "purchaseOrderDescription": "TABLE;  TYPE: FOOSBALL SHAPE: RECTANGULAR",
  "insertedAt": "2021-10-30 21:54:15.120"
},
{
  "ERPNumber": "159033",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;X58899736 KHS,FILLER",
  "purchaseOrderDescription": "BALL; OEM P/N: X58899736 KHS, MODEL NO: EM VF 60/15 V / E000047175, SPECIFICATION: FILLER",
  "insertedAt": "2021-11-01 01:38:21.533"
},
{
  "ERPNumber": "245847",
  "state": "Active",
  "descriptor": "LOCKOUT, SAFETY",
  "shortFormatDescription": "LOCKOUT SFTY;121540 BRADY,BALL VALVE,2-4",
  "purchaseOrderDescription": "LOCKOUT, SAFETY; REFERENCE NO: 121540 BRADY, TYPE: BALL VALVE, LOCK SIZE: 2-4 IN, MATERIAL: METAL, COLOR: RED, DIMENSIONS: 3.06-5.5 IN",
  "insertedAt": "2022-10-10 12:25:52.907"
},
{
  "ERPNumber": "127100",
  "state": "Active",
  "descriptor": "BALL, VALVE",
  "shortFormatDescription": "BALL VLV;SS,OPEN & CLOSE LEVER",
  "purchaseOrderDescription": "BALL, VALVE;  MATERIAL: SS, OPEN & CLOSE LEVER; ",
  "insertedAt": "2021-10-31 01:57:44.447"
},
{
  "ERPNumber": "127100",
  "state": "Active",
  "descriptor": "BALL, VALVE",
  "shortFormatDescription": "BALL VLV;SS,OPEN & CLOSE LEVER",
  "purchaseOrderDescription": "BALL, VALVE;  MATERIAL: SS, OPEN & CLOSE LEVER; ",
  "insertedAt": "2021-10-31 01:57:44.447"
},
{
  "ERPNumber": "127100",
  "state": "Active",
  "descriptor": "BALL, VALVE",
  "shortFormatDescription": "BALL VLV;SS,OPEN & CLOSE LEVER",
  "purchaseOrderDescription": "BALL, VALVE;  MATERIAL: SS, OPEN & CLOSE LEVER; ",
  "insertedAt": "2021-10-31 01:57:44.447"
},
{
  "ERPNumber": "E0125711",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;134468 O&H,BALL POINT VENT,7MM,P2",
  "purchaseOrderDescription": "TUBE; OEM P/N: 134468 O&H, TYPE: BALL POINT VENT, INSIDE DIAMETER: 7 MM, SPECIFICATION: P2, BALL POINT VENT TUBE, P2. USED AT 20018 FILLING TUBE POINT ON FILLER.  224383:  20018; ",
  "insertedAt": "2021-11-01 20:28:28.487"
},
{
  "ERPNumber": "ES0000979",
  "state": "Active",
  "descriptor": "TUBE",
  "shortFormatDescription": "TUBE;134468 O&H,BALL POINT VENT,7MM,P2",
  "purchaseOrderDescription": "TUBE; OEM P/N: 134468 O&H, TYPE: BALL POINT VENT, INSIDE DIAMETER: 7 MM, SPECIFICATION: P2, BALL POINT VENT TUBE, P2. USED AT 20018 FILLING TUBE POINT ON FILLER.  224383:  20018; ",
  "insertedAt": "2021-11-01 20:28:28.487"
},
{
  "ERPNumber": "E149293",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;20MM,42MM,12MM",
  "purchaseOrderDescription": "BEARING, BALL;  INSIDE DIAMETER: 20 MM OUTSIDE DIAMETER: 42 MM WIDTH: 12 MM",
  "insertedAt": "2021-11-01 11:20:19.537"
},
{
  "ERPNumber": "091790",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;G80790 00517 023 ALCOA",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: G80790 00517 023 ALCOA,  TYPE: AXIAL, MNFR DRAWING: 790 00620 013 REV 0 ",
  "insertedAt": "2021-11-02 21:09:41.480"
},
{
  "ERPNumber": "021178",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;2818 TZ2-65 PHILIPS,CHOKE",
  "purchaseOrderDescription": "BALLAST, LAMP; OCM P/N: 2818 TZ2-65 PHILIPS,  TYPE: CHOKE POWER: 58 W POTENTIAL: 240 VOLT-AMPS CAPACITANCE",
  "insertedAt": "2021-10-30 10:07:52.160"
},
{
  "ERPNumber": "021178",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;2818 TZ2-65 PHILIPS,CHOKE",
  "purchaseOrderDescription": "BALLAST, LAMP; OCM P/N: 2818 TZ2-65 PHILIPS,  TYPE: CHOKE POWER: 58 W POTENTIAL: 240 VOLT-AMPS CAPACITANCE",
  "insertedAt": "2021-10-30 10:07:52.160"
},
{
  "ERPNumber": "021178",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;2818 TZ2-65 PHILIPS,CHOKE",
  "purchaseOrderDescription": "BALLAST, LAMP; OCM P/N: 2818 TZ2-65 PHILIPS,  TYPE: CHOKE POWER: 58 W POTENTIAL: 240 VOLT-AMPS CAPACITANCE",
  "insertedAt": "2021-10-30 10:07:52.160"
},
{
  "ERPNumber": "E0192008",
  "state": "Active",
  "descriptor": "BALL, VALVE",
  "shortFormatDescription": "BALL VLV;25MM,25MM,COPPER,PSBVF25",
  "purchaseOrderDescription": "BALL, VALVE; VALVE SIZE: 25 MM, DIAMETER: 25 MM, MATERIAL: COPPER, SUPPL P/N: PSBVF25",
  "insertedAt": "2021-11-01 20:56:10.337"
},
{
  "ERPNumber": "084487",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6014 2Z SKF,BALL,70MM,20,6014 ZZ",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6014 2Z SKF, TYPE: BALL, INSIDE DIAMETER: 70 MM, OUTSIDE DIAMETER: 110 MM, WIDTH: 20 MM, SUPPL P/N: 6014 ZZ",
  "insertedAt": "2021-10-30 10:39:46.757"
},
{
  "ERPNumber": "084487",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6014 2Z SKF,BALL,70MM,20,6014 ZZ",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6014 2Z SKF, TYPE: BALL, INSIDE DIAMETER: 70 MM, OUTSIDE DIAMETER: 110 MM, WIDTH: 20 MM, SUPPL P/N: 6014 ZZ",
  "insertedAt": "2021-10-30 10:39:46.757"
},
{
  "ERPNumber": "E0084487",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6014 2Z SKF,BALL,70MM,20,6014 ZZ",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6014 2Z SKF, TYPE: BALL, INSIDE DIAMETER: 70 MM, OUTSIDE DIAMETER: 110 MM, WIDTH: 20 MM, SUPPL P/N: 6014 ZZ",
  "insertedAt": "2021-10-30 10:39:46.757"
},
{
  "ERPNumber": "ES0360834",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6014 2Z SKF,BALL,70MM,20,6014 ZZ",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6014 2Z SKF, TYPE: BALL, INSIDE DIAMETER: 70 MM, OUTSIDE DIAMETER: 110 MM, WIDTH: 20 MM, SUPPL P/N: 6014 ZZ",
  "insertedAt": "2022-11-17 21:51:24.443"
},
{
  "ERPNumber": "216425",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;4IN,CI",
  "purchaseOrderDescription": "VALVE, BALL;  VALVE SIZE: 4 IN BODY MATERIAL: CI",
  "insertedAt": "2021-11-01 10:45:07.667"
},
{
  "ERPNumber": "247786",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6200 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6200 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2023-02-24 13:58:59.680"
},
{
  "ERPNumber": "ES0374765",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6200 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6200 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2023-02-27 09:11:01.720"
},
{
  "ERPNumber": "E120238",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6200 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6200 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2021-11-02 07:43:01.590"
},
{
  "ERPNumber": "E368071",
  "state": "Deleted",
  "descriptor": "BALL, VALVE",
  "shortFormatDescription": "\"BALL VLV;BALL VALVES - 1 \"\" SS\"",
  "purchaseOrderDescription": "\"BALL, VALVE; BALL VALVES - 1 \"\" SS; \"",
  "insertedAt": "2021-10-31 05:33:09.147"
},
{
  "ERPNumber": "138206",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;0029000000 KRONES,3 WAY",
  "purchaseOrderDescription": "VALVE, BALL; OEM P/N: 0029000000 KRONES, MODEL NO: K682223, K682452, K682223, K682452,  STYLE: 3 WAY SPECIFICATION: 1 D10 PN63",
  "insertedAt": "2021-10-31 18:42:41.807"
},
{
  "ERPNumber": "138206",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;0029000000 KRONES,3 WAY",
  "purchaseOrderDescription": "VALVE, BALL; OEM P/N: 0029000000 KRONES, MODEL NO: K682223, K682452, K682223, K682452,  STYLE: 3 WAY SPECIFICATION: 1 D10 PN63",
  "insertedAt": "2021-10-31 18:42:41.807"
},
{
  "ERPNumber": "ES0371147",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1/2ININ,FEMALE THREAD,BRASS",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 1/2IN IN, SPECIFICATION: FEMALE THREAD,BRASS",
  "insertedAt": "2023-02-22 21:48:44.503"
},
{
  "ERPNumber": "E363573",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1/2ININ,FEMALE THREAD,BRASS",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 1/2IN IN, SPECIFICATION: FEMALE THREAD,BRASS",
  "insertedAt": "2021-11-02 01:58:04.793"
},
{
  "ERPNumber": "E0126712",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1 1/2IN,SS,316,BSP,09.9007",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 1 1/2 IN, BODY MATERIAL: SS, GRADE: 316, STYLE: BSP, SPECIFICATION: 3 PIECE, APPLICATION: CAUSTIC TANK, SUPPL P/N: 09.9007",
  "insertedAt": "2021-11-03 07:17:42.383"
},
{
  "ERPNumber": "126712",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1 1/2IN,SS,316,BSP,09.9007",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 1 1/2 IN, BODY MATERIAL: SS, GRADE: 316, STYLE: BSP, SPECIFICATION: 3 PIECE, APPLICATION: CAUSTIC TANK, SUPPL P/N: 09.9007",
  "insertedAt": "2022-04-29 08:46:13.183"
},
{
  "ERPNumber": "126712",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1 1/2IN,SS,316,BSP,09.9007",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 1 1/2 IN, BODY MATERIAL: SS, GRADE: 316, STYLE: BSP, SPECIFICATION: 3 PIECE, APPLICATION: CAUSTIC TANK, SUPPL P/N: 09.9007",
  "insertedAt": "2021-11-03 07:17:42.383"
},
{
  "ERPNumber": "ES0366515",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1 1/2IN,SS,316,BSP,09.9007",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 1 1/2 IN, BODY MATERIAL: SS, GRADE: 316, STYLE: BSP, SPECIFICATION: 3 PIECE, APPLICATION: CAUSTIC TANK, SUPPL P/N: 09.9007",
  "insertedAt": "2022-11-18 01:11:33.417"
},
{
  "ERPNumber": "ES0366960",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;RLS 6 2RS BTC SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: RLS 6 2RS BTC SKF",
  "insertedAt": "2022-11-18 07:09:40.187"
},
{
  "ERPNumber": "E0140006",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;RLS 6 2RS BTC SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: RLS 6 2RS BTC SKF",
  "insertedAt": "2021-11-03 09:45:19.077"
},
{
  "ERPNumber": "PN10118",
  "state": "Active",
  "descriptor": "BALLAST",
  "shortFormatDescription": "BALLAST;ELECTR,,220VGFV,220-24,VENDING",
  "purchaseOrderDescription": "BALLAST; ELECTR,,220VGFV,220-24,VENDING; ",
  "insertedAt": "2021-11-02 12:54:50.393"
},
{
  "ERPNumber": "ES0009052",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;STEEL, Q8 MM",
  "purchaseOrderDescription": "BALL; SPECIFICATION: STEEL, Q8 MM",
  "insertedAt": "2021-11-01 14:35:21.367"
},
{
  "ERPNumber": "046395",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;A0089813425 MERCEDES BENZ",
  "purchaseOrderDescription": "BEARING, BALL; OEM P/N: A0089813425 MERCEDES BENZ, MACHINE NO: M/BENZ, MODEL NO: ACTROS",
  "insertedAt": "2021-10-31 21:09:12.533"
},
{
  "ERPNumber": "E0046395",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;A0089813425 MERCEDES BENZ",
  "purchaseOrderDescription": "BEARING, BALL; OEM P/N: A0089813425 MERCEDES BENZ, MACHINE NO: M/BENZ, MODEL NO: ACTROS",
  "insertedAt": "2021-10-31 21:09:12.533"
},
{
  "ERPNumber": "097168",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6209 2RS SKF,DEEP GROOVE",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6209 2RS SKF,  STYLE: DEEP GROOVE ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 85 MM WIDTH: 19 MM CAGE MATERIAL: STL",
  "insertedAt": "2021-10-31 20:06:00.227"
},
{
  "ERPNumber": "097168",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6209 2RS SKF,DEEP GROOVE",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6209 2RS SKF,  STYLE: DEEP GROOVE ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 85 MM WIDTH: 19 MM CAGE MATERIAL: STL",
  "insertedAt": "2021-10-31 20:06:00.227"
},
{
  "ERPNumber": "081127",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6020 2RS SKF,DOUBLE SEAL",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6020 2RS SKF, STYLE: DOUBLE SEAL, ROW: SINGLE, INSIDE DIAMETER: 100 MM, OUTSIDE DIAMETER: 150 MM, WIDTH: 24 MM, TYPE: DEEP GROOVE",
  "insertedAt": "2021-11-03 10:56:57.750"
},
{
  "ERPNumber": "081127",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6020 2RS SKF,DOUBLE SEAL",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6020 2RS SKF, STYLE: DOUBLE SEAL, ROW: SINGLE, INSIDE DIAMETER: 100 MM, OUTSIDE DIAMETER: 150 MM, WIDTH: 24 MM, TYPE: DEEP GROOVE",
  "insertedAt": "2021-11-03 10:56:57.750"
},
{
  "ERPNumber": "ES0369190",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;608 2RSR SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 608 2RSR SKF, TYPE: BALL",
  "insertedAt": "2023-02-20 15:04:49.203"
},
{
  "ERPNumber": "E120414",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;608 2RSR SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 608 2RSR SKF, TYPE: BALL",
  "insertedAt": "2021-11-01 12:57:51.710"
},
{
  "ERPNumber": "136881",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;51205 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 51205 SKF",
  "insertedAt": "2021-10-30 20:32:50.830"
},
{
  "ERPNumber": "E0121012",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;QTIS E 2X58/220-240 OSRAM,2",
  "purchaseOrderDescription": "BALLAST, LAMP; OCM P/N: QTIS E 2X58/220-240 OSRAM,  TYPE: QUICKTRONIC, INSTANT START LAMP ACCOMMODATION QUANTITY: 2 LAMP STYLE: FLOURESCENT",
  "insertedAt": "2021-11-02 06:45:25.083"
},
{
  "ERPNumber": "018170",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;20W",
  "purchaseOrderDescription": "BALLAST, LAMP;  POWER: 20 W",
  "insertedAt": "2021-11-01 10:36:54.457"
},
{
  "ERPNumber": "ES0369621",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;BALL",
  "purchaseOrderDescription": "BEARING; TYPE: BALL",
  "insertedAt": "2023-02-20 20:05:20.557"
},
{
  "ERPNumber": "E0002798",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;BALL",
  "purchaseOrderDescription": "BEARING; TYPE: BALL",
  "insertedAt": "2021-11-02 15:46:40.550"
},
{
  "ERPNumber": "003853",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6203 SKF,OPEN,SINGLE,17MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6203 SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 17 MM OUTSIDE DIAMETER: 40 MM WIDTH: 12 MM TYPE: CONRAD IBI: 10930",
  "insertedAt": "2021-11-01 07:59:02.520"
},
{
  "ERPNumber": "E0003853",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6203 SKF,OPEN,SINGLE,17MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6203 SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 17 MM OUTSIDE DIAMETER: 40 MM WIDTH: 12 MM TYPE: CONRAD IBI: 10930",
  "insertedAt": "2021-11-01 07:59:02.520"
},
{
  "ERPNumber": "ES0012716",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6203 SKF,OPEN,SINGLE,17MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6203 SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 17 MM OUTSIDE DIAMETER: 40 MM WIDTH: 12 MM TYPE: CONRAD IBI: 10930",
  "insertedAt": "2021-11-01 07:59:02.520"
},
{
  "ERPNumber": "030838",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;20W",
  "purchaseOrderDescription": "BALLAST, LAMP;  POWER: 20 W",
  "insertedAt": "2021-11-01 16:47:24.157"
},
{
  "ERPNumber": "ES0003767",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;439439",
  "purchaseOrderDescription": "BEARING, BALL; MACHINE NO: BLOWER, 1C9, SUPPL P/N: 439439",
  "insertedAt": "2021-11-01 19:47:57.350"
},
{
  "ERPNumber": "194031",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6200 2RSH/C3 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6200 2RSH/C3 SKF,  TYPE: 6200-2RSH/C3",
  "insertedAt": "2021-11-01 02:20:09.190"
},
{
  "ERPNumber": "003842",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6009 2Z SKF,OPEN,SINGLE,45",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6009 2Z SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 75 MM WIDTH: 16 MM TYPE: CONRAD IBI: 13143",
  "insertedAt": "2021-10-31 07:13:16.387"
},
{
  "ERPNumber": "E0003842",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6009 2Z SKF,OPEN,SINGLE,45",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6009 2Z SKF,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 45 MM OUTSIDE DIAMETER: 75 MM WIDTH: 16 MM TYPE: CONRAD IBI: 13143",
  "insertedAt": "2021-10-31 07:13:16.387"
},
{
  "ERPNumber": "212451",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;3802-B-2Z-TVH-HLC FAG",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 3802-B-2Z-TVH-HLC FAG",
  "insertedAt": "2021-10-30 23:01:14.867"
},
{
  "ERPNumber": "236695",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;4602 52 00 2 ARMATUREN",
  "purchaseOrderDescription": "VALVE, BALL; OCM P/N: 4602 52 00 2 ARMATUREN, MODEL NO: 2019-675-MPDS",
  "insertedAt": "2021-10-31 14:04:47.357"
},
{
  "ERPNumber": "E116643",
  "state": "Active",
  "descriptor": "BALLAST",
  "shortFormatDescription": "BALLAST;",
  "purchaseOrderDescription": "BALLAST; ",
  "insertedAt": "2021-11-01 22:32:15.330"
},
{
  "ERPNumber": "ES0390015",
  "state": "Active",
  "descriptor": "BALLAST",
  "shortFormatDescription": "BALLAST;",
  "purchaseOrderDescription": "BALLAST; ",
  "insertedAt": "2023-03-15 15:15:01.353"
},
{
  "ERPNumber": "E365111",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;301104204162 KHS,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: 301104204162 KHS, TYPE: BALL",
  "insertedAt": "2021-10-31 21:36:57.290"
},
{
  "ERPNumber": "ES0370301",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;301104204162 KHS,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: 301104204162 KHS, TYPE: BALL",
  "insertedAt": "2023-02-22 11:22:33.970"
},
{
  "ERPNumber": "063171",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6030 002",
  "purchaseOrderDescription": "BEARING, BALL;  TYPE: 6030 002",
  "insertedAt": "2021-10-30 11:55:38.380"
},
{
  "ERPNumber": "063171",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6030 002",
  "purchaseOrderDescription": "BEARING, BALL;  TYPE: 6030 002",
  "insertedAt": "2021-10-30 11:55:38.380"
},
{
  "ERPNumber": "063171",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6030 002",
  "purchaseOrderDescription": "BEARING, BALL;  TYPE: 6030 002",
  "insertedAt": "2021-10-30 11:55:38.380"
},
{
  "ERPNumber": "240254",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;4,FLORESCENT,14W,28000308",
  "purchaseOrderDescription": "BALLAST, LAMP;  TYPE: TRIDONIC, DIGITAL DIMMABLE LAMP ACCOMMODATION QUANTITY: 4 LAMP STYLE: FLORESCENT BALLAST STYLE: ELECTRONIC POWER: 14 W POTENTIAL: 220 VOLT SPECIFICATION: PCA 4X14/24 T5EXCITE IP, SUPPL P/N: 28000308",
  "insertedAt": "2021-11-02 15:11:44.787"
},
{
  "ERPNumber": "102253",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;8.5MM,STEEL",
  "purchaseOrderDescription": "BALL;  DIAMETER: 8.5 MM MATERIAL: STEEL",
  "insertedAt": "2021-11-03 00:03:38.400"
},
{
  "ERPNumber": "235431",
  "state": "Active",
  "descriptor": "BALLAST, LAMP",
  "shortFormatDescription": "BALLAST LAMP;LED DRIVER,XITANIUM FP,150W",
  "purchaseOrderDescription": "BALLAST, LAMP; REFERENCE NO: 929000962206,  TYPE: LED DRIVER BALLAST STYLE: XITANIUM FP POWER: 150 W POTENTIAL: 230  VOLT",
  "insertedAt": "2021-10-30 22:46:27.567"
},
{
  "ERPNumber": "008052",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6203 SKF,DAUAV25,OPEN,17MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6203 SKF, REFERENCE NO: DAUAV25,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 17 MM OUTSIDE DIAMETER: 40 MM WIDTH: 12 MM TYPE: CONRAD IBI: 10930",
  "insertedAt": "2021-10-31 06:07:58.877"
},
{
  "ERPNumber": "008052",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6203 SKF,DAUAV25,OPEN,17MM",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6203 SKF, REFERENCE NO: DAUAV25,  STYLE: OPEN ROW: SINGLE INSIDE DIAMETER: 17 MM OUTSIDE DIAMETER: 40 MM WIDTH: 12 MM TYPE: CONRAD IBI: 10930",
  "insertedAt": "2021-10-31 06:07:58.877"
},
{
  "ERPNumber": "E374979",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;51203 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 51203 SKF, DIRECT; ",
  "insertedAt": "2021-11-02 18:40:53.800"
},
{
  "ERPNumber": "030633",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;51203 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 51203 SKF, DIRECT; ",
  "insertedAt": "2021-11-02 18:40:53.800"
},
{
  "ERPNumber": "E0075956",
  "state": "Active",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;MA3933300303 ",
  "purchaseOrderDescription": "JOINT, BALL; OEM P/N: MA3933300303 DAIMLER CHRYSLER",
  "insertedAt": "2021-11-02 22:44:27.720"
},
{
  "ERPNumber": "075956",
  "state": "Active",
  "descriptor": "JOINT, BALL",
  "shortFormatDescription": "JOINT, BALL;MA3933300303 ",
  "purchaseOrderDescription": "JOINT, BALL; OEM P/N: MA3933300303 DAIMLER CHRYSLER",
  "insertedAt": "2021-11-02 22:44:27.720"
},
{
  "ERPNumber": "118804",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1/2IN,10 BAR,BSP,BRASS",
  "purchaseOrderDescription": "VALVE, BALL;  VALVE SIZE: 1/2 IN DESIGN RATING: 10 BAR CONNECTION: BSP BODY MATERIAL: BRASS",
  "insertedAt": "2021-11-01 23:33:33.673"
},
{
  "ERPNumber": "118804",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1/2IN,10 BAR,BSP,BRASS",
  "purchaseOrderDescription": "VALVE, BALL;  VALVE SIZE: 1/2 IN DESIGN RATING: 10 BAR CONNECTION: BSP BODY MATERIAL: BRASS",
  "insertedAt": "2022-02-08 09:53:58.843"
},
{
  "ERPNumber": "E0118804",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1/2IN,10 BAR,BSP,BRASS",
  "purchaseOrderDescription": "VALVE, BALL;  VALVE SIZE: 1/2 IN DESIGN RATING: 10 BAR CONNECTION: BSP BODY MATERIAL: BRASS",
  "insertedAt": "2021-11-01 23:33:33.673"
},
{
  "ERPNumber": "118804",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;1/2IN,10 BAR,BSP,BRASS",
  "purchaseOrderDescription": "VALVE, BALL;  VALVE SIZE: 1/2 IN DESIGN RATING: 10 BAR CONNECTION: BSP BODY MATERIAL: BRASS",
  "insertedAt": "2021-11-01 23:33:33.673"
},
{
  "ERPNumber": "054449",
  "state": "Active",
  "descriptor": "TOOL",
  "shortFormatDescription": "TOOL;ALLEN KEY,BALL POINT,10MM",
  "purchaseOrderDescription": "TOOL;  TYPE: ALLEN KEY STYLE: BALL POINT DIMENSIONS: 10 MM",
  "insertedAt": "2021-10-31 18:33:35.620"
},
{
  "ERPNumber": "054449",
  "state": "Active",
  "descriptor": "TOOL",
  "shortFormatDescription": "TOOL;ALLEN KEY,BALL POINT,10MM",
  "purchaseOrderDescription": "TOOL;  TYPE: ALLEN KEY STYLE: BALL POINT DIMENSIONS: 10 MM",
  "insertedAt": "2021-10-31 18:33:35.620"
},
{
  "ERPNumber": "90001951",
  "state": "Active",
  "descriptor": "TOOL",
  "shortFormatDescription": "TOOL;ALLEN KEY,BALL POINT,10MM",
  "purchaseOrderDescription": "TOOL;  TYPE: ALLEN KEY STYLE: BALL POINT DIMENSIONS: 10 MM",
  "insertedAt": "2021-10-31 18:33:35.620"
},
{
  "ERPNumber": "054449",
  "state": "Active",
  "descriptor": "TOOL",
  "shortFormatDescription": "TOOL;ALLEN KEY,BALL POINT,10MM",
  "purchaseOrderDescription": "TOOL;  TYPE: ALLEN KEY STYLE: BALL POINT DIMENSIONS: 10 MM",
  "insertedAt": "2022-02-04 10:02:17.813"
},
{
  "ERPNumber": "ES0392001",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6201 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6201 2RS SKF",
  "insertedAt": "2023-03-16 13:57:26.177"
},
{
  "ERPNumber": "002914",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6201 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6201 2RS SKF",
  "insertedAt": "2021-10-30 11:12:18.920"
},
{
  "ERPNumber": "002914",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6201 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6201 2RS SKF",
  "insertedAt": "2021-10-30 11:12:18.920"
},
{
  "ERPNumber": "E0002914",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6201 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6201 2RS SKF",
  "insertedAt": "2021-10-30 11:12:18.920"
},
{
  "ERPNumber": "094222",
  "state": "Active",
  "descriptor": "TRAP, STEAM",
  "shortFormatDescription": "TRAP, STEAM;85115,BALL FLOAT",
  "purchaseOrderDescription": "TRAP, STEAM; REFERENCE NO: 85115,  TYPE: TYPE: UNA 14H DN 25 PN 25 CONNECTION: BALL FLOAT",
  "insertedAt": "2021-10-30 18:20:24.900"
},
{
  "ERPNumber": "151144",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;01115006701 SIDEL",
  "purchaseOrderDescription": "BALL; OEM P/N: 01115006701 SIDEL, MACHINE NO: BLOWER, MODEL NO: SBO 6/8, 10403, SBO 6/8, 10403, SBO 6/8, 10403,  TYPE: PNEUMATIC BASE SYSTEM",
  "insertedAt": "2021-11-02 00:11:22.440"
},
{
  "ERPNumber": "151144",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;01115006701 SIDEL",
  "purchaseOrderDescription": "BALL; OEM P/N: 01115006701 SIDEL, MACHINE NO: BLOWER, MODEL NO: SBO 6/8, 10403, SBO 6/8, 10403, SBO 6/8, 10403,  TYPE: PNEUMATIC BASE SYSTEM",
  "insertedAt": "2021-11-02 00:11:22.440"
},
{
  "ERPNumber": "ES0014500",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;01115006701 SIDEL",
  "purchaseOrderDescription": "BALL; OEM P/N: 01115006701 SIDEL, MACHINE NO: BLOWER, MODEL NO: SBO 6/8, 10403, SBO 6/8, 10403, SBO 6/8, 10403,  TYPE: PNEUMATIC BASE SYSTEM",
  "insertedAt": "2021-11-02 00:11:22.440"
},
{
  "ERPNumber": "E389503",
  "state": "Active",
  "descriptor": "SLEEVE",
  "shortFormatDescription": "SLEEVE;0000613040 MILLCHEM (PTY) LTD",
  "purchaseOrderDescription": "SLEEVE; OEM P/N: 0000613040 MILLCHEM (PTY) LTD, REFERENCE NO: ROB 2222, SERIAL NO: 2A17060229,  TYPE: BALL",
  "insertedAt": "2021-10-31 07:09:28.353"
},
{
  "ERPNumber": "ES0369479",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6212 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6212 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2023-02-20 19:14:12.787"
},
{
  "ERPNumber": "E369766",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6212 2RS C3 SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6212 2RS C3 SKF, TYPE: BALL",
  "insertedAt": "2021-11-02 11:33:16.510"
},
{
  "ERPNumber": "E126676",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;",
  "purchaseOrderDescription": "BALL; ",
  "insertedAt": "2021-10-30 21:38:01.193"
},
{
  "ERPNumber": "ES0390197",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;",
  "purchaseOrderDescription": "BALL; ",
  "insertedAt": "2023-03-15 16:05:35.477"
},
{
  "ERPNumber": "90010063",
  "state": "Active",
  "descriptor": "TIE, CABLE",
  "shortFormatDescription": "TIE CABL;ROLLER BALL,3.8MM,233MM,SS",
  "purchaseOrderDescription": "TIE, CABLE; TYPE: ROLLER BALL, DIAMETER RANGE: , WIDTH: 3.8 MM, LENGTH: 233 MM, MATERIAL: SS, NON RELEASABLE; ",
  "insertedAt": "2022-03-04 23:47:23.660"
},
{
  "ERPNumber": "112002",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;60MM,129MM,30MM",
  "purchaseOrderDescription": "BEARING, BALL;  INSIDE DIAMETER: 60 MM OUTSIDE DIAMETER: 129 MM WIDTH: 30 MM TYPE: SKF 21312E/C3",
  "insertedAt": "2021-11-02 11:48:31.740"
},
{
  "ERPNumber": "E0001098",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;STEEL SUPPORT PLATE",
  "purchaseOrderDescription": "BALL; STEEL SUPPORT PLATE; ",
  "insertedAt": "2021-11-02 02:58:32.150"
},
{
  "ERPNumber": "126694",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;301104205180 KHS,SINGLE,18",
  "purchaseOrderDescription": "BEARING, BALL; OEM P/N: 301104205180 KHS,  STYLE: DEEP GROOVE ROW: SINGLE INSIDE DIAMETER: 18 MM OUTSIDE DIAMETER: 24 MM WIDTH: 12 MM TYPE: 62022 RS",
  "insertedAt": "2021-11-03 09:08:57.593"
},
{
  "ERPNumber": "226288",
  "state": "Active",
  "descriptor": "LOCKOUT, SAFETY",
  "shortFormatDescription": "LOCKOUT SFTY;BALL VALVE,13-70 MM PIPES",
  "purchaseOrderDescription": "LOCKOUT, SAFETY; TYPE: BALL VALVE, LOCK SIZE: 13-70 MM PIPES, MATERIAL: POLYPROPYLENE, SPECIFICATION: ZC-F21",
  "insertedAt": "2022-07-09 22:08:09.607"
},
{
  "ERPNumber": "226288",
  "state": "Active",
  "descriptor": "LOCKOUT, SAFETY",
  "shortFormatDescription": "LOCKOUT SFTY;BALL VALVE,13-70 MM PIPES",
  "purchaseOrderDescription": "LOCKOUT, SAFETY; TYPE: BALL VALVE, LOCK SIZE: 13-70 MM PIPES, MATERIAL: POLYPROPYLENE, SPECIFICATION: ZC-F21",
  "insertedAt": "2021-11-02 22:55:47.897"
},
{
  "ERPNumber": "245751",
  "state": "Active",
  "descriptor": "VALVE, BALL",
  "shortFormatDescription": "VALVE, BALL;32MM,PPR",
  "purchaseOrderDescription": "VALVE, BALL; VALVE SIZE: 32 MM, BODY MATERIAL: PPR",
  "insertedAt": "2022-09-30 08:41:24.343"
},
{
  "ERPNumber": "M005652",
  "state": "Active",
  "descriptor": "BALL",
  "shortFormatDescription": "BALL;VIS-SB,SOCCER,60MM,FOAM STRESS",
  "purchaseOrderDescription": "BALL; CATALOGUE NO: VIS-SB,  TYPE: SOCCER DIAMETER: 60 MM MATERIAL: FOAM STRESS",
  "insertedAt": "2021-10-30 23:57:49.063"
},
{
  "ERPNumber": "E364599",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6204 2RS SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6204 2RS SKF, MODEL NO: KR74196",
  "insertedAt": "2021-10-30 13:02:51.153"
},
{
  "ERPNumber": "E120232",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6015 2RS SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6015 2RS SKF, TYPE: BALL",
  "insertedAt": "2021-10-31 03:20:33.780"
},
{
  "ERPNumber": "ES0368989",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;6015 2RS SKF,BALL",
  "purchaseOrderDescription": "BEARING; OCM P/N: 6015 2RS SKF, TYPE: BALL",
  "insertedAt": "2023-02-20 12:55:59.587"
},
{
  "ERPNumber": "021271",
  "state": "Deleted",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;7209B TVP,7209 BW",
  "purchaseOrderDescription": "BEARING, BALL; REFERENCE NO: 7209B TVP, SUPPL P/N: 7209 BW",
  "insertedAt": "2021-10-31 20:52:51.310"
},
{
  "ERPNumber": "194019",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;16005 2RS1 SKF,16005-2RS1",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 16005 2RS1 SKF,  TYPE: 16005-2RS1",
  "insertedAt": "2021-10-31 14:10:15.930"
},
{
  "ERPNumber": "E120333",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;LS16 AC UKN,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: LS16 AC UKN, TYPE: BALL",
  "insertedAt": "2021-10-30 22:46:07.873"
},
{
  "ERPNumber": "ES0369099",
  "state": "Active",
  "descriptor": "BEARING",
  "shortFormatDescription": "BEARING;LS16 AC UKN,BALL",
  "purchaseOrderDescription": "BEARING; OEM P/N: LS16 AC UKN, TYPE: BALL",
  "insertedAt": "2023-02-20 14:53:16.920"
},
{
  "ERPNumber": "E0096173",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6310 2RS1/C3 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6310 2RS1/C3 SKF",
  "insertedAt": "2021-10-30 07:42:55.767"
},
{
  "ERPNumber": "096173",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6310 2RS1/C3 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6310 2RS1/C3 SKF",
  "insertedAt": "2021-10-30 07:42:55.767"
},
{
  "ERPNumber": "096173",
  "state": "Active",
  "descriptor": "BEARING, BALL",
  "shortFormatDescription": "BEARING, BALL;6310 2RS1/C3 SKF",
  "purchaseOrderDescription": "BEARING, BALL; OCM P/N: 6310 2RS1/C3 SKF",
  "insertedAt": "2021-10-30 07:42:55.767"
}
];