import Users from './Users';
import Instruments from './Instruments';


const sheets = [
    {
        id: 1,
        title: 'Partition 1',
        sheetFile: './../assets/sheets.pdf',
        author: Users[1],
        instruments: [Instruments[0]],
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
    },
    {
        id: 2,
        title: 'Partition 2',
        sheetFile: './../assets/sheets.pdf',
        author: Users[0],
        instruments: [Instruments[4]],
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
    },
]

export default sheets;