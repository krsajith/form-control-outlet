
const list = [
    {
        country: "India",
        state: "Kerala",
        name: "Name 1",
        amount: 100
    },
    {
        country: "India",
        state: "Kerala",
        name: "Name 1",
        amount: 100
    },
    {
        country: "India",
        state: "Kerala",
        name: "Name 2",
        amount: 101
    },
    {
        country: "India",
        state: "Kerala",
        name: "Name 2",
        amount: 101
    },
    {
        country: "India",
        state: "Tamilnadu",
        name: "Name 1",
        amount: 100
    },
    {
        country: "India",
        state: "Tamilnadu",
        name: "Name 1",
        amount: 100
    },
    {
        country: "India",
        state: "Tamilnadu",
        name: "Name 2",
        amount: 101
    },
    {
        country: "India",
        state: "Tamilnadu",
        name: "Name 2",
        amount: 101
    },
    {
        country: "Other",
        state: "Kerala",
        name: "Name 1",
        amount: 100
    }

]

list.forEach((item, index) => {
    item.amount = index + 10
    item.name = "Name "+ index
}
);

function group(data, col) {
    const countryMap = new Map();
    for (const item of data) {
        const colValue = item[col];
        let entry = countryMap.get(colValue);
        if (!entry) {
            entry = { size: 0, data: [] };
            countryMap.set(colValue, entry);
        }
        entry.size++;
        entry.data.push(item);
    }
    return countryMap;
}


const countryGroup = group(list, 'country')

// console.log(countryGroup);

for (const key of countryGroup.keys()) {
    // console.log('key', key);
    const entry = countryGroup.get(key);
    // console.log(key,entry.data);
    const childEntry = group(entry.data, 'state');
    countryGroup.set(key, { size: entry.size, data: childEntry })
}

// console.log(Object.fromEntries(countryGroup));


const groupBy = ['country', 'state'];
const mainMap = new Map();

// for (const item of list) {
//     let valueMap = undefined;
//     for (const group of groupBy) {    
//         const value = item[group];
//         const valueMap = mainMap.get(value);
//         if(!valueMap){
//             valueMap = new Map();
//             mainMap.set(value,valueMap)
//         }

//         if(!entry)
//             valueMap.set(item[group],{value:item[group],rowCount:0});
//         entry.rowCount++;
//     }
// }

const values = [];
const keys = Object.keys(list[0]);
const groups = new Map();
for (const item of list) {
    for (const key of keys) {
        const currentValue = item[key];
        const groupIndex = groupBy.indexOf(key);
        if (groupIndex < 0) {
            values.push(currentValue)
            continue;
        }
        let group = groups;
        let count;
        for (let index = 0; index <= groupIndex; index++) {
            const groupKey = item[groupBy[index]];
            if (!group.has(groupKey)) {
                const value = { data: new Map(), rowCount: 0,value:groupKey };
                group.set(groupKey, value);
                values.push(value);
            }
            count = group.get(groupKey)
            group = group.get(groupKey).data;

        }

        count.rowCount++;
        // console.log(groupIndex,group);
        // if(!group){
        //     groups[groupIndex] = new Map();
        // }
    }
}

// console.log(groups.get('India').data.get('Kerala'));
console.log(groups);