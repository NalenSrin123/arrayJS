const allNews=[
    {
        'id' :1,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :2,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :3,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :4,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :5,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :6,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :7,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :8,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
    {
        'id' :9,
        'title':'តារាល្បីៗខាងរឿងអាក្រក់ទាំង 8 ដួងក្នុងវិស័យកម្សាន្តកូរ៉េ',
        'image':'https://cdn.sabay.com/cdn/media.sabay.com/media/internTeam/Rachana/Rachana001/6721e3cb061ab_1730274240_small.jpg'
    },
];
const newNews=document.querySelector('.col-xl-4');
const card=document.querySelectorAll('.col-xl-8 .row')[0];


const getNews=()=>{

    allNews.forEach(({id,title,image})=>{
        if(id==9){
            newNews.innerHTML=`
                 <div class="cards">
                        <div class="image">
                            <img class="w-100" src="${image}" alt="">
                        </div>
                        <div class="title bg-danger p-2">
                            <h4 class="text-light">${title}</h4>
                        </div>
                    </div>
            `;
        }else{
            card.innerHTML+=`
                <div class="col-3">
                    <div class="cards">
                        <div class="image">
                            <img class="w-100" src="${image}" alt="">
                        </div>
                        <div class="title p-2">
                            <p>${title}</p>
                        </div>
                    </div>
                </div>    
            `;
        }
    })
    
}
getNews()


