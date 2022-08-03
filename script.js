console.log('This is tut 55');

const data = [
    {
        name: 'Shyam Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },

    {
        name: 'Shubham Jauhari',
        age: 24,
        city: 'Uttar Perdesh',
        language: 'Java Script',
        framework: 'React Native',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },

    {
        name: 'Abhishek Mishra',
        age: 25,
        city: 'Barabanki',
        language: 'Css',
        framework: 'Bootstrap',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },

    {
        name: 'Arjit Dixit',
        age: 30,
        city: 'Itawa',
        language: 'Java',
        framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Shraddha Singh',
        age: 28,
        city: 'Haidergarh',
        language: 'Java Script',
        framework: 'Node Js',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },

    {
        name: 'Somiya Chutiya Chaturvedi',
        age: 26,
        city: 'Uttrakhand',
        language: 'Java',
        framework: 'Hibernate',
        image: 'https://randomuser.me/api/portraits/women/80.jpg'
    }
]

// Cv Iteretor
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }

        }
    };
}

const condidates = cvIterator(data);
nextCv();

const next = document.getElementById('next');
next.addEventListener('click', nextCv);

function nextCv() {
    const currentCondidate = condidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCondidate != undefined) {
        image.innerHTML = `<img src="${currentCondidate.image}">`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item list-group-item-secondary my-2">Name : ${currentCondidate.name}</li>     
        <li class="list-group-item list-group-item-primary my-2">${currentCondidate.age} years old</li>
        <li class="list-group-item list-group-item-success my-2">Lives in ${currentCondidate.city}</li>
        <li class="list-group-item list-group-item-danger my-2">Primarily works on ${currentCondidate.language}</li>
        <li class="list-group-item list-group-item-info my-2">Uses ${currentCondidate.framework} framework</li>
      </ul>`
        
    } else {
        alert('End of condidate applcation.');
        window.location.reload();
    }    
}

