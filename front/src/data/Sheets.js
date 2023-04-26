import Instruments from './Instruments';
import Users from './Users';


const sheets = [
    {
        id: 1,
        title: 'Partition 1',
        sheetFile: './../assets/sheets.pdf',
        author: Users[10],
        instruments: [Instruments[4], Instruments[1]],
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
    },
    {
        id: 2,
        title: 'Partition 2',
        sheetFile: './../assets/sheets.pdf',
        author: Users[0],
        instruments: [Instruments[0], Instruments[1], Instruments[4]],
        createdAt: '2020-01-02',
        updatedAt: '2020-01-02'
    },
    {
        id: 3,
        title: 'Partition 3',
        sheetFile: './../assets/sheets.pdf',
        author: Users[10],
        instruments: [Instruments[5], Instruments[1]],
        createdAt: '2020-01-03',
        updatedAt: '2020-01-03'
    },
]

export default sheets;