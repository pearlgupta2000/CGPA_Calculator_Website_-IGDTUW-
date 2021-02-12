
function fetch_subjects(sem,branch,done){
    // console.log(done)
    if(sem == 1){
        $.get('/api/1_semester/',function(data){
            done(data)
        })
    }
    else if(sem == 2){
        $.get('/api/2_semester/',function(data){
            done(data)
        })
    }
    else{
        sem+='_semester'
        $.get(`/api/${sem}/${branch}`,function(data){
            done(data)
        })
    }
}

function create_subject(subj){
    return $(`
    <div class="col-6 p-1 mx-3 my-1">
    <label for="${subj.name}" class="form-label write">${subj.name}</label> 
    <input type="number" class="form-control" id="${subj.name}" aria-describedby="number" max="100" min="0"></input> 
    </div>
    `)
}
 
