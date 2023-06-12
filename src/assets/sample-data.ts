
const list: any[] = [
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
    item.name = "Name " + index
}
);

function group(data: any[], col: string) {
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

let values: any[] = [];
const keys = Object.keys(list[0]);
const groups = new Map();
let groupId = 1;
let lastGroup = undefined;
for (const item of list) {
    for (const key of keys) {
        const currentValue = item[key];
        const groupIndex = groupBy.indexOf(key);
        if (groupIndex < 0) {
            values.push({value: currentValue,parentId:lastGroup?.id })
            continue;
        }
        let group = groups;
        const groupArr = []
        let count;
        for (let index = 0; index <= groupIndex; index++) {
            const groupKey = item[groupBy[index]];
            if (!group.has(groupKey)) {
                let id = 'c' + (Math.random() * 10).toString(36).replace('.', '');
                if(groupArr[groupIndex-1] && groupIndex===index){
                  id = `${id} ${groupArr[groupIndex-1]?.id}`
                }
                lastGroup = {expanded:true, data: new Map(), rowCount: 0, value: groupKey,id:id};
                group.set(groupKey, lastGroup);
                values.push(lastGroup);
            }
            groupArr[index]=group.get(groupKey)
            count = group.get(groupKey)
            group = group.get(groupKey).data;

        }
        if(groupIndex>0) count.parentId = groupArr[groupIndex-1].id;
        count.rowCount++;
    }
}

console.log(groups);

const dummy = new Array(25000).fill({value:'Hello'});
values = [...values,...dummy];
console.log(values);

// console.log(groups.get('India').data.get('Kerala'));
export default values;