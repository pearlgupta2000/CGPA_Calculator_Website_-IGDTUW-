
$(()=>{
    let submit_branch=$('#submit_branch')
    let branch_sem=$('#branch_sem')
    let subjectsList=$('#subjects_list')
    let cgpa_button=$('#but_cgpa')
    let cgpa_with=$('#cgpa_with')
    let cgpa_without=$('#cgpa_without')
    let Allsubjects

    submit_branch.click(()=>{
        let _input = branch_sem.val()
        let splited_array=_input.split('_')
        let branch=splited_array[0]
        let sem=splited_array[1]
        cgpa_with.val('')
        cgpa_without.val('')
        fetch_subjects(sem,branch,function(subjects){
            Allsubjects=subjects
            document.getElementById("head_subjects_page").innerText=branch+'_'+sem;
            subjectsList.empty()
            for(subject of subjects){
                subjectsList.append(create_subject(subject))
            }
        })
       document.getElementById("invisible").style.display="block"
       window.location = "/#invisible";
    })  
    
    cgpa_button.click(()=>{
        console.log(Allsubjects)
        let total_marks=0;
        let total_credits=0;
        let marks_obtained=0;
        for (let index = 0; index < Allsubjects.length; index++) {
            let element = Allsubjects[index];
            let name=element.name
            let credit=element.credit
            let score=parseInt(($(`#${name}`)).val())
            // console.log(score)
            score=score*parseInt(credit)
            marks_obtained+=score
            total_credits+=credit
            total_marks+=(100*credit)
            // console.log(name,credit,score,marks_obtained,total_marks)
        }
        let cgpa_w=marks_obtained/total_credits
        // console.log(cgpa)
        cgpa_with.val(cgpa_w)
    })
})